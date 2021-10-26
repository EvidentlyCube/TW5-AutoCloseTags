/*\
title: $:/plugins/EvidentlyCube/AutoCloseTags/simple.js
type: application/javascript
module-type: library

Extends simple text editor engine with the plugin functionality
\*/

(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";

    var Closer = require("$:/plugins/EvidentlyCube/AutoCloseTags/closer.js").Closer;
    var SimpleEngine = require("$:/core/modules/editor/engines/simple.js").SimpleEngine;

    function SimpleEngineExtended(options) {
        SimpleEngine.call(this,options);
        this._closer = new Closer( this.widget, this.domNode );
    }

    SimpleEngineExtended.prototype = Object.create(SimpleEngine.prototype);

    SimpleEngineExtended.prototype.constructor = SimpleEngineExtended;


    exports.SimpleEngineExtended = SimpleEngineExtended;
    $tw.modules.types.library["$:/core/modules/editor/engines/simple.js"].exports.SimpleEngine = SimpleEngineExtended;
})();