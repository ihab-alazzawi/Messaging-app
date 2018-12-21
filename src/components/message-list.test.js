import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MessageList from './message-list';

configure({ adapter: new Adapter() });

describe('<MessageList />', () => {
  const wrapper = shallow(<MessageList />);
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
});

describe('<MessageList /> calls methods', () => {
  const component = shallow(<MessageList />);
  it('calls the renderButton when it renders', () => {
    component.instance().renderButton = jest.fn();
    component.update();
    component.instance().render();
    expect(component.instance().renderButton).toBeCalled();
  });

  it('calls the clearMessages method', () => {
    component.instance().clearMessages = jest.fn();
    component.update();
    component.instance().clearMessages();
    expect(component.instance().clearMessages).toBeCalled();
  });

  it('calls the api', () => {
    component.instance().api = jest.fn();
    component.update();
    component.instance().api();
    // console.log(component.instance().api);
    expect(component.instance().api).toBeCalled();
  });

  it('starts the api when component mount', () => {
    component.instance().api.start = jest.fn();
    component.update();
    component.instance().componentDidMount();
    expect(component.instance().api.start).toBeCalled();
  });

  it('calls messageCallback', () => {
    component.instance().messageCallback = jest.fn();
    component.update();
    component.instance().messageCallback();
    expect(component.instance().messageCallback).toBeCalled();
  });
});
