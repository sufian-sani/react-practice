import Hero4Child from "./Hero4Child";

const Hero4 = () => {
    const BtnClick=()=>{
        alert("Say Hello !")
    }
    return (
        <div>
            <Hero4Child childBtnClick={BtnClick} />
        </div>
    );
};

export default Hero4;