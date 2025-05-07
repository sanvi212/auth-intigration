import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContexts';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div className='max-w-sm'>
            <p>Your Email: {user.email}</p>
        </div>
    );
};

export default Profile;