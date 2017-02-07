var sidePanel;

$(document).ready(function()	{
	sidePanel = new SiteSidePanel();
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
		var icon = $('<div style="display:inline-block; width:20px; height:20px"></div>');
		var label = $('<div style="display:inline-block;">' + params.label + '</div>');
		
		link.append(icon);
		link.append(label);
		anchor.append(link);		
		return link;
		
	}
	
	var lnkShowBundles = this.addLink(content, {label:'Show Bundles'});
	
	lnkShowBundles.bind('click', function()	{
		SVGUpInstance.preview();
	});
	
	var lnkIntroExample = this.addLink(content, {label:'Introduction'});
	
	lnkIntroExample.bind('click', function()	{
		window.location = './intro.html';
	});
	
	var lnkBasicExample = this.addLink(content, {label:'Basic Icons'});
	
	lnkBasicExample.bind('click', function()	{
		window.location = './demos/basic.html';
	});
	
	var lnkBasicLayersExample = this.addLink(content, {label:'Basic Layers'});
	
	lnkBasicLayersExample.bind('click', function()	{
		window.location = './demos/basic-layers.html';
	});
	
	var lnkLayersExample = this.addLink(content, {label:'Layers'});
	
	lnkLayersExample.bind('click', function()	{
		window.location = 'demos/layers.html';
	});
	
	var lnkFisheyeExample = this.addLink(content, {label:'Fisheye'});
	
	lnkFisheyeExample.bind('click', function()	{
		window.location = 'demos/fisheye.html';
	});
	
	var lnkEffectsExample = this.addLink(content, {label:'Effects'});
	
	lnkEffectsExample.bind('click', function()	{
		window.location = 'demos/effects.html';
	});
	
}