import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Using framer-motion for smoother animations

const OurServices = () => {
    const { ref: imgRef1, inView: imgInView1 } = useInView({ triggerOnce: true });
    const { ref: imgRef2, inView: imgInView2 } = useInView({ triggerOnce: true });
    const { ref: imgRef3, inView: imgInView3 } = useInView({ triggerOnce: true });

    return (
        <div className="min-h-screen py-16 px-6 mt-12 bg-gray-50">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Our Premium Products
                </h1>
                <h2 className="text-xl font-medium text-gray-600">
                    High-Quality Pine Woods for Every Need
                </h2>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* American Pine */}
                    <motion.div
                        ref={imgRef1}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: imgInView1 ? 1 : 0,
                            y: imgInView1 ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1582282577080-2ebf8af6ca81?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="American Pine"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">American Pine</h3>
                            <p className="text-gray-600 font-serif text-lg">
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
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1681752972950-6229ca099fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Australian Pine"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Australian Pine</h3>
                            <p className="text-gray-600 font-serif text-lg">
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
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1560125330-65e097c48708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="African Pine"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">African Pine</h3>
                            <p className="text-gray-600 font-serif text-lg">
                                African Pine is known for its rich color and is widely used in high-end furniture and cabinetry.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
