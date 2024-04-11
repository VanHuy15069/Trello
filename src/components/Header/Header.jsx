import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from '../MenuItem/MenuItem';
import Logo from '../logo';
import { faAngleDown, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

function Header({ onCLick, onCLickHide, show }) {
    return (
        <div
            className={`w-screen bg-white p-0 fixed top-0 z-50 transition-shadow ease-in duration-200 ${
                !show && 'shadow-3xl'
            }`}
        >
            <div className="flex items-center justify-between h-16 max-w-[1320px] mx-auto">
                <div className="flex items-center">
                    <div className="p-4 pt-5 cursor-pointer">
                        <Logo />
                    </div>
                    <div className="flex items-center lg:hidden md:hidden">
                        <MenuItem>
                            <div className="flex gap-x-1 items-center hover:text-blue-1">
                                <p>Features</p>
                                <span className="text-xs">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="flex gap-x-1 items-center hover:text-blue-1">
                                <p>Solutions</p>
                                <span className="text-xs">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="flex gap-x-1 items-center hover:text-blue-1">
                                <p>Plans</p>
                                <span className="text-xs">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="flex gap-x-1 items-center hover:text-blue-1">
                                <p>Pricing</p>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="flex gap-x-1 items-center hover:text-blue-1">
                                <p>Resources</p>
                                <span className="text-xs">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                        </MenuItem>
                    </div>
                </div>
                <div>
                    <div className="flex lg:hidden md:hidden">
                        <MenuItem>
                            <p className="text-xl">Login</p>
                        </MenuItem>
                        <Button
                            text={'Get Trello for free'}
                            className={
                                'rounded-none text-xl font-normal text-white bg-blue h-full p-4 pt-5 px-6 border-none hover:bg-blue-3 transition ease-linear'
                            }
                        />
                    </div>
                    {!show ? (
                        <div onClick={onCLick} className="hidden cursor-pointer lg:block md:block">
                            <div className="text-black w-14 h-14 flex items-center justify-center">
                                <span className="text-2xl">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div onClick={onCLickHide} className="hidden cursor-pointer lg:block md:block">
                            <div className="text-black w-14 h-14 flex items-center justify-center">
                                <span className="text-2xl">
                                    <FontAwesomeIcon icon={faX} />
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Header;
