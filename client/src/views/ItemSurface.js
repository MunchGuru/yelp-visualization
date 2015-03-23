
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
			data.disc = itemData.snippet_text || 'No Details at this time.';
			data.url = itemData.url || 'https://www.google.com';
			data.pic = itemData.image_url || undefined;
			data.phoneNumber = itemData.display_phone || 'No Phone Number Available';
			data.top = itemData.top;
			data.left = itemData.left;
			data.size = itemData.size || 200;
			if(itemData.location) {
				data.loc = itemData.location.display_address || "Address not available";
			}
			data.revCount = itemData.review_count || 0;
        }
        
    	var css = {
		    backgroundColor: 'rgb(240, 238, 240)',
		    
		    textAlign: 'center',
		    padding: '5px',
		    border: '1px solid #aaa',
		    'border-radius': '20px',
		    '-webkit-filter':'grayscale(50%) sepia(0.2) brightness(125%)',
		    filter: 'grayscale(50%) sepia(0.2) brightness(125%)',
		    background: '#888',
		
		    'box-shadow': '5px -5px 5px rgba(0,0,0,0.6)',
		    '-moz-box-shadow': '5px -5px 5px rgba(0,0,0,0.6)',
		    '-webkit-box-shadow': '5px -5px 5px rgba(0,0,0,0.6)',
		    '-o-box-shadow': '5px -5px 5px rgba(0,0,0,0.6)' 

		  }
		
        //sets the background image if it is available
    	var starsString = ''
    	for (var i = 0; i < Math.floor(data.stars); i++) {
    		starsString += '<img style="width:20px;height:20px;" src="./src/views/img/star.png"/>';
    	};
    	if(data.stars%1){
    		starsString += '<img style="width:20px;height:20px;" src="./src/views/img/star-half.png"/>'
    	}

        var advancedSurface = new Surface({
		  content: "<h4>"+data.name+"</h4>\
			        <p>"+data.disc+"</p>\
			        <p>"+data.loc+"</p>\
		  			<div>" + data.phoneNumber + "</div>\
		  			<div>"+ starsString + "</div>\
		  			<a href='"+data.url+"'>Website</a>",

		  size: [data.size*1.5,data.size*1.5],
		  properties: css
		});

		if(data.pic){
	    	css['background-image'] = 'url("'+data.pic+'")';
	    	css['background-size'] = data.size+'px';
    	}
    	
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