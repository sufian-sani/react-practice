import Checkbox from './Checkbox';
import classes from '../styles/Answers.module.css';

export default function Quiz(){
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer} text="Text answer" />
        </div>
    );
}