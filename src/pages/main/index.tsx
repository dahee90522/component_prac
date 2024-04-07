import * as A from '@components/atoms';

import Accordion from '@common/components/molecules/Accordion';
import React from 'react';
import SideBar from '@common/components/organisms/Sidebar';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Main() {
  const navigate = useNavigate();
  return (
    <div className={cx('main-container')}>
      <SideBar />
      <button>메인 페이지입니다.</button>
      <Accordion
        headerLeading="none"
        contentsProps={[
          {
            title: 'title1',
            answer: `answer1`,
          },
          {
            title: 'title2',
            answer: `answer2`,
          },
          {
            title: 'title3',
            answer: `answer3`,
          },
          {
            title: 'title4',
            answer: `answer4`,
          },
        ]}
      />
    </div>
  );
}
export default Main;
export const path = '/';
