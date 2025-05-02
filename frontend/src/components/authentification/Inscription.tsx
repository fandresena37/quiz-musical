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
export default function Inscription() {
  const addCompte = async (values: z.infer<typeof SchemaLogin>) => {
    console.log(values)
    try {
      const res = await fetch("http://127.0.0.1:3400/adduser", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          email: values.email,
        }),
      });
      const response = await res.json();
      console.log(response);
      if (response.erreur) {
        alert("Erreur");
      } else {
        alert("Succes");
      }
    } catch {
      alert("Erreur");
    }
  };
  const SchemaLogin = z.object({
    username: z.string().min(3, { message: "username invalide" }),
    password: z.string().min(8, { message: "8 caractères minimum" }),
    email: z
      .string()
      .refine((mail) => mail.includes("@"), { message: "mail invalide" }),
  });
  const formLogin = useForm<z.infer<typeof SchemaLogin>>({
    resolver: zodResolver(SchemaLogin),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  return (
    <>
      <section className="w-screen h-screen flex">
        <section className="xl:w-1/2 h-full flex justify-center lg:w-[55%] md:w-full sm:w-full w-full">
          <Form {...formLogin}>
            <form onSubmit={formLogin.handleSubmit(addCompte)} className="h-full flex flex-col justify-center items-center max:sm:gap-4 gap-10 xl:w-1/2 xl:px-0 lg:w-[60%] lg:px-0 md:w-[400px] md:px-0 sm:w-[380px] sm:px-0 w-full px-5 max-sm:text-sm">
              <h1 className="text-[#2D57FF] font-extrabold lg:text-3xl xl:text-4xl 2xl:text-5xl max-sm:mb-4 mb-14 md:text-4xl sm:text-4xl text-3xl ">
                INSCRIPTION
              </h1>
              <FormField
                control={formLogin.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col">
                    <FormControl>
                      <Input                       
                        className="w-full h-[45px] sm:h-[45px] 2xl:h-[50px] md:h-[45px] lg:h-[50px] xl:h-[50px] bg-gray-100 rounded-full border-none font-extrabold max-sm:font-medium text-gray-400 max-sm:text-sm text-xl placeholder:text-gray-400 placeholder:text-lg pl-10 max-sm:placeholder:text-sm max-sm:pl-5"
                        placeholder="email"
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
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col">
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
                  <FormItem className="w-full flex flex-col">
                    <FormControl>
                      <Input
                        className="w-full h-[45px] sm:h-[45px] 2xl:h-[50px] md:h-[45px] lg:h-[50px] xl:h-[50px] bg-gray-100 rounded-full border-none font-extrabold max-sm:font-medium text-gray-400 max-sm:text-sm text-xl placeholder:text-gray-400 placeholder:text-lg pl-10 max-sm:placeholder:text-sm max-sm:pl-5"
                        placeholder="password"
                        ref={field.ref}
                        onChange={field.onChange}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage className="font-bold ml-3" />
                  </FormItem>
                )}
              />
              <Button
                className="w-full h-[45px] bg-[#2D57FF] rounded-full border-none text-lg font-bold cursor-pointer hover:bg-[#2b63ff] max-sm:text-sm"
                type="submit"
              >
                se connecter
              </Button>
              <div className="flex gap-2 font-bold max-sm:text-sm">
                <p className="text-gray-400 font-semibold">
                  J'ai déja un compte
                </p>
                <Link to="/login" className="text-[#2D57FF]">
                  se connecter
                </Link>
              </div>
            </form>
          </Form>
        </section>
        <section className="xl:w-1/2 h-full bg-[#2D57FF] hidden lg:flex justify-center items-center lg:w-[45%]">
          <Logo className="w-[55%] h-[55%] flex flex-col" />
        </section>
      </section>
    </>
  );
}
