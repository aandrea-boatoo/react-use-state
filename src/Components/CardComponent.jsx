function CardComponent() {
    let Languages = [
        {
            "title": "HTML",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident, eum animi rerum veritatis repellat impedit nulla optio. Quo, eligendi aliquam? Maiores nam vero vel a modi praesentium vitae doloremque."
        },
        {
            "title": "React",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident, eum animi rerum veritatis repellat impedit nulla optio. Quo, eligendi aliquam? Maiores nam vero vel a modi praesentium vitae doloremque."
        },
        {
            "title": "Express",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident, eum animi rerum veritatis repellat impedit nulla optio. Quo, eligendi aliquam? Maiores nam vero vel a modi praesentium vitae doloremque."
        },
        {
            "title": "CSS",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident, eum animi rerum veritatis repellat impedit nulla optio. Quo, eligendi aliquam? Maiores nam vero vel a modi praesentium vitae doloremque."
        },
        {
            "title": "Javascript",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident, eum animi rerum veritatis repellat impedit nulla optio. Quo, eligendi aliquam? Maiores nam vero vel a modi praesentium vitae doloremque."
        },
        {
            "title": "Node.js",
            "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident, eum animi rerum veritatis repellat impedit nulla optio. Quo, eligendi aliquam? Maiores nam vero vel a modi praesentium vitae doloremque."
        },
    ]
    return (Languages.map((el) => {
        <h2>{el.title}</h2>;
        <p>{el.content}</p>
    }))
}

export default CardComponent;