import * as A from '@components/atoms';

import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Main() {
  const navigate = useNavigate();
  return (
    <div className={cx('main-container')}>
      <button>메인 페이지입니다.</button>
    </div>
  );
}
export default Main;
export const path = '/';
