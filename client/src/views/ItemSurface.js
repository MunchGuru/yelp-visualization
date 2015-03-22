
define(function(require, exports, module) {

    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Flipper = require('famous/views/Flipper');
    var StateModifier = require('famous/modifiers/StateModifier');
	var Easing = require('famous/transitions/Easing');


    function ItemSurface(itemData) {

    	//This is for easy refactoring for variable names
    	var data = {};
    	//if you are a final result
    	if(itemData.name){
	    	data.name = itemData.name;
			data.stars = itemData.rating || 2.5;
			data.disc = itemData.disc || 'No Details at this time.';
			data.url = itemData.url || 'https://www.google.com';
			data.pic = itemData.image_url || undefined;
			data.phoneNumber = itemData.display_phone || 'No Phone Number Available';
			data.top = itemData.top;
			data.left = itemData.left;
			data.size = itemData.size || 200;
        }
        //if you are a seletion or filter
        else{
        	console.log(itemData)
        }
    	var css = {
		    backgroundColor: 'rgb(240, 238, 233)',
		    
		    textAlign: 'center',
		    padding: '5px',
		    border: '5px solid rgba(255,255,255, 0.35)',
		    'border-radius': '250px',
		    '-webkit-filter':'grayscale(50%) sepia(0.2) brightness(125%)',
		    filter: 'grayscale(50%) sepia(0.2) brightness(125%)'
		    
		  }
		

        var advancedSurface = new Surface({
		  content: "<h4>"+data.name+"</h4>\
		  			<div>" + data.phoneNumber + "</div>\
		  			<a href='"+data.url+"'>link to website</a>\
			        <p>"+data.disc+"</p>",

		  size: [data.size,data.size],
		  properties: css
		});

        //sets the background image if it is available
		if(data.pic){
	    	css['background-image'] = 'url("'+data.pic+'")';
	    	css['background-size'] = data.size+'px';
    	}
    	var starsString = ''
    	for (var i = 0; i < Math.floor(data.stars); i++) {
    		starsString += '<img style="width:20px;height:20px;" src="./src/views/img/star.png"/>';
    	};
    	if(data.stars%1){
    		starsString += '<img style="width:20px;height:20px;" src="./src/views/img/star-half.png"/>'
    	}
    	console.log(data.stars, starsString)
		var basicSurface = new Surface({
		  content: "<h3>"+data.name+"</h3>" + starsString,
		  size: [data.size,data.size],
		  properties: css
		});



		/*
		----------------------
		View
		----------------------
		*/
		var frontView = new View();
		frontView.add(basicSurface);
		
		
		var backView = new View();
		backView.add(advancedSurface);


		var flipper = new Flipper();
		flipper.setFront(frontView);
		flipper.setBack(backView);


		var myView = new View();
		myView.add(flipper);

		basicSurface.pipe(myView);
		advancedSurface.pipe(myView);
		frontView.pipe(myView);
		backView.pipe(myView);


		if(location){
			myView._eventInput.on('click', function() {
				flipper.flip();
			});
		}else{
			myView.pipe(this);
	        this._eventInput.on('click', function() {
	          this._eventOutput.emit('dummyClick', this.options);
	        }.bind(this));
    	}

		

		return myView;
    }

    module.exports = ItemSurface;

});