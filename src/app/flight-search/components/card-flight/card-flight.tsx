'use client'
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { route } from "@/app/_constants/route";

export default function CardFlight() {
  const router = useRouter()

  return (
    <>
      <div className=" flex w-full flex-col items-center md:flex-row gap-2 bg-slate-100 rounded-lg p-4">
        <Select>
          <SelectTrigger className="w-[200px] h-10 ">
            <SelectValue placeholder="Origen" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem className="text-white dark:text-black" value="Medellin">Medellin</SelectItem>
            <SelectItem className="text-white dark:text-black" value="Bogota">Bogota</SelectItem>
            <SelectItem className="text-white dark:text-black" value="Cali">Cali</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px] h-10">
            <SelectValue placeholder="Destino" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem className="text-white dark:text-black" value="Medellin">Medellin</SelectItem>
            <SelectItem className="text-white dark:text-black" value="Bogota">Bogota</SelectItem>
            <SelectItem className="text-white dark:text-black" value="Cali">Cali</SelectItem>
          </SelectContent>
        </Select>
        <button
          onClick={() => router.push(route.flightSearched)}
          className="bg-slate-950 min-w-max p-2 text-center border-gray-300 border-2 rounded-md"
        >
          Buscar vuelos
        </button>
      </div>
    </>
  );
}
