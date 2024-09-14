'use client'
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { route } from "../_constants/route";

export default function FlightSearch() {
  const router = useRouter()
  return (
    <div className="bg-white w-full h-full flex items-center justify-center dark:bg-slate-950">
      <div className=" flex flex-col items-center md:flex-row gap-2">
        <Select>
          <SelectTrigger className="w-[200px] h-10">
            <SelectValue placeholder="Origen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Medellin</SelectItem>
            <SelectItem value="dark">Bogota</SelectItem>
            <SelectItem value="system">Cali</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px] h-10">
            <SelectValue placeholder="Destino" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="light">Medellin</SelectItem>
            <SelectItem value="dark">Bogota</SelectItem>
            <SelectItem value="system">Cali</SelectItem>
          </SelectContent>
        </Select>
        <button onClick={() => router.push(route.flightSearched)} className="bg-slate-950 p-2 text-center border-gray-300 border-2 rounded-md">
          Buscar vuelos
        </button>
      </div>
    </div>
  );
}
