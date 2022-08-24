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

	const handleInkremet = event => {
		const { name } = event.currentTarget;

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
		totalFeedback();
		percentageGoodFeedback();
	};

	const totalFeedback = () => {
		return good + neutral + bad;
	};

	const percentageGoodFeedback = () => {
		return parseInt((good / totalFeedback()) * 100);
	};
	return (
		<AppContainer>
			<Section title="Залиште будь-ласка свій відгук">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={handleInkremet}
				/>
			</Section>

			<Section title="Статистика">
				{good !== 0 || neutral !== 0 || bad !== 0 ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={totalFeedback()}
						positivePercentage={percentageGoodFeedback()}
					/>
				) : (
					<Notification notice="Відгуків поки немає" />
				)}
			</Section>
		</AppContainer>
	);
};