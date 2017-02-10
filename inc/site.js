var sidePanel;
var footer;

$(document).ready(function()	{
	sidePanel = new SiteSidePanel();
	footer = SiteFooter();
});

function SiteSidePanel()	{

	if (window.location.hostname == 'www.inforama.com')	{
		
		var _mfq = _mfq || [];
		(function() {
		   var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
		   mf.src = "//cdn.mouseflow.com/projects/3759fa10-e67b-4af8-833e-f6d2c1f0d55c.js";
		   document.getElementsByTagName("head")[0].appendChild(mf);
		})();


		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-41278367-1']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
		
	}

	var content = $("<div style='display:table-cell; width:165px; height: 100%; background:#8CC63E'>");
	var logo = $("<a href='./index.html'><div svgup-icon='site.svgup-logo' svgup-class='logo' class='logo' style='width:240px; height:180px'></div></a>");
	
	content.append(logo);
	
	$('.site-side-panel').append(content);

	this.addLink = function(anchor, params)	{
			
		var aref = $('<a></a>');
		if (params.href != null)	{
			aref.attr('href', params.href);
		}
		var link = $('<div class="side-link" svgup-proxy=".svg-icon"></div>');
		var icon = $('<div class="svg-icon" svgup-icon="site.bullet" svgup-class="bullet" style="vertical-align:bottom; margin-right:10px; display:inline-block; width:20px; height:20px"></div>');
		icon.attr('id', params.id);
		var label = $('<div style="display:inline-block;">' + params.label + '</div>');
		
		link.append(icon);
		link.append(label);
		aref.append(link);
		anchor.append(aref);		
		return aref;
		
	}
	
	var lnkShowBundles = this.addLink(content, {id:'side-link-1', label:'Show Bundles'});
	
	lnkShowBundles.bind('click', function()	{
		SVGUpInstance.preview();
	});
	
	var lnkIntroExample = this.addLink(content, {id:'side-link-2', label:'Introduction', href:'./intro.html'});
	var lnkBasicExample = this.addLink(content, {id:'side-link-3', label:'Basic Icons', href:'./demos/basic.html'});
	var lnkBasicLayersExample = this.addLink(content, {id:'side-link-4', label:'Basic Layers', href:'./demos/basic-layers.html'});
	var lnkLayersExample = this.addLink(content, {id:'side-link-5', label:'Layers', href:'./demos/layers.html'});
	var lnkFisheyeExample = this.addLink(content, {id:'side-link-6', label:'Fisheye', href:'./demos/fisheye.html'});
	var lnkEffectsExample = this.addLink(content, {id:'side-link-7', label:'Effects', href:'./demos/effects.html'});
	
	var lnkEffectsGit = this.addLink(content, {id:'side-link-8', label:'Download'});
	
	lnkEffectsGit.bind('click', function()	{
		window.open('https://github.com/Inforama-dev/svgup');
	});
	
	var lnkEffectsLicense = this.addLink(content, {id:'side-link-9', label:'License'});
	
	lnkEffectsLicense.bind('click', function()	{
		window.open('https://github.com/Inforama-dev/svgup/blob/master/license.txt');
	});
	
	var lnkEffectsIndexer = this.addLink(content, {id:'side-link-10', label:'Indexer', href:'./indexer.html'});

}


function SiteFooter()	{

	var content = $("<div class='footer'>footer</div>");
	content.html('copyright &copy; Inforama Ltd. 2017, <a style="color:#AAA" href="https://www.inforama.com">www.inforama.com</a>')

	content.css({'position':'absolute'});
	
	$('.maincontent').append(content);
	
	$(window).resize(function()	{
		content.css('top', $(window).height() - 40);
	});
	
	$(window).resize();
	
}