import useTheme from "../hooks/useTheme";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
export default function Header() {

    const theme = useTheme()
    const { t } = useTranslation()

    return <header className='min-h-20 py-9'>

        <div className=' max-w-screen-xl mx-auto items-center flex my-auto px-6 sm:px-12 md:px-24 lg:px-6 xl:px-2'>
            <a href="#" className='font-rowdies text-1xl'><span className="">Abakou</span></a>
            <div className='ms-auto flex gap-4 lg:gap-10 font-medium dark:opacity-80'>
                <a href="#works">{t("Work")}</a>
                <a href="#about_me">{t("Me")}</a>
                <a href="#contact">{t("Contact")}</a>
                <button className="ps-2 pe-3 dark:ps-3 dark:pe-2  bg-abk/20 dark:bg-white/10 rounded-full" onClick={() => theme.toogle(true)}>
                    {theme.isDark() ? <MoonIcon /> : <SunIcon />}
                </button>
            </div>
        </div>
    </header>
}