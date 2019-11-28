var base_url="http://thewebblend.com/";

if (typeof DRIGG_EVB!="function")
{
  function DRIGG_EVB(counter,divId,fullUrl) {
    frames[divId].location.href=fullUrl+'&destination='+escape(fullUrl); 
  }
}

if (!window.url_site)
  var url_site="";
if (!window.badge_size)
  var badge_size="large";

var conf = {};
if (badge_size == "compact") {
	conf.w = 85;
	conf.h = 16;
	conf.loadPage = 'load_compact.html';
} else {
	conf.w = 50;
	conf.h = 64;
	conf.loadPage = 'loader.html';
}

if(!window.DRIGG_EVB_i) 
  var DRIGG_EVB_i=0;

DRIGG_EVB_i=DRIGG_EVB_i+1; 
var full_url=base_url+'drigg_external/display_button?url='+escape(url_site)+"&badge_size="+badge_size;
var div_id='DRIGG_EVB-'+DRIGG_EVB_i;
document.write('<iframe scrolling="no" allowTransparency="true" name="'+div_id+'" id="'+div_id+'" src="'+base_url+'sites/all/modules/drigg_external/'+conf.loadPage+'" frameborder="0"  scrolling="0" width="'+conf.w+'" height="'+conf.h+'"></iframe>');
var callString="DRIGG_EVB("+DRIGG_EVB_i+",'"+div_id+"','"+full_url+"')";
setTimeout(callString,2500*DRIGG_EVB_i);
