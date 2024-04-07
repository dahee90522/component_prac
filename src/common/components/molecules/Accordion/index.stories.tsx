import Accordion, { AccordionProps } from './index';

import React from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'components/molecules/Accordion',
  component: 'Accordion',
};

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  fullWidth: '400px',
  contentsProps: [
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
  ],
  headerBackgroundColor: '#6C849D1F',
  headerLeading: 'number', //none,number,icon
  headerTextColor: '#192839',
  trailingIconSize: 20,
  bodyTextColor: '#40566d',
  bodyBackgroundColor: '#fff',
  dividerColor: '#6c849d2e',
  dividerThickness: 1,
  headerVerticalPadding: 18,
  headerHorizontalPadding: 14,
  bodyVerticalPadding: 16,
  bodyHorizontalPadding: 16,
};
