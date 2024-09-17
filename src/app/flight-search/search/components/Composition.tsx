import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export function Composition({ children }: Props) {
  return (
    <div className="bg-white flex flex-col items-center gap-2 w-full h-full justify-center dark:bg-slate-950">
      {children}
    </div>
  );
}

Composition.Header = function Header({children}:Props) {
    return (
        <div className="mt-10 w-full">
            {children}
        </div>
    )
}

Composition.Body = function Body({children}:Props) {
    return (
        <div className="w-full overflow-auto  h-full flex flex-col mt-12 items-center px-12">
            {children}
        </div>
    )
}