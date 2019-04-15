// 프로젝트에 마우스오버시 그림자

$(".project").on('mouseover', function(event) {
	var projectName = event.currentTarget;
	$(projectName).css('box-shadow', '0px 3px 5px 0 rgba(0, 0, 0, 0.15)');
})

$(".project").on('mouseleave', function(event) {
	var projectName = event.currentTarget;
	$(projectName).css('box-shadow', 'none');
})

// 네비게이션 링크 클릭시 해당 페이지로 천천히 이동
$('.navbar a').on('click', pageMove);

function pageMove(event) {
	var id = $(this).attr('id');
	if (id == "section2") {
		$('html, body').animate({scrollTop: $('.portfolio').position().top}, 1000)
	} else if (id == "section3") {
		$('html, body').animate({scrollTop: $('.moreaboutme').position().top}, 2000)
	}
}

//페이지 최하단 이동시 tothetop 보이
$(window).on('scroll', function () {
	if ($(window).scrollTop() >= $('.moreaboutme').position().top) {
		$('#tothetop').fadeIn(1000);
	} else {
		$('#tothetop').fadeOut(1000);
	}
})


//최상단 이동
$('#tothetop').on('click', function() {
	$('html, body').animate({scrollTop: 0}, 2000)
})


// $(".project").on('mouseover', function(event) {
// 	var projectName = $(this).attr('class');
// 	$(projectName).css('box-shadow', '0px 3px 5px 0 rgba(0, 0, 0, 0.15)');
// }) 안 먹힘 왜 안먹히징

