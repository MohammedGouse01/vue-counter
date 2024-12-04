import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CounterComponent from '../src/components/CounterComponent.vue'; // Adjust path as needed

describe('Counter.vue', () => {
  it('renders the initial count', () => {
    const wrapper = mount(CounterComponent);
    expect(wrapper.text()).toContain('Current Count : 0');
  });

  it('increments the count when the increment button is clicked', async () => {
    const wrapper = mount(CounterComponent);
    const incrementButton = wrapper.find('#IncrementButton');
    await incrementButton.trigger('click');
    expect(wrapper.text()).toContain('Current Count : 1');
  });

  it('decrements the count when the decrement button is clicked', async () => {
    const wrapper = mount(CounterComponent);
    const incrementButton = wrapper.find('#IncrementButton');
    const decrementButton = wrapper.find('#decrementButton');

    // Increment first so we can decrement
    await incrementButton.trigger('click');
    expect(wrapper.text()).toContain('Current Count : 1');

    await decrementButton.trigger('click');
    expect(wrapper.text()).toContain('Current Count : 0');
  });

  it('does not decrement below zero', async () => {
    const wrapper = mount(CounterComponent);
    const decrementButton = wrapper.find('#decrementButton');
    await decrementButton.trigger('click');
    expect(wrapper.text()).toContain('Current Count : 0');
  });
});
