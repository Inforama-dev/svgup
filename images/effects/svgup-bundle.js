$(document).ready(function()	{

	SVGUpInstance.init('effects',
		
		{"icons": {
			"cogs":{"url":"images/effects/cogs.svg", "layered":true},
			"circles":{"url":"images/effects/circles.svg", "layered":true},
			"clock":{"url":"images/effects/clock.svg", "layered":true},
			"arrows":{"url":"images/effects/arrows.svg", "layered":true},
			"twodots":{"url":"images/effects/twodots.svg", "layered":true},
			"circles2":{"url":"images/effects/circles2.svg", "layered":true},
		},

		"classes":{
			"cogs":{
				"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#8CC63E"}, 
				"svghover":{"fillcolor":"#8CC63E", "strokecolor":"#000000"}, 
				"cssdefault":{"opacity1":"0.5", "width":"120px", "height":"120px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1"},
				"layers":[
					{"id":"Layer1", "style":{
						"svghover":{"fillcolor":"#888888", "rotate":{"duration":5, "anticlockwise":true}}
					}},
					{"id":"Layer2", "style":{
						"svghover":{"rotate":{"duration":3, "anticlockwise":false}}
					}}
				]
			},
			"circles":{
				"cssdefault":{"width":"120px", "height":"120px"},
				"svghover":{"fillcolor":"#8CC63E", "strokecolor":"#8CC63E"}, 
				"layers":[
					{"id":"Layer1", "style":{
						"svghover":{"rotate":{"duration":7, "anticlockwise":true}, "strokecolor":"#8CC63E"},
						"csshover":{"opacity":"0.2"},
					}},
					{"id":"Layer2", "style":{
						"svghover":{"rotate":{"duration":4, "anticlockwise":false}, "strokecolor":"#8CC63E"},
						"csshover":{"opacity":"0.5"},
					}},
					{"id":"Layer3", "style":{
						"svghover":{"rotate":{"duration":1, "anticlockwise":true}, "strokecolor":"#8CC63E"},
						"csshover":{"opacity":"0.9"},
					}}
				]
			},
			"clock":{
				"layers":[
					{"id":"BigHand", "style":{
						"svghover":{"rotate":{"duration":1}}
					}},
					{"id":"SmallHand", "style":{
						"svghover":{"rotate":{"duration":12}}
					}}
				]
			},
			"arrows":{
				"layers":[
					{"id":"Layer1", "style":{
						"svghover":{"rotate":{"duration":3}}
					}},
					{"id":"Layer2", "style":{
						"svghover":{"rotate":{"duration":3}}
					}},
					{"id":"Layer3", "style":{
						"svghover":{"rotate":{"duration":3}}
					}},
					{"id":"Layer4", "style":{
						"svghover":{"rotate":{"duration":3}}
					}},
				]
			},
			"twodots":{
				"layers":[
					{"id":"Layer1", "style":{
						"svghover":{"rotate":{"duration":1}}
					}},
					{"id":"Layer2", "style":{
						"svghover":{"rotate":{"duration":1, "anticlockwise":true}}
					}}
				]
			},
		}}

	);	

});