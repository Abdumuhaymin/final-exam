"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

const LoginPage: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const submit = (data: any) => {
    console.log(data);

    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      console.log(res);
    });
    router.push("/user/account");
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-white p-[40px] rounded-[8px] w-[500px]">
        <h2 className="text-muted text-black font-extrabold text-2xl text-center mb-6">
          Kirish
        </h2>
        <p className="text-center text-black  mb-7 text-secondary text-sm font-normal">
          Kirish uchun kerakli maydonlarni to‘ldiring
        </p>
        <form onSubmit={handleSubmit(submit)} className="w-full">
          <div className="mb-6">
            <label className="text-secondary text-black  font-semibold text-sm mb-2">
              Telefon raqam/Elektron pochta
            </label>

            <Input
              {...register("email")}
              type="text"
              className="w-full border border-[#EFF3F8] bg-[#F6F8FA]"
            />
          </div>
          <div className="mb-6">
            <label className="text-secondary text-black  font-semibold text-sm mb-2">
              Parolni kiriting
            </label>

            <Input
              {...register("password")}
              type="password"
              className="w-full border border-[#EFF3F8] bg-[#F6F8FA]"
            />
          </div>
          <p className="text-secondary text-black  font-semibold text-sm  text-end mb-9">
            Parolni unutdingizmi?
          </p>
          <Button className="w-full mb-9">Kirish</Button>
          <Button className="w-full bg-white border border-black text-black hover:bg-[#F6F8FA]">
            <Link href={"/register"}>Ro‘yxatdan o‘tish</Link>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
