import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Lock,
  BarChart,
} from "lucide-react";

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative bg-blue-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-in">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 slide-in stagger-1">
            Comprehensive software solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid with 3D Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-3d bg-white p-8 rounded-xl shadow-lg slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Modern Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-in">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-3d bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold animate-float">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business requirements.",
    features: [
      "Enterprise Applications",
      "Workflow Automation",
      "Integration Solutions",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: ["iOS Development", "Android Development", "React Native Apps"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud solutions for modern businesses.",
    features: [
      "Cloud Migration",
      "AWS & Azure Solutions",
      "Cloud Architecture",
    ],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database design and management solutions.",
    features: ["Database Design", "Performance Optimization", "Data Migration"],
  },
  {
    icon: Lock,
    title: "Security Services",
    description: "Comprehensive security solutions for your applications.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Security Implementation",
    ],
  },
  {
    icon: BarChart,
    title: "Analytics & BI",
    description: "Data analytics and business intelligence solutions.",
    features: [
      "Data Visualization",
      "Predictive Analytics",
      "Custom Dashboards",
    ],
  },
];

const steps = [
  {
    title: "Discovery",
    description: "Understanding your requirements and objectives",
  },
  {
    title: "Planning",
    description: "Designing the solution architecture",
  },
  {
    title: "Development",
    description: "Building your solution with best practices",
  },
  {
    title: "Delivery",
    description: "Testing, deployment, and ongoing support",
  },
];

export default Services;
