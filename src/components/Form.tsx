import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormProps {
  className?: string;
}

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: number;
};

const Form: FC<FormProps> = ({ className }) => {
  const schema = yup.object({
    firstname: yup
      .string()
      .max(255, "le nombre de caractères ne doit pas depasser 255")
      .required("Merci d'entrer votre prénom"),
    lastname: yup
      .string()
      .max(255, "le nombre de caractères ne doit pas depasser 255")
      .required("Merci d'entrer votre Nom"),
    email: yup
      .string()
      .email("Entrer un mail valide")
      .max(255, "le nombre de caractères ne doit pas depasser 255")
      .required("Merci d'entrer une adresse mail"),
    password: yup.string().required("Merci d'entrer votre mot de passe"),
    phone: yup
      .number()
      .typeError("Merci un nombre valide")
      .required("Merci d'entrer un numéro de téléphone"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} bg-white bg-opacity-70 space-y-4 p-5 pt-8 shadow-md flex-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-slate-50 w-[33rem] `}
    >
      <div className="flex space-x-2">
        <div className="flex flex-col justify-start items-start w-1/2">
          <label
            htmlFor="firstname"
            className="text-lg font-semibold text-gray-600"
          >
            Firstname
          </label>
          <input
            {...register("firstname")}
            type="text"
            className="w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none"
            placeholder="Enter you firstname"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-start items-start w-1/2">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-gray-600"
          >
            Lastname
          </label>
          <input
            {...register("lastname")}
            type="text"
            className="w-full bg-white p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none"
            placeholder="Enter you lastname"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col justify-start items-start w-1/2">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-gray-600"
          >
            email
          </label>
          <input
            {...register("email")}
            name="email"
            type="text"
            className="w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none"
            placeholder="Enter you email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col justify-start items-start w-1/2">
          <label
            htmlFor="image"
            className="text-lg font-semibold text-gray-600"
          >
            Phone number
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none"
            placeholder="Enter you lastname"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-start items-start">
        <label htmlFor="email" className="text-lg font-semibold text-gray-600">
          Passeword
        </label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none"
          placeholder="Passeword"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <button className="px-4 py-2 mt-4 font-semibold bg-gray-800 hover:bg-slate-900 w-full rounded-md text-white uppercase">
          connexion
        </button>
      </div>
    </form>
  );
};

export default Form;
