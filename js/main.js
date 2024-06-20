import { userList } from "./components/list.js";
import { getAllUsers } from "./module/app.js";

let live_filter__list = document.querySelector(".live_filter__list")

console.table( await getAllUsers());
let data = await getAllUsers()
console.log(await userList(data))
live_filter__list.innerHTML = await userList(data);
