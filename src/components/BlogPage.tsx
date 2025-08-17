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
      id: 2,
      title: "The Importance of Regular Dental Cleanings",
      subtitle: "Preventive Care for Optimal Oral Health",
      excerpt: "Regular professional cleanings are essential for maintaining healthy teeth and gums. Discover why routine dental visits.",
      author: "Dr. Ajila",
      specialty: "Preventive Dentistry",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/6812521/pexels-photo-6812521.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Preventive Care"
    },
    {
      id: 3,
      title: "Root Canal Treatment: Myths vs Reality",
      subtitle: "Debunking Common Misconceptions About RCT",
      excerpt: "Root canal treatment has a bad reputation, but modern techniques make it comfortable and highly successful. Learn the facts.",
      author: "Dr. Ajila",
      specialty: "Endodontics",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/6812522/pexels-photo-6812522.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Root Canal Treatment"
    },
    {
      id: 4,
      title: "Cosmetic Dentistry: Transform Your Smile",
      subtitle: "Modern Solutions for a Perfect Smile",
      excerpt: "From teeth whitening to veneers, cosmetic dentistry offers numerous options to enhance your smile. Explore the latest treatments.",
      author: "Dr. Ajila",
      specialty: "Cosmetic Dentistry",
      date: "Nov 28, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/6812523/pexels-photo-6812523.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cosmetic Dentistry"
    }
  ];

  const specialties = [
    "Aesthetic And Reconstructive Surgery",
    "Preventive Dentistry",
    "Periodontics",
    "Endodontics",
    "Oral Surgery",
    "Orthodontics",
    "Prosthodontics",
    "Cosmetic Dentistry",
    "Implantology",
    "Pediatric Dentistry",
    "Oral Pathology",
    "Dental Radiology",
    "Emergency Dentistry"
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
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
