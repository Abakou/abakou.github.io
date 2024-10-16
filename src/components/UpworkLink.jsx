import UpworkLogo from "./UpworkLogo";

export default function UpworkLink() {

    return <a href="https://www.upwork.com/freelancers/~0123f0c8d4018ca5d6?viewMode=1" target='_blank' className=' text-green-700 dark:text-green-500 bg-green-700/10 p-3 hover:py-2 rounded-full transition-all group flex items-center'>
        <span className='group-hover:mr-2 group-hover:w-[2.9rem] w-[0]  transition-all duration-500 overflow-hidden text-xs font-bold'>Upwork</span>
        <UpworkLogo width={"1.4rem"} height={"1.4rem"} className="inline" />
    </a>
}

