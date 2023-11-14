import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const SignOut = () => {
    const { userSignOut } = useContext(AuthContext);
    return (
        <div>
            <div onClick={userSignOut} style={{fontSize: '14px', fontWeight: '600', color:'#6a6a6a'}}>Sign Out</div>
        </div>
    )
}

export default SignOut