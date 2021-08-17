import React from 'react';
import TButton from './TButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
title: 'Tailwind/TButton',
component: TButton,
argTypes: {
    variant: { 
        name: 'variant',
        type: { name: 'string', required: false },
        control: { type: 'string' } 
    },
},
} as ComponentMeta<typeof TButton>;


const Template: ComponentStory<typeof TButton> = (args) => <TButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
variant: 'primary',
children: "Primary Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: "Secondary Button"
}