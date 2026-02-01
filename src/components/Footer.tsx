import { Wrench } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <Wrench className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-lg text-background">
              Точка Сборки
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#services"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Услуги
            </a>
            <a
              href="#benefits"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Преимущества
            </a>
            <a
              href="#testimonials"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Контакты
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-background/50 text-sm">
            © {currentYear} Точка Сборки. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
