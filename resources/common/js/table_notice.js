$(function(){
	$('#notice_list').DataTable({
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
		$(location).attr('href', 'notice_form.html');	
	});

	$('#del_notice').click(function(){
		var checkCount = "";

		$('input[name=one_select]:checked').each(function(){
			checkCount = checkCount + $(this).val()+",";
		})
		// console.log("checkCount = " + checkCount);
		// 제일 뒤에 있는 콤마 제거하기
		checkCount = checkCount.substring(0, checkCount.lastIndexOf(","));

		if(checkCount == ''){
			alert("삭제할 게시물을 체크하세요");
			return false;
		}
		// console.log("checkCount = " + checkCount);

		if(confirm("선택한 게시물을 삭제하시겠습니까?")){
			// servlet 작업 해주세요.
		}

	});
})