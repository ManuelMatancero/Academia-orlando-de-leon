import React from 'react';
// Importa los iconos necesarios
import { Heart, DollarSign, Users, Package, Mail, Phone } from 'lucide-react';
import patreonLogo from '../assets/images/patreonlogo.jpg'; 

// Componente Funcional Donate
const Donate: React.FC = () => {
  // --- PLACEHOLDERS - ¡IMPORTANTE REEMPLAZAR! ---
  const YOUR_PAYPAL_LINK = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID'; // Reemplaza con tu enlace real de PayPal
  const YOUR_PATREON_LINK = 'https://www.patreon.com/your_academy_username'; // Reemplaza con tu enlace real de Patreon
  const YOUR_CONTACT_EMAIL = 'info@academiaorlandoleon.com'; // Reemplaza con tu email de contacto
  const YOUR_CONTACT_PHONE = '+1-809-XXX-XXXX'; // Reemplaza con tu teléfono de contacto
  // --- FIN PLACEHOLDERS ---

  return (
    // Contenedor principal con fondo gradiente y padding estándar
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Sección de Introducción / Hero --- */}
        <section className="text-center py-12 lg:py-16">
          {/* Icono Corazón Estilizado */}
          <div className="inline-block p-4 bg-gradient-to-br from-red-100 via-red-50 to-pink-100 rounded-full mb-6 shadow-sm">
            <div className="p-3 bg-white rounded-full shadow-inner">
              <Heart className="w-16 h-16 text-red-500 fill-current" strokeWidth={1.5} />
            </div>
          </div>
          {/* Título Principal */}
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Apoya Nuestra Misión
          </h2>
          {/* Descripción */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tu generosidad impulsa el futuro de jóvenes atletas. Cada contribución nos ayuda a ofrecer entrenamiento de calidad, mantener nuestras instalaciones y forjar campeones dentro y fuera del campo.
          </p>
        </section>

        {/* --- Opciones Principales de Donación (PayPal / Patreon) --- */}
        <section className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Tarjeta PayPal */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col p-8 lg:p-10 transition-shadow duration-300 hover:shadow-2xl">
              {/* Logo */}
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" // Logo oficial o uno estilizado
                alt="PayPal Logo"
                className="h-12 sm:h-16 mb-6 self-start" // Ajusta altura y alineación
              />
              {/* Título */}
              <h3 className="text-2xl font-semibold text-slate-700 mb-3">Donación Única o Recurrente</h3>
              {/* Descripción */}
              <p className="text-slate-600 mb-6 flex-grow"> {/* flex-grow para empujar botón abajo */}
                Realiza una contribución segura a través de PayPal. Puedes elegir donar una vez o configurar un apoyo mensual.
              </p>
              {/* Botón CTA */}
              <button
                onClick={() => window.open(YOUR_PAYPAL_LINK, '_blank', 'noopener,noreferrer')}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                <DollarSign className="mr-2 -ml-1 h-5 w-5" />
                Donar con PayPal
              </button>
            </div>

           
          </div>
        </section>

        {/* --- Sección: Otras Formas de Ayudar --- */}
        <section className="py-12 lg:py-16">
            {/* Título de la sección */}
            <div className="text-center mb-12 lg:mb-16">
               <h3 className="text-3xl font-bold text-slate-800 mb-3">Más Formas de Colaborar</h3>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tu tiempo y recursos también marcan una gran diferencia.</p>
            </div>

            {/* Grid para las otras formas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                {/* Tarjeta: Donación de Equipos */}
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
                   {/* Icono */}
                   <div className="flex-shrink-0 mt-1">
                       <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
                           <Package className="h-6 w-6 text-green-600" />
                       </span>
                   </div>
                   {/* Texto */}
                   <div>
                       <h4 className="text-lg font-semibold text-slate-700 mb-1">Donación de Equipos</h4>
                       <p className="text-slate-600 text-sm leading-relaxed mb-3">
                           Aceptamos equipos de béisbol nuevos o en buen estado (bates, guantes, pelotas, cascos, etc.). Ayúdanos a equipar a nuestros atletas.
                       </p>
                       {/* Información de Contacto (Placeholder) */}
                       <a href={`mailto:${YOUR_CONTACT_EMAIL}?subject=Donacion%20de%20Equipo`} className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center">
                          Contáctanos para coordinar <Mail className="h-4 w-4 ml-1"/>
                       </a>
                   </div>
                </div>

                {/* Tarjeta: Voluntariado */}
                 <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
                   {/* Icono */}
                   <div className="flex-shrink-0 mt-1">
                       <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100">
                           <Users className="h-6 w-6 text-indigo-600" />
                       </span>
                   </div>
                   {/* Texto */}
                   <div>
                       <h4 className="text-lg font-semibold text-slate-700 mb-1">Voluntariado</h4>
                       <p className="text-slate-600 text-sm leading-relaxed mb-3">
                           ¿Tienes tiempo y deseas ayudar? Buscamos voluntarios para eventos, mantenimiento, apoyo logístico y más. ¡Tu ayuda es invaluable!
                       </p>
                        {/* Información de Contacto (Placeholder) */}
                       <a href={`tel:${YOUR_CONTACT_PHONE}`} className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center mr-4">
                          Llámanos <Phone className="h-4 w-4 ml-1"/>
                       </a>
                        <a href={`mailto:${YOUR_CONTACT_EMAIL}?subject=Interes%20en%20Voluntariado`} className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center">
                          Escríbenos <Mail className="h-4 w-4 ml-1"/>
                       </a>
                   </div>
                </div>

            </div>
        </section>

         {/* Mensaje Final de Agradecimiento (Opcional) */}
         <section className="text-center mt-12 lg:mt-16">
            <p className="text-slate-500 italic">
                Agradecemos profundamente cada forma de apoyo. ¡Juntos construimos campeones!
            </p>
         </section>

      </div> {/* Fin max-w-7xl */}
    </div> // Fin contenedor principal
  );
};

export default Donate;