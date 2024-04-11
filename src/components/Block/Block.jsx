import Button from '../Button/Button';

function Block({ src, title, text, btnText }) {
    return (
        <div className="p-6 h-[100%] flex flex-col gap-4 rounded-lg bg-[#fafbfc] justify-between">
            <div>
                <img src={src} alt="" />
            </div>
            <div>
                <h3 className="mb-4 font-medium text-2xl">{title}</h3>
                <p className="text-base">{text}</p>
            </div>
            <div className="pt-4">
                <Button text={btnText} className={'font-normal hover:bg-white-1 transition ease-linear'} />
            </div>
        </div>
    );
}
export default Block;
