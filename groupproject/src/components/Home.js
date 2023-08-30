import {NavLink} from 'react-router-dom'
import './home.css'
export default function Home(){
    return (
        <>
        <div className='top'>
            <div className='container'>
                <div className='detail'>
                    <h2>The best online store</h2>
                    <NavLink to='/product' className='productlink'>Shop Now</NavLink>
                </div>
                <div className="image-box">
                    <img src='./images/img/sliding-image.png' alt="shopify" ></img>

                </div>
            </div>
        </div>
        </>
    )
}