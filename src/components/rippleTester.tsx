import { RippleContainer } from '@m_three_ui/m3ripple';
import { useState } from 'react';
import { useReward } from 'react-rewards';
import styles from './rippleTester.module.css';

const rippleTester = () => {
  const { reward } = useReward('rewardId', 'confetti', {
    colors: ['#ffae00', '#ac7600', '#ac4a00', '#ffe600', '#a47100'],
    spread: 120,
    lifetime: 60,
    decay: 0.92,
  });
  const [isConfettiEnabled, setIsConfettiEnabled] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <RippleContainer
        className={styles.ripple_container}
        sparklesColorRGB="255 255 255"
        opacity_level1="0.4"
        opacity_level2="0.1"
        divProps={{
          onClick: () => {
            if (isConfettiEnabled) reward();
          },
        }}
      >
        <span id="rewardId" className={styles.confettiOrigin} />
        <span className={styles.componentName}>RippleContainer component</span>
      </RippleContainer>

      <label>
        <input
          type="checkbox"
          checked={isConfettiEnabled}
          onChange={(e) => setIsConfettiEnabled(e.target.checked)}
        />
        Enable Confetti
      </label>
    </div>
  );
};

export default rippleTester;
