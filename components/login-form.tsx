import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  async function onSubmit(formData: FormData) {
    "use server";

    console.log("SERVER ACTION INVOKED");
    supabase.auth.getUser().then((u) => console.log(u));
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative">
      <h2 className="font-bold text-xl">Welcome to Vecko</h2>
      <p className="text-slate-600 text-sm max-w-sm mt-2 dark:text-slate-300">
        Login to vecko to plan your week/month in the most proeficient ans
        simple way
      </p>

      <form className="my-8" action={onSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="john.doe@gmail.com" type="email" />
        </LabelInputContainer>

        <Button className="w-full" size={"lg"}>
          Login
          <ArrowRight className="h-4" />
        </Button>

        <div className="bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input bg-slate-50 dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--slate-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input bg-slate-50 dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--slate-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
