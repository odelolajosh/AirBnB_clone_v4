const $ = window.$;

$(document).ready(function () {
	let amenities = {};

	$(".amenities .popover ul li input").change(function () {
		if (this.checked) {
			amenities[$(this).attr("data-id")] = $(this).attr("data-name");
		} else {
			delete amenities[$(this).attr("data-id")];
		}
		$(".amenities h4").text(Object.values(amenities).join(", "));
	})
});