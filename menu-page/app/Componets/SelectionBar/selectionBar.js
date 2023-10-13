import CatagoryButton from "./cataBtn"

export default function SelectionBar(props){

    //console.log("bar " + props.checkedItems)
    return(
        <>
            <CatagoryButton 
                text={"Breakfast"}
                checkHandler={props.checkHandler}
                checkedItems={props.checkedItems}
            />
            <CatagoryButton 
                text={"Lunch"}
                checkHandler={props.checkHandler}
                checkedItems={props.checkedItems}
            />
            <CatagoryButton 
                text={"Dinner"}
                checkHandler={props.checkHandler}
                checkedItems={props.checkedItems}
            />
            <CatagoryButton 
                text={"Appetizer"}
                checkHandler={props.checkHandler}
                checkedItems={props.checkedItems}
            />
            <CatagoryButton 
                text={"Drink"}
                checkHandler={props.checkHandler}
                checkedItems={props.checkedItems}
            />
        </>
    )
}