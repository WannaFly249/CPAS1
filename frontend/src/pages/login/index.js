import React, { useState } from "react";

import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback,
} from "react-form-with-constraints";
import { API_URL } from "./../../shared/constants";
import { apiProvider } from "./../../services/api";

function Login(props) {
  const [form, setForm] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (localStorage.getItem("auth_token")) {
    props.history.push(from.pathname);
  }

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
      handleSignInAPI(formData);
    }
  };

  const handleSignInAPI = (_data) => {
    const data = _data;
    apiProvider.post(API_URL.login, data).then((res) => {
      const result = res.result;
      if (result) {
        window.location.reload();
        localStorage.setItem("auth_token", result.token);
        localStorage.setItem("user", result);
      }
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
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
      </div>
    </div>
  );
}

export default Login;
