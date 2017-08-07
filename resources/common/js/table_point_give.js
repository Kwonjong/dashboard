$(function (){
	$('#point_list').DataTable({
		"dom": 
			"<'row'<'box-header with-border'<'title'><'data_toolbar2'<'data_count'l><'data_search'f>>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0], "orderable":false },
		]
	});

	$('div.title').html('<b>포인트 선택</b>');

	$('#user_list').DataTable({
		"dom": 
			"<'row'<'box-header with-border'<'title2'><'data_toolbar3'<'data_count'l><'data_search'f><'data_btn2'>>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0], "orderable":false },
		]
	});

	$('div.title2').html('<b>사용자 선택</b>');
	$('div.data_btn2').html('<button type="button" class="btn btn-warning">포인트 지급</button>');

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	})
})