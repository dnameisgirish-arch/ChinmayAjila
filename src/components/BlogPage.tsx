import React from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
  {
    id: 1,
    title: "Why Early Diagnosis is the Key to a Healthy Smile",
    subtitle: "Understanding the Power of Preventive Diagnosis",
    excerpt: "Discover how early dental diagnosis prevents serious problems, saves money, and protects your long-term oral health.",
    author: "Dr. Ajila",
    specialty: "General Dentistry",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Diagnosis & Treatment Planning"
  },
  {
    id: 2,
    title: "From Pain to Relief: How Accurate Dental Treatment Planning Changes Everything",
    subtitle: "A Patient’s Guide to Smarter Dental Decisions",
    excerpt: "Accurate dental treatment planning ensures faster recovery, reduced costs, and tailored care designed for your unique needs.",
    author: "Dr. Ajila",
    specialty: "General Dentistry",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/6812522/pexels-photo-6812522.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Diagnosis & Treatment Planning"
  },
  {
    id: 3,
    title: "The Hidden Dangers of Skipping Dental Checkups",
    subtitle: "Why Diagnosis & Planning Save More Than Just Teeth",
    excerpt: "Skipping dental visits risks costly treatments later. Learn how early diagnosis prevents serious oral health problems.",
    author: "Dr. Ajila",
    specialty: "Preventive Dentistry",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6812523/pexels-photo-6812523.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Diagnosis & Treatment Planning"
  },
		{
    id: 4,
    title: "Dental X-Rays Demystified: What You Need to Know",
    subtitle: "A Safe and Essential Tool in Modern Dentistry",
    excerpt: "Wondering if dental X-rays are safe? Discover why they’re essential, quick, and crucial for accurate diagnosis.",
    author: "Dr. Ajila",
    specialty: "Radiology",
    date: "Dec 18, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dental X-Rays"
  },
  {
    id: 5,
    title: "How Dental X-Rays Detect Problems Before They Hurt",
    subtitle: "The Science of Early Detection",
    excerpt: "Dental X-rays reveal cavities, bone loss, and hidden infections early, preventing expensive treatments later.",
    author: "Dr. Ajila",
    specialty: "Diagnostic Dentistry",
    date: "Dec 20, 2024",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dental X-Rays"
  },
  {
    id: 6,
    title: "Digital Dental X-Rays vs. Traditional: What’s the Difference?",
    subtitle: "Smarter, Safer, and Faster Imaging",
    excerpt: "Digital dental X-rays use less radiation, give instant results, and improve treatment accuracy compared to traditional ones.",
    author: "Dr. Ajila",
    specialty: "Advanced Dentistry",
    date: "Dec 22, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Dental X-Rays"
  },
	{
    id: 7,
    title: "Dental Emergencies: What to Do Before You Reach the Clinic",
    subtitle: "Quick Actions That Save Your Smile",
    excerpt: "A broken tooth or sudden pain? Learn essential first-aid tips for dental emergencies before professional care.",
    author: "Dr. Ajila",
    specialty: "Emergency Dentistry",
    date: "Dec 24, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Emergency Care"
  },
  {
    id: 8,
    title: "Top 5 Dental Emergencies and How Dentists Treat Them",
    subtitle: "From Knocked-Out Teeth to Abscesses",
    excerpt: "Discover the most common dental emergencies and how modern dentistry provides quick and effective solutions.",
    author: "Dr. Ajila",
    specialty: "Oral Surgery",
    date: "Dec 26, 2024",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/6812530/pexels-photo-6812530.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Emergency Care"
  },
  {
    id: 9,
    title: "Why Every Family Should Have a Dental Emergency Plan",
    subtitle: "Preparedness for Pain-Free Smiles",
    excerpt: "Dental emergencies strike without warning—having a plan ensures timely care and prevents long-term damage.",
    author: "Dr. Ajila",
    specialty: "Preventive Dentistry",
    date: "Dec 28, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Emergency Care"
  },
		{
    id: 10,
    title: "How Preventive Dentistry Saves You Money in the Long Run",
    subtitle: "Invest in Prevention, Avoid Costly Treatments",
    excerpt: "Skipping regular checkups may cost more later. Learn how preventive care keeps your smile and wallet healthy.",
    author: "Dr. Ajila",
    specialty: "Preventive Dentistry",
    date: "Dec 30, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3845762/pexels-photo-3845762.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Preventive Care"
  },
  {
    id: 11,
    title: "Top 7 Habits for Lifelong Oral Health",
    subtitle: "Daily Routines That Keep Smiles Strong",
    excerpt: "Brushing is just the start! Discover dentist-approved habits that protect your teeth and gums for life.",
    author: "Dr. Ajila",
    specialty: "Preventive Dentistry",
    date: "Jan 2, 2025",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3881448/pexels-photo-3881448.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Preventive Care"
  },
  {
    id: 12,
    title: "The Science Behind Fluoride: Friend or Foe?",
    subtitle: "Understanding Its Role in Dental Care",
    excerpt: "Fluoride often sparks debate, but research proves its protective role in preventing tooth decay effectively.",
    author: "Dr. Ajila",
    specialty: "Preventive Dentistry",
    date: "Jan 4, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6812509/pexels-photo-6812509.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Preventive Care"
  },
	{
    id: 13,
    title: "Professional Teeth Cleaning vs. Home Care: What’s the Difference?",
    subtitle: "Why Both Are Essential for Oral Health",
    excerpt: "Brushing at home helps, but professional cleaning removes hidden plaque and tartar for lasting oral health.",
    author: "Dr. Ajila",
    specialty: "Dental Hygiene",
    date: "Jan 7, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6812503/pexels-photo-6812503.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Teeth Cleaning"
  },
  {
    id: 14,
    title: "How Often Should You Get a Dental Cleaning?",
    subtitle: "Finding the Right Frequency for Healthy Teeth",
    excerpt: "Is twice a year enough? Learn how lifestyle, diet, and genetics affect your professional cleaning schedule.",
    author: "Dr. Ajila",
    specialty: "Dental Hygiene",
    date: "Jan 9, 2025",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Teeth Cleaning"
  },
  {
    id: 15,
    title: "The Surprising Link Between Clean Teeth and Heart Health",
    subtitle: "Beyond Your Smile: Whole-Body Benefits",
    excerpt: "Did you know oral hygiene impacts heart disease risk? Discover how clean teeth protect your overall health.",
    author: "Dr. Ajila",
    specialty: "Dental Hygiene",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/5355696/pexels-photo-5355696.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Teeth Cleaning"
  }
];


  const specialties = [
  "Diagnosis & Treatment Planning",
  "Dental X-Rays",
  "Emergency Care",
  "Preventive Care",
  "Teeth Cleaning",
  "Gum Surgeries",
  "Root Canal Treatment",
  "Painless Extraction",
  "Crowns & Bridges",
  "Dental Implants",
  "Dentures",
  "Orthodontics (Teeth Alignment)",
  "Cosmetic Dentistry & Smile Design"
];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-slate-600 mb-6">
            <span>Home</span>
            <ArrowRight className="w-4 h-4 mx-2" />
            <span className="text-teal-600 font-medium">Health Blogs</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Recent <span className="text-teal-600">Articles</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Stay informed about the latest in dental health, treatments, and oral care tips from our expert team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                          {post.title}
                        </h2>
                        <h3 className="text-lg font-medium text-slate-600 mb-4">
                          {post.subtitle}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center text-sm text-slate-500 space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="text-sm text-teal-600 font-medium">
                          In {post.specialty}
                        </div>
                        
                        <button className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border-2 border-transparent hover:border-teal-600">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Specialties */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-3">
                  By <span className="text-teal-600">Specialities</span>
                </h3>
                <div className="space-y-3">
                  {specialties.map((specialty, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-slate-600 hover:text-teal-600 hover:bg-teal-50 px-3 py-2 rounded-lg transition-all text-sm"
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-teal-100 mb-4 text-sm">
                  Get the latest dental health tips and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-teal-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
