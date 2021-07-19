import React from 'react';
import DelayedToggle from './DelayedToggle';
import {
    fireEvent,
    render,
    waitFor,
    waitForElement,
} from '@testing-library/react'

describe('<DelayedToggle/>', () => {
    it('reveals text when toggle is ON', async() => {
        const { getByText } = render(<DelayedToggle/>);
        const toggleButton = getByText('토글');
        fireEvent.click(toggleButton);
        await waitFor(() => getByText('야호!!'));
    })

    it('toggle text ON/OFF', async() => {
        const { getByText } = render(<DelayedToggle/>);
        const toggleButton = getByText('토글');
        fireEvent.click(toggleButton);
        const text = await waitFor(() => getByText('ON'));
        expect(text).toHaveTextContent('ON');
    })
})