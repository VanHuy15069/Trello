function RadioButton({ id, active, getId }) {
    return (
        <button
            onClick={() => getId(id)}
            className={`rounded-full bg-black p-0 mx-1 origin-right transition-all ease-in-out h-2 w-2 ${
                active ? 'focus: w-12 bg-gray ' : ''
            }`}
        ></button>
    );
}
export default RadioButton;
