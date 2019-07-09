import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';

let opendoorSvg = (parse) => {
  if(parse){
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 32.326 32.327" style={{enableBackground:'new 0 0 32.326 32.327'}}><g><g>
    <path d="M8.048,20.654c0.148,0.184,0.225,0.487,0.225,0.913v0.242v1.787c0,0.213-0.021,0.412-0.063,0.599   c-0.043,0.186-0.096,0.327-0.162,0.424c-0.111,0.133-0.268,0.228-0.469,0.276c-0.203,0.054-0.502,0.082-0.896,0.093   c-0.406-0.013-0.709-0.037-0.904-0.076c-0.195-0.039-0.346-0.138-0.451-0.293c-0.125-0.207-0.188-0.586-0.188-1.14v-1.596   c0-0.084-0.006-0.152-0.018-0.205c0.025-0.404,0.082-0.705,0.17-0.898c0.076-0.172,0.227-0.289,0.453-0.35   c0.225-0.062,0.547-0.091,0.965-0.091c0.229,0,0.439,0.007,0.637,0.019C7.667,20.397,7.902,20.498,8.048,20.654z M14.038,20.466   c-0.15-0.049-0.371-0.073-0.66-0.073h-1.67v2.352h1.635c0.479,0,0.779-0.061,0.904-0.18c0.121-0.099,0.193-0.205,0.217-0.32   c0.023-0.115,0.041-0.322,0.053-0.621c0-0.426-0.047-0.725-0.141-0.898C14.302,20.602,14.191,20.518,14.038,20.466z M32.326,17.08   v10c0,1.935-1.564,3.5-3.5,3.5H3.5c-1.934,0-3.5-1.565-3.5-3.5v-10c0-1.933,1.566-3.5,3.5-3.5h4.023l4.695-6.383   c-0.133-0.406-0.223-0.832-0.223-1.283c0-2.301,1.867-4.167,4.168-4.167s4.166,1.866,4.166,4.167c0,0.451-0.09,0.876-0.224,1.283   l4.695,6.383h4.022C30.76,13.581,32.326,15.146,32.326,17.08z M9.574,21.621c0-0.517-0.053-0.906-0.158-1.172   C9.309,20.18,9.221,20.01,9.15,19.934c-0.133-0.203-0.336-0.356-0.611-0.461c-0.273-0.104-0.563-0.17-0.867-0.197   c-0.303-0.028-0.629-0.043-0.98-0.043c-0.369,0-0.697,0.013-0.986,0.037c-0.289,0.023-0.568,0.088-0.838,0.188   c-0.271,0.102-0.479,0.252-0.625,0.457c-0.156,0.229-0.26,0.494-0.311,0.797c-0.051,0.305-0.076,0.652-0.076,1.041v1.842   c0,0.92,0.172,1.551,0.512,1.894c0.221,0.239,0.508,0.397,0.857,0.473c0.352,0.074,0.783,0.111,1.297,0.111   c0.42,0,0.781-0.013,1.08-0.035c0.301-0.022,0.592-0.086,0.875-0.188c0.283-0.104,0.502-0.263,0.656-0.476   c0.141-0.203,0.25-0.416,0.326-0.64c0.076-0.221,0.115-0.534,0.115-0.94V21.621z M10.005,13.581h12.313l-3.372-4.586   c-0.738,0.668-1.709,1.086-2.783,1.086c-1.076,0-2.045-0.418-2.785-1.086L10.005,13.581z M15.792,21.567   c0-0.606-0.08-1.096-0.242-1.471c-0.178-0.342-0.457-0.562-0.832-0.66c-0.377-0.1-0.83-0.147-1.357-0.147h-2.943v6.729h1.291   v-2.172h1.967c0.348,0,0.684-0.045,1.006-0.137c0.322-0.092,0.551-0.223,0.689-0.395C15.652,22.979,15.792,22.395,15.792,21.567z    M21.212,24.914h-3.348v-1.785h3.159V22.08h-3.159v-1.688h3.329v-1.104h-4.62v6.729h4.639V24.914z M28.471,19.289h-1.302   l0.106,5.625h-0.033l-2.891-5.625h-2.146v6.729h1.304l-0.035-2.836l-0.071-2.791h0.053l2.854,5.625h2.162v-6.729L28.471,19.289   L28.471,19.289z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#23DA66"/>
    </g></g> </svg>;
  }else{
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 34.974 34.974" style={{enableBackground:"new 0 0 34.974 34.974"}}><g><g>
  	<path d="M31.326,14.039h-4.98l-5.43-7.701c0.219-0.479,0.344-1.008,0.344-1.565C21.26,2.689,19.57,1,17.487,1   c-2.085,0-3.773,1.69-3.773,3.774c0,0.56,0.124,1.089,0.343,1.564l-5.43,7.702H3.648C1.631,14.039,0,15.674,0,17.688v12.637   c0,2.017,1.634,3.648,3.648,3.648h27.68c2.016,0,3.646-1.633,3.646-3.648V17.689C34.975,15.673,33.34,14.039,31.326,14.039z    M8.615,22.632H7.01v-1.158c0-0.773-0.339-1.064-0.881-1.064c-0.54,0-0.88,0.291-0.88,1.064v5.838c0,0.771,0.34,1.051,0.88,1.051   c0.542,0,0.881-0.276,0.881-1.051v-1.543h1.605v1.436c0,1.73-0.864,2.72-2.532,2.72c-1.667,0-2.533-0.987-2.533-2.72v-5.622   c0-1.729,0.865-2.718,2.533-2.718s2.532,0.988,2.532,2.718V22.632z M16.323,8.361c0.366,0.119,0.758,0.185,1.163,0.185   c0.406,0,0.796-0.063,1.162-0.185l4.004,5.679H12.319L16.323,8.361z M14.147,29.798H9.653V18.988h1.698v9.267h2.795L14.147,29.798   L14.147,29.798z M19.91,27.203c0,1.73-0.911,2.72-2.578,2.72c-1.668,0-2.58-0.987-2.58-2.72v-5.62c0-1.729,0.912-2.72,2.58-2.72   c1.667,0,2.578,0.988,2.578,2.72V27.203z M23.279,29.922c-1.666,0-2.53-0.987-2.53-2.72v-0.664h1.604v0.771   c0,0.773,0.34,1.051,0.881,1.051c0.539,0,0.879-0.276,0.879-1.051c0-2.225-3.319-2.641-3.319-5.729   c0-1.729,0.853-2.721,2.502-2.721c1.651,0,2.502,0.988,2.502,2.721v0.342h-1.604v-0.449c0-0.773-0.312-1.064-0.851-1.064   c-0.541,0-0.851,0.291-0.851,1.064c0,2.225,3.32,2.643,3.32,5.729C25.812,28.933,24.947,29.922,23.279,29.922z M31.423,20.531   h-2.937v3.013h2.332v1.543h-2.332v3.168h2.937v1.545H26.79V18.988h4.633V20.531z M18.212,21.472v5.838   c0,0.773-0.339,1.064-0.88,1.064c-0.54,0-0.882-0.291-0.882-1.064v-5.838c0-0.771,0.342-1.064,0.882-1.064   C17.873,20.408,18.212,20.701,18.212,21.472z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#ED4D4D"/>
    </g></g> </svg>;
  }


}

const parseOpeneCristall = (hour) => {
  let day = (new Date()).getDay();
  let result = {
    text: (day < 7 && hour > 10 && hour < 20)?"Відчинено":"Зачинено",
    image: opendoorSvg((day < 7 && hour > 10 && hour < 20))
  }
  return result
}

const bg1 = require('../images/bg1.png');
const bg2 = require('../images/bg2.png');
class AboutBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime: (new Date()).getHours()
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({currentTime:(new Date()).getHours()})
    }, 1000*10);
  }
  render() {
    return <div className="block about" id="AboutBlock">
      <div className="bdt-heading-style"><HeadingArt fill={'white'}/></div>
      <div className="aboutMiniText max1024">
        <div className="aboutDataBlock imageAbout" id="imageAbout">
          <Fade delay={50}><img id="oneImageAbout" src={bg1} alt=""/></Fade>
          <Fade delay={75}><img id="twoImageAbout" data-depth="0.1" src={bg2} alt=""/></Fade>
        </div>
        <div className="aboutDataBlock">
          <Fade delay={50}>{this.props.data.minitext}</Fade>
            <div className="paragraphLine">
              <Fade delay={50}><FontAwesomeIcon icon={['fas', 'gem']} /></Fade>
            </div>
          <Fade delay={50}>{this.props.data.minitext2}</Fade>
        </div>
      </div>
      <Fade delay={50}>
        <div className="sosialAbout">
          <a target="_blank" href={this.props.data.email} rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
          <a target="_blank" href={this.props.data.insta} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a target="_blank" href={this.props.data.facebook} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        </div>
      </Fade>
      <div className="aboutFooterSvg" id="aboutFooterSvg">

        <Reveal effect="fadeInUp">
        <div className="blockFeedBack">
          <div className="blockFeedBackMinData left">
            <div className="contacts_line mtop">
              <div className="contactsLineTitle">Графік роботи</div>
                <div className="paragraphLine">
                  <FontAwesomeIcon icon={['fas', 'gem']} />
                </div>
                <div className="contactsLineStroke">
                <div className="dateTimeLine">Понеділок: 10:00 - 20:00</div>
                <div className="dateTimeLine">Вівторок: 10:00 - 20:00</div>
                <div className="dateTimeLine">Середа: 10:00 - 20:00</div>
                <div className="dateTimeLine">Четвер: 10:00 - 20:00</div>
                <div className="dateTimeLine">Пятниця: 10:00 - 20:00</div>
                <div className="dateTimeLine">Субота: 10:00 - 20:00</div>
                <div className="dateTimeLine dayRed">Неділя: Вихідний</div>

                <div className="thisCurrentOpened">
                  На даний момент: {parseOpeneCristall(this.state.currentTime).text}
                </div>
              </div>
            </div>
            <div className="imgLogodoor">
              {parseOpeneCristall(this.state.currentTime).image}
            </div>
          </div>
          <div className="blockFeedBackMinData right">
            <div className="contacts_line mtop">
              <div className="contactsLineTitle">Переваги online</div>
              <div className="paragraphLine">
                <FontAwesomeIcon icon={['fas', 'gem']} />
              </div>
              <div className="blockFeedBackContent">
              Це дозволить вам швидше записуватися на прийом до улюбленого майстра.<br/><br/>
              Простий і зручний спосіб запису.<br/><br/>
              Смс-нагадування про майбутній візит.<br/><br/>
              Можливість залишити відгук.<br/><br/>
              </div>
            </div>
            <div className="defaultButton">Записатись</div>
          </div>

          <div className="blockFeedBacktitle">Записатися на прийом</div>
          <div className="paragraphLine">
            <FontAwesomeIcon icon={['fas', 'gem']} />
          </div>
          <div className="blockFeedBackContent center">
          Для Вашої зручності, Nail salon «Cristall» запустив послугу - запис онлайн.
          Більше не потрібно шукати номер телефону, дзвонити адміністратору.
          Для запису досить заповнити нескладну форму, вказавши бажану послугу і бажаний час та дату.
          Вам передзвонить адміністратор, який проконсультує по бажаної послуги,
          часу роботи майстра і адресою салону.
          Запишіться на бажану процедуру прямо зараз!
          Наш адміністратор зв'яжеться з Вами найближчим часом.
          </div>
        </div>
        </Reveal>
        <div className="containSvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 135.5" preserveAspectRatio="none"><path d="M595.3 135.5V5.5c-53.4-11.9-113-3.4-164 12.3-22.4 6.9-43.8 15.1-64.9 23.7-26.9 11-53.3 22.5-80.9 32.7-49.2 18.2-104.8 32.2-160.9 28.3C80.9 99.6 40.9 86 0 75.3v60.2h595.3zM0 135.5h595.3"></path></svg>
        </div>
      </div>
    </div>
  }
}

export default AboutBlock;
