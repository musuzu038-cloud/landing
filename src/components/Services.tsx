import { Package, Hammer, Settings, Sofa, Building2, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Сборка мебели",
      description: "Профессиональная сборка любой мебели: кухни, шкафы-купе, детские комнаты, офисная мебель.",
      price: "от 1500 ₽",
    },
    {
      icon: Hammer,
      title: "Разборка мебели",
      description: "Аккуратная разборка для переезда или хранения с маркировкой всех деталей.",
      price: "от 750 ₽",
    },
    {
      icon: Settings,
      title: "Ремонт мебели",
      description: "Замена фурнитуры, ремонт механизмов, реставрация поврежденных элементов.",
      price: "от 1500 ₽",
    },
    {
      icon: Sofa,
      title: "Сборка диванов",
      description: "Сборка мягкой мебели любой сложности: диваны, кресла, кровати с подъемным механизмом.",
      price: "от 1500 ₽",
    },
    {
      icon: Building2,
      title: "Офисная мебель",
      description: "Сборка и установка офисной мебели, перегородок, рабочих станций.",
      price: "от 1500 ₽",
    },
    {
      icon: Truck,
      title: "Помощь при переезде",
      description: "Полный комплекс: разборка, упаковка, транспортировка, сборка на новом месте.",
      price: "договорная",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Все виды работ с мебелью
          </h2>
          <p className="text-lg text-muted-foreground">
            Предоставляем полный спектр услуг по сборке, разборке и ремонту
            мебели любой сложности
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-elevated border border-border hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-accent">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
