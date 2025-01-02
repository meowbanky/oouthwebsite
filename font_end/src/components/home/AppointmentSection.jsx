import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';

const AppointmentSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        message: ''
    });

    const departments = [
        'Cardiology',
        'Nephrology',
        'Psychiatry',
        'Respiratory',
        'Ophthalmology',
        'Otorhinolaryngology'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="py-16 bg-gray-50" id="appointment">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
                        <p className="text-gray-600">Schedule your visit with our experienced doctors</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Email Address</label>
                                    <div className="relative">
                                        <Mail size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="email"
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="tel"
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Department</label>
                                    <select
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={formData.department}
                                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                                    >
                                        <option value="">Select Department</option>
                                        {departments.map(dept => (
                                            <option key={dept} value={dept}>{dept}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="date"
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.date}
                                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Preferred Time</label>
                                    <div className="relative">
                                        <Clock size={20} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="time"
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.time}
                                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Additional Message (Optional)</label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-oouth-500 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;