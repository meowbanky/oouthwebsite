import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
    Calendar,
    User,
    FileText,
    Clock,
    Users,
    Building2
} from 'lucide-react';

const Dashboard = () => {
    const { user, isAdmin } = useAuth();

    const patientCards = [
        {
            title: 'My Appointments',
            icon: <Calendar className="h-8 w-8 text-blue-500" />,
            link: '/appointments',
            description: 'View and manage your appointments'
        },
        {
            title: 'Medical Records',
            icon: <FileText className="h-8 w-8 text-blue-500" />,
            link: '/medical-records',
            description: 'Access your medical history'
        },
        {
            title: 'Book Appointment',
            icon: <Clock className="h-8 w-8 text-blue-500" />,
            link: '/book-appointment',
            description: 'Schedule a new appointment'
        }
    ];

    const adminCards = [
        {
            title: 'Manage Doctors',
            icon: <Users className="h-8 w-8 text-blue-500" />,
            link: '/admin/doctors',
            description: 'Add and manage doctors'
        },
        {
            title: 'Departments',
            icon: <Building2 className="h-8 w-8 text-blue-500" />,
            link: '/admin/departments',
            description: 'Manage hospital departments'
        },
        {
            title: 'All Appointments',
            icon: <Calendar className="h-8 w-8 text-blue-500" />,
            link: '/admin/appointments',
            description: 'View all appointments'
        }
    ];

    const cards = isAdmin ? adminCards : patientCards;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, {user?.firstName}!
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                    Manage your healthcare journey from your personalized dashboard
                </p>
            </div>

            {/* Quick Stats */}
            <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <Calendar className="h-12 w-12 text-blue-500" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">Next Appointment</h3>
                                <p className="text-gray-600">No upcoming appointments</p>
                            </div>
                        </div>
                    </div>
                    {/* Add more stat cards as needed */}
                </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <Link
                        key={index}
                        to={card.link}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            {card.icon}
                            <h3 className="ml-4 text-lg font-semibold text-gray-900">
                                {card.title}
                            </h3>
                        </div>
                        <p className="text-gray-600">{card.description}</p>
                    </Link>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-4 text-gray-600 text-center">
                        No recent activity to display
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;