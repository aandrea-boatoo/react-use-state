import languages from "../data/languages";
function CardComponent() {
    let card = languages.map((el) => {
        return (<div className="card">
            <h4 key={el.id}>{el.title}</h4>
            <p key={el.id}>{el.description}</p>
        </div>)

    })
    return card
}


export default CardComponent;