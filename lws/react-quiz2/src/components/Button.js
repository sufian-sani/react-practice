import classes from '../styles/Button.module.css';

export default function Signup({className, children}){
    return (
        <div className={`${classes.button} ${className}`}>
            {children}
        </div>
    );
}