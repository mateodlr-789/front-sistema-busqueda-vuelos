import { ReactNode, useState } from "react";

import { useWindowSize } from '@/app/_helpers';
import clsx from "clsx";
import { Icon } from "@/components";

interface Props {
    children: ReactNode
}

interface PropsMain {
    children: (props: {
        windowSize?: number
        menuActive: boolean
        toggleMenuActive: (value: boolean) => void
    }) => JSX.Element
}

interface PropsHeader {
    children: ReactNode
    windowSize?: number
    menuActive: boolean
    toggleMenuActive: (value: boolean) => void
}

export function LayoutMain({ children }: PropsMain) {
    const [menuActive, setMenuActive] = useState(false)
    const toggleMenuActive = (value: boolean) => {
        setMenuActive(value)
    }
    const { windowSize } = useWindowSize()
    return <>{children({ windowSize, menuActive, toggleMenuActive })}</>
}

LayoutMain.Header = function Header({ children, windowSize, toggleMenuActive, menuActive }: PropsHeader) {
    return (
        <header className={clsx('flex w-full items-center absolute h-14 left-0 bg-white border-2', windowSize && windowSize < 800 ? 'justify-between' : 'justify-end')}>
            {
                windowSize && windowSize < 800 &&
                <Icon onClick={() => toggleMenuActive(!menuActive)}  type="row-right" className={clsx('flex items-center text-black rounded-md m-2 p-2 h-10 cursor-pointer bg-white border-2', !menuActive && 'z-20')} />
            }
            <div className='flex z-20 flex-wrap items-center justify-end gap-2 text-black p-2'>
                {children}
            </div>
        </header>
    )
}

LayoutMain.Menu = function Menu({ children }: Props) {
    return (
        <>{children}</>
    )
}

LayoutMain.Body = function Body({ children }: Props) {
    return (
        <div className='overflow-hidden mt-14 h-full w-full'>
            {children}
        </div>
    )
}
