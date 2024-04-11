function Box({ reverse = false }) {
    return (
        <div className={`${reverse ? '-mb-32' : 'pb-12'} p-4`}>
            <div
                className={`p-8 flex ${
                    reverse && 'flex-row-reverse'
                } gap-8 justify-between bg-white rounded-lg shadow-xl lg:flex-col md:flex-col`}
            >
                <div className="w-[55%] lg:w-full md:w-full">
                    <img
                        className="block"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=1140&fm=webp"
                        alt=""
                    />
                </div>
                <div className="w-[45%] px-8 flex flex-col justify-center lg:w-full md:w-full">
                    <h3 className="text-base uppercase font-medium mb-6">Hit deadlines every time</h3>
                    <p className="mb-6 text-xl">
                        From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a
                        glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s
                        progress.
                    </p>
                    <a className="text-xl text-blue-1 underline">Learn more about Timeline view</a>
                </div>
            </div>
        </div>
    );
}
export default Box;
