import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';

const StatisticCard = ({ number, label, duration = 2000 }) => {
    const ref = useRef(null);
    const count = useCounter(parseInt(number), duration, ref);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4"
        >
            <div className="text-3xl md:text-4xl font-bold mb-2">
                {typeof number === 'string' && number.includes('+') ?
                    `${count}+` : count}
            </div>
            <div className="text-blue-100">{label}</div>
        </motion.div>
    );
};

const AboutUs = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const statistics = [
        { number: "500", label: "Hospital Beds" },
        { number: "150", label: "Medical Specialists" },
        { number: "1000", label: "Staff Members" },
        { number: "50000", label: "Annual Patient Visits" },
        { number: "10000", label: "Surgeries Per Year" },
        { number: "20", label: "Departments" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <motion.section
                className="relative bg-oouth-500 text-white py-20"
                initial="initial"
                animate="animate"
                variants={fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Olabisi Onabanjo University Teaching
                            Hospital</h1>
                        <p className="text-lg md:text-xl text-blue-100">Excellence in Medical Education and Healthcare
                            Services Since 1986</p>
                    </div>
                </div>
            </motion.section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.2}}
                        >
                            <h2 className="text-2xl font-bold text-oouth-500 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To provide exceptional medical education to students of Olabisi Onabanjo University
                                while delivering comprehensive healthcare services to the people of Ogun State and
                                Nigeria at large through world-class medical practices and patient-centered care.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.4}}
                        >
                            <h2 className="text-2xl font-bold text-oouth-500 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To be the leading teaching hospital in Nigeria, renowned for excellence in medical
                                education, research, and healthcare delivery, while fostering the development of
                                competent healthcare professionals and improving community health outcomes.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center text-gray-900 mb-12"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                    >
                        Our Core Values
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Academic Excellence",
                                description: "Commitment to high-quality medical education and continuous professional development."
                            },
                            {
                                title: "Patient-Centered Care",
                                description: "Providing compassionate, comprehensive healthcare services tailored to individual needs."
                            },
                            {
                                title: "Community Service",
                                description: "Dedicated to improving the health and well-being of Ogun State residents and beyond."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.2}}
                            >
                                <h3 className="text-xl font-semibold text-oouth-500 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-oouth-500 text-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                    >
                        Our Impact in Numbers
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                        {statistics.map((stat, index) => (
                            <StatisticCard
                                key={stat.label}
                                number={stat.number}
                                label={stat.label}
                                duration={2000 + (index * 200)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            className="text-3xl font-bold text-center text-gray-900 mb-8"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                        >
                            Our History
                        </motion.h2>

                        <motion.div
                            className="prose lg:prose-lg mx-auto text-gray-600"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                        >
                            <p className="mb-4">
                                Olabisi Onabanjo University Teaching Hospital (OOUTH), formerly known as Ogun State
                                University Teaching Hospital (OSUTH), was established in 1986 in Sagamu, Ogun State,
                                South West Nigeria.
                            </p>
                            <p className="mb-4">
                                The teaching hospital was founded with the primary objective of providing quality
                                medical education to students from Olabisi Onabanjo University while simultaneously
                                offering comprehensive healthcare services to the people of Ogun State and Nigeria as a
                                whole.
                            </p>
                            <p>
                                Over the past three decades, OOUTH has grown significantly, continuously adapting to
                                meet the evolving healthcare needs of our community while maintaining our commitment to
                                excellence in medical education and patient care. Our legacy of service continues to
                                impact countless lives as we work towards advancing healthcare delivery in Nigeria.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4}}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-oouth-500 mb-6">Your Health is Our Priority</h2>
                        <p className="text-gray-600 mb-8">
                            Experience quality healthcare services at Olabisi Onabanjo University Teaching Hospital.
                        </p>
                        <button
                            className="bg-oouth-500 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors">
                            Book an Appointment
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutUs;