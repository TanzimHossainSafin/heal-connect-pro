
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Activity, Phone } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "General Medicine",
      description: "Comprehensive primary care including cold, flu, infections, and routine health concerns.",
      features: ["Same-day appointments", "Prescription refills", "Health screenings"]
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Professional mental health support including therapy, counseling, and psychiatric care.",
      features: ["Licensed therapists", "Anxiety & depression", "Stress management"]
    },
    {
      icon: Activity,
      title: "Chronic Care",
      description: "Ongoing management of chronic conditions with personalized treatment plans.",
      features: ["Diabetes management", "Hypertension care", "Regular monitoring"]
    },
    {
      icon: Phone,
      title: "Urgent Care",
      description: "Immediate medical attention for non-emergency urgent health situations.",
      features: ["24/7 availability", "Quick response", "Emergency referrals"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access a full range of medical services from board-certified physicians, 
            all from the comfort and privacy of your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
