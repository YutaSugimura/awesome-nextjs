import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

const CustomButton = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

storiesOf('storiesof', module)
  .addDecorator(withKnobs)
  .add('Button', () => <CustomButton />);
