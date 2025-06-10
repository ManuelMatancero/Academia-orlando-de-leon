import React from 'react';
// Importa iconos que podrías usar
import { Building, TrendingUp, Target, CheckCircle, Image as ImageIcon } from 'lucide-react';
import logo from "../assets/images/joellogo.png";
import childtoadult from "../assets/images/childtoadult.png"
import tomlb from "../assets/images/tomlb.png"

const Story: React.FC = () => {
  return (
    // Contenedor principal con fondo gradiente y padding estándar
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título Principal de la Sección */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">La Inspiradora Historia de la Academia de Béisbol Orlando de León</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            En el corazón del distrito municipal de San José de Matanzas, donde el sol caribeño baña los campos de arroz y los sueños de los jóvenes vuelan tan alto como una pelota recién bateada, nació en 2010 una institución que se convertiría en un faro de esperanza: la Academia de Béisbol Orlando de León. Forjada a partir de la pasión y la visión de un hombre, esta academia no solo ha pulido diamantes en el terreno de juego, sino que ha transformado vidas, ofreciendo un camino de disciplina y propósito a la juventud de escasos recursos de la región.
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
                className="bg-white w-full object-cover rounded-xl"
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
              El 2010 marcó el inicio de un sueño. Orlando de León, un hombre cuyo amor por el béisbol solo era superado por su compromiso con su comunidad, reunió a un grupo de jóvenes en un terreno improvisado. El polvo se levantaba con cada carrera y cada deslizamiento, pero en los ojos de esos primeros muchachos brillaba una determinación inquebrantable. Con recursos limitados, a menudo con guantes gastados y bates compartidos, Orlando de León no solo enseñaba los fundamentos del juego, sino que inculcaba valores de respeto, perseverancia y trabajo en equipo.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Joel López Taveras, un joven y talentoso entrenador, se unió a la visión de Orlando desde el principio. Juntos, formaron una dupla dinámica: Orlando con su experiencia y su figura paternal, y Joel con su energía y conocimiento técnico del juego. Las tardes en San José de Matanzas comenzaron a tener una nueva banda sonora: el sonido del bate contra la pelota y las voces de aliento de dos mentores dedicados a alejar a los jóvenes de los peligros de las drogas y los juegos de azar, enfocándolos en la disciplina del diamante.
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
              Los años siguientes fueron testigos del crecimiento exponencial de la academia, no solo en número de participantes, sino en su impacto social. La voz se corrió por las comunidades aledañas: la Academia Orlando de León era más que un simple programa de béisbol. Se convirtió en un refugio, un segundo hogar para muchos niños y jóvenes que encontraban en el deporte una salida a las dificultades económicas y sociales.
            </p>
            <p className="text-slate-600 leading-relaxed">
              La academia se convirtió en una familia. Los jugadores más veteranos apadrinaban a los más jóvenes, y el espíritu de camaradería trascendía el terreno de juego. Conscientes de las necesidades de sus pupilos, Orlando y Joel organizaron varias jornadas de ayudas benéficas. Con el apoyo de comerciantes locales y amigos del béisbol, lograron donar utilería deportiva y, de igual importancia, útiles escolares, reforzando el mensaje de que la educación y el deporte debían ir de la mano. La misión era clara: formar no solo buenos peloteros, sino también buenos ciudadanos.
            </p>
          </div>
           {/* Placeholder de Imagen */}
           <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-lg flex items-center justify-center order-1 md:order-2"> {/* Cambia orden en md */}
             {/* ** REEMPLAZAR con <img /> ** */}
             <ImageIcon className="h-24 w-24 text-slate-400" strokeWidth={1} />
             <img src={childtoadult} alt="Instalaciones expandidas" className="w-full h-full object-cover rounded-xl"/>
          </div>
        </section>

        {/* --- Misión Actual (Imagen Izquierda / Texto Derecha) --- */}
        <section className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Placeholder de Imagen */}
           <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-lg flex items-center justify-center order-1">
             {/* ** REEMPLAZAR con <img /> ** */}
             <ImageIcon className="h-24 w-24 text-slate-400" strokeWidth={1} />
             <img src={tomlb} alt="Jugador entrenando" className="w-full h-full object-cover rounded-xl"/>
          </div>
          {/* Contenido de Texto */}
          <div className="order-2">
             <span className="inline-flex items-center bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm mb-4">
              <Target className="h-4 w-4 mr-2" />
              Nuestro Compromiso Hoy
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">Visión de Futuro</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Hoy en día, la Academia de Béisbol Orlando de León sigue siendo un pilar fundamental en San José de Matanzas. Con Orlando de León aún al timón como dirigente y Joel López Taveras como entrenador y asesor principal, la institución mira hacia el futuro con la misma pasión que la vio nacer. La visión es expandir su alcance, mejorar sus instalaciones y continuar brindando un apoyo integral a sus jóvenes.
            </p>
             <p className="text-slate-600 leading-relaxed">
              El objetivo sigue siendo el mismo: mantener el enfoque de la juventud en la disciplina del béisbol, utilizar el deporte como una herramienta de transformación social y seguir puliendo los diamantes en bruto de la República Dominicana, recordándoles a todos que, sin importar cuán humilde sea el comienzo, con dedicación y una comunidad que te respalda, se puede llegar a las Grandes Ligas de la vida.
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
                <span className="font-semibold">Más de 20 jugadores</span> han avanzado a programas de béisbol universitario gracias a nuestra formación.
              </span>
            </li>
             {/* Ítem de Logro 2 */}
             <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-slate-700 leading-relaxed">
                <span className="font-semibold">5 talentosos jugadores</span> seleccionados para jugar en las Ligas Menores de la MLB.
              </span>
            </li>
             {/* Ítem de Logro 3 */}
             <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-slate-700 leading-relaxed">
                Reconocidos como <span className="font-semibold">Una de las mejores academias de la zona</span>.
              </span>
            </li>
            {/* Ítem de Logro 4 */}
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
               <span className="text-slate-700 leading-relaxed">
                Galardonados con el <span className="font-semibold">Premio al Impacto Comunitario</span> por nuestras iniciativas sociales.
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