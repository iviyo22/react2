import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, image, price, stock, description}) => {
    return(
        <div className="align-items-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src={image} className="card-img-top" alt={name} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> Precio: {price}</li>
                <li className="list-group-item"> Stock: {stock}</li>
                <li className="list-group-item">Producto: {id}</li>
                <buuton className="Option btn btn-danger"> <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Cantidad agregada`, quantity)}/></buuton>
              </ul>
            </div>
        </div>
    )
}
export default ItemDetail;
