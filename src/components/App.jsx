import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
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
          <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
            <div className='container__element '>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        clickFeedback={this.handleClick}                    
                    />
                </Section>

                <Section title="Statistics">
                    {total > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positiveFeedback={positiveFeedback}
                        />
                    ) : (
                        <Notification message="There is no feedback"/>
                    )}
                </Section>
            </div>
            </div>
            
        );
    }
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     <Feedback /> 
  //   </div>
  // );

};
