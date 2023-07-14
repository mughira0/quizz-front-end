import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import img from "../Assets/1.avif";

function StudentRegistration() {
  const initialValues = { name: "", email: "", password: "",repeatPassword:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
     if (!values.repeatPassword) {
      errors.repeatPassword = "Password is not same";}
    else if(values.repeatPassword!=values.password) {
      errors.repeatPassword = "Password is not same";
      
  }
  return errors;
  };
  return (
    <MDBContainer fluid>
      
      <MDBCard className="text-black m-5 " style={{ borderRadius: "25px" }}>
        <MDBCardBody  cl>
          <MDBRow style={{ marginTop: "90px" }}>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <h1>Student</h1>
              <pre>{JSON.stringify(formValues,undefined,2)}</pre>
              <h3
                style={{ marginTop: "40px" }}
                className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
              >
                Sign up
              </h3>

              <div
                style={{ marginTop: "40px" }}
                className="d-flex flex-row align-items-center mb-4 "
              >
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  name="name"
                  id="form1"
                  type="text"
                  className="w-100"
                  value={formValues.name}
                  onChange={handleChange}
                />
                 
              </div>
              <p style={{color:"red" ,fontSize:"15px"}}>{formErrors.name} </p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  name="email"
                  id="form2"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                 
              </div>
              <p style={{color:"red" ,fontSize:"15px"}}>{formErrors.email}</p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  name="password"
                  id="form3"
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red" ,fontSize:"15px"}}>{formErrors.password}</p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  name="repeatPassword"
                  id="form4"
                  type="password"
                  value={formValues.repeatPassword}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red" ,fontSize:"15px",}}>{formErrors.repeatPassword}</p>
              <MDBBtn   type="submit" className="mb-4" size="lg">
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage style={{ height: "600px" }} src={img} fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default StudentRegistration;
