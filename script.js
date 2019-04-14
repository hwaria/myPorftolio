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