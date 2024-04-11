import { forwardRef } from 'react';

const DropDown = forwardRef((prop, ref) => {
    return (
        <div
            ref={ref}
            className={`z-40 bg-white px-4 flex flex-col gap-4 pt-0 fixed overflow-hidden w-screen h-0 transition-all ease-in-out duration-500`}
        >
            {prop.children}
        </div>
    );
});
export default DropDown;
