import React, {useEffect, useState} from 'react';

const PassGeneratorFrom = () => {
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState(false)
    const [specialAllow, setSpecialAllow] = useState(false)
    const [lenpass, setLenpass] = useState(8)

    const passwordGenerator = () => {
        let length = lenpass;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numeric = "0123456789";
        let special = "!$^&*-=+_?";
        if(number){
            charset += numeric;
        }
        if(specialAllow){
            charset += special;
        }
        let gpassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            gpassword += charset[randomIndex];
        }
        setPassword(gpassword)
    }

    useEffect(() => {
        passwordGenerator()
    }, [number, specialAllow,lenpass]);

    function copyVal(e){
        window.navigator.clipboard.writeText(password)
    }

    return (
        <div>
            <label>Password Generator:</label>
            <br/>
            <input
                value={password}
                type="text"
                disabled
            />
            <button
                type="button"
                onClick={copyVal}
            >
                Copy
            </button>
            <input
                type="range"
                min={8}
                max={100}
                value={lenpass}
                onChange={(e) => {
                    setLenpass(e.target.value)
                }}
            />
            <label>Number:</label>
            <input
                type="checkbox"
                defaultChecked={number}
                onChange={() => {
                    setNumber(!number);
                }}
            />
            <label>Special:</label>
            <input
                type="checkbox"
                defaultChecked={specialAllow}
                onChange={() => {
                    setSpecialAllow(!specialAllow);
                }}
            />
            {/*<hr />*/}
            <br/>
            <br/>
            <button type="button" onClick={passwordGenerator}>Generate</button>
        </div>
    );
};

export default PassGeneratorFrom;