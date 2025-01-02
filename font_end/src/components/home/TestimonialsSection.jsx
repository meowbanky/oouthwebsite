import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            text: "My mom was admitted there and i kid you not, i did not expect the kind of reception and treatment i got, most especially from a public hospital.",
            author: "Mr Duru Chidozie",
            position: "Trader"
        },
        {
            text: "I came for a checkup, but i was surprised to see how well organized they all went about everything professionally, it was not so stereotypical of i thought it would be.",
            author: "Mrs Sokunbi Esther",
            position: "Accountant"
        },
        {
            text: "I was actually encouraged by a friend to come here, before i conceived my second child, and i really like the way we all got enlightened on so many things concerning child birth, i thought i knew it all.",
            author: "Mrs Akinlaja Osibajo",
            position: "Advisor"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="py-16 bg-oouth-500" id="testimonials">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What Our Patients Say</h2>
                        <p className="text-blue-100">Read testimonials from our valued patients</p>
                    </div>

                    <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12">
                        <div className="absolute -top-0 left-10 text-oouth-500">
                            <Quote size={38} />
                        </div>

                        <div className="min-h-[200px]">
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {testimonials[currentTestimonial].text}
                            </p>

                            <div>
                                <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                                <p className="text-gray-500">{testimonials[currentTestimonial].position}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-8">
                            <button
                                onClick={previousTestimonial}
                                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            currentTestimonial === index
                                                ? 'bg-oouth-500'
                                                : 'bg-blue-200 hover:bg-blue-300'
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;