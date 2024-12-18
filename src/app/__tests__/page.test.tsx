import { render, screen } from '@testing-library/react'
import Home from '../page'
 
test('renders header and navigation links', () => {
  render(<Home />);

  expect(screen.getByRole('heading', { level: 1, name: 'We are |' })).toBeDefined()
  expect(screen.getByRole('button', {  name: 'Login' })).toBeDefined()
  expect(screen.getByRole('button', {  name: 'Sign up' })).toBeDefined()
  expect(screen.getByRole('link', {  name: 'Testers' })).toBeDefined()
  expect(screen.getByRole('link', {  name: 'Projects' })).toBeDefined()
  expect(screen.getByRole('link', {  name: 'Company' })).toBeDefined()
})