import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

class StatisticBlock extends React.Component {
  render() {
    return <div className="block statistic" id="StatisticBlock">
      <Fade delay={50}>
      <div className="statisticData stLeft">
        <div className="statisticTitle">Більше</div>
        <div className="paragraphLine">
          <FontAwesomeIcon icon={['fas', 'gem']} />
        </div>
        <div className="statisticLebgth">4000</div>
        <div className="statisticTitleMini">Щасливих клієнтів</div>
      </div>
      </Fade>
      <Fade delay={50}>
      <div className="statisticData stRight">
        <div className="statisticTitle">Більше</div>
        <div className="paragraphLine">
          <FontAwesomeIcon icon={['fas', 'gem']} />
        </div>
        <div className="statisticLebgth">200</div>
        <div className="statisticTitleMini">Молодих спеціалістів</div>
      </div>
      </Fade>
    </div>
  }
}

export default StatisticBlock;
