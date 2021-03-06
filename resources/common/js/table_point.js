$(function (){
	$('#point_list').DataTable({
		"dom": 
			"<'row'<'data_toolbar'<'data_count'l><'data_btn'><'data_search'f>>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0], "orderable":false },
		]
	});

	$('div.data_btn').html('<button type="button" id="point_del" class="btn btn-danger">삭제</button> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-default">추가</button>');

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	})

	$('#point_del').click(function(){
		var checkCount = "";

		$('input[name=one_select]:checked').each(function(){
			checkCount = checkCount + $(this).val()+",";
		})
		// console.log("checkCount = " + checkCount);
		// 제일 뒤에 있는 콤마 제거하기
		checkCount = checkCount.substring(0, checkCount.lastIndexOf(","));

		if(checkCount == ''){
			alert("삭제할 포인트를 체크하세요");
			return false;
		}
		// console.log("checkCount = " + checkCount);

		if(confirm("선택한 포인트를 삭제하시겠습니까?")){
			// servlet 작업 해주세요.
		}

	})
})