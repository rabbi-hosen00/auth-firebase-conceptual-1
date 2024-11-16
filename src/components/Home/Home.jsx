import React, { useContext } from 'react';

import { authContext } from '../MainLayout/MainLayout';


const Home = () => {

    const contextValue = useContext(authContext)
    //console.log(contextValue);

    const { handleGooleLogin, handleGitHubLogin,handaleLogout } = contextValue;



    return (
        <div>
            <button onClick={handleGooleLogin }>Goole Login</button>
            <button onClick={handleGitHubLogin }>github Login</button>
            <button onClick={handaleLogout}>Log Out</button>
            
        </div>
    );
};

export default Home;