function aboutUs() {
    $("#button").click(function() {
        var data = {
            "email": $("#email").val(),
            "send_id": $("#name").val(),
            "suggestion": $("#content").val()
        }
        console.log(JSON.stringify(data));
        $.ajax({
            contentType: "application/json;charset=utf-8",
            type: 'post',
            dataType: "JSON",
            processData: false,
            url: "http://192.168.115.77:8080/messageboard/api/suggestion/add",
            data: JSON.stringify(data),
            success: function(result) {
                alert("提交成功");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("提交失败");
            }
        })
    })
}