

export default function ItemCard(props){

    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <h6 class="card-title">{props.cuisine}</h6>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    )
}