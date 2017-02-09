$(document).ready(function()	{

	SVGUpInstance.init('samples',
		
		{"icons": {
			"alarm":{"url":"images/basic/lnr-alarm-64.svg"},
			"cog":{"url":"images/basic/lnr-cog-64.svg"},
			"bubble":{"url":"images/basic/lnr-bubble-64.svg"},
			"cloud":{"url":"images/basic/lnr-cloud-64.svg"},
			"dice":{"url":"images/basic/lnr-dice-64.svg"},
			"heart":{"url":"images/basic/lnr-heart-64.svg"},
			"hand":{"url":"images/basic/lnr-hand-64.svg"},
			"moon":{"url":"images/basic/lnr-moon-64.svg"},
			"pointer":{"url":"images/basic/lnr-pointer-up-64.svg"},
			"paw":{"url":"images/basic/lnr-paw-64.svg"},
			"pie":{"url":"images/basic/lnr-pie-chart-64.svg"},
			"rocket":{"url":"images/basic/lnr-rocket-64.svg"},
			"pushpin":{"url":"images/basic/lnr-pushpin-64.svg"},
			"star":{"url":"images/basic/lnr-star-64.svg"},
			"smile":{"url":"images/basic/lnr-smile-64.svg"},
			"tag":{"url":"images/basic/lnr-tag-64.svg"},
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
			},
			"fisheye-vert":{
				"svgdefault":{"fillcolor":"#FFFFFF"}, 
				"svghover":{"fillcolor":"#8CC63E"}, 
				"cssdefault":{"opacity":"0.5", "width":"50px", "height":"50px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1", "width":"80px", "height":"80px"}
			}
		}}

	);	

});