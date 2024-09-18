import CardFlight from "./components/card-flight/card-flight";

export default function FlightSearch() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <main className="flex-1 px-40 py-8 flex items-center justify-center">
        <CardFlight />
      </main>
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
  );
}
