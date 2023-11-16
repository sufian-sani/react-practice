import React, { useState } from 'react';

const Stateuse4 = () => {
    let [FormObj,setFormObj]=useState({fName:"",lName:"",city:"",genden:""})
    const InputOnChange=(property,value) => {
        setFormObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }
    
    const FormSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(FormObj));
    }

    return (
        <div className="container">
            <form onSubmit={FormSubmit}>
                <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} placeholder="First Name" type="text" /><br />

                <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} placeholder="Last Name" type="text" /><br />

                <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
                    <option value="">Choose</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                </select>
                <br />

                <input onChange={(e)=>{InputOnChange("genden",'Male')}} checked={FormObj.genden==="Male"} type="radio" name="genden" />Male
                <input onChange={(e)=>{InputOnChange("genden",'Female')}} checked={FormObj.genden==="Female"} type="radio" name="genden" />Female
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Stateuse4;