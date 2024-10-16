import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function GithubLink(params) {
    return  <a
    href="https://github.com/abakou"
    target='_blank'
    className='bg-black/80 text-white dark:bg-white/10 p-3 hover:py-2 rounded-full transition-all group flex items-center'>
    <span className='group-hover:mr-2 group-hover:w-[2.4rem] w-[0]  transition-all duration-500 overflow-hidden text-xs font-bold'>
      Github
    </span>
    <GitHubLogoIcon width="1.4rem" height="1.4rem" className=' inline' />
  </a>
}