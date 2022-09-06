import PropTypes from "prop-types";
import { FeedbackButtons, FeedbackButton } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, clickFeedback }) => {
    return <FeedbackButtons>
        {options.map((option) => (<FeedbackButton key={option} onClick={() => clickFeedback(option)} >{option}
            </FeedbackButton>))}
        
        
    
    </FeedbackButtons>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    clickFeedback: PropTypes.func.isRequired
}