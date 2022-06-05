(function() {
    'use strict';
    var neogeoPocketSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return neogeoPocketSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = neogeoPocketSoftList;
    } else {
        window.gameSoft = {
            NGP: neogeoPocketSoftList
        };
    }
})();