import React, { useState } from 'react';
import Button from '../Shared/Button';
import SheetModal from '../Shared/SheetModal';
import IconHolder from '../Shared/IconHolder';
import TextRendering from '../Shared/TextRendering';
import InputField from '../Shared/InputField';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault();
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        const data = await response.json();
        console.log(data);
        // navigate('')
    };

    return (
        <div>
            <TextRendering
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                SignIn
            </TextRendering>

            <SheetModal>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '50px',
                    }}
                >
                    <IconHolder>f</IconHolder>
                    <IconHolder>g</IconHolder>
                </div>

                <form style={{ marginTop: '50px' }} onSubmit={handleLogIn}>
                    <InputField
                        label="Username"
                        type="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" style={{ marginTop: '30px' }}>
                        <TextRendering
                            style={{
                                fontWeight: 'normal',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Log In
                        </TextRendering>
                    </Button>
                </form>

                <TextRendering
                    style={{
                        fontWeight: 'normal',
                        fontSize: 14,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'gray',
                        marginTop: '20px',
                    }}
                >
                    Dont have an account?{' '}
                    <span
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        Sign Up
                    </span>
                </TextRendering>
            </SheetModal>
        </div>
    );
}

export default SignIn;
