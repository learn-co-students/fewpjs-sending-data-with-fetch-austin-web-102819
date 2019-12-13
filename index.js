// import { format } from 'path';

// Add your code here

window.addEventListener('DOMContentLoaded', (event) => {
	function submitData(name, email) {
		return fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				name,
				email
			})
		})
			.then(function(response) {
				return response.json();
			})
			.then(function(object) {
				document.body.innerHTML = object['id'];
			})
			.catch(function(error) {
				document.body.innerHTML = error.message;
			});
	}
	submitData('mei', 'fongmeiw@gmail.com');
});
