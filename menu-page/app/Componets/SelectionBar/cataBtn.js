

export default function CatagoryButton(props){
//props.checkedItems.includes(props.text)
    return (
        <>
            <input 
            type="checkbox" 
            id={props.text} 
            checked={props.checkedItems.includes(props.text) ? "checked" : ""} 
            onChange={props.checkHandler}
            />
            <label htmlFor="checkbox">{props.text}</label>
        </>
    )
}