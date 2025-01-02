import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
    Heart,
    Brain,
    Baby,
    Users,
    Activity,
    Clock,
    Phone,
    Mail,
    MapPin,
    Calendar,
    CheckCircle,
    Stethoscope,
    Loader2
} from 'lucide-react';

const DepartmentDetail = () => {
    const { id } = useParams();
    const [department, setDepartment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to get the appropriate icon based on department name
    const getDepartmentIcon = (departmentName) => {
        const icons = {
            'Cardiology': <Heart className="h-12 w-12" />,
            'Neurology': <Brain className="h-12 w-12" />,
            'Pediatrics': <Baby className="h-12 w-12" />
        };
        return icons[departmentName] || <Stethoscope className="h-12 w-12" />;
    };

    useEffect(() => {
        const fetchDepartment = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/departments/${id}`);
                setDepartment(response.data);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch department details');
            } finally {
                setLoading(false);
            }
        };

        fetchDepartment();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-oouth-500" />
            </div>
        );
    }

    if (error || !department) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Department not found</h1>
                <p className="text-red-500 mt-2">{error}</p>
                <Link to="/departments" className="text-oouth-500 hover:text-oouth-600 mt-4 inline-block">
                    View all departments
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Hero Section */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
                <img
                    src={department.imageUrl || '/images/departments/default.jpg'}
                    alt={department.name}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-oouth-500/80 to-oouth-500/40">
                    <div className="h-full flex items-center px-8">
                        <div className="text-white">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="text-white">
                                    {getDepartmentIcon(department.name)}
                                </div>
                                <h1 className="text-3xl font-bold">{department.name}</h1>
                            </div>
                            <p className="max-w-2xl text-white/90">
                                {department.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Doctors Section */}
                    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Our Specialists</h2>
                            <Link to="/doctors" className="text-oouth-500 hover:text-oouth-600">
                                View All
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {department.Doctors?.map(doctor => (
                                <Link
                                    key={doctor.id}
                                    to={`/doctors/${doctor.id}`}
                                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-oouth-50 transition-colors"
                                >
                                    <img
                                        src={doctor.imageUrl || '/images/doctors/default.webp'}
                                        alt={doctor.name}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                                        <p className="text-oouth-500">{doctor.specialization}</p>
                                        <p className="text-sm text-gray-500">{doctor.experience} experience</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <div className="space-y-4">
                            {department.Services?.map(service => (
                                <div
                                    key={service.id}
                                    className="border border-gray-200 rounded-lg p-4 hover:border-oouth-200 transition-colors"
                                >
                                    <h3 className="font-semibold text-gray-900">{service.name}</h3>
                                    <p className="text-gray-600 mt-1">{service.description}</p>
                                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1 text-oouth-500" />
                                            <span>{service.duration}</span>
                                        </div>
                                        <span className="text-oouth-500 font-medium">₦{service.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Facilities Section */}
                    <section className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {department.Facilities?.map((facility, index) => (
                                <div key={facility.id} className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-oouth-500" />
                                    <span className="text-gray-700">{facility.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    {/* Contact Information */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-oouth-500" />
                                <span>{department.DepartmentContact?.location}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-oouth-500" />
                                <span>{department.DepartmentContact?.phone}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-oouth-500" />
                                <span>{department.DepartmentContact?.email}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-oouth-500" />
                                <span>{department.DepartmentContact?.hours}</span>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Button */}
                    <Link
                        to="/appointments/new"
                        className="block w-full bg-oouth-500 text-white text-center py-3 rounded-lg hover:bg-oouth-600 transition-colors"
                    >
                        <Calendar className="inline-block h-5 w-5 mr-2" />
                        Book Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DepartmentDetail;