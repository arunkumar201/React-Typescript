import React, { useEffect, useState } from "react";
import { CartInfoProps, CartInfo } from "./CartInfo";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

const API_URL = "https://dummyjson.com/products?limit=8";

const ProductList = () => {
	const [products, setProducts] = useState<CartInfoProps[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getProductData = async () => {
		setIsLoading(true);
		const res = await fetch(`${API_URL}&skip=${page * 8 - 8}`);
		const data = await res.json();
		if (data && data.products) {
			setProducts(data.products);
			setTotalPages(data.total / 10);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getProductData();
	}, [page]);

	function pageHandler(index: number) {
		if (index >= 1 && index <= Math.ceil(totalPages) && index !== page)
			setPage(index);
	}

	return (
		<>
			<div className="w-full h-[92vh]">
				{isLoading ? (
					<div className="flex justify-center items-center h-[92vh]">
						<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
					</div>
				) : (
					<>
						<div className="w-full h-full flex bg-slate-500 flex-wrap flex-1 gap-3 justify-center items-center">
							{products.map((Item) => (
								<div
									key={Item.id}
									className="w-[23rem] h-[33rem] grow-1 flex p-3"
								>
									<CartInfo product={Item} />
								</div>
							))}
						</div>
					</>
				)}
			</div>
			<div className="fixed  lg:left-[24rem] z-40 bg-slate-200 rounded-lg shadow-2xl bottom-12">
			{products.length > 0 && (
				<div className="flex justify-center gap-3 py-4 px-4">
					<span className="text-2xl">
						<IoMdArrowRoundBack
							onClick={() => pageHandler(page - 1)}
							size={32}
							className={`cursor-pointer hover:bg-amber-400 shadow-2xl ${
								page === 1 && "opacity-0"
							}`}
						/>
					</span>
					{[...Array(totalPages)].map((_, index) => (
						<div
							key={index}
							onClick={() => pageHandler(index + 1)}
							className={`text-2xl hover:text-blue-500 transition-colors duration-300 border-2 border-red-500 px-4 rounded-md hover:bg-black cursor-pointer ${
								page - 1 === index && "bg-amber-400"
							}`}
						>
							<span>{index + 1}</span>
						</div>
					))}
					<span className="text-2xl">
						<IoMdArrowRoundForward
							size={32}
							onClick={() => pageHandler(page + 1)}
							className={`cursor-pointer hover:bg-amber-400 shadow-2xl ${
								page === Math.ceil(totalPages) && "opacity-0"
							}`}
						/>
					</span>
				</div>
			)}
			</div>
		</>
	);
};

export default ProductList;
