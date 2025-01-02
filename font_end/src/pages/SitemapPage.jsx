import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage = () => {
    const siteStructure = {
        'Main Pages': {
            'Home': '/',
            'About Us': '/about',
            'Services': '/services',
            'Doctors': '/doctors',
            'Contact': '/contact'
        },
        'Departments': {
            'Cardiology': '/departments/cardiology',
            'Nephrology': '/departments/nephrology',
            'Psychiatry': '/departments/psychiatry',
            'Respiratory': '/departments/respiratory',
            'Ophthalmology': '/departments/ophthalmology',
            'Otorhinolaryngology': '/departments/otorhinolaryngology'
        },
        'Patient Resources': {
            'Book Appointment': '/appointments',
            'Patient Portal': '/patient-portal',
            'Emergency Services': '/emergency',
            'Visiting Hours': '/visiting-hours',
            'Insurance Information': '/insurance'
        },
        'Information': {
            'Latest News': '/news',
            'Career Opportunities': '/careers',
            'FAQ': '/faq',
            'Research & Publications': '/research'
        },
        'Legal': {
            'Privacy Policy': '/privacy-policy',
            'Terms of Service': '/terms-of-service',
            'Disclaimer': '/disclaimer'
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Site Map</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(siteStructure).map(([category, pages]) => (
                        <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-blue-600 mb-4">{category}</h2>
                            <ul className="space-y-2">
                                {Object.entries(pages).map(([name, path]) => (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className="text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium mb-2">Address</h3>
                            <p className="text-gray-600">Sagamu, Ogun State, Nigeria</p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Contact</h3>
                            <p className="text-gray-600">Phone: +234-8163701056</p>
                            <p className="text-gray-600">Email: info@oouth.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SitemapPage;