function Button({ text, className }) {
    return (
        <button className={`${className} rounded-md text-black select-none cursor-pointer border-blue`}>{text}</button>
    );
}

export default Button;
