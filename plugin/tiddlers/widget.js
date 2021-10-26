/*\
title: $:/plugins/EvidentlyCube/AutoCloseTags/widget.js
type: application/javascript
module-type: widget

\*/
(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";

    var editTextWidgetFactory = require("$:/core/modules/editor/factory.js").editTextWidgetFactory,
        FramedEngineExtended = require("$:/plugins/EvidentlyCube/AutoCloseTags/framed.js").FramedEngineExtended,
        SimpleEngineExtended = require("$:/plugins/EvidentlyCube/AutoCloseTags/simple.js").SimpleEngineExtended;

    exports["edit-text"] = editTextWidgetFactory(FramedEngineExtended,SimpleEngineExtended);

})();