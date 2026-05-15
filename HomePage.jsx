
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Code2, GraduationCap, Globe, User } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Formato de correo electrónico inválido';
    }
    if (!formData.message.trim()) errors.message = 'El mensaje es requerido';
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    toast.success('Mensaje enviado correctamente');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setFormErrors({});
  };

  const educationTimeline = [
    {
      level: "Universidad",
      institution: "Actualmente cursando en IIT-UACJ",
      details: "Av. del Charro 450 Nte, Colonia Universidad, C.P. 32310, en Ciudad Juárez, Chihuahua, México"
    },
    {
      level: "Preparatoria",
      institution: "CBTIS 114",
      details: "Graduada con título técnico de programación, Benjamín Herrera 2825, Parques Industriales, 32600 Juárez, Chih."
    },
    {
      level: "Secundaria",
      institution: "FEDERAL NO.1",
      details: "C. 16 de Septiembre 2000, Partido Romero, 32030 Juárez, Chih."
    },
    {
      level: "Primaria",
      institution: "VICENTE GUERRERO",
      details: "Av. Plutarco Elías Calles s/n, Fovissste, 32310 Juárez, Chih."
    },
    {
      level: "Jardín de Niños",
      institution: "CRI-CRI",
      details: "Manila s/n, Progresista, 32310 Juárez, Chih."
    }
  ];
  
  const technicalSkills = [
    "Python", 
    "JavaScript", 
    "CSS", 
    "HTML", 
    "Responsive Design", 
    "Git"
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center section-spacing pt-24 md:pt-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="order-2 lg:order-1"
            >
              <h1 className="mb-4">
                Vivian Yael Higareda Torres
              </h1>
              <h3 className="text-primary mb-4">
                Desarrolladora en Sistemas Electrónicos Inteligentes
              </h3>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-6 bg-muted/50 w-fit px-3 py-1.5 rounded-full text-sm font-medium border border-border/50">
                <User className="w-4 h-4" />
                <span>Nacionalidad: Mexicana</span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-prose">
                Graduada de la especialidad de programación, con idea de Python, JavaScript, CSS y HTML. En proceso de amplio conocimiento y comprometida a ello. Siempre dispuesta a aprender más.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <a href="#contacto">Contactar</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <a href="#escolaridad">Ver escolaridad</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-32 md:w-40 mx-auto">
                {/* Decorative background blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-xl transform rotate-6 scale-105"></div>
                
                {/* Profile Image - Original aspect ratio, smaller size */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-border/50 bg-muted">
                  <img 
                    src="https://horizons-cdn.hostinger.com/af26a982-4943-4b45-bf88-19ec7bd51be4/407e1ec15484a18b7deb89e2f04235de.png" 
                    alt="Foto de perfil de Vivian Yael Higareda Torres" 
                    className="w-full h-auto block" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Education / Escolaridad Section */}
      <section id="escolaridad" className="section-spacing bg-muted/50 border-y border-border/50">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.5 }} 
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2>Escolaridad</h2>
            </div>
            
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-10 pb-4">
              {educationTimeline.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-10">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-sm" />
                  
                  <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-sm font-semibold tracking-wide text-primary uppercase mb-1 block">
                      {item.level}
                    </span>
                    <h4 className="font-bold text-foreground mb-2">
                      {item.institution}
                    </h4>
                    <p className="text-muted-foreground text-sm flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{item.details}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="habilidades" className="section-spacing">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-12 text-center">Habilidades</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Technical Skills Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Competencias Técnicas</h3>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  {technicalSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg border border-border/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Idiomas</h3>
                </div>
                
                <ul className="space-y-6 mt-auto">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                    <div>
                      <span className="font-bold text-lg block">Español</span>
                      <span className="font-bold text-lg block mb-1">Inglés: C1</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Terminado los 8 niveles de adolescentes en el centro de lenguas de Cd. Juárez, y los 3 niveles de universidad en IIT-UACJ.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacto" className="section-spacing bg-muted/50 border-t border-border/50">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.5 }} 
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="mb-4">Contacto</h2>
              <p className="text-muted-foreground">
                ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Nombre
                  </Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleFormChange} 
                    className="w-full transition-all duration-200" 
                    placeholder="Tu nombre completo" 
                  />
                  {formErrors.name && <p className="text-sm text-destructive mt-1.5">{formErrors.name}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Correo electrónico
                  </Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleFormChange} 
                    className="w-full transition-all duration-200" 
                    placeholder="tu@email.com" 
                  />
                  {formErrors.email && <p className="text-sm text-destructive mt-1.5">{formErrors.email}</p>}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Mensaje
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleFormChange} 
                    rows={5} 
                    className="w-full transition-all duration-200 resize-none" 
                    placeholder="Escribe tu mensaje aquí..." 
                  />
                  {formErrors.message && <p className="text-sm text-destructive mt-1.5">{formErrors.message}</p>}
                </div>
                
                <Button type="submit" size="lg" className="w-full mt-2 transition-all duration-200 active:scale-[0.98]">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
