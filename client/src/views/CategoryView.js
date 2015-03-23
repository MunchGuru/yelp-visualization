// This is a category view created by Artur to build out the AppView

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function CategoryView(data) {
        View.apply(this, arguments);
        var data = data || "Hi, I'm dummy surface!";
        var img_url = data.img_url;
        var categorySurface = new Surface({
          size: [200, 200],
          content: "<h3>"+data.display+"</h3>",
          properties: {
            color: 'white',
            backgroundColor: 'rgb(240, 238, 233)',
            backgroundImage: 'url("'+img_url+'")',
            backgroundSize: '400px',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
            padding: '5px',
            border: '1px solid rgba(255,255,255, 0.35)',
            'border-radius': '20px',
            '-webkit-filter':'grayscale(50%) sepia(0.2) brightness(125%)',
            filter: 'grayscale(50%) sepia(0.2) brightness(125%)',
            'box-shadow': '5px -5px 5px rgba(0,0,0,0.6)',
            '-moz-box-shadow': '5px -5px 5px rgba(0,0,0,0.6)',
            '-webkit-box-shadow': '5px -5px 5px rgba(0,0,0,0.6)',
            '-o-box-shadow': '5px -5px 5px rgba(0,0,0,0.6)'
          }
        });
        //this.options = data;

        this.add(categorySurface);

        // events from categorySurface is piped to the CategoryView
        categorySurface.pipe(this);
        // When a CategoryView receives a 'click' event, it then fires a 'dummyClick' event
        // which is then listened by AppView.
        this._eventInput.on('click', function() {
          this._eventOutput.emit('dummyClick', this.options);
        }.bind(this));
    }

    CategoryView.prototype = Object.create(View.prototype);
    CategoryView.prototype.constructor = CategoryView;

    CategoryView.DEFAULT_OPTIONS = {};




    module.exports = CategoryView;
});
