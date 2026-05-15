import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AppInput from "../../components/AppInput";
import AppScreen from "../../components/AppScreen";
import { loginSchema, type LoginSchema } from "../../schemas/login.schema";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <AppScreen className="flex justify-center items-center">
      <div className="w-full max-w-[420px] flex-col">
        <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>

        <p className="text-center mb-10">
          Don't have an account?{" "}
          <Link to={"/register"} className="font-medium">
            Sign Up
          </Link>
        </p>

        <div className="w-full flex flex-col gap-10">
          <form
            onSubmit={handleSubmit(onLogin)}
            className="flex flex-col gap-4"
          >
            <AppInput
              label="Email*"
              error={errors.email?.message}
              icon={<Mail />}
              placeholder="enter email"
              {...register("email")}
            />

            <AppInput
              label="Password*"
              error={errors.password?.message}
              icon={<Lock />}
              secure={true}
              placeholder="enter password"
              {...register("password")}
            />

            <div className="text-right mb-2">
              <Link to={"/reset"} className="font-medium">
                forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="app-action-button"
            >
              {isSubmitting ? "Loggin in..." : "Login"}
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <span className="text-center">or continue with</span>
            <a href="/google" className="app-social-link">
              Google
            </a>
          </div>
        </div>
      </div>
    </AppScreen>
  );
}
