import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', company: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ФОРМАТ 88</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('advantages')} className="text-foreground hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('process')} className="text-foreground hover:text-primary transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
            Связаться
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Мебель для коммерческих помещений
              </h1>
              <p className="text-xl text-muted-foreground">
                Проектируем и производим функциональную мебель для ресторанов, кафе, офисов и других коммерческих пространств
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg px-8">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/fcab7442-1fe6-4f67-bfcf-5f4d0c0684c1/files/624a417a-1695-4dbc-851c-32fa4be700a6.jpg"
                alt="Мебель для коммерческих помещений"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Преимущества работы с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Ruler',
                title: 'Индивидуальное проектирование',
                description: 'Разрабатываем мебель под конкретные требования вашего пространства и бизнес-процессов'
              },
              {
                icon: 'Award',
                title: 'Премиум качество',
                description: 'Используем только проверенные материалы и современные технологии производства'
              },
              {
                icon: 'Clock',
                title: 'Точные сроки',
                description: 'Строго соблюдаем договорные сроки изготовления и монтажа мебели'
              },
              {
                icon: 'Wrench',
                title: 'Полный цикл работ',
                description: 'От замера и проектирования до производства, доставки и установки'
              },
              {
                icon: 'Shield',
                title: 'Гарантия качества',
                description: 'Предоставляем официальную гарантию на все изделия и выполненные работы'
              },
              {
                icon: 'Users',
                title: 'Опытная команда',
                description: 'Более 15 лет опыта в производстве мебели для коммерческих объектов'
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover-scale transition-all bg-card">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Реализованные проекты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/fcab7442-1fe6-4f67-bfcf-5f4d0c0684c1/files/95992ac7-bb2c-440a-becc-2ee4874f2493.jpg',
                title: 'Ресторан "Панорама"',
                description: 'Полное оснащение ресторана на 120 посадочных мест',
                details: 'Столы, стулья, барные стойки, мебель для летней веранды'
              },
              {
                image: 'https://cdn.poehali.dev/files/7e8582e2-ee49-415e-93db-e67e802c1dfe.jpg',
                title: 'Кафе "Время и Место"',
                description: 'Современная мебель для кафе в торговом центре',
                details: 'Индивидуальный дизайн, использование натуральных материалов'
              },
              {
                image: 'https://cdn.poehali.dev/projects/fcab7442-1fe6-4f67-bfcf-5f4d0c0684c1/files/add45fec-f587-4e52-9f0b-4d7518d789a9.jpg',
                title: 'Офис IT-компании',
                description: 'Эргономичные рабочие места для 50 сотрудников',
                details: 'Столы, кресла, системы хранения, переговорные комнаты'
              },
              {
                image: 'https://cdn.poehali.dev/projects/fcab7442-1fe6-4f67-bfcf-5f4d0c0684c1/files/624a417a-1695-4dbc-851c-32fa4be700a6.jpg',
                title: 'Коворкинг "Пространство"',
                description: 'Мобильная трансформируемая мебель для коворкинга',
                details: 'Модульные системы, зоны отдыха, переговорные капсулы'
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>
                  <p className="text-foreground mb-2 font-medium">{project.description}</p>
                  <p className="text-muted-foreground text-sm">{project.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Процесс работы
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Консультация и замер',
                description: 'Выезжаем на объект, производим замеры, обсуждаем ваши требования и пожелания'
              },
              {
                step: '02',
                title: 'Разработка проекта',
                description: 'Создаём 3D-визуализацию и подробные чертежи, согласовываем все детали'
              },
              {
                step: '03',
                title: 'Производство',
                description: 'Изготавливаем мебель на собственном производстве с контролем качества на каждом этапе'
              },
              {
                step: '04',
                title: 'Доставка и монтаж',
                description: 'Доставляем и профессионально устанавливаем мебель на вашем объекте'
              },
              {
                step: '05',
                title: 'Гарантийное обслуживание',
                description: 'Предоставляем гарантию и оперативно решаем любые вопросы в процессе эксплуатации'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-primary">{item.step}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            Обсудим ваш проект?
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Оставьте заявку, и мы свяжемся с вами в течение рабочего дня
          </p>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                <Input 
                  required
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Название компании</label>
                <Input 
                  required
                  placeholder="ООО 'Рестораны'"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                <Input 
                  required
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Описание проекта</label>
                <Textarea 
                  required
                  placeholder="Расскажите о вашем проекте, какая мебель нужна, сроки..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold text-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold text-foreground">info@format88.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold text-foreground">Москва, ул. Мебельная, 88</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Формат 88. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
