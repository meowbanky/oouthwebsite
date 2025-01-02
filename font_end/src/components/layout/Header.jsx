import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Phone, Mail } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
    const { user, isAuthenticated } = useAuth();

    return (
        <header className="relative">
            {/* Top Bar */}
            {/* Top Bar */}
            <div className="bg-oouth-500 text-white">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm md:text-base">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-center">
                            <a href="tel:+234-8163701056" className="flex items-center space-x-1 text-xs sm:text-sm">
                                <Phone size={14} className="hidden sm:block" />
                                <Phone size={12} className="sm:hidden" />
                                <span>+234-8163701056</span>
                            </a>
                            <a href="mailto:info@oouth.com" className="flex items-center space-x-1 text-xs sm:text-sm">
                                <Mail size={14} className="hidden sm:block" />
                                <Mail size={12} className="sm:hidden" />
                                <span>info@oouth.com</span>
                            </a>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4 text-xs sm:text-sm mt-2 sm:mt-0">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className="hover:text-blue-100"
                                    >
                                        Welcome, {user.firstName}
                                    </Link>
                                    <Link
                                        to="/appointments"
                                        className="hover:text-blue-100"
                                    >
                                        My Appointments
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="hover:text-blue-100"
                                    >
                                        Patient Portal
                                    </Link>
                                </>
                            )}
                            <a href="/emergency" className="font-bold text-red-300 hover:text-red-100">
                                <span className="hidden sm:inline">Emergency:</span> 911
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <Navigation />
        </header>
    );
};

export default Header;