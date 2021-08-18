import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
    title: 'Core/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked...' },
    },
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

// const Template = (args: any) => <Button {...args} />

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    variant: 'primary',
    children: 'Long Primary Args'
}
export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}