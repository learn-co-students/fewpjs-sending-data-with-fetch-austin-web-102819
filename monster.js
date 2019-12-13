window.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/monsters/?_limit=50')
  .then(response => response.json())
  .then(jsonData => displayMonsters(jsonData));
  function displayMonsters(monsters) {
    const monsterContainer = document.getElementById("monster-container");
    // create element here happens once
    monsters.forEach(monster => {
      const monsterElement = document.createElement("div");
      monsterElement.innerText = monster.name;
      const description = document.createElement("p");
      description.innerText = `Description: ${monster.description}`;
      const age = document.createElement("p");
      age.innerText = `Age: ${monster.age}`
      monsterElement.appendChild(age);
      monsterElement.appendChild(description);
      monsterContainer.appendChild(monsterElement)
    })
  }
  const form = document.querySelector("form");

  form.addEventListener("submit", addMonster);
  
  function addMonster(event) {
    event.preventDefault();
    console.log("submit");
    const name = document.querySelector("input[name=name]").value;
    const age = document.querySelector("input[name=age]").value;
    const description = document.querySelector("input[name=description]").value;
    console.log(name, age, description)
    fetch("http://localhost:3000/monsters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name: name, age: age, description: description })
    })
  }
});