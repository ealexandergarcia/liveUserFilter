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
    live_filter__list_items.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}