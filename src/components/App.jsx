import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section"; 
import { useState } from "react";

export const App = () => {
    const [good, setGood] = useState(0); 
    const [bad, setBad] = useState(0); 
    const [neutral, setNeutral] = useState(0); 

    const countTotalFeedback = () => {
        return good + neutral + bad;  
    }

    const countPositiveFeedbackPercentage = () => {
        return Number((countTotalFeedback() > 0) ? ((good * 100) / (countTotalFeedback())).toFixed() : 0);
    } 

    return (
        <>
            <Section title='Please leave feedback'>
                <FeedbackOptions state={{good, bad, neutral}} onLeaveFeedback={{setGood, setBad, setNeutral}}></FeedbackOptions>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                >    
                </Statistics>
            </Section>
        </>
    )
}