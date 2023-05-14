import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FaStar, FaCartPlus } from "react-icons/fa";

export interface CartInfoProps {
	id?: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

interface CardProps {
	product: CartInfoProps;
}

export const CartInfo: React.FC<any> = ({ product }: CardProps) => {
	const formattedPrice = (price: number, discountPercentage: number) => {
		const discountedPrice = price - (price * discountPercentage) / 100;
		return discountedPrice.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
	};

	return (
		<div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
			<Slider {...sliderSettings}>
				{product.images.map((image: any, index: number) => (
					<div key={index} className="w-30 h-30">
						<img
							src={image}
							alt={product.title}
							className="mx-auto rounded-lg w-full object-cover"
							style={{ height: "200px",objectFit:"cover" }}
						/>
					</div>
				))}
			</Slider>
			<h2 className="text-2xl font-bold mt-4">{product.title}</h2>
			<p className="text-sm text-gray-500 h-5 overflow-hidden">{product.description}</p>
			<div className="flex items-center mt-4">
				<div className="flex items-center">
					{Array(5)
						.fill(null)
						.map((_, index) => (
							<FaStar
								key={index}
								className={`text-yellow-500 ${
									product.rating >= index + 1
										? "text-yellow-500"
										: "text-gray-300"
								}`}
							/>
						))}
					<span className="ml-1 text-gray-600">({product.rating})</span>
				</div>
				<div className="flex items-center ml-4">
					<FaCartPlus className="text-gray-500" />
					<span className="ml-1 text-gray-600">{product.stock} in stock</span>
				</div>
			</div>
			<div className="mt-4 flex items-baseline">
				<span className="text-xl font-semibold">
					{formattedPrice(product.price, product.discountPercentage)}
				</span>
				<span className="text-gray-500 line-through ml-2">
					{product.price.toLocaleString("en-US", {
						style: "currency",
						currency: "USD",
					})}
				</span>
				<span className="text-green-500 text-sm ml-2">
					{product.discountPercentage}% off
				</span>
			</div>
			<button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
				Add to Cart
			</button>
		</div>
	);
};
