'use client'
import { Icons } from "@/components/icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { AuthCredentialsValidator, TAuthCredentailsValidator } from "@/lib/validators/accountcredentials";

const page = () => {

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<TAuthCredentailsValidator>({resolver: zodResolver(AuthCredentialsValidator),});

  const onSubmit =({email, password}:TAuthCredentailsValidator) =>{

  }
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-[350px] flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                  {...register('email')}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="passwprd">Password</Label>
                  <Input
                  {...register('password')}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Enter your Password"
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
