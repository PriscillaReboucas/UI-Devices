import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DeviceCard } from '../components/DeviceCard';

const device = {model_id: 'test', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 'airMax'},
shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
adoptability: 'test'}};

describe('DeviceCard component', () => {
    test('render DeviceCard component', () => {
        render(
            <Router>
            <DeviceCard device={device}/>
            </Router>
        );
        
        const link = screen.getByTestId('device__card--container');
        expect(link).toBeInTheDocument();
    });

    test('should return airMax as product name', () => {
        render(
            <Router>
            <DeviceCard device={device}/>
            </Router>
        );

        const paragraphElement = screen.getByTestId('card__text--title');
        expect(paragraphElement).toHaveTextContent('airMax');
    })
});