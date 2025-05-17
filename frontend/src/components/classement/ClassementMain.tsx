import Footer from "../accueil/Footer";
import Header from "../ui-quiz/Header";
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
  import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";  


  const rang = [
    {
      rang: "01",
      profil: "FR",
      nom: "fax",
      Score: "2000",
    },
    {
      rang: "02",
      profil: "FX",
      nom: "fandresena",
      Score: "3000",
    },
    {
      rang: "03",
      profil: "FX",
      nom: "propla",
      Score: "4000",
    }
  ]  
export default function ClassementMain(){

    
    return (
        <>
            <section className="h-screen w-screen max-md:h-auto">
                <Header/>
                <section className=" w-full h-[calc(100%-60px)] flex justify-center items-center max-md:h-auto relative">
                    <div className="absolute -z-20 w-full h-full">
                        <section className="bg-gradient-to-bl to-blue-500 from-violet-600 w-full h-1/2"></section>
                        <section className="bg-white w-full h-1/2"></section>
                    </div>
                    <section className="container bg-white rounded-2xl h-[85%] shadow-2xl">
                        <section className="h-[80px] w-full flex p-6 justify-between">
                            <Input className="w-[350px] placeholder:font-semibold placeholder:text-[16px] bg-gray-200" placeholder="recherche ..."/>
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
                        <section>
                        <Table>
                            {/* <TableCaption>A list of your recent rangs.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                <TableHead>Rang</TableHead>
                                <TableHead>Profil</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead>Score</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {rang.map((rang) => (
                                <TableRow key={rang.rang}>
                                    <TableCell className="font-medium">{rang.rang}</TableCell>
                                    <TableCell>
                                        <img src="/public/Sample_User_Icon.png" alt="" className="w-10 h-10" />
                                    </TableCell>
                                    <TableCell>{rang.nom}</TableCell>
                                    <TableCell>{rang.Score}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </section>
                    </section>
                </section>
            </section>
            <Footer/>
        </>
    )
}