import { Icon } from '@iconify/react';
import { RippleContainer } from '@m_three_ui/m3ripple';
import clsx from 'clsx';
import styles from './BackIconButton.module.css';

const SidebarSelectButton = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <RippleContainer
      isMaterial3={true}
      className={clsx(styles.rippleContainer, className)}
      rippleColor="hsla(29,97%,75%,0.15)"
      sparklesColorRGB="255 255 255"
      opacity_level1="0.4"
      opacity_level2="0.1"
    >
      <Icon className={styles.icon} icon="material-symbols:arrow-back-rounded" />
    </RippleContainer>
  );
};

export default SidebarSelectButton;
