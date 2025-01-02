import React, { useState } from 'react';
import {
    Users,
    Building2,
    Calendar,
    Settings,
    FileText,
    BarChart2
} from 'lucide-react';

const AdminDashboard = () => {
    const [currentPage, setCurrentPage] = useState('overview');

    const adminModules = [
        {
            title: 'Manage Doctors',
            icon: <Users className="h-8 w-8 text-blue-500" />,
            id: 'doctors',
            description: 'Add, edit, and manage doctor profiles'
        },
        {
            title: 'Departments',
            icon: <Building2 className="h-8 w-8 text-blue-500" />,
            id: 'departments',
            description: 'Manage hospital departments'
        },
        {
            title: 'Appointments',
            icon: <Calendar className="h-8 w-8 text-blue-500" />,
            id: 'appointments',
            description: 'View and manage all appointments'
        },
        {
            title: 'Reports',
            icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
            id: 'reports',
            description: 'View hospital statistics and reports'
        },
        {
            title: 'Services',
            icon: <FileText className="h-8 w-8 text-blue-500" />,
            id: 'services',
            description: 'Manage hospital services'
        },
        {
            title: 'Settings',
            icon: <Settings className="h-8 w-8 text-blue-500" />,
            id: 'settings',
            description: 'Configure system settings'
        }
    ];

    const DemoContent = ({ title }) => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                <p className="mt-1 text-sm text-gray-600">Manage and monitor {title.toLowerCase()}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Content</h3>
                    <p className="text-gray-600">Content for {title}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200">
                <div className="p-4 border-b">
                    <h1 className="text-xl font-bold">Hospital CRM</h1>
                </div>
                <nav className="p-4">
                    {adminModules.map((module) => (
                        <button
                            key={module.id}
                            onClick={() => setCurrentPage(module.id)}
                            className={`flex items-center w-full p-2 rounded-lg mb-1 text-left ${
                                currentPage === module.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {module.icon}
                            <span className="ml-2">{module.title}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white border-b border-gray-200 p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            {adminModules.find(m => m.id === currentPage)?.title || 'Overview'}
                        </h2>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/api/placeholder/32/32"
                                    alt="Admin"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="font-medium">Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {currentPage === 'overview' ? (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                            <p className="mt-1 text-sm text-gray-600">Manage and monitor hospital operations</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {adminModules.map((module, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(module.id)}
                                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left"
                                >
                                    <div className="flex items-center mb-4">
                                        {module.icon}
                                        <h3 className="ml-4 text-lg font-semibold text-gray-900">{module.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{module.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <DemoContent title={adminModules.find(m => m.id === currentPage)?.title || ''} />
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;