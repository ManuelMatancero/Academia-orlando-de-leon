import React from 'react';
import { Landmark, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// --- IMPORTA TUS RECURSOS ---
import logo from "../assets/images/joellogo.png";
import childtoadult from "../assets/images/childtoadult.png";
import tomlb from "../assets/images/tomlb.png";
// import heroVideo from "../assets/videos/baseball-hero.mp4"; 

const Story: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-dusty-beige text-text-dark">
      
      {/* --- HERO CON VIDEO DE FONDO --- */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-50"></div>
        <video
          // src={heroVideo}
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-20 p-4">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Forjando Futuro, Bate a Bate
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Más que pelota: Formando estrellas del mañana y hombres de bien.
          </motion.p>
        </div>
        <div className="absolute bottom-10 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>
      
      {/* --- INTRODUCCIÓN --- */}
      <section className="max-w-4xl mx-auto text-center py-20 lg:py-28 px-4">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Landmark className="h-12 w-12 mx-auto text-tobacco-brown mb-6" />
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
            Nuestra Razón de Ser
          </h2>
          <p className="text-lg text-text-dark/80 leading-relaxed">
            Aquí en San José de Matanzas, el béisbol es más que un juego; es una salida y una esperanza. Nuestra academia nació de la pasión de Orlando de León por la pelota y su compromiso con la juventud. Ofrecemos un camino de disciplina y trabajo duro para que nuestros muchachos tengan un futuro brillante, lejos de los malos pasos.
          </p>
        </motion.div>
      </section>
      
      {/* --- LÍNEA DE TIEMPO CON STICKY SCROLL --- */}
      <main className="w-full max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 px-4">
        {/* Columna de Imagen (se pega) */}
        <div className="hidden lg:block lg:sticky top-0 h-screen">
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                className="w-[80%] aspect-[4/5] rounded-xl shadow-2xl bg-gray-200 relative overflow-hidden"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.8}}
                viewport={{ once: true }}
              >
                <img src={childtoadult} alt="Joven promesa" className="w-full h-full object-cover grainy-image" />
              </motion.div>
            </div>
        </div>
        
        {/* Columna de Texto (se desplaza) */}
        <div className="lg:py-[50vh]">
          {/* Evento 1 */}
          <motion.div className="mb-24" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <p className="font-script text-3xl text-muted-gold mb-2">2010</p>
            <h3 className="text-3xl font-heading font-bold mb-4">El Primer Lanzamiento</h3>
            <div className="space-y-4 text-text-dark/80 leading-relaxed">
              <p>Todo comenzó con un sueño y la pura voluntad de ayudar. En un terreno prestado y con guantes usados, Orlando de León y Joel López Taveras crearon un lugar seguro para los jóvenes, enseñando los fundamentos del béisbol y los valores del respeto y el trabajo en equipo.</p>
            </div>
            <img src={logo} alt="Logo" className="lg:hidden mt-8 w-full rounded-lg shadow-xl grainy-image" />
          </motion.div>
          
          {/* Evento 2 */}
          <motion.div className="mb-24" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <p className="font-script text-3xl text-muted-gold mb-2">2012-2018</p>
            <h3 className="text-3xl font-heading font-bold mb-4">Creciendo como Familia</h3>
            <div className="space-y-4 text-text-dark/80 leading-relaxed">
              <p>La voz se corrió y la academia se convirtió en un segundo hogar para muchos. El apoyo de comerciantes y amigos nos permitió organizar ayudas para donar utilería y útiles escolares. La misión siempre ha sido doble: formar buenos peloteros y también buenos estudiantes.</p>
            </div>
             <img src={childtoadult} alt="Crecimiento" className="lg:hidden mt-8 w-full rounded-lg shadow-xl grainy-image" />
          </motion.div>

          {/* Evento 3 */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <p className="font-script text-3xl text-muted-gold mb-2">Hoy</p>
            <h3 className="text-3xl font-heading font-bold mb-4">El Futuro es Ahora</h3>
            <div className="space-y-4 text-text-dark/80 leading-relaxed">
              <p>Bajo la guía de Orlando y Joel, seguimos con la misma pasión del primer día. La meta sigue firme: darle a cada joven la oportunidad de triunfar y de usar la disciplina del deporte para ser un ganador, sea en las Grandes Ligas o en la vida.</p>
            </div>
             <img src={tomlb} alt="Futuro" className="lg:hidden mt-8 w-full rounded-lg shadow-xl grainy-image" />
          </motion.div>
        </div>
      </main>
      
      {/* --- MURO DE HONOR --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Award className="h-12 w-12 mx-auto text-muted-gold mb-6" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">Muro de Honor</h2>
            <p className="text-lg text-text-dark/80 leading-relaxed mb-16">
              Nuestro orgullo no solo reside en las victorias, sino en el futuro que ayudamos a construir.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div className="bg-dusty-beige p-6 rounded-lg shadow-lg border-b-4 border-tobacco-brown text-left" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-5xl font-heading font-bold text-tobacco-brown">20+</p>
              <h4 className="font-bold mt-2">Atletas Universitarios</h4>
              <p className="text-sm text-text-dark/70 mt-1">Jóvenes que se ganaron una beca con su talento y disciplina.</p>
            </motion.div>
             <motion.div className="bg-dusty-beige p-6 rounded-lg shadow-lg border-b-4 border-tobacco-brown text-left" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.1 }}>
              <p className="text-5xl font-heading font-bold text-tobacco-brown">5</p>
              <h4 className="font-bold mt-2">Firmas Profesionales</h4>
              <p className="text-sm text-text-dark/70 mt-1">Muchachos que hoy luchan por su sueño en el béisbol profesional.</p>
            </motion.div>
             <motion.div className="bg-dusty-beige p-6 rounded-lg shadow-lg border-b-4 border-tobacco-brown text-left" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
              <p className="text-5xl font-heading font-bold text-tobacco-brown">1º</p>
              <h4 className="font-bold mt-2">Impacto Regional</h4>
              <p className="text-sm text-text-dark/70 mt-1">Considerada un pilar fundamental para la juventud de la región.</p>
            </motion.div>
             <motion.div className="bg-dusty-beige p-6 rounded-lg shadow-lg border-b-4 border-tobacco-brown text-left" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.3 }}>
              <p className="text-5xl font-heading font-bold text-tobacco-brown">100s</p>
              <h4 className="font-bold mt-2">Vidas Transformadas</h4>
              <p className="text-sm text-text-dark/70 mt-1">Cientos de jóvenes que encontraron un camino y un propósito.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Story;