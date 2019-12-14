function submitData(name, email) {
    let data = {name: name, email: email};

    let object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

    let body = document.querySelector('body');

    return fetch("http://localhost:3000/users", object)
        .then(response => response.json())
        .then(function(result) {
            console.log(result.id)
            body.textContent = result.id;
        }).catch(function(error) {
            body.textContent += "Unauthorized Access";
            alert("Unauthorized Access");
            console.log(error.message);
        });
}