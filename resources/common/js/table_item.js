$(function (){
	$('#menu_list').DataTable({
		"dom": 
			"<'row'<'data_toolbar'<'data_count'l><'data_btn'>><'data_search'<'select_box'>f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0, 1], "orderable":false },
		],
		"order":[2, 'asc']
	});

	$('div.data_btn').html('<button type="button" class="btn btn-danger">삭제</button> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-default">상품추가하기</button>');
	$('div.select_box').html('<div class="select_box"><select class="form-control select2" style="width: 100%;"><option selected="selected">반찬가게선택</option><option>옆집반찬</option><option>앞집반찬</option><option>뒷집반찬</option></select></div>');

	$('.select2').select2();

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	})
})