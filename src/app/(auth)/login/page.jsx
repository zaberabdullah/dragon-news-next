"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data, "login data");
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh] ">
      <div className="p-4 bg-white rounded-xl">
        <h2 className="text-3xl text-center font-bold mb-6">Login to your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-full"
              {...register("password", { required: true })}
              placeholder="Type your password"
            />
            {errors.password && <p className="text-red-500">Password is required</p>}
          </fieldset>
          <button className="btn w-full bg-slate-700 text-white">Login</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500 hover:underline">
            Sign up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
