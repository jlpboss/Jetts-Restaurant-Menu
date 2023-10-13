

export default function ItemCard(props){

    return (
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">{props.cuisine}</h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}