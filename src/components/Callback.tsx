import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Callback: React.FC = () => {

    const { error } = useAuth0();
    
    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return (
        <div>Callback page</div>
    );
};

export default Callback;