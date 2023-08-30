import {NavLink} from 'react-router-dom'
export default function Home(){
    return (
        <>
        <div className='top-banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>The best online store</h2>
                    <NavLink to='/product'>Shop Now</NavLink>
                </div>
                <div className="image-box">
                    <img src='./images/img/sliding-image.png' alt="shopify" ></img>

                </div>
            </div>
        </div>
        </>
    )
}