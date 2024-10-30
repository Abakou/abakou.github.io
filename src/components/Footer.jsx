import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return <footer className='py-24 text-center text-xs '>


        <span className="gap-8 flex items-center justify-center">
            <span className='opacity-40'>&copy; 2024 Abakou</span>
            {i18n.language != 'en' && <button onClick={() => changeLanguage('en')} className="flex items-center">
                <img src="https://www.worldometers.info//img/flags/small/tn_us-flag.gif" className="w-5 me-1" />
                <span className="font-bold">EN</span>
            </button>}

            {i18n.language != 'fr' && <button onClick={() => changeLanguage('fr')} className="flex items-center">
                <img src="https://www.worldometers.info//img/flags/small/tn_fr-flag.gif" className="w-5 me-1" />
                <span className="font-bold">FR</span>
            </button>}

        </span>

    </footer>
}