import Link from "next/link"

import NavLinks from "./nav-links"
import { Icon } from "@/components"
import { useEffect } from "react"

interface Props {
    menuActive: boolean
    toggleMenuActive: (value: boolean) => void
}

export default function MenuMovil({ menuActive, toggleMenuActive }: Props) {
    const closeMenu = () => {
        toggleMenuActive(false)
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuActive && event.target instanceof Element && !event.target.closest('.menu-container')) {
                closeMenu();
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [menuActive])

    return (
        menuActive &&
        <div className="flex flex-col absolute z-50 w-fit h-screen bg-white border-2 px-3 py-4 md:px-2 menu-container">
            <Link
                className="mb-2 flex h-20 z-50 items-end justify-start rounded-md border-2 bg-white p-4 md:h-40"
                href="/"
            >
                <p className="w-32 text-black md:w-40">
                    falta logo
                </p>
            </Link>

            <div className="flex items-center absolute justify-end ml-3 w-full h-full">
                <Icon onClick={() => toggleMenuActive(!menuActive)} type="row-left" className={'flex items-center text-black rounded-md m-2 p-2 h-10 cursor-pointer bg-white border-2'} />
            </div>

            <div className="flex flex-col justify-between z-50 h-full">
                <div className="h-fit flex flex-col gap-y-2">
                    <NavLinks />
                </div>
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form
                    action={() => {
                        console.log('falta accion para log out')
                    }}
                >
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <p className='text-black'>Falta icon</p>
                        <div className="text-black">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}
