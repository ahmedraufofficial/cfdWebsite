import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useRef, useState, useEffect, useContext } from 'react';
import {AuthContext} from '../context/AuthProvider';
import { Button } from '@mui/material';

//import axios from './api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const {isLoading, login} = useContext(AuthContext);

    const {userInfo} = useContext(AuthContext);

    useEffect(() => {
        if (!userInfo) {
            setSuccess(false)
        } else {
            setSuccess(true)
        }
    }, [success])

    return (
        <Container>
            {success ? (
                <Grid>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </Grid>
            ) : (
                <Grid>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        login(email, password)
                        setSuccess(true)
                    }}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            style={{
                                border: '1px solid white',
                                borderRadius: '0px',
                                height: 25,
                                marginTop: 10
                            }}
                        />

                        <label style={{marginTop: 10}} htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            style={{
                                border: '1px solid white',
                                borderRadius: '0px',
                                height: 25,
                                marginTop: 10
                            }}
                        />
                        <button variant="contained" style={{fontSize: "15px", color: "white", border: "1px solid white", marginTop: "5%", backgroundColor: "#ff8b3d", width: "200px"}}>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </Grid>
            )}
        </Container>
    )
}

export default Login