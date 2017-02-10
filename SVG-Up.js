var SVGUpInstance = new SVGUp();

//if (window.location.protocol == 'file:')	{
//	SVGUpInstance.setBaseLocation('https://testa.inforama.com/InforamaJS/svgup/');
//}

function SVGUp()	{
	
	var wrapper = this;

	this.bundles = {default:new SVGUpBundle('default')};	
	this.icons = new Object();
	this.domDiscovered = false;
	
	//this.baseLocation;
	
	this.getIcons = function(bundle)	{
		return wrapper.bundles[this.getBundleName(bundle)].getIcons();
	}
	
	//this.setBaseLocation = function(loc)	{
	//	this.baseLocation = loc;
	//}
	
	this.getIcon = function(id, bundle)	{		
		return wrapper.bundles[this.getBundleName(bundle)].getIcon(id);		
	}

	this.init = function(bundleName, items, imagesLoadedListener)	{
		
		var bundle = this.getBundle(this.getBundleName(bundleName), imagesLoadedListener);
		bundle.init(items);
		bundle.fetch();
		
	}
	
	this.getBundleName = function(bundle)	{
		return (bundle == null) ? 'default' : bundle
	}
	
	this.getBundle = function(bundleName, imagesLoadedListener)	{
		
		var bundle = this.bundles[this.getBundleName(bundleName)];
		
		if (bundle == null)	{
			bundle = this.bundles[this.getBundleName(bundleName)] = new SVGUpBundle(bundleName);
			//bundle.setBaseLocation(this.baseLocation);
			this.addBundleListener(bundle);
		}
		
		if (imagesLoadedListener)	{
			bundle.addImagesLoadedListener(imagesLoadedListener);
		}
		
		return bundle;
		
	}
	
	this.addBundleListener = function(bundle)	{
		
		bundle.addUpdateListener(function(bundleName)	{

			if (wrapper.domDiscovered)	{
				var icons = wrapper.icons[bundleName];
				wrapper.displayBundle(bundleName, icons, null, true);
			}
			
		});
		
	}
	
	this.loadAutoImages = function(target)	{
		
		target = (target == null) ? $(document) : target;
		
		target.find('div[svgup-icon]').each(function()	{
			
			var imageName = $(this).attr('svgup-icon');
			var imageClass = $(this).attr('svgup-class');
			
			var nameParts = imageName.split('.');
			var bundleName = (nameParts.length > 1) ? nameParts[0] : 'default'
			imageName = (nameParts.length == 2) ? nameParts[1] : nameParts[0]

			var width = $(this).width();	
			var height = $(this).height();
			var params = {width:width, height:height, imageName:imageName, imageClass:imageClass};
			var icon = new SVGUPIcon($(this), params);
			var iconArr = wrapper.icons[bundleName];
			
			if (iconArr == null)	{
				iconArr = wrapper.icons[bundleName] = new Array();
			}
			
			iconArr.push(icon);
			
		});
		
		for (var key in wrapper.icons) {
		
			var iconNameArr = new Array();
			var icon = wrapper.icons[key];
			
			for (var i = 0; i < icon.length; i++)	{				
				iconNameArr.push(icon[i].params.imageName);
			}

			if (wrapper.bundles[key] != null)	{
				wrapper.displayBundle(key, wrapper.icons[key]);
			}
			
		}

		this.domDiscovered = true;
		
	}

	this.displayBundle = function(bundleName, icons, target, disableCallback)	{
		
		var iconNameArr = new Array();
		var icon = icons;
		
		if (icons != null)	{

			for (var i = 0; i < icon.length; i++)	{				
				iconNameArr.push(icon[i].params.imageName);
			}

			if (wrapper.bundles[bundleName] != null)	{				
				wrapper.bundles[bundleName].loadAutoImages(wrapper.icons[bundleName]);
			}

		}

	}
	
	this.addBundleListener(this.getBundle('default'));
	
	$(document).ready(function()	{	
		wrapper.loadAutoImages();
	})
	
	this.preview = function()	{
		
		var dialog = $('<div class="dialog-parent"><div>');
		var table = $('<div style="display:inline-table; width:98%; height:90%"></div>');
		var divBundles = $('<div style="vertical-align:top; display:table-cell; width:200px; height: 95%; background:#8cc63e; padding:10px"></div>');
		var divPreview = $('<div style="vertical-align:top; display:table-cell; width:calc(100% - 200px); height: 95%; padding1:10px"></div>');
		var divPreviewTitle = $('<div style="vertical-align:top; width:100%; height: 60px; padding:5px; background:#EEE"></div>');
		var divPreviewIcons = $('<div style="vertical-align:top; width:100%; height: 80%; padding:5px; background:#FFF; overflow:auto"></div>');
		divPreview.append(divPreviewTitle)
		divPreview.append(divPreviewIcons)
		
		dialog.append(table);
		divBundles.append('<div style="font-size:20px; color:#FFF; margin-bottom:10px">Loaded Bundles</div>');
		table.append(divBundles);
		table.append(divPreview);
		
		var dlgFooter = $('<div style="border-top:#666; background:#EEE; height:10%"></div>');
		dialog.append(dlgFooter);
		
		var titleContent = $(
		"<div style='padding:20px'>" +
			"<div style='display:inline-table'>" +
				"<div class='prompt' style='display:table-cell'>Styles:</div>" +
				"<div class='prompt' style='padding-left:10px; display:table-cell'><select id='cmbSvgUpStyles' class='input'></select></div>" +
			"</div>" +
			"<div style='margin-left:50px; display:inline-table'>" +
				"<div class='prompt' style='display:table-cell'>Image Name:</div>" +
				"<div class='prompt' style='padding-left:10px; display:table-cell' id='divImageName'></div>" +
			"</div>" +
		"</div>");

		this.cmbSvgUpStyles = titleContent.find('#cmbSvgUpStyles');
		divPreviewTitle.append(titleContent);
		
		this.cmbSvgUpStyles.bind('change', function()	{
			
			var bundleName = divBundles.attr('currentbundle');
			var bundle = SVGUpInstance.getBundle(bundleName);
			var styleName = $(this).val();
			var svgClass = bundle.getClass(styleName);
			bundle.setStyle(svgClass);
			
			for (key in bundle.iconCache)	{
				var content = bundle.iconCache[key].getContent();
				var svg = content.find('svg');
				
				
				content.height(svg.height());
				content.width(svg.width());
				
			}
			
		});
		
		$(document.body).append(dialog);
		
		for (key in this.bundles)	{

			var link = $('<div style="font-size:16px; margin:5px"></div>');
			var rad = $('<input type="radio" name="bundle" id="bundle"/>');
			rad.attr('bundle', key);
			link.append(rad);
			link.append(key );
			divBundles.append(link);
			
			rad.bind('change', function()	{
				
				divPreviewIcons.empty();
				
				var bundleName = $(this).attr('bundle');
				
				var bundle = wrapper.bundles[bundleName];
				var manifest = bundle.getManifest();
				var icons = manifest.icons;
				
				for (iconKey in icons)	{
					var iconname = bundleName + '.' + iconKey;
					var anchor = $('<div svgup-icon="' + iconname + '" title=' + iconname + ' style="display:inline-block; margin:10px; min-width:32px; min-height:32px"></div>');
					divPreviewIcons.append(anchor);
					anchor.bind('click', function()	{
						divPreviewTitle.find('#divImageName').html($(this).attr('svgup-icon'));
					})
				}
				
				var icons = wrapper.icons[bundleName];
				wrapper.loadAutoImages(divPreviewIcons);
				
				var classes = bundle.manifest.classes;
				wrapper.cmbSvgUpStyles.empty();
				
				wrapper.cmbSvgUpStyles.append('<option>[select style]</option>');
				for (key in classes)	{
					wrapper.cmbSvgUpStyles.append('<option>' + key + '</option>');
				}
				
				divBundles.attr('currentbundle', bundleName);
				
			});
			
		}

		$(document).on("keyup", function(evt)	{
		
			if (evt.keyCode == 27)	{
				evt.stopPropagation();
				dialog.remove();
			}

		});

		var btnClose = $('<input type="button" value="Close" style="width:200px; height:25px; margin:10px; float:right"/>');
		btnClose.bind('click', function()		{
			dialog.remove();
		});
		dlgFooter.append(btnClose)
		
	}

}

function SVGUpBundle(name)	{
	
	this.name = name;
	var wrapper = this;
	
	//this.baseLocation;
	this.manifest;
	
	this.svgCache = new Object();
	this.iconCache = new Object();
	
	this.cacheLoaded = false;	
	this.updateListeners = new Array();
	
	this.imagesLoadedListeners = new Array();
	
	this.baseUrl;
	
	//this.setBaseLocation = function(loc)	{
	//	this.baseLocation = loc;
	//}
	
	this.addImagesLoadedListener = function(listener)	{
		this.imagesLoadedListeners.push(listener);
	}
	
	this.addImage = function(params, data)	{
		wrapper.svgCache[params.name] = {params:params, data:data};
	}
	
	this.getSVG = function(name, callback)	{
	
		if (wrapper.svgCache != null)	{
			return wrapper.svgCache[name];
		}

	}

	this.getClass = function(name)	{
		if ((this.manifest != null) && (this.manifest.classes != null))	{
			return this.manifest.classes[name];
		}
	}
	
	this.addCacheImage = function(id, icon)	{
		this.iconCache[id] = icon;		
	}
	
	this.getIcons = function()	{
		
		return this.iconCache;
		
	}
	
	this.getIcon = function(id)	{
		
		return this.iconCache[id];
		
	}
	

	this.getCacheString = function()	{
		return JSON.stringify(wrapper.svgCache);
	}

	this.setCacheString = function(str)	{
		if (str != null && str != '' && str != 'null')	{
			wrapper.svgCache = JSON.parse(str);
			wrapper.cacheLoaded = true;
			this.notifyListeners()			
		}
	}

	this.addUpdateListener = function(listener)	{
		wrapper.updateListeners.push(listener);
		if (wrapper.cacheLoaded)	{
			listener();
		}
	}
	
	this.init = function(manifest)	{
		
		this.manifest = manifest;
		
		if (this.manifest.options != null)	{			
			this.baseUrl = this.manifest.options.base;
		}
		
	}

	this.fetch = function(items, callback, disableCallback)	{

		var total = (items == null) ? Object.keys(this.manifest.icons).length : items.length;
		
		var count = 0;
		
		for (var i = 0; i < total; i++)	{
			
			var key = (items == null) ? Object.keys(this.manifest.icons)[i] : items[i];
			var item = (items == null) ? this.manifest.icons[key] : this.manifest.icons[key];
			item.name = key;
			
			if (this.baseUrl != null)	{
				var temp = this.baseUrl + item.url;
				item.url = temp;
			}

			new InforamaFileFetcher(item, 

				function(data, params)	{
					
					wrapper.addImage(params, data);
					count++;

					console.log('in fetch : ' + data.length);

					if (count == total)	{
						
						wrapper.cacheLoaded = true;
						
						if ( ! disableCallback)	{							
							wrapper.notifyListeners();
						}
						
						if (callback)	{
							callback();
						}
						
					}
					
				}

			);

		}

	}
	
	this.notifyListeners = function()	{
		
		for (var i = 0; i < wrapper.updateListeners.length; i++)	{
			wrapper.updateListeners[i](wrapper.name);
		}
	
	}
		
	this.loadAutoImages = function(icons)	{
				
		if (icons != null)	{
			
			for (var i = 0; i < icons.length; i++)	{
			
				if ( ! icons[i].isRendered())	{
					
					var svg = wrapper.getSVG(icons[i].params.imageName);
					
					if (svg != null)	{
							
						var svgClass = wrapper.getClass(icons[i].params.imageClass);
						icons[i].params.svg = svg;
						icons[i].params.class = svgClass;
						icons[i].showImage();
						
						if ((this.manifest != null) && (this.manifest.icons[icons[i].params.imageName].layered))	{
							
							console.log(svg.length);
							
							var layeredImage = new InforamaSVGLayerIcon(icons[i]);
							icons[i] = layeredImage;
						}
						
						var id = icons[i].getAnchor().attr('id');
						
						if (id == null)	{
							id = icons[i].params.imageName;
						}
						
						wrapper.addCacheImage(id, icons[i]);				

					}

				}
				
			}

			for (var i = 0; i < wrapper.imagesLoadedListeners.length; i++)	{
				wrapper.imagesLoadedListeners[i](wrapper.name);
			}

		}

	}
	
	this.getManifest = function()	{
		return this.manifest;
	}
	
	this.setStyle = function(style)	{
		
		for (key in this.iconCache)	{
			this.iconCache[key].params.class = style;
			this.iconCache[key].registerStyles();
			//inforamaSVGStyler.applyStyle(this.iconCache[key], style.cssdefault, style.svgdefault);
		}
		
	}

	this.destroy = function()	{

		for (key in this.iconCache)	{
			this.iconCache[key].destroy();
		}
		
		this.iconCache = new Object();

	}
	
}

function InforamaFileFetcher(params, callback)	{

	var params = params;

    jQuery.get(params.url, function (data, status, responseObj) {        
		callback(responseObj.responseText, params);
    });

}

function SVGUPIcon(anchor, params)	{

	this.anchor = anchor;
	this.params = params;
	
	var wrapper = this;
	this.svgImage;
	var content;

	var clickListener;
	
	this.hoverEffects = new Array();

	content = $('<div class="svgup-image-container" style="text-align:center;"></div>');
	content.css('height', params.height);
	content.css('width', params.width);		
	
	this.showImage = function()	{
			
		if (params.svg != null)	{
		
			this.svgImage = $(params.svg.data);
			this.svgImage.attr('height', params.height);
			this.svgImage.attr('width', params.width);

			content.append(this.svgImage);

			anchor.append(content);

			anchor.bind('click', function()	{
				if (clickListener != null)	{
					clickListener();
				}
			});

			if (params.css != null)	{
				anchor.css(params.cssdefault);
			}

			if (params.class != null)	{
				
				wrapper.registerStyles();
			
			}

		}
		
	}
	
	this.registerStyles = function()	{
		
		inforamaSVGStyler.applyStyle(this, params.class.cssdefault, params.class.svgdefault);

		if (params.class.csshover != null)	{
			content.bind('mouseenter', function(evt)	{						
				wrapper.doMouseEnter();
			});
			content.bind('mouseleave', function()	{						
				wrapper.doMouseLeave();
			});
		}
		
	}
	
	this.doMouseEnter = function(evt)	{
		inforamaSVGStyler.applyStyle(wrapper, params.class.csshover, params.class.svghover);
	}
	
	this.doMouseLeave = function(evt)	{
		inforamaSVGStyler.applyStyle(wrapper, params.class.cssdefault, params.class.svgdefault);
	}
	
	this.isRendered = function()	{
		return (this.anchor.children().length > 0)
	}

	this.getAnchor = function()	{
		return anchor;
	}
		
	this.getContent = function()	{
		return content;
	}

	this.setImage = function(svg, params)	{

		content.empty();

		wrapper.svgImage = $(svg);
		wrapper.svgImage.attr('height', params.height);
		wrapper.svgImage.attr('width', params.width);

		content.append(wrapper.svgImage);

	}

	this.setAttribute = function(find, attr, value)	{

		if (wrapper.svgImage != null)	{			
			wrapper.svgImage.find(find).attr(attr, value);
		}

	}

	this.setCSS = function(css)	{
		
		if (wrapper.svgImage != null)	{			
			wrapper.svgImage.css(css);
		}
		
	}
	
	this.getSVGImage = function()	{
		return wrapper.svgImage;
	}
	
	this.setClickListener = function(listener)	{
		clickListener = listener;
	}
	
	this.addHoverEffect = function(effect)	{
		this.hoverEffects.push(effect);
	}
	
	this.removeHoverEffects = function()	{
		for (var i = 0; i < this.hoverEffects.length; i++)	{
			this.hoverEffects[i].removeEffect();
		}		
	}
	
	this.destroy = function()	{
		content.remove();
	}

}

function InforamaSVGLayerIcon(icon)	{

	var wrapper = this;
	this.icon = icon;
	var layers = new Object();
	this.params = icon.params;
	
	var layerElements = icon.getContent().find('g[id]');
	
	for (var i = 0; i < layerElements.length; i++)	{
		layers[layerElements[i].id] = $(layerElements[i]);
	}
	
	if (icon.params.svg == null)	{
		console.log(1);
	}
	console.log('layers found: ' + icon.params.svg.data.length);
	
	this.getLayer = function(id)	{
		return layers[id];
	}
	
	this.setLayerAttribute = function(layerName, find, attr, value)	{

		var layerObj = layers[layerName];
		layerObj.find(find).attr(attr, value);
		
	}
	
	this.showImage = function()	{
		this.icon.showImage();
		this.registerStyles();
	}

	this.getAnchor = function()	{
		return this.icon.getAnchor();
	}
	
	this.registerStyles = function()	{
		
		
		if ((this.icon.params.class != null) && (this.icon.params.class.layers != null))	{

			for (var i = 0; i < this.icon.params.class.layers.length; i++)	{
				
				var layer = this.icon.params.class.layers[i];
				inforamaSVGStyler.applyLayerStyle(this, layer, layer.style.cssdefault, layer.style.svgdefault);
				
			}

		}
		
		this.icon.getContent().bind('mouseenter', function(evt)	{
			wrapper.doMouseEnter();
		});
		
		this.icon.getContent().bind('mouseleave', function()	{
			wrapper.doMouseLeave();
		});

		this.doMouseEnter = function(evt)	{
			
			for (var i = 0; i < wrapper.icon.params.class.layers.length; i++)	{
				
				var layer = wrapper.icon.params.class.layers[i];
				inforamaSVGStyler.applyLayerStyle(wrapper, layer, layer.style.csshover, layer.style.svghover);
				
			}
			
		}
		
		this.doMouseLeave = function(evt)	{

			for (var i = 0; i < wrapper.icon.params.class.layers.length; i++)	{
				
				var layer = wrapper.icon.params.class.layers[i];
				inforamaSVGStyler.applyLayerStyle(wrapper, layer, layer.style.cssdefault, layer.style.svgdefault);
				
			}
			
			wrapper.icon.removeHoverEffects();

		}
		
	}
	
	this.getSVGImage = function()	{
		return this.icon.svgImage;
	}	
	
	this.isRendered = function()	{
		return this.icon.isRendered();
	}	
	
	this.addHoverEffect = function(effect)	{
		this.icon.addHoverEffect(effect);
	}
	
	this.getContent = function()	{
		return this.icon.getContent();
	}
	
	this.registerStyles();

}

function InforamaSVGStyler()	{
	
	var wrapper = this;

	this.applyStyle = function(icon, css, svgstyle)	{
		
		if (css != null)	{			
			icon.getSVGImage().css(css);
		}

		if (svgstyle != null)	{

			if (svgstyle.fillcolor != null)	{
				icon.setAttribute('path', 'fill', svgstyle.fillcolor);
				icon.setAttribute('polygon', 'fill', svgstyle.fillcolor);
				icon.setAttribute('circle', 'fill', svgstyle.fillcolor);
				icon.setAttribute('rect', 'fill', svgstyle.fillcolor);
			}
			if (svgstyle.strokecolor != null)	{
				icon.setAttribute('path', 'stroke', svgstyle.strokecolor);
				icon.setAttribute('polygon', 'stroke', svgstyle.strokecolor);
				icon.setAttribute('circle', 'stroke', svgstyle.strokecolor);
				icon.setAttribute('rect', 'stroke', svgstyle.strokecolor);
			}

		}

	}
	
	this.applyLayerStyle = function(icon, layerRef, css, svgstyle)	{
	
		var layer = icon.getLayer(layerRef.id);

		if (svgstyle != null)	{

			if (svgstyle.fillcolor != null)	{
				layer.find('path').attr('fill', svgstyle.fillcolor);
				layer.find('circle').attr('fill', svgstyle.fillcolor);
				layer.find('rect').attr('fill', svgstyle.fillcolor);
			}

			if (svgstyle.strokecolor != null)	{
				layer.find('path').attr('stroke', svgstyle.strokecolor);				
				layer.find('circle').attr('stroke', svgstyle.strokecolor);				
				layer.find('rect').attr('stroke', svgstyle.strokecolor);				
			}

			if (svgstyle.rotate != null)	{
				var effect = new SVGStyleRotate(layer, svgstyle.rotate);
				effect.applyEffect();
				icon.addHoverEffect(effect);
			}
			
		}
		
		if (css != null)	{

			layer.css(css);
			
		}

		
	}
	
}

function SVGBaseEffect(element, style)	{

	this.element = element;
	this.style = style;

	SVGBaseEffect.prototype.applyEffect = function()	{

	}
	
	SVGBaseEffect.prototype.removeEffect = function()	{

	}
	
}

SVGStyleRotate.prototype = new SVGBaseEffect();

function SVGStyleRotate(element, style)	{

	var rotateEle;
	SVGBaseEffect.call(this, element, style);

	this.applyEffect = function()	{			
		
		var bb = element.get(0).getBBox();
		var cx = bb.x + bb.width / 2;
		var cy = bb.y + bb.height / 2;
		
		var duration = style.duration;
		var repeat = (style.repeatCount == null) ? 'indefinite' : style.repeatCount;
		var rotation = (style.anticlockwise == true) ? -360 : 360;
		
		var svgNS = "http://www.w3.org/2000/svg";		
		rotateEle = document.createElementNS(svgNS, "animateTransform");

		var bb = element.get(0).getBBox();
		var cx = bb.x + bb.width/2;
		var cy = bb.y + bb.height/2;

		rotateEle.setAttributeNS(null, "attributeName", "transform");
		rotateEle.setAttributeNS(null, "attributeType", "XML");
		rotateEle.setAttributeNS(null, "type", "rotate");
		rotateEle.setAttributeNS(null, "dur", duration + "s");
		rotateEle.setAttributeNS(null, "repeatCount", repeat);
		rotateEle.setAttributeNS(null, "from", "0 " + cx + " " + cy);
		rotateEle.setAttributeNS(null, "to", rotation + " " + cx + " " + cy);

		element.get(0).appendChild(rotateEle);
		
		if ('beginElement' in rotateEle) {
			rotateEle.beginElement();
		}
		
	}
	
	this.removeEffect = function()	{			
		rotateEle.remove();
	}
	
}

var inforamaSVGStyler = new InforamaSVGStyler();