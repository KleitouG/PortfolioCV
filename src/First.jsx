import PFP from "./assets/PFP.jpg"

function First(){
    return(
        <div className="picture-div">
        <img className="PFP" src={PFP} alt="Profile Picture"></img>
        <h2>Georgios Kleitou</h2>
        <h3>Software Engineer</h3>
    </div>
    );
}

export default First