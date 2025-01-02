import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
    Calendar,
    Clock,
    Award,
    Building2,
    GraduationCap,
    Languages,
    Star,
    Heart,
    Users,
    Loader2
} from 'lucide-react';

const DoctorProfile = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/doctors/${id}`);
                setDoctor(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch doctor details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchDoctor();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-oouth-500" />
            </div>
        );
    }

    if (error || !doctor) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <p className="text-red-500">{error || 'Doctor not found'}</p>
                <Link to="/doctors" className="text-oouth-500 hover:text-oouth-600 mt-4 inline-block">
                    Back to Doctors
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-oouth-500 to-oouth-600 rounded-lg text-white p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <img
                        src={doctor.imageUrl || '/images/doctors/default.webp'}
                        alt={doctor.name}
                        className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">{doctor.name}</h1>
                        <p className="text-xl mt-2">{doctor.specialization}</p>
                        <p className="mt-2">{doctor.Department?.name} Department</p>
                        <div className="flex items-center mt-4">
                            <Award className="h-5 w-5 mr-2" />
                            <span>{doctor.experience} of experience</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* About Section */}
                    <section className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                        <p className="text-gray-600">{doctor.bio || 'No bio available.'}</p>
                    </section>

                    {/* Specializations */}
                    <section className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Specializations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {doctor.specialties?.map((specialty, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <span>{specialty}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education & Training */}
                    <section className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Education & Training</h2>
                        <div className="space-y-4">
                            {doctor.education?.map((edu, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <GraduationCap className="h-6 w-6 text-oouth-500 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-600">{edu.institution}</p>
                                        <p className="text-sm text-gray-500">{edu.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Appointment Booking */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Book Appointment</h3>
                        <Link
                            to={`/appointments/new?doctorId=${doctor.id}`}
                            className="block w-full bg-oouth-500 text-white text-center py-3 rounded-lg hover:bg-oouth-600 transition-colors"
                        >
                            <Calendar className="inline-block h-5 w-5 mr-2" />
                            Schedule Visit
                        </Link>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Building2 className="h-5 w-5 text-oouth-500" />
                                <span>{doctor.Department?.name} Department</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-oouth-500" />
                                <span>Consultation Hours: {doctor.consultationHours || 'Not specified'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Users className="h-5 w-5 text-oouth-500" />
                                    <span>Patients Treated</span>
                                </div>
                                <span className="font-semibold">{doctor.patientsTreated || '1000+'}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Award className="h-5 w-5 text-oouth-500" />
                                    <span>Experience</span>
                                </div>
                                <span className="font-semibold">{doctor.experience}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Star className="h-5 w-5 text-oouth-500" />
                                    <span>Rating</span>
                                </div>
                                <span className="font-semibold">{doctor.rating || '4.5'}/5</span>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Languages Spoken</h3>
                        <div className="flex flex-wrap gap-2">
                            {doctor.languages?.map((language, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-oouth-50 text-oouth-600 rounded-full text-sm"
                                >
                                    {language}
                                </span>
                            )) || (
                                <>
                                    <span className="px-3 py-1 bg-oouth-50 text-oouth-600 rounded-full text-sm">English</span>
                                    <span className="px-3 py-1 bg-oouth-50 text-oouth-600 rounded-full text-sm">Yoruba</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Awards & Recognition */}
                    {doctor.awards && doctor.awards.length > 0 && (
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                            <div className="space-y-3">
                                {doctor.awards.map((award, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Award className="h-5 w-5 text-yellow-500 mt-1" />
                                        <div>
                                            <h4 className="font-medium">{award.title}</h4>
                                            <p className="text-sm text-gray-600">{award.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Reviews Section */}
            {doctor.reviews && doctor.reviews.length > 0 && (
                <section className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {doctor.reviews.map((review, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex items-center space-x-2 mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < review.rating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">{review.comment}</p>
                                <div className="text-sm text-gray-500">
                                    <span className="font-medium">{review.patientName}</span>
                                    <span className="mx-2">•</span>
                                    <span>{review.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default DoctorProfile;