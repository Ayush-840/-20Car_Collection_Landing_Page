import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Shield,
  Users,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                LuxeDrive
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#categories"
                className="text-foreground hover:text-primary transition"
              >
                Categories
              </a>
              <a
                href="#featured"
                className="text-foreground hover:text-primary transition"
              >
                Featured
              </a>
              <a
                href="#why-us"
                className="text-foreground hover:text-primary transition"
              >
                Why Us
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition"
              >
                Contact
              </a>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Experience Luxury
                <span className="text-primary"> in Motion</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover our exclusive collection of luxury, sports, and
                electric vehicles. Find your perfect car and elevate your
                driving experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2 font-semibold">
                  Explore Collection
                  <ChevronRight size={20} />
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition font-semibold">
                  Book Test Drive
                </button>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop"
                  alt="Luxury sports car"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Browse Our Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different types of vehicles tailored to your lifestyle and
              preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SUV Category */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605559424843-9e4c3ff86b08?w=500&h=400&fit=crop"
                  alt="SUV vehicles"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">SUV</h3>
                <p className="text-gray-600 mb-4">
                  Spacious, powerful, and versatile vehicles perfect for
                  families and adventures.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition">
                  View Models <ChevronRight size={20} />
                </div>
              </div>
            </div>

            {/* Sports Category */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=400&fit=crop"
                  alt="Sports cars"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Sports
                </h3>
                <p className="text-gray-600 mb-4">
                  High-performance machines designed for speed, style, and
                  exhilaration.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition">
                  View Models <ChevronRight size={20} />
                </div>
              </div>
            </div>

            {/* Electric Category */}
            <div className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590362891990-f8023e937390?w=500&h=400&fit=crop"
                  alt="Electric vehicles"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Electric
                </h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly, silent, and cutting-edge technology for the
                  future.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition">
                  View Models <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Luxury Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked premium vehicles showcasing the best of engineering and
              design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Featured Car 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-72 bg-gray-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=500&fit=crop"
                  alt="Tesla Model S Plaid"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Tesla Model S Plaid
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    (248 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience the pinnacle of electric performance with 0-60 mph
                  in 1.99 seconds and maximum efficiency.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      0-60 MPH
                    </p>
                    <p className="text-lg font-bold text-foreground">1.99s</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      Range
                    </p>
                    <p className="text-lg font-bold text-foreground">405 mi</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      Price
                    </p>
                    <p className="text-lg font-bold text-primary">$99.9K</p>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
                  View Details
                </button>
              </div>
            </div>

            {/* Featured Car 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-72 bg-gray-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1609687643095-e58208899c78?w=600&h=500&fit=crop"
                  alt="Porsche 911 Turbo"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Luxury
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Porsche 911 Turbo S
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    (312 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  German engineering at its finest with breathtaking performance
                  and timeless design excellence.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      0-60 MPH
                    </p>
                    <p className="text-lg font-bold text-foreground">2.6s</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      Horsepower
                    </p>
                    <p className="text-lg font-bold text-foreground">640 hp</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">
                      Price
                    </p>
                    <p className="text-lg font-bold text-primary">$219K</p>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Featured Car 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition md:max-w-2xl">
            <div className="md:flex">
              <div className="h-72 md:h-auto md:w-96 bg-gray-200 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=600&h=500&fit=crop"
                  alt="BMW X7"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Premium SUV
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    BMW X7 M60i
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      (189 reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Ultimate luxury SUV with sophisticated comfort, advanced
                    technology, and superior performance.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">
                        0-60 MPH
                      </p>
                      <p className="text-lg font-bold text-foreground">4.3s</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">
                        Seats
                      </p>
                      <p className="text-lg font-bold text-foreground">7</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">
                        Price
                      </p>
                      <p className="text-lg font-bold text-primary">$149K</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose LuxeDrive?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to excellence in every aspect of your automotive
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <Shield size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Every vehicle undergoes rigorous inspection and certification
                  to ensure the highest standards of quality and performance.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <Zap size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Trusted Service
                </h3>
                <p className="text-gray-600">
                  Our expert team provides comprehensive support, from vehicle
                  selection to maintenance and after-sales service.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600">
                  Get the best value for your investment with competitive
                  pricing, flexible financing, and exclusive deals for our
                  clients.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                  <Users size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Customer Experience
                </h3>
                <p className="text-gray-600">
                  Personalized service, transparent communication, and a
                  seamless experience from browsing to ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with CTA */}
      <footer id="contact" className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <span className="text-xl font-bold">LuxeDrive</span>
              </div>
              <p className="text-gray-300 text-sm">
                Your premier destination for luxury and sports cars. Experience
                automotive excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#categories"
                    className="hover:text-primary transition"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#featured" className="hover:text-primary transition">
                    Featured Cars
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-primary transition">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="flex-shrink-0 mt-1 text-primary"
                  />
                  <div>
                    <p className="text-sm text-gray-300">Call us anytime</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="flex-shrink-0 mt-1 text-primary" />
                  <div>
                    <p className="text-sm text-gray-300">Email us</p>
                    <p className="font-semibold">info@luxedrive.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="flex-shrink-0 mt-1 text-primary"
                  />
                  <div>
                    <p className="text-sm text-gray-300">Visit us</p>
                    <p className="font-semibold">123 Auto Lane, NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Car?
            </h3>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
              Don't wait! Schedule your test drive today or contact our
              specialists for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2">
                Book a Test Drive
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 LuxeDrive. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
