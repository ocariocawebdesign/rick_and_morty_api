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
  const [message, setMessage] = useState("");

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

  function geo() {
    //https://bradhick.medium.com/react-acessando-a-localiza%C3%A7%C3%A3o-de-um-dispositivos-com-recurso-nativo-a7d07037da5f
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
    });
  }

  useEffect(() => {
    setMessage("oi"); // Ver aqui a condição da mensagem
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
                <div className=" col-sm-12 col-sm-12 col-md-6 col-lg-6">
                  <DivContainer>
                    <div key={persona.id}>
                      <img
                        className="img-fluid rounded-full"
                        src={persona.image}
                        alt="photo"
                      />
                      <h5 className="mt-2 text-left">{persona.name}</h5>
                      <p className="text-left">
                        Última localização conhecida: {persona.location.name}
                      </p>
                      <p>Visto pela primeira vez em:: {persona.origin.name}</p>
                      <p>
                        Espécie: {persona.species}
                        <br />
                        {/*Como fazer a condição aqui?*/}
                        {function changeIcon(status) {
                          const iconStatus = {
                            0: `${Live}`,
                            1: `${Dead}`,
                            2: `${Unknown}`,
                          };
                          return iconStatus[status];
                        }}
                        {persona.status === "Alive" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center,",
                              alignItems: "center",
                            }}
                          >
                            <p>Status: {persona.status} - </p>
                            <img
                              src={Live}
                              style={{ width: "1rem", height: "1rem" }}
                            />
                          </div>
                        ) : persona.status === "Dead" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center,",
                              alignItems: "center",
                            }}
                          >
                            <p>Status: {persona.status} - </p>
                            <img
                              src={Dead}
                              style={{ width: "1rem", height: "1rem" }}
                            />
                          </div>
                        ) : persona.status === "unknown" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center,",
                              alignItems: "center",
                            }}
                          >
                            <p>Status: {persona.status} - </p>
                            <img
                              src={Unknown}
                              style={{ width: "1rem", height: "1rem" }}
                            />
                          </div>
                        ) : null}
                        {/*Se estiver vivo mostrar bolinha verde, morto bolinha vermelha*/}
                      </p>
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
