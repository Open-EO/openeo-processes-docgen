import BaseConfig from './config.js';
import { MigrateProcesses } from '@openeo/js-commons';

var Utils = {

    normalizeProcesses: function(processes, apiVersion, sort) {
        if (!Array.isArray(processes) || processes.length == 0) {
            return [];
        }
        // Convert each to the latest spec version each
        processes = processes.map(p => MigrateProcesses.convertProcessToLatestSpec(p, apiVersion));
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