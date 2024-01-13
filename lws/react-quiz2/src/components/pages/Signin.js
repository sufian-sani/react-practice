// import classes from "../../styles/Signin.module.css";
import Illustration from "../Illustration";
// import Form from "../Form";
// import TextInput from "../TextInput";
// import Counter from '../Counter';
import LoginForm from "../LoginForm";

export default function Login(){
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <LoginForm />
                {/*<Form className={`${classes.login}`}>*/}
                {/*    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />*/}
                {/*    <TextInput type="password" placeholder="Enter password" icon="lock" />*/}
                {/*    <Counter>*/}
                {/*        <span>Submit now</span>*/}
                {/*    </Counter>*/}
                {/*    <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>*/}
                {/*</Form>*/}
            </div>
        </>
    );
}