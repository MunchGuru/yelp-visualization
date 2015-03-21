
define(function(require, exports, module) {
    
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform')

    function ItemSurface(itemData) {

    	//This is for easy refactoring for variable names
    	var data = {};
    	data.name = itemData.name || 'untitled';
		data.stars = itemData.stars || 2.5;
		data.disc = itemData.disc || 'No Details at this time.';
		data.url = itemData.url || 'https://www.google.com';
		data.pic = itemData.pic || undefined;
		data.top = itemData.top || 0;
		data.left = itemData.left || 0;
		data.size = itemData.size || 200;
        
    	var css = {
		    backgroundColor: 'rgb(240, 238, 233)',
		    
		    textAlign: 'center',
		    padding: '5px',
		    border: '2px solid rgb(210, 208, 203)',
		    'border-radius': '250px',
		    marginTop: data.top+'px',
		    marginLeft: data.left+'px',
		    '-webkit-transition': '1s', /* Safari */
    		'transition': '1s',
    		'-ms-transform': 'rotate3d(0,1,0,180deg)', 
		    '-webkit-transform': 'rotate3d(0,1,0,180deg)',
		    transform: 'rotate3d(0,1,0,180deg)',
		    'transform-origin': '50% 50%',
		    opacity: '0'
		  }
		
	
        var advancedSurface = new Surface({
		  content: "<h3>"+data.name+" Details</h3>\
		  			<a href='"+data.url+"'>link</a>\
			        <p>"+data.disc+"</p>",
		  size: [data.size,data.size],
		  properties: css
		});

        //sets the background image if it is available
		if(data.pic){
	    	css['background-image'] = 'url("'+data.pic+'")';
	    	css['background-size'] = data.size+'px';
    	}

		var basicSurface = new Surface({
		  content: "<h3>"+data.name+"</h3>\
        			<p>"+data.stars+"</p>",
		  size: [data.size,data.size],
		  properties: css
		});

		var deg = '0';
		var op = '1';	

		var isFlip = false;

		var flip = function() {
			if(isFlip){
				isFlip = false;
				advancedSurface.setProperties({
				    opacity: 0,
				    '-ms-transform': 'rotate3d(0,1,0,180deg)', 
				    '-webkit-transform': 'rotate3d(0,1,0,180deg)',
				    transform: 'rotate3d(0,1,0,180deg)',
				    marginTop: (window.innerHeight - data.size)/2 +'px',
		    		marginLeft: (window.innerWidth - data.size)/2 +'px'
			    });
			    basicSurface.setProperties({
				    opacity: 1,
				    '-ms-transform': 'rotate3d(0,1,0,0deg)', 
				    '-webkit-transform': 'rotate3d(0,1,0,0deg)',
				    transform: 'rotate3d(0,1,0,0deg)',
				    marginTop: (window.innerHeight - data.size)/2 +'px',
		    		marginLeft: (window.innerWidth - data.size)/2 +'px'
			    });
			    
			}else{
				isFlip = true;
				advancedSurface.setProperties({
				    opacity: 1,
				    '-ms-transform': 'rotate3d(0,1,0,0deg)', 
				    '-webkit-transform': 'rotate3d(0,1,0,0deg)',
				    transform: 'rotate3d(0,1,0,0deg)',
				    marginTop: data.top + 'px',
		    		marginLeft: data.left +'px'
			    });
			    basicSurface.setProperties({
				    opacity: 0,
				    '-ms-transform': 'rotate3d(0,1,0,180deg)', 
				    '-webkit-transform': 'rotate3d(0,1,0,180deg)',
				    transform: 'rotate3d(0,1,0,180deg)',
				    marginTop: data.top + 'px',
		    		marginLeft: data.left +'px'
			    });
			}
		}

		/*
		----------------------
		View
		----------------------
		*/

		var myView = new View();
		
		//myView
		myView.add(advancedSurface);
		myView.add(basicSurface);

		advancedSurface.pipe(myView);
		basicSurface.pipe(myView);

		myView._eventInput.on('click', flip);

		return myView;
    }

    module.exports = ItemSurface;

});