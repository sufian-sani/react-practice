function sum(a, b) {
    return a + b;
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
}

function Comment(props) {
    // console.log(props)
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
            <div>
                {sum(5,9)}
            </div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Comment;