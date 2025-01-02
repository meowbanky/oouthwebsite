import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
    Stethoscope
} from 'lucide-react';

const DepartmentDetail = () => {
    const { id } = useParams();

    // Mock data - replace with API call
    const departmentData = {
        cardiology: {
            id: 1,
            name: "Cardiology",
            icon: <Heart className="h-12 w-12" />,
            description: "Our Cardiology Department offers comprehensive diagnostic and therapeutic services for all types of cardiovascular conditions. Our team of experienced cardiologists uses state-of-the-art technology to provide the best possible care for our patients.",
            image: "/images/departments/cardiology.jpg",
            doctors: [
                {
                    id: 1,
                    name: "Dr. Sarah Johnson",
                    image: "/images/doctors/default.jpg",
                    specialization: "Senior Cardiologist",
                    experience: "15 years"
                },
                {
                    id: 2,
                    name: "Dr. Michael Chen",
                    image: "/images/doctors/default.jpg",
                    specialization: "Interventional Cardiologist",
                    experience: "12 years"
                }
            ],
            services: [
                {
                    id: 1,
                    name: "Echocardiography",
                    description: "Non-invasive ultrasound test to evaluate heart function",
                    duration: "30 mins",
                    price: "$200"
                },
                {
                    id: 2,
                    name: "Cardiac Catheterization",
                    description: "Minimally invasive procedure to diagnose and treat heart conditions",
                    duration: "60 mins",
                    price: "$1500"
                },
                {
                    id: 3,
                    name: "Stress Test",
                    description: "Evaluate heart function during physical activity",
                    duration: "45 mins",
                    price: "$300"
                }
            ],
            facilities: [
                "Advanced Cardiac Imaging Center",
                "24/7 Emergency Cardiac Care",
                "Cardiac Rehabilitation Unit",
                "Specialized Cardiac ICU",
                "Non-invasive Cardiology Lab"
            ],
            contact: {
                location: "3rd Floor, East Wing",
                phone: "+1234567890",
                email: "cardiology@hospital.com",
                hours: "Monday - Friday: 8:00 AM - 6:00 PM"
            }
        },
        neurology: {
            id: 2,
            name: "Neurology",
            icon: <Brain className="h-12 w-12" />,
            description: "Expert care for neurological disorders with advanced treatment options. Our neurology department provides comprehensive care for all neurological conditions.",
            image: "/images/departments/neurology.jpg",
            doctors: [
                {
                    id: 3,
                    name: "Dr. John Smith",
                    image: "/images/doctors/default.jpg",
                    specialization: "Neurologist",
                    experience: "20 years"
                }
            ],
            services: [
                {
                    id: 1,
                    name: "Neurological Assessment",
                    description: "Comprehensive evaluation of neurological function",
                    duration: "60 mins",
                    price: "$250"
                }
            ],
            facilities: [
                "Advanced Neuroimaging Center",
                "Neurophysiology Laboratory",
                "Stroke Unit",
                "Neurorehabilitation Center"
            ],
            contact: {
                location: "4th Floor, West Wing",
                phone: "+1234567891",
                email: "neurology@hospital.com",
                hours: "Monday - Friday: 9:00 AM - 5:00 PM"
            }
        },
        pediatrics: {
            id: 3,
            name: "Pediatrics",
            icon: <Baby className="h-12 w-12" />,
            description: "Specialized healthcare for infants, children, and adolescents. Our pediatric team provides comprehensive care in a child-friendly environment.",
            image: "/images/departments/pediatrics.jpg",
            doctors: [
                {
                    id: 4,
                    name: "Dr. Emily Brown",
                    image: "/images/doctors/default.jpg",
                    specialization: "Pediatrician",
                    experience: "10 years"
                }
            ],
            services: [
                {
                    id: 1,
                    name: "Well-Child Visits",
                    description: "Regular check-ups for children's growth and development",
                    duration: "45 mins",
                    price: "$150"
                }
            ],
            facilities: [
                "Child-Friendly Waiting Areas",
                "Pediatric Emergency Unit",
                "Neonatal Intensive Care Unit",
                "Play Therapy Room"
            ],
            contact: {
                location: "2nd Floor, Children's Wing",
                phone: "+1234567892",
                email: "pediatrics@hospital.com",
                hours: "Monday - Saturday: 8:00 AM - 8:00 PM"
            }
        }
    };

    const department = departmentData[id];

    if (!department) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Department not found</h1>
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
                    src={department.image}
                    alt={department.name}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-oouth-500/80 to-oouth-500/40">
                    <div className="h-full flex items-center px-8">
                        <div className="text-white">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="text-white">
                                    {department.icon}
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
                            {department.doctors.map(doctor => (
                                <Link
                                    key={doctor.id}
                                    to={`/doctors/${doctor.id}`}
                                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-oouth-50 transition-colors"
                                >
                                    <img
                                        src={doctor.image}
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
                            {department.services.map(service => (
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
                                        <span className="text-oouth-500 font-medium">{service.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Facilities Section */}
                    <section className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {department.facilities.map((facility, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-oouth-500" />
                                    <span className="text-gray-700">{facility}</span>
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
                                <span>{department.contact.location}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-oouth-500" />
                                <span>{department.contact.phone}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-oouth-500" />
                                <span>{department.contact.email}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-oouth-500" />
                                <span>{department.contact.hours}</span>
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