import React from 'react';
import * as S from './style';
import athena from '../../assets/athena.png';
import pata from '../../assets/pata_laranja.svg';
import peso from '../../assets/peso.svg';
import aniversario from '../../assets/aniversario.svg';
import sexo from '../../assets/sexo.svg';
import medical from '../../assets/medical.svg';
import calendar from '../../assets/calendar.svg';
import pata_branca from '../../assets/pata_branca.svg';
import vacina from '../../assets/vacina.svg';
import home from '../../assets/home.svg';
import notification from '../../assets/notification.svg';
import settings from '../../assets/settings.svg';

const Home = () => {
  return (
    <S.HomeStyle>
      <S.Content>
        <S.Header>
          <div>
            <p>April, 07,2021</p>
            <h2>Athena</h2>
          </div>
          <img src={athena} alt="foto perdil do dog" />
        </S.Header>
        <S.About>
          <ul>
            <li>
              Rotweiller
              <img src={pata} alt="" />
            </li>
            <li>
              35 kg
              <img src={peso} alt="" />
            </li>
            <li>
              23.06.2020
              <img src={aniversario} alt="" />
            </li>
            <li>
              Female
              <img src={sexo} alt="" />
            </li>
          </ul>
        </S.About>

        <S.MainInformation>
          <S.CardInformation>
            <img src={medical} alt="" />
            <p>Medical record</p>
          </S.CardInformation>
          <S.CardInformation>
            <img src={calendar} alt="" />
            <p>Medical record</p>
          </S.CardInformation>
          <S.CardInformation>
            <img src={pata_branca} alt="" />
            <p>Medical record</p>
          </S.CardInformation>
          <S.CardInformation>
            <img src={vacina} alt="" />
            <p>Medical record</p>
          </S.CardInformation>
        </S.MainInformation>
        <S.Navbar>
          <ul>
            <li>
              <a href="/" className="active">
                <img src={home} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={notification} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={settings} alt="" />
              </a>
            </li>
          </ul>
        </S.Navbar>
      </S.Content>
    </S.HomeStyle>
  );
};

export default Home;
