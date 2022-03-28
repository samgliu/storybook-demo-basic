import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;


export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'medium text',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'large text',
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'small text',
};
export const Small2 = Template.bind({});
Small2.storyName = 'Small Two';
Small2.args = {
  size: 'small',
  placeholder: 'small2 text',
};