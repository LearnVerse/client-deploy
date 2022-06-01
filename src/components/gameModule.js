import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, ButtonBase,
} from '@mui/material';
import '../styles.scss';

function GameModule(props) {
  const {
    game, picture, alt, name, description,
  } = props.data;
  const { right, onClick } = props;

  return (
    <div className={right && 'right'}>
      <ButtonBase onClick={() => { onClick(game); }}>
        <Card sx={{ height: 300, width: 300 }}>
          <CardMedia
            component="img"
            height="180"
            image={picture}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{name}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </div>
  );
}

export default GameModule;
