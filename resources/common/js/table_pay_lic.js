$( function(){
	$('#pay_list').DataTable({
		"dom": 
			"<'row'<'data_count'l><'data_toolbar'<'data_search'f><'date_select'>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0], "orderable":false },
		]
	});

	$('div.date_select').html('<button type="button" class="btn btn-default pull-right" id="daterange-btn1"><span><i class="fa fa-calendar"></i> 기간 선택</span><i class="fa fa-caret-down"></i></button>');

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

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	})
})