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