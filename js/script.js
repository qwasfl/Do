$('.button-servers').click(function () {
	$('#serversmodal').addClass('in');
});
$('.closethis').click(function () {
	$('#serversmodal').removeClass('in');
});
$('.copy-server').click(function () {
	var copyvar = $(this);
	copyvar.addClass('ok')
	setTimeout(function () {
		copyvar.removeClass('ok')
	}, 2000)
});
$('.gobut').hover(function () {
	$('#man').toggleClass('in');
});
new Clipboard('.copy-server');
var heightTop;

function heighter(heightTop) {
	if (self.innerHeight) {
		heightTop = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight) {
		heightTop = document.documentElement.clientHeight;
	}
	else if (document.body) {
		heightTop = document.body.clientHeight;
	}
	document.getElementById('content').style.height = heightTop - 310 + 'px';
}
heighter();
window.onresize = heighter;

error_show = 0;
error_head = {
	show: function(data) {
		$("#error_head").html(data);
		$("#error_head").fadeIn(100);
		if(error_show == 0) var error_hide = setInterval(function() { error_head.hide(); }, 8000);
		error_show = 1;
	},
	hide: function() {
		$("#error_head").fadeOut(150);
		clearInterval(error_hide);
	}
};

function str_replace(search, replace, subject) {
	return subject.split(search).join(replace);

}