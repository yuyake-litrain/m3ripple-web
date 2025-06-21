import { Icon } from '@iconify/react';
import { RippleContainer } from '@m_three_ui/m3ripple';
import clsx from 'clsx';
import styles from './SidebarSelectButton.module.css';

const SidebarSelectButton = ({
  iconifyIcon,
  settingName,
  settingDesc,
  href,
  className,
}: {
  iconifyIcon: string;
  settingName: string;
  settingDesc: string;
  href: string;
  className: string;
}) => {
  return (
    <a
      className={clsx(className, 'SidebarSelectButton', styles.link)}
      href={href}
    >
      <RippleContainer
        isMaterial3={true}
        className={clsx(styles.rippleContainer, "rippleContainer")}
        rippleColor="hsla(29,97%,75%,0.15)"
        sparklesColorRGB="255 255 255"
        opacity_level1="0.4"
        opacity_level2="0.1"
      >
        <Icon className={styles.icon} icon={iconifyIcon} />
        <div className={styles.desc}>
          <span>{settingName}</span>
          <p>{settingDesc}</p>
        </div>
      </RippleContainer>
    </a>
  );
};

export default SidebarSelectButton;
