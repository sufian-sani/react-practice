import Question from './Question';
import classes from '../styles/Question.module.css';

export default function Result(){
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>
            <Question />
        </div>
    );
}