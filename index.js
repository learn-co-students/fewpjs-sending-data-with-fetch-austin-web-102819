// Add your code here
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
 
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
 
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });
window.onload = function(){

const form = document.querySelector('form');


form.addEventListener('submit', submitData);


function submitData(event) {
  event.preventDefault();
  console.log("submit");
  const url = "http://localhost:3000/users";
  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;
  console.log(name, email)
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  
  })
};

// let formData = {
//     name: "Steve",
//     email: "steve@steve.com"
//   };

// let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
 
// function submitData(name, email) {
  
//  return fetch("http://localhost:3000/users", configObj)
//    .then(function(response) {
//      return response.json();
//    })
//    .then(function(object) {
//      console.log(object);
//    });
// }

};
