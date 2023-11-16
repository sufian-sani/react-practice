import classes from '../styles/Videos.module.css';
import Video from './Video';
import {Link} from 'react-router-dom'

export default function Videos(){
    return (
        <div className={classes.Videos}>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            <Link to="/quiz"> <Video /> </Link>
            {/* <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video /> */}
        </div>
    );
}