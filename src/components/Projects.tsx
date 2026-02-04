import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";

const Projects = () => {
  const projects = [
    { src: project1, alt: "Сборка кухни", title: "Кухня", orderNumber: "Заказ #4827" },
    { src: project2, alt: "Сборка кровати", title: "Кровать", orderNumber: "Заказ #3156" },
    { src: project3, alt: "Сборка кухни", title: "Кухня", orderNumber: "Заказ #5093" },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Портфолио
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши последние объекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных работ по сборке мебели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-primary-foreground/70 text-sm">{project.orderNumber}</span>
                  <h3 className="text-primary-foreground font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
