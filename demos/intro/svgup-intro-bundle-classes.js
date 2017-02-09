$(document).ready(function()	{

	SVGUpInstance.init('samples-classes',
		
		{"icons": {
			"cog":{"url":"images/basic/lnr-cog-64.svg"},
			"dice":{"url":"images/basic/lnr-dice-64.svg"},
			"paw":{"url":"images/basic/lnr-paw-64.svg"},
			"rocket":{"url":"images/basic/lnr-rocket-64.svg"}
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