import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleChange = (otp) => {
    setOtp(otp);
  };

  const loginHandler = () => {
    console.log(otp);
    console.log(phone);
    fetch("https://staging.fastor.in/v1/pwa/user/login", {
      method: "post",
      body: new URLSearchParams({
        phone,
        otp,
        dial_code: "+91",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status_code == 200) {
          localStorage.setItem("token", json.data.token);
          navigate("home");
        }
      });
  };
  return (
    <div>
      {!login && (
        <div className="w-1/4 m-auto mt-48">
          <h1 className="text-2xl font-bold font-shadow-600">Login</h1>
          <p className="text-gray-400 mb-4">
            Welcome Back ! <br /> Please login to continue
          </p>
          <h1>Mobile number</h1>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-2 w-100"
          />
          <br />
          <button
            className="mt-4 bg-blue-900 text-white py-2 px-16 rounded-xl w-100"
            onClick={() => setLogin(true)}
          >
            Get Otp
          </button>
        </div>
      )}
      {login && (
        <div className="w-1/4 m-auto mt-48">
          <h1 className="text-2xl font-bold font-shadow-600">
            Verification Code
          </h1>
          <p className="text-gray-400 mb-4 text-sm">
            We have sent the code verification to your mobile number +91{phone}
          </p>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            // separator={<span>-</span>}
            className="border-2 border-gray-400 w-100 m-2 rounded w-full"
          />
          <button
            className="mt-4 bg-blue-900 text-white py-2 px-16 rounded-xl w-full"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
