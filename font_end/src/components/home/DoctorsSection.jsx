import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const DoctorCard = ({ image, name, specialty, socialLinks }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-oouth-500 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="text-white hover:text-oouth-100 transition-colors"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-oouth-500">{specialty}</p>
            </div>
        </div>
    );
};

const DoctorsSection = () => {
    const doctors = [
        {
            image: "/images/doctor_1.png",
            name: "Dr. Bodunde",
            specialty: "Ophthalmology",
            socialLinks: [
                { icon: <Facebook size={20} />, url: "#" },
                { icon: <Twitter size={20} />, url: "#" },
                { icon: <Instagram size={20} />, url: "#" },
                { icon: <Mail size={20} />, url: "#" }
            ]
        },
        {
            image: "/images/doctor_2.png",
            name: "Dr. Sogebi",
            specialty: "Otorhinolaryngology",
            socialLinks: [
                { icon: <Facebook size={20} />, url: "#" },
                { icon: <Twitter size={20} />, url: "#" },
                { icon: <Instagram size={20} />, url: "#" },
                { icon: <Mail size={20} />, url: "#" }
            ]
        },
        {
            image: "/images/doctor_3.png",
            name: "Dr. Akodu",
            specialty: "Neurology",
            socialLinks: [
                { icon: <Facebook size={20} />, url: "#" },
                { icon: <Twitter size={20} />, url: "#" },
                { icon: <Instagram size={20} />, url: "#" },
                { icon: <Mail size={20} />, url: "#" }
            ]
        },
        {
            image: "/images/doctor_4.png",
            name: "Prof. Jaiyesimi",
            specialty: "Nephrology",
            socialLinks: [
                { icon: <Facebook size={20} />, url: "#" },
                { icon: <Twitter size={20} />, url: "#" },
                { icon: <Instagram size={20} />, url: "#" },
                { icon: <Mail size={20} />, url: "#" }
            ]
        }
    ];

    return (
        <section className="py-16" id="doctors">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Doctors</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Meet our team of experienced and qualified medical professionals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <DoctorCard key={index} {...doctor} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600 transition-colors">
                        View All Doctors
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;