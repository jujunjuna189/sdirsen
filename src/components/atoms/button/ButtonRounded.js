const ButtonRounded = (props) => {
    return (
        <div className={`px-6 py-2.5 rounded-xl flex items-center justify-center cursor-pointer sm:w-auto ${props.styles}`} onClick={props.onClick}>
            <span className={`font-semibold whitespace-pre ${props.titleStyle}`}>{props.title}</span>
        </div>
    );
}

export default ButtonRounded;