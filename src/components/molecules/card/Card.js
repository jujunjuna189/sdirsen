const Card = (props) => {
    return (
        <div className={`p-2 rounded-lg bg-white border ${props.styles}`} onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </div>
    );
}

export default Card;