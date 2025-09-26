
// contenedor Global que nos permite compartir datos entre compoenentes "sin pasar props manualmente"

import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {
const [user,setUser] =useState(null); // Almacena los datos del usuario
const[loading, setLoading]= useState(true); // Indica si está cargando 
const[error, setError] = useState(null);// Almacena errores si ocurren


const checkAuth = () => {
  try {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  checkAuth();
  }, []);
  

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simulación de login
      if (email && password) {
        const userData = {
          id: '1',
          email,
          name: 'Usuario de Prueba'
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

  





















  