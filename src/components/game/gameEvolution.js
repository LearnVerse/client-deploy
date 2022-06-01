/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { MODULES } from '../../constants';
import { getPartyStatus, playVideo, stopVideo } from '../../actions';
import UnityCanvasEvolution from './unityCanvasEvolution';
import LearnVerseLogo from '../../assets/learnverse_logo.png';
import MyVideo from '../../assets/evolution.mp4';
import '../../styles.scss';

const GameEvolution = (props) => {
  const game = 'evolution';
  const address = localStorage.getItem('address');
  const addresses = localStorage.getItem('addresses');
  const partyId = localStorage.getItem('partyId');
  const isInstructor = localStorage.getItem('isInstructor');
  const { showVideo } = props;
  const { fontFamily, fontSize } = MODULES[game];

  useEffect(() => {
    props.getPartyStatus(partyId);
  });

  const instructorShowVideo = () => {
    props.playVideo(partyId);
  };

  const instructorStopVideo = () => {
    props.stopVideo(partyId);
  };

  return (
    <div>
      {!showVideo
        ? (
          <div className="game-container">
            <div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div>
            <div className="horizontally-centered">
              <div className="game-info">
                <div style={{ fontFamily, fontSize }}>Welcome to Dino Adventure!</div>
                {isInstructor
                  ? <div style={{ fontFamily, fontSize }}>IP Addresses: {addresses}</div>
                  : <div style={{ fontFamily, fontSize }}>IP Address: {address}</div>}
              </div>
            </div>
            <div className="horizontally-centered"><UnityCanvasEvolution /></div>
            <div className="horizontally-centered"><Button variant="contained" size="large" onClick={() => instructorShowVideo()}>Show Video</Button></div>
            {isInstructor
            && (
              <div className="horizontally-centered"><Button variant="contained" size="large" className="right">End Game</Button></div>
            )}
          </div>
        )
        : (
          <div>
            <video loop autoPlay src={MyVideo} style={{ height: '80vh' }} />
            <div className="horizontally-centered"><Button variant="contained" size="large" onClick={() => instructorStopVideo()}>Stop Video</Button></div>
            {isInstructor
            && (
              <div className="horizontally-centered"><Button variant="contained" size="large" className="right">End Game</Button></div>
            )}
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    isInstructor: reduxState.userState.isInstructor,
    showVideo: reduxState.partyState.showVideo,
  };
};

export default connect(mapStateToProps, { getPartyStatus, playVideo, stopVideo })(GameEvolution);
