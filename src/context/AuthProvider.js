import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    //const [auth, setAuth] = useState({});
    
    const [userInfo, setUserInfo] = useState({});

    const register = (email, password, number, username) => {
        setIsLoading(true);
        fetch('http://localhost:5000/register', {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              username,
              number
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
            toast(json.message);
            setIsLoading(false);
          });
    };

    const login = (email, password) => {
        console.log("HERE")
        fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(json => {
            if(json.token) {
               /*  if(json?.data?.status === 'Inactive') {
                    Alert.alert(
                        "Account Inactive",
                        "Kindly wait for your account to be verified and activated. Thank you!",
                        [
                          {text: "Try Again"}
                        ]
                      );
                } else { */
                    setUserInfo(json.data);
                    localStorage.setItem('userInfo', JSON.stringify(json.data))
                    setIsLoading(false);
                    console.log(json.data)
                /* } */
            } else {
                console.log("nigga")
                toast("Incorrect 'Email' or 'Password'");
            }
        });
    }

    const logout = () => {
        setIsLoading(true);
        localStorage.removeItem('userInfo');
        setUserInfo();
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            let userInfo = await localStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if(userInfo){
                setUserInfo(userInfo);
            }
        } catch (e) {

        }
    }

    useEffect(() => {
        isLoggedIn(); 
    }, [])
    

    return (
        <AuthContext.Provider value={{isLoading, userInfo, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
