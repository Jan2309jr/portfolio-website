import { Brain, Code, Database, LineChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and intelligent systems using advanced ML algorithms.",
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using statistical analysis and visualization.",
    },
    {
      icon: Code,
      title: "Deep Learning",
      description: "Developing neural networks for computer vision, NLP, and advanced AI applications.",
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Processing and analyzing large-scale datasets for actionable business intelligence.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to solve complex problems with AI
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in group ${
                index === 1 ? "bg-gradient-to-br from-primary/20 to-accent/20" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-effect group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {/* Decorative sparkles */}
                {index === 1 && (
                  <>
                    <span className="absolute -top-2 -right-2 text-primary text-xl">✨</span>
                    <span className="absolute -bottom-1 -left-1 text-accent text-sm">✨</span>
                  </>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
