import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { PropertiesCard } from './components/PropertiesCard';
import { DevicesGrid } from './components/DevicesGrid';
import { DevicesList } from './components/DevicesList';
import { DeviceCard } from './components/DeviceCard';

describe('DevicesGrid component', () => {
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

  test('should return 3 articles element', async () => {
    render(
      <Router>
        <DevicesGrid devices={devices}/>
      </Router>
    );
  
    const devicesArticle = await screen.findAllByTestId('devices__card--container');
    expect(devicesArticle).toHaveLength(3);
  });
});

describe('DevicesList component', () => {
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

  test('should return 4 elements', async () => {
    render(
      <Router>
        <DevicesList devices={devices}/>
      </Router>
    );
  
    const devicesLink = await screen.findAllByTestId('devicesList--wrapper');
    expect(devicesLink).toHaveLength(4);
  });
});

describe('DeviceCard component', () => {

  const device = {model_id: 'test', icon: {resolutions: [257], id: 'test'}, line:{name:'test', id: 'test'}, product:{abbrev: 't', name: 'airMax'},
  shortnames:['test'], unifi: {network: {numberOfPorts: 1, radios: {na: {maxPower: 100, maxSpeedMegabitsPerSecond: 100}}}, 
  adoptability: 'test'}}

  test('render DeviceCard component', () => {
    render(
      <Router>
        <DeviceCard device={device}/>
      </Router>
    )
    const link = screen.getByTestId('device__card--container');
    expect(link).toBeInTheDocument();
  });

  test('should return airMax as product name', () => {
    render(
      <Router>
        <DeviceCard device={device}/>
      </Router>
    )

    const paragraphElement = screen.getByTestId('card__text--title');
    expect(paragraphElement).toHaveTextContent('airMax');
  })
})

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

describe('PropertiesCard component', () => {
  const product = {title: 'product line', name: 'airMAX'};

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



