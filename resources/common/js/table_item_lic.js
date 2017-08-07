$(function (){
	$('#menu_list').DataTable({
		"dom": 
			"<'row'<'data_toolbar'<'data_count'l>><'data_search'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0, 1, 5], "orderable":false },
		],
		"order":[2, 'asc']
	});

	$('.select2').select2();

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	})
})