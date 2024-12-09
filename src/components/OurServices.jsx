import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const OurServices = () => {
    const { ref: imgRef1, inView: imgInView1 } = useInView({ triggerOnce: true });
    const { ref: imgRef2, inView: imgInView2 } = useInView({ triggerOnce: true });
    const { ref: imgRef3, inView: imgInView3 } = useInView({ triggerOnce: true });

    return (
        <div className="min-h-screen py-16 px-6 mt-12 bg-gray-50">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
                    Our Premium Products
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600">
                    High-Quality Pine Woods for Every Need
                </h2>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-8 lg:gap-8 transition-all duration-300">

                    {/* American Pine */}
                    <motion.div
                        ref={imgRef1}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView1 ? 1 : 0,
                            y: imgInView1 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out p-4"
                    >
                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2023/1/YU/QC/HZ/181779721/american-pinewood-1000x1000.jpg"
                            alt="American Pine"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">American Pine</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 font-serif leading-tight text-start">
                                Renowned for its strength and versatility, American Pine is perfect for furniture, flooring, and construction.
                            </p>
                        </div>
                    </motion.div>

                    {/* Australian Pine */}
                    <motion.div
                        ref={imgRef2}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView2 ? 1 : 0,
                            y: imgInView2 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out p-4"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1681752972950-6229ca099fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Australian Pine"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Australian Pine</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 font-serif leading-tight text-start">
                                With exceptional resistance to insects and rot, Australian Pine is ideal for outdoor structures and decking.
                            </p>
                        </div>
                    </motion.div>

                    {/* African Pine */}
                    <motion.div
                        ref={imgRef3}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView3 ? 1 : 0,
                            y: imgInView3 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out p-4"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1560125330-65e097c48708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="African Pine"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">African Pine</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 font-serif leading-tight text-start">
                                African Pine is known for its rich color and is widely used in high-end furniture and cabinetry.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        ref={imgRef3}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView3 ? 1 : 0,
                            y: imgInView3 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out p-4"
                    >
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/01/31/02/53/1000_F_131025337_JGueqd3lVxAZ7MNHT4ODrW61OJYehU6q.jpg"
                            alt="African Pine"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Indian MDF</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 font-serif leading-tight text-start">
                                Indian MDF is a cost-effective, locally made material suitable for budget-friendly furniture and interiors, offering decent quality but less precision than imported MDF.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        ref={imgRef3}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView3 ? 1 : 0,
                            y: imgInView3 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out p-4"
                    >
                        <img
                            src="https://5.imimg.com/data5/ZB/MU/GD/SELLER-27338376/imported-mdf-sheet-500x500.jpg"
                            alt="African Pine"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Imported MDF</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 font-serif leading-tight text-start">
                                Imported MDF is a premium material with superior finish, strength, and uniformity, ideal for high-end furniture and luxury interiors, though more expensive.
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        ref={imgRef3}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView3 ? 1 : 0,
                            y: imgInView3 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out p-4"
                    >
                        <img
                            src="https://img.freepik.com/free-vector/wooden-color-palette-background_1284-22962.jpg"
                            alt="African Pine"
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Emulsion Matte</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 font-serif leading-tight text-start">
                                Emulsion matte paint offers a non-reflective, smooth finish that hides wall imperfections, is washable, durable, and ideal for creating a soft, elegant look in interior spaces.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default OurServices;
