import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from '~/components/Header';

describe('Header component ', () => {
  it('should be able to go to dashboard', () => {
    const { getByText } = render(<Header />);

    fireEvent.click(getByText('DASHBOARD'));
  });
});
