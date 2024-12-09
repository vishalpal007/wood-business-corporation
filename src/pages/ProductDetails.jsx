import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { type } = useParams();

    // Product descriptions mapped
    const products = {
        indianMDF: {
            title: 'Indian MDF',
            img: 'https://as2.ftcdn.net/v2/jpg/01/31/02/53/1000_F_131025337_JGueqd3lVxAZ7MNHT4ODrW61OJYehU6q.jpg',
            description: 'Indian MDF is a cost-effective, locally made material suitable for budget-friendly furniture and interiors, offering decent quality but less precision than imported MDF.',
            details: [
                { thickness: '2 mm', price: '5.3', gst: '169.6 + 200.12' },
                { thickness: '3.2 mm', price: '7.78', gst: '248.96 + 293.77' },
                { thickness: '3.4 mm', price: '8.17', gst: '261.96 + 308.49' },
                { thickness: '4.0 mm', price: '9.22', gst: '295.04 + 348.14' },
            ],
        },
        importedMDF: {
            title: 'Imported MDF',
            img: 'https://5.imimg.com/data5/ZB/MU/GD/SELLER-27338376/imported-mdf-sheet-500x500.jpg',
            description: 'Imported MDF is a premium material with superior finish, strength, and uniformity, ideal for high-end furniture and luxury interiors, though more expensive.',
            details: [
                { thickness: '1.5 mm', price: '5.25', gst: '168 + 198.24' },
                { thickness: '1.9 mm', price: '5.32', gst: '170.24 + 200.88' },
                { thickness: '2.1 mm', price: '6.12', gst: '195.84 + 231.09' },
                { thickness: '2.3 mm', price: '6.65', gst: '212.8 + 251.18' },
            ],
        },
    };

    const product = products[type];

    if (!product) {
        return (
            <div className="min-h-screen py-16 bg-gray-50 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">Product not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white mt-10">
            {/* Responsive two-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-white rounded-lg shadow-md">
                {/* Left Side: Product Image */}
                <div className="flex justify-center items-center px-2 py-4 md:py-8">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm object-cover hover:scale-105 transition-transform duration-200"
                    />
                </div>

                {/* Right Side: Description + Pricing Table */}
                <div className="flex flex-col justify-start px-4 md:px-6 py-4 md:py-6">
                    {/* Product Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-800">
                        {product.title}
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-6 text-gray-600">
                        {product.description}
                    </p>

                    {/* Pricing Table */}
                    <div className="overflow-x-auto bg-white shadow-md rounded-md">
                        <table className="min-w-full table-auto border-collapse border border-gray-200">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="px-4 py-2 border-b text-center">Thickness (mm)</th>
                                    <th className="px-4 py-2 border-b text-center">Plain Price (in Rs)</th>
                                    <th className="px-4 py-2 border-b text-center">Sheet Rate + With GST</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {product.details.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-100 transition-all duration-200"
                                    >
                                        <td className="px-4 py-3 border-b text-center text-sm text-gray-700">
                                            {item.thickness}
                                        </td>
                                        <td className="px-4 py-3 border-b text-center text-sm text-gray-700">
                                            ₹ {item.price}
                                        </td>
                                        <td className="px-4 py-3 border-b text-center text-sm text-gray-700">
                                            {item.gst}
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
