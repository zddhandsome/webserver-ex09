var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
        if(reader.result) {
            //显示文件内容
            $("#output").html(reader.result);
        }
    };
    reader.readAsText(input.files[0]);
};