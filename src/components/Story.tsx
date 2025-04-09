import React from 'react';
// Importa iconos que podrías usar
import { Building, TrendingUp, Target, CheckCircle, Image as ImageIcon } from 'lucide-react';
import logo from "../assets/images/joellogo.jpg";

const Story: React.FC = () => {
  return (
    // Contenedor principal con fondo gradiente y padding estándar
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título Principal de la Sección */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Nuestra Trayectoria</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un viaje de pasión, crecimiento y compromiso con el futuro del béisbol.
          </p>
        </div>

        {/* --- Inicio de la Historia (Imagen Izquierda / Texto Derecha) --- */}
        <section className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Placeholder de Imagen */}
          <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-lg flex items-center justify-center order-1">
             {/* ** REEMPLAZAR con <img /> ** */}
             <img
                src={logo} // Asegúrate que 'logo' es la variable correcta para tu joellogo.jpg
                alt="Logo Academia Orlando de León"
                // Clases añadidas para ajustar y redondear la imagen:
                className="w-full h-full object-cover rounded-xl"
              />
             {/* <img src="/path/to/inicio-image.jpg" alt="Inicios de la academia" className="w-full h-full object-cover rounded-xl"/> */}
          </div>
          {/* Contenido de Texto */}
          <div className="order-2">
            <span className="inline-flex items-center bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm mb-4">
              <Building className="h-4 w-4 mr-2" />
              El Comienzo (2010)
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">Nuestros Primeros Pasos</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fundada en 2010, nuestra academia nació de una visión simple pero poderosa: ofrecer entrenamiento de béisbol de calidad superior a jóvenes atletas, inculcando valores fundamentales como dedicación, trabajo en equipo y espíritu deportivo.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Comenzamos con recursos modestos pero con una gran pasión, enfocándonos en construir una base sólida para el futuro.
            </p>
          </div>
        </section>

        {/* --- Crecimiento (Texto Izquierda / Imagen Derecha) --- */}
        <section className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de Texto */}
          <div className="order-2 md:order-1"> {/* Cambia orden en md */}
             <span className="inline-flex items-center bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Expansión y Desarrollo
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">Creciendo Juntos</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              A lo largo de los años, hemos reinvertido en nuestra academia, expandiendo nuestras instalaciones, modernizando equipos e incorporando programas innovadores. Este crecimiento nos ha permitido impactar positivamente a cientos de jóvenes peloteros.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Hemos visto a nuestros jugadores florecer, desarrollar habilidades excepcionales y alcanzar sus metas, incluyendo jugar a niveles universitarios y profesionales.
            </p>
          </div>
           {/* Placeholder de Imagen */}
           <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-lg flex items-center justify-center order-1 md:order-2"> {/* Cambia orden en md */}
             {/* ** REEMPLAZAR con <img /> ** */}
             <ImageIcon className="h-24 w-24 text-slate-400" strokeWidth={1} />
             {/* <img src="/path/to/crecimiento-image.jpg" alt="Instalaciones expandidas" className="w-full h-full object-cover rounded-xl"/> */}
          </div>
        </section>

        {/* --- Misión Actual (Imagen Izquierda / Texto Derecha) --- */}
        <section className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Placeholder de Imagen */}
           <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-lg flex items-center justify-center order-1">
             {/* ** REEMPLAZAR con <img /> ** */}
             <ImageIcon className="h-24 w-24 text-slate-400" strokeWidth={1} />
             {/* <img src="/path/to/mision-image.jpg" alt="Jugador entrenando" className="w-full h-full object-cover rounded-xl"/> */}
          </div>
          {/* Contenido de Texto */}
          <div className="order-2">
             <span className="inline-flex items-center bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm mb-4">
              <Target className="h-4 w-4 mr-2" />
              Nuestro Compromiso Hoy
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">Visión de Futuro</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Hoy, mantenemos firme nuestro compromiso con la excelencia. Nos centramos en el desarrollo integral de cada jugador, no solo perfeccionando su técnica y táctica en el béisbol, sino también forjando carácter, liderazgo y resiliencia.
            </p>
             <p className="text-slate-600 leading-relaxed">
              Preparamos a nuestros atletas para triunfar tanto dentro como fuera del diamante, equipándolos con habilidades que perduran toda la vida.
            </p>
          </div>
        </section>

        {/* --- Sección de Logros Destacada --- */}
        <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 sm:p-12 rounded-xl shadow-md border border-blue-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 text-center sm:text-left">Nuestros Hitos</h3>
          <ul className="space-y-4">
            {/* Ítem de Logro 1 */}
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Más de 100 jugadores</span> han avanzado a programas de béisbol universitario gracias a nuestra formación.
              </span>
            </li>
             {/* Ítem de Logro 2 */}
             <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-slate-700 leading-relaxed">
                <span className="font-semibold">15 talentosos jugadores</span> seleccionados en el draft de las Grandes Ligas (MLB).
              </span>
            </li>
             {/* Ítem de Logro 3 */}
             <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-slate-700 leading-relaxed">
                Reconocidos como <span className="font-semibold">Centro Regional de Entrenamiento del Año</span> en 2022.
              </span>
            </li>
            {/* Ítem de Logro 4 */}
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
               <span className="text-slate-700 leading-relaxed">
                Galardonados con el <span className="font-semibold">Premio al Impacto Comunitario</span> en 2023 por nuestras iniciativas sociales.
               </span>
            </li>
             {/* Agrega más logros si es necesario */}
          </ul>
        </section>

      </div> {/* Fin max-w-7xl */}
    </div> // Fin contenedor principal
  );
};

export default Story;