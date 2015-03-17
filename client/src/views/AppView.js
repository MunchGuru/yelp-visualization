define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var Util = require('services/Services');

    // var CategoryView = require('views/CategoryView');
    // var ItemView = require('views/ItemView');
    // var NodeView = require('views/NodeView');
    var DummyView = require('views/DummyView');


    function AppView() {
        View.apply(this, arguments);

    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    //Default options. Accessable via 'this.options.attribName'
    AppView.DEFAULT_OPTIONS = {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
    };

    //Prototype methods.
    AppView.prototype.populateNodes = function(data, type){
      // Populate AppView with nodeViews
      // Input:
        // data - array of input data
        // type - 'category' or 'item' 

    };

    AppView.prototype.removeNodes = function(){
      // Remove all nodes in AppView

    };

    

    module.exports = AppView;
});
