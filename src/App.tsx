import React, { useState, useEffect } from 'react';
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
  Users
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular check-ups and cleanings to maintain optimal oral health and prevent dental issues."
    },
    {
      icon: Star,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and cosmetic treatments for confidence."
    },
    {
      icon: Heart,
      title: "Restorative Dentistry",
      description: "Crowns, bridges, and implants to restore your teeth's function and appearance."
    },
    {
      icon: CheckCircle,
      title: "Orthodontics",
      description: "Straighten teeth with braces and clear aligners for a perfect, healthy smile."
    },
    {
      icon: Award,
      title: "Oral Surgery",
      description: "Expert surgical procedures including extractions and advanced periodontal treatments."
    },
    {
      icon: Users,
      title: "Emergency Care",
      description: "Immediate dental care when you need it most, available for urgent situations."
    }
  ];

  const trustIndicators = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Happy Patients", value: "5,000+" },
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
                <a href="#home" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#services" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#about" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  About Us
                </a>
                <a href="#contact" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Book Appointment
                </button>
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
                <a href="#home" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  Home
                </a>
                <a href="#services" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  Services
                </a>
                <a href="#about" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  About Us
                </a>
                <a href="#contact" className="block text-slate-700 hover:text-teal-600 py-2 text-base font-medium">
                  Contact
                </a>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-lg">
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
                15+ Years of Excellence
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
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Book an Appointment
                </button>
                <button className="border-2 border-slate-300 hover:border-teal-600 text-slate-700 hover:text-teal-600 px-8 py-4 rounded-full text-lg font-semibold transition-all">
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
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6812511/pexels-photo-6812511.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern dental clinic with advanced equipment"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
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
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border-2 border-transparent hover:border-teal-600">
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
                    <p className="text-slate-600">15+ years of expertise in comprehensive dental care</p>
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
              
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
              <p className="text-2xl font-bold text-teal-600 mb-2">(555) 123-DENT</p>
              <p className="text-slate-600">Available Mon-Sat, 9 AM - 6 PM</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Email Us</h3>
              <p className="text-lg font-semibold text-teal-600 mb-2">info@drajila.com</p>
              <p className="text-slate-600">We'll respond within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Visit Us</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">
                123 Dental Avenue<br />
                Suite 100, Medical City<br />
                State 12345
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">Operating Hours</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-slate-800 mb-2">Weekdays</h4>
                <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-slate-800 mb-2">Weekend</h4>
                <p className="text-slate-600">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-slate-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
              <a href="tel:555-123-3368" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:info@drajila.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
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
    </div>
  );
}

export default App;