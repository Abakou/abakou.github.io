import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function LinkedInLink() {

    return <a href="https://www.linkedin.com/in/abakou" target='_blank' className='bg-blue-800/10 text-blue-800 dark:text-blue-500  p-3 hover:py-2 rounded-full transition-all group flex items-center'>
        <span className='group-hover:mr-2 group-hover:w-[3rem] w-[0]  transition-all duration-500 overflow-hidden text-xs font-bold'>Linkedin</span>
        <LinkedInLogoIcon width={"1.4rem"} height={"1.4rem"} className='inline' />
    </a>
}


