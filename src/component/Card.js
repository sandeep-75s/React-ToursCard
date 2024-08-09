import { useState } from 'react';
import './Card.css'

function Card({id,name,info,image,price,removeTour}){
    const [readmore, setReadMore] = useState(false);
    function readhandler(){
        setReadMore(!readmore);
    }
    
    const decription = readmore ? info : `${info.substring(0,200)}....`;
    return(
        <div className='card-div'>
            <div className='img-div'>
                <img className='img' src={image}></img>
            </div>
            <div className='prize-div'>
                <p className='price'>&#x20B9;{price}</p>
                <p  className='name'>{name}</p>
            </div>
            <div>
                <span>{decription}</span>
                <span className='sp' onClick={readhandler}>{readmore ? "Read Less": "Read More"}</span>
            </div>
            <div>
                <button className='btn' onClick={()=>removeTour(id)}>Not Intrested</button>
            </div>
        </div>
    );
}
export default Card;