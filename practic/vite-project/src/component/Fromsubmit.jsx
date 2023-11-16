const Fromsubmit = () => {
    function SubmitForm(e){
        e.preventDefault();
        alert('You clicked me!')
    }
    return (
        <div>
            <form onSubmit={SubmitForm}>
                <input type="text" />
                <button>Send</button>
            </form>
        </div>
    );
};

export default Fromsubmit;