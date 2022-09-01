import { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import { AppContainer } from './App.styled';

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	// const nameButton = ['Good', 'Neutral', 'Bad'];

	const total= () => {
		return good + neutral + bad;
	};

	const percentageGoodFeedback = () => {
		return Math.round((100 / total()) * good);
	};

	

	const handleInkremet = e => {
		const { name } = e.target;

	// 	if (name === 'good') setGood(state => state + 1);
	// 	if (name === 'neutral') setNeutral(state => state +1);
	// 	if (name === 'bad') setBad(state => state +1);
	// 	return;

 		switch (name) {
			case 'good':
				setGood(good + 1);
				break;
				case 'neutral':
					setNeutral(neutral + 1);
					break;
					case 'bad':
						setBad(bad + 1);
						break;
						default:
							return;
						}
						total();
						percentageGoodFeedback();
					};
				
					
					const feedbackOptions = ['good', 'neutral', 'bad'];
					// const options = { good, neutral, bad };

	return (
		<AppContainer>
			<Section title="Залиште будь-ласка свій відгук">
				<FeedbackOptions
					options={feedbackOptions}
					onLeaveFeedback={handleInkremet}
				/>
			</Section>

			<Section  title={total() > 0 ? 'Statistics' : 'No feedback given'}>
                {total() > 0 ? (
					<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total()}
						positivePercentage={percentageGoodFeedback()}
					/>
				) : (
					<Notification notice="Відгуків поки немає" />
				)}
			</Section>
		</AppContainer>
	);
};


