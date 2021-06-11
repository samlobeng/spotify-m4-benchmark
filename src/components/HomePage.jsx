import React, { useRef, useEffect, useState, Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Album from "./Album";
import Artist from "./Artist";

class HomePage extends Component {
  state = {
    songsArr: [],
    selectedId: "",
    
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=sarkodie",
        {
          headers: {
            "x-rapidapi-key":
              "ad90b1c895msha4f92d7545daf6ep16f444jsn7aba846aa478",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      let songs = await response.json();
      console.log(songs);
      this.setState({ songsArr: songs }, () =>
        console.log(this.state.songsArr.data)
      );
    } catch (error) {}
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <div className="mainInner">
              {this.state.songsArr.data?.map((songs, id) => (
                <div className="col-12 col-md-4 col-lg-3 cardsWrap" key={id}>
                  <h2>{songs.album.title}</h2>
                  {/* <span className="seeAll">SEE ALL</span> */}
                  <p className="subText">{songs.artist.name}</p>
                  <Album artist={songs} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default HomePage;
