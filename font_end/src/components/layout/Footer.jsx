import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400 mb-4">
                            Providing quality healthcare services with modern facilities and experienced doctors.
                            Your well-being is our priority.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white">Our Services</Link>
                            </li>
                            <li>
                                <Link to="/doctors" className="text-gray-400 hover:text-white">Our Doctors</Link>
                            </li>
                            <li>
                                <Link to="/appointments" className="text-gray-400 hover:text-white">Book Appointment</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/services?dept=emergency" className="text-gray-400 hover:text-white">Emergency Care</Link>
                            </li>
                            <li>
                                <Link to="/services?dept=cardiology" className="text-gray-400 hover:text-white">Cardiology</Link>
                            </li>
                            <li>
                                <Link to="/services?dept=pediatrics" className="text-gray-400 hover:text-white">Pediatrics</Link>
                            </li>
                            <li>
                                <Link to="/services?dept=neurology" className="text-gray-400 hover:text-white">Neurology</Link>
                            </li>
                            <li>
                                <Link to="/services?dept=dental" className="text-gray-400 hover:text-white">Dental Care</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <MapPin className="text-oouth-400" size={20} />
                                <span className="text-gray-400">Hospital Road, Sagamu,Ogun State Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-oouth-400" size={20} />
                                <span className="text-gray-400">+234-8163701056</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-oouth-400" size={20} />
                                <span className="text-gray-400">info@outh.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Clock className="text-oouth-400" size={20} />
                                <span className="text-gray-400">24/7 Emergency Service</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} OOUTH Hospital. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                            <Link to="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;