
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Assets/logo.jpg";

function StudentLogin() {
  const navigate=useNavigate();
  const intialValues = { email: "", password: "" };
  const [FormValue, setFormValues] = useState(intialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...FormValue, [name]: value });
    console.log(FormValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(handleError(FormValue));
    setIsSubmit(true)
  };
  useEffect(() => {
    console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log(FormValue);
    }
  }, [FormErrors]);
  
  const handleError=(value)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      errors.email = "email is required!";
    }else if (!regex.test(value.email)) {
        errors.email = "This is not a valid email format!";}
    if (!value.password) {
      errors.password = "password is required!";
    }
    return errors;
  }
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src={img} style={{ width: "200px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Quiz Team</h4>
            </div>

            <p>Please login to your account</p>
            <h1>Student</h1>
            <pre>{JSON.stringify(FormValue, undefined, 2)}</pre>
            <MDBInput
              onChange={handleChange}
              wrapperClass="mb-4"
              label="Email address"
              name="email"
              id="form1"
              type="email"
            />
            <p style={{color:"red" ,fontSize:"15px"}}>{FormErrors.email}</p>
            <MDBInput
              onChange={handleChange}
              wrapperClass="mb-4"
              name="password"
              label="Password"
              id="form2"
              type="password"
            />
             <p style={{color:"red" ,fontSize:"15px"}}>{FormErrors.password}</p>
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn  onClick={handleSubmit} className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn
                onClick={()=>navigate("/StudentSign-up")}
                outline
                className="mx-2"
                color="primary"
              >
                Register
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column   gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h2 class="mb-4">We are more than just a company</h2>
              <p class="small mb-0">
                we are the gateway to endless possibilities and the catalyst for
                transformative learning experiences. Our mission goes beyond
                administering tests; we empower minds, nurture curiosity, and
                unlock the potential within each learner. With a deep commitment
                to education and a passion for shaping brighter futures, we
                strive to revolutionize the way knowledge is assessed, ensuring
                that every student has the opportunity to showcase their true
                capabilities.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentLogin;

