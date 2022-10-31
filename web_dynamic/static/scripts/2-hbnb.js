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
	});

	$.get("http://0.0.0.0:5001/api/v1/status/", function(data, status) {
		if (status === "success") {
			if (data.status === "OK") {
				$("#api_status").addClass("available");
			} else {
				$("#api_status").removeClass("available");
			}
		}
	});
});