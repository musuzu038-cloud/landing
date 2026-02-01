import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Москва",
      content:
        "Заказывала сборку кухни Hoff. Мастер приехал вовремя, собрал всё аккуратно за 4 часа. Очень довольна результатом, рекомендую!",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      role: "Подольск",
      content:
        "Обращался для разборки мебели при переезде. Всё промаркировали, упаковали. На новом месте собрали как было. Отличный сервис!",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      role: "Химки",
      content:
        "Сломался механизм на шкафу-купе. Мастер быстро определил проблему и заменил на месте. Цена адекватная, работа качественная.",
      rating: 5,
    },
    {
      name: "Михаил Иванов",
      role: "Мытищи",
      content:
        "Собирали детскую комнату — кровать-чердак, шкаф и стол. Всё сделали за полдня, ребенок в восторге!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-muted-foreground">
            Нам доверяют тысячи клиентов по всей Москве и Московской области
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 card-elevated border border-border relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
