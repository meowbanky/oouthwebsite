import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
    Search,
    Clock,
    DollarSign,
    Building2,
    Loader2,
    ArrowUpDown
} from 'lucide-react';

const ServicesList = () => {
    const [searchParams] = useSearchParams();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 9;

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                setError(null);
                const deptFromUrl = searchParams.get('dept');

                const url = deptFromUrl
                    ? `${import.meta.env.VITE_API_BASE_URL}/api/services?dept=${deptFromUrl}`
                    : `${import.meta.env.VITE_API_BASE_URL}/api/services`;

                const response = await axios.get(url);
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
                setError('Failed to fetch services: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, [searchParams]);

    // Sort services
    const sortedServices = [...services].sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return sortDirection === 'asc'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            case 'price':
                return sortDirection === 'asc'
                    ? Number(a.price) - Number(b.price)
                    : Number(b.price) - Number(a.price);
            case 'duration':
                return sortDirection === 'asc'
                    ? a.duration.localeCompare(b.duration)
                    : b.duration.localeCompare(a.duration);
            default:
                return 0;
        }
    });

    // Filter services
    const filteredServices = sortedServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-oouth-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive healthcare services provided by our expert medical professionals
                </p>
            </div>

            {/* Filters and Sorting */}
            <div className="mb-8 space-y-4">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search services by name or description"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-oouth-500 focus:border-oouth-500"
                    />
                </div>

                {/* Sort Options */}
                <div className="flex space-x-4 border-b pb-2">
                    <span className="text-gray-600">Sort by:</span>
                    {['name', 'price', 'duration'].map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                if (sortBy === option) {
                                    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                                } else {
                                    setSortBy(option);
                                    setSortDirection('asc');
                                }
                            }}
                            className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100 
                                ${sortBy === option ? 'text-oouth-500' : 'text-gray-600'}`}
                        >
                            <span className="capitalize">{option}</span>
                            <ArrowUpDown className="h-4 w-4" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentServices.map(service => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {service.description}
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center text-gray-600">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <DollarSign className="h-4 w-4 mr-2" />
                                <span>₦{Number(service.price).toLocaleString()}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Building2 className="h-4 w-4 mr-2" />
                                <span>{service.Department?.name}</span>
                            </div>
                        </div>
                        <Link
                            to={`/appointments/book?service=${service.id}`}
                            className="mt-4 block w-full text-center bg-oouth-500 text-white py-2 rounded-lg hover:bg-oouth-600 transition-colors"
                        >
                            Book Service
                        </Link>
                    </div>
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

            {filteredServices.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-gray-500">No services found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default ServicesList;