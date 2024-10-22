import React, { useState } from 'react';
import { Play, Database, Zap, Shield, ChevronRight, Menu, X } from 'lucide-react';

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="text-gray-300 hover:text-white transition duration-300">{children}</a>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-blue-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
    <Icon className="text-yellow-500 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const CTAButton = ({ children, primary = false, onClick }: { children: React.ReactNode; primary?: boolean; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${
      primary
        ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
        : 'bg-blue-700 text-white hover:bg-blue-600'
    }`}
  >
    {children}
  </button>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <header className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">DataStream</div>
          <div className="hidden md:flex space-x-6">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </div>
          <div className="hidden md:block">
            <CTAButton>Get Started</CTAButton>
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
            <CTAButton>Get Started</CTAButton>
          </div>
        </div>
      )}

      <main>
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock the Power of<br />
            <span className="text-gradient">Video Data</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Access high-quality, licensed video data to fuel your AI and machine learning projects. Accelerate innovation and drive business growth with DataStream.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <CTAButton primary>Start Free Trial</CTAButton>
            <CTAButton>
              <span className="flex items-center">
                Watch Demo <Play size={16} className="ml-2" />
              </span>
            </CTAButton>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose DataStream?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Database} 
              title="Vast Data Library" 
              description="Access millions of high-quality, diverse video clips for your AI training needs."
            />
            <FeatureCard 
              icon={Zap} 
              title="Real-time Processing" 
              description="Stream and process video data in real-time for immediate insights and analysis."
            />
            <FeatureCard 
              icon={Shield} 
              title="Secure & Compliant" 
              description="Rest easy with our enterprise-grade security and full licensing compliance."
            />
          </div>
        </section>

        <section className="bg-blue-800 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our API and SDK make it easy to integrate DataStream into your existing workflows. Start leveraging the power of video data in minutes, not months.
                </p>
                <a href="#" className="text-yellow-500 font-semibold hover:underline inline-flex items-center">
                  Explore Documentation <ChevronRight size={20} className="ml-2" />
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Integration" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['TechCorp', 'AIVision', 'DataMinds', 'NeuralSoft', 'CloudAI'].map((company) => (
              <div key={company} className="text-gray-400 text-xl font-semibold">{company}</div>
            ))}
          </div>
        </section>

        <section className="bg-blue-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Supercharge Your AI?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the data revolution and unlock the full potential of your AI and machine learning projects with DataStream.
            </p>
            <CTAButton primary>Get Started Now</CTAButton>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DataStream</h3>
              <p className="text-gray-400">Empowering AI through advanced video data solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Use Cases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-gray-400">
            © 2023 DataStream. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;