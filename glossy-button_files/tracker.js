function wc_loader() {

	if (this.constructor == wc_loader) {
		wcl = this;
	} else {
		wcl = arguments[arguments.length-1];
	}
	
	wcl.loaded = false;
	wcl.keytimer = false;
	
	wcl.keydown = function(e) {
	    var keyId = (window.event) ? event.keyCode : e.keyCode;
	    var ctrlKey = (window.event) ? event.ctrlKey : e.ctrlKey;
	    var shiftKey = (window.event) ? event.shiftKey : e.shiftKey;
	    if ((keyId == 89 && shiftKey)) {
		wcl.keytimer = setTimeout(wcl.init, 1000);
	    }
	};
	
	wcl.keyup = function() {
	    if (wcl.keytimer) {
		wcl.clearit();
	    }
	};
	
	wcl.clearit = function() {
	    clearTimeout(wcl.keytimer);
	    wcl.keytimer = false;
	};
	
	wcl.init = function() {
	    if (!wcl.loaded) {
	        wcl.clearit();
	        wcl.loaded = true;
	
	        var el = document.createElement('script');
	        el.type = 'text/javascript';
	        el.src = 'http://www.w3counter.com/stats/pwidget.js';
	        document.body.appendChild(el);
	    }
	};
	
	if (window.AddEventListener) {
	    document.AddEventListener('keydown', wcl.keydown, false);
	    document.AddEventListener('keyup', wcl.keyup, false);
	} else if (window.attachEvent) {
	    document.attachEvent('onkeydown', wcl.keydown);
	    document.attachEvent('onkeyup', wcl.keyup);
	} else {
	    document.onkeydown = wcl.keydown;
	    document.onkeyup = wcl.keyup;
	}

}

function w3_cc(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toGMTString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function w3_rc(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}

function w3counter(id) {
	var info;
	info = '&userAgent=' + escape(navigator.userAgent);

	if (encodeURIComponent) {
	
		info = info + '&webpageName=' + encodeURIComponent(document.title);
		info = info + '&ref=' + encodeURIComponent(document.referrer);
        
		if (typeof _w3counter_label != 'undefined') {
			info = info + '&label=' + encodeURIComponent(_w3counter_label);
		}
 
	} else {
	
		info = info + '&webpageName=' + escape(document.title);
		info = info + '&ref=' + escape(document.referrer);
		
		if (typeof _w3counter_label != 'undefined') {
			info = info + '&label=' + escape(_w3counter_label);
		}
	
	}

	var viewportwidth;
	var viewportheight;
	 
	if (typeof window.innerWidth != 'undefined') {
	     viewportwidth = window.innerWidth;
	     viewportheight = window.innerHeight;
	} else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth !== 0) {
	      viewportwidth = document.documentElement.clientWidth;
	      viewportheight = document.documentElement.clientHeight;
	} else {
	      viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
	      viewportheight = document.getElementsByTagName('body')[0].clientHeight;
	}

	info = info + '&url=' + escape(window.location);
	info = info + '&width=' + screen.width;
	info = info + '&height=' + screen.height;
	info = info + '&depth=' + screen.colorDepth;
	info = info + '&vieww=' + viewportwidth;
	info = info + '&viewh=' + viewportheight;
	info = info + '&rand=' + Math.round(100*Math.random());

	_w3counter_id = id;
	if (typeof _w3counter_pwidget_disable == 'undefined' || _w3counter_pwidget_disable === 0) {
		_wcl_loader = new wc_loader();
	}

	var host = w3_rc('host');

	if (!host) {
		var randomnumber=Math.floor(Math.random() * 10 + 1);
		if (randomnumber <= 5) {
			host = 'www.w3counter.com';
		} else {
			host = 'mercury.w3counter.com';
		}
		w3_cc('host', host, 1);
	}

	document.write('<a href="http://www.w3counter.com"><img src="http://' + host + '/tracker.php?id=' + id + info + '" style="border: 0" alt="W3Counter Web Stats" /></a>');

}
