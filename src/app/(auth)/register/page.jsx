"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    console.log(data, "register data");
    const { email, name, photoUrl, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photoUrl,
      callbackURL: "/",
    });
    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Registration successful");
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh] ">
      <div className="p-4 bg-white rounded-xl">
        <h2 className="text-3xl text-center font-bold mb-6">Create your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full"
              {...register("email", { required: true })}
              placeholder="Type your email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-full"
              {...register("name", { required: true })}
              placeholder="Type your name"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              {...register("photoUrl", { required: true })}
              placeholder="Type your photo URL"
            />
            {errors.photoUrl && <p className="text-red-500">Photo URL is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-full"
              {...register("password", { required: true })}
              placeholder="Type your password"
            />
            {errors.password && <p className="text-red-500">Password is required</p>}
          </fieldset>
          <button className="btn w-full bg-slate-700 text-white">Register</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-500 hover:underline">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
