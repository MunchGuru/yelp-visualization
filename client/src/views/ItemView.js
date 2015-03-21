

define(function(require, exports, module) {
    
    var ItemSurface = require('./ItemSurface');
    var View = require('famous/core/View');

    function ItemView(data) {
        
        //var itemList = [];

        var myView = new View();
        for (var i = 0; i < data.length; i++) {
            data[i].size = data[i].size || 200;
            var posX = data[i].size * i;
            var posY = 0;
            while(posX+data[i].size > window.innerWidth){
                posY++;
                posX = posX - window.innerWidth + (window.innerWidth % data[i].size);
            }
            var posY = posY * data[i].size;
            data[i].top = posY;
            data[i].left = posX;
            var item = new ItemSurface(data[i]);
            item.pipe(myView);
            myView.add(item);
        };
        return myView;
    }
    module.exports = ItemView;

});