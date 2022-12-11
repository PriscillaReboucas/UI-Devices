import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header component', () => {
    test('render header component', () => {
        render(<Header />);
        const title = screen.getByText(/Devices/i);
        expect(title).toBeInTheDocument();
    });

    test('checking if author exist', () => {
        render(<Header />);
        const author = screen.getByText(/Author/i);
        expect(author).toBeInTheDocument();
    });
});