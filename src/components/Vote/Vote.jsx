import { Component } from "react";
import styles from "./vote.module.css";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification"

class Vote extends Component{
    static voteOptions = ["Good", "Neutral", "Bad"]
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    }
    countTotalFeedback() {
        const { Good, Neutral, Bad } = this.state;
        const total = Good + Neutral + Bad;
        return total;   
    }
    countPositiveFeedbackPercentage(keyName) {
        const total = this.countTotalFeedback();
          if (!total) {
            return 0;
        }
        const value = this.state[keyName];
         return Number((value / total) * 100).toFixed(0);
    }
    leaveVote = (keyName) => {
    
        this.setState(prevState => {
            return {
                [keyName]: prevState[keyName] + 1
            }
        })
    }
    Prosum() {
         const Good = this.countPositiveFeedbackPercentage("Good");
         const Neutral = this.countPositiveFeedbackPercentage("Neutral");
         const Bad = this.countPositiveFeedbackPercentage("Bad");
                let Bigsum;
                if (Good >= Neutral && Good>= Bad) {
                  Bigsum = Good;
                } else if (Neutral >= Good && Neutral>= Bad) {
                  Bigsum = Neutral;
                } else {
                  Bigsum = Bad;
                } 
                  return Bigsum;
             }

    render() {
        const { Good, Neutral, Bad } = this.state;
        const feedbacke = this.Prosum();
        const total = this.countTotalFeedback(); 
        return (
            <div className={styles.wrapper}>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Vote.voteOptions} leaveVote={this.leaveVote} />
                </Section>
                {total > 0 ? (
                    <Section title="Statistics" isStatistics>
                        <Statistics total={total} Good={Good} Neutral={Neutral} Bad={Bad} feedback={feedbacke} />
                    </Section>
                ) : (
                    <Notification message="No feedback given" />
                )}                   
            </div>
        );
    }
}
export default Vote;
