// import { log } from "util";

// Add your code here
window.addEventListener("DOMContentLoaded", function (){
    let userFormData = {
        name,
        email
    };
    let confObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userFormData)

    };

    function submitData(name, email) {
        fetch("http://localhost:3000/users", confObject)
            .then(function(response) {
                return response.json();
                console.log(response)
            })
            .then(function(object) {
                console.log(object);
            });
    };

    submitData("Lucy", "lucy@gmail.com", confObject);
});