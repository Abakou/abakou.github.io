
export default function ViewPort() {

    if(import.meta.env.MODE !== 'development')return <></>

    return <div className="fixed top-1 left-5 opacity-50 text-sm bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full">
        <span className="hidden max-sm:block">sm</span>
        <span className="hidden sm:max-md:block">md</span>
        <span className="hidden md:max-lg:block">lg</span>
        <span className="hidden lg:max-xl:block">xl</span>
        <span className="hidden xl:block">2xl</span>
    </div>
}