// import Footer from "../accueil/Footer";
import Header from "../ui-quiz/Header";
// import { Card } from "../ui/card";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ClassementMainItems from "./ClassementMainItems";
//   import {
//     Table,
//     TableBody,
//     // TableCaption,
//     TableCell,
//     // TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";  


  const rang = [
    {
      rang: "01",
      profil: "/public/Sample_User_Icon.png",
      nom: "fax",
      score: "2000",
      quiz:"40"
    },
    {
      rang: "02",
      profil: "/public/Sample_User_Icon.png",
      nom: "fandresena",
      score: "3000",
      quiz:"40"
    },
    {
      rang: "03",
      profil: "/public/Sample_User_Icon.png",
      nom: "propla",
      score: "4000",
      quiz:"40"
    },
    {
        rang: "04",
        profil: "/public/Sample_User_Icon.png",
        nom: "propla",
        score: "4000",
        quiz:"40"
      },{
        rang: "05",
        profil: "/public/Sample_User_Icon.png",
        nom: "propla",
        score: "4000",
        quiz:"40"
      },{
        rang: "06",
        profil: "/public/Sample_User_Icon.png",
        nom: "propla",
        score: "4000",
        quiz:"40"
      },{
        rang: "07",
        profil: "/public/Sample_User_Icon.png",
        nom: "propla",
        score: "4000",
        quiz:"40"
      }
  ]  
export default function ClassementMain(){

    
    return (
        <>
            <section className="h-screen w-screen max-md:h-auto">
                <Header/>
                <section className=" w-full h-[calc(100%-60px)] flex justify-center items-center max-md:h-auto relative bg-gradient-to-bl to-blue-500 from-violet-600 px-20 gap-8">
                    <section className="w-[78%] bg-white rounded-2xl h-[85%] shadow-2xl">
                        <section className="h-[80px] w-full flex p-6 justify-between gap-2">
                            <Input className="w-full placeholder:font-semibold placeholder:text-[16px] bg-gray-200" placeholder="recherche ..."/>
                            <Select>
                                <SelectTrigger className="w-[180px] data-[placeholder]:font-semibold data-[placeholder]:text-sm bg-gray-200 font-semibold text-muted-foreground">
                                    <SelectValue placeholder="rang" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>rang</SelectLabel>
                                    <SelectItem value="hb">Haut en bas</SelectItem>
                                    <SelectItem value="bh">Bas en Haut</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </section>
                        <section className="w-full h-[calc(100%-80px)] flex flex-col gap-2 overflow-y-auto px-6 pt-4">
                            {rang.map((items)=>(
                                <ClassementMainItems data={items} key={items.rang}/>
                            ))}
                        </section>
                    </section>
                    <section className="w-[22%] h-[85%] bg-white rounded-2xl shadow-2xl"> 
                        {/* <Card></Card> */}
                    </section>
                </section>
            </section>
            {/* <Footer/> */}
        </>
    )
}