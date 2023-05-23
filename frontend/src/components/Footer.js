import React from "react";
import Typography from "@mui/material/Typography";
import "../assets/css/Footer.css";

export default function Footer(props) {
  return (
    <footer
      class="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1D252D" }}
    >
      <section
        class="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#1D252D" }}
      >
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/profile.php?id=100092156087115" class="text-white me-4" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/zuggmedia" class="text-white me-4" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          
          <a href="https://www.instagram.com/zugg.in/" class="text-white me-4" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/zuggmedia/" class="text-white me-4" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">
                <Typography
                  className="Zugg"
                  color="#EF0078"
                  variant="h6"
                  sx={{ my: 2 }}
                >
                  ZUGG
                </Typography>
              </h6>

              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                Amplify Your Brand's Reach and Influence with Our Premier
                Influencer Marketing Agency. Let's Start Your Success Story
                Together.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                class="text-uppercase fw-bold"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                }}
              >
                Legal
              </h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#EF0078",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ fontFamily: "Open Sans", fontWeight: "400" }}
                  onClick={props.handleOpen}
                >
                  Talk to us
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ fontFamily: "Open Sans", fontWeight: "400" }}
                  style={{ width: "100%" }}
                >
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ fontFamily: "Open Sans", fontWeight: "400" }}
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                class="text-uppercase fw-bold"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                }}
              >
                Social Networks
              </h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#EF0078",
                  height: "2px",
                }}
              />
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <a href="https://www.instagram.com/zugg.in/" class="text-white" target="_blank">
                  Instagram
                </a>
              </p>
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <a href="https://www.facebook.com/profile.php?id=100092156087115" class="text-white" target="_blank">
                  Facebook
                </a>
              </p>
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <a href="https://www.linkedin.com/company/zuggmedia/" class="text-white" target="_blank">
                  LinkedIn
                </a>
              </p>
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <a href="https://twitter.com/zuggmedia" class="text-white" target="_blank" >
                  Twitter
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                class="text-uppercase fw-bold"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                }}
              >
                Contact
              </h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#EF0078",
                  height: "2px",
                }}
              />
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <i class="fas fa-home mr-3"></i> New Delhi - 110087, IN
              </p>
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <i class="fas fa-envelope mr-3"></i> team@zugg.in
              </p>
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <i class="fas fa-phone mr-3"></i> +91 8130623271
              </p>
              <p style={{ fontFamily: "Open Sans", fontWeight: "400" }}>
                <i class="fas fa-phone mr-3"></i> +91 8383928314
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        class="text-center p-3"
        style={{
          backgroundColor: "#1D252D",
          fontFamily: "Open Sans",
          fontWeight: "400",
          fontSize: "0.7rem",
        }}
      >
        © 2023 Viral Vibe Technologies LLP. All rights reserved
      </div>
    </footer>
  );
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
