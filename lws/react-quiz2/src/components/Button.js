import classes from '../styles/Button.module.css';

export default function Signup({className, children}){
    return (
        <button className={`${classes.button} ${className}`}>
            {children}
        </button>
    );
}