import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
const ItemDetailContainer = () => {
   
        const [product, setProduct] = useState(null)
        const {itemId} = useParams()
    
        useEffect(()=>{
            getProductById("ItemId")
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    
        },[itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>

    )
}

export default ItemDetailContainer;
