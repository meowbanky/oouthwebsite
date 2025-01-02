const { Department, Doctor, Service, Expertise, Facility, DepartmentContact } = require('../models');

const seedDepartments = async () => {
    try {
        // Clear existing data
        await Department.destroy({ where: {} });
        await Doctor.destroy({ where: {} });
        await Service.destroy({ where: {} });
        await Expertise.destroy({ where: {} });
        await Facility.destroy({ where: {} });
        await DepartmentContact.destroy({ where: {} });

        // Cardiology Department
        const cardiology = await Department.create({
            name: "Cardiology",
            description: "Comprehensive heart and cardiovascular care with state-of-the-art diagnostics and treatment. Our team of experienced cardiologists uses cutting-edge technology to provide the best possible care for our patients.",
            imageUrl: "/images/departments/cardiology.jpg"
        });

        await Expertise.bulkCreate([
            { name: "Non-invasive Cardiology", departmentId: cardiology.id },
            { name: "Interventional Cardiology", departmentId: cardiology.id },
            { name: "Heart Surgery", departmentId: cardiology.id },
            { name: "Cardiac Rehabilitation", departmentId: cardiology.id }
        ]);

        await Doctor.bulkCreate([
            {
                name: "Dr. Sarah Johnson",
                imageUrl: "/images/doctors/default.webp",
                specialization: "Senior Cardiologist",
                experience: "15 years",
                departmentId: cardiology.id
            },
            {
                name: "Dr. Michael Chen",
                imageUrl: "/images/doctors/default.webp",
                specialization: "Interventional Cardiologist",
                experience: "12 years",
                departmentId: cardiology.id
            }
        ]);

        await Service.bulkCreate([
            {
                name: "Echocardiography",
                description: "Non-invasive ultrasound test to evaluate heart function",
                duration: "30 mins",
                price: 200.00,
                departmentId: cardiology.id
            },
            {
                name: "Cardiac Catheterization",
                description: "Minimally invasive procedure to diagnose and treat heart conditions",
                duration: "60 mins",
                price: 1500.00,
                departmentId: cardiology.id
            },
            {
                name: "Stress Test",
                description: "Evaluate heart function during physical activity",
                duration: "45 mins",
                price: 300.00,
                departmentId: cardiology.id
            }
        ]);

        await Facility.bulkCreate([
            { name: "Advanced Cardiac Imaging Center", departmentId: cardiology.id },
            { name: "24/7 Emergency Cardiac Care", departmentId: cardiology.id },
            { name: "Cardiac Rehabilitation Unit", departmentId: cardiology.id },
            { name: "Specialized Cardiac ICU", departmentId: cardiology.id },
            { name: "Non-invasive Cardiology Lab", departmentId: cardiology.id }
        ]);

        await DepartmentContact.create({
            location: "3rd Floor, East Wing",
            phone: "+1234567890",
            email: "cardiology@hospital.com",
            hours: "Monday - Friday: 8:00 AM - 6:00 PM",
            departmentId: cardiology.id
        });

        // Neurology Department
        const neurology = await Department.create({
            name: "Neurology",
            description: "Expert care for neurological disorders with advanced treatment options. Our neurology department provides comprehensive care for all neurological conditions.",
            imageUrl: "/images/departments/neurology.jpg"
        });

        await Expertise.bulkCreate([
            { name: "Stroke Treatment", departmentId: neurology.id },
            { name: "Epilepsy Management", departmentId: neurology.id },
            { name: "Movement Disorders", departmentId: neurology.id },
            { name: "Neuromuscular Conditions", departmentId: neurology.id }
        ]);

        await Doctor.bulkCreate([
            {
                name: "Dr. John Smith",
                imageUrl: "/images/doctors/default.webp",
                specialization: "Neurologist",
                experience: "20 years",
                departmentId: neurology.id
            },
            {
                name: "Dr. Lisa Wong",
                imageUrl: "/images/doctors/default.webp",
                specialization: "Neurophysiologist",
                experience: "15 years",
                departmentId: neurology.id
            }
        ]);

        await Service.bulkCreate([
            {
                name: "Neurological Assessment",
                description: "Comprehensive evaluation of neurological function",
                duration: "60 mins",
                price: 250.00,
                departmentId: neurology.id
            },
            {
                name: "EEG Testing",
                description: "Brain wave monitoring and analysis",
                duration: "90 mins",
                price: 400.00,
                departmentId: neurology.id
            }
        ]);

        await Facility.bulkCreate([
            { name: "Advanced Neuroimaging Center", departmentId: neurology.id },
            { name: "Neurophysiology Laboratory", departmentId: neurology.id },
            { name: "Stroke Unit", departmentId: neurology.id },
            { name: "Neurorehabilitation Center", departmentId: neurology.id }
        ]);

        await DepartmentContact.create({
            location: "4th Floor, West Wing",
            phone: "+1234567891",
            email: "neurology@hospital.com",
            hours: "Monday - Friday: 9:00 AM - 5:00 PM",
            departmentId: neurology.id
        });

        // Pediatrics Department
        const pediatrics = await Department.create({
            name: "Pediatrics",
            description: "Specialized healthcare for infants, children, and adolescents. Our pediatric team provides comprehensive care in a child-friendly environment.",
            imageUrl: "/images/departments/pediatrics.jpg"
        });

        await Expertise.bulkCreate([
            { name: "Pediatric Emergency Care", departmentId: pediatrics.id },
            { name: "Neonatal Care", departmentId: pediatrics.id },
            { name: "Child Development", departmentId: pediatrics.id },
            { name: "Pediatric Surgery", departmentId: pediatrics.id }
        ]);

        await Doctor.bulkCreate([
            {
                name: "Dr. Emily Brown",
                imageUrl: "/images/doctors/default.webp",
                specialization: "Pediatrician",
                experience: "10 years",
                departmentId: pediatrics.id
            },
            {
                name: "Dr. David Wilson",
                imageUrl: "/images/doctors/default.webp",
                specialization: "Pediatric Surgeon",
                experience: "12 years",
                departmentId: pediatrics.id
            }
        ]);

        await Service.bulkCreate([
            {
                name: "Well-Child Visits",
                description: "Regular check-ups for children's growth and development",
                duration: "45 mins",
                price: 150.00,
                departmentId: pediatrics.id
            },
            {
                name: "Immunizations",
                description: "Childhood vaccination services",
                duration: "30 mins",
                price: 100.00,
                departmentId: pediatrics.id
            },
            {
                name: "Developmental Screening",
                description: "Assessment of child development milestones",
                duration: "60 mins",
                price: 200.00,
                departmentId: pediatrics.id
            }
        ]);

        await Facility.bulkCreate([
            { name: "Child-Friendly Waiting Areas", departmentId: pediatrics.id },
            { name: "Pediatric Emergency Unit", departmentId: pediatrics.id },
            { name: "Neonatal Intensive Care Unit", departmentId: pediatrics.id },
            { name: "Play Therapy Room", departmentId: pediatrics.id }
        ]);

        await DepartmentContact.create({
            location: "2nd Floor, Children's Wing",
            phone: "+1234567892",
            email: "pediatrics@hospital.com",
            hours: "Monday - Saturday: 8:00 AM - 8:00 PM",
            departmentId: pediatrics.id
        });

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
};

module.exports = seedDepartments;