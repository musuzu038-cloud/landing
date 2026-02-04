import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img src={logo} alt="Точка Сборки" className="h-12 w-auto" />
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

        {/* Requisites */}
        <div className="mt-8 pt-6 border-t border-background/20 text-center">
          <p className="text-background/50 text-sm">
            ИНН 772385391246 | ОГРН 325774600677132
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
