import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const slides = [
        {
            image: '/images/slider-1.jpg',
            title: 'WELCOME TO OOUTH',
            subtitle: 'BE CALM QUITE COOL'
        },
        {
            image: '/images/slider-2.jpg',
            title: 'TRY TO BE HEALTHY',
            subtitle: "AIN'T THAT NICE?"
        },
        {
            image: '/images/slider-3.jpg',
            title: 'BE AWESOME',
            subtitle: 'IN A SMOOTH WAY'
        }
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {slides.map((slide, index) => (
                <motion.div
                    key={index}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1
                    }}
                    transition={{duration: 0.7}}
                    className="absolute inset-0 w-full"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center w-full"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',  // Ensure proper background sizing
                            backgroundPosition: 'center',
                            width: '100%'  // Force full width
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 w-full"/>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <motion.h1
                            initial={{y: 20, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.5}}
                            className="text-6xl font-bold mb-4 text-center"
                        >
                            {slide.title}
                        </motion.h1>
                        <motion.p
                            initial={{y: 20, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.7}}
                            className="text-2xl text-center"
                        >
                            {slide.subtitle}
                        </motion.p>
                        <motion.button
                            initial={{y: 20, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.9}}
                            className="mt-8 px-8 py-3 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600 transition-colors"
                        >
                            Book Appointment
                        </motion.button>
                    </div>
                </motion.div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;