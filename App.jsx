
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Github, Mail } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import HomePage from '@/pages/HomePage.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#escolaridad', label: 'Escolaridad' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <>
      <Helmet>
        <title>Vivian Yael Higareda Torres - Portfolio</title>
        <meta name="description" content="Portfolio profesional de Vivian Yael Higareda Torres, Desarrolladora en Sistemas Electrónicos Inteligentes especializada en Python, JavaScript, CSS y HTML" />
      </Helmet>
      
      <Toaster />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200">
              VYHT
            </a>
            
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="md:hidden transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden border-t border-border"
              >
                <ul className="flex flex-col gap-2 py-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
      
      <main>
        <HomePage />
      </main>
      
      <footer className="bg-card border-t border-border py-12">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vivian Yael Higareda Torres. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Política de privacidad
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contacto@ejemplo.com" 
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
