$(document).ready(function()	{

	SVGUpInstance.init('site',
		
		{"icons": {
			"svgup-logo":{"url":"images/svg-up-logo.svg", "layered":true},
			"bullet":{"url":"images/bullet.svg", "layered":true}
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
			},
			"bullet":{
				"cssdefault":{"transition":"all 0.5s"},
				"layers":[
					{"id":"LayerSmall", "style":{
						"cssdefault":{"opacity":"1"},
						"csshover":{"opacity":"0"},
						"svgdefault":{"fillcolor":"#FFF", "strokecolor":"#AAA"},
						"svghover":{"fillcolor":"#FFF", "strokecolor":"#8CC63E"}, 
					}},
					{"id":"LayerBig", "style":{
						"cssdefault":{"opacity":"0"},
						"csshover":{"opacity":"1"},
						"svgdefault":{"fillcolor":"#FFF", "strokecolor":"#8CC63E"},
						"svghover":{"fillcolor":"#FFF", "strokecolor":"#AAA"}, 
					}
				}]
			}
			
		}}

	);	

});