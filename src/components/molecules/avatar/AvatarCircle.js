const AvatarCircle = (props) => {
    return (
        <div className="p-2 rounded-full bg-yellow-400 overflow-hidden flex justify-center items-center w-10 h-10">
            <span className="font-medium">{props.title}</span>
        </div>
    );
}

export default AvatarCircle;