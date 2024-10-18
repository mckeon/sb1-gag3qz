import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Shield } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions to meet your unique business needs and challenges."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Application Development",
      description: "Responsive and scalable web applications using the latest technologies."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Design & Management",
      description: "Efficient database solutions for optimal data storage and retrieval."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure setup and management."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Consulting",
      description: "Protect your digital assets with our comprehensive security solutions."
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a wide range of software development and consulting services to help your business thrive in the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="bg-indigo-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Need a custom solution?</h2>
        <p className="text-indigo-800 mb-6">
          Our team of experts is ready to tackle your unique challenges. Let's discuss your project and find the perfect solution for your business.
        </p>
        <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">
          Get a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default Services;