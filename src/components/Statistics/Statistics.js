import PropTypes from "prop-types";
import {  StatisticsList, StatisticsItem,  } from "./Statistics.styled";


export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return <StatisticsList>

                <StatisticsItem>Good:<span>{ good }</span> </StatisticsItem>
                <StatisticsItem>Neutral: <span>{ neutral}</span></StatisticsItem>
                <StatisticsItem>Bad: <span>{ bad }</span></StatisticsItem>
                <StatisticsItem>Total: <span>{ total}</span></StatisticsItem>
                <StatisticsItem><span className="positiveFeedback">Positive feedback:</span> <span className="positiveFeedback">{ positiveFeedback}%</span></StatisticsItem>

        </StatisticsList>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired

}