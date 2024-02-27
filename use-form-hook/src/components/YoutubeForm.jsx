import React from "react";
import { useForm } from "react-hook-form";

export const YoutubeForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data); //* we get an object
  };

  return (
    <div className="flex items-center justify-center p-52 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 border p-5 rounded "
        noValidate
      >
        <label htmlFor="username" className="font-bold text-white">
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="rounded  mt-2 p-2"
        />
        <p className="text-red-500">{errors.username?.message}</p>

        <label htmlFor="email" className="mt-5 font-bold text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format"
            }
          })}
          className="rounded   mt-2 p-2"
        />
        <p className="text-red-500">{errors.email?.message}</p>


        <label htmlFor="channel" className="mt-5 font-bold text-white">
          Channel
        </label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Channel name is required"
            }
          })}
          className="rounded  mt-2 p-2"
        />
        <p className="text-red-500">{errors.channel?.message}</p>


        <button
          type="submit"
          className="mt-5 rounded p-2 bg-slate-400  text-white font-bold hover:bg-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
