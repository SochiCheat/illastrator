(function() {

var year = '';
var authorId = '';

function change(wpurl, args, loading) {
	var url = wpurl + '?action=ea_monthly_ajax&year=' + year + '&author_id=' + authorId + '&args=' + args;

	jQuery.ajax({
		type:         'GET'
		,url:         url
		,cache:       false
		,contentType: 'text/html; charset=utf-8'

		,beforeSend: function(data){
			document.body.style.cursor = "wait";
			jQuery('#easy-archives div.filter').html('<div id="ea_ajax_loader">' + ((loading == undefined) ? 'Loading...' : loading + '...') + '</div>');
		}

		,success: function(data){
			jQuery('#easy-archives').fadeOut(function(){
				jQuery(this).html(data).fadeIn();
			});
			document.body.style.cursor = "auto";
		}

		,error: function(data){
			jQuery('#easy-archives').html('<p>Oops, failed to load data.</p>');
			document.body.style.cursor = "auto";
		}
	});
}

function changeYear(wpurl, args, select, loading) {
	year = select.value;
	change(wpurl, args, loading);
}

function changeAuthor(wpurl, args, select, loading) {
	authorId = select.value;
	change(wpurl, args, loading);
}

function toggle(button) {
	if (button.className == "open-button") {
		jQuery(button).parent().next().slideUp(function() {
			jQuery(button).removeClass().addClass("closed-button");
		}).removeClass().addClass('closed');
	} else {
		jQuery(button).parent().next().slideDown(function() {
			jQuery(button).removeClass().addClass("open-button");
		}).removeClass().addClass('open');
	}
}

function expandAll() {
	jQuery('#easy-archives a.closed-button').each(function() {
		toggle(this);
	});
}

function collapseAll(target) {
	jQuery('#easy-archives a.open-button').each(function() {
		toggle(this);
	});
}

window["EAJS"] = {};
window["EAJS"]["changeYear"] = changeYear;
window["EAJS"]["changeAuthor"] = changeAuthor;
window["EAJS"]["toggle"] = toggle;
window["EAJS"]["expandAll"] = expandAll;
window["EAJS"]["collapseAll"] = collapseAll;

})();
