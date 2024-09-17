import clsx from "clsx";

interface item {
  days: string;
  selected?: boolean;
}
interface Props {
  data: Array<item>;
}

export function DiaSelected({ data }: Props) {
  return (
    <div className="mx-10 w-full h-14 flex flex-row items-center justify-between">
      {data.map((item: any, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "w-full max-h-max justify-center text-center items-center flex",
              item.selected
                ? "bg-slate-950 h-14 border-2 border-white text-white"
                : "text-black"
            )}
          >
            <p className={item.selected ? " text-white" : "text-black"}>
              {item.days}
            </p>
          </div>
        );
      })}
    </div>
  );
}
