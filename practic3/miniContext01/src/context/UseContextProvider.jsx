import React, {useState} from 'react';
import UseContext from './UseContext.js'
// function UseContextProvider(props) {
//     const [user, setUser] = useState(null)
//     return (
//         <UserContext.Provider value={user,setUser}>
//             {children}
//         </UserContext.Provider>
//     );
// }

const UseContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UseContext.Provider value={{user, setUser}}>
            {children}
        </UseContext.Provider>
    );
};

export default UseContextProvider;
