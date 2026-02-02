import work1 from "@/assets/gallery/work1.jpg";
import work2 from "@/assets/gallery/work2.jpg";
import work3 from "@/assets/gallery/work3.jpg";
import work4 from "@/assets/gallery/work4.jpg";
import work5 from "@/assets/gallery/work5.jpg";
import work6 from "@/assets/gallery/work6.jpg";

const Gallery = () => {
  const images = [
    { src: work1, alt: "Точные замеры", title: "Точные замеры" },
    { src: work2, alt: "Профессиональный инструмент", title: "Профессиональный инструмент" },
    { src: work3, alt: "Качественная фурнитура", title: "Качественная фурнитура" },
    { src: work4, alt: "Материалы", title: "Материалы" },
    { src: work5, alt: "Современное оборудование", title: "Современное оборудование" },
    { src: work6, alt: "Проектирование", title: "Проектирование" },
  ];

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Наша работа
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход к каждому проекту — от замеров до финальной сборки
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-primary-foreground font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
