import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Modal from './Modal';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<{
    id: number;
    title: string;
    subtitle: string;
    excerpt: string;
    author: string;
    specialty: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    content?: string; // Add content property
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    category: "Diagnosis & Treatment Planning",
    content: `
     <h1>Why Early Diagnosis is the Key to a Healthy Smile</h1>
<p><strong>Summary:</strong> Early, preventive dental diagnosis catches problems while they’re small and simple to treat. That means fewer procedures, lower costs, and healthier teeth and gums for life. Here’s how early diagnosis protects your smile and wallet—and what to do next.</p>

<h2>Understanding the Power of Preventive Diagnosis</h2>
<p>Preventive diagnosis is the routine process of screening your mouth for early signs of trouble—before pain begins. At regular check-ups, your dentist evaluates teeth, gums, bite, soft tissues, and supporting bone using visual exams, periodontal measurements, and digital X-rays when needed. This proactive approach identifies hidden issues such as tiny cavities, early gum inflammation, enamel erosion, or cracked fillings—long before they become emergencies.</p>

<h2>Top Benefits of Early Dental Diagnosis</h2>
<ul>
  <li><strong>Stops problems early:</strong> Small cavities can be reversed or treated with tiny fillings instead of root canals or crowns.</li>
  <li><strong>Saves money and time:</strong> Early interventions are faster, less invasive, and significantly more affordable.</li>
  <li><strong>Protects gum health:</strong> Detecting gingivitis early prevents periodontitis, bone loss, and tooth mobility.</li>
  <li><strong>Safeguards overall health:</strong> Oral infections increase systemic inflammation—early control supports heart and metabolic health.</li>
  <li><strong>Improves treatment outcomes:</strong> Planning ahead creates predictable, comfortable care with fewer surprises.</li>
</ul>

<h2>What Early Diagnosis Actually Catches</h2>
<ul>
  <li><strong>Interproximal (between-teeth) cavities</strong> that aren’t visible during mirror exams.</li>
  <li><strong>Early gum disease</strong> indicated by bleeding, pocketing, or tartar below the gumline.</li>
  <li><strong>Cracks and worn restorations</strong> that could fracture a tooth if ignored.</li>
  <li><strong>Impacted or erupting wisdom teeth</strong> that may crowd or damage adjacent teeth.</li>
  <li><strong>Root infections or cysts</strong> visible only on radiographs.</li>
  <li><strong>Oral lesions</strong> that warrant monitoring or biopsy for your safety.</li>
</ul>

<h2>Isn’t an X-Ray Risky?</h2>
<p>Modern <strong>digital dental X-rays</strong> use very low radiation—often up to 80–90% less than older film systems. With targeted images, protective aprons, and thyroid collars, diagnostic benefits far outweigh the minimal exposure, especially when films are taken only as clinically indicated.</p>

<h2>How Often Should You Get Checked?</h2>
<ul>
  <li><strong>Every 6 months:</strong> Most healthy adults and teens.</li>
  <li><strong>Every 3–4 months:</strong> History of gum disease, diabetes, dry mouth, pregnancy, smokers, or heavy tartar builders.</li>
  <li><strong>Customized intervals:</strong> Your dentist will adjust based on risk, home-care habits, diet, and past findings.</li>
</ul>

<h2>What to Expect at an Early-Diagnosis Visit</h2>
<ol>
  <li><strong>Medical & dental history review:</strong> Medications, habits, and concerns.</li>
  <li><strong>Oral cancer screening:</strong> Lips, cheeks, tongue, palate, and throat.</li>
  <li><strong>Gum health assessment:</strong> Pocket depths, bleeding points, and tartar mapping.</li>
  <li><strong>Tooth-by-tooth exam:</strong> Enamel, fillings, cracks, and contacts.</li>
  <li><strong>Targeted digital X-rays</strong> if needed to view roots and bone.</li>
  <li><strong>Personalized plan:</strong> Clear next steps, timeline, and cost transparency.</li>
</ol>

<h2>Cost Savings: Small Now vs. Big Later</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Condition (Caught Early)</th>
      <th>Typical Early Care</th>
      <th>Likely If Delayed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Initial enamel decay</td>
      <td>Remineralization / tiny filling</td>
      <td>Deep decay → root canal + crown</td>
    </tr>
    <tr>
      <td>Mild gingivitis</td>
      <td>Cleaning + home-care coaching</td>
      <td>Periodontitis → bone loss, surgery</td>
    </tr>
    <tr>
      <td>Cracked filling</td>
      <td>Simple replacement</td>
      <td>Tooth fracture → crown or extraction</td>
    </tr>
  </tbody>
</table>

<h2>Home Habits that Supercharge Early Diagnosis</h2>
<ul>
  <li>Brush twice daily with a fluoride toothpaste (electric brush if possible).</li>
  <li>Clean between teeth daily—floss or interdental brushes.</li>
  <li>Limit frequent snacking, sugary and acidic drinks; rinse with water afterward.</li>
  <li>Use a non-alcoholic mouthwash if recommended.</li>
  <li>Track sensitivity, bleeding, or chips—mention them at your visit.</li>
</ul>

<h2>FAQs</h2>
<p><strong>Q: I don’t have pain. Do I still need a check-up?</strong><br>
A: Yes. Most dental problems are painless at first. Early diagnosis finds issues before they hurt or become expensive.</p>

<p><strong>Q: Will I always need X-rays?</strong><br>
A: Only when clinically necessary. Your dentist tailors the type and frequency to your risk and symptoms.</p>

<p><strong>Q: Can early gum disease reverse?</strong><br>
A: Gingivitis is reversible with professional cleaning and improved home care. Advanced periodontitis requires deeper therapy.</p>

<h2>Strong Call to Action</h2>
<p><strong>Protect your smile before problems start.</strong> Book your comprehensive check-up and preventive diagnosis at <strong>Dr. Ajila’s Speciality Dental Care</strong> today. Get a clear, personalized plan, transparent costs, and confident, long-term oral health.</p>

<p style="font-size:0.95rem;color:#444;"><em>New patients welcome. Priority slots available for preventive screenings and second opinions.</em></p>
    `
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
    category: "Diagnosis & Treatment Planning",
    content: `
      <h1>From Pain to Relief: How Accurate Dental Treatment Planning Changes Everything</h1>
      <p>Accurate dental treatment planning is essential for effective dental care. It involves a thorough assessment of the patient's oral health and the development of a customized treatment plan.</p>
      <p>Key aspects of treatment planning:</p>
      <ul>
        <li>Detailed examination</li>
        <li>Diagnostic imaging</li>
        <li>Personalized treatment options</li>
      </ul>
    `
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
    category: "Diagnosis & Treatment Planning",
    content: `
      <h1>The Hidden Dangers of Skipping Dental Checkups</h1>
      <p>Regular dental checkups are vital for maintaining oral health. Skipping these visits can lead to serious dental problems.</p>
      <p>Risks of skipping checkups:</p>
      <ul>
        <li>Increased risk of cavities</li>
        <li>Development of gum disease</li>
        <li>Potential for tooth loss</li>
      </ul>
    `
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
    category: "Dental X-Rays",
    content: `
      <h1>Dental X-Rays Demystified: What You Need to Know</h1>
      <p>Dental X-rays are a safe and essential tool in modern dentistry. They provide detailed images of the teeth and surrounding structures.</p>
      <p>Benefits of dental X-rays:</p>
      <ul>
        <li>Early detection of cavities</li>
        <li>Assessment of bone health</li>
        <li>Diagnosis of hidden infections</li>
      </ul>
    `
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
    category: "Dental X-Rays",
    content: `
      <h1>How Dental X-Rays Detect Problems Before They Hurt</h1>
      <p>Dental X-rays are crucial for early detection of dental problems. They can identify issues before they cause pain or discomfort.</p>
      <p>Problems detected by X-rays:</p>
      <ul>
        <li>Cavities between teeth</li>
        <li>Bone loss due to gum disease</li>
        <li>Hidden infections</li>
      </ul>
    `
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
    category: "Dental X-Rays",
    content: `
      <h1>Digital Dental X-Rays vs. Traditional: What’s the Difference?</h1>
      <p>Digital dental X-rays offer several advantages over traditional X-rays. They provide clearer images and reduce radiation exposure.</p>
      <p>Key differences:</p>
      <ul>
        <li>Lower radiation dose</li>
        <li>Instant image display</li>
        <li>Enhanced image quality</li>
      </ul>
    `
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
    category: "Emergency Care",
    content: `
      <h1>Dental Emergencies: What to Do Before You Reach the Clinic</h1>
      <p>In a dental emergency, quick action can make a big difference. Knowing what to do before you reach the clinic can save your smile.</p>
      <p>Emergency tips:</p>
      <ul>
        <li>Rinse your mouth with warm water</li>
        <li>Apply a cold compress</li>
        <li>Take over-the-counter pain relievers</li>
      </ul>
    `
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
    category: "Emergency Care",
    content: `
      <h1>Top 5 Dental Emergencies and How Dentists Treat Them</h1>
      <p>Understanding common dental emergencies and how dentists treat them can help you stay prepared.</p>
      <p>Common emergencies:</p>
      <ul>
        <li>Knocked-out tooth</li>
        <li>Severe toothache</li>
        <li>Abscess</li>
      </ul>
    `
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
    category: "Emergency Care",
    content: `
      <h1>Why Every Family Should Have a Dental Emergency Plan</h1>
      <p>Having a dental emergency plan can ensure timely care and prevent long-term damage. It's essential for every family.</p>
      <p>Components of a dental emergency plan:</p>
      <ul>
        <li>Contact information for your dentist</li>
        <li>First-aid instructions</li>
        <li>Emergency contact details</li>
      </ul>
    `
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
    category: "Preventive Care",
    content: `
      <h1>How Preventive Dentistry Saves You Money in the Long Run</h1>
      <p>Preventive dentistry is a cost-effective way to maintain oral health and avoid expensive treatments.</p>
      <p>Benefits of preventive care:</p>
      <ul>
        <li>Reduced risk of cavities</li>
        <li>Prevention of gum disease</li>
        <li>Early detection of oral cancer</li>
      </ul>
    `
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
    category: "Preventive Care",
    content: `
      <h1>Top 7 Habits for Lifelong Oral Health</h1>
      <p>Establishing good oral hygiene habits is essential for maintaining a healthy smile throughout your life.</p>
      <p>Key habits:</p>
      <ul>
        <li>Brushing twice a day</li>
        <li>Flossing daily</li>
        <li>Using mouthwash</li>
      </ul>
    `
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
    category: "Preventive Care",
    content: `
      <h1>The Science Behind Fluoride: Friend or Foe?</h1>
      <p>Fluoride is a crucial element in dental care, known for its ability to prevent tooth decay.</p>
      <p>Benefits of fluoride:</p>
      <ul>
        <li>Strengthens tooth enamel</li>
        <li>Reduces the risk of cavities</li>
        <li>Reverses early signs of decay</li>
      </ul>
    `
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
    category: "Teeth Cleaning",
    content: `
      <h1>Professional Teeth Cleaning vs. Home Care: What’s the Difference?</h1>
      <p>Both professional teeth cleaning and home care are essential for maintaining optimal oral health.</p>
      <p>Key differences:</p>
      <ul>
        <li>Professional cleaning removes plaque and tartar</li>
        <li>Home care focuses on daily hygiene</li>
        <li>Both are necessary for comprehensive care</li>
      </ul>
    `
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
    category: "Teeth Cleaning",
    content: `
      <h1>How Often Should You Get a Dental Cleaning?</h1>
      <p>The frequency of dental cleanings depends on individual factors such as lifestyle, diet, and genetics.</p>
      <p>Factors influencing cleaning frequency:</p>
      <ul>
        <li>Dietary habits</li>
        <li>Oral hygiene practices</li>
        <li>Genetic predisposition</li>
      </ul>
    `
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
    category: "Teeth Cleaning",
    content: `
      <h1>The Surprising Link Between Clean Teeth and Heart Health</h1>
      <p>Oral hygiene has a significant impact on overall health, including heart health. Maintaining clean teeth can reduce the risk of heart disease.</p>
      <p>The link between oral health and heart health:</p>
      <ul>
        <li>Bacteria from gum disease can enter the bloodstream</li>
        <li>Inflammation in the mouth can contribute to heart disease</li>
        <li>Regular dental checkups can help prevent heart problems</li>
      </ul>
    `
  }
];

  const specialties = [
    "General Dentistry",
    "Preventive Dentistry",
    "Radiology",
    "Diagnostic Dentistry",
    "Advanced Dentistry",
    "Emergency Dentistry",
    "Oral Surgery",
    "Dental Hygiene",
  ];

  const handleReadMoreClick = (post: {
    id: number;
    title: string;
    subtitle: string;
    excerpt: string;
    author: string;
    specialty: string;
    date: string;
    readTime: string;
    image: string;
    category: string;
    content?: string;
  }) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

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
                        
                        <button 
                          onClick={() => handleReadMoreClick(post)}
                          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-1 transition-transform"
                        >
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

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={selectedPost?.title || ''}
      >
        {selectedPost && (
          <>
            <h3 className="text-lg font-medium text-slate-600 mb-2">{selectedPost.subtitle}</h3>
            <div className="flex items-center text-sm text-slate-500 space-x-4 mb-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </>
        )}
      </Modal>
    </div>
  );
};

export default BlogPage;
