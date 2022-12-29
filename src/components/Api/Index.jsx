import React, { useState, useEffect } from "react";
import axios from "axios";
import { DivContainer } from "./styles";
import Live from "../../images/live.png";
import Dead from "../../images/dead.png";
import Unknown from "../../images/unknown.png";

export default function Api() {
    const url = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState([]);
    //const [color, setColor] = useState({});
    //const [message, setMessage] = useState("");




    function getCharacters() {
        axios
            .get(`${url}`)
            .then((response) => {

                setCharacters(response.data.results);
                console.log(response.data.results);
            })

            .catch(() => {
                console.error("Error");
            });
    }

    function geo(){
        //https://bradhick.medium.com/react-acessando-a-localiza%C3%A7%C3%A3o-de-um-dispositivos-com-recurso-nativo-a7d07037da5f
        navigator.geolocation.getCurrentPosition( location => {
            console.log(location);
    })}


 

    useEffect(() => {
        getCharacters();
        geo();
        //changeColor();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {characters.map((persona) => {
                        return (
                            <>
                                <div className="col-md-6 col-lg-6">
                                    <DivContainer>
                                        <div key={persona.id}>
                                            <img className="img-fluid" src={persona.image} alt="photo" />
                                            <h4 className="mt-2">{persona.name}</h4>
                                            <p>
                                                Última localização conhecida: {persona.location.name}
                                            </p>
                                            <p>Visto pela primeira vez em:: {persona.origin.name}</p>
                                            <p>Espécie: {persona.species}</p>

                                            {/*Como fazer a condição aqui?*/}
                                            {function changeIcon(status) {
                                                const iconStatus = {
                                                    0: `${Live}`,
                                                    1: `${Dead}`,
                                                    2: `${Unknown}`,
                                                };
                                                return iconStatus[status];

                                            }}
                                            Status: {persona.status} {persona.status === "Alive" ? <img src={Live} /> : persona.status === "Dead" ? <img src={Dead} /> : persona.status === "unknown" ? <img src={Unknown} /> : null}

                                            {/*Se estiver vivo mostrar bolinha verde, morto bolinha vermelha*/}
                                        </div>
                                    </DivContainer>
                                </div>
                            </>
                        );
                    })}
                </div>
               
            </div>
        </>
    );
}
