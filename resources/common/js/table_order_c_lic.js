$( function(){
	$('#count_list').DataTable({
		"dom": 
			"<'row'<'data_count'l><'data_select'><'data_toolbar'<'data_search'f><'date_select'>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"order":[0, 'asc']
	});

	$('div.data_select').html('<select class="form-control select2"><option selected="selected">골라담기 주문내역</option><option>세트상품 주문내역</option></select>');
	$('div.date_select').html('<button type="button" class="btn btn-default pull-right" id="daterange-btn1"><span><i class="fa fa-calendar"></i> 기간 선택</span><i class="fa fa-caret-down"></i></button>');

	$(function(){
		$('.select2').select2()
	})

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