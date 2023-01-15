import React, { useState } from "react";
import "./BillInfo.css";

const BillInfo = () => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isNoSpam, setIsNoSpam] = useState(false);
  const [agreeTerm, setAgreeTerm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const [formErrors, setFormError] = useState({});
  console.log('formError', formErrors);
  const handleCheckbox = () => {
    setIsCheckbox(!isCheckbox);
  };

  const handleNoSpam = () => {
    setIsNoSpam(!isNoSpam);
  };

  const handleAgreeTerm = () => {
    setAgreeTerm(!agreeTerm);
  };

  const handleFormValidation = () => {    
    let formErrors = {};    
    let formIsValid = true;
    //validate firstname
    if (!firstName) {    
      formIsValid = false;    
      formErrors["firstNameErr"] = "firstName is required.";    
    }  
    //validate lastName
    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameErr"] = "lastName is requires.";

    } 
    //Email    
    if (!email) {    
      formIsValid = false;    
      formErrors["emailErr"] = "Email id is required.";    
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) { 
      formIsValid = false;    
      formErrors["emailErr"] = "Invalid email."; 
    }
    //validate phone
    if (!phone) {    
      formIsValid = false;    
      formErrors["phoneErr"] = "Phone number is required.";    
    }else {    
      var check = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;    
      if (!check.test(phone)) {    
        // eslint-disable-next-line no-unused-vars
        formIsValid = false;    
        formErrors["phoneErr"] = "Invalid phone number.";    
      }    
    } 
    //validate address
    if (!address) {
      // eslint-disable-next-line no-unused-vars
      formIsValid = false;
      formErrors["addressErr"] = "addresss is requires.";
    }   
    if (!city) {
      // eslint-disable-next-line no-unused-vars
      formIsValid = false;
      formErrors["cityErr"] = "city is requires.";
    }  
    if (!country) {
      // eslint-disable-next-line no-unused-vars
      formIsValid = false;
      formErrors["countryErr"] = "country is requires.";
    }  
    if (!zip) {
      // eslint-disable-next-line no-unused-vars
      formIsValid = false;
      formErrors["zipErr"] = "zip is requires.";
    }  
    if(isCheckbox === false){
      formIsValid = false;
      formErrors["isCheckBoxErr"] = "checkbox is requires.";
    }

    if(isNoSpam === false) {
      formIsValid = false;
      formErrors["isNoSpamErr"] = "checkbox is requires.";
    }
    if(agreeTerm === false) {
      formIsValid = false;
      formErrors["agreeTermErr"] = "checkbox is requires.";
    }

    setFormError(formErrors)
    return formIsValid;
  }

  const handleOnSubmit = () => {
    handleFormValidation();
    console.log('value')
  }
  return (
    <div className="m-billing-info">
      <h2>Billing info</h2>
      <div className="m-billing-info-step">
        <p>Please enter your billing info</p>
        <p>Step 1 of 3</p>
      </div>
      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>First name</h3>
          <input 
            type="text" 
            placeholder="First name" 
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value)
            }}
          />
          {formErrors.firstNameErr &&    
            <div style={{ color: "red", paddingTop: 10 }}>{formErrors.firstNameErr }</div>    
          }    
        </div>
        <div className="m__small-billing-field">
          <h3>Last name</h3>
          <input 
            type="text" 
            placeholder="Last name" 
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value)
            }}
          />
          {formErrors.lastNameErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.lastNameErr}</span>
          }
        </div>
      </div>

      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>Email address</h3>
          <input 
            type="text" 
            placeholder="Email address" 
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          {formErrors.emailErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.emailErr}</span>
          }

        </div>
        <div className="m__small-billing-field">
          <h3>Phone number</h3>
          <input 
            type="text" 
            placeholder="Phone number"
            value={phone}
            onChange={(event)=> {
              setPhone(event.target.value)
            }} 
          />
          {formErrors.phoneErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.phoneErr}</span>
          }

        </div>
      </div>

      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>Address</h3>
          <input 
            type="text" 
            placeholder="Address" 
            value={address}
            onChange={(event) => {
              setAddress(event.target.value)
            }}
          />
          {formErrors.addressErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.addressErr}</span>
          }

        </div>
        <div className="m__small-billing-field">
          <h3>Town / City</h3>
          <input 
            type="text" 
            placeholder="Town / City" 
            value={city}
            onChange={(event) => {
              setCity(event.target.value)
            }}
          />
          {formErrors.cityErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.cityErr}</span>
          }

        </div>
      </div>

      <div className="m-billing-field">
        <div className="m__small-billing-field">
          <h3>State / Country</h3>
          <input 
            type="text" 
            placeholder="State / Country" 
            value={country}
            onChange={(event) => {
              setCountry(event.target.value)
            }}
          />
          {formErrors.countryErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.countryErr}</span>
          }

        </div>
        <div className="m__small-billing-field">
          <h3>ZIP/Postal code</h3>
          <input 
            type="text"
            placeholder="ZIP/Postal code" 
            value={zip}
            onChange={(event) => {
              setZip(event.target.value)
            }}
          />
          {formErrors.zipErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.zipErr}</span>
          }

        </div>
      </div>

      <div className="m__billing-checkbox">
        <img
          src={isCheckbox ? "/icons/Checkboxes.svg" : "/icons/Uncheckboxes.svg"}
          alt="Uncheckboxes"
          onClick={handleCheckbox}
        />
        <p>Ship to a different address?</p>

      </div>
        {formErrors.isCheckBoxErr &&
          <span style={{color: "red", paddingTop: 10}}>{formErrors.isCheckBoxErr}</span>
        }

      <div className="m-billing-infor-container">
        <h2>Additional informations</h2>
        <div className="m-billing-info-step">
          <p>Need something else? We will make it for you!</p>
          <p>Step 4 of 3</p>
        </div>

        <p>Order notes</p>
        <textarea
          name=""
          placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
        ></textarea>
      </div>

      <div className="m-billing-infor-container">
        <h2>Confirmation</h2>
        <div className="m-billing-info-step">
          <p>
            We are getting to the end. Just few clicks and your order si ready!
          </p>
          <p>Step 3 of 3</p>
        </div>

        <div className="m-billing-nospam">
          <img
            src={isNoSpam ? "/icons/Checkboxes.svg" : "/icons/Uncheckboxes.svg"}
            alt=""
            onClick={handleNoSpam}
          />
          <p>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </p>
        </div>
          {formErrors.isNoSpamErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.isNoSpamErr}</span>
          }


        <div className="m-billing-agreeterm">
          <img
            src={
              agreeTerm ? "/icons/Checkboxes.svg" : "/icons/Uncheckboxes.svg"
            }
            alt=""
            onClick={handleAgreeTerm}
          />
          <p>I agree with our terms and conditions and privacy policy.</p>
        </div>
          {formErrors.agreeTermErr &&
            <span style={{color: "red", paddingTop: 10}}>{formErrors.agreeTermErr}</span>
          }

      </div>

      <button className="btn-complete" onClick={() => handleOnSubmit()}>Complete order</button>

      <div className="m-billing-safe">
        <img src="/icons/ic-security-safety.svg" alt="" />
        <h4>All your data are safe</h4>
        <p>
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default BillInfo;
