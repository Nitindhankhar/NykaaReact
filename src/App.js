/* eslint-disable jsx-a11y/anchor-is-valid */


// import Home from "./Components/Home";
// import Home from './Home'

import './App.css'
import img1 from './images/Nykaa_Logo.jpg'
import img2 from './images/1ce27b38-ac2a-4e91-a790-97672cc683cf.avif'
import img3 from './images/a930a1f4-7e0e-4595-8f72-99b277155d0e.avif'
import img4 from './images/321e3b5f-811e-42c5-8975-d75ed11c43d3.avif'
import img5 from './images/239f5044-25fc-482a-9945-90962e90af64.avif'
import img6 from './images/b5cdbf6a-4718-45b0-aa68-fe7b47c04fc6.avif'
import img7 from './images/0aec124f-2a1f-4fc5-9962-bcd6d5d1fb83.avif'
import img8 from './images/8900d9c0-5ab0-4659-99f9-1546151d6a3c.avif'
import img9 from './images/008b4a3d-589a-4ac4-80d5-66e7e10c6ade.avif'
import img10 from './images/4e16dd68-a3c4-49b8-827b-436df563ea5c.avif'
import img11 from './images/33052185-0758-488b-8048-40e4077e24de.avif'
import img12 from './images/1d7a3689-364c-447c-ad0e-b1ea201e94a6.avif'
import img13 from './images/6751f065-5db9-4be1-9a6d-2303286de1b9.avif'
import img14 from './images/e2bf223b-ba25-4417-833d-8d864cbdd299.avif'
import img15 from './images/b32ddcf1-b431-4819-8eda-05959b32d131.webp'
import img16 from './images/e6ae051f-56e7-4079-93e4-b844af6e1d49.avif'
import img17 from './images/d00c3ab0-1fd6-4fa2-9830-1c1df3105dbb.avif'




function App() {
  return (
   
    //  <Home/> 
    <div>
         <nav className="f-nav">
        <p>BEAUTY BONANZA Get Your Amazing Deals! </p>
        <div className="feature">
            <div className="app">
                <i className="fa-solid fa-mobile"></i>
                <p>Get App</p>
            </div>
            <div className="app">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                <p>Store</p>
            </div>
            <div className="app">
                <i className="fa-solid fa-gift"></i>
                <p>Gift</p>
            </div>
            <i className="fa-brands fa-hire-a-helper"></i>
            <div className="app">
                <p>Help</p>
            </div>
        </div>
    </nav>
    <nav className="sec-nav">
      <div className="nyka-bar">
        <ul>
            <li>
                <img src={img1} alt=""/>
                <a>Categories</a>
                <a>Brands</a>
                <a>Luxe</a>
                <a>Nykaa Fashion</a>
                <a>Beauty Advice</a>
            </li>
        </ul>
      </div>
      <div className="inputs">
        <input type="text" placeholder="Search on Nykaa"/>
        <button>Sign in</button>
      </div>
    </nav>
    <div className="items">
    <ul>
    <li>
        <a>Makeup</a>
        <a>Skin</a>
        <a>Hair</a>
        <a>Appliances</a>
        <a>Bath & Body</a>  
        <a>Natural</a>
        <a>Mom & Baby</a>
        <a>Health & Wellness</a>
        <a>Men</a>
        <a>Fragrance</a>
        <a>Lingerie & Accessories</a>
        <button>OFFERS</button>
    </li>
    </ul>
    </div>
    <div className="main-img">
        <img src={img2} alt="nykaa"/>
    </div>
    <div className="pink">
        <h2>PINK FIRDAY SALE - COMING SOON!</h2>
        <img src={img3} alt=""/>
    </div>
    <div className="card">
      <img src={img4} alt=""/>
        <img src={img5} alt=""/>
    </div>
    <div className="brand">
        <h2>TOP BRANDS</h2>
        <div className="topbrand">
            <img src={img6} alt=""/>
            <img src={img7} alt=""/>
        </div>
    </div>
    <div className="onlynykaa">
        <h2>ONLY ON NYKAA</h2>
        <div className="only">
            <img src={img8} alt=""/>
            <img src={img9} alt=""/>
        </div>
    </div>
    <div className="makeup">
        <img src={img10} alt=""/>
        <img src={img11} alt=""/>
        <img src={img12} alt=""/>
        <img src={img13} alt=""/>
        
    </div>
    <div className="special">
        <h2>NYKAA SPECIAL</h2>
        <div className="curation">
            <img src={img14} alt=""/>
            <img src={img15} alt=""/>
        </div>
    </div>
    <div className="beauty">
        <h2>BEAUTY ADVICE</h2>
        <div className="advice">
            <img src={img16} alt=""/>
            <img src={img17} alt=""/>
        </div>

    </div>
    <div className="footer">
        <div className="list">
        <ul>
            <li>
                <h2>NYKAA</h2>
                <a>Who are we?</a><br/>
                <a>Careers</a><br/>
                <a>Authenticity</a><br/>
                <a>Press</a><br/>
                <a>Testimonials</a><br/>
                <a>Nykaa CSR</a><br/>
                <a>Responsible Disclosure</a><br/>
                <a>Investor Relations</a><br/>
                <a>Link to Smart ODR</a>
            </li>
        </ul>
        </div>
        <div className="list">
        <ul>
            <li>
                <h2>Help</h2>
                <a>Contact Us</a><br/>
                <a>Frequently asked questions</a><br/>
                <a>Store Locator</a><br/>
                <a>Cancellation & Return</a><br/>
                <a>Shipping & Delivery</a><br/>
                <a>Sell on Nykaa</a>
               
            </li>
        </ul>
    </div>
    <div className="list">
        <ul>
            <li>
                <h2>Inspire Me</h2>
                <a>Beauty Book</a><br/>
                <a>Nykaa Network</a><br/>
                <a>Buying Guides</a>
               
            </li>
        </ul>
        </div>
        <div className="list">
        <ul>
            <li>
                <h2>Quick Links</h2>
                <a>Offer Zone</a><br/>
                <a>New Launches</a><br/>
                <a>Nykaa Man</a><br/>
                <a>Nykaa Fashion</a><br/>
                <a>Nykaa Pro</a><br/>
                <a>Sitemap</a>
               
            </li>
        </ul>
    </div>
    <div className="list">
        <ul>
            <li>
                <h2>Top Categories</h2>
                <a>Makeup</a><br/>
                <a>Skin</a><br/>
                <a>Hair</a><br/>
                <a>Bath & Body</a><br/>
                <a>Appliances</a><br/>
                <a>Mom and Baby</a><br/>
                <a>Health & Wellness</a><br/>
                <a>Fragrance</a><br/>
                <a>Natural</a><br/>
                <a>Luxe</a>
            </li>
        </ul>

    </div>
    </div>
    </div>
    
  )
}

    


export default App;
