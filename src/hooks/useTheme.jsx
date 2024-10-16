import { useEffect, useState } from "react"

export default function useTheme() {

    useEffect(() => {
        let mode = localStorage.getItem('mode')
        if (mode == 'dark' || mode == null) {
            dark()
        }
    }, []);

    const [_, __] = useState(true)

    function refresh() {
        __(!_)
        localStorage.setItem('mode', isDark() ? 'dark' : 'light')
    }

    function toogle(params) {
        window.document.querySelector('html').classList.toggle('dark')
        refresh()
    }

    function dark() {
        if (!window.document.querySelector('html').classList.contains('dark')) {
            window.document.querySelector('html').classList.add('dark')
            refresh()
        }
    }

    function light() {
        if (window.document.querySelector('html').classList.contains('dark')) {
            window.document.querySelector('html').classList.remove('dark')
            refresh()
        }
    }

    function isDark(params) {
        return document.querySelector('html').classList.contains('dark')
    }

    function isLight(params) {
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