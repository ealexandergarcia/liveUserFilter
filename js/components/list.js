export const userList = async (res)=>{
    let plantilla = "";
    res.forEach(element => {
        plantilla+=/*html*/`
        <li class ="live_filter__list_item"> 
            <img src="${element.avatar}" alt="${element.name_full}" class="list_item__img">
            <div class="list_item__info">
                <h4 class="list_item__name">${element.name_full}</h4>
                <p class="list_item__bio">${element.description}</p>
            </div>
        </li>`
    });
    return plantilla
}