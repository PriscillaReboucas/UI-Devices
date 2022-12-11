import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DevicesList } from '../components/DevicesList';

const devices = [
    {model_id: 'test', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}},
    {model_id: 'test2', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}},
    {model_id: 'test3', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}},
    {model_id: 'test4', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 't'},
    shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
    adoptability: 'test'}}
];

describe('DevicesList component', () => {

    test('should return 4 elements', async () => {
        render(
            <Router>
                <DevicesList devices={devices}/>
            </Router>
        );
        
        const devicesLink = await screen.findAllByTestId('devicesList--wrapper');
        expect(devicesLink).toHaveLength(4);
    });

    test('should return UniFi as product line name', () => {

        const product = [
            {model_id: 'test', icon: {resolutions: [257], id: 'test'}, line:{name:'UniFi', id: 'test'}, product:{abbrev: 't', name: 't'},
        shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
        adoptability: 'test'}}
        ];

        render(
            <Router>
                <DevicesList devices={product}/>
            </Router>
        );
        
        const devicesLink = screen.getByTestId('line__text--title');
        expect(devicesLink).toHaveTextContent('UniFi');
    });
});