import React from 'react'

export default function Footer() {
  return (
    

  
  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "rgba(38, 50, 56, 0.95)"}}
          >
    
    <section
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "rgba(38, 50, 56, 0.95)"}}
             >
      
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      

      
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
      
    </section>
    

    
    <section class="">
      <div class="container text-center text-md-start mt-5">
        
        <div class="row mt-3">
          
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          

          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" class="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-white">Bootstrap Angular</a>
            </p>
          </div>
          

          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" class="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-white">Help</a>
            </p>
          </div>
          

          
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div
         class="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a>
    </div>
    
  </footer>
  


  )
}


// import React from "react";
// import "../assets/css/Footer.css";
// import PrivacyModal from "./PrivacyModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faYoutube,
//     faGithub,
//     faFacebook,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCopyright } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="item1">
//                     <PrivacyModal />
//                 </div>

//                 <div className="item2">
//                     <span style={{ paddingRight: 5 }}>Copyright </span>
//                     <FontAwesomeIcon icon={faCopyright} />{" "}
//                     <span style={{ paddingLeft: 5 }}>
//                         {new Date().getFullYear()} YourCompany. All Rights
//                         Reserved.
//                     </span>
//                 </div>
//                 <a
//                     href="https://github.com/sudiptob2/simple-react-footer"
//                     target="_blank"
//                     className="item3"
//                 >
//                     <FontAwesomeIcon icon={faGithub} />
//                 </a>
//                 <a
//                     href="http://fb.com/sudiptob2"
//                     target="_blank"
//                     className="item4"
//                 >
//                     <FontAwesomeIcon icon={faFacebook} />
//                 </a>
//                 <a
//                     href="https://www.youtube.com/"
//                     target="_blank"
//                     className="item5"
//                 >
//                     <FontAwesomeIcon icon={faYoutube} />
//                 </a>

//                 {false && <PrivacyModal click={true} />}
//             </div>
//         </footer>
//     );
// };

// export default Footer;