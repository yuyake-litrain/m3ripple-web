import { Icon } from '@iconify/react';
import { RippleContainer } from '@m_three_ui/m3ripple';
import styles from './SidebarSearchBar.module.css';

const SidebarSearchBar = () => {
  return (
    <RippleContainer
      isMaterial3={true}
      className={styles.rippleContainer}
      rippleColor="hsla(29,81%,84%,0.15)"
      sparklesColorRGB="255 255 255"
      opacity_level1="0.4"
      opacity_level2="0.1"
    >
      <Icon className={styles.icon} icon="material-symbols:search" />
      <div className={styles.desc} />
    </RippleContainer>
  );
};

export default SidebarSearchBar;
