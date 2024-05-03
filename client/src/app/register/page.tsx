"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const url = process.env.API_URL;

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data: any) => {
    console.log(data);
    axios.post("http://localhost:7777/register", data).then((res) => {
      router.push("/login");
    });
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className=" z-10 bg-white p-[40px] rounded-[8px] w-[500px]">
        <h2 className="text-muted font-extrabold text-2xl text-center mb-6">
          Ro‘yxatdan o‘tish
        </h2>
        <p className="text-center mb-7 text-secondary text-sm font-normal">
          Kirish uchun kerakli maydonlarni to‘ldiring
        </p>
        <form onSubmit={handleSubmit(submit)} className="w-full">
          <div className="mb-6">
            <label className="text-secondary font-semibold text-sm mb-2">
              Ism kiriting
            </label>

            <Input
              {...register("name")}
              type="text"
              className="w-full border border-[#EFF3F8] bg-[#F6F8FA]"
            />
          </div>
          <div className="mb-6">
            <label className="text-secondary font-semibold text-sm mb-2">
              Telefon raqam/Elektron pochta
            </label>

            <Input
              {...register("email")}
              type="text"
              className="w-full border border-[#EFF3F8] bg-[#F6F8FA]"
            />
          </div>
          <div className="mb-6">
            <label className="text-secondary font-semibold text-sm mb-2">
              Parolni kiriting
            </label>

            <Input
              {...register("password")}
              type="password"
              className="w-full border border-[#EFF3F8] bg-[#F6F8FA]"
            />
          </div>
          <p className="text-secondary font-semibold text-sm  text-end mb-9">
            Parolni unutdingizmi?
          </p>
          <Button className="w-full mb-9">Ro‘yxatdan o‘tish</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
