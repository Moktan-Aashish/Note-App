import { useForm } from "react-hook-form";
import AppScreen from "../../components/AppScreen";
import { signupSchema, type SignupSchema } from "../../schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import AppInput from "../../components/AppInput";
import { Lock, Mail, User } from "lucide-react";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onLogin = (data: SignupSchema) => {
    console.log(data);
  };
  return (
    <AppScreen className="flex justify-center items-center">
      <div className="w-full max-w-[420px] flex-col">
        <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>

        <p className="text-center mb-10">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium">
            Sign In
          </Link>
        </p>

        <div className="w-full flex flex-col gap-10">
          <form
            onSubmit={handleSubmit(onLogin)}
            className="flex flex-col gap-4"
          >
            <AppInput
              label="Username*"
              error={errors.username?.message}
              icon={<User />}
              placeholder="enter username"
              {...register("username")}
            />

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

            <button
              type="submit"
              disabled={isSubmitting}
              className="app-action-button mt-4"
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
