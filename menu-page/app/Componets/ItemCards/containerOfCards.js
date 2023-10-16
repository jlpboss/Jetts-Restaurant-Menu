import ItemCard from "./itemCard";

export default function ContainerOfCards(props){

    console.log(props.goodItems)

    let checkedItemsCardArray=[];
    for (let i = 0; i < props.goodItems.length; i += 3) {
        checkedItemsCardArray.push(
            <div className="row justify-content-evenly" key={i}>
            {props.goodItems.slice(i, i + 3).map((item, index) => (
                <ItemCard
                title={item.title}
                cuisine={item.cuisine_type}
                description={item.description}
                />
            ))}
            </div>
        );
    }

    return(
        <div className="container">
            {checkedItemsCardArray}
        </div>
    )

    /*
    inputs:
        array of ojects that have only the selected menue items

    Output:
        a container witch has 3 cards per row
    */
}