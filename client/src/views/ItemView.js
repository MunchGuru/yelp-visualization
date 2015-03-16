
define(function(require, exports, module) {
    
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform')

    function ItemSurface(data) {
        
    	data = data || {};
		/*
		----------------------
		surface for basic info
		----------------------
		*/
		var basicData = data.basic || {};
        //data and defaults
        basicData = basicData || {};
        basicData.content = "\
        <h3>Hi!</h3>\
        <p>I'm a surface!<br>I live inside a context.</p>\
        <p>You can add content to me and style me with</p>";
        
        basicData.size = basicData.size || [179.2, 257.6]; 

    	//surface
        var basicSurface = new Surface({
		  content: basicData.content,
		  size: basicData.size,
		  properties: {
		    backgroundColor: 'rgb(240, 238, 233)',
		    textAlign: 'center',
		    padding: '5px',
		    border: '2px solid rgb(210, 208, 203)',
		    'border-radius': '15px',
		    marginTop: '50px',
		    marginLeft: '50px',
		    '-webkit-transition': '1s', /* Safari */
    		'transition': '1s',
    		'-ms-transform': 'rotate3d(0,1,0,180deg)', 
		    '-webkit-transform': 'rotate3d(0,1,0,180deg)',
		    transform: 'rotate3d(0,1,0,180deg)',
		    'transform-origin': '50% 50%'
		  }
		});

        //events
		// basicSurface.on('click', function() {
		//   this.setProperties({
		//     backgroundColor: '#fff'
		//   });
		// });


		/*
		----------------------
		surface for Additional info
		----------------------
		*/
		var advancedData = data.advanced || {};
        //data and defaults
        advancedData = advancedData || {};
        advancedData.content = "\
        <h3>Hi I'm the advancedData</h3>\
        <p>This is something else</p>\
        <p>I can't wait till I have real data</p>";
        
        advancedData.size = advancedData.size || [179.2, 257.6]; 

    	//surface
        var advancedSurface = new Surface({
		  content: advancedData.content,
		  size: advancedData.size,
		  properties: {
		    backgroundColor: 'rgb(240, 238, 233)',
		    textAlign: 'center',
		    padding: '5px',
		    border: '2px solid rgb(210, 208, 203)',
		    'border-radius': '15px',
		    marginTop: '50px',
		    marginLeft: '50px',
		    '-webkit-transition': '1s', /* Safari */
    		'transition': '1s',
    		'-ms-transform': 'rotate3d(0,1,0,0deg)', 
		    '-webkit-transform': 'rotate3d(0,1,0,0deg)',
		    transform: 'rotate3d(0,1,0,0deg)',
		    'transform-origin': '50% 50%'
		  }
		});

        //events
		// advancedSurface.on('click', function() {
		//   this.setProperties({
		//     backgroundColor: '#878785',
		//     opacity: '0.0'
		//   });
		// });

		var advancedSurfaceStartingRot = new Modifier({transform : Transform.identity});
		advancedSurfaceStartingRot.setTransform(Transform.rotateY(('180')), {curve : 'linear', duration : 0});


		var rotateModifier = new Modifier({transform : Transform.identity});
		rotateModifier.setTransform(Transform.rotateY(('180')), {curve : 'linear', duration : 500});


		/*
		----------------------
		View
		----------------------
		*/

		var myView = new View();
		
		//myView
		myView.add(advancedSurface);
		myView.add(basicSurface);
			//.add(advancedSurfaceStartingRot)

		basicSurface.pipe(myView);
		advancedSurface.pipe(myView);

		var deg = 0;
		var deg2 = 180;
		var op = '1';
		var op2 = '0';
		myView._eventInput.on('click', function() {
			
			if(deg === 0){
				deg = 180;
				deg2 = 0;
				op = '0';
				op2 = '1';
			}else{
				deg = 0;
				deg2 = 180;
				op = '1';
				op2 = '0';
			}

			advancedSurface.setProperties({
			    opacity: op2,
			    '-ms-transform': 'rotate3d(0,1,0,'+deg2+'deg)', 
			    '-webkit-transform': 'rotate3d(0,1,0,'+deg2+'deg)',
			    transform: 'rotate3d(0,1,0,'+deg2+'deg)',
			  });
			basicSurface.setProperties({
			    opacity: op,
			    '-ms-transform': 'rotate3d(0,1,0,'+deg+'deg)', 
			    '-webkit-transform': 'rotate3d(0,1,0,'+deg+'deg)',
			    transform: 'rotate3d(0,1,0,'+deg+'deg)',
			  });

			//rotateModifier.add(rotateModifier);

		});

		return myView;
    }

    //ItemSurface.prototype = Object.create(Surface.prototype);
    //ItemSurface.prototype.constructor = ItemSurface;

    module.exports = ItemSurface;

});