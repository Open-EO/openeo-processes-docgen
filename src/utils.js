import BaseConfig from './config.js';

var Utils = {

    normalizeProcesses: function(processes, sort) {
        // Normalize each process
        processes = processes.map(Utils.normalizeProcess.bind(this));
        // Sort processes
        if (sort === true) {
            processes.sort((a, b) => {
                var s1 = a.id.toLowerCase();
                var s2 = b.id.toLowerCase();
                return (s1 < s2 ? -1 : (s1 > s2 ? 1 : 0));
            });
        }
        return processes;
    },


    normalizeProcess: function(process) {
        // Compatibility for openEO API v0.3 and v0.4
        process = this.convertProcessToLatestSpec(process);

         // Fill parameter order
        if (!Array.isArray(process.parameter_order)) {
            process.parameter_order = [];
            for(var key in process.parameters) {
                process.parameter_order.push(key);
            }
        }

        var parameters = [];
        var order = [];
        for(var i in process.parameter_order) {
            var name = process.parameter_order[i];
            if (typeof process.parameters[name] === 'object') {
                var parameter = process.parameters[name];
                parameter.name = name;
                parameters.push(parameter);
                order.push(name);
            }
        }
        process.parameters = parameters;
        process.parameter_order = order;

        return process;
    },

    convertProcessToLatestSpec: function(process) {
        // convert v0.3 processes to v0.4 format
        if (typeof process.id === 'undefined') {
            // name => id
            process.id = process.name;
            delete process.name;
            // mime_type => media_type
            if (typeof process.parameters === 'object') {
                for(var key in process.parameters) {
                    var param = process.parameters[key];
                    if (typeof param.mime_type !== 'undefined') {
                        param.media_type = param.mime_type;
                        delete param.mime_type;
                    }
                }
            }
            if (typeof process.returns.mime_type !== 'undefined') {
                process.returns.media_type = process.returns.mime_type;
                delete process.returns.mime_type;
            }
            // exception object
            if (process.exceptions) {
                for(var key in process.exceptions) {
                    if (typeof process.exceptions[key].message === 'undefined') {
                        process.exceptions[key].message = process.exceptions[key].description;
                    }
                }
            }
            // examples object
            if (process.examples) {
                var examples = [];
                for(var key in process.examples) {
                    var old = process.examples[key];
                    var example = {
                        title: old.summary || key,
                        description: old.description
                    };
                    if (old.process_graph) {
                        example.process_graph = old.process_graph;
                    }
                    examples.push(example);
                }
                process.examplex = examples;
            }
        }
        return process;
    },

    signature: function(process, html = false) {
        var params = [];
        for(var i in process.parameters) {
            var p = process.parameters[i];
            var pType = this.dataType(p.schema, true);
            var req = (p.required ? '' : '?');
            var pStr;
            if (html) {
                pStr = '<span class="required">' + req + '</span><span class="data-type">' + this.htmlentities(pType) + '</span> <span class="param-name">' + p.name + "</span>";
            }
            else {
                pStr = req + pType + " " + p.name;
            }
            params.push(pStr);
        }
        var returns = this.dataType(process.returns.schema, true);
        var paramStr = "(" + params.join(", ") + ") : ";
        if (html) {
            return '<span class="process-name">' + process.id + '</span>' + paramStr + '<span class="data-type">' + this.htmlentities(returns) + "</span>";
        }
        else {
            return process.id + paramStr + returns;
        }
    },

    dataType: function(schema, short = false, level = 0, type = undefined) {
        if (this.isAnyType(schema)) {
            type = 'any';
        }
        if (typeof type === 'undefined') {
            type = schema.type;
        }
        if (typeof schema.oneOf !== 'undefined' || typeof schema.allOf !== 'undefined' || typeof schema.anyOf !== 'undefined') {
            if (short) {
                return 'mixed';
            }
            var choice = schema.oneOf || schema.allOf || schema.anyOf;
            var types = [];
            for(var i in choice) {
                types.push(this.dataType(choice[i], short, level));
            }
            return types.join(', ');
        }
        else if (Array.isArray(type)) {
            var types = [];
            for(var i in type) {
                types.push(this.dataType(schema, short, level, type[i]));
            }
            return types.join(short ? '|' : ', ');
        }
        else if (typeof type === 'string' && type.toLowerCase() === 'array' && typeof schema.items === 'object' && typeof schema.items.type !== 'undefined') {
            var arrType = "array<"+this.dataType(schema.items, short, level+1)+">";
            if (typeof schema.format === 'string') {
                if (level == 0) {
                    return schema.format + (short ? ":" + arrType : " ("+arrType+")");
                }
                else {
                    return schema.format;
                }
            }
            else {
                return arrType;
            }
        }
        else if (typeof type === 'string' && type.toLowerCase() === 'object' && typeof schema.format === 'string') {
            return schema.format + (short ? ":object" : " (object)");
        }
        return type;
    },

    isAnyType: function(schema) {
		return (typeof schema.type === 'undefined' && typeof schema.oneOf === 'undefined' && typeof schema.allOf === 'undefined' && typeof schema.anyOf === 'undefined');
    },

    htmlentities: function(str) {
        if (typeof str === 'string') {
            return str.replace('<',"&lt;").replace('>',"&gt;");
        }
        else {
            return str;
        }
    },

    setDefaults(config) {
        if (typeof config !== 'object') {
            return BaseConfig;
        }
        for(var key in BaseConfig) {
            if (typeof config[key] === 'undefined') {
                config[key] = BaseConfig[key];
            }
        }
        return config;
    }
};

export default Utils;