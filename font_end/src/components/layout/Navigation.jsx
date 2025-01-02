import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, isAuthenticated, isAdmin, logout } = useAuth();

    const mainNavItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Departments',
            path: '/departments',
            submenu: [
                { name: 'All Departments', path: '/departments' },
                { name: 'Cardiology', path: '/departments?dept=cardiology', description: 'Comprehensive heart care' },
                { name: 'Neurology', path: '/departments?dept=neurology', description: 'Expert neurological care' },
                { name: 'Pediatrics', path: '/departments?dept=pediatrics', description: 'Specialized child care' }
            ]
        },
        {
            name: 'Services',
            path: '/services',
            submenu: [
                { name: 'All Services', path: '/services' },
                { name: 'Emergency Care', path: '/services?dept=emergency' },
                { name: 'Cardiology', path: '/services?dept=cardiology' },
                { name: 'Pediatrics', path: '/services?dept=pediatrics' },
            ]
        },
        {
            name: 'Doctors',
            path: '/doctors',
            submenu: [
                { name: 'All Doctors', path: '/doctors' },
                { name: 'Cardiologists', path: '/doctors?dept=cardiology' },
                { name: 'Neurologists', path: '/doctors?dept=neurology' },
                { name: 'Pediatricians', path: '/doctors?dept=pediatrics' },
            ]
        },
        { name: 'Contact', path: '/contact' }
    ];

    const profileMenuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'My Appointments', path: '/appointments' },
        { name: 'Profile Settings', path: '/profile' },
        ...(isAdmin ? [{ name: 'Admin Dashboard', path: '/admin' }] : []),
    ];

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            setIsProfileMenuOpen(false);
            setIsOpen(false);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="Hospital Logo"
                                className="h-8 w-auto"
                            />
                            <span className="ml-2 text-xl font-bold text-oouth-500">
                                <span className="md:hidden">OOUTH</span>
                                <span className="hidden md:inline">Olabisi Onabanjo University Teaching Hospital</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {mainNavItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                                        location.pathname === item.path
                                            ? 'text-oouth-500'
                                            : 'text-gray-700 hover:text-oouth-500'
                                    } flex items-center`}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    )}
                                </Link>

                                {item.submenu && (
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-1">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-oouth-50"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-oouth-500"
                                >
                                    <User className="h-5 w-5" />
                                    <span>{user.firstName}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>

                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {profileMenuItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-oouth-50"
                                                    onClick={() => setIsProfileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-oouth-50"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-oouth-500 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-oouth-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-oouth-500 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {mainNavItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-oouth-500 hover:bg-oouth-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.submenu && (
                                        <div className="pl-4">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-oouth-500"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isAuthenticated ? (
                                <>
                                    {profileMenuItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-oouth-500 hover:bg-oouth-50"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-oouth-500 hover:bg-oouth-50"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-oouth-500 hover:bg-oouth-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="block px-3 py-2 rounded-md text-base font-medium bg-oouth-500 text-white hover:bg-blue-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;