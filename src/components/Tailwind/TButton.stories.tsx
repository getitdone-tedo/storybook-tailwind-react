import React from 'react';
import TButton from './TButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
title: 'Tailwind/TButton',
component: TButton,
argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeof TButton>;


const Template: ComponentStory<typeof TButton> = (args) => <TButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
variant: 'primary',
label: "Primary Button",
backgroundColor: "bg-red-600 hover:bg-indigo-700"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: "Secondary Button"
}

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    label: "Danger Button"
}

export const Small = Template.bind({});
Small.args = {
    variant: 'primary',
    label: "Small Button",
    size: "px-4 py-4",
    backgroundColor: "bg-red-600 hover:bg-indigo-700"
}

export const Medium = Template.bind({});
Medium.args = {
    variant: 'primary',
    label: "Medium Button",
    size: "px-8 py-8",
    backgroundColor: "bg-red-600 hover:bg-indigo-700"
}
export const Large = Template.bind({});
Large.args = {
    variant: 'primary',
    label: "Large Button",
    size: "px-16 py-16",
    backgroundColor: "bg-red-600 hover:bg-indigo-700"
}