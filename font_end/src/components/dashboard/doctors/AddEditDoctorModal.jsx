import React, { useState, useEffect, useRef } from 'react';
import { X, Upload } from 'lucide-react';

const AddEditDoctorModal = ({ isOpen, onClose, doctor, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        specialization: '',
        experience: '',
        departmentId: '',
        imageUrl: ''
    });
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (doctor) {
            setFormData({
                name: doctor.name || '',
                specialization: doctor.specialization || '',
                experience: doctor.experience || '',
                departmentId: doctor.departmentId || '',
                imageUrl: doctor.imageUrl || ''
            });
            setImagePreview(doctor.imageUrl || '/images/doctors/default.webp');
        } else {
            setImagePreview('/images/doctors/default.webp');
        }
        fetchDepartments();
    }, [doctor]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const fetchDepartments = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/departments`);
            const data = await response.json();
            setDepartments(data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let finalImageUrl = formData.imageUrl;

            if (imageFile) {
                const formDataWithImage = new FormData();
                formDataWithImage.append('image', imageFile);

                const uploadResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/upload/doctor-image`, {
                    method: 'POST',
                    body: formDataWithImage,
                });

                if (!uploadResponse.ok) throw new Error('Failed to upload image');

                const { imageUrl } = await uploadResponse.json();
                finalImageUrl = imageUrl;
            }

            const url = doctor
                ? `${import.meta.env.VITE_API_BASE_URL}/api/doctors/${doctor.id}`
                : `${import.meta.env.VITE_API_BASE_URL}/api/doctors`;

            const response = await fetch(url, {
                method: doctor ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    imageUrl: finalImageUrl || '/images/doctors/default.webp'
                }),
            });

            if (!response.ok) throw new Error('Failed to save doctor');

            const savedDoctor = await response.json();
            onSave(savedDoctor);
            onClose();
        } catch (error) {
            console.error('Error saving doctor:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-full max-w-md">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{doctor ? 'Edit' : 'Add'} Doctor</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Specialization</label>
                            <input
                                type="text"
                                value={formData.specialization}
                                onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Experience</label>
                            <input
                                type="text"
                                value={formData.experience}
                                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department</label>
                            <select
                                value={formData.departmentId}
                                onChange={(e) => setFormData({...formData, departmentId: e.target.value})}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map((dept) => (
                                    <option key={dept.id} value={dept.id}>
                                        {dept.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Doctor Image</label>
                            <div className="mt-1 flex items-center space-x-4">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="h-24 w-24 object-cover rounded-full"
                                />
                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageChange}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <Upload className="h-4 w-4 mr-2"/>
                                        Upload Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-md hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditDoctorModal;