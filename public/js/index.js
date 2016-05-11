$(function() {
    var $fileChooses = $('.file-choose');
    var $submit = $('.btn-submit');
    var $form = $('.form');
    var count = 0,
        ajaxStatus = false;

    $fileChooses.on('change', '.input-file', function() {
        var $this = $(this);
        var $fileChoose = $this.closest('.file-choose');
        var $thumb = $this.siblings('.thumb');

        // HTML5 FileReader 对象
        var reader = new FileReader();
        var file = this.files[0];

        // inject an image with the src url
        reader.onload = function(event) {
            $thumb.attr('src', event.target.result);
            $fileChoose.addClass('file-choose-loaded');
            count++;

            if (count == $fileChooses.length) {
                $submit.removeClass('disabled');
            }
        };

        // 过滤图片文件
        if (!file.type.match('image.*')) {
            alert('请选择图片类型文件');
            $submit.addClass('disabled');
            return false;
        }
        // 判断文件大小，限制小于 1MB
        if (file.size > 1024 * 1024 * 1024) {
            alert('上传文件不能大于 1MB 或者 1024kb');
            $submit.addClass('disabled');
            return false;
        }
        // 读取文件预览
        reader.readAsDataURL(file);
    });

    // 关闭按钮
    $fileChooses.on('click', '.icon-delete', function() {
        // 清除 .loaded 类，清空 .thumb 的src
        var $this = $(this),
            $fileChoose = $this.closest('.file-choose'),
            $file = $this.siblings('.input-file'),
            $thumb = $this.siblings('.thumb');
        $fileChoose.removeClass('file-choose-loaded');
        $submit.addClass('disabled');
        $thumb.attr('src', '');
        count--;
        // 这是可能出现兼容性问题
        $file.val('');
    });

    $submit.on('click',function(){
        // 方式1：用 formData 的形式提交
        var formData = new FormData();
        formData.append('uploadify1',$('.input-file')[0].files[0]);
        formData.append('uploadify2',$('.input-file')[1].files[0]);

        // 方式二：表单序列化
        // var formData = new FormData($form[0]);

        if($(this).hasClass('disabled')){
            return false;
        }

        if(ajaxStatus) return;
        ajaxStatus = true;


        // 表单提交
        $.ajax({
            url: '/upload',
            type: 'POST',
            dataType: 'json',
            data: formData,
            // 这两项必填，作为文件上传的时候
            contentType: false,
            processData: false
        }).done(function(resp) {
            if(resp.status == 200){
                alert('上传成功');
                console.log("success", resp);
            }
        }).fail(function() {
            console.log("error");
        }).always(function() {
            ajaxStatus = false;
            console.log("complete");
        });
    });
});