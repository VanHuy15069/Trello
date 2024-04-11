import Button from '../Button/Button';

function CartInfo() {
    return (
        <div className="p-4 border border-[#dfe1e6] lg:mb-4 md:mb-4">
            <div className="pt-6">FREE</div>
            <div className="pt-6">
                <div className="flex items-end text-base mb-2">
                    <span>$</span>
                    <p className="text-5xl">0</p>
                    <span>USD</span>
                </div>
                <p className="text-[#505f79]">Free for your whole team</p>
            </div>
            <div className="pt-6">
                <p>
                    For teams that need to track and visualize multiple projects in several ways, including boards,
                    timelines, calendars, etc.
                </p>
            </div>
            <div className="pt-6">
                <Button text={'Get started'} className={'font-normal hover:bg-white-1 transition ease-linear'} />
            </div>
            <div className="pt-6 pb-8">
                <a className="text-blue-2 underline">Learn more about Standard</a>
            </div>
        </div>
    );
}
export default CartInfo;
