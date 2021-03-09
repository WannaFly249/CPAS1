import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  FormWithConstraints,
  FieldFeedbacks,
  Async,
  FieldFeedback,
} from "react-form-with-constraints";

function SignUp() {
  const [form, setForm] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    form.validateFields(e.target);
    const _formData = formData;
    _formData[e.target.name] = e.target.value;
    setFormData(_formData);
  };
  const signUpSubmit = (e) => {
    e.preventDefault();

    form.validateFields();
    if (!form.isValid()) {
      console.log("form is invalid: do not submit");
    } else {
      console.log("form is valid: submit");
    }
  };

  return (
    <FormWithConstraints
      ref={(form) => setForm(form)}
      onSubmit={signUpSubmit}
      noValidate
    >
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          required
        />
        <FieldFeedbacks for="firstName">
          <FieldFeedback when="*" />
        </FieldFeedbacks>
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <FieldFeedbacks for="lastName">
          <FieldFeedback when="*" />
        </FieldFeedbacks>
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          required
        />
        <FieldFeedbacks for="email">
          <FieldFeedback when="*" />
        </FieldFeedbacks>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          required
        />
        <FieldFeedbacks for="password">
          <FieldFeedback when="*" />
        </FieldFeedbacks>
      </div>
      <div className="form-group">
        <label>Contract Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Contract Number"
          name="contactNumber"
          onChange={handleChange}
        />
        <FieldFeedbacks for="contactNumber">
          <FieldFeedback when="*" />
        </FieldFeedbacks>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to={"/sign-in"}>Sign in?</Link>
      </p>
    </FormWithConstraints>
  );
}

export default SignUp;
