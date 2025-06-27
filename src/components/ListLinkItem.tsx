import { Icon } from '@iconify/react';
import { RippleContainer } from '@m_three_ui/m3ripple';
import clsx from 'clsx';
import styles from './ListLinkItem.module.css';

const SidebarSelectButton = ({
  iconifyIcon,
  itemTitle,
  itemDesc,
  className,
  href,
}: {
  iconifyIcon?: string;
  itemTitle: string;
  itemDesc?: string;
  className?: string;
  href: string;
}) => {
  return (
    <a
      className={clsx(className, 'SidebarSelectButton', styles.link)}
      href={href}
    >
      <RippleContainer
        isMaterial3={true}
        className={clsx(styles.rippleContainer, className)}
        rippleColor="hsla(29,97%,75%,0.15)"
        sparklesColorRGB="255 255 255"
        opacity_level1="0.4"
        opacity_level2="0.1"
      >
        {iconifyIcon && <Icon className={styles.icon} icon={iconifyIcon} />}
        <div className={styles.descContainer}>
          <span className={styles.title}>{itemTitle}</span>
          {itemDesc && <span className={styles.desc}>{itemDesc}</span>}
        </div>
      </RippleContainer>
    </a>
  );
};

export default SidebarSelectButton;
