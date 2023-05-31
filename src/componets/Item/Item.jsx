import { Link } from 'react-router-dom';
import './Item.css'; // Ruta relativa al archivo CSS
const Item = ({id, name, image, price, stock, description}) => {
    return(
      <div className="CardContainer">
     <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
          </h2>
          </header>
        <picture>
          <img src={image} alt={name} className="ItemImg"/>
        </picture>
        <section>
          <p className="Info"> 
          Precio : ${price}</p>
          <p className="Info"> 
          Stock disponible : {stock}</p>
        </section>
        <footer className="ItemFooter">
          <Link to ={`/item/${id}`}className="Option"> Ver Detalle</Link>
        </footer>
        
    
     </article>
     </div>
    )
}

export default Item;

