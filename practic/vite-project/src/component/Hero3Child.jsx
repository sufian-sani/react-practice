const Hero3Child = (props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.Item['name']} </li>
                <li>Age: {props.Item.age}</li>
                <li>City: {props.Item.city}</li>
            </ul>
        </div>
    );
};

export default Hero3Child;