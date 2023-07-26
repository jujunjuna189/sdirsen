const InputRadio = (props) => {
    return (
        <input type="radio" value={props.value} name={props.name} onChange={(event) => { props.onChange && props.onChange(event.target.value) }} />
    );
}

export default InputRadio;