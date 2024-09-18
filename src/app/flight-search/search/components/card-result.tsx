"use client";

import { Icon } from "@/components";
import { useState } from "react";

export default function CardResult() {
  const [show, changeShow] = useState(false);
  const setShow = () => {
    changeShow(!show);
  };
  return (
    <div className="w-full h-full flex flex-col mt-10">
      <div className="w-full h-full flex flex-row" onClick={() => setShow()}>
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
      {show && (
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
      )}
    </div>
  );
}
