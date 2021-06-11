import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../svgs/note.svg'
import Album from './Album'


class Artist  extends Component{
render(){
    return (
        <>
      <div className="playlistPage">
        <div className="mainInner">
          <div className="playlistPageInfo">
            <div className="playlistPageImage">
              <img
                src={this.props.artist.album.cover_medium}
                alt="pic"
              />
            </div>
            <div className="playlistPageContent">
              <p className="smallText uppercase bold">Playlist</p>
              <h1>{this.props.artist.album.title}</h1>
  
              <p className="tagline">
                {this.props.artist.artist.name}
              </p>
              <div className="playlistPageDesc">
                <p className="spotify">Spotify</p>
                <span>699,428 likes</span>
                <span>4hr 35 min</span>
              </div>
            </div>
          </div>
          <div className="playlistPageSongs">
            <div className="playlistButtons">
              <span className="playIcon">
                <PlayIcon />
              </span>
              <div className="icons">
                <div className="icon iconsHeart">
                  <HeartIcon />
                </div>
                <div className="icon iconsDots"></div>
              </div>
            </div>
  
            <ul className="songList">
              <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                  <h3>{this.props.artist.title}</h3>
                  <span>{this.props.artist.artist.name}</span>
                </div>
                <div className="songTime">
                  <span>{this.props.artist.duration}</span>
                </div>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
 
  </>)
}
}
export default Artist
