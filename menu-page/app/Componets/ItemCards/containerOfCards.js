import ItemCard from "./itemCard";

export default function ContainerOfCards(props){

    let checkedItemsCardArray=[];
    props.goodItems.forEach((item,index)=>{
        if(index % 3 === 0) {
        checkedItemsCardArray.push( 
            <div className="row justify-content-evenly">
                <ItemCard 
                    title={item.title}
                    cuisine={item.cuisine_type}
                    description={item.description}
                />
                <ItemCard 
                    title={props.goodItems[index + 1].title}
                    cuisine={props.goodItems[index + 1].cuisine_type}
                    description={props.goodItems[index + 1].description}
                />
                <ItemCard 
                    title={props.goodItems[index + 2].title}
                    cuisine={props.goodItems[index + 2].cuisine_type}
                    description={props.goodItems[index + 2].description}
                />
        </div>
        )}
    })

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