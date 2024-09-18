import { Composition } from "./components/Composition";
import { DiaSelected } from "./components/dia-selected";
import { Header } from "./components/Header";
import Icon from "../../../components/atoms/icon/icon";

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

          <div className="w-full h-full flex flex-col mt-10">
            <div className="w-full h-full flex flex-row">
              <div className="w-4/6 h-full bg-white rounded-s-xl">
                <div className="w-full h-17 flex flex-row">
                  <div className="w-[163px] h-[28px] flex justify-center bg-[#facc15] rounded-tl-[20px] rounded-tr-none rounded-br-none rounded-bl-none">
                    <span className="text-[18px] font-semibold leading-[28px] text-black text-center">
                      Recomendado
                    </span>
                  </div>
                  <button className="w-[184px] h-[28px] flex justify-center bg-[#a3e635] rounded-tl-none rounded-tr-none rounded-br-[25px] rounded-bl-none border-none pointer">
                    <span className="flex w-[138px] h-[28px] justify-center text-[18px] font-semibold text-[#000] text-center">
                      Más economicó
                    </span>
                  </button>
                </div>
                <div className="flex flex-row items-center justify-between p-6 px-10">
                  <div>
                    <p className="text-black text-7xl">8:43</p>
                    <p className="text-black text-4xl">MDE</p>
                  </div>
                  <div className="text-black flex flex-row">
                    <hr className="border-t border-gray-300" />
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <Icon className="text-black text-2xl" type="air-plane" />
                      <p>1:03</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="text-black text-7xl">9:47</p>
                    <p className="text-black text-4xl">BOG</p>
                  </div>
                </div>
              </div>
              <div className="w-2/6 rounded-e-xl flex flex-col text-start items-center justify-center bg-gray-500">
                <p className="text-black text-xl">Desde</p>
                <p className="text-black text-4xl">COP 268.789</p>
              </div>
            </div>
            <div className="w-full h-full flex flex-row">
              <div className="w-1/3">
                  <div className="w-full bg-gray-600 flex justify-center items-center">
                    <p className="text-white text-xl">Vuelos nacional directo</p>
                  </div>
                  <div className="min-h-64 bg-gray-800 p-6 border-r-2 border-white flex flex-col">
                      <p className="text-xl text-white">Economica</p>
                      <p className="text-xl text-white">COP 268.798</p>
                      <p className="mt-2">Bolso o mochila pequeña</p>
                  </div>
              </div>
              <div className="w-1/3">
                  <div className="w-full bg-gray-600 flex justify-center items-center">
                    <p className="text-white text-xl">Vuelos nacional directo</p>
                  </div>
                  <div className="min-h-64 bg-gray-800 p-6 border-white flex flex-col">
                      <p className="text-xl text-white">Economica</p>
                      <p className="text-xl text-white">COP 268.798</p>
                      <p className="mt-2">Bolso o mochila pequeña</p>
                  </div>
              </div>
              <div className="w-1/3">
                  <div className="w-full bg-gray-600 flex justify-center items-center">
                    <p className="text-white text-xl">Vuelos nacional directo</p>
                  </div>
                  <div className="min-h-64 bg-gray-800 p-6 border-l-2 border-white flex flex-col">
                      <p className="text-xl text-white">Economica</p>
                      <p className="text-xl text-white">COP 268.798</p>
                      <p className="mt-2">Bolso o mochila pequeña</p>
                  </div>
              </div>
            </div>
          </div>
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
				</div>
			</Composition.Body>
		</Composition>
	);
}

