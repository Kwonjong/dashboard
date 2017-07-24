$(function (){
	$('#user_list').DataTable({
		"dom": 
			"<'row'<'data_toolbar'<'data_count'l><'data_btn'><'data_search'f>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0], "orderable":false },
		]
	});

	$('div.data_btn').html('<button type="button" class="btn btn-danger">삭제</button> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-default">추가</button>');
})