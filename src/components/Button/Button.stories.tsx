import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Default',
};
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'Error',
};
