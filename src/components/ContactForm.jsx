import axios from "axios";
import { useState } from "react"
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion"

export default function ContactForm(props) {

    const [form, setForm] = useState({})

    const [l, setL] = useState()
    const [s, setS] = useState()


    function handleChange(evt) {
        setForm(f => ({ ...f, [evt.target.name]: evt.target.value }))
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setL(true)
        axios.post('https://formspree.io/f/xjvpjeyq', form).then(r => {
            setForm(f => ({}))
            setS(true)
        }).catch(e => {
            console.log(e);

        }).finally(() => {
            setL(undefined)
        });
    }

    if (s) {
        return <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-600/10 py-44 px-4 rounded-xl border border-green-600 text-center">
            <button className="bg-green-500 p-2 text-sm font-bold rounded-md px-4 hover:bg-green-700" onClick={() => setS(false)}><span className="pe-1">Message envoyé</span> <CheckIcon className="inline" /></button>
        </motion.div>
    }

    return <form action="" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
            <div>
                <label className='mb-2 block'>Name</label>
                <input type="text" name="name" value={form.name || ''} onChange={handleChange} className='w-full  bg-gray-50 border outline-none px-3 py-2.5 rounded focus:border-yellow-500 dark:bg-white/10 dark:border-green-50/10 dark:focus:focus:border-yellow-700' />
            </div>
            <div>
                <label className='mb-2 block'>Email</label>
                <input type="email" name="email" value={form.email || ''} onChange={handleChange} className='w-full  bg-gray-50 border outline-none px-3 py-2.5 rounded focus:border-yellow-500 dark:bg-white/10 dark:border-green-50/10 dark:focus:focus:border-yellow-700' />
            </div>
            <div>
                <label className='mb-2 block'>Message</label>
                <textarea name="message" value={form.message || ''} onChange={handleChange} rows={5} className='w-full  bg-gray-50 border outline-none px-3 py-2.5 rounded focus:border-yellow-500 dark:bg-white/10 dark:border-green-50/10 dark:focus:focus:border-yellow-700'></textarea>
            </div>
        </div>

        <button className='mt-5 font-mono dark:bg-yellow-600  bg-yellow-500  px-5 py-2.5 rounded-full hover:px-8 transition-all flex items-center'>POST IT
            {l && <span className="w-4 h-4 border-4 border-dashed rounded-full animate-spin border-white ms-2"></span>}</button>


    </form>
}