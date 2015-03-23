// This is a dummy view created by KN to build out the AppView
// It should be swapped and deleted once we have the other views.

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function DummyView(data) {
        View.apply(this, arguments);
        var data = data || "Hi, I'm dummy surface!"
        var dummySurface = new Surface({
          size: [200, 200],
          content: "<h3>"+data.display+"</h3>",
          properties: {
            color: 'white',
            backgroundColor: 'rgb(240, 238, 233)',
            backgroundImage: 'url("http://www.deliciouslysortedibiza.com/backgrounds/bg-nightlife.jpg")', //'url("'+data.photoUrl+'")';
            backgroundSize: '400px',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
            marginLeft: '30%',
            marginTop: '10%',
            padding: '5px',
            border: '1px solid rgba(255,255,255, 0.35)',
            'border-radius': '250px',
            '-webkit-filter':'grayscale(50%) sepia(0.2) brightness(125%)',
            filter: 'grayscale(50%) sepia(0.2) brightness(125%)'
          }
        });
        //this.options = data;

        this.add(dummySurface);

        // events from dummySurface is piped to the dummyView
        dummySurface.pipe(this);
        // When a dummyView receives a 'click' event, it then fires a 'dummyClick' event
        // which is then listened by AppView.
        this._eventInput.on('click', function() {
          this._eventOutput.emit('dummyClick', this.options);
        }.bind(this));
    }

    DummyView.prototype = Object.create(View.prototype);
    DummyView.prototype.constructor = DummyView;

    DummyView.DEFAULT_OPTIONS = {};




    module.exports = DummyView;
});
