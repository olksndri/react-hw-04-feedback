import css from '../styles/feedback-options.module.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ state, onLeaveFeedback }) => { 
    const { setGood, setBad, setNeutral } = onLeaveFeedback; 
    const { good, bad, neutral } = state; 
    return (
        <>
            <div className={css['button-wrapper']}>
                <button type="button" className={css.button} name='good' onClick={() => setGood(good + 1)}>good</button>
                <button type="button" className={css.button} name='neutral' onClick={() => setNeutral(neutral + 1)}>neutral</button>
                <button type="button" className={css.button} name='bad' onClick={() => setBad(bad + 1)}>bad</button>
            </div>  
        </>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};