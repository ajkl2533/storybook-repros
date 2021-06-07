import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Stack, StackProps } from './Stack';

export default {
  title: 'Example/Stack',
  component: Stack,
} as Meta;

export const Test: Story<StackProps> = (args) => (
  <Stack {...args}>
    <div>abc</div>
    <div>def</div>
  </Stack>
);

Test.args = {
  gap: 'md',
}