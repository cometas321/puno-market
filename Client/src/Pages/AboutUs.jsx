import React from "react";

const AboutUs = () => {
  return (
    <main className="content p-4">
      <section className="bg-base-100 shadow-xl p-6 rounded-box">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <div className="section-content">
          <h2 className="text-2xl font-bold mb-2">Nosotros</h2>
          <p className="mb-4">
            En [PunoMarket], no es solo una tienda en línea; es un vibrante ecosistema
            que conecta a productores y consumidores, fomentando el desarrollo económico 
            local de los artesanos y la sostenibilidad, con pasion por las artesanías
            únicas a mano. Esta historia comenzó con una simple observación: Puno, una 
            ciudad rica en cultura y recursos, necesitaba una plataforma moderna para 
            que sus talentosos productores pudieran llegar a un público más amplio. Los 
            mercados tradicionales son esenciales, pero en la era digital, se requiere
            un puente que conecte lo local con lo global.  [X años/meses]
            Así nació PunoMarket, con la misión de empoderar a los productores locales 
            y ofrecer a los consumidores productos frescos y auténticos, directamente 
            desde la fuente de los artesanos que en la actualidad pasan por una crisis 
            de venta de productos.
          </p>
          <h2 className="text-2xl font-bold mb-2">Nuestra Misión</h2>
          <p className="mb-4">
          Nuestra misión en PunoMarket es transformar la economía local de Puno mediante 
          la creación de una plataforma digital inclusiva y accesible que conecta a productores
          locales con consumidores, tanto dentro como fuera de la ciudad. Buscamos empoderar 
          a los pequeños productores y artesanos, ofreciendo una ventana al mundo para sus 
          productos y promoviendo prácticas comerciales sostenibles que beneficien a toda la 
          comunidad.
          </p>
          <h2 className="text-2xl font-bold mb-2">Nuestros Valores</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <strong>Calidad:</strong> Nos esforzamos por ofrecer productos de la más alta 
              calidad y mantener altos estándares en todos los aspectos de nuestra plataforma,
              desde la seguridad hasta la atención al cliente.
            </li>
            <li className="mb-2">
              <strong>Sostenibilidad:</strong> Nos comprometemos con prácticas sostenibles 
              que respeten el medio ambiente y promuevan el desarrollo económico local sin 
              comprometer los recursos para las futuras generaciones.
            </li>
            <li className="mb-2">
              <strong>Comunidad:</strong> Creemos en el poder de la comunidad y trabajamos 
              para fortalecer las conexiones entre productores y consumidores, promoviendo 
              un sentido de pertenencia y apoyo mutuo.
            </li>
            <li className="mb-2">
              <strong>Autenticidad:</strong> Valoramos la autenticidad de los productos 
              locales. Creemos en preservar y promover las tradiciones y culturas de Puno
              a través de un comercio justo y honesto.
            </li>
            <li className="mb-2">
              <strong>Innovacion:</strong> Abrazamos la tecnología y la innovación para 
              mejorar continuamente nuestra plataforma y ofrecer la mejor experiencia 
              posible a nuestros usuarios, productores y consumidores.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Nuestro Equipo</h2>
          <p className="mb-4">
            Detrás de cada pieza que vendemos, hay un equipo apasionado de
            artesanos, diseñadores que estan continuamente creando productos de calidad 
            y economicos. Nos enorgullece colaborar con talentosos creadores, ayudar
            y compartir sus obras maestras con el mundo.
          </p>
          <p className="mb-4">¡Gracias por comprarle al talento del artesano Puneño!</p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;