
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Austin, TX",
      content: "MediConnect saved me time and money. I was able to get a prescription for my sinus infection without leaving my house. The doctor was professional and thorough.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e740?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Robert Thompson",
      location: "Denver, CO", 
      content: "As someone with a chronic condition, having 24/7 access to healthcare professionals gives me peace of mind. The platform is easy to use and the doctors are excellent.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Lisa Park",
      location: "Seattle, WA",
      content: "I was skeptical about telemedicine, but MediConnect changed my mind. The video quality is excellent and I felt like I was getting the same care as an in-person visit.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied patients 
            have to say about their MediConnect experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
