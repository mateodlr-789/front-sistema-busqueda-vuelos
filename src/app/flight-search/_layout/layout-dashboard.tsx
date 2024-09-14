import { LayoutMain } from "./components/layout";
import Menu from "./components/menu";
import MenuMovil from "./components/menu-responsive";
import { Avatar } from "./components/avatar";

interface Props {
  children: React.ReactNode;
}

export default function LayoutDashboard({ children }: Props) {
  return (
    <LayoutMain>
      {({ windowSize, menuActive, toggleMenuActive }) => (
        <>
          <LayoutMain.Header
            windowSize={windowSize}
            toggleMenuActive={toggleMenuActive}
            menuActive={menuActive}
          >
            <button
              className="cursor-pointer border-2 p-2 rounded-md"
              onClick={() => console.log("holaaa")}
            >
              opciones
            </button>
            <div className="h-8 bg-gray-300 p-0 w-[2px] mx-4"></div>
            <Avatar />
          </LayoutMain.Header>

          <div className="flex relative z-10 flex-row w-full h-screen overflow-hidden">
            <LayoutMain.Menu>
              {windowSize && windowSize >= 800 ? (
                <Menu />
              ) : (
                <MenuMovil
                  menuActive={menuActive}
                  toggleMenuActive={toggleMenuActive}
                />
              )}
            </LayoutMain.Menu>

            <LayoutMain.Body>{children}</LayoutMain.Body>
          </div>
        </>
      )}
    </LayoutMain>
  );
}
