$(document).ready(function()	{

	SVGUpInstance.init('samples',
		
		{"icons": {
			"cogs":{"url":"images/samples/cogs.svg"},
			"mail":{"url":"images/samples/mail.svg"},
			"wrench":{"url":"images/samples/wrench.svg"},
			"lock":{"url":"images/samples/lock.svg"},
			"speech":{"url":"images/samples/speech.svg"},
			"music":{"url":"images/samples/music.svg"},
			"sun":{"url":"images/samples/sun.svg"},
			"sunclouds":{"url":"images/samples/sunclouds.svg"},
			"hazard":{"url":"images/samples/hazard.svg"},
			"mouse":{"url":"images/samples/mouse.svg"},
			"delete":{"url":"images/samples/delete.svg"},
			"butterfly":{"url":"images/samples/butterfly.svg"},
			"pumpkin":{"url":"images/samples/pumpkin.svg"},
			"bell":{"url":"images/samples/bell.svg"},
			"fish":{"url":"images/samples/fish.svg"},
		},

		"classes":{
			"grey-green":{
				"svgdefault":{"fillcolor":"#AAAAAA", "strokecolor":"#FFFFFF"}, 
				"svghover":{"fillcolor":"#8CC63E", "strokecolor":"#000000"}, 
				"cssdefault":{"opacity1":"0.5", "width":"60px", "height":"60px"},
				"csshover":{"opacity":"1"}
			},
			"white-green":{
				"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#8CC63E"}, 
				"svghover":{"fillcolor":"#8CC63E", "strokecolor":"#000000"}, 
				"cssdefault":{"opacity1":"0.5", "width":"60px", "height":"60px"},
				"csshover":{"opacity":"1"}
			},
			"red":{
				"svgdefault":{"fillcolor":"#FFAAAA", "strokecolor":"#FFFFFF"}, 
				"svghover":{"fillcolor":"#FF0000", "strokecolor":"#000000"}, 
				"cssdefault":{"opacity1":"0.5", "width":"60px", "height":"60px"},
				"csshover":{"opacity":"1"}
			},
			"fisheye":{
				"svgdefault":{"fillcolor":"#333333"}, 
				"svghover":{"fillcolor":"#8CC63E"}, 
				"cssdefault":{"opacity1":"0.5", "width":"50px", "height":"50px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1", "width":"60px", "height":"60px"}
			}
		}}

	);	

});