import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const { ref: leftRef1, inView: leftInView1 } = useInView({ triggerOnce: true });
    const { ref: rightRef1, inView: rightInView1 } = useInView({ triggerOnce: true });
    const { ref: leftRef2, inView: leftInView2 } = useInView({ triggerOnce: true });
    const { ref: rightRef2, inView: rightInView2 } = useInView({ triggerOnce: true });

    const tableData = [
        {
            title: 'Indian MDF',
            data: [
                { thickness: '2 mm', price: '5.3', gst: '169.6 + 200.12' },
                { thickness: '3.2 mm', price: '7.78', gst: '248.96 + 293.77' },
                { thickness: '3.4 mm', price: '8.17', gst: '261.96 + 308.49' },
                { thickness: '4.0 mm', price: '9.22', gst: '295.04 + 348.14' },
                { thickness: '4.2 mm', price: '9.97', gst: '319.04 + 376.46' },
                { thickness: '5.2 mm', price: '12.21', gst: '390.72 + 461.04' },
            ],
        },
        {
            title: 'Imported MDF',
            data: [
                { thickness: '1.5 mm', price: '5.25', gst: '168 + 198.24' },
                { thickness: '1.9 mm', price: '5.32', gst: '170.24 + 200.88' },
                { thickness: '2.1 mm', price: '6.12', gst: '195.84 + 231.09' },
                { thickness: '2.3 mm', price: '6.65', gst: '212.8 + 251.18' },
                { thickness: '2.5 mm', price: '7.18', gst: '229.70 + 271.18' },
            ],
        },
    ];

    const renderTable = (data) => (
        <div className="overflow-x-auto">
            <table className="w-full bg-white text-sm md:text-base rounded-lg shadow-md border border-gray-200">
                <thead>
                    <tr className="bg-gray-950 text-white">
                        <th className="px-4 sm:px-6 py-2 sm:py-4 text-left font-bold text-sm md:text-base tracking-wide">
                            Thickness (mm)
                        </th>
                        <th className="px-4 sm:px-6 py-2 sm:py-4 text-left font-bold text-sm md:text-base tracking-wide">
                            Plain Per Sq Ft (Rs)
                        </th>
                        <th className="px-4 sm:px-6 py-2 sm:py-4 text-left font-bold text-sm md:text-base tracking-wide">
                            Sheet Rate + With GST
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                                } hover:bg-gray-300 transition duration-200`}
                        >
                            <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 text-xs sm:text-sm md:text-base">
                                {item.thickness}
                            </td>
                            <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 text-xs sm:text-sm md:text-base">
                                {item.price}
                            </td>
                            <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 text-xs sm:text-sm md:text-base">
                                {item.gst}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );




    return (
        <div className="bg-gray-50 py-10 px-4">
            <style>
                {`
                @keyframes slideInLeft {
                    from { transform: translateX(-30px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideInRight {
                    from { transform: translateX(30px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-in-out;
                }
                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-in-out;
                }
                .hover-zoom {
                    transition: transform 0.3s ease;
                }
                .hover-zoom:hover {
                    transform: scale(1.05);
                }
            `}
            </style>

            {/* Section 1: Company Info */}
            <div className="max-w-6xl mx-auto bg-white p-4 sm:p-6 md:p-12 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        ref={leftRef1}
                        className={`flex flex-col justify-center ${leftInView1 ? 'animate-slide-in-left' : ''}`}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Welcome to Shree Balaji Corporation
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                            A trusted name in the industry, we specialize in importing and trading premium-quality{' '}
                            <span className="font-semibold text-gray-900"> MDF, Pine Wood, Polyester Fiber,</span> and{' '}
                            <span className="font-semibold text-gray-900"> Emulsion Mats.</span> With an unwavering
                            commitment to excellence, we ensure our customers receive products that meet the highest
                            standards of quality and sustainability.
                        </p>
                        <ul className="list-disc pl-4 sm:pl-6 text-gray-700 text-sm sm:text-base md:text-lg mb-6 space-y-2">
                            <li>
                                <span className="font-semibold text-gray-900">Quality Assurance:</span> Handpicked
                                materials ensuring durability.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Global Sourcing:</span> Imported from the
                                best manufacturers worldwide.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Customer-Centric:</span> Tailored solutions
                                for diverse business needs.
                            </li>
                        </ul>
                        <div className="text-start md:text-end">
                            <Link
                                to="/services"
                                className="bg-gray-800 text-white text-sm sm:text-base font-medium py-2 px-4 rounded-lg shadow hover:bg-red-900 transition"
                            >
                                Explore Our Products
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={rightRef1}
                        className={`flex justify-center items-center ${rightInView1 ? 'animate-slide-in-right' : ''}`}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1611491064644-a9ff17219a53?q=80&w=800&auto=format&fit=crop"
                            alt="Company"
                            className="rounded-lg shadow-md hover-zoom w-full max-w-xs sm:max-w-md h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Product Details */}
            {tableData.map((table, index) => (
                <div
                    key={index}
                    className="max-w-6xl mx-auto mt-10 bg-white p-4 sm:p-6 md:p-12 rounded-lg shadow-lg"
                    ref={index % 2 === 0 ? leftRef2 : rightRef2}
                >
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">{table.title}</h3>
                    {renderTable(table.data)}
                </div>
            ))}
        </div>
    );
};

export default AboutUs;
