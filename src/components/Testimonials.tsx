import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Designing an amazing job designing a user-friendly and intuitive experience for our project. Her attention to detail and creativity made a huge difference!",
      author: "Haula Samer",
      role: "CEO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Haula",
    },
    {
      text: "Working with Sara was an absolute pleasure. She transformed our vision into a beautiful, functional design that exceeded our expectations.",
      author: "John Smith",
      role: "Product Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      text: "Sara's design expertise and attention to user experience helped us create an app that our users love. Highly recommended!",
      author: "Emily Chen",
      role: "Startup Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 md:p-12 animate-fade-in">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl mb-8 text-foreground leading-relaxed">
              {testimonials[currentIndex].text}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full glass-card p-1"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              size="icon"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-effect"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-primary to-accent"
                      : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              size="icon"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-effect"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
