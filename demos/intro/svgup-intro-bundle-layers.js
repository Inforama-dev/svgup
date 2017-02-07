$(document).ready(function()	{

	SVGUpInstance.init('samples-layers-basic',
		
		{"icons": {
			"1":{"url":"images/basic-layers/1.svg", "layered":true},
			"a":{"url":"images/basic-layers/a.svg", "layered":true},
			"cog":{"url":"images/basic-layers/cog.svg", "layered":true},
		},

		"classes":{
			"green-white":{
				"cssdefault":{"opacity1":"0.5", "width":"120px", "height":"120px", "transition":"all 0.5s"},
				"layers":[
					{"id":"Layer1", "style":{
						"svgdefault":{"fillcolor":"#AAAAAA", "strokecolor":"#666666"},
						"svghover":{"fillcolor":"#8CC63E", "strokecolor":"#8CC63E"}, 
					}},
					{"id":"Layer2", "style":{
						"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#EEEEEE"},
						"svghover":{"fillcolor":"#666666", "strokecolor":"#0000000"}, 
					}}
				]
			},
			"bright-green":{
				"cssdefault":{"opacity1":"0.5", "width":"120px", "height":"120px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1"},
				"layers":[
					{"id":"Layer1", "style":{
						"svgdefault":{"fillcolor":"#666666", "strokecolor":"#666666"},
						"svghover":{"fillcolor":"#00FF00", "strokecolor":"#000000"}, 
					}},
					{"id":"Layer2", "style":{
						"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#EEEEEE"},
						"svghover":{"fillcolor":"#00FF00", "strokecolor":"#0000000"}, 
					}}
				]
			},
			"white-black":{
				"cssdefault":{"width":"120px", "height":"120px", "transition":"all 0.5s"},
				"csshover":{"width":"60px", "height":"60px"	},
				"layers":[
					{"id":"Layer1", "style":{
						"svgdefault":{"fillcolor":"#666666", "strokecolor":"#666666"},
						"svghover":{"fillcolor":"#FFFFFF", "strokecolor":"#FFFFFF"}, 
					}},
					{"id":"Layer2", "style":{
						"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#EEEEEE"},
						"svghover":{"fillcolor":"#333333", "strokecolor":"#FFFFFF"}, 
						"csshover":{"opacity":"1"}
					}}
				]
			},
			"white-black-rotate":{
				"cssdefault":{"width":"120px", "height":"120px", "transition":"all 0.5s"},
				"layers":[
					{"id":"Layer1", "style":{
						"svgdefault":{"fillcolor":"#666666", "strokecolor":"#666666"},
						"svghover":{"fillcolor":"#FFFFFF", "strokecolor":"#FFFFFF", "rotate":{"duration":0.5, "anticlockwise":true, "repeatCount":1}}, 
					}},
					{"id":"Layer2", "style":{
						"svgdefault":{"fillcolor":"#FFFFFF", "strokecolor":"#EEEEEE"},
						"svghover":{"fillcolor":"#333333", "strokecolor":"#FFFFFF"},
					}}
				]
			}
		}}

	);	

});