import React from 'react';
import {Container, SignUp as SignUpComponents} from '../index';

function SignUp(){
    return (
        <div className='py-8'>
            <Container>
                <SignUpComponents />
            </Container>
        </div>
    )
}

export default SignUp;