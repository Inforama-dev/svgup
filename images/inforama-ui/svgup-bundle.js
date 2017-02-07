$(document).ready(function()	{

	SVGUpInstance.init('inforamaui',
		
		{"icons": {
			"add":{"url":"images/inforama-ui/add-icon-16.svg"},
			"arrow-left":{"url":"images/inforama-ui/arrow-left.svg"},
			"checkbox-selected":{"url":"images/inforama-ui/checkbox-selected.svg"},
			"checkbox-unselected":{"url":"images/inforama-ui/checkbox-unselected.svg"},
			"date-picker":{"url":"images/inforama-ui/date-picker-16.svg"},
			"magnifier":{"url":"images/inforama-ui/magnifier-16.svg"},
			"maximise-icon":{"url":"images/inforama-ui/maximise-icon.svg"},
			"remove-icon":{"url":"images/inforama-ui/remove-icon.svg"},
			"slider-back-center":{"url":"images/inforama-ui/slider-back-center.svg"},
			"slider-back-center-selected":{"url":"images/inforama-ui/slider-back-center-selected.svg"},
			"slider-back-left":{"url":"images/inforama-ui/slider-back-left.svg"},
			"slider-back-left-selected":{"url":"images/inforama-ui/slider-back-left-selected.svg"},
			"slider-back-right":{"url":"images/inforama-ui/slider-back-right.svg"},
			"slider-cursor":{"url":"images/inforama-ui/slider-cursor.svg"},
			"tick":{"url":"images/inforama-ui/tick.svg"},
			"wait-icon":{"url":"images/inforama-ui/wait-icon-16.svg"},
			"wait-icon-circles":{"url":"images/inforama-ui/wait-icon-circles.svg"},
			"wait-icon-dots":{"url":"images/inforama-ui/wait-icon-dots.svg"},
			"warning-icon":{"url":"images/inforama-ui/warning-icon.svg"},
		},

		"classes":{
			"mainstyle":{
				"svgdefault":{"fillcolor":"#333333"}, 
				"svghover":{"fillcolor":"#8CC63E"}, 
				"cssdefault":{"opacity1":"0.5", "width":"50px", "height":"50px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1"}
			},
			"fisheye":{
				"svgdefault":{"fillcolor":"#333333"}, 
				"svghover":{"fillcolor":"#8CC63E"}, 
				"cssdefault":{"opacity1":"0.5", "width":"30px", "height":"30px", "transition":"all 0.5s"},
				"csshover":{"opacity":"1", "width":"50px", "height":"50px"}
			}
		}}

	);	

});