import useTheme from "./hooks/useTheme"

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function Header() {

    const theme = useTheme()

    return <header className='min-h-20 py-9'>
        <div className=' max-w-screen-xl mx-auto items-center flex my-auto px-6 sm:px-12 md:px-24 lg:px-6 xl:px-2'>
            <a href="#" className='font-bebas text-2xl'>abakou</a>
            <div className='ms-auto flex gap-4 lg:gap-10 font-medium dark:opacity-80'>

                <a href="#works">Work</a>
                <a href="#about_me">Me</a>
                <a href="#contact">Contact</a>
                <button className="ps-5 pe-2 dark:ps-2 dark:pe-5   bg-abk text-white  dark:bg-white/80 dark:text-abk rounded-full" onClick={theme.toogle}>
                    {theme.isDark() ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </div>
    </header>
}