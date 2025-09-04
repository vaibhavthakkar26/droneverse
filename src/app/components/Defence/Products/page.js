import React from 'react'
import Image from "next/image";
import paternsbg from '../../../../../public/assets/img/defence/paterns.png'
import dvHourspic from "../../../../../public/assets/img/defence/dvHours.png";
import btnShape from '../../../../../public/assets/img/defence/Subtract.png'

const DefenceProducts = () => {
    const products = [
        {
            id: "dv-horus",
            title: "DV HORUS",
            category: "SURVEILLENCE DRONES",
            description:
                "DroneVerse’s cutting-edge FPV (First Person View) drones deliver real-time situational awareness, empowering troops in asymmetric warfare. From tactical surveillance to high-speed ops, they redefine control, clarity, and command on the battlefield",
            features: [
                "Flight Time 30-45 mins",
                "Range 7km+",
                "Flying in wind speeds 35 knots",
                "MTOW",
                "Flying at speeds up to 120 kph",
                "Payload Capacity",
            ],
            image: dvHourspic,
            buttons: ["DV HORUS", "DV HUNTSMEN", "DV BUG"],
        },
    ];
    return (
        <>
            <section className='relative pt-[75px] pb-[116px]'>
                <div
                    className="absolute inset-0 bg-center bg-cover -z-10 opacity-10"
                    style={{ backgroundImage: `url(${paternsbg.src})` }}
                ></div>
                <div className="px-4 mx-auto max-w-7xl">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col gap-8 md:flex-row"
                        >
                            {/* Left Side - Content */}
                            <div className="w-full space-y-6 md:w-3/4">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase">
                                    {product.category}
                                </h3>
                                <h2 className="text-3xl font-bold">{product.title}</h2>
                                <p className="text-gray-700">{product.description}</p>

                                {/* Features */}
                                <ul className="grid grid-cols-1 gap-2 text-gray-600 list-disc list-inside sm:grid-cols-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                                {/* Buttons */}
                                <div className="grid grid-cols-3 gap-3 pt-4">
                                    {product.buttons.map((btn, index) => (
                                        <button
                                            key={index}
                                            className="relative px-4 py-5 text-black transition bg-transparent border rounded-tr-[15px] hover:bg-gray-400 text-2xl poppins-medium w-full overflow-hidden"
                                        >
                                            {btn}

                                            {/* Shape image */}
                                            <div className="absolute bottom-0 left-0 w-6 h-6 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                <Image src={btnShape} alt="Shape" layout="fill" objectFit="contain" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className=" md:w-2/5">
                                {/* <Image
                                    src={product.image}
                                    alt={product.title}
                                    className="top-0 right-0 object-contain w-full max-w-sm "
                                /> */}
                            </div>
                            <Image
                                src={product.image}
                                alt={product.title}
                                className="absolute right-0 object-contain w-1/2 -top-1/6"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default DefenceProducts
