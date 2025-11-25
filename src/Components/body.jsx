import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./body.css";
import cows from "./assets/cows.jpg";
function Body(){
    return(
   
    <div className="body-container">
      
         <div className= "row justify-content-center my-5">

            <div className="col-12 text-center"> 
                <h1>
                    Who We Are?
                </h1>
            </div>
         </div>

              <div className="row ">

                <div className="col-7 py-4 mx-5">
                   <h2>Mazi Mauli Gomay Ashray , Tanger</h2> <br />
                   <p>Mazi Mauli Gomay Ashray is a certified and registered Goshala(Cow Sentury) <br /> 
                   located in Village Tanger Dapoli District Ratnagiri.</p>
                </div>
                    <div className="col-3 mx-5">
                        <img src={cows} alt="Logo"  />
                    </div>
              </div>



           






     </div>

       

    
   
    );
}
export default Body;