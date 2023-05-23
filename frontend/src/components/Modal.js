import React, { useRef, useMemo } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import IconButton from "@material-ui/core/IconButton";
import formLogo from "../assets/img/formLogo.png";
import "../assets/css/Modal.css";
import swal from 'sweetalert';

import CancelIcon from "@mui/icons-material/Cancel";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBSwitch,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBInputGroupText,
} from "mdb-react-ui-kit";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80%",
  width: "90%",
  bgcolor: "background.paper",
  
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const selectData = useMemo(
    () => [
      { text: "One", value: 1, defaultSelected: true },
      { text: "Two", value: 2 },
      { text: "Three", value: 3 },
      { text: "Four", value: 4 },
      { text: "Five", value: 5 },
      { text: "Six", value: 6 },
      { text: "Seven", value: 7 },
      { text: "Eight", value: 8 },
    ],
    []
  );
  let formDetails = {
    fname: "",
    lname: "",
    company: "",
    address: "",
    email: "",
    phone: "",
  };
  const form = useRef();
  const changeName = (e) => {
    formDetails.fname = e.target.value;
    console.log(formDetails.fname);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("1");
    emailjs
      .sendForm(
        "service_dmi3h4f",
        "template_rcml1ob",
        form.current,
        "wyzWK4hyJwtGQQj7r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      props.handleClose();
      swal("Thank You!", "Your details are submitted successfully.", "success");
  };
  const userClasses = [
    {
      value: "Brand",
    },
    {
      value: "Agency",
    },
    {
      value: "Creator",
    },
  ];

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "scroll" }}
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}

        <div>
        
          <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
            style={{ overflow: "scroll", textAlign: "center" }}
          >
            
            
            
            <IconButton
              onClick={props.handleClose}
              style={{
                cursor: "pointer",
                float: "right",
                width: "10px",
                height: "10px",
                marginBottom: "1rem",
                marginRight: "-1.5rem",
                marginTop: "-1.5rem",
              }}
            >
              <CancelIcon />
            </IconButton>
            <div className="UpperPart">
            <div className="Container">
            <img src={formLogo} alt="/" className="FormLogo" style={{marginBottom:"1rem",display:"inline"}} />
            
            </div>
            <div>
            <Typography align="left" style={{fontWeight:"800",fontSize:"1.5rem",fontFamily:"Open Sans"}}>
              Contact Us
            </Typography>
            </div>
            <div>
              <Typography align="left"  style={{fontSize:"0.9rem",color:"#757575",marginBottom:"1rem",fontFamily:"Open Sans"}}>
                We'll try to contact you as soon as we can
              </Typography>
            </div>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="Form"
              style={{ display: "inline-block" }}
            >
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    id="form6Example1"
                    label="Name"
                    name="name"
                    onChange={(e) => changeName}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                id="form6Example3"
                label="Company name"
                name="companyname"
              />

              <MDBInput
                wrapperClass="mb-4"
                type="email"
                id="form6Example5"
                label="Email"
                name="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                type="tel"
                id="form6Example6"
                label="Phone"
                name="phone"
              />

              <MDBBtn className="mb-4" type="submit" onClick={sendEmail} block style={{fontWeight:"800",backgroundColor:"#EF0078"}}>
                Request Callback
              </MDBBtn>
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
