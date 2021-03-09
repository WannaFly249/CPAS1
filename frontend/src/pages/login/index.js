import React, { useState } from "react";

import {
  FormWithConstraints,
  FieldFeedbacks,
  Async,
  FieldFeedback,
} from "react-form-with-constraints";

function Login() {
  const [form, setForm] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      <h3>Sign In</h3>

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
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </FormWithConstraints>
  );
}

export default Login;
