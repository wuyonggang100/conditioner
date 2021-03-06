/**
 * @module monitors/multiple
 */
(function(undefined) {

    'use strict';

    var _shared = {
        triggered:false
    };

    var exports = {
        trigger:function(bubble){
            if (!_shared.triggered) {
                _shared.triggered = true;
            }
            setTimeout(function(){
                bubble();
            },500);
        },
        test:{
            'foo':function foo(){
                return true;
            },
            'bar':function bar(){
                return true;
            }
        }
    };

    // CommonJS
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = exports;
    }
    // AMD
    else if (typeof define === 'function' && define.amd) {
        define(function(){return exports;});
    }

}());