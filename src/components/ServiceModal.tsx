import React from 'react';
import { X, CheckCircle, Award, Heart, Shield, Star, Users } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  } | null;
  onBookAppointment: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service, onBookAppointment }) => {
  if (!isOpen || !service) return null;

  const serviceDetails: { [key: string]: { about: string; whyDrAjila: string[] } } = {
    "Diagnosis & Treatment Planning": {
      about: "Comprehensive dental evaluation using advanced diagnostic tools including digital X-rays, intraoral cameras, and 3D imaging. We create personalized treatment plans that address your specific oral health needs, prioritizing conservative approaches while ensuring optimal long-term results.",
      whyDrAjila: [
        "State-of-the-art digital diagnostic equipment for precise assessment",
        "Comprehensive treatment planning with clear cost transparency",
        "Conservative approach prioritizing tooth preservation",
        "Detailed consultation explaining all treatment options",
        "5+ years of expertise in complex case management"
      ]
    },
    "Dental X-rays": {
      about: "Advanced digital dental radiography providing detailed images of teeth, roots, and surrounding bone structures. Our low-radiation digital X-rays enable early detection of cavities, bone loss, infections, and other oral health issues that aren't visible during clinical examination.",
      whyDrAjila: [
        "Latest digital X-ray technology with 80% less radiation exposure",
        "Instant image processing for immediate diagnosis",
        "High-resolution images for accurate treatment planning",
        "Safe and comfortable procedure with protective measures",
        "Expert interpretation by experienced dental professionals"
      ]
    },
    "Emergency Dental Care": {
      about: "Immediate dental care for urgent situations including severe tooth pain, dental trauma, broken teeth, lost fillings, and oral infections. Our emergency protocols ensure rapid pain relief and stabilization of dental emergencies to prevent further complications.",
      whyDrAjila: [
        "Same-day emergency appointments available",
        "Advanced pain management techniques for immediate relief",
        "Complete emergency dental kit and equipment",
        "Experienced in handling complex dental emergencies",
        "Follow-up care to ensure complete recovery"
      ]
    },
    "Preventive Dental Care": {
      about: "Comprehensive preventive services including regular check-ups, professional cleanings, fluoride treatments, and oral health education. Our preventive approach focuses on maintaining optimal oral health and preventing dental problems before they develop.",
      whyDrAjila: [
        "Personalized preventive care plans based on individual risk factors",
        "Advanced screening techniques for early problem detection",
        "Patient education programs for optimal home care",
        "Regular monitoring and adjustment of preventive protocols",
        "Proven track record in preventing dental diseases"
      ]
    },
    "Professional Teeth Cleaning": {
      about: "Thorough removal of plaque, tartar, and stains using ultrasonic scalers and specialized instruments. Our professional cleaning includes polishing, fluoride treatment, and personalized oral hygiene instructions to maintain optimal oral health between visits.",
      whyDrAjila: [
        "Gentle yet thorough cleaning techniques for patient comfort",
        "Advanced ultrasonic technology for effective plaque removal",
        "Customized cleaning protocols based on individual needs",
        "Professional-grade polishing for a brilliant smile",
        "Comprehensive oral health assessment with every cleaning"
      ]
    },
    "Advanced Gum Surgeries": {
      about: "Specialized periodontal treatments including gum grafting, pocket reduction surgery, and regenerative procedures. These advanced techniques treat severe gum disease, restore gum health, and prevent tooth loss while improving overall oral health.",
      whyDrAjila: [
        "Specialized training in advanced periodontal procedures",
        "Minimally invasive surgical techniques for faster healing",
        "Latest regenerative materials and growth factors",
        "Comprehensive post-operative care and monitoring",
        "High success rates in treating complex gum conditions"
      ]
    },
    "Root Canal Treatment (RCT)": {
      about: "Advanced endodontic therapy to save infected or severely damaged teeth. Using modern techniques and equipment, we remove infected pulp, clean and disinfect root canals, and seal the tooth to prevent reinfection while preserving natural tooth structure.",
      whyDrAjila: [
        "Pain-free root canal procedures with advanced anesthesia",
        "Rotary endodontic instruments for precise treatment",
        "High success rates in saving natural teeth",
        "Single-visit root canal treatment when possible",
        "Comprehensive follow-up care to ensure healing"
      ]
    },
    "Gentle Tooth Extraction": {
      about: "Safe and comfortable tooth removal procedures using modern anesthetic techniques and surgical protocols. We prioritize patient comfort while ensuring complete extraction with minimal trauma to surrounding tissues for optimal healing.",
      whyDrAjila: [
        "Painless extraction techniques with effective anesthesia",
        "Minimally invasive surgical approaches",
        "Comprehensive pre-extraction evaluation and planning",
        "Detailed post-operative care instructions",
        "Options for immediate tooth replacement when appropriate"
      ]
    },
    "Crowns & Bridges": {
      about: "High-quality dental restorations using premium materials like porcelain and zirconia. Our crowns and bridges restore damaged teeth and replace missing teeth with natural-looking, durable restorations that blend seamlessly with your smile.",
      whyDrAjila: [
        "Premium materials for long-lasting, natural-looking results",
        "Precise digital impressions for perfect fit",
        "Custom shade matching for seamless integration",
        "Advanced bonding techniques for superior retention",
        "Comprehensive warranty on all restorative work"
      ]
    },
    "Dental Implants": {
      about: "Permanent tooth replacement solution using titanium implants that integrate with jawbone. Our implant procedures restore both function and aesthetics, providing a stable foundation for crowns, bridges, or dentures that look and feel like natural teeth.",
      whyDrAjila: [
        "Advanced implant planning using 3D imaging technology",
        "High-grade titanium implants with proven success rates",
        "Minimally invasive surgical techniques",
        "Comprehensive implant maintenance programs",
        "Expertise in both simple and complex implant cases"
      ]
    },
    "Custom Dentures": {
      about: "Personalized removable prosthetics designed for optimal fit, function, and aesthetics. Our custom dentures are crafted using advanced materials and techniques to provide comfortable chewing, clear speech, and a natural-looking smile.",
      whyDrAjila: [
        "Precision-fitted dentures for maximum comfort",
        "High-quality materials for durability and aesthetics",
        "Multiple fittings to ensure perfect fit",
        "Comprehensive adjustment and maintenance services",
        "Options for implant-supported dentures for enhanced stability"
      ]
    },
    "Orthodontic Treatment (Braces & Aligners)": {
      about: "Comprehensive teeth straightening solutions including traditional braces and clear aligners. Our orthodontic treatments correct misaligned teeth, improve bite function, and create beautiful, healthy smiles for patients of all ages.",
      whyDrAjila: [
        "Multiple orthodontic options to suit different needs and lifestyles",
        "Advanced treatment planning with digital smile design",
        "Regular monitoring and adjustments for optimal results",
        "Comfortable, modern orthodontic appliances",
        "Comprehensive retention programs to maintain results"
      ]
    },
    "Cosmetic Dentistry & Smile Makeover": {
      about: "Comprehensive aesthetic dental treatments including teeth whitening, veneers, bonding, and complete smile transformations. Our cosmetic procedures enhance the appearance of your teeth while maintaining optimal oral health and function.",
      whyDrAjila: [
        "Artistic approach to smile design with attention to facial harmony",
        "Premium cosmetic materials for natural-looking results",
        "Digital smile preview to visualize treatment outcomes",
        "Conservative approaches that preserve natural tooth structure",
        "Comprehensive cosmetic treatment planning and execution"
      ]
    }
  };

  const details = serviceDetails[service.title] || {
    about: "This service provides comprehensive dental care tailored to your specific needs.",
    whyDrAjila: ["Expert care with advanced technology", "Personalized treatment approach", "Proven results and patient satisfaction"]
  };

  const IconComponent = service.icon;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900 bg-opacity-75 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-slate-800 transition-colors p-2 rounded-full hover:bg-gray-100 z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {/* Header */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 pb-6">
          <div className="flex items-center mb-4">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
                {service.title}
              </h2>
              <p className="text-teal-600 font-medium">Specialized Dental Care</p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-6">
          {/* What is this service about */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-teal-600 mr-2" />
              What is this service about?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {details.about}
            </p>
          </div>

          {/* Why Dr. Ajila's clinic */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <Award className="w-6 h-6 text-teal-600 mr-2" />
              Why Choose Dr. Ajila's Specialty Dental Care?
            </h3>
            <div className="space-y-3">
              {details.whyDrAjila.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-teal-600">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">1,200+</div>
                <div className="text-sm text-slate-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">99%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">Latest</div>
                <div className="text-sm text-slate-600">Technology</div>
              </div>
            </div>
          </div>

          {/* Book Appointment Button */}
          <div className="text-center">
            <button 
              onClick={onBookAppointment}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Book Appointment for {service.title}
            </button>
            <p className="text-slate-500 text-sm mt-3">
              Schedule your consultation today • New patients welcome
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;