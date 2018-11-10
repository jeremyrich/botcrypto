(function($) {
	// Move the Offcanvas Toggle button in the Header
	$(document).ready(function() {
		$("div.g-offcanvas-toggle:not(.offcanvas-toggle-particle)").prependTo($("#g-header"));
	});

	// Copyright Border
	$(document).ready(function() {
		if( $('#g-copyright').length ) {
			$('<div class="g-copyright-border"></div>').prependTo($("#g-copyright .g-container"));
		}
	});
})(jQuery);