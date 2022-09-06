import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, item) => total + item, 0)
    }

    countPositiveFeedbackPercentage = (total, good) => {
        const positivePercentages = Math.round((good / total) * 100)
        return total === 0 ? 0 : positivePercentages ;

    }
    handleClick = (key) => {
        this.setState(prevState => {
            return {
                [key]: prevState[key] + 1
            }
        })
    }

    

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage(
            total,
            good
        )


        return (            
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        clickFeedback={this.handleClick}                    
                    />
                </Section>

                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positiveFeedback={positiveFeedback}
                        />
                </Section>
            </div>
            
        );
    }
}