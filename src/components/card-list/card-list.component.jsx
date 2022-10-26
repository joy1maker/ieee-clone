import "./card-list.styles.css"
import React from 'react';
import Slider from 'react-slick';
import Card from "../card/card.component";
import { data } from "../../data/card-data";


const CardList = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="card-list-container">
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        data.map((member, idx) => (
                            <Card key={idx} name={member.name} title={member.title} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );

}
export default CardList;