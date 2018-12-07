export function convertProcessToLatestSpec(proc) {
    // convert v0.3 processes to v0.4 format
    if (typeof proc.id === 'undefined') {
        // name => id
        proc.id = proc.name;
        delete proc.name;
        // mime_type => media_type
        if (typeof proc.parameters === 'object') {
            for(var key in proc.parameters) {
                var param = proc.parameters[key];
                if (typeof param.mime_type !== 'undefined') {
                    param.media_type = param.mime_type;
                    delete param.mime_type;
                }
            }
        }
        if (typeof proc.returns.mime_type !== 'undefined') {
            proc.returns.media_type = proc.returns.mime_type;
            delete proc.returns.mime_type;
        }
        // exception object
        if (proc.exceptions) {
            for(var key in proc.exceptions) {
                if (typeof proc.exceptions[key].message === 'undefined') {
                    proc.exceptions[key].message = proc.exceptions[key].description;
                }
            }
        }
    }
    return proc;
}

export function signature(process, html = false) {
    var params = [];
    for(var name in process.parameters) {
        var p = process.parameters[name];
        var pType = dataType(p.schema, true);
        var req = (p.required ? '' : '?');
        var pStr;
        if (html) {
            pStr = '<span class="required">' + req + '</span><span class="data-type">' + htmlentities(pType) + '</span> <span class="param-name">' + name + "</span>";
        }
        else {
            pStr = req + pType + " " + name;
        }
        params.push(pStr);
    }
    var returns = dataType(process.returns.schema, true);
    var paramStr = "(" + params.join(", ") + ") : ";
    if (html) {
        return '<span class="process-name">' + process.id + '</span>' + paramStr + '<span class="data-type">' + htmlentities(returns) + "</span>";
    }
    else {
        return process.id + paramStr + returns;
    }
}

export function dataType(schema, short = false, level = 0, type = undefined) {
    level++;
    if (typeof schema.type === 'undefined') {
        schema.type = 'mixed';
    }
    if (typeof type === 'undefined') {
        type = schema.type;
    }
    if (Array.isArray(type)) {
        var types = [];
        for(var i in type) {
            types.push(dataType(schema, short, level, type[i]));
        }
        return types.join(short ? '|' : ', ');
    }
    else if (typeof type === 'string' && type.toLowerCase() === 'array' && typeof schema.items === 'object' && typeof schema.items.type !== 'undefined') {
        var arrType = "array<"+dataType(schema.items, short, level)+">";
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
}

function htmlentities(str) {
    return str.replace('<',"&lt;").replace('>',"&gt;");
}