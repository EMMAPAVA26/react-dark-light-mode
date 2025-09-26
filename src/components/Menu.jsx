import { useTheme } from "../context/ThemeContext"
import { Link } from "react-router-dom"

export const Menu = () => {
const {isDarkMode,toggleTheme} = useTheme();
  
  return (
    <>
     <div>
        <Link to={"/"}>
          <button>
            Home
          </button>
        </Link>
        <Link to={"/login"}>
          <button>
            Login
          </button>
        </Link>
        <Link to={"/profile"}>
          <button>
            Profile
          </button>
        </Link>
        <button onClick={toggleTheme}>
        {isDarkMode ? 'light Mode' : 'Dark Mode'}
        </button>

    
     </div>
    </>
  )  
} 