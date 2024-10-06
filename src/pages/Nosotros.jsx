import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <>
    <div>
       <h1>Satecno</h1>
   </div>
   
   <main className="main-nosotros">
     <section className="section-nosotros">  
       <div className="video-container">
         <video controls autoPlay
           muted src="/video/iPhone 11 Pro Max.mp4"
           alt="Video de presentacion de iphone14"
         ></video>
      </div>
     </section>
     <div className="p-nosotros">
           <p>
             Somos una empresa lider en ventas de artuculos tenologicos
             realizamos envios a todas partes del continente, tenemos los mas
             exclusivos celulaes, auriculares, televisores, consolas de
             videojuegos y mas.
           </p>
           <p>
             Llevamos mas de 20 años en el rubro, con nosotros tu satisfaccion
             esta garantizada
           </p>
       </div>

  

       <div className="suscripcion">
       <p>Suscribite para acceder a las novedades:</p>
       <form action="">
         <input className="form__type" type="text" placeholder="Nombre" name="nombre_suscr" />
         <input className="form__type" type="text" placeholder="Email" name="email_suscr" />
        <div><button className="button , buttonClick">Suscribirse</button> </div> 
       </form>
     </div>
     
     </main>
     </>
  )
}

export default Nosotros