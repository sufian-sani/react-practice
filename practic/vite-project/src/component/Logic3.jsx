const Logic3 = () => {
    const status=true;
    return (
        <div>
            <h1>Login Status</h1>
            {status && <button>Login Button</button>}
        </div>
    );
};

export default Logic3;