/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { MODULES } from '../constants';
import { createParty } from '../actions';
import LearnVerseLogo from '../assets/learnverse_logo.png';
import GameModule from './gameModule';
import '../styles.scss';

const Selection = (props) => {
  const [name, setName] = useState('');
  const [selection, setSelection] = useState('');
  const [numPlayers, setNumPlayers] = useState('');
  const navigate = useNavigate();

  const handleSubmission = () => {
    props.createParty(name, selection, numPlayers, navigate);
  };

  return (
    <div className="selection-container">
      <NavLink to="/"><div><img className="logo" src={LearnVerseLogo} alt="LearnVerse logo" /></div></NavLink>
      <div className="horizontally-centered">
        <h1>Choose Your Module!</h1>
      </div>
      <div className="horizontally-centered">
        {Object.values(MODULES).map((module, index) => {
          return <GameModule key={index} data={module} right={index > 0} onClick={(game) => setSelection(game)} />;
        })}
      </div>
      <div className="horizontally-centered">
        <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField className="right" label="Number of Players" variant="outlined" value={numPlayers} onChange={(e) => setNumPlayers(e.target.value)} />
      </div>
      <div className="horizontally-centered"><Button variant="contained" size="large" onClick={() => handleSubmission()}>Create Game</Button></div>
    </div>
  );
};

export default connect(null, { createParty })(Selection);
