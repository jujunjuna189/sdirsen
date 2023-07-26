const Content = (props) => {
    return (
        <div className="bg-white h-screen overflow-y-auto">
            {props.children}
        </div>
    );
}

export default Content;