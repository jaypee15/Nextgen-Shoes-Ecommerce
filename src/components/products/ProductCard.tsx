import {CiHeart} from "react-icons/ci";
import {IoIosArrowRoundForward} from "react-icons/io";
import {Link} from "react-router-dom";
import {productData} from "./productData.ts";

const ProductCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productData.map((product) => (
                <>
                    <div key={product.id}
                         className="bg-[#ffe4cc] shadow rounded-xl px-5 py-3">
                        <div className="overflow-hidden w-full relative group rounded-lg">
                            <img src={product.image}
                                 className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                                 alt=""/>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex justify-between items-center">
                                <h2 className="font-bold">{product.name}</h2>
                                <Link to="">
                                    <CiHeart className="bg-[#ffd4b7] text-[#ff8855] rounded-full font-bold" size={25}/>
                                </Link>
                            </div>

                            <h2 className="font-bold">$ {product.price}</h2>

                            <Link to={`/product/${product.id}`}>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold">View details</h2>
                                    <IoIosArrowRoundForward className="" size={25}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default ProductCard;
