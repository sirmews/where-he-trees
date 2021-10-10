import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LinkAudio from './LinkAudio';
import api from '../../mocks/api';


test('audio link opens accordion and shows Spotify provider', async () => {

  const { LINKS } = api;

  const mockData = LINKS.find((link, key) => link.type === 'AUDIO');

  render(<LinkAudio link={mockData} />);

  const button = screen.getByText(mockData.name);

  await fireEvent.click(button);

  expect(screen.getByText('Spotify')).toBeInTheDocument();
});
