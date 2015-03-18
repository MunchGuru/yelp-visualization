// This is a dummy view created by KN to build out the AppView
// It should be swapped and deleted once we have the other views.

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function DummyView() {
        View.apply(this, arguments);

        var dummySurface = new Surface({
          size: [100, 150],
          content: "<h3>Hi!</h3><p>I'm dummy surface!</p>",
          properties: {
            backgroundColor: 'rgb(240, 238, 233)',
            textAlign: 'center',
            padding: '5px',
            border: '2px solid rgb(210, 208, 203)'
          }
        });

        this.add(dummySurface);

        // events from dummySurface is piped to the dummyView
        dummySurface.pipe(this);
        // When a dummyView receives a 'click' event, it then fires a 'dummyClick' event
        // which is then listened by AppView.
        this._eventInput.on('click', function() {
          this._eventOutput.emit('dummyClick');
        }.bind(this));



    }

    DummyView.prototype = Object.create(View.prototype);
    DummyView.prototype.constructor = DummyView;

    DummyView.DEFAULT_OPTIONS = {};




    module.exports = DummyView;
});
