$(function(){
	$('#question_list').DataTable({
		"dom":
			"<'row'<'data_search'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_paging'p>>"+
			"<'row'<'btn_set'>>",
		"columnDefs":[
			{"targets":[0, 1, 2], "orderable" : false}
		],
		"order":[]
	});

	$('div.btn_set').html('<button type="button" id="add_notice" class="btn btn-warning">추가</button> <button type="button" id="del_notice" class="btn btn-danger">삭제</button>');

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	});

	$('#add_notice').click(function(){
		$(location).attr('href', 'question_form.html');	
	});

	$('#del_notice').click(function(){
		// 삭제 버튼을 클릭하였을 때의 액션을 입력해주세요.
	});
})