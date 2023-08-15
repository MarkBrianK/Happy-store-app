import React from 'react';
import Button from '../Shared/Button';
import SheetModal from '../Shared/SheetModal';
import Header from '../Shared/Header';
function SignIn() {
    return (
        <div>
            <Header>
            <h2 style={{fontWeight:"bold"}}>
                Sign In
            </h2>

            </Header>
            <SheetModal>


                <Button>SignIn</Button>

            </SheetModal>


        </div>

    )
}
export default SignIn;
