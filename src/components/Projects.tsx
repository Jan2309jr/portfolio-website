import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectHomy from "@/assets/project-homy.png";
import projectAnakstera from "@/assets/project-anakstera.png";
import projectBroll from "@/assets/project-broll.png";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Analytics System",
      category: "Machine Learning",
      description: "Built a predictive model using Python and scikit-learn to forecast trends with 92% accuracy.",
      image: projectAnakstera,
      tag: "Featured",
    },
    {
      title: "Computer Vision App",
      category: "Deep Learning",
      description: "Developed an image classification system using CNNs and TensorFlow for real-time object detection.",
      image: projectHomy,
      tag: "Featured",
    },
    {
      title: "NLP Chatbot",
      category: "Natural Language Processing",
      description: "Created an intelligent chatbot using transformers and BERT for customer support automation.",
      image: projectBroll,
      tag: "Featured",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my machine learning projects that demonstrate innovation in AI and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge className="bg-gradient-to-r from-primary to-accent border-none">
                    {project.tag}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-effect rounded-full px-8"
          >
            See All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
