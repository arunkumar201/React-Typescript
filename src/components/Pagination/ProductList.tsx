import React, { useEffect, useState } from "react";
import { CartInfoProps, CartInfo } from "./CartInfo";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
type Props = {};

const ProductList = (_props: Props) => {
	const [products, setProducts] = useState<[CartInfoProps] | []>([]);
	const [page, setPage] = useState<number>(1);
	const getProductData = async () => {
		const res = await fetch("https://dummyjson.com/products?limit=100");
		const data = await res.json();
		if (data && data.products && data.products.length > 0) {
			setProducts(data?.products);
		}
	};
	useEffect(() => {
		getProductData();
	}, []);
	function pageHandler(index: number) {
		console.log("🚀 ~ file: ProductList.tsx:20 ~ pageHandler ~ index:", index);
		if (
			index >= 1 &&
			index <= Math.ceil(products.length / 10) &&
			index !== page
		)
			setPage(index);
	}

	return (
		<>
			<div className="w-full">
				<div className="w-full h-full flex bg-slate-500 flex-wrap flex-1  gap-3 justify-center items-center">
					{products &&
						products?.slice(page * 8 - 8, page * 8)?.map((Item: any) => (
							<div
								key={Item.id}
								className=" w-[23rem] h-[33rem] grow-1 flex p-3 "
							>
								<CartInfo product={Item} />
							</div>
						))}
				</div>
				{products.length > 0 && (
					<div className="flex justify-center gap-3 py-4 px-4">
						<span className="text-2xl">
							<IoMdArrowRoundBack
								onClick={() => pageHandler(page - 1)}
								size={32}
								className={`cursor-pointer hover:bg-amber-400 shadow-2xl ${
									page== 1 && "opacity-0"
								}`}
							/>
						</span>
						{[...Array(Math.ceil(products.length / 10))].map(
							(_, index: number) => (
								<div
									key={index}
									onClick={() => pageHandler(index + 1)}
									className={`text-2xl hover:text-blue-500 transition-colors duration-300 border-2 border-red-500 px-4 rounded-md hover:bg-black cursor-pointer ${
										page - 1 === index && "bg-amber-400"
									} `}
								>
									<span>{index + 1}</span>
								</div>
							)
						)}
						<span className="text-2xl">
							<IoMdArrowRoundForward
								size={32}
								onClick={() => pageHandler(page + 1)}
								className={`cursor-pointer hover:bg-amber-400  shadow-2xl ${
									page === Math.ceil(products.length / 10) && "opacity-0"
								} `}
							/>
						</span>
					</div>
				)}
			</div>
		</>
	);
};

export default ProductList;
