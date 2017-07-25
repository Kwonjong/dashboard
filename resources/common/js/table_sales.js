$( function(){
	$('.select2').select2()
})

$(function (){
	$('#sales_list').DataTable({
		"dom": 
			"<'row'<'title'><'select_box'>>" +
			"<'row'<'box-header with-border'<'data_toolbar'<'data_count'l><'data_search'f><'date_select_bar1'>>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>"
	});

	$('div.select_box').html('<select class="form-control select2" style="width: 100%;"><option selected="selected">전체(사업자선택)</option><option>사업자 1</option><option>사업자 2</option><option>사업자 3</option></select>');
	$('div.title').html('<b>기간 별 매출현황</b>');
	$('div.date_select_bar1').html('<button type="button" class="btn btn-default pull-right" id="daterange-btn1"><span><i class="fa fa-calendar"></i> 기간 선택</span><i class="fa fa-caret-down"></i></button>');

	// 날짜 선택
	$('#daterange-btn1').daterangepicker({
		ranges   : {
				'오늘'       : [moment(), moment()],
				'어제'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'7일' : [moment().subtract(6, 'days'), moment()],
				'15일': [moment().subtract(14, 'days'), moment()],
				'1개월'  : [moment().subtract(1, 'month'), moment()],
				'3개월'  : [moment().subtract(3, 'month'), moment()]
			},
			startDate: moment().subtract(29, 'days'),
			endDate  : moment()
		},

		function (start, end) {
		$('#daterange-btn1 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
	})
})

$(function (){
	$('#calc_list').DataTable({
		"dom": 
			"<'row'<'box-header with-border'<'title2'><'data_toolbar2'<'data_count'l><'data_search'f><'date_select_bar2'>>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
	});

	$('div.title2').html('<b>기간 별 정산현황</b>');
	$('div.date_select_bar2').html('<button type="button" class="btn btn-default pull-right" id="daterange-btn2"><span><i class="fa fa-calendar"></i> 기간 선택</span><i class="fa fa-caret-down"></i></button>');

	// 날짜 선택
	$('#daterange-btn2').daterangepicker({
		ranges   : {
				'오늘'       : [moment(), moment()],
				'어제'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'7일' : [moment().subtract(6, 'days'), moment()],
				'15일': [moment().subtract(14, 'days'), moment()],
				'1개월'  : [moment().subtract(1, 'month'), moment()],
				'3개월'  : [moment().subtract(3, 'month'), moment()]
			},
			startDate: moment().subtract(29, 'days'),
			endDate  : moment()
		},

		function (start, end) {
		$('#daterange-btn2 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
	})
})