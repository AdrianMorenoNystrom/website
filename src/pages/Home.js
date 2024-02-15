import "../styles/Home.css"


export default function Home(){
    return(
        <div className="homepagewrap">
            <div className="homepage">
                <video autoPlay muted loop playsInline id="myVideo" poster={`${process.env.PUBLIC_URL}/assets/Skärmklipp.PNG`}>
                <source src={`${process.env.PUBLIC_URL}/assets/video2.mp4`} type="video/mp4"></source>
                </video>
                    <div className="text">
                        <h1>Adrian Moreno.</h1>
                        <h2>Blivande systemutvecklare.</h2>
                    </div>
                        <div className="row">
                            <div className="column">
                                <a href="https://github.com/AdrianMorenoNystrom" target="_blank" rel="noopener noreferrer">
                                <img id="git" src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="GitHub"></img>
                                </a>
                            </div>
                            <div className="column">
                                <a href="https://www.linkedin.com/in/adrianmorenonystrom/" target="_blank" rel="noopener noreferrer">
                                <img id="linkedin" src={`${process.env.PUBLIC_URL}/assets/linkenin.png`} alt="LinkedIn"></img>
                                </a>
                        </div>
                </div>
            </div>
        </div>
    )
}