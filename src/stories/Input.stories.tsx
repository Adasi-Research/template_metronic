import {ComponentStory, ComponentMeta} from '@storybook/react'

import Input from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: {control: ''},
    value: {control: ''},
    classprops: {control: ''},
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputBase = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputBase.args = {
  placeholder: '',
  value: '',
  classprops: '',
  type: '',
}
