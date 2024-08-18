const InputRadio = (props) => {
    return (
        <input type="radio" className="cursor-pointer" checked={props.checked ?? false} value={props.value} name={props.name} onChange={(event) => { props.onChange && props.onChange(event.target.value) }} />
    );
}

export default InputRadio;