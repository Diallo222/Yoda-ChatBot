import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { RetroBox, RetroButton } from "../../components/retro";
import { AuthButton, AuthInput } from "../../components/auth";
import { YodaAscii } from "../../components/yoda";
import { style } from "../../styles/style";
import { register } from "../../store/auth/authSlice";

const RegisterPage = () => {
  const { user, loading, error } = useSelector(
    (state) => state.auth,
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navToLogin = () => {
    navigate("/login");
  };
  const navToDashboard = () => {
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(register({ username, email, password }));
  };

  console.log(user, loading, error);

  return (
    <div className="h-full w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-black font-silkScreen text-center mb-6">
        Welcome back !
      </h1>
      <p className="text-lg md:text-2xl text-center text-black">
        Please enter your details
      </p>
      <div className={`${style.container} justify-center items-center gap-10`}>
        <div className="w-full md:w-1/3">
          <RetroBox>
            <div className="w-full p-5 md:p-10">
              <h1 className="font-silkScreen text-3xl font-bold mb-5">
                Register
              </h1>
              <form>
                <AuthInput
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <AuthInput
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <AuthInput
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AuthInput
                  label="Confirm Password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    <label
                      htmlFor="remember-me"
                      className="text-[16px] font-medium text-zinc-950"
                    >
                      Remember me
                    </label>
                  </div>
                  <RetroButton label={" Forgot your password?"} />
                </div>
                <AuthButton onClick={handleSubmit} label={"Register"} />
                <div className="mt-4 text-center">
                  <RetroButton
                    onpress={navToLogin}
                    label={"Already have an account? Login"}
                  />
                </div>
              </form>
            </div>
          </RetroBox>
        </div>
        <YodaAscii showDialog />
      </div>
    </div>
  );
};

export default RegisterPage;
