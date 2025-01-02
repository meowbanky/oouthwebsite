import React, { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import AddEditDoctorModal from './AddEditDoctorModal';

const DoctorsManagement = () => {
    const [doctors, setDoctors] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleSave = async (savedDoctor) => {
        await fetchDoctors();
        setIsAddModalOpen(false);
        setSelectedDoctor(null);
    };

    const fetchDoctors = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/doctors`);
            const data = await response.json();
            setDoctors(data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this doctor?')) {
            try {
                await fetch(`${import.meta.env.VITE_API_BASE_URL}/doctors/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setDoctors(doctors.filter(doctor => doctor.id !== id));
            } catch (error) {
                console.error('Error deleting doctor:', error);
            }
        }
    };

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search doctors..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600"
                >
                    <Plus className="h-5 w-5 mr-2" />
                    Add Doctor
                </button>
            </div>

            <div className="bg-white rounded-lg shadow">
                <table className="min-w-full">
                    <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {filteredDoctors.map((doctor) => (
                        <tr key={doctor.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <img
                                        src={doctor.imageUrl || "/images/doctors/default.webp"}
                                        alt={doctor.name}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.specialization}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.department?.name || 'N/A'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.experience}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => setSelectedDoctor(doctor)}
                                    className="text-oouth-600 hover:text-blue-900 mr-4"
                                >
                                    <Pencil className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(doctor.id)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <AddEditDoctorModal
                isOpen={isAddModalOpen || !!selectedDoctor}
                onClose={() => {
                    setIsAddModalOpen(false);
                    setSelectedDoctor(null);
                }}
                doctor={selectedDoctor}
                onSave={handleSave}
            />
        </div>

    );
};

export default DoctorsManagement;