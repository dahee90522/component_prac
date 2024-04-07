import React, { FunctionComponent, HTMLProps } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function SideBarMenu({ label, iconRender }) {
  return (
    <div className={cx('button-container')}>
      {iconRender}
      {label}
    </div>
  );
}

export default SideBarMenu;
