import React from 'react';
import TInput from './TInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Tailwind/TInput',
    component: TInput,
    argTypes: {
        size: {control: 'text'}
    }
} as ComponentMeta<typeof TInput>;

// export const Small = () => <TInput size='small' placeholder="Small size" />
// export const Medium = () => <TInput size='medium' placeholder="Medium size" />
// export const Large = () => <TInput size='large' placeholder="Large size" />

const Template: ComponentStory<typeof TInput> = (args) => <TInput {...args} />;

export const Default = Template.bind({})
Default.args = {
    size: 'xl'
}

export const Small = Template.bind({})
Small.args = {
    size: 'sm'    
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'md'    
}

export const Large = Template.bind({})
Large.args = {
    size: 'lg'    
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    size: 'xl'    
}