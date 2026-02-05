import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
const Hero = () => {
  const features = ["Бесплатный выезд мастера", "Гарантия на все работы", "Работаем без выходных"];
  return <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium mb-10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              Более 5000 довольных клиентов
            </div>

            <h1 className="md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 text-3xl">
              Профессиональная сборка мебели{" "}
              <span className="text-gradient">с гарантией</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Сборка, разборка и ремонт любой мебели. Быстро, качественно и по
              доступным ценам. Работаем по всей Москве и области.
            </p>

            {/* Features List */}
            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-10">
              {features.map(feature => <li key={feature} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>)}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Заказать мастера
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">Узнать цены</a>
              </Button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent backdrop-blur-sm border border-primary-foreground/10" />
              
              {/* Stats Cards */}
              <div className="absolute top-8 left-8 bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl animate-float">
                <div className="text-3xl font-bold text-accent">7+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>

              <div className="absolute bottom-8 right-8 bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl animate-float" style={{
              animationDelay: "0.5s"
            }}>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">заказов в месяц</div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">средняя оценка</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;