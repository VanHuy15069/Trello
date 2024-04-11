function FooterItem({ title, text }) {
    return (
        <div className="p-4 hover:bg-[#344563] h-full cursor-pointer lg:border-t lg:border-[#505f79] md:border-t md:border-[#505f79]">
            <p className="pb-[0.6rem] leading-4">{title}</p>
            <p className="text-xs">{text}</p>
        </div>
    );
}
export default FooterItem;
