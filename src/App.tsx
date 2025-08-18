import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Heart, 
  Award,
  CheckCircle,
  Star,
  Users,
  MessageCircle // Import MessageCircle for the chat button
} from 'lucide-react';
import Modal from './components/Modal'; // Import the new Modal component
import ServiceModal from './components/ServiceModal'; // Import the new ServiceModal component
import BlogPage from './components/BlogPage';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Dr. Ajila's profile modal
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false); // State for services modal
  const [isServiceDetailModalOpen, setIsServiceDetailModalOpen] = useState(false); // State for individual service modal
  const [selectedService, setSelectedService] = useState<{
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  } | null>(null); // State for selected service
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg",
    "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg",
    "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg",
    "https://images.pexels.com/photos/305564/pexels-photo-305564.jpeg",
    "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg",
		"https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg",
    "https://images.pexels.com/photos/6529216/pexels-photo-6529216.jpeg",
		"https://images.pexels.com/photos/4269361/pexels-photo-4269361.jpeg"
  ];

  const kenburnsClasses = ['animate-kenburns-1', 'animate-kenburns-2', 'animate-kenburns-3', 'animate-kenburns-4', 'animate-kenburns-5'];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeqq_brok8DVSqBzZf7DYtK2L6Q_wNwjH4BlDQy69KOUPdirQ/viewform?usp=dialog";
  const whatsappNumber = "+919482474286"; // Dr. Ajila's WhatsApp number
  const googleMapsUrl = "https://maps.app.goo.gl/Pz8wEuXDUounegzT9"; //Google Maps location

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [heroImages.length]);

  const handleBookAppointmentClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChatWithUsClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const services = [
    {
      icon: Shield,
      title: "Diagnosis & Treatment Planning",
      description: "Expert dental evaluation and customized treatment plans to ensure long-lasting oral health and a confident smile."
    },
    {
      icon: Shield,
      title: "Dental X-rays",
      description: "Advanced digital dental X-rays for accurate diagnosis, early detection, and safe, precise treatment planning."
    },
    {
      icon: Heart,
      title: "Emergency Dental Care",
      description: "Immediate care for severe tooth pain, broken teeth, or sudden oral injuries—available when you need it most."
    },
    {
      icon: CheckCircle,
      title: "Preventive Dental Care",
      description: "Regular dental check-ups, oral hygiene guidance, and preventive treatments to protect your teeth and gums for life."
    },
    {
      icon: CheckCircle,
      title: "Professional Teeth Cleaning",
      description: "Gentle scaling and polishing to remove tartar, stains, and plaque, leaving your smile fresh and healthy."
    },
    {
      icon: Award,
      title: "Advanced Gum Surgeries",
      description: "Specialized periodontal treatments to treat gum disease, restore gum health, and protect your natural teeth."
    },
    {
      icon: Heart,
      title: "Root Canal Treatment (RCT)",
      description: "Pain-free root canal therapy to save infected teeth, restore function, and prevent further damage."
    },
    {
      icon: Shield,
      title: "Gentle Tooth Extraction",
      description: "Safe, comfortable, and painless tooth removal using modern anesthesia for quick recovery and minimal discomfort."
    },
    {
      icon: Award,
      title: "Crowns & Bridges",
      description: "High-quality, natural-looking dental crowns and bridges to restore damaged or missing teeth beautifully."
    },
    {
      icon: Star,
      title: "Dental Implants",
      description: "Permanent tooth replacement with natural look and function, improving chewing, speech, and confidence."
    },
    {
      icon: Users,
      title: "Custom Dentures",
      description: "Comfortable, well-fitted dentures designed to restore your smile and make eating and speaking effortless."
    },
    {
      icon: CheckCircle,
      title: "Orthodontic Treatment (Braces & Aligners)",
      description: "Braces and clear aligners to straighten teeth, improve bite, and create a perfect smile."
    },
    {
      icon: Star,
      title: "Cosmetic Dentistry & Smile Makeover",
      description: "Teeth whitening, veneers, and smile design for a radiant, confident, and picture-perfect smile."
    }
  ];

  const trustIndicators = [
    { label: "Years of Excellence", value: "5+" },
    { label: "Happy Patients", value: "1,200+" },
    { label: "Success Rate", value: "99%" },
    { label: "Advanced Technology", value: "Latest" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl lg:text-2xl font-bold">
                <span className="text-teal-600">DR. AJILA'S</span>
                <span className="text-slate-800 ml-2 block lg:inline text-sm lg:text-xl">
                  SPECIALITY DENTAL CARE
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'}`}>
                  Home
                </Link>
                <a href="#services" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#about" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  About Us
                </a>
                <a href="#contact" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
                <Link to="/blogs" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/blogs' ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'}`}>
                  Blogs
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-teal-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link to="/" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <a href="#services" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  Services
                </a>
                <a href="#about" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  About Us
                </a>
                <a href="#contact" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  Contact
                </a>
                <Link to="/blogs" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  Blogs
                </Link>
                <button 
                  onClick={handleBookAppointmentClick}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-lg"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 lg:pt-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                5+ Years of Excellence
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Your Smile is Our 
                <span className="text-teal-600 block">Priority</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl">
                Experience advanced dental care with the latest technology and gentle treatment. 
                Dr. Ajila's expertise ensures your comfort and optimal oral health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button 
                  onClick={handleBookAppointmentClick}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book an Appointment
                </button>
                <button 
                  onClick={handleLearnMoreClick}
                  className="border-2 border-slate-300 hover:border-teal-600 text-slate-700 hover:text-teal-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-teal-600 mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-96 lg:h-[500px]">
                {heroImages.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt="Modern dental clinic with advanced equipment"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex 
                        ? `opacity-100 ${kenburnsClasses[index]}` 
                        : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Comprehensive 
              <span className="text-teal-600"> Services</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we provide complete dental care 
              using the latest technology and techniques for optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Know More button - appears on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={() => {
                        setSelectedService(service);
                        setIsServiceDetailModalOpen(true);
                      }}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsServicesModalOpen(true)} // Open services modal on click
              className="bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border-2 border-transparent hover:border-teal-600"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Ajila examining patient with modern equipment"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
                Advanced Technology,
                <span className="text-teal-600 block">Gentle Care</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Dr. Ajila's Specialty Dental Care, we combine cutting-edge dental technology 
                with compassionate care to ensure every patient receives the best possible treatment 
                in a comfortable, stress-free environment.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
								Our expertise includes advanced treatments in periodontology, implantology, cosmetic dentistry, 
								and restorative care, all tailored to provide you with a healthy, beautiful smile. 
								At Dr. Ajila's Speciality Dental Care, we're committed to delivering outstanding results, 
								ensuring patient satisfaction, and promoting optimal oral health. 
								Book your appointment today and experience the best in dental care!"
								 </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">State-of-the-art Equipment</h4>
                    <p className="text-slate-600">Latest dental technology for precise diagnosis and treatment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Experienced Team</h4>
                    <p className="text-slate-600">5+ years of expertise in comprehensive dental care</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Patient-Centered Approach</h4>
                    <p className="text-slate-600">Personalized treatment plans tailored to your unique needs</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)} // Open modal on click
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Meet Dr. Ajila
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Get in <span className="text-teal-600">Touch</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your smile? Contact us today to schedule your appointment 
              and take the first step towards optimal oral health.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Call Us</h3>
              <p className="text-2xl font-bold text-teal-600 mb-2">+91 9482474286</p>
              <p className="text-2xl font-bold text-teal-600 mb-2">08258 234286</p>
              <p className="text-slate-600">Available Mon-Sat, 10 AM - 1 PM & 3:30 PM - 7 PM</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Email Us</h3>
              <p className="text-lg font-semibold text-teal-600 mb-2">drajila25@gmail.com</p>
              <p className="text-slate-600">We'll respond within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors cursor-pointer transform hover:scale-105"
              >
                <MapPin className="w-8 h-8 text-white" />
              </a>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Visit Us</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">
                1st floor, Prime Mall,<br />
                Jodurasthe, Karkala. 576117
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button 
              onClick={handleBookAppointmentClick}
              className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Your Appointment Today
            </button>
            <p className="text-slate-600 mt-4">
              New patient consultations available • Insurance accepted
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-teal-400">DR. AJILA'S</span> SPECIALITY DENTAL CARE
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Committed to providing exceptional dental care with advanced technology, 
              gentle treatment, and personalized attention for every patient.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+919482474286" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:drajila25@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors">
                <MapPin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                © 2024 Dr. Ajila's Specialty Dental Care. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Dr. Ajila's Profile Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Meet Dr. Ajila"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="flex-shrink-0">
            <img 
              src="https://images.pexels.com/photos/33486875/pexels-photo-33486875.jpeg" 
              alt="Dr. Ajila"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-teal-100"
            />
          </div>
          <div>
            <p className="text-lg text-slate-700 mb-4">
              Dr. Ajila is a highly experienced and compassionate dental professional with over 15 years of dedicated practice in the field of dentistry. 
              He holds a Bachelor of Dental Surgery (BDS) and a Master of Dental Surgery (MDS) in Periodontology, specializing in the health of gums and supporting structures of teeth.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              His expertise extends to advanced treatments in periodontology, implantology, cosmetic dentistry, and restorative care. 
              Dr. Ajila is committed to staying at the forefront of dental innovation, regularly attending workshops and seminars to incorporate the latest techniques and technologies into his practice.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Patients appreciate Dr. Ajila's gentle approach, meticulous attention to detail, and his ability to create a comfortable and reassuring environment. 
              He believes in a patient-centered philosophy, ensuring that each treatment plan is tailored to the individual needs and goals of his patients, promoting not just oral health but overall well-being.
            </p>
            <p className="text-lg text-slate-700">
              Outside of his practice, Dr. Ajila is passionate about dental education and community outreach, striving to raise awareness about oral hygiene and preventive care.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
          <button 
            onClick={handleBookAppointmentClick}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Appointment
          </button>
        </div>
      </Modal>

      {/* All Services Modal */}
      <Modal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        title="Our Full Range of Services"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-teal-50 to-blue-50 border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Know More button - appears on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-50 via-teal-50 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={() => {
                      setSelectedService(service);
                      setIsServiceDetailModalOpen(true);
                    }}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    Know More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
          <button 
            onClick={handleBookAppointmentClick}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book an Appointment
          </button>
        </div>
      </Modal>

      {/* Individual Service Detail Modal */}
      <ServiceModal
        isOpen={isServiceDetailModalOpen}
        onClose={() => {
          setIsServiceDetailModalOpen(false);
          setSelectedService(null);
        }}
        service={selectedService}
        onBookAppointment={handleBookAppointmentClick}
      />

      {/* Floating Chat Button */}
      <button
        onClick={handleChatWithUsClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl flex items-center space-x-3 transition-all duration-300 transform hover:-translate-y-1 z-50"
      >
        <MessageCircle className="w-6 h-6" />
        <span>Chat with Us!</span>
      </button>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeqq_brok8DVSqBzZf7DYtK2L6Q_wNwjH4BlDQy69KOUPdirQ/viewform?usp=dialog";

  const handleBookAppointmentClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-100' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-xl lg:text-2xl font-bold">
                <span className="text-teal-600">DR. AJILA'S</span>
                <span className="text-slate-800 ml-2 block lg:inline text-sm lg:text-xl">
                  SPECIALITY DENTAL CARE
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'}`}>
                Home
              </Link>
              {location.pathname === '/' && (
                <>
                  <a href="#services" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                    Services
                  </a>
                  <a href="#about" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                    About Us
                  </a>
                  <a href="#contact" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                    Contact
                  </a>
                </>
              )}
              <Link to="/blogs" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/blogs' ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'}`}>
                Blogs
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-teal-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              {location.pathname === '/' && (
                <>
                  <a href="#services" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                    Services
                  </a>
                  <a href="#about" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                    About Us
                  </a>
                  <a href="#contact" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                    Contact
                  </a>
                </>
              )}
              <Link to="/blogs" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Blogs
              </Link>
              <button 
                onClick={handleBookAppointmentClick}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-lg"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
