import CardFlight from "../../components/card-flight/card-flight";

export function Header() {
  return (
    <div className="flex flex-col w-full gap-4 px-14">
      <p className="text-black dark:text-white font-bold text-4xl">
        ¡Busca tu proximo vuelo!
      </p>
      <CardFlight/>
    </div>
  );
}
