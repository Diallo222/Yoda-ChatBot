import React from "react";
import { useNavigate } from "react-router-dom";
import { RetroBox, RetroButton } from "../../components/retro";
import { AuthButton, AuthInput } from "../../components/auth";
import { YodaAscii } from "../../components/yoda";
import { style } from "../../styles/style";

const LoginPage = () => {
  const navigate = useNavigate();
  const navToRegister = () => {
    navigate("/register");
  };
  const navToDashboard = () => {
    navigate("/dashboard");
  };
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
              <h1 className="font-silkScreen text-3xl font-bold mb-5">Login</h1>
              <form>
                <AuthInput
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <AuthInput
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
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
                <AuthButton onClick={navToDashboard} label={"Login"} />
                <div className="mt-4 text-center">
                  <RetroButton
                    onpress={navToRegister}
                    label={"Don't have an account? Register Now"}
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

export default LoginPage;
