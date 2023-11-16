const Switch = () => {
    const status=false;
    switch(status){
        case true:
            return <button>Logout Btn</button>
        case false:
            return <button>Login Btn</button>
        default:
            return null
    }
};

export default Switch;