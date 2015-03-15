define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Utility = require('famous/utilities/Utility');

    var AppView = require('views/AppView');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);

    // Utility.loadURL(SlideData.getUrl(), initApp);

    function initApp(data) {
        // data = SlideData.parse(data);

        // var appView = new AppView({ data : data });

        // mainContext.add(appView);
    }
});
