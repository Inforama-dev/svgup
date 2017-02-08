var sidePanel;
var footer;

$(document).ready(function()	{
	sidePanel = new SiteSidePanel();
	footer = SiteFooter();
});

function SiteSidePanel()	{
	
	var content = $("<div style='display:table-cell; width:165px; height: 100%; background:#8CC63E'>");
	var logo = $("<div svgup-icon='site.svgup-logo' svgup-class='logo' class='logo' style='width:240px; height:180px'></div>");
	
	content.append(logo);
	
	logo.bind('click', function()	{
		window.location = 'index.html';
	});
	
	$('.site-side-panel').append(content);

	this.addLink = function(anchor, params)	{
			
		var link = $('<div class="side-link"></div>');
		var icon = $('<div class="svg-icon" svgup-icon="site.bullet" svgup-class="bullet" style="vertical-align:bottom; margin-right:10px; display:inline-block; width:20px; height:20px"></div>');
		icon.attr('id', params.id);
		var label = $('<div style="display:inline-block;">' + params.label + '</div>');
		
		link.append(icon);
		link.append(label);
		anchor.append(link);		
		return link;
		
	}
	
	this.registerBulletEvents = function()	{

		$('.side-link').bind('mouseenter', function(evt)	{
			var icon = SVGUpInstance.getBundle('site').getIcon($(this).find('.svg-icon').attr('id'));
			icon.doMouseEnter();
		});
		
		$('.side-link').bind('mouseleave', function(evt)	{
			var icon = SVGUpInstance.getBundle('site').getIcon($(this).find('.svg-icon').attr('id'));
			icon.doMouseLeave();
		});
		
	}
	
	var lnkShowBundles = this.addLink(content, {id:'side-link-1', label:'Show Bundles'});
	
	lnkShowBundles.bind('click', function()	{
		SVGUpInstance.preview();
	});
	
	var lnkIntroExample = this.addLink(content, {id:'side-link-2', label:'Introduction'});
	
	lnkIntroExample.bind('click', function()	{
		window.location = './intro.html';
	});
	
	var lnkBasicExample = this.addLink(content, {id:'side-link-3', label:'Basic Icons'});
	
	lnkBasicExample.bind('click', function()	{
		window.location = './demos/basic.html';
	});
	
	var lnkBasicLayersExample = this.addLink(content, {id:'side-link-4', label:'Basic Layers'});
	
	lnkBasicLayersExample.bind('click', function()	{
		window.location = './demos/basic-layers.html';
	});
	
	var lnkLayersExample = this.addLink(content, {id:'side-link-5', label:'Layers'});
	
	lnkLayersExample.bind('click', function()	{
		window.location = 'demos/layers.html';
	});
	
	var lnkFisheyeExample = this.addLink(content, {id:'side-link-6', label:'Fisheye'});
	
	lnkFisheyeExample.bind('click', function()	{
		window.location = 'demos/fisheye.html';
	});
	
	var lnkEffectsExample = this.addLink(content, {id:'side-link-7', label:'Effects'});
	
	lnkEffectsExample.bind('click', function()	{
		window.location = 'demos/effects.html';
	});
	
	var lnkEffectsGit = this.addLink(content, {id:'side-link-8', label:'Download'});
	
	lnkEffectsGit.bind('click', function()	{
		window.open('https://github.com/Inforama-dev/svgup');
	});
	
	
	this.registerBulletEvents();
	
}


function SiteFooter()	{

	var content = $("<div style='position1:absolute; text-align:center; padding:10px; top: 0px; width:100%; color:#AAA; background1:#FFFF00; border-top:1px solid #CCC'>footer</div>");
	content.html('copyright &copy; Inforama Ltd. 2017, <a style="color:#AAA" href="www.inforama.com">www.inforama.com</a>')

	$(document.body).append(content);
	
	$(window).resize(function()	{
		/*console.log($(window).height());
		console.log($(window).scrollTop());
		console.log($(document).height());
		console.log($(document).scrollTop());
		content.css('top', $(window).height() - 30);*/
	});
	
	$(window).resize();
	
}