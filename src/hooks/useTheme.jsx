import { useEffect, useState } from "react"
import { getDefaultTheme, htmlNodeClassList } from "../lib/utils";

export default function useTheme() {

    useEffect(() => { (getDefaultTheme() == 'dark') && dark() }, []);

    const [_, __] = useState(true)

    function refresh(persist = false) {
        __(!_)
        if (persist) {
            localStorage.setItem('theme', isDark() ? 'dark' : 'light')
        }
    }

    function toogle(persist = false) {
        window.document.querySelector('html').classList.toggle('dark')
        refresh(persist)
    }

    function dark(persist = false) {
        if (!htmlNodeClassList().contains('dark')) {
            htmlNodeClassList().add('dark')
            refresh(persist)
        }
    }

    function light(persist = false) {
        if (htmlNodeClassList().contains('dark')) {
            htmlNodeClassList().remove('dark');
            refresh(persist)
        }
    }

    function isDark() {
        return htmlNodeClassList().contains('dark')
    }

    function isLight() {
        return !isDark()
    }

    return {
        toogle,
        dark,
        light,
        isDark,
        isLight
    }
}