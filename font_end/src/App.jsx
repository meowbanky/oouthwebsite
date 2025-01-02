import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Auth Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Dashboard Components
import Dashboard from './components/dashboard/Dashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';

// Page Sections
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import DepartmentsSection from './components/home/DepartmentsSection';
import DoctorsSection from './components/home/DoctorsSection';
import AppointmentBooking from './components/home/AppointmentBooking';
import TestimonialsSection from './components/home/TestimonialsSection';
import NewsSection from './components/home/NewsSection';
import ContactSection from './components/home/ContactSection';
import SitemapPage from './pages/SitemapPage';
import AboutUs from './pages/About';

 import BlogDetail from './pages/blog/BlogDetail';

// Department Pages
import DepartmentsList from './components/departments/DepartmentsList';
import DepartmentDetail from './components/departments/DepartmentDetail';

// Doctor Pages
import DoctorsList from './components/doctors/DoctorsList';
import DoctorProfile from './components/doctors/DoctorProfile';


import ServicesList from './components/services/ServicesList';

import BlogList from './pages/blog/BlogList';

import DoctorsManagement from './components/dashboard/doctors/DoctorsManagement';


const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <DepartmentsSection />
            <DoctorsSection />
            <AppointmentBooking />
            <TestimonialsSection />
            <NewsSection />  {/* This shows just 4 recent posts */}
            <ContactSection />
        </>
    );
};



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            {/* Public Routes */}
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/sitemap" element={<SitemapPage />} />
                            <Route path="/departments" element={<DepartmentsList />} />
                            <Route path="/departments/:id" element={<DepartmentDetail />} />
                            <Route path="/doctors" element={<DoctorsList />} />
                            <Route path="/doctors/:id" element={<DoctorProfile />} />
                            <Route path="/services" element={<ServicesList />} />
                            <Route path="/news" element={<BlogList />} />
                            <Route path="/news/:id" element={<BlogDetail />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/admin/doctors" element={<DoctorsManagement />} />
                            <Route path="/admin" element={<AdminDashboard />} />

                            {/* Protected Routes */}
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Admin Routes */}
                            <Route
                                path="/admin/*"
                                element={
                                    <ProtectedRoute adminOnly>
                                        <AdminDashboard />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;