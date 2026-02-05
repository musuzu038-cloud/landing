import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, RefreshCw, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { question: `${num1} + ${num2} = ?`, answer: num1 + num2 };
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: "Ошибка",
        description: "Неправильный ответ на вопрос. Попробуйте ещё раз.",
        variant: "destructive",
      });
      refreshCaptcha();
      return;
    }

    // Validate inputs
    if (!formData.name.trim() || formData.name.length > 100) {
      toast({
        title: "Ошибка",
        description: "Введите корректное имя (до 100 символов)",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.length > 50) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона",
        variant: "destructive",
      });
      return;
    }

    if (formData.message.length > 1000) {
      toast({
        title: "Ошибка",
        description: "Сообщение слишком длинное (максимум 1000 символов)",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Успешно!",
        description: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      });

      setFormData({ name: "", phone: "", message: "" });
      setCaptchaInput("");
      refreshCaptcha();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Позвоните нам по телефону.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 910 525-60-98",
      href: "tel:+79105256098",
    },
    {
      icon: Mail,
      label: "Email",
      value: "fandangomedia@bk.ru",
      href: "mailto:fandangomedia@bk.ru",
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "г. Москва, ул. Артюхиной 26А",
      href: null,
    },
    {
      icon: Clock,
      label: "Режим работы",
      value: "Ежедневно, 8:00 - 22:00",
      href: null,
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@TochkasborkiTG_bot",
      href: "https://t.me/TochkasborkiTG_bot",
    },
  ];

  return (
    <section id="contact" className="section-padding hero-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="text-primary-foreground">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Контакты
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-md">
              Оставьте заявку или позвоните нам — мы ответим на все вопросы и
              рассчитаем стоимость работ
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Оставить заявку
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Иван Иванов"
                  required
                  maxLength={100}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="+7 (___) ___-__-__"
                  required
                  maxLength={50}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Опишите какая мебель и какие работы нужны..."
                  maxLength={1000}
                />
              </div>

              {/* Captcha */}
              <div>
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Проверка: {captcha.question}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Ваш ответ"
                    required
                  />
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="px-3 py-3 rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="Обновить вопрос"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
                <Send className="w-5 h-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
