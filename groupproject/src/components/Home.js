import {NavLink} from 'react-router-dom'
import './home.css'
export default function Home(){
    return (
        <>
        <div className='top'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Online Store </h2>
                    <NavLink to='/product' className='productlink'>Shop Now</NavLink>
                </div>
                <div className="image-box">
                    <img src='./images/img/sliding-image.png' alt="shopify" ></img>

                </div>
            </div>
        </div>
        <div className='product-name'>
            <div className='cont'>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/Mobile Phone.png' alt='Mobile Phone'></img>



                    </div>
                    <div className='detail'>
                        <p>23 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/cpu heat.jpg' alt='cpu'></img>



                    </div>
                    <div className='detail'>
                        <p>63 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/smart watch.png' alt='smart watch'></img>



                    </div>
                    <div className='detail'>
                        <p>18 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/Mobile Phone.png' alt='Mobile Phone'></img>



                    </div>
                    <div className='detail'>
                        <p>23 Products</p>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/headphone.png' alt='headphone'></img>



                    </div>
                    <div className='detail'>
                        <p>52 Products</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='about'>
            <div className='container'>
                <div className='container2'>
                    <div className='containericon'>
                        

                    </div>
                    <div className=''>
                        <h3>Free Shipping</h3>
                    </div>

                </div>
            </div>
        </div>


        </>
    )
}