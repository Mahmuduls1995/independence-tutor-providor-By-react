import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.png'
import banner3 from '../../../images/banner/banner3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    height="70%"
                    width="70%"
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="70%"
                    width="70%"
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width="70%"
                    height="70%"
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Mathematics</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;