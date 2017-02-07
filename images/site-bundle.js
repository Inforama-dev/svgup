$(document).ready(function()	{

	SVGUpInstance.init('site',
		
		{"icons": {
			"svgup-logo":{"url":"images/svg-up-logo.svg", "layered":true}
		},

		"classes":{
			"logo":{
				"svgdefault":{"fillcolor":"#FFFFFF"},
				"svghover1":{"fillcolor":"#EEEEEE"},
				"cssdefault":{"width":"200px", "height":"200px", "transition":"all 0.5s"},
				"csshover1":{},
				"layers":[{
					"id":"LayerUP", "style":{"svgdefault":{"fillcolor":"#8CC63E"}}
				}]
			}
		}}

	);	

});