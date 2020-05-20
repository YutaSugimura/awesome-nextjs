import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from '../../pages/about';

afterEach(cleanup);

describe('About page', () => {
  it('link to Nest.js site', () => {
    const { getByText } = render(<About />);
    expect(getByText('page: about')).toBeInTheDocument();
  });

  it.todo('Index TODO');
});
