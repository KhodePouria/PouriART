import myimg from "./assets/Pic.png"


function mypic(){
    return(
        <div className="person-box">
            <img className="profile-pic" alt="my-pic" src={myimg} ></img>
            <div className="picture-text">
                <h1>Alex Spears</h1>
                <h2>Front-End Developer</h2>
                <h2>Live in texas</h2>
            </div>
            
        </div>
    )
}

export default mypic