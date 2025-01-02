// Adding more departments
const additionalDepartments = [
    {
        name: "Emergency Medicine",
        description: "24/7 emergency care facility equipped to handle all medical emergencies with state-of-the-art life-saving equipment.",
        imageUrl: "/images/departments/emergency.jpg"
    },
    {
        name: "Dental Care",
        description: "Comprehensive dental services including preventive care, cosmetic dentistry, and oral surgery.",
        imageUrl: "/images/departments/dental.jpg"
    },
    {
        name: "Dermatology",
        description: "Expert skin care and treatment for all dermatological conditions.",
        imageUrl: "/images/departments/dermatology.jpg"
    },
    {
        name: "Psychiatry",
        description: "Mental health services with compassionate care and modern treatment approaches.",
        imageUrl: "/images/departments/psychiatry.jpg"
    }
];

const additionalDoctors = [
    // Emergency Medicine Doctors (Keeping existing ones)
    {
        name: "Dr. Yusuf Ibrahim",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Emergency Medicine",
        experience: "13 years",
        departmentId: null
    },
    {
        name: "Dr. Aminat Bello",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Emergency Medicine",
        experience: "10 years",
        departmentId: null
    },
    {
        name: "Dr. Victor Okonkwo",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Emergency Medicine",
        experience: "15 years",
        departmentId: null
    },

    // Cardiology Doctors
    {
        name: "Dr. Babajide Adewale",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Interventional Cardiology",
        experience: "15 years",
        departmentId: null
    },
    {
        name: "Dr. Zainab Mohammed",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Clinical Cardiology",
        experience: "12 years",
        departmentId: null
    },
    {
        name: "Dr. Chukwudi Okafor",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Pediatric Cardiology",
        experience: "14 years",
        departmentId: null
    },

    // Neurology Doctors
    {
        name: "Dr. Folake Adeyemi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Clinical Neurology",
        experience: "16 years",
        departmentId: null
    },
    {
        name: "Dr. Ibrahim Sani",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Neurosurgery",
        experience: "18 years",
        departmentId: null
    },
    {
        name: "Dr. Chioma Nwachukwu",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Pediatric Neurology",
        experience: "13 years",
        departmentId: null
    },

    // Pediatrics Doctors
    {
        name: "Dr. Aisha Abdullahi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "General Pediatrics",
        experience: "11 years",
        departmentId: null
    },
    {
        name: "Dr. Oluwaseun Adeleke",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Neonatal Care",
        experience: "14 years",
        departmentId: null
    },
    {
        name: "Dr. Emmanuel Ogunleye",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Pediatric Surgery",
        experience: "16 years",
        departmentId: null
    },

    // Dental Care Doctors (Keeping existing ones)
    {
        name: "Dr. Sarah Okafor",
        imageUrl: "/images/doctors/default.webp",
        specialization: "General Dentist",
        experience: "11 years",
        departmentId: null
    },
    {
        name: "Dr. Taiwo Adebayo",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Orthodontist",
        experience: "14 years",
        departmentId: null
    },
    {
        name: "Dr. Chidi Nwosu",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Oral Surgeon",
        experience: "16 years",
        departmentId: null
    },

    // Dermatology Doctors (Keeping existing ones)
    {
        name: "Dr. Oluwaseun Adeyemi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Dermatologist",
        experience: "9 years",
        departmentId: null
    },
    {
        name: "Dr. Fatima Hassan",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Cosmetic Dermatologist",
        experience: "12 years",
        departmentId: null
    },
    {
        name: "Dr. Benjamin Okadigbo",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Pediatric Dermatologist",
        experience: "8 years",
        departmentId: null
    },

    // Psychiatry Doctors (Keeping existing ones)
    {
        name: "Dr. Grace Eze",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Adult Psychiatrist",
        experience: "15 years",
        departmentId: null
    },
    {
        name: "Dr. Musa Abdullahi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Child Psychiatrist",
        experience: "13 years",
        departmentId: null
    },
    {
        name: "Dr. Funmilayo Adeleke",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Clinical Psychologist",
        experience: "11 years",
        departmentId: null
    },

    // Additional Specialists for Each Department
    {
        name: "Dr. Olabisi Afolabi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Cardiac Electrophysiology",
        experience: "13 years",
        departmentId: null
    },
    {
        name: "Dr. Kingsley Obi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Stroke Specialist",
        experience: "15 years",
        departmentId: null
    },
    {
        name: "Dr. Hadiza Usman",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Pediatric Critical Care",
        experience: "12 years",
        departmentId: null
    }
];
// Add their expertise
const additionalExpertise = {
    "Emergency Medicine": [
        "Trauma Care",
        "Critical Care",
        "Emergency Surgery",
        "Acute Medical Conditions",
        "Pediatric Emergency",
        "Cardiac Emergency",
        "Respiratory Emergency"
    ],
    "Dental Care": [
        "General Dentistry",
        "Orthodontics",
        "Periodontics",
        "Endodontics",
        "Oral Surgery",
        "Pediatric Dentistry",
        "Cosmetic Dentistry"
    ],
    "Dermatology": [
        "Medical Dermatology",
        "Cosmetic Dermatology",
        "Skin Cancer Treatment",
        "Laser Therapy",
        "Pediatric Dermatology",
        "Hair Treatment",
        "Acne Treatment"
    ],
    "Psychiatry": [
        "Adult Psychiatry",
        "Child Psychiatry",
        "Addiction Treatment",
        "Mood Disorders",
        "Anxiety Disorders",
        "Psychotherapy",
        "Crisis Intervention"
    ]
};

// Add their facilities
const additionalFacilities = {
    "Emergency Medicine": [
        "Emergency Trauma Center",
        "Resuscitation Rooms",
        "Triage Area",
        "Emergency Operating Theater",
        "Observation Units",
        "Ambulance Bay",
        "Emergency Pharmacy"
    ],
    "Dental Care": [
        "Dental Surgery Rooms",
        "X-ray Facility",
        "Sterilization Unit",
        "Orthodontic Suite",
        "Dental Laboratory",
        "Recovery Room",
        "Consultation Rooms"
    ],
    "Dermatology": [
        "Laser Treatment Room",
        "Phototherapy Unit",
        "Cosmetic Procedure Suite",
        "Skin Testing Lab",
        "Minor Surgery Room",
        "Consultation Chambers",
        "Treatment Rooms"
    ],
    "Psychiatry": [
        "Consultation Rooms",
        "Group Therapy Rooms",
        "Inpatient Units",
        "Day Care Center",
        "Crisis Intervention Unit",
        "Child Psychiatry Unit",
        "Recreational Therapy Area"
    ]
};

// Add their services
const additionalServices = {
    "Emergency Medicine": [
        {
            name: "Emergency Consultation",
            description: "Immediate medical evaluation for emergency conditions",
            duration: "30 mins",
            price: 15000.00
        },
        {
            name: "Trauma Care",
            description: "Immediate treatment for accident and injury cases",
            duration: "Variable",
            price: 50000.00
        },
        {
            name: "Emergency Surgery",
            description: "Immediate surgical intervention for emergency cases",
            duration: "Variable",
            price: 150000.00
        }
    ],
    "Dental Care": [
        {
            name: "Dental Check-up",
            description: "Comprehensive dental examination and cleaning",
            duration: "45 mins",
            price: 15000.00
        },
        {
            name: "Root Canal Treatment",
            description: "Endodontic treatment for infected teeth",
            duration: "90 mins",
            price: 45000.00
        },
        {
            name: "Dental Implants",
            description: "Artificial tooth root placement",
            duration: "120 mins",
            price: 250000.00
        }
    ],
    "Dermatology": [
        {
            name: "Skin Consultation",
            description: "Comprehensive skin examination and evaluation",
            duration: "30 mins",
            price: 20000.00
        },
        {
            name: "Laser Treatment",
            description: "Advanced laser therapy for skin conditions",
            duration: "45 mins",
            price: 35000.00
        },
        {
            name: "Chemical Peel",
            description: "Skin resurfacing treatment",
            duration: "60 mins",
            price: 40000.00
        }
    ],
    "Psychiatry": [
        {
            name: "Psychiatric Evaluation",
            description: "Comprehensive mental health assessment",
            duration: "60 mins",
            price: 25000.00
        },
        {
            name: "Psychotherapy Session",
            description: "Individual counseling and therapy",
            duration: "45 mins",
            price: 20000.00
        },
        {
            name: "Group Therapy",
            description: "Therapeutic group counseling session",
            duration: "90 mins",
            price: 15000.00
        }
    ]
};

// Add their contact information
const additionalContacts = {
    "Emergency Medicine": {
        location: "Ground Floor, Emergency Wing",
        phone: "+234-8163701062",
        email: "emergency@oouth.com",
        hours: "24/7 Emergency Services"
    },
    "Dental Care": {
        location: "2nd Floor, West Wing",
        phone: "+234-8163701063",
        email: "dental@oouth.com",
        hours: "Monday - Friday: 8:00 AM - 6:00 PM"
    },
    "Dermatology": {
        location: "3rd Floor, South Wing",
        phone: "+234-8163701064",
        email: "dermatology@oouth.com",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM"
    },
    "Psychiatry": {
        location: "4th Floor, Quiet Wing",
        phone: "+234-8163701065",
        email: "psychiatry@oouth.com",
        hours: "Monday - Saturday: 8:00 AM - 4:00 PM"
    }
};

const additionalBlogs = [
    {
        title: "Latest Medical Technologies in OOUTH",
        excerpt: "Discover the cutting-edge medical technologies now available at OOUTH for better patient care and treatment outcomes.",
        content: `OOUTH is proud to announce the introduction of several state-of-the-art medical technologies that will revolutionize patient care in our facility. These advancements include new imaging systems, robotic surgery capabilities, and enhanced diagnostic tools.

Our recent acquisitions include:
- Advanced 3D imaging systems
- AI-powered diagnostic tools
- Minimally invasive surgical equipment
- Remote patient monitoring systems

These technologies will help our medical professionals provide more accurate diagnoses, perform complex procedures with greater precision, and improve patient recovery times.`,
        image: "/images/blog/medical-tech.jpg",
        tags: "Healthcare",
        date: new Date("2024-11-15")
    },
    {
        title: "New Cardiac Care Department Opening",
        excerpt: "We're excited to announce the opening of our new specialized department focusing on advanced cardiac care.",
        content: `OOUTH is expanding its services with a new state-of-the-art Cardiac Care Department. This addition represents our commitment to providing comprehensive cardiovascular care to our community.

The new department features:
- Advanced cardiac catheterization lab
- Non-invasive cardiac testing facilities
- Specialized cardiac intensive care unit
- Cardiac rehabilitation center

Our team of experienced cardiologists and cardiac surgeons will provide both preventive care and advanced treatment options for heart conditions.`,
        image: "/images/blog/cardiac-dept.jpg",
        tags: "Updates",
        date: new Date("2024-11-12")
    },
    {
        title: "Health Awareness Campaign 2024",
        excerpt: "Join us in our upcoming health awareness campaign focused on preventive healthcare and wellness.",
        content: `OOUTH is launching a comprehensive health awareness campaign aimed at promoting preventive healthcare and wellness in our community. The campaign will run throughout the month and include various educational programs and free health screenings.

Campaign highlights include:
- Free health screenings
- Wellness workshops
- Nutritional counseling
- Fitness demonstrations
- Mental health awareness sessions

Join us in this important initiative to promote better health awareness and preventive care in our community.`,
        image: "/images/blog/health-campaign.jpg",
        tags: "Community",
        date: new Date("2024-11-10")
    },
    {
        title: "OOUTH Receives Excellence in Healthcare Award",
        excerpt: "Our hospital has been recognized for outstanding patient care and medical excellence.",
        content: `We are proud to announce that OOUTH has received the prestigious Excellence in Healthcare Award for our commitment to outstanding patient care and medical innovation. This recognition reflects our dedication to providing the highest quality healthcare services to our community.

The award recognizes:
- Patient satisfaction ratings
- Medical outcomes
- Innovation in healthcare delivery
- Staff development programs
- Community engagement initiatives

This achievement is a testament to the hard work and dedication of our entire medical staff and support team.`,
        image: "/images/blog/award.jpg",
        tags: "Achievement",
        date: new Date("2024-11-08")
    }
];

module.exports = {
    additionalDepartments,
    additionalDoctors,
    additionalContacts,
    additionalExpertise,
    additionalFacilities,
    additionalServices,
    additionalBlogs
};