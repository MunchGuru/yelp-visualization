
define(function(require, exports, module) {

    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Flipper = require('famous/views/Flipper');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Easing = require('famous/transitions/Easing');

    var ItemSurface = require('views/ItemSurface');
    
    function ItemView(data) {
        View.apply(this, arguments);
        var data = data || "Hi, I'm dummy surface!"
        var itemSurface = new ItemSurface(data);
        //this.options = data;

        this.add(itemSurface);

        // events from itemSurface is piped to the ItemView
        itemSurface.pipe(this);
        // When a ItemView receives a 'click' event, it then fires a 'itemClick' event
        // which is then listened by AppView.
        this._eventInput.on('click', function() {
          this._eventOutput.emit('itemClick', this.options);
        }.bind(this));
    }

    ItemView.prototype = Object.create(View.prototype);
    ItemView.prototype.constructor = ItemView;

    ItemView.DEFAULT_OPTIONS = {};

    module.exports = ItemView;

});

// define(function(require, exports, module) {
    
//     var ItemSurface = require('./ItemSurface');
//     var View = require('famous/core/View');

//     function ItemView(data) {
        
//         //var itemList = [];

//         var myView = new View();
//         for (var i = 0; i < data.length; i++) {
//             data[i].size = data[i].size || 200;
//             var posX = data[i].size * i;
//             var posY = 0;
//             while(posX+data[i].size > window.innerWidth){
//                 posY++;
//                 posX = posX - window.innerWidth + (window.innerWidth % data[i].size);
//             }
//             var posY = posY * data[i].size;
//             data[i].top = posY;
//             data[i].left = posX;
//             var item = new ItemSurface(data[i]);
//             item.pipe(myView);
//             myView.add(item);
//         };
//         return myView;
//     }
//     module.exports = ItemView;

// });