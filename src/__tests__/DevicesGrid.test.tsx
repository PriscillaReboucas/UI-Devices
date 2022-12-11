import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DevicesGrid } from '../components/DevicesGrid';

const devices = [
    {model_id: 'test', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}},
    {model_id: 'test2', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}},
    {model_id: 'test3', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}}
];

describe('DevicesGrid component', () => {

    test('should return 3 articles element', async () => {
        render(
            <Router>
                <DevicesGrid devices={devices}/>
            </Router>
        );
        
        const devicesArticle = await screen.findAllByTestId('devices__card--container');
        expect(devicesArticle).toHaveLength(3);
    });

    test('should return the counter of devices equal to 3', () => {
        render(
            <Router>
                <DevicesGrid devices={devices}/>
            </Router>
        );
        
        const devicesCounter = screen.getByTestId('devices--size');
        expect(devicesCounter).toHaveTextContent('3');
    });
});
    