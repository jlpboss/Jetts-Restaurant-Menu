export default function sortMenuWithChecked(menu, checkedItems){
    let out = []

    console.log(menu)


    //this should be a not empty
    if (menu == []){
        for (item of menu){
            if(checkedItems.includes(item.category)){
                out.push(item)
            }
        }
    }
    return out
}