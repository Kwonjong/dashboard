$(function(){
	$('#review_list').DataTable({
		"dom": 
			"<'row'<'data_toolbar'<'data_count'l><'data_btn'>><'data_search'<'select_box'>f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'data_info'i><'data_paging'p>>",
		"columnDefs": [
			{ "targets": [0, 1], "orderable":false },
		],
		"order":[2, 'asc']
	});

	$('div.data_btn').html('<button type="button" id="reviews_del" class="btn btn-danger">삭제</button>');
	$('div.select_box').html('<div class="select_box"><select class="form-control select2" style="width: 100%;"><option selected="selected">반찬가게선택</option><option>옆집반찬</option><option>앞집반찬</option><option>뒷집반찬</option></select></div>');

	$('.select2').select2();

	$('#all_select').click(function(){
		if($('#all_select').prop('checked')){
			$('input[name=one_select]').prop('checked',true);
		} else{
			$('input[name=one_select]').prop('checked',false);
		}
	})

	$('#reviews_del').click(function(){
		var checkCount = "";

		$('input[name=one_select]:checked').each(function(){
			checkCount = checkCount + $(this).val()+",";
		})
		// console.log("checkCount = " + checkCount);
		// 제일 뒤에 있는 콤마 제거하기
		checkCount = checkCount.substring(0, checkCount.lastIndexOf(","));

		if(checkCount == ''){
			alert("삭제할 후기를 체크하세요");
			return false;
		}
		// console.log("checkCount = " + checkCount);

		if(confirm("선택한 후기를 삭제하시겠습니까?")){
			// servlet 작업 해주세요.
		}
	});

	$('#review_del').click(function(){
		var checkCount = "";

		if(confirm("현재 보고있는 후기를 삭제하시겠습니까?")){
			// servlet 작업 해주세요.
		}
	});
})