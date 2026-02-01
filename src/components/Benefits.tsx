import { Clock, Shield, Award, Users, Wallet, Headphones } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Быстрый выезд",
      description: "Мастер приедет в течение 2 часов после заявки",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Даём гарантию 1 год на все выполненные работы",
    },
    {
      icon: Award,
      title: "Опытные мастера",
      description: "Все специалисты с опытом работы от 5 лет",
    },
    {
      icon: Users,
      title: "Своя команда",
      description: "Штатные сотрудники, а не субподрядчики",
    },
    {
      icon: Wallet,
      title: "Честные цены",
      description: "Фиксированные цены без скрытых доплат",
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Принимаем заявки круглосуточно без выходных",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Почему мы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Выбирают нас{" "}
              <span className="text-gradient">более 5000 клиентов</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              За 7 лет работы мы собрали более 50 000 единиц мебели и заработали
              репутацию надежного партнера. Наши клиенты рекомендуют нас друзьям
              и возвращаются снова.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  7+
                </div>
                <div className="text-sm text-muted-foreground">лет работы</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">
                  собранной мебели
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  довольных клиентов
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-6 card-elevated border border-border group hover:border-accent/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
