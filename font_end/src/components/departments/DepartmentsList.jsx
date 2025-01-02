import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
    Heart,
    Brain,
    Baby,
    Stethoscope,
    Users,
    Activity,
    ClipboardList,
    Loader2,
    Search,  // Add this
    ArrowUpDown  // Add this
} from 'lucide-react';

const DepartmentsList = () => {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const departmentsPerPage = 6;

    // Sort departments
    const sortedDepartments = [...departments].sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return sortDirection === 'asc'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            case 'doctors':
                return sortDirection === 'asc'
                    ? a.Doctors.length - b.Doctors.length
                    : b.Doctors.length - a.Doctors.length;
            case 'services':
                return sortDirection === 'asc'
                    ? a.Services.length - b.Services.length
                    : b.Services.length - a.Services.length;
            default:
                return 0;
        }
    });

// Filter departments
    const filteredDepartments = sortedDepartments.filter(dept =>
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

// Pagination
    const indexOfLastDepartment = currentPage * departmentsPerPage;
    const indexOfFirstDepartment = indexOfLastDepartment - departmentsPerPage;
    const currentDepartments = filteredDepartments.slice(indexOfFirstDepartment, indexOfLastDepartment);
    const totalPages = Math.ceil(filteredDepartments.length / departmentsPerPage);


    // Function to get the appropriate icon based on department name
    const getDepartmentIcon = (departmentName) => {
        const icons = {
            'Cardiology': <Heart className="h-8 w-8" />,
            'Neurology': <Brain className="h-8 w-8" />,
            'Pediatrics': <Baby className="h-8 w-8" />
        };
        return icons[departmentName] || <Stethoscope className="h-8 w-8" />;
    };

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                setLoading(true);
                setError(null);
                const params = new URLSearchParams(window.location.search);
                const deptFromUrl = params.get('dept');
                console.log('Department from URL:', deptFromUrl);

                const url = deptFromUrl
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/departments?dept=${deptFromUrl}`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/departments`;

                console.log('Making request to:', url);
                const response = await axios.get(url);

                if (response.data && response.data.error) {
                    console.error('Server error:', response.data.error);
                    setError(response.data.error);
                    return;
                }

                console.log('Received departments:', response.data);
                setDepartments(response.data);
                setError(null);
            } catch (error) {
                console.error('Error details:', error.response?.data || error);
                setError('Failed to fetch departments: ' + (error.response?.data?.error || error.message));
            } finally {
                setLoading(false);
            }
        };

        fetchDepartments();
    }, [window.location.search]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-oouth-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Filters and Sorting */}
            <div className="mb-8 space-y-4">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search departments by name or description"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-oouth-500 focus:border-oouth-500"
                    />
                </div>

                {/* Sort Options */}
                <div className="flex space-x-4 border-b pb-2">
                    <span className="text-gray-600">Sort by:</span>
                    <button
                        onClick={() => {
                            if (sortBy === 'name') {
                                setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                            } else {
                                setSortBy('name');
                                setSortDirection('asc');
                            }
                        }}
                        className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 
                ${sortBy === 'name' ? 'text-oouth-500' : 'text-gray-600'}`}
                    >
                        <span>Name</span>
                        <ArrowUpDown className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => {
                            if (sortBy === 'doctors') {
                                setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                            } else {
                                setSortBy('doctors');
                                setSortDirection('asc');
                            }
                        }}
                        className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 
                ${sortBy === 'doctors' ? 'text-oouth-500' : 'text-gray-600'}`}
                    >
                        <span>Number of Doctors</span>
                        <ArrowUpDown className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => {
                            if (sortBy === 'services') {
                                setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                            } else {
                                setSortBy('services');
                                setSortDirection('asc');
                            }
                        }}
                        className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 
                ${sortBy === 'services' ? 'text-oouth-500' : 'text-gray-600'}`}
                    >
                        <span>Number of Services</span>
                        <ArrowUpDown className="h-4 w-4" />
                    </button>
                </div>
            </div>
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Specialized medical departments providing comprehensive healthcare with cutting-edge technology and expert medical professionals
                </p>
            </div>


            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentDepartments.map(dept => (
                    <Link
                        key={dept.id}
                        to={`/departments/${dept.id}`}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 group"
                    >
                        {/* Icon */}
                        <div className="text-oouth-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {getDepartmentIcon(dept.name)}
                        </div>

                        {/* Department Info */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-oouth-500 transition-colors">
                            {dept.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            {dept.description}
                        </p>

                        {/* Expertise List */}
                        <div className="mb-4">
                            <ul className="space-y-2">
                                {dept.Expertises?.slice(0, 2).map((expertise) => (
                                    <li key={expertise.id} className="flex items-center text-sm text-gray-600">
                                        <Stethoscope className="h-4 w-4 mr-2 text-oouth-500" />
                                        {expertise.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between text-sm text-gray-500 pt-4 border-t">
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{dept.Doctors?.length || 0} Doctors</span>
                            </div>
                            <div className="flex items-center">
                                <Activity className="h-4 w-4 mr-1" />
                                <span>{dept.Services?.length || 0} Services</span>
                            </div>
                        </div>

                        {filteredDepartments.length === 0 && (
                            <div className="text-center py-8">
                                <p className="text-gray-500">No departments found matching your criteria.</p>
                            </div>
                        )}

                        {/* View More Button */}
                        <div className="mt-4 text-oouth-500 flex items-center text-sm font-medium group-hover:text-oouth-600">
                            <span>View Department</span>
                            <ClipboardList className="ml-2 h-4 w-4" />
                        </div>
                    </Link>
                ))}
            </div>
            {/* Pagination - moved outside the map */}
            {totalPages > 1 && (
                <div className="mt-8 flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg ${
                                currentPage === page
                                    ? 'bg-oouth-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}

            {/* No departments message - moved outside the map */}
            {filteredDepartments.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-gray-500">No departments found matching your criteria.</p>
                </div>
            )}
            {/* Contact Section */}
            <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
                <p className="text-gray-600 mb-6">
                    Contact our medical team for consultation or emergency services
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/contact"
                        className="bg-oouth-500 text-white px-6 py-2 rounded-md hover:bg-oouth-600 transition-colors"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/appointments"
                        className="border border-oouth-500 text-oouth-500 px-6 py-2 rounded-md hover:bg-oouth-50 transition-colors"
                    >
                        Book Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DepartmentsList;