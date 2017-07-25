var sel_files = [];

$(document).ready(function(){
	$("#upload_img").on("change", handleImgsFilesSelect);

	$("#dc_check").change(function(){
		if($("#dc_check").is(':checked')){
			$("#dc_pay").removeAttr("disabled");
		} else{
			$("#dc_pay").attr("disabled", true);
		}
	})

	$('.select2').select2();
	$('.textarea').wysihtml5();
});

function handleImgsFilesSelect(e){
	var files = e.target.files;
	var filesArr = Array.prototype.slice.call(files);

	if(filesArr.length > 3){
		alert("이미지 파일은 최대 3개까지 등록가능합니다.");
		$("#upload_img").val("");
		return;
	}

	$(".img_prev").html("");
	filesArr.forEach(function(f){
		if(!f.type.match("image.*")){
			alert("이미지 파일만 선택해주세요.");
			$("#upload_img").val("");
			return;
		}

		sel_files.push(f);

		var reader = new FileReader();
		reader.onload = function(e){
			var img_html = '<img src="' + e.target.result + '" style="width:50px;height:50px;"/>';
			$(".img_prev").append(img_html);
		}
		reader.readAsDataURL(f);
	});
}