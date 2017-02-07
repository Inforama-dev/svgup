$(document).ready(function()	{

	SVGUpInstance.init('inforamaui',
		
		{"icons": {
			"logo":{"url":"images/inforama-icon.svg"},
			"downarrow":{"url":"images/down-arrow.svg"},
			"usericon":{"url":"images/user-icon.svg"}
		},

		"classes":{
			"mainstyle":{
				"svgdefault":{"fillcolor":"#AA8833"},
				"svghover":{"fillcolor":"#8CC63E"},
				"cssdefault":{"opacity":"0.3", "width":"40px", "height":"40px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1", "width":"50px", "height":"50px"}
			}
		}}

	);	

});