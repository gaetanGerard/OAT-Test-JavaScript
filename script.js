let request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'testtakers.json', true);
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == "200") {
        let json = JSON.parse(request.responseText);
        console.log(json);
    }
};
request.send(null);

