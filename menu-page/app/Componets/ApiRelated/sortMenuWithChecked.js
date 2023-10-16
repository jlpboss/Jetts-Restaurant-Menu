export default function sortMenuWithChecked(menu, checkedItems){
    let out = []

    console.log(menu)


    //this should be a not empty
    if (menu.length > 0){
        for (let item of menu){
            if(checkedItems.includes(item.category)){
                out.push(item)
            }
        }
    }
    return out
}