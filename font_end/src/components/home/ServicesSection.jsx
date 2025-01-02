import React from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Eye, Droplet, Stethoscope, Clock, Hospital } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-4 text-oouth-500">
                <Icon size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const ServicesSection = () => {
    const services = [
        {
            icon: Ambulance,
            title: "Emergency Care",
            description: "Our Medical Officer takes care of illnesses or injuries requiring immediate medical attention. Emergency physicians care for unscheduled and undifferentiated patients of all ages."
        },
        {
            icon: Eye,
            title: "Ophthalmology",
            description: "Our Ophthalmology Department deals with the diagnosis, treatment and prevention of diseases of the eye and visual system."
        },
        {
            icon: Droplet,
            title: "Blood Bank",
            description: "Our blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion."
        },
        {
            icon: Clock,
            title: "24/7 Service",
            description: "We provide round-the-clock medical services with experienced staff available at all times for emergency situations."
        },
        {
            icon: Hospital,
            title: "Medical Out-patient",
            description: "Our outpatient departments perform procedures for which the patient is not expected to stay overnight."
        },
        {
            icon: Stethoscope,
            title: "Qualified Staff",
            description: "Our professionals are disciplined vast with adequate knowledge of medical practice."
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Our consultants are some of the best in their respective specialties, providing comprehensive healthcare to our patients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/services">
                        <button className="px-8 py-3 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600 transition-colors">
                            View All Services
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;