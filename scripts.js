function click_me(item){
    item.hidden = ! item.hidden
}

function change_emoji(item){
    if(item.innerHTML == "👈"){
        item.innerHTML = "👇"
    } else {
        item.innerHTML = "👈"
    }
}