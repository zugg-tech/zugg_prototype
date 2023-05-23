import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/Home.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button } from '@mui/material'
import HeroImage from '../assets/img/hero_img.png'
import Image5 from '../assets/img/Group 21.png'
import GroupImage from '../assets/img/Group 19.png'
import Aiimg from '../assets/img/Group 20.png'
import Ladies from '../assets/img/ladies.png'
import Gents from '../assets/img/gents.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
export default function () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  return (
    <div>
      <Navbar />
      <div className="TopSection">
        <div className="Container">
          <div className="TopLeft">
            <div style={{ marginBottom: "rem" }}>
              <Typography align="left" className="Tagline">
                One stop solution for Influencer Marketing.
              </Typography>
              <Typography align="left" className="Desc">
                Stand out on the digital space through tailored campaigns for
                your brand. Want to reach out to relevant influencers? Contact
                Us.
              </Typography>
            </div>
            <div className="Container2" style={{ alignContent: "left" }}>
              <div className="Startcampaign">
                <Button className='StartButton' onClick={handleOpen}>
                  <Typography className="Buttontext">
                    Start a Campaign
                  </Typography>
                </Button>
                {open && <Modal open={open} handleClose={handleClose} />}
              </div>
              <div style={{ paddingTop: "2.35rem", marginLeft: "2rem" }}>
                <Typography className="Campaignline">
                  <span className="Bold">50+ Brands</span> like you have already
                  started their journey with us.
                </Typography>
              </div>
            </div>
          </div>
          <div className="Heroimage">
            <img
              src={HeroImage}
              alt=""
              style={{
                height: "34rem",
                marginLeft: "-20rem",
                // width: "55.2rem",
              }}
            />
          </div>
        </div>
      </div>

      <div className="MidSection" style={{ marginBottom: "5.5rem" }}>
        <Typography
          component={"div"}
          className="About"
          style={{ marginBottom: "3.5rem" }}
        >
          <Box className="WhyChoose" fontWeight={"bolder"} fontSize={"2rem"}>
            Why Choose Us?
          </Box>
        </Typography>
        <div className="Container3" style={{ marginBottom: "2rem" }}>
          <div
            className="LeftSection"
            style={{ alignContent: "left", marginLeft: "9rem" }}
          >
            <Typography
              className="TenLakh"
              style={{
                color: "black",
                fontFamily: "Open Sans",
                fontSize: "2.2rem",
                fontWeight: "bolder",
              }}
            >
              <strong>
                <span style={{ color: "#EF0078" }}>10 Lakh+</span> Influencers
              </strong>
            </Typography>
            <Typography
              className="AreYou"
              width={"30rem"}
              style={{
                fontFamily: "Open Sans",
                fontWeight: "500",
                fontSize: "1.1rem",
                textAlign: "left",
                paddingTop: "1.5rem",
              }}
            >
              <span style={{ display: "inline-block", color: "#757575" }}>
                Are you struggling to connect with your target audience on
                social media and increase brand awareness?{" "}
              </span>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "#424242",
                }}
              >
                Influencer marketing could be the solution you need. By
                partnering with social media influencers who have an engaged
                following in your target niche, you can reach a wider audience
                and increase engagement with your brand.
              </span>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "#424242",
                }}
              >
                Leverage our well-segmented network of quality influencers among
                various categories:
              </span>
              <span style={{ display: "inline-block", marginTop: "1rem", textAlign:'center' }}>
                <strong>
                  Fashion 👠 &nbsp;&nbsp; &nbsp; &nbsp;Beauty 💅🏻️
                  &nbsp;&nbsp;&nbsp;&nbsp; Fitness 🏋️‍♀️ &nbsp;&nbsp;&nbsp;&nbsp;
                  Food 🍕
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </strong>
              </span>
              <span
                style={{
                  marginTop: "1rem",
                  display: "inline-block",
                  color: "#757575",
                }}
              >
                and many more...{" "}
              </span>
            </Typography>
          </div>

          <div>
            <img
              className="MidImg"
              src={GroupImage}
              alt=""
              style={{
                height: "50rem",
                marginTop: "-10rem",
                marginLeft: "-4rem",
              }}
            />
          </div>
        </div>
      </div>
      <div className="Mid2 " style={{ marginTop: "-12rem" }}>
        <div className="Container4">
          <img
            className="Mid2Img"
            src={Image5}
            alt=""
            style={{ marginLeft: "10rem", height: "32rem" }}
          />
          <div className="Mid2sub">
            <Typography
              className="RealTime"
              align="left"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "700",
                fontSize: "2.2rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "#EF0078" }}>Real-Time</span> Insights
            </Typography>
            <Typography
              className="MonitorYour"
              width={"36rem"}
              color={"#424242"}
              align="left"
              style={{ fontFamily: "Open Sans", fontSize: "1.02rem" }}
            >
              <span style={{}}>
                Monitor your campaigns through{" "}
                <strong>real time insights </strong>on our portal.
              </span>
              <span style={{ display: "inline-block", marginTop: "1rem" }}>
                With the ability to measure results and{" "}
                <strong>track key metrics</strong>, you can ensure that your
                campaigns are delivering the desired results and drive
                meaningful business impact.
              </span>
              <div style={{textAlign:"center"}}>
              <span
                className="Likes"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "800",
                }}
              >
                Likes 👍 &nbsp;&nbsp;&nbsp;&nbsp;Reach 🗣️
                &nbsp;&nbsp;&nbsp;&nbsp;Engagement 🤝{" "}
              </span>
              </div>
              <span style={{ display: "inline-block", marginTop: "1rem" }}>
                By tracking these metrics, you can better understand the impact
                of your influencer marketing campaigns and optimize your
                strategy for maximum ROI.
              </span>
            </Typography>
          </div>
        </div>
      </div>

      <div
        className="AIsection"
        style={{ marginTop: "3rem", marginBottom: "-6rem", marginTop: "-8rem" }}
      >
        <div className="Container3">
          <div
            className="AIsubSec"
            style={{ marginLeft: "10rem", marginTop: "10rem" }}
          >
            <Typography
              className="IntelligentRecom"
              align="left"
              style={{
                fontFamily: "Open Sans",
                fontSize: "2.1rem",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              Intelligent Recommendation through{" "}
              <span style={{ color: "#EF0078" }}>Artificial Intelligence</span>
            </Typography>
            <Typography
              className="UsingOur"
              color={"#424242"}
              align="left"
              style={{ fontFamily: "Open Sans", fontSize: "1rem" }}
            >
              <span style={{ display: "inline-block" }}>
                Using our <strong>AI-powered platform</strong>, you can find the
                right influencers for your brand in no time. With the ability to
                analyse huge amounts of data, including social media profiles,
                engagement rates, and audience demographics, AI ensures that you
                partner with the influencers that are the perfect fit for your
                target audience.
              </span>

              <span style={{ display: "inline-block", marginTop: "1rem" }}>
                The best part? You'll{" "}
                <strong>save valuable time and resources</strong>, get the most
                bang for your buck, and see measurable results! 💸
              </span>
            </Typography>
          </div>

          <img
            className="AiImg"
            src={Aiimg}
            alt=""
            style={{ alignSelf: "center" }}
            width={"700rem"}
            height={"720rem"}
          />
        </div>
      </div>

      <div className="LowerSection">
        <div className="ContainerContactUs">
          <div>
            <img src={Ladies} className="LadyImage" alt="" />
          </div>
          <div
            className="StayAhead"
            style={{ marginTop: "10rem", width: "40rem" }}
          >
            <Typography className="AllLines">
              <span
                className="LineA"
                style={{
                  display: "inline-block",
                  color: "#757575",
                  fontSize: "1.5rem",
                  textAlign: "left",
                  fontFamily: "Open Sans",
                }}
              >
                Stay ahead of the competition and tap into the power of{" "}
              </span>
              <span
                className="LineB"
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  display: "inline-block",
                  fontFamily: "Open Sans",
                }}
              >
                INFLUENCER MARKETING{" "}
              </span>

              <div
                className="TwoButtons"
                style={{ display: "inline-block", marginTop: "2rem" }}
              >
                <Button
                  className="StartCamp"
                  onClick={handleOpen}
                  style={{
                    backgroundColor: "#EF0078",
                    color: "white",
                    width: "13rem",
                    height: "3rem",
                    marginRight: "2rem",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                >
                  {" "}
                  START A CAMPAIGN
                </Button>
                {open && <Modal open={open} handleClose={handleClose} />}
                <a
                  href="https://wa.me/8383928314"
                  class="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="WpButton"
                    style={{
                      backgroundColor: "#22B85E",
                      color: "white",
                      height: "3rem",
                      fontFamily: "Open Sans",
                      fontWeight: "700",
                      fontSize: "1rem",
                      width: "17rem",
                    }}
                  >
                    MESSAGE ON WHATSAPP&nbsp;
                    <WhatsAppIcon />
                  </Button>
                </a>
              </div>
            </Typography>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <img src={Gents} alt="" className="GentImage" width={"340rem"} />
          </div>
        </div>
      </div>

      <Footer open={open} handleOpen={handleOpen} />
    </div>
  );
}
