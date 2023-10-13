

export default function CatagoryButton(props){
//props.checkedItems.includes(props.text)
console.log(props.checkedItems)
    return (
        <>
            <input 
            type="checkbox" 
            id={props.text} 
            checked={props.checkedItems.includes(props.text)} 
            onChange={props.checkHandler}
            />
            <label htmlFor="checkbox">{props.text}</label>
        </>
    )
}