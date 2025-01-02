import React, { useState } from 'react';
import {
    Heart,
    Brain,
    Stethoscope,
    Eye,
    Activity,
    UserCog
} from 'lucide-react';
import { useNavigate } from "react-router-dom"; // Import here

const DepartmentsSection = () => {
    const navigate = useNavigate(); // Add this line to initialize navigate
    const [activeDepartment, setActiveDepartment] = useState(0);

    const departments = [
        {
            icon: <Heart className="w-8 h-8" />,
            name: 'Cardiology',
            description: 'Cardiology is a branch of medicine that deals with the disorders of the heart and circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.',
            url:'/departments/cardiology'
        },
        {
            icon: <Activity className="w-8 h-8" />,
            name: 'Nephrology',
            description: 'Nephrology is a specialty of medicine that concerns itself with the kidneys: the study of normal kidney function and kidney disease, the preservation of kidney health, and the treatment of kidney disease, from diet and medication to renal replacement therapy.',
            url:'/departments/nephrology'
        },
        {
            icon: <Brain className="w-8 h-8" />,
            name: 'Psychiatry',
            description: 'Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of mental disorders. These include various maladaptations related to mood, behaviour, cognition, and perceptions.',
            url:'/departments/psychiatry'
        },
        {
            icon: <Stethoscope className="w-8 h-8" />,
            name: 'Respiratory',
            description: 'The human respiratory system is a series of organs responsible for taking in oxygen and expelling carbon dioxide. The primary organs of the respiratory system are the lungs, which carry out this exchange of gases as we breathe.',
            url:'/departments/respiratory'
        },
        {
            icon: <Eye className="w-8 h-8" />,
            name: 'Ophthalmology',
            description: 'Ophthalmology is a branch of medicine dealing with the diagnosis, treatment and prevention of diseases of the eye and visual system. The eye, its surrounding structures and the visual system can be affected by a number of clinical conditions.',
            url:'/departments/ophthalmology'
        },
        {
            icon: <UserCog className="w-8 h-8" />,
            name: 'Otorhinolaryngology',
            description: 'Otorhinolaryngology is a surgical subspecialty within medicine that deals with conditions of the ear, nose, and throat and related structures of the head and neck.',
            url:'/departments/otorhinolaryngology'
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="departments">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
                    <p className="text-gray-600">Specialized departments providing comprehensive care</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Department List */}
                    <div className="space-y-2">
                        {departments.map((dept, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveDepartment(index)}
                                className={`w-full text-left p-4 rounded-lg transition-colors ${
                                    activeDepartment === index
                                        ? 'bg-oouth-500 text-white'
                                        : 'bg-white hover:bg-oouth-50'
                                }`}
                            >
                                <div className="flex items-center">
                  <span className={`${activeDepartment === index ? 'text-white' : 'text-oouth-500'}`}>
                    {dept.icon}
                  </span>
                                    <span className="ml-3 font-medium">{dept.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Department Details */}
                    <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <span className="text-oouth-500">{departments[activeDepartment].icon}</span>
                            <h3 className="text-2xl font-bold mt-4 mb-4">{departments[activeDepartment].name}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {departments[activeDepartment].description}
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <button className="px-6 py-2 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600 transition-colors">
                                Make Appointment
                            </button>
                            <button
                                onClick={() => {
                                    if (departments[activeDepartment]?.url) {
                                        navigate(departments[activeDepartment].url);
                                    } else {
                                        console.error('No URL defined for this department');
                                    }
                                }}
                                className="px-6 py-2 border border-oouth-500 text-oouth-500 rounded-lg hover:bg-oouth-50 transition-colors"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;
