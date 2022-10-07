"use strict";
const listUl = document.getElementById("user-ul");

let getData = async function () {
  try {
    let response = await fetch("https://reqres.in/api/users?page=2");
    let returnData = await response.json();
    returnData.data.forEach((element) => {
      const li = document.createElement("li");
      const p = document.createElement("p")
      const img = document.createElement("img");
      img.setAttribute("src", element.avatar);
      img.setAttribute("alt", "image");
      img.classList.add("image");

      p.textContent = `${element.first_name} ${element.last_name}`;
      li.appendChild(img);
      li.appendChild(p);
      
      listUl.appendChild(li);
    });
  } catch (err) {
    const pTag = document.createElement("p");
    pTag.textContent = `ERROR!!! ${err}`;
    pTag.classList.add("error");
    listUl.appendChild(pTag);
  }
};
getData();
