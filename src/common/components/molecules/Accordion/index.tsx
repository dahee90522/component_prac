import React, { FunctionComponent, HTMLProps, useState } from 'react';

import { ReactComponent as SvgArrowDown } from '@assets/svgs/system/chevron-down.svg';
import { ReactComponent as SvgUser } from '@assets/svgs/system/user.svg';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
interface ContentProps {
  title: string;
  answer: string;
}
export interface AccordionLayoutProps {
  fullWidth?: string;
  contentsProps: ContentProps[];
  headerBackgroundColor?: string;
  headerTextColor?: string;
  headerLeading: 'none' | 'number' | 'icon';
  dividerColor?: string;
  dividerThickness?: number;
  trailingIconSize?: number;
  bodyTextColor?: string;
  bodyBackgroundColor?: string;
  headerVerticalPadding?: number;
  headerHorizontalPadding?: number;
  bodyVerticalPadding?: number;
  bodyHorizontalPadding?: number;
}
const Accordion: FunctionComponent<AccordionProps> = ({
  fullWidth = '400px',
  contentsProps, //[{title:'',answer:''}]
  headerBackgroundColor = '#6C849D1F',
  headerLeading = 'number', //none,number,icon
  headerTextColor = '#192839',
  trailingIconSize = 20,
  bodyTextColor = '#40566d',
  bodyBackgroundColor = '#fff',
  dividerColor = '#6c849d2e',
  dividerThickness = 1,
  headerVerticalPadding = 18,
  headerHorizontalPadding = 14,
  bodyVerticalPadding = 16,
  bodyHorizontalPadding = 16,
}) => {
  const [content, setContent] = useState(JSON.parse(JSON.stringify(contentsProps)));

  function toggleOpen(firstIdx: number) {
    const result = !content[firstIdx]?.show;
    content.forEach((q: any) => (q.show = false));
    content[firstIdx].show = result;
    setContent(Object.assign([], content));
  }

  return (
    <div className={cx('accordion-container')} style={{ width: fullWidth }}>
      {content.map((e: any, idx: number) => {
        return (
          <>
            <div key={idx}>
              <div
                className={cx('header-container', e.show && 'header-container-active')}
                onClick={() => {
                  toggleOpen(idx);
                }}
                style={{
                  backgroundColor: e.show && headerBackgroundColor,
                  color: headerTextColor,
                  padding: `${headerVerticalPadding}px ${headerHorizontalPadding}px`,
                }}
              >
                <div>
                  {headerLeading === 'number' ? (
                    <div>{idx + 1}. </div>
                  ) : (
                    headerLeading === 'icon' && (
                      <div>
                        <SvgUser />
                      </div>
                    )
                  )}
                  <span className={cx(e.show ? 'opend' : 'closed')}>{e?.title}</span>
                </div>
                <SvgArrowDown
                  width={trailingIconSize ?? 16}
                  height={trailingIconSize ?? 16}
                  fill="red"
                />
              </div>
              <Item
                show={e.show}
                content={e.answer}
                bodyTextColor={bodyTextColor}
                bodyBackgroundColor={bodyBackgroundColor}
                bodyVerticalPadding={bodyVerticalPadding}
                bodyHorizontalPadding={bodyHorizontalPadding}
              />
            </div>
            <div
              className={cx('divider')}
              style={{ backgroundColor: dividerColor, borderWidth: dividerThickness + 'px' }}
            />
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
export interface AccordionProps extends HTMLProps<HTMLElement>, AccordionLayoutProps {}

const Item = (props: any) => {
  const contentEl = React.useRef<HTMLInputElement>();

  return (
    <div
      ref={contentEl}
      className={cx('body-container')}
      style={{
        height: props.show ? contentEl.current.scrollHeight : '0px',
      }}
    >
      <p
        style={{
          color: props?.bodyTextColor,
          backgroundColor: props?.bodyBackgroundColor,
          padding: `${props?.bodyVerticalPadding}px ${props?.bodyHorizontalPadding}px`,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: props?.content }} />
      </p>
    </div>
  );
};
