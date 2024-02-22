import React from "react";
import '../styles/Cv.css';
import cvData from '../cv.json';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Cv() {
    return (
        <div className="cv">
            <div className="tables">
            <h1>Arbetslivserfarenhet</h1>
            <table className="work">
                <tr>
                    <th>Roll</th>
                    <th>Arbetsplats</th>
                    <th>Period</th>
                </tr>
                {cvData.jobb.map((jobb) => (
                    <tr key={jobb.id}>
                        <td>{jobb.titel}</td>
                        <td>{jobb.arbetsplats}</td>
                        <td>{jobb.period}</td>
                    </tr>
                ))}

                <Popup
                    trigger={<button className="button">Mer info om maskinoperatör</button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        {cvData.info1.map((info) => (
                            <div><h2>Maskinoperatör</h2><p>{info.maskinoperator}</p></div>  
                        ))}
                    </div>
                    )}
                </Popup>

                <Popup
                    trigger={<button className="button">Mer info om butiksbiträde</button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        {cvData.info2.map((info) => (
                            <div><h2>Butiksbiträde</h2><p>{info.butiksbitrade}</p></div>  
                        ))}
                    </div>
                    )}
                </Popup>

            </table>
            <h1 className="utbildning">Utbildning</h1>
            <table className="student">
                <tr>
                    <th>Utbildning</th>
                    <th>Skola</th>
                    <th>Period</th>
                </tr>
                {cvData.utbildning.map((utb) => (
                    <tr key={utb.id}>
                        <td>{utb.program}</td>
                        <td>{utb.utbildning}</td>
                        <td>{utb.period}</td>
                    </tr>
                ))}
                <Popup
                    trigger={<button className="button">Mer info om systemutveckling</button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        {cvData.info3.map((info) => (
                            <div><h2>Systemutvecklare .NET</h2><p>{info.systemutveckling}</p></div>  
                        ))}
                    </div>
                    )}
                </Popup>

                <Popup
                    trigger={<button className="button">Mer info om Teknikprogrammet</button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        {cvData.info4.map((info) => (
                            <div><h2>Teknikprogrammet Informations och Medieteknik.</h2><p>{info.teknikprogrammet}</p></div>  
                        ))}
                    </div>
                    )}
                </Popup>
            </table>
            </div>
            <div>
                
            </div>
        </div>
        
    );
}
