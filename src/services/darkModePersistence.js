export default function darkModePersistence(setDarkMode, darkMode){
    if (localStorage.getItem("darkMode")==="false") {
        setDarkMode(true)
        localStorage.setItem("darkMode", "true")
    } else {
        setDarkMode(false)
        localStorage.setItem("darkMode", "false")
    }
    
}