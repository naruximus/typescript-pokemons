import React from 'react';
import { navigate } from 'hookrouter';

import style from './NotFound.module.scss';
import { Button, Layout } from '../../components';
import { RocketTeam } from './assets';
import { LinkEnum } from '../../routes';

export const NotFound = () => (
  <main className={style.root}>
    <Layout className={style.wrap}>
      <div className={style.error404}>
        404
        <div className={style.rocketTeam}>
          <img src={RocketTeam} alt="Rocket Team" />
        </div>
      </div>
      <div className={style.text}>
        The rocket team <span className={style.textBlack}>has won this time.</span>
      </div>
      <Button onClick={() => navigate(LinkEnum.HOME)} color="yellow">
        Return
      </Button>
    </Layout>
  </main>
);
