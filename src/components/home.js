import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { joinPartyAsStudent, getPartyGame } from '../actions';
import LearnVerseBanner from '../assets/learnverse_logo_banner.png';
import '../styles.scss';

const Home = (props) => {
  const [name, setName] = useState('');
  const [partyId, setPartyId] = useState('');
  const navigate = useNavigate();

  const handleSubmission = async () => {
    const game = await props.getPartyGame(partyId);
    props.joinPartyAsStudent(partyId, name, game, navigate);
  };

  return (
    <div className="home-container">
      <div className="horizontally-centered"><img className="banner" src={LearnVerseBanner} alt="LearnVerse banner" /></div>
      <div className="horizontally-centered">
        <TextField label="Enter Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField className="right" label="Enter Party Code" variant="outlined" value={partyId} onChange={(e) => setPartyId(e.target.value)} />
      </div>
      <div className="horizontally-centered"><Button variant="contained" size="large" onClick={() => handleSubmission()}>Join Party</Button></div>
      <div className="horizontally-centered"><NavLink to="selection">If you are an instructor, click here to create a new game</NavLink></div>
    </div>
  );
};

export default connect(null, { joinPartyAsStudent, getPartyGame })(Home);
