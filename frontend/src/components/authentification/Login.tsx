import { Link } from "react-router-dom";
import Logo from "../ui-quiz/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navige = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{type:string,text:string}|null>(null);

    const selectUser = async (values: z.infer<typeof SchemaLogin>) => {
        setIsLoading(true);
        setMessage(null);
        try {
            const res = await fetch("http://127.0.0.1:3400/selectuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                }),
            });
            const response = await res.json();
            if (response.erreur) {
                setMessage({ type: "error", text: "Nom d'utilisateur ou mot de passe incorrect." });
            } else {
                navige("/");
            }
        } catch {
            setMessage({ type: "error", text: "Une erreur est survenue. Veuillez réessayer." });
        } finally {
            setIsLoading(false);
        }
    };

    const SchemaLogin = z.object({
        username: z.string().min(4, { message: "Minimum 4 caractères" }), // Aligné avec le cahier des charges
        password: z.string().min(8, { message: "Minimum 8 caractères" }), // Aligné avec le cahier des charges
    });

    const formLogin = useForm<z.infer<typeof SchemaLogin>>({
        resolver: zodResolver(SchemaLogin),
        defaultValues: {
            username: "",
            password: "",
        },
    });

  return (
    <>
      <section className="w-screen h-screen flex">
        <section className="xl:w-1/2 h-full bg-gradient-to-bl to-blue-500 from-violet-600 justify-center items-center hidden lg:flex lg:w-[45%] ">
          <Logo className="w-[55%] h-[55%] flex flex-col" />
        </section>
        <section className="xl:w-1/2 h-full flex justify-center lg:w-[55%] md:w-full sm:w-full w-full">
          <Form {...formLogin}>
            <form onSubmit={formLogin.handleSubmit(selectUser)} className="h-full flex flex-col justify-center items-center gap-10 xl:w-1/2 xl:px-0 lg:w-[60%] lg:px-0 md:w-[400px] md:px-0 sm:w-[380px] sm:px-0 w-full px-5">
              <h1 className="text-[#2D57FF] font-extrabold lg:text-3xl xl:text-4xl 2xl:text-5xl xl:mb-14 2xl:mb-14 mb-5 md:text-4xl sm:text-3xl text-2xl">
                WELCOME
              </h1>
              {message && (
                <div className={`text-center p-3 rounded-lg ${message.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                  {message.text}
                </div>
              )}
              <FormField
                control={formLogin.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col gap-3">
                    <FormControl>
                      <Input
                        className="w-full h-[45px] sm:h-[45px] 2xl:h-[50px] md:h-[45px] lg:h-[50px] xl:h-[50px] bg-gray-100 rounded-full border-none font-extrabold max-sm:font-medium text-gray-400 max-sm:text-sm text-xl placeholder:text-gray-400 placeholder:text-lg pl-10 max-sm:placeholder:text-sm max-sm:pl-5"
                        placeholder="username"
                        ref={field.ref}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage className="font-bold ml-3" />
                  </FormItem>
                )}
              />
              <FormField
                control={formLogin.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col gap-3">
                    <FormControl>
                      <Input
                        className="w-full h-[45px] sm:h-[45px] 2xl:h-[50px] md:h-[45px] lg:h-[50px] xl:h-[50px] bg-gray-100 rounded-full border-none font-extrabold max-sm:font-medium text-gray-400 max-sm:text-sm text-xl placeholder:text-gray-400 placeholder:text-lg pl-10 max-sm:placeholder:text-sm max-sm:pl-5"
                        placeholder="password"
                        ref={field.ref}
                        type="password"
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage className="ml-3 font-bold"/>
                  </FormItem>
                )}
              />
              <Button
                className="w-full h-[50px] bg-gradient-to-r to-blue-500 from-purple-600 rounded-full border-none text-lg font-bold cursor-pointer hover:bg-[#2b63ff] max-sm:h-[45px] max-sm:text-sm"
                type="submit" 
                disabled={isLoading}
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="15 85" />
                        </svg>
                    ) : null}
                    Se connecter
              </Button>
              <div className="flex gap-2 font-bold max-sm:text-sm">
                <p className="text-gray-400 font-semibold">
                  Je n'ai pas de compte
                </p>
                <Link to="/inscription" className="text-[#2D57FF]">
                  s'inscire
                </Link>
              </div>
            </form>
          </Form>
        </section>
      </section>
    </>
  );
}
