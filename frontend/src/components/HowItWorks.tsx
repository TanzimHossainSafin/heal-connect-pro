
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Video, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      step: "01",
      title: "Book Appointment",
      description: "Choose your preferred time slot and describe your symptoms through our secure platform."
    },
    {
      icon: Video,
      step: "02", 
      title: "Video Consultation",
      description: "Meet with a licensed physician via secure video call from anywhere, anytime."
    },
    {
      icon: Heart,
      step: "03",
      title: "Get Treatment",
      description: "Receive prescriptions, treatment plans, and follow-up care recommendations instantly."
    }
  ];
  const navigate = useNavigate();
  const handelSubmit = (type: string) => {
    if(type === "Book Appointment") {       
      navigate("/appointment"); 
    }
    if(type === "Video Consultation") {
      navigate("/video-consultation"); 
    }
    if(type === "Get Treatment") {
      navigate("/get-treatment"); 
    }
  }

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting quality healthcare has never been easier. Follow these simple steps 
            to connect with a doctor today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-16">
              <div className="w-24 h-0.5 bg-blue-200"></div>
              <div className="w-24 h-0.5 bg-blue-200"></div>
            </div>
          </div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                 onClick={() => handelSubmit(step.title)}
                 key={index}
                 className="relative bg-white border-2 border-blue-100 hover:border-blue-300 transition-colors duration-300 cursor-pointer"
               >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-100 text-blue-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
