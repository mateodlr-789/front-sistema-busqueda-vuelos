import { Composition } from "./components/Composition";
import { DiaSelected } from "./components/dia-selected";
import { Header } from "./components/Header";
import Icon from "../../../components/atoms/icon/icon";
import CardResult from "./components/card-result";

export default function FlightSearch() {
  const days = [
    {
      days: "sab, 21/12",
    },
    {
      days: "sab, 21/12",
    },
    {
      days: "sab, 21/12",
    },
    {
      days: "sab, 21/12",
      selected: true,
    },
    {
      days: "sab, 21/12",
    },
    {
      days: "sab, 21/12",
    },
    {
      days: "sab, 21/12",
    },
  ];
  return (
    <Composition>
      <Composition.Header>
        <Header />
      </Composition.Header>
      <Composition.Body>
        <div className="flex flex-col w-full">
          <p className="text-black dark:text-white font-bold text-4xl">
            Elige un vuelo
          </p>

          <div className="flex flex-row w-full items-center bg-slate-100 p-4 h-14 rounded-xl mt-6 justify-between">
            <div className="cursor-pointer">
              <Icon type="row-left" className="text-black" />
            </div>
            <DiaSelected data={days} />
            <div className="cursor-pointer">
              <Icon type="row-right" className="text-black" />
            </div>
          </div>

          <CardResult/>
          <CardResult/>
          <CardResult/>
        </div>
      </Composition.Body>
      <footer className="w-full pb-14 pt-4 bg-gray-200 dark:bg-slate-800 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
            Copyright © 2024 - CodeF@ctory UdeA
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
            Términos y Condiciones
          </p>
        </div>
      </footer>
    </Composition>
  );
}
