const departments = [
    {
        name: "Cardiology",
        description: "Comprehensive cardiac care with state-of-the-art diagnostic and therapeutic services.",
        imageUrl: "/images/departments/cardiology.jpg"
    },
    {
        name: "Neurology",
        description: "Specialized care for neurological disorders and brain conditions.",
        imageUrl: "/images/departments/neurology.jpg"
    },
    {
        name: "Pediatrics",
        description: "Expert healthcare for infants, children, and adolescents.",
        imageUrl: "/images/departments/pediatrics.jpg"
    },
    {
        name: "Orthopedics",
        description: "Treatment for bone, joint, and muscle conditions.",
        imageUrl: "/images/departments/orthopedics.jpg"
    },
    {
        name: "Obstetrics & Gynecology",
        description: "Comprehensive women's health care services.",
        imageUrl: "/images/departments/obgyn.jpg"
    },
    {
        name: "Ophthalmology",
        description: "Advanced eye care and treatment services.",
        imageUrl: "/images/departments/ophthalmology.jpg"
    }
];

const doctors = [
    {
        name: "Dr. Adewale Johnson",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Senior Cardiologist",
        experience: "15 years",
        departmentId: null // Will be set during seeding
    },
    {
        name: "Dr. Folake Adeleke",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Interventional Cardiologist",
        experience: "12 years",
        departmentId: null
    },
    {
        name: "Dr. Oluwaseun Ogunleye",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Neurologist",
        experience: "20 years",
        departmentId: null
    },
    {
        name: "Dr. Chidinma Okoro",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Pediatrician",
        experience: "10 years",
        departmentId: null
    },
    {
        name: "Dr. Babajide Olatunji",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Orthopedic Surgeon",
        experience: "18 years",
        departmentId: null
    },
    {
        name: "Dr. Aisha Mohammed",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Obstetrician/Gynecologist",
        experience: "14 years",
        departmentId: null
    },
    {
        name: "Dr. Emmanuel Nnamdi",
        imageUrl: "/images/doctors/default.webp",
        specialization: "Ophthalmologist",
        experience: "16 years",
        departmentId: null
    }
];

const expertise = {
    "Cardiology": [
        "Non-invasive Cardiology",
        "Interventional Cardiology",
        "Heart Surgery",
        "Cardiac Rehabilitation",
        "Heart Failure Management",
        "Electrocardiography",
        "Pediatric Cardiology"
    ],
    "Neurology": [
        "Stroke Treatment",
        "Epilepsy Management",
        "Movement Disorders",
        "Neuromuscular Disorders",
        "Headache Treatment",
        "Multiple Sclerosis",
        "Parkinson's Disease"
    ],
    "Pediatrics": [
        "Neonatal Care",
        "Child Development",
        "Pediatric Emergency",
        "Childhood Immunizations",
        "Growth Disorders",
        "Pediatric Asthma",
        "Developmental Disorders"
    ],
    "Orthopedics": [
        "Joint Replacement",
        "Sports Medicine",
        "Spine Surgery",
        "Trauma Care",
        "Arthroscopy",
        "Hand Surgery",
        "Pediatric Orthopedics"
    ],
    "Obstetrics & Gynecology": [
        "Prenatal Care",
        "High-Risk Pregnancy",
        "Gynecologic Surgery",
        "Fertility Treatment",
        "Women's Health",
        "Family Planning",
        "Menopause Management"
    ],
    "Ophthalmology": [
        "Cataract Surgery",
        "Glaucoma Treatment",
        "Retinal Disorders",
        "Pediatric Eye Care",
        "Corneal Treatment",
        "Vision Correction",
        "Eye Emergency Care"
    ]
};

const facilities = {
    "Cardiology": [
        "Cardiac Catheterization Lab",
        "ECG/EKG Testing Room",
        "Cardiac ICU",
        "Heart Surgery Theater",
        "Cardiac Rehabilitation Center",
        "Stress Test Laboratory",
        "Holter Monitoring Room"
    ],
    "Neurology": [
        "Neuroimaging Center",
        "EEG Laboratory",
        "Stroke Unit",
        "Neurosurgery Theater",
        "Neurophysiology Lab",
        "Sleep Study Center",
        "Neurorehabilitation Unit"
    ],
    "Pediatrics": [
        "Pediatric Emergency Unit",
        "Neonatal ICU",
        "Child Development Center",
        "Play Therapy Room",
        "Vaccination Center",
        "Child-Friendly Waiting Areas",
        "Pediatric Treatment Rooms"
    ],
    "Orthopedics": [
        "Orthopedic Surgery Theater",
        "Physical Therapy Center",
        "Sports Medicine Facility",
        "Cast Room",
        "Rehabilitation Gym",
        "X-ray Suite",
        "Prosthetics Workshop"
    ],
    "Obstetrics & Gynecology": [
        "Labor & Delivery Rooms",
        "Maternity Ward",
        "Ultrasound Center",
        "Fetal Monitoring Unit",
        "Gynecologic Surgery Theater",
        "Birthing Suites",
        "Antenatal Care Clinic"
    ],
    "Ophthalmology": [
        "Eye Examination Rooms",
        "Laser Treatment Center",
        "Optical Shop",
        "Visual Field Testing Room",
        "Eye Surgery Theater",
        "Contact Lens Center",
        "Emergency Eye Care Unit"
    ]
};

const services = {
    "Cardiology": [
        {
            name: "Comprehensive Cardiac Evaluation",
            description: "Complete heart health assessment including ECG and stress test",
            duration: "60 mins",
            price: 25000.00
        },
        {
            name: "Echocardiogram",
            description: "Ultrasound imaging of the heart",
            duration: "45 mins",
            price: 35000.00
        },
        {
            name: "Cardiac Catheterization",
            description: "Minimally invasive procedure to diagnose heart conditions",
            duration: "120 mins",
            price: 150000.00
        }
    ],
    "Neurology": [
        {
            name: "Neurological Consultation",
            description: "Comprehensive neurological evaluation",
            duration: "60 mins",
            price: 20000.00
        },
        {
            name: "EEG Test",
            description: "Brain wave monitoring and analysis",
            duration: "90 mins",
            price: 40000.00
        },
        {
            name: "Stroke Assessment",
            description: "Comprehensive stroke risk evaluation",
            duration: "45 mins",
            price: 25000.00
        }
    ],
    "Pediatrics": [
        {
            name: "Well-Child Visit",
            description: "Regular check-up for children's growth and development",
            duration: "30 mins",
            price: 15000.00
        },
        {
            name: "Vaccination",
            description: "Routine childhood immunizations",
            duration: "20 mins",
            price: 10000.00
        },
        {
            name: "Pediatric Emergency Care",
            description: "Urgent care for children",
            duration: "45 mins",
            price: 30000.00
        }
    ],
    "Orthopedics": [
        {
            name: "Orthopedic Consultation",
            description: "Evaluation of bone and joint conditions",
            duration: "45 mins",
            price: 20000.00
        },
        {
            name: "Joint Injection",
            description: "Therapeutic joint injections",
            duration: "30 mins",
            price: 25000.00
        },
        {
            name: "Fracture Care",
            description: "Treatment for bone fractures",
            duration: "60 mins",
            price: 35000.00
        }
    ],
    "Obstetrics & Gynecology": [
        {
            name: "Prenatal Visit",
            description: "Regular pregnancy check-up",
            duration: "30 mins",
            price: 15000.00
        },
        {
            name: "Ultrasound Scan",
            description: "Pregnancy ultrasound imaging",
            duration: "45 mins",
            price: 25000.00
        },
        {
            name: "Gynecological Exam",
            description: "Complete women's health check-up",
            duration: "45 mins",
            price: 20000.00
        }
    ],
    "Ophthalmology": [
        {
            name: "Comprehensive Eye Exam",
            description: "Complete vision and eye health assessment",
            duration: "45 mins",
            price: 15000.00
        },
        {
            name: "Glaucoma Screening",
            description: "Eye pressure and optic nerve examination",
            duration: "30 mins",
            price: 20000.00
        },
        {
            name: "Contact Lens Fitting",
            description: "Custom contact lens measurement and fitting",
            duration: "60 mins",
            price: 25000.00
        }
    ]
};

const departmentContacts = {
    "Cardiology": {
        location: "3rd Floor, East Wing",
        phone: "+234-8163701056",
        email: "cardiology@oouth.com",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    "Neurology": {
        location: "4th Floor, West Wing",
        phone: "+234-8163701057",
        email: "neurology@oouth.com",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    "Pediatrics": {
        location: "2nd Floor, Children's Wing",
        phone: "+234-8163701058",
        email: "pediatrics@oouth.com",
        hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    },
    "Orthopedics": {
        location: "1st Floor, South Wing",
        phone: "+234-8163701059",
        email: "orthopedics@oouth.com",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    "Obstetrics & Gynecology": {
        location: "2nd Floor, North Wing",
        phone: "+234-8163701060",
        email: "obgyn@oouth.com",
        hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    },
    "Ophthalmology": {
        location: "1st Floor, East Wing",
        phone: "+234-8163701061",
        email: "ophthalmology@oouth.com",
        hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
};

module.exports = {
    departments,
    doctors,
    expertise,
    facilities,
    services,
    departmentContacts
};