import React from 'react';
import Button from '../Shared/Button';
import SheetModal from '../Shared/SheetModal';
import IconHolder from '../Shared/IconHolder';
import TextRendering from '../Shared/TextRendering';
import InputField from '../Shared/InputField';

function SignIn() {
    return (
        <div>
            <TextRendering
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                SignIn
            </TextRendering >

            <SheetModal>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginTop: "50px" }}>


                    <IconHolder> f</IconHolder>
                    <IconHolder> g</IconHolder>
                </div>

                <form style={{marginTop:"70px"}}>
                    <InputField label="Email address" type="email" placeholder="Enter Email adress" />
                    <InputField label="Password" type="password" placeholder="Enter Password..." />

                    <Button type="submit" >
                        <TextRendering
                            style={{
                                fontWeight: "normal",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            Log In
                        </TextRendering>
                    </Button>

                </form>



                <TextRendering
                    style={{
                        fontWeight: "normal",
                        fontSize: 14,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "gray",
                        marginTop: "20px",
                    }}
                >
                    Don't have an account?

                    <span
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Sign Up
                    </span>

                </TextRendering>

            </SheetModal>


        </div>

    )
}
export default SignIn;
