import { Card } from "../ui/card";

interface ClassementData {
  rang: string;
  profil: string;
  nom: string;
  score: string;
  quiz: string;
}

export default function ClassementMainItems({ data }: { data: ClassementData }) {
  const { rang, profil, nom, score, quiz } = data;

  return (
    <Card className="w-full h-[70px] shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <span className={`text-xl font-bold ${rang === "01" ? 'text-yellow-500' : rang === "02" ? 'text-blue-500' :rang === "03" ? 'text-purple-500':''}`}>{rang}</span>
          <img
            src={profil}
            className="w-12 h-12 rounded-full"
          />
          <span className="text-lg font-semibold">{nom}</span>
          {rang == "01" || rang == "02" || rang == "03" ? (
            <img src={`/public/${rang}.png`} className="w-6"/>
          ):<></>}
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <span>Score: <strong>{score}</strong></span>
          <span>Quiz réalisés: <strong>{quiz}</strong></span>
        </div>
      </div>
    </Card>
  );
}
