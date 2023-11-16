const Logic1 = () => {
    let marks=85;
    return (
        <div>
            {marks>80?<h1>Brillient Result</h1>:<h1>Avarage Result</h1>}
        </div>
    );
};

export default Logic1;