import { useRef, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Sliders from './components/Slider/Slider';
import Box from './components/Box/Box';
import Block from './components/Block/Block';
import Sliders2 from './components/Slide2/Slide2';
import CartInfo from './components/CartInfo/CartInfor';
import Logo2 from './components/logo2';
import FooterItem from './components/FooterItem/FooterItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import DropDown from './components/DropDown/DropDown';
import ItemDrop from './components/ItemDrop/ItemDrop';
function App() {
    const [isShowBox, setIsShowBox] = useState(false);
    const ref = useRef();
    const handleShow = () => {
        setIsShowBox(true);
        if (ref.current) {
            ref.current.style.height = '100vh';
        }
    };
    const handleHide = () => {
        if (ref.current) {
            ref.current.style.height = 0;
        }
        setIsShowBox(false);
    };
    return (
        <>
            <Header onCLick={handleShow} show={isShowBox} onCLickHide={handleHide} />
            <DropDown ref={ref}>
                <div className="border-t border-[#dfe1e6]">
                    <ItemDrop />
                    <ItemDrop />
                    <ItemDrop />
                    <ItemDrop />
                </div>
                <Button text={'Get Trello for free'} className={'w-full bg-blue text-white p-4 text-xl'} />
                <Button text={'Login'} className={'w-full p-4 text-xl'} />
            </DropDown>
            <div className="mt-16">
                <div className="h-16 bg-white-1 flex justify-center items-center">
                    <p className="text-center md:max-w-3xl">
                        Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now in beta!{' '}
                        <a className="cursor-pointer text-blue-2 font-normal underline decoration-solid">Learn more.</a>
                    </p>
                </div>
                <div className="min-h-[calc(100vh-120px)] bg-gradient-to-r from-purple to-pink">
                    <div className="flex max-w-7xl m-auto lg:max-w-5xl lg:flex-col lg:items-center md:max-w-3xl md:flex-col md:text-center">
                        <div className="text-white pt-32 px-4 lg:text-center">
                            <h1 className="text-5xl leading-tight mb-2 md:text-[2rem] md:font-medium">
                                Trello brings all your tasks, teammates, and tools together
                            </h1>
                            <p className="mb-6 text-xl">Keep everything in the same place—even if your team isn’t.</p>
                            <div className="h-2"></div>
                            <div className="flex gap-4 lg:justify-center md:justify-center">
                                <input
                                    className="text-black outline-none bg-white w-[300px] rounded-[0.3rem] p-3 md:hidden"
                                    type="email"
                                    placeholder="Email"
                                />
                                <Button
                                    text={'Sign up - it’s free!'}
                                    className={'bg-blue text-white hover:bg-blue-3 transition ease-linear md:w-full'}
                                />
                            </div>
                        </div>
                        <div className="pt-32 px-4">
                            <img
                                src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl m-auto lg:max-w-5xl md:max-w-3xl">
                    <div className="w-[58.3333%] p-4 md:w-full">
                        <h3 className="mb-2 font-medium">TRELLO 101</h3>
                        <h1 className="text-4xl font-medium pb-4 mb-2">A productivity powerhouse</h1>
                        <p className="text-xl">
                            Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear
                            view of who’s doing what and what needs to get done. Learn more in our{' '}
                            <a>guide for getting started</a>
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl m-auto lg:max-w-5xl md:max-w-3xl">
                    <div className="p-4 pb-20 text-black h-max">
                        <div>
                            <Sliders />
                        </div>
                    </div>
                </div>
                <div className="snap-x flex flex-row gap-4 overflow-x-auto max-w-7xl m-auto p-1 lg:max-w-5xl md:max-w-3xl">
                    <Cart
                        className={'bg-orange'}
                        image={'bg-folder'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-blue-1'}
                        image={'bg-volum'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-orange'}
                        image={'bg-folder'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-blue-1'}
                        image={'bg-volum'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-orange'}
                        image={'bg-folder'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-blue-1'}
                        image={'bg-volum'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-orange'}
                        image={'bg-folder'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                    <Cart
                        className={'bg-blue-1'}
                        image={'bg-volum'}
                        title={'Project management'}
                        text={'Keep tasks in order, deadlines on track, and team members aligned with Trello.'}
                    />
                </div>
                <div className="pb-[32px]"></div>
                <div className="flex justify-between max-w-7xl m-auto lg:max-w-5xl lg:flex-col md:max-w-3xl md:flex-col">
                    <p className="w-[75%] text-xl p-4 pb-20 lg:pb-4 md:pb-4 md:w-full md:text-justify">
                        No need to start from scratch. Jump-start your workflow with a proven playbook designed for
                        different teams. Customize it to make it yours.
                    </p>
                    <div className="p-4 pb-20">
                        <Button text={'Explore all Use Cases'} className={'hover:bg-white-1 transition ease-linear'} />
                    </div>
                </div>
                <div className="bg-blue-4">
                    <div className="max-w-7xl m-auto lg:max-w-5xl md:max-w-3xl">
                        <div className="py-12 px-4 text-center">
                            <h2 className="text-4xl text-white font-medium mb-2">See work in a whole new way</h2>
                            <p className="mb-6 text-white text-xl">
                                View your team’s projects from every angle and bring a fresh perspective to the task at
                                hand.
                            </p>
                            <Button
                                text={'Discover all Trello views'}
                                className={'font-normal hover:bg-white-1 transition ease-linear'}
                            />
                        </div>
                        <div className="p-1">
                            <Box />
                            <Box reverse />
                        </div>
                    </div>
                </div>
                <div className="h-32"></div>
                <div className="h-12"></div>
                <div className="max-w-7xl m-auto lg:max-w-5xl md:max-w-3xl">
                    <div className="p-4 w-[58.333%] md:w-full">
                        <p className="text-base font-medium uppercase mb-2">Powerful ways to grow</p>
                        <h2 className="text-4xl pb-4 mb-2 font-medium">Do more with Trello</h2>
                        <p className="text-xl">
                            Trello’s intuitive features give any team the ability to quickly set up and customize
                            workflows for just about anything.
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl m-auto flex justify-center lg:max-w-5xl lg:flex-wrap md:max-w-3xl md:flex-wrap">
                    <div className="p-4 w-1/3 lg:w-1/2 md:w-full">
                        <Block
                            src={
                                'https://images.ctfassets.net/rz1oowkt5gyp/gMfkjoA3yWYG3kat3qjpW/3902bfdfccf08869e33d63bbc9d1969b/Integrations_Puzzle.svg'
                            }
                            title={'Integrations'}
                            text={
                                'Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.'
                            }
                            btnText={'Browse Integrations'}
                        />
                    </div>
                    <div className="p-4 w-1/3 lg:w-1/2 md:w-full">
                        <Block
                            src={
                                'https://images.ctfassets.net/rz1oowkt5gyp/7wxRW93hvb7858bMsK4LSs/f6fc44fb23dbc6ee9bc6a7f6e2af0fb7/Gears.svg'
                            }
                            title={'Butler Automation'}
                            text={
                                'No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.'
                            }
                            btnText={'Get to know Automation'}
                        />
                    </div>
                    <div className="p-4 w-1/3 lg:w-1/2 md:w-full">
                        <Block
                            src={
                                'https://images.ctfassets.net/rz1oowkt5gyp/mNa3Mi7T6ga2OTrNxJx1D/8991b8d57cd6ec7330398c7a8757b4dc/Search_Value.svg'
                            }
                            title={'Trello Enterprise'}
                            text={
                                'The productivity tool teams love, paired with the features and security needed for scale.'
                            }
                            btnText={'Explore Enterprise'}
                        />
                    </div>
                </div>
                <div className="h-12"></div>
                <div className="max-w-7xl m-auto p-4">
                    <Sliders2 />
                </div>
                <div className="max-w-7xl m-auto lg:max-w-5xl md:max-w-3xl">
                    <div className="w-[66.667%] px-4 pt-20 pb-12 text-center ml-[16.6667%]">
                        <h2 className="text-4xl mb-2">Trello priced your way</h2>
                        <p className="text-xl mb-6">Trusted by millions, Trello powers teams all around the world.</p>
                        <Button
                            text={'Compare plans'}
                            className={'text-white bg-blue-2 hover:bg-blue-3 transition ease-linear'}
                        />
                    </div>
                    <div className="p-4 pb-20 flex lg:flex-col md:flex-col">
                        <CartInfo />
                        <CartInfo />
                        <CartInfo />
                        <CartInfo />
                    </div>
                </div>
                <div className="max-w-7xl m-auto p-4 pb-20">
                    <div className="w-[83.3333%] ml-[8.3333%] flex flex-col justify-center">
                        <p className="mb-6 text-xl text-center">
                            Join over 2,000,000 teams worldwide that are using Trello to get more done.
                        </p>
                        <img
                            className="md:hidden"
                            src="https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
                            alt=""
                        />
                        <img
                            className="hidden md:block"
                            src="https://images.ctfassets.net/rz1oowkt5gyp/35UfB6LGcl6cd3y8K7VB3b/0748eb81ae166a7fb35288e6c413dabc/logos-3x3-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple to-pink">
                    <div className="max-w-7xl m-auto flex flex-col text-center md:max-w-3xl">
                        <div className="py-20 w-2/3 ml-[16.6667%] lg:w-5/6 lg:ml-[8.3333%] md:w-full md:m-auto">
                            <h2 className="text-4xl text-white mb-2 font-medium md:text-2xl">
                                Get started with Trello today
                            </h2>
                            <div className="flex gap-4 justify-center md:justify-center">
                                <input
                                    className="text-black outline-none bg-white w-[376px] rounded-[0.3rem] p-3 md:hidden"
                                    type="email"
                                    placeholder="Email"
                                />
                                <Button
                                    text={'Sign up - it’s free!'}
                                    className={'md:w-full bg-blue text-white hover:bg-blue-3 transition ease-linear'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#172b4d]">
                    <div className="max-w-7xl m-auto px-4 text-white flex lg:max-w-5xl  lg:flex-col md:max-w-3xl md:flex-col">
                        <div className="p-4 pb-0 flex flex-col gap-4 w-1/6 lg:flex-row lg:w-full lg:justify-between lg:items-center md:flex-row md:justify-between md: items-center md:w-full">
                            <div className="block">
                                <Logo2 />
                            </div>
                            <span>Log In</span>
                        </div>
                        <div className="w-5/6 flex p-4 lg:flex-col md:flex-col">
                            <div className="w-1/4 lg:w-full md:w-full">
                                <FooterItem title={'About Trello'} text={'What’s behind the boards.'} />
                            </div>
                            <div className="w-1/4 lg:w-full md:w-full">
                                <FooterItem title={'About Trello'} text={'What’s behind the boards.'} />
                            </div>
                            <div className="w-1/4 lg:w-full md:w-full">
                                <FooterItem
                                    title={'About Trello'}
                                    text={'Download the Trello App for your Desktop or Mobile devices.'}
                                />
                            </div>
                            <div className="w-1/4 lg:w-full  md:w-full">
                                <FooterItem title={'About Trello'} text={'What’s behind the boards.'} />
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid border-[#505f79] w[98%] m-auto"></div>
                    <div className="max-w-7xl m-auto px-4 text-white flex lg:max-w-5xl lg:flex-col lg:gap-4 md:max-w-3xl md:flex-col">
                        <div className="p-4 w-1/6 flex items-center lg:w-full md:w-full">
                            <span className="text-xl">
                                <FontAwesomeIcon icon={faEarthAfrica} />
                            </span>
                            <select className="bg-[#172b4d] text-base pl-6 w-full outline-none lg:w-1/3 md:w-1/3">
                                <option>Čeština</option>
                                <option>ADFSD</option>
                                <option>ADFSD</option>
                                <option>ADFSD</option>
                            </select>
                        </div>
                        <div className="w-7/12 p-4 text-xs flex items-center gap-6 lg:flex-col lg:w-full lg:items-start md:flex-col md:w-full md:items-start">
                            <p>Privacy Policy</p>
                            <p>Terms</p>
                            <p>Copyright © 2024 Atlassian</p>
                        </div>
                        <div className="w-1/4 p-4 text-2xl flex justify-between lg:w-full lg:mt-12 lg:pb-12 lg:items-start lg:justify-start lg:gap-8 md:w-full md:items-start md:justify-start md:gap-8 md:mt-12 md:pb-12">
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
