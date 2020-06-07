import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  const tabData = [
    {
      "id": 1,
      "headline": "First Headline",
      "blurb": "First description",
      "image": "https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/q0r7xIVMCo4RkD5A.gif"
    },
    {
      "id": 2,
      "headline": "Second Headline",
      "blurb": "Second description",
      "image": null
    },
  ];

  it('has the first tab selected when it starts', async () => {
    const { getByText, queryByText } = render(<App tabData={tabData}/>);
    getByText('First description');
    expect(queryByText('Second description')).toBe(null);
  });

  describe('clicking on an inactive tab', () => {
    it('activates it', () => {
      const { getByText, queryByText } = render(<App tabData={tabData}/>);
      fireEvent.click(getByText('Second Headline'));
      getByText('Second description');
      expect(queryByText('First description')).toBe(null);
    });
  });
});


