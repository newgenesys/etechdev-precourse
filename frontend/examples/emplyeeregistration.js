function validate(){
    var message = "";

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var maritalstats = document.getElementById("maritalstatus").value;
    var salary = document.getElementById("salary").value;
    var country = document.getElementById("country1").value;
    var nationality = document.getElementById("nationality").value;
    var residence = document.getElementById("residence").value;
    var homeaddress = document.getElementById("haddress").value;

    //var storage = localStorage.setItem("fname", firstname); //storing in browser local storage

    //localStorage.getItem("fname");

    //console.log(localStorage.getItem("fname"));

    //all in one checkpoint
    // if(firstname == "" || lastname == "" || dob == "" || maritalstats){
    //     message+="All required fields have not been completed!";
    // }


    if(firstname == ""){
        message += "First Name is compuslory<br>"; //same as=> message = message+"First Name is compuslory"
    }

    if(lastname == ""){
        message += "Last Name is compuslory<br>";
    }

    if(dob == ""){
        message += "Date of Birth is compuslory<br>";
    }

    if(maritalstats == ""){
        message += "Marital status is compuslory<br>";
    }

    if(salary == ""){
        message += "Salary is compuslory<br>";
    }

    if(country == ""){
        message+= "Country of origin is compuslory<br>";
    }

    if(nationality == ""){
        message += "Nationality is compuslory<br>";
    }

    if(residence == ""){
        message += "Country of residence is compuslory<br>";
    }

    if(homeaddress == ""){
        message += "Home address is compuslory<br>";
    }
    document.getElementById("messages").innerHTML = message;
    console.log(message);
}