var postImage = function(nameFile, file) {
    var httpPost = new XMLHttpRequest();
    var path = "url";
    var data = {
        name: nameFile,
        image: file
    };

    httpPost.onreadystatechange = function(err){
        if(httpPost.readyState==4 && httpPost.status==200){
            console.log(httpPost.responseText);
        }else{
            console.log(err);
        }
    };
    console.log(data);
    httpPost.open("POST",path,true);
    httpPost.setRequestHeader('Content-Type','application/json');
    httpPost.send(data);
}