import './Card.css'

// This function is used to extract specific CSS properties and apply it to the children of Card
function Card(props) {
    // This helps to carry over the class names that were used as well as the card class thats needed.
    const classes = 'card ' + props.className

    return <div className={classes}>{props.children}</div>
}

export default Card
