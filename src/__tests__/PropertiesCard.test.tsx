import { render, screen } from '@testing-library/react';
import { PropertiesCard } from '../components/PropertiesCard';

const product = {title: 'product line', name: 'airMAX'};

describe('PropertiesCard component', () => {
    test('render PropertiesCard component', () => {
        render(<PropertiesCard title={product.title} name={product.name} />);
        
        const li = screen.getByTestId('properties__items--wrapper');
        expect(li).toBeInTheDocument(); 
    });

    test('title should be product line', () => {
        render(<PropertiesCard title={product.title} name={product.name} />);
    
        const productTitle = screen.getByTestId('properties__title')
        expect(productTitle).toHaveTextContent('product line');
    });
});