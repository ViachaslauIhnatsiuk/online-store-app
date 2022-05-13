import React from 'react';
import Slider from "react-slick";
import audio from "../../../assets/images/slider/audio.jpg";
import headphones from "../../../assets/images/slider/headphones.jpg";
import laptop from "../../../assets/images/slider/laptop.jpg";
import console from "../../../assets/images/slider/console.jpg";
import phones from "../../../assets/images/slider/phones.jpg";
import previous from '../../../assets/icons/slider-prev.svg';
import next from '../../../assets/icons/slider-next.svg';
import './slider.css';

const PreviousArrow = ({ currentSlide, slideCount, ...props }) => {
	return (
		<div {...props} className="previous" >
			<img src={previous} alt="previous" />
		</div>
	)
}

const NextArrow = ({ currentSlide, slideCount, ...props }) => {
	return (
		<div {...props} className="next">
			<img src={next} alt="next" />
		</div>
	)
}

const MainSlider = () => {
	const settings = {
		infinite: true,
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		prevArrow: <PreviousArrow />,
		nextArrow: <NextArrow />
	}

	return (
		<Slider {...settings}>
			<img src={phones} alt="smartphones" />
			<img src={headphones} alt="headphones" />
			<img src={console} alt="console" />
			<img src={laptop} alt="laptop" />
			<img src={audio} alt="audio" />
		</Slider>
	)
}

export { MainSlider };