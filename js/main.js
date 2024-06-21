import { userList } from "./components/list.js";
import { getAllUsers } from "./module/app.js";

let live_filter__list = document.querySelector(".live_filter__list");
let live_filter__input = document.querySelector(".live_filter__input");
let live_filter__list_items = [];

live_filter__input.addEventListener("input", (e) => filterData(e.target.value));

let data = await getAllUsers();
console.table(data);
live_filter__list.innerHTML = await userList(data);
live_filter__list_items = live_filter__list.querySelectorAll(".live_filter__list_item");



let filterData = (searchTerm) => {
    let allHidden = true;
    live_filter__list_items.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove("hide");
        allHidden = false;
      } else {
        item.classList.add("hide");
      }
    });
    const noResultsMessages = live_filter__list.querySelectorAll("span");
    noResultsMessages.forEach((message) => message.remove());
    if (allHidden) {
      const message = document.createElement("span");
      message.textContent = "No se han encontrado usuarios...";
      message.classList.add("no__users__found");
      live_filter__list.appendChild(message);
    }
  }