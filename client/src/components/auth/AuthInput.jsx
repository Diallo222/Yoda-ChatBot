import React from "react";

const AuthInput = ({ ...props }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={props.id}
        className="block text-sm font-silkScreen text-zinc-950"
      >
        {props.label}
      </label>
      <input
        {...props}
        className="border focus:border-black focus:ring-0 mt-1 rounded-none p-2 w-full"
      />
    </div>
  );
};

export default AuthInput;
