import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion, useAnimation } from "framer-motion";
import { toast } from "sonner";
import { IoCall, IoLocationSharp, IoMailSharp } from "react-icons/io5";

const Contact = () => {
    const controlsForm = useAnimation();
    const controlsDetails = useAnimation();
    const formRef = useRef(null);
    const detailsRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter your name"),
            email: yup.string().email("Invalid email").required("Enter your email"),
            subject: yup.string().required("Enter the subject"),
            message: yup.string().required("Enter your message"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log("Form submitted:", values);
            toast.success("Message sent successfully!");
            resetForm();
        },
    });

    useEffect(() => {
        const observerOptions = { root: null, threshold: 0.25 };

        const formObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) controlsForm.start({ opacity: 1, translateY: 0 });
        }, observerOptions);

        const detailsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) controlsDetails.start({ opacity: 1, translateY: 0 });
        }, observerOptions);

        if (formRef.current) formObserver.observe(formRef.current);
        if (detailsRef.current) detailsObserver.observe(detailsRef.current);

        return () => {
            if (formRef.current) formObserver.unobserve(formRef.current);
            if (detailsRef.current) detailsObserver.unobserve(detailsRef.current);
        };
    }, [controlsForm, controlsDetails]);

    return (
        <div className="p-6 bg-white">
            <div className="max-w-7xl mx-auto px-5 mt-16">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-gray-800"
                >
                    Contact Us
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Form Section */}
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, translateY: 50 }}
                        animate={controlsForm}
                        transition={{ duration: 1 }}
                        className="bg-gray-50 p-8 rounded-lg shadow-md"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h2>
                        <form onSubmit={formik.handleSubmit} className="space-y-5">
                            <input
                                {...formik.getFieldProps("name")}
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-red-500 text-sm">{formik.errors.name}</p>
                            )}

                            <input
                                {...formik.getFieldProps("email")}
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm">{formik.errors.email}</p>
                            )}

                            <input
                                {...formik.getFieldProps("subject")}
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            {formik.touched.subject && formik.errors.subject && (
                                <p className="text-red-500 text-sm">{formik.errors.subject}</p>
                            )}

                            <textarea
                                {...formik.getFieldProps("message")}
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            ></textarea>
                            {formik.touched.message && formik.errors.message && (
                                <p className="text-red-500 text-sm">{formik.errors.message}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details Section */}
                    <motion.div
                        ref={detailsRef}
                        initial={{ opacity: 0, translateY: 50 }}
                        animate={controlsDetails}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <IoLocationSharp className="text-2xl text-gray-800 mt-2" />
                            <div>
                                <h3 className="font-bold text-xl text-gray-800">Our Location</h3>
                                <p className="text-gray-600">
                                    Office No.1, Ground Floor, Golden City Centre,
                                    <br />
                                    Besides Prozone Mall, Chikhalthana, Chh. Sambhajinagar,
                                    <br />
                                    Maharashtra - 431003
                                </p>
                                <iframe
                                    className="mt-4 rounded-lg w-full h-60 border border-gray-200 shadow-sm"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14977.368332236913!2d75.37303376507336!3d19.875228081512407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzMxLjEiTiA3NcKwMjInMjMuMCJF!5e0!3m2!1sen!2sin!4v1648745125289!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <IoMailSharp className="text-2xl text-gray-800" />
                            <div>
                                <h3 className="font-bold text-xl text-gray-800">Email Us</h3>
                                <a
                                    href="mailto:p.vishal1100@gmail.com"
                                    className="text-gray-800 hover:underline"
                                >
                                    p.vishal1100@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <IoCall className="text-2xl text-gray-800" />
                            <div>
                                <h3 className="font-bold text-xl text-gray-800">Call Us</h3>
                                <a href="tel:8208543875" className="text-gray-800 hover:underline">
                                    +91 82085 43875
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
