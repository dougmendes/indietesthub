import { render, screen } from '@testing-library/react'
import Home from '../page'
 
test('renders header and navigation links', () => {
  render(<Home />);

  expect(screen.getByRole('heading', { level: 1, name: 'We are |' }))
  expect(screen.getByRole('button', {  name: 'Login' }))
  expect(screen.getByRole('button', {  name: 'Sign up' }))
  expect(screen.getByRole('link', {  name: 'Testers' }))
  expect(screen.getByRole('link', {  name: 'Projects' }))
  expect(screen.getByRole('link', {  name: 'Company' }))
})