import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RadioButton from '../radioButton/radioButton';
import './slide2.css';

function Sliders2() {
    const [idActive, setIdActive] = useState(1);
    const handleGetId = (id) => {
        setIdActive(id);
    };
    const settings = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => (
            <div>
                <ul className="flex justify-center"> {dots} </ul>
            </div>
        ),
        customPaging: function (i) {
            return (
                <div>
                    <RadioButton id={i + 1} active={idActive === i + 1} getId={handleGetId} />
                </div>
            );
        },
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img
                        className="h-[500px] rounded-2xl object-cover w-full block md:h-[300px]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1140&fm=webp"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-[500px] rounded-2xl object-cover w-full block md:h-[300px]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1140&fm=webp"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-[500px] rounded-2xl object-cover w-full block md:h-[300px]"
                        src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1140&fm=webp"
                        alt=""
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Sliders2;
