import React from 'react';
import { navigate } from 'hookrouter';

import style from './NotFound.module.scss';
import { Button } from '../../components';
import { RocketTeam } from './assets';

export const NotFound = () => (
  <div className={style.root}>
    <div className={style.wrap}>
      <div className={style.error404}>
        404
        <div className={style.rocketTeam}>
          <img src={RocketTeam} alt="Rocket Team" />
        </div>
      </div>
      <div className={style.text}>
        The rocket team <span className={style.textBlack}>has won this time.</span>
      </div>
      <Button onClick={() => navigate('/')} color="yellow">
        Return
      </Button>
    </div>
  </div>
);
