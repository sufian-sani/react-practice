const List = () => {
    const city=['Dhaka','London','Delhi','Kolkata']
    return (
        <div>
            <ul>
                {
                    city.map((item,i)=>{
                        return <li key={i.toString()}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default List;