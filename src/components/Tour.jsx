import React from 'react';
import { Link } from 'react-router-dom';
import Home2 from "../assets/homie5.mp4";
import "../styles/Tour.css";
import Gangtok from "../assets/gangtok.mp4";
import Bali from "../assets/bali.mp4";
import Paris from "../assets/paris.mp4";
import Switzerland from "../assets/switzerland.mp4";
import Kashmir from "../assets/kashmir.mp4";
import Manali from "../assets/manali.mp4";
import Mussoorie from "../assets/mussoorie.mp4";
import Nepal from "../assets/nepal.mp4";
import Shilong from "../assets/shilong.mp4";
import Tokyo from "../assets/tokyo.mp4";
function Tour() {
  return (
    <div className='tour'>
        <div
        className="tourTop">
            <video src={Home2} loop muted autoPlay/>
        </div>
    <div className="Package">
            <h1>Package List</h1>
            <div className="pack">
             <video src={Gangtok} autoPlay muted loop alt="gangtok"/>
             <div className="pack2">
             <h2>Grand week in north east-Lachung, Gangtok</h2>
             <p>Package type: Domestic Packages</p>
             <p>Package Location: Sikkim</p>
             <p>Features Free Breakfast,Free WiFi</p>
            </div>
            <div className="book" id="book1">
        
                <p>Rs.35000</p>
                <Link to="/contact">
        <button>Book Now</button>
      </Link>
            </div>
            </div>
            <div className="pack ">
            <video src={Bali} loop muted autoPlay/>
             <div className="pack2">
             <h2>Soulmate Special Bali - 7 Nights</h2>
             <p>Package type: Couple Packages</p>
             <p>Package Location: Indonesia(Bali)</p>
             <p>Features Free Pickup and drop facility,Free WiFi,Free proffesional guide</p>
             </div>
             <div className="book" id="book2">
        
                 <p>Rs.50000</p>
                 <Link to="/contact">
        <button>Book Now</button>
      </Link>
                </div>
            </div>  
             <div className="pack">
             <video src={Paris} loop muted autoPlay/>
        <div className="pack2">
             <h2>France Holidays</h2>
             <p>Package type: Family Packages</p>
             <p>Package Location: France</p>
             <p>Features Free Breakfast,Free WiFi,Accommodation{'>>'}Pickup</p>
        </div>
        <div className="book" id="book3">
        
            <p>Rs.45000</p>
            <Link to="/contact">
        <button>Book Now</button>
      </Link>
        </div>
            </div>
             <div className="pack">
             <video src={Switzerland} loop muted autoPlay/>
             <div className="pack2">
             <h2>6 Days in Switzerland</h2>
             <p>Package type: Family Packages</p>
             <p>Package Location: Switzerland</p>
             <p>Features Free Breakfast,Free WiFi,Accommodation{'>>'}sightseeing{'>>'}pickup{'>>'}drop</p>
             </div>
             <div className="book" id="book4">
        
                 <p>Rs.55000</p>
                 <Link to="/contact">
        <button>Book Now</button>
      </Link>
                </div>
            </div>
            <div className="pack">
            <video src={Kashmir} loop muted autoPlay/>
                <div className="pack2">
                <h2>Grand week in Kashmir</h2>
                <p>Package type: Couple Packages</p>
                <p>Package Location: Jammu and Kashmir</p>
                <p>Features Free Breakfast,Free WiFi</p>
               </div>
               <div className="book" id="book5">
           
                   <p>Rs.35000</p>
                   <Link to="/contact">
        <button>Book Now</button>
      </Link>
               </div>
               </div>
               <div className="pack">
               <video src={Manali} loop muted autoPlay/>
                <div className="pack2">
                <h2>Grand week in north Manali</h2>
                <p>Package type: Domestic Packages</p>
                <p>Package Location: Himachal Pradesh</p>
                <p>Features Free Breakfast,Free WiFi</p>
               </div>
               <div className="book" id="book6">
           
                   <p>Rs.40000</p>
                   <Link to="/contact">
        <button>Book Now</button>
      </Link>
               </div>
               </div>
               <div className="pack">
               <video src={Mussoorie} loop muted autoPlay/>
                <div className="pack2">
                <h2>6 Days in Mussoorie</h2>
                <p>Package type: Domestic Packages</p>
                <p>Package Location: Sikkim</p>
                <p>Features Free Breakfast,Free WiFi</p>
               </div>
               <div className="book" id="book7">
           
                   <p>Rs. 35000</p>
                   <Link to="/contact">
        <button>Book Now</button>
      </Link>
               </div>
               </div>
               <div className="pack">
               <video src={Nepal} loop muted autoPlay/>
                <div className="pack2">
                <h2>Grand week in Nepal</h2>
                <p>Package type: Family Packages</p>
                <p>Package Location: Nepal</p>
                <p>Features Free Breakfast,Free WiFi</p>
               </div>
               <div className="book" id="book8">
           
                   <p>Rs.35000</p>
                   <Link to="/contact">
        <button>Book Now</button>
      </Link>
               </div>
               </div>
               <div className="pack">
               <video src={Shilong} loop muted autoPlay/>
                <div className="pack2">
                <h2>Great Holidays in north east-Shilong</h2>
                <p>Package type: Friends and Family Packages</p>
                <p>Package Location: Meghalaya</p>
                <p>Features Free Breakfast,Free WiFi</p>
               </div>
               <div className="book" id="book9">
           
                   <p>Rs.40000</p>
                   <Link to="/contact">
        <button>Book Now</button>
      </Link>
               </div>
               </div>
               <div className="pack">
               <video src={Tokyo} loop muted autoPlay/>
                <div className="pack2">
                <h2>Cheerful Days in Tokyo</h2>
                <p>Package type: Friends and Family Packages</p>
                <p>Package Location: Japan</p>
                <p>Features Free Breakfast,Free WiFi</p>
               </div>
               <div className="book" id="book10">
            <p>Rs.65000</p>
            <Link to="/contact">
        <button>Book Now</button>
      </Link>
               </div>
               </div>
             </div>   </div>
             
  )
}

export default Tour
