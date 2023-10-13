export default function sortMenuWithChecked(menu, checkedItems){
    out = []
    for (item of menu){
        if(checkedItems.includes(item.category)){
            out.push(item)
        }
    }
    return out
}