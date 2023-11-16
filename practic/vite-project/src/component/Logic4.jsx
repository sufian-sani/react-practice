const Logic4 = () => {
    let status=true;
    return (
        <div>
            <h1>Login Status 4</h1>
            {(()=>{
                if(status==true){
                    return <button>Logout Button</button>
                }
                else{
                    return <button>Login Button</button>
                }
            })()}
        </div>
    );
};

export default Logic4;