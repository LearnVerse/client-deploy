import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { NavLink, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { MODULES } from '../constants';
import {
  getAllPartyMembers, getInstructorStatus, getPartyStatus, startGame,
} from '../actions';
import LearnVerseLogo from '../assets/learnverse_logo.png';
import '../styles.scss';

const Room = (props) => {
  const { game, partyId } = useParams();
  const { partyMembers, isInstructor, gameStarted } = props;
  const { fontFamily, fontSize } = MODULES[game];
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    props.getAllPartyMembers(partyId);
    props.getInstructorStatus(userId);
    props.getPartyStatus(partyId);
  });

  const instructorStartGame = () => {
    props.startGame(partyId);
    navigate(`/game_${game}`);
  };

  const studentJoinGame = () => {
    navigate(`/game_${game}`);
  };

  return (
    <div className="room-container">
      <NavLink to="/"><div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div></NavLink>
      <div className="horizontally-centered"><img className="module-image" src={MODULES[game].picture} alt="Module" /></div>
      <div className="horizontally-centered">
        <div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Welcome to {MODULES[game].name}!</div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Your party code is: {partyId}</div>
          <div className="text-centered" style={{ fontFamily, fontSize }}>Waiting for all party members to join...</div>
        </div>
      </div>
      <div className="horizontally-centered" style={{ fontFamily, fontSize }}>
        {partyMembers && partyMembers.map((member, index) => {
          return <div key={index} className="name-bubble">{member.name}</div>;
        })}
      </div>
      {isInstructor
        && (
          <div className="horizontally-centered">
            <Button variant="contained" size="large" onClick={() => instructorStartGame()}>Start Game</Button>
          </div>
        )}
      {!isInstructor && gameStarted
        && (
          <div className="horizontally-centered">
            <Button variant="contained" size="large" onClick={() => studentJoinGame()}>Join Game</Button>
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    partyMembers: reduxState.partyState.partyMembers,
    gameStarted: reduxState.partyState.gameStarted,
    isInstructor: reduxState.userState.isInstructor,
  };
};

export default connect(mapStateToProps, {
  getAllPartyMembers, getInstructorStatus, getPartyStatus, startGame,
})(Room);
