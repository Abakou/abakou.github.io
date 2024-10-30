import { useTranslation } from "react-i18next";
import Hr from "./Hr";

import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

export default function FeatureSection({
    badge,
    title,
    image,
    description,
    year,
    role,
    link,
    verso = null

}) {

    const {t}=useTranslation()
    return <div className='flex flex-col-reverse lg:flex-row gap-12'>

        <div className='w-full bg-black/10 bg-opacity-10  dark:bg-white/10 rounded-2xl p-4 pb-16'>
            <span className='p-[0.3rem] bg-white dark:bg-abk inline-block mb-4 px-6 rounded-full'>{badge}</span>

            <div className="group">
                <img src={image} alt="" className='mx-auto shadow w-full rounded-3xl max-w-lg mt-16' />
            </div>


        </div>

        <div className='w-full'>
            <h1 className='font-manrope text-2xl'>
                {title}
            </h1>
            <h4 className='mt-10 text-[1.1rem] dark:opacity-65 opacity-90 text-justify'>
                {description}
            </h4>

            <div className='mt-8'>
                <div className="mb-2">{t('PROJECT INFO')}</div>

                <Hr />
                <div className='flex py-5'>
                    {t('Year')} <span className='ms-auto'>{year}</span>
                </div>
                <Hr />
                <div className='flex py-5'>
                    Role <span className='ms-auto'>{role}</span>
                </div>
                <Hr />
                <div className='mt-4'>
                    <a href={link} target="_blank" className='text-yellow-600 font-bold flex items-center'><span className="me-4">{t('View project')}</span> <OpenInNewWindowIcon /></a>
                </div>
            </div>
        </div>
    </div>

}