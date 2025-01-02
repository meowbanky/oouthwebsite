import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

const AppointmentBooking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        date: '',
        time: '',
    });

    const departments = [
        'Cardiology',
        'Nephrology',
        'Psychiatry',
        'Ophthalmology',
        'Otorhinolaryngology'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
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

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your phone number"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Department Select */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Department</label>
                                    <select
                                        value={formData.department}
                                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Select Department</option>
                                        {departments.map(dept => (
                                            <option key={dept} value={dept}>{dept}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Date Input */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Time Input */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Preferred Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="time"
                                            value={formData.time}
                                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>
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

export default AppointmentBooking;