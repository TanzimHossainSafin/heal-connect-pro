
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      experience: "15+ years",
      rating: "4.9",
      education: "MD, Harvard Medical School",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
      specialties: ["Primary Care", "Preventive Medicine", "Chronic Disease"]
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      experience: "12+ years",
      rating: "4.8",
      education: "MD, Johns Hopkins",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
      specialties: ["Heart Disease", "Hypertension", "Cardiac Imaging"]
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Mental Health",
      experience: "10+ years",
      rating: "4.9",
      education: "PhD, Clinical Psychology",
      image: "https://images.unsplash.com/photo-1594824388853-d5d90e6c9dd4?auto=format&fit=crop&q=80&w=400&h=400",
      specialties: ["Anxiety", "Depression", "Stress Management"]
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified physicians brings decades of experience 
            and specialized expertise to provide you with the highest quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      ⭐ {doctor.rating}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-2">
                    {doctor.specialty}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {doctor.education} • {doctor.experience} experience
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, specialtyIndex) => (
                        <Badge 
                          key={specialtyIndex} 
                          variant="outline" 
                          className="text-xs border-blue-200 text-blue-700"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
