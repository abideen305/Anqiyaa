import React, { useState } from 'react';
import { BookOpen, Users, GraduationCap, Layout, ChevronRight, Star, Clock, Users2, BookOpenCheck, Heart, BookText, Sparkles, Mail, Phone, MessageCircle, Instagram, Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Chat Button */}
      <a
        href={`https://wa.me/2348130363863?text=${encodeURIComponent("Assalamualaykum warahmatullah Al Anqiyaa Islamic Academy. I want to make enquiries about your online Islamic and Qur'an classes. My name is")}`}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline">Chat with us</span>
      </a>

      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-emerald-900/90 to-emerald-800/90"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1597935258735-e238c37547a2?auto=format&fit=crop&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Logo */}
        <div className="absolute top-4 left-4 z-10 bg-white/90 p-2 rounded-lg shadow-md">
          <img 
            src="https://i.ibb.co/6L0WcpZ/AL-ANQIYAA-LOGO-2-1-1-removebg-preview.png" 
            alt="Al Anqiyaa Logo" 
            className="h-8 w-auto"
          />
        </div>

        <div className="text-center text-white px-4 max-w-4xl mt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-primary)' }}>
            Attaining Piety Through Seeking Knowledge
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Join Al Anqiyaa Islamic Academy to deepen your connection with Allah through structured Qur'anic and Islamic studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('courses')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center"
            >
              Explore Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-emerald-800 px-8 py-3 rounded-full font-semibold"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose Al Anqiyaa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-emerald-600" />}
              title="Standardized Curriculum"
              description="Comprehensive, authentic courses rooted in the Qur'an and Sunnah."
            />
            <FeatureCard
              icon={<Layout className="h-8 w-8 text-emerald-600" />}
              title="Flexible Learning"
              description="Choose between group classes or personalized tutoring."
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8 text-emerald-600" />}
              title="Expert Tutors"
              description="Learn from qualified scholars and certified instructors."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-emerald-600" />}
              title="Interactive Lessons"
              description="Engaging sessions with practical applications."
            />
          </div>
        </div>
      </div>

      {/* Courses & Programs Section */}
      <div id="courses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
              Courses & Programs
            </h2>
            <p className="text-xl text-gray-600">
              Structured learning paths for all levels, from beginners to advanced students.
            </p>
          </div>

          {/* Short Courses */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Short Courses (Group)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CourseCard
                icon={<Star className="h-6 w-6 text-emerald-600" />}
                title="Knowing Allah: 99 Names & Attributes"
                description="Deepen your love for Allah through His divine names."
                status="Coming Soon"
                isFree={true}
              />
              <CourseCard
                icon={<BookOpenCheck className="h-6 w-6 text-emerald-600" />}
                title="The Khuluq (Character) Course"
                description="Memorize and apply Ibn Wardi's timeless poem on Islamic ethics."
                status="Coming Soon"
                isFree={true}
              />
            </div>
          </div>

          {/* Personalized Learning */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Personalized Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CourseCard
                icon={<BookOpen className="h-6 w-6 text-emerald-600" />}
                title="Tahfeedh & Tahseen of the Qur'an"
                description="One-on-one guidance for memorization, recitation, and Tajweed."
                price={{ ng: "₦15,000", intl: "$40" }}
                type="monthly"
              />
              <CourseCard
                icon={<Clock className="h-6 w-6 text-emerald-600" />}
                title="Ibtidaaiyyah (Beginner)"
                description="Foundational Arabic, Qur'an reading, Hadith, and Adhkaar."
                price={{ ng: "₦15,000", intl: "$40" }}
                type="monthly"
              />
              <CourseCard
                icon={<GraduationCap className="h-6 w-6 text-emerald-600" />}
                title="I'idaadiyyah (Intermediate)"
                description="Arabic grammar (Nahw), Fiqh, Aqeedah, and advanced Tajweed."
                price={{ ng: "₦15,000", intl: "$40" }}
                type="monthly"
              />
            </div>
          </div>

          {/* Group Classes */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Group Classes</h3>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-8">
              <p className="text-emerald-800 font-semibold mb-4">Maximum of 10 students per class</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-emerald-200">
                      <th className="text-left py-4 px-4">Category</th>
                      <th className="text-right py-4 px-4">Nigerian Students</th>
                      <th className="text-right py-4 px-4">Nigerian Working</th>
                      <th className="text-right py-4 px-4">Non-Resident Students</th>
                      <th className="text-right py-4 px-4">Non-Resident Working</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-4">Group Classes</td>
                      <td className="text-right py-4 px-4">₦5,000/month</td>
                      <td className="text-right py-4 px-4">₦10,000/month</td>
                      <td className="text-right py-4 px-4">$15/month</td>
                      <td className="text-right py-4 px-4">$20/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <p className="text-amber-800 font-semibold">
                Note: Tahfeedh (Qur'an Memorization) is compulsory for all students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
              The Pure Path to Sacred Knowledge
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              Al Anqiyaa Islamic Academy, established in 2023, nurtures God-consciousness (taqwa) through authentic Islamic education. We combine Qur'anic studies, Arabic, and spiritual development to purify hearts and minds.
            </p>
          </div>

          {/* Name Meaning */}
          <div className="bg-white rounded-2xl p-8 mb-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-primary text-center">
              The Name 'Al Anqiyaa'
            </h3>
            <p className="text-lg text-gray-600">
              Derived from 'ٱلْأَنْقِيَاء' (the pure ones), our name reflects the pursuit of sincerity and clarity in worship and learning.
            </p>
          </div>

          {/* Teaching Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PhilosophyCard
              icon={<BookText className="h-8 w-8 text-emerald-600" />}
              title="Rooted in Tradition"
              description="Our curriculum is firmly grounded in the Qur'an and Sunnah, ensuring authentic knowledge transmission."
            />
            <PhilosophyCard
              icon={<Heart className="h-8 w-8 text-emerald-600" />}
              title="Knowledge & Character"
              description="We maintain a balanced focus on knowledge ('ilm) and character (akhlaq) development."
            />
            <PhilosophyCard
              icon={<Sparkles className="h-8 w-8 text-emerald-600" />}
              title="Inclusive Learning"
              description="Our programs are designed to be accessible to all ages and proficiency levels."
            />
          </div>

          {/* Tutor Qualifications */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Our Qualified Instructors
            </h3>
            <p className="text-lg text-emerald-800">
              Our instructors are certified in Islamic sciences, Arabic linguistics, and Qur'anic recitation (Ijaza), ensuring the highest standards of education.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
              Begin Your Journey Today
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards deepening your Islamic knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in...
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="tahfeedh">Tahfeedh & Tahseen</option>
                    <option value="beginner">Ibtidaaiyyah (Beginner)</option>
                    <option value="intermediate">I'idaadiyyah (Intermediate)</option>
                    <option value="group">Group Classes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Ask about enrollment, fees, or schedules..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="space-y-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Are classes online or in-person?</h4>
                    <p className="text-gray-600">All classes are held online via Zoom or Google Meet.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What materials are needed?</h4>
                    <p className="text-gray-600">Qur'an, notebook, and a stable internet connection.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Is financial aid available?</h4>
                    <p className="text-gray-600">Contact us for special arrangements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+2347042211721" className="hover:text-emerald-300">+234 704 221 1721</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+2348130363863" className="hover:text-emerald-300">+234 813 036 3863</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@alanqiyaa.com.ng" className="hover:text-emerald-300">info@alanqiyaa.com.ng</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Connect With Us</h3>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.instagram.com/alanqiyaaislamicacademy?igsh=dnd1M3Rqb3I0bHcz" className="hover:text-emerald-300" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-8 w-8" />
                </a>
                <a href={`https://wa.me/2348130363863?text=${encodeURIComponent("Assalamualaykum warahmatullah Al Anqiyaa Islamic Academy. I want to make enquiries about your online Islamic and Qur'an classes. My name is")}`} className="hover:text-emerald-300" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-8 w-8" />
                </a>
                <a href="https://t.me/alanqiyaa" className="hover:text-emerald-300" target="_blank" rel="noopener noreferrer">
                  <Send className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Class Schedule</h3>
              <p className="text-emerald-100 text-center">
                Classes are held daily. Contact us for detailed schedules and availability.
              </p>
            </div>
          </div>
        </div>

        {/* Sub Footer - Quranic Verse */}
        <div className="border-t border-emerald-800">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <p className="text-xl md:text-2xl font-primary mb-4">
              "Allah will elevate those who believe and possess knowledge."
            </p>
            <p className="text-emerald-300">— Qur'an 58:11</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ icon, title, description, status, isFree, price, type }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {status && (
        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
          {status}
        </span>
      )}
      
      {isFree && (
        <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
          Free Course
        </span>
      )}
      
      {price && (
        <div className="mt-4 space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Nigerian Residents:</span> {price.ng}/{type}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">International:</span> {price.intl}/{type}
          </p>
        </div>
      )}
    </div>
  );
}

function PhilosophyCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;