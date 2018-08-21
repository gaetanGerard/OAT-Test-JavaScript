/*Loading JSON into a useful javascript object by using an ajax request*/
let courses = {};
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "testtakers.json", true);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        courses = JSON.parse(xmlhttp.responseText);

        // start of the function in charge of display content of the json into the html 20 by 20 i repeat the same function annd just change some variable beceause 
        //i do not know for the moment how i can do with only one function to display 20 user by page
        function loadPage() {
            //get the html location where the json will be display
            let body = document.getElementsByTagName('tbody')[0];
            //set the count for the id
            let count = 0;

            //load json content into a table
            for (let i = 0; i < 21; i++) {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                let s = courses[i];
                

                td.innerHTML = count;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.title;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.lastname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.firstname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.gender;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.email;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.address;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.login;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.innerHTML = s.password;
                tr.appendChild(td);

                body.appendChild(tr);
                //increment id at every turn of the loop
                count++;
            }
        }
        function loadPage2() {
            //function for clear the table
            function clearTable() {
                var body = document.getElementsByTagName('tbody')[0];
                while (body.hasChildNodes()) {
                    body.removeChild(body.firstChild);
                }
            }
            clearTable();
            let body = document.getElementsByTagName('tbody')[0];
            //modification for target the right data into the json file start at 20 and finish at 40
            let count = 21;
            for (let i = 20; i < 40; i++) {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                let s = courses[i];
                

                td.innerHTML = count;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.title;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.lastname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.firstname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.gender;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.email;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.address;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.login;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.password;
                tr.appendChild(td);

                body.appendChild(tr);
                count++;
            }
            
        }
        function loadPage3() {
            //function for clear the table
            function clearTable() {
                var body = document.getElementsByTagName('tbody')[0];
                while (body.hasChildNodes()) {
                    body.removeChild(body.firstChild);
                }
            }
            clearTable();
            let body = document.getElementsByTagName('tbody')[0];
            //modification for target the right data into the json file start at 40 and finish at 60
            let count = 41;
            for (let i = 40; i < 60; i++) {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                let s = courses[i];


                td.innerHTML = count;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.title;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.lastname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.firstname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.gender;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.email;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.address;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.login;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.password;
                tr.appendChild(td);

                body.appendChild(tr);
                count++;
            }

        }
        function loadPage4() {
            function clearTable() {
                var body = document.getElementsByTagName('tbody')[0];
                while (body.hasChildNodes()) {
                    body.removeChild(body.firstChild);
                }
            }
            clearTable();
            let body = document.getElementsByTagName('tbody')[0];
            let count = 61;
            for (let i = 60; i < 80; i++) {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                let s = courses[i];


                td.innerHTML = count;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.title;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.lastname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.firstname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.gender;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.email;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.address;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.login;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.password;
                tr.appendChild(td);

                body.appendChild(tr);
                count++;
            }

        }
        function loadPage5() {
            function clearTable() {
                var body = document.getElementsByTagName('tbody')[0];
                while (body.hasChildNodes()) {
                    body.removeChild(body.firstChild);
                }
            }
            clearTable();
            let body = document.getElementsByTagName('tbody')[0];
            let count = 81;
            for (let i = 80; i < 100; i++) {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                let s = courses[i];


                td.innerHTML = count;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.title;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.lastname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.firstname;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.gender;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.email;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.address;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.login;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = s.password;
                tr.appendChild(td);

                body.appendChild(tr);
                count++;
            }

        }
        //end of the loading content of the json

        //start looking for a match of the id with the input
        function searchId() {
            //first clear the current table of its data
            function clearTable() {
                var body = document.getElementsByTagName('tbody')[0];
                while (body.hasChildNodes()) {
                    body.removeChild(body.firstChild);
                }
            }
            clearTable();
            let body = document.getElementsByTagName('tbody')[0];
            //second capture the value of the input
            let retrieveId = document.getElementById("identifiant").value;
            let count = retrieveId;
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            //make the value of the input match the index of the json file -1 beceause index start at 0 so user enter 55 will arrive on the user 56
            let s = courses[retrieveId-1];


            td.innerHTML = count;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.title;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.lastname;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.firstname;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.gender;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.email;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.address;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.login;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = s.password;
            tr.appendChild(td);

            body.appendChild(tr);

            if(retrieveId == "") {
                clearTable();
                loadPage();
            }
        }
        //end looking for a match of the id with the input

        //start look for a match of the name with the input
        function matchName() {
            //clear the actual table
             function clearTable() {
                 var body = document.getElementsByTagName('tbody')[0];
                 while (body.hasChildNodes()) {
                     body.removeChild(body.firstChild);
                 }
             }
             clearTable();
            //capture the value of the input
            let name = document.getElementById('name').value;
            let len = courses.length;
            let body = document.getElementsByTagName('tbody')[0];
            
            for (let i = 0; i < len; i++) {
                if(name == courses[i].lastname || name == courses[i].firstname) {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                let s = courses[i];

                 td.innerHTML = len[i];
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = "<img src='" + s.picture + " alt=user image '/>";
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.title;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.lastname;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.firstname;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.gender;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.email;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.address;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.login;
                 tr.appendChild(td);

                 td = document.createElement('td');
                 td.innerHTML = s.password;
                 tr.appendChild(td);

                 body.appendChild(tr);
                } else if(name == "") {
                    //if input name is empty so clear table and reload first table
                    clearTable();
                    loadPage();
                }
            }
        }
        //end look for a match of the name with the input

        loadPage();

        //get the link will allow to display element of json in his right page page 1 element 0 to 20, etc
        document.getElementById("under41").addEventListener("click", loadPage2);
        document.getElementById("under61").addEventListener("click", loadPage3);
        document.getElementById("under81").addEventListener("click", loadPage4);
        document.getElementById("under101").addEventListener("click", loadPage5);
        document.getElementById("numberid").addEventListener("click", searchId);
        document.getElementById("namestring").addEventListener("click", matchName);
    }
};
xmlhttp.send();