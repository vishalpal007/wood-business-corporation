import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const { ref: leftRef1, inView: leftInView1 } = useInView({ triggerOnce: true });
    const { ref: rightRef1, inView: rightInView1 } = useInView({ triggerOnce: true });

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
        </div>
    );
};

export default AboutUs;
