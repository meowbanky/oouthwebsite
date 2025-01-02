import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Search, Filter, Loader2, ChevronDown, ArrowUpDown } from 'lucide-react';


const DoctorsList = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 9;

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);

                // Get dept from URL parameters
                const params = new URLSearchParams(window.location.search);
                const deptFromUrl = params.get('dept');

                // If dept exists in URL, update the selectedDepartment state
                if (deptFromUrl) {
                    setSelectedDepartment(deptFromUrl);
                }

                // Make API call with department parameter if it exists
                const url = deptFromUrl
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/doctors?dept=${deptFromUrl}`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/doctors`;

                console.log('Fetching from URL:', url);

                const response = await axios.get(url);
                console.log('Response:', response.data);
                setDoctors(response.data);
                setError(null);
            } catch (err) {
                console.error('Detailed error:', err);
                setError(`Failed to fetch doctors: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, [window.location.search]);
    // Sort doctors
    const sortedDoctors = [...doctors].sort((a, b) => {
        let compareA, compareB;

        switch(sortBy) {
            case 'name':
                compareA = a.name;
                compareB = b.name;
                break;
            case 'department':
                compareA = a.Department?.name || '';
                compareB = b.Department?.name || '';
                break;
            case 'experience':
                compareA = parseInt(a.experience);
                compareB = parseInt(b.experience);
                break;
            default:
                compareA = a.name;
                compareB = b.name;
        }

        if (sortDirection === 'asc') {
            return compareA > compareB ? 1 : -1;
        } else {
            return compareA < compareB ? 1 : -1;
        }
    });

    // Filter doctors
    const filteredDoctors = sortedDoctors.filter(doctor => {
        const matchesSearch = (
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // Remove the department filtering since it's handled by the backend
        // const matchesDepartment = selectedDepartment === 'all' ||
        //     doctor.Department?.name === selectedDepartment;

        // return matchesSearch && matchesDepartment;
        return matchesSearch; // Only filter by search term
    });

    // Pagination
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortDirection('asc');
        }
    };

    const handleDepartmentChange = (e) => {
        const value = e.target.value;
        setSelectedDepartment(value);
        if (value === 'all') {
            navigate('/doctors');
        } else {
            navigate(`/doctors?dept=${value.toLowerCase()}`);
        }
    };

    const SortButton = ({ field, children }) => (
        <button
            onClick={() => handleSort(field)}
            className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 
                ${sortBy === field ? 'text-oouth-500' : 'text-gray-600'}`}
        >
            <span>{children}</span>
            <ArrowUpDown className="h-4 w-4" />
        </button>
    );

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
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Our Doctors</h1>
                <p className="mt-2 text-gray-600">
                    Meet our team of experienced medical professionals
                </p>
            </div>

            {/* Filters and Sorting */}
            <div className="mb-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search doctors by name or specialization"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-oouth-500 focus:border-oouth-500"
                        />
                    </div>

                    {/* Department Filter */}
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"/>
                        <select
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-oouth-500 focus:border-oouth-500"
                        >
                            <option value="all">All Departments</option>
                            {Array.from(new Set(doctors.map(doc => doc.Department?.name)))
                                .filter(Boolean)
                                .sort()
                                .map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                {/* Sort Options */}
                <div className="flex space-x-4 border-b pb-2">
                    <span className="text-gray-600">Sort by:</span>
                    <SortButton field="name">Name</SortButton>
                    <SortButton field="department">Department</SortButton>
                    <SortButton field="experience">Experience</SortButton>
                </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentDoctors.map(doctor => (
                    <Link
                        key={doctor.id}
                        to={`/doctors/${doctor.id}`}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="p-6">
                            <img
                                src={doctor.imageUrl || '/images/doctors/default.webp'}
                                alt={doctor.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                                <p className="text-oouth-500 mt-1">{doctor.specialization}</p>
                                <p className="text-gray-600 mt-1">{doctor.Department?.name}</p>
                                <p className="text-sm text-gray-500 mt-2">{doctor.experience} experience</p>
                            </div>
                            <button className="w-full mt-4 bg-oouth-500 text-white py-2 rounded-lg hover:bg-oouth-600 transition-colors">
                                View Profile
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
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

            {filteredDoctors.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-gray-500">No doctors found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default DoctorsList;