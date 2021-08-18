import React from 'react';
import TInput from './TInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Tailwind/TInput',
    component: TInput,
    // argTypes: {
    //     size: {control: 'text'}
    // }
} as ComponentMeta<typeof TInput>;

// export const Small = () => <TInput size='small' placeholder="Small size" />
// export const Medium = () => <TInput size='medium' placeholder="Medium size" />
// export const Large = () => <TInput size='large' placeholder="Large size" />

const Template: ComponentStory<typeof TInput> = (args) => <TInput {...args} />;

export const Default = Template.bind({})
Default.args = {
    mandatory: false,
    label: 'Username',
    // placeHolder: 'Username'
}

export const Mandatory = Template.bind({})
Mandatory.args = {
    mandatory: true,
    label: 'Username',
    // placeHolder: 'Username'    
}

// export const Medium = Template.bind({})
// Medium.args = {
//     mandatory: false,
//     label: 'Username',
//     placeHolder: 'Username'  
// }

// export const Large = Template.bind({})
// Large.args = {
//     mandatory: false,
//     label: 'Username',
//     placeHolder: 'Username'    
// }

// export const ExtraLarge = Template.bind({})
// ExtraLarge.args = {
//     mandatory: false,
//     label: 'Username',
//     placeHolder: 'Username'   
// }