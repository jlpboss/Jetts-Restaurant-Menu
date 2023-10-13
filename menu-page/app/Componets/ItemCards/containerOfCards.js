import ItemCard from "./itemCard";

export default function ContainerOfCards(props){

    let checkedItemsCardArray=[];
    props.goodItems.forEach((item,index)=>{
        //if(index % 3 === 0) {checkedItemsCardArray.push( <div className="row justify-content-evenly">)}
        checkedItemsCardArray.push( 
            <ItemCard 
                title={item.title}
                cuisine={item.cuisine_type}
                description={item.description}
            />)
        //if(index % 3 === 2) {checkedItemsCardArray.push( </div>)}
    })

    return(
        <div class="container">
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