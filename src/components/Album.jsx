import React, { Component } from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import { Container, Row, Col } from "react-bootstrap";
import Artist from "./Artist";
class Album extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <div className="cardsWrapInner">
                <Link to={`/playlist/`+ this.props.artist.artist.id}>
                  <div className="card">
                    <div className="cardImage">
                      <img
                        src={this.props.artist.album.cover_medium}
                        alt="Pic 1"
                      />
                    </div>
                    <div className="cardContent">
                      <h3>{this.props.artist.title}</h3>
                      <span>{this.props.artist.artist.name}</span>
                    </div>
                    <span className="playIcon">
                      <PlayIcon />
                    </span>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Album;
