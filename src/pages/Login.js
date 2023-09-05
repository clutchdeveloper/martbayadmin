import React from "react";
import CustomInput from "../components/CustomInput";

function Login() {
  return (
    <div className="py-5" style={{ background: "#ffd333" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <CustomInput type="text" placeholder="Email Address" id="email" label="Email address" />

        <CustomInput type="password" placeholder="Password" id="pass" label="Password" />
      </div>
    </div>
  );
}

export default Login;
