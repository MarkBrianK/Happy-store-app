import React from 'react';
import Button from '../Shared/Button';
import SheetModal from '../Shared/SheetModal';
import IconHolder from '../Shared/IconHolder';
import TextRendering from '../Shared/TextRendering';
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
                <div style={{display:'flex', justifyContent:"space-between", alignItems:"center", marginTop:"20px"}}>


                    <IconHolder> f</IconHolder>
                    <IconHolder> g</IconHolder>
                </div>




                <Button>SignIn</Button>

            </SheetModal>


        </div>

    )
}
export default SignIn;
