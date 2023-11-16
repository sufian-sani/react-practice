const LoginStatus=(status)=>{
    if(status){
        return <button>Logout Btn</button>
    }
    else{
        return <button>Login Btn</button>
    }
}

const Login = () => {
        return (
            <div>
                <h1>Login Status</h1>
                {LoginStatus(false)}
            </div>
        );
    }
    
export default Login;