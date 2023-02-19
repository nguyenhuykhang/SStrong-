import React, { useState } from 'react'
import { authentication } from '../firebase/config';
import { useNavigate  } from 'react-router-dom'; 

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState("");
    let navigate = useNavigate();

    
    React.useEffect(()=>{
        const unsubcribed = authentication.onAuthStateChanged((user)=>{
            console.log({user});
            if (user) {
                setUser(user.displayName);
                // navigate(-1)
            }
        });
        //clean
        return ()=>{
            unsubcribed();
        }
    }, [navigate])

    return (
        <div>
            <AuthContext.Provider value = {user}>
        
                {children}
            </AuthContext.Provider>
        </div>
    )
    }
