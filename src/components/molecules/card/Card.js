const Card = (props) => {
    return (
        <div className={`p-5 rounded-lg bg-white shadow-md border ${props.styles}`} onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </div>
    );
}

export default Card;