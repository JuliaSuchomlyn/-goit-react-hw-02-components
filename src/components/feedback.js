import React from 'react';

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
        return Math.round((good / total) * 100)

    }
    handleClick = (key) => {
        this.setState(prevState => {
            return {
                [key]: prevState[key] + 1
            }
        })
    }

    

    render() {
        // const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage(
            total,
            this.state.good
        )
        String.prototype.firstLetterToUppercase = function() {
            return this[0].toUpperCase() + this.slice(1);
        }


        return (            
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    {Object.keys(this.state).map((key) => (<button key={key} onClick={() => this.handleClick(key)}>{ key.firstLetterToUppercase() }</button>))}
                </div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good:{this.state.good}</li>
                    <li>Neutral:{this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{total}</li>
                    <li>Positive feedback: { positiveFeedback }</li>
                </ul>
            </div>
            
        );
    }
}