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
        this.children = [];
        this.childrenStateModifier = [];

    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    //Default options. Accessable via 'this.options.attribName'
    AppView.DEFAULT_OPTIONS = {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
    };

    //Prototype methods.
    AppView.prototype.populateNodes = function(dataArray, type, stateModifier){
      // Populate AppView with nodeViews
      // Input: 
        // data: array of input data
        // type: 'category' or 'item'
        // stateModifier: 
      type = type || null;
      stateModifier = stateModifier || randomScatter;  
      for(var i = 0; i < dataArray.length; i++){
        this.addNode(dataArray[i], type, stateModifier(this.options.screenWidth, this.options.screenHeight));
      }
      this.addListeners();

    };

    AppView.prototype.hideNodes = function(){
      // Hides all nodes in AppView
      var posX = this.options.screenWidth + 100;
      var posY = this.options.screenHeight + 100;

      for(var i = 0; i < this.childrenStateModifier.length; i++) {
        this.childrenStateModifier[i].setTransform(
          Transform.translate(posX, posY, 0),
          { duration : 2000, curve: 'easeInOut' }
          );
        // this.add(hideModifier(this.options.screenWidth, this.options.screenHeight)).add(this.children[i]);
      }

    };

    AppView.prototype.addNode = function(data, type, stateModifier){
      // Add nodeView to AppView
      var newNode = new DummyView();

      this.children.push(newNode);
      this.childrenStateModifier.push(stateModifier);

      this.add(stateModifier).add(newNode);
      // this.add(stateModifier).add(new CategoryView(data))
    };

    AppView.prototype.addListeners = function(){
      for( var i = 0; i <this.children.length; i++) {
        this.children[i].pipe(this); //pipe the events from child node to parent.
      }
      this._eventInput.on('dummyClick', function(){
        console.log(arguments);
        this.hideNodes();
      }.bind(this));
    }


    //StateModifiers Instantiation
    randomScatter = function(maxX, maxY){
      var stateModifier = new StateModifier();
      var randX = Math.floor(Math.random() * maxX);
      var randY = Math.floor(Math.random() * maxY);
      stateModifier.setTransform(
        Transform.translate(randX, randY, 0),
        { duration : 2000, curve: 'easeInOut' }
      );

      return stateModifier;

    };

    module.exports = AppView;
});
