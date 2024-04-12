import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Restauto } from '../../Context/Restauto';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(Restauto) 
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-img">
                <img className="productDisplay--main" src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-new">{product.new_price} Ugx</div>
                <div className="productDisplay-right-price-old">{product.old_price} Ugx</div>
            </div>
            <div className="productDisplay-right-description">
            African literature is an expansive and vibrant tapestry woven from the rich cultural heritage, 
            <br/>struggles, and triumphs of the African continent. It encompasses a diverse range of literary genres
             <br/> the complexities of African societies and their experiences 
           
            
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div>
                <p> Great <strong> African , </strong> literature '<strong>came from the experiences of those 
                </strong>'who were strong enough to tell the stories others couldn't </p>
                <br/>
                <p>Here <strong> at EA libraries, </strong> we believe<strong> Great reads 
                make Great minds, theres something for everyone. </strong>
                </p>
            </div>
        </div>
    </div>
  )
}
