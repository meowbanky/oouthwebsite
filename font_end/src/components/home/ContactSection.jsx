import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
    const contactInfo = [
        {
            icon: <Phone size={24} />,
            title: "Phone Number",
            details: ["+234-8163701056", "Emergency: 911"],
        },
        {
            icon: <Mail size={24} />,
            title: "Email Address",
            details: ["info@oouth.com", "support@oouth.com"],
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            details: ["Olabisi Onabanjo University Teaching Hospital", "Sagamu, Ogun State, Nigeria"],
        },
        {
            icon: <Clock size={24} />,
            title: "Working Hours",
            details: ["Monday - Sunday", "24 Hours (Emergency Services)"],
        },
    ];

    return (
        <section className="py-16" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Subject"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-oouth-500 text-white py-3 rounded-lg hover:bg-oouth-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                >
                                    <div className="text-oouth-500 mb-4">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600">{detail}</p>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Map */}
                        <div className="mt-8 bg-white rounded-lg shadow-lg p-2">
                            <iframe
                                title="OOUTH Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.252454346896!2d3.5833333147708583!3d6.616666795227749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103c567d0000000f%3A0x2a6a6f1d7d0d0a5c!2sOlabisi%20Onabanjo%20University%20Teaching%20Hospital!5e0!3m2!1sen!2sng!4v1629788999999!5m2!1sen!2sng"
                                className="w-full h-64 rounded-lg"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;