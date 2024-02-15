import "../styles/Home.css"

export default function Home(){
    return(
        <div className="homepagewrap">
                    <div className="homepage">
            <video autoPlay muted loop id="myVideo" poster="../assets/Skärmklipp.PNG">
                <source src="%PUBLIC_URL%/assets/video2.mp4" type="video/mp4"></source>
            </video>
            <div className="text">
            <h1>Adrian Moreno.</h1>
            <h2>Blivande systemutvecklare.</h2>
            </div>
            <div className="row">
                <div className="column">
                <a href="https://github.com/AdrianMorenoNystrom" target="_blank">
                <img id="git" src="%PUBLIC_URL%/assets/github.png" alt="Githublogo"></img>
                </a>
                </div>
                <div className="column">
                <a href="https://www.linkedin.com/in/adrianmorenonystrom/" target="_blank">
                <img id="linkedin" src="%PUBLIC_URL%/assets/linkenin.png" alt="Linkedinlogo"></img>
                </a>
                </div>
            </div>
        </div>
        </div>

    )
}