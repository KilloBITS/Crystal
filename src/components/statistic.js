import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StatisticBlock extends React.Component {
  render() {
    return <div className="block statistic" id="StatisticBlock">
      <div className="statisticData stLeft">
        <div className="statisticTitle">Більше</div>
        <div className="statisticLebgth">4000</div>
        <div className="statisticTitleMini">Щасливих клієнтів</div>
      </div>

      <div className="statisticData stRight">
        <div className="statisticTitle">Більше</div>
        <div className="statisticLebgth">200</div>
        <div className="statisticTitleMini">Молодих спеціалістів</div>
      </div>
    </div>
  }
}

export default StatisticBlock;
