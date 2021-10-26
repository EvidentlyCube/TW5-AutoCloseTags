/*\
title: $:/plugins/EvidentlyCube/AutoCloseTags/framed.js
type: application/javascript
module-type: library

Extends framed text editor engine with the plugin functionality
\*/

(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";

    var Closer = require("$:/plugins/EvidentlyCube/AutoCloseTags/closer.js").Closer;
    var FramedEngine = require("$:/core/modules/editor/engines/framed.js").FramedEngine;

    function FramedEngineExtended(options) {
        FramedEngine.call(this,options);
        this._closer = new Closer( this.widget, this.domNode );
    }

    FramedEngineExtended.prototype = Object.create(FramedEngine.prototype);

    FramedEngineExtended.prototype.constructor = FramedEngineExtended;


    exports.FramedEngineExtended = FramedEngineExtended;
    $tw.modules.types.library["$:/core/modules/editor/engines/framed.js"].exports.FramedEngine = FramedEngineExtended;
})();