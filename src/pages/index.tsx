import React from 'react';
import PomodoroTimer from '@components/PomodoroTimer';
import { HeadFC } from 'gatsby'

const Home: React.FC = () => {
  return (
    <div>
      <PomodoroTimer />
    </div>
  );
}

export default Home;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Pomodoro Timer</title>
    <meta name="description" content="Increase productivity with this simple promodoro timer" />
  </>
)