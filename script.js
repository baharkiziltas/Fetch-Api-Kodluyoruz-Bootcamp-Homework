//getElementById ile butona ulaşıp event ekliyoruz
document.getElementById("button").addEventListener("click", getUserData());
//getElementById ile listeleme elemanina ulasiyoruz
let myList = document.getElementById("resultList");

async function getUserData() {
    await fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then((data) => {
            let result = data.results;

            let output = "<div>";

            result.forEach((element) => {
                output += `
           <div class="card cardstyle" style="width: 18rem;">
           <img src="${element.picture.large}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${element.name.first} ${element.name.last}</h5>
             <p class="card-text">${element.dob.age}</p>
           </div>`

            });

            document.querySelector("#resultList").innerHTML = output;

        })

}



