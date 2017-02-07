$(document).ready(function()	{

	SVGUpInstance.init('samples-classes',
		
		{"icons": {
			"cogs":{"url":"images/samples/cogs.svg"},
			"pumpkin":{"url":"images/samples/pumpkin.svg"},
			"bell":{"url":"images/samples/bell.svg"},
			"fish":{"url":"images/samples/fish.svg"},
		},

		"classes":{
			"grey-red":{
				"svgdefault":{"fillcolor":"#AAAAAA", "strokecolor":"#FFFFFF"}, 
				"svghover":{"fillcolor":"#FF0000", "strokecolor":"#000000"}, 
				"cssdefault":{"opacity1":"0.5", "width":"60px", "height":"60px"},
				"csshover":{"opacity":"1"}
			},
			"white-green":{
				"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#8CC63E"}, 
				"svghover":{"fillcolor":"#8CC63E", "strokecolor":"#000000"}, 
				"cssdefault":{"opacity1":"0.5", "width":"60px", "height":"60px"},
				"csshover":{"opacity":"1"}
			}
		}}

	);	

});