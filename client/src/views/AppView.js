define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var Util = require('services/Services');

    // var CategoryView = require('views/CategoryView');
    var ItemView = require('views/ItemView');
    // var NodeView = require('views/NodeView');
    // var DummyView = require('views/ItemSurface');
    var DummyView = require('views/DummyView');


    function AppView() {
        View.apply(this, arguments);
        this.children = [];
        this.childrenStateModifier = [];

        //Set up event listener.
        this.addListeners();
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    //Default options. Accessable via 'this.options.attribName'
    AppView.DEFAULT_OPTIONS = {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
    };


    //Prototype methods.
    AppView.prototype.populateNodes = function(dataArray, stateModifier){
      // Populate AppView with nodeViews
      // Input: 
        // data: array of input data
        // type: 'category' or 'item'
        // stateModifier: 
      var type;
      stateModifier = stateModifier || gridLayout;
      // if category
      if(Array.isArray(dataArray)) { 
        type = 'category';
        for(var i = 0; i < dataArray.length; i++){
          this.addNode(dataArray[i], type, stateModifier(this.options.screenWidth, this.options.screenHeight, i, dataArray.length));
        }
        // this.addListeners();
      } else { //if item
        type = 'item';
        console.log('itemArray', dataArray);
        dataArray = dataArray.businesses;
        for(var i = 0; i < dataArray.length; i++){
          this.addNode(dataArray[i], type, stateModifier(this.options.screenWidth, this.options.screenHeight, i, dataArray.length));
        }
      }

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
      }

    };

    AppView.prototype.addNode = function(data, type, stateModifier){
      // Add nodeView to AppView
      var newNode;
      if(type === 'category') {
        newNode = new DummyView(data);

        //pipe event listener
        newNode.pipe(this);

      } else if (type === 'item') {
        newNode = new ItemView(data);
      }
      this.children.push(newNode);
      this.childrenStateModifier.push(stateModifier);

      this.add(stateModifier).add(newNode);
      // this.add(stateModifier).add(new CategoryView(data))
    };

    AppView.prototype.addListeners = function(){
      this._eventInput.on('dummyClick', function(node){
        node = node || "";
        Util.getData('/api/'+node.api, this, 'populateNodes');
        this.hideNodes();
      }.bind(this));
    }


    //StateModifiers Instantiation
    var randomScatter = function(maxX, maxY, index, numTotal){
      var stateModifier = new StateModifier();
      var randX = Math.floor(Math.random() * maxX);
      var randY = Math.floor(Math.random() * maxY);
      stateModifier.setTransform(
        Transform.translate(randX, randY, 0),
        { duration : 2000, curve: 'easeInOut' }
      );

      return stateModifier;

    };

   var  gridLayout = function(maxX, maxY, index, numTotal){
      // dimension of the nodeViews
      var viewWidth = 130;
      var viewHeight = 150;

      // margin
      var marginHoriz = 30;
      var marginVert = 20;

      // Calculations for positioning
      var numX = Math.floor(maxX/(viewWidth + marginHoriz));
      var numY = Math.floor(maxY/(viewHeight + marginVert));

      var posX = index % numX;
      var posY = (index - posX) / numX;

      var stateModifier = new StateModifier();
      stateModifier.setTransform(
        Transform.translate(posX * (viewWidth + marginHoriz) + marginHoriz, posY * (viewHeight + marginVert) + marginVert, 0),
        { duration : 2000, curve: 'easeInOut' }
      );

      return stateModifier;

    };

    module.exports = AppView;
});
