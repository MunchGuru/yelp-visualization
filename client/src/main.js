define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');

    var AppView = require('views/AppView');

    var mainContext = Engine.createContext();
    // mainContext.setPerspective(1000);


    function initApp() {
        var appView = new AppView();
        mainContext.add(appView);

        appView.populateNodes([
            {
                "display": "Restaurants",
                "api": "restaurants"
              },
              {
                "display": "Nightlife",
                "api": "nightlife"
              }
        ]);
    }

    initApp();
});
