import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {KTCard} from './KTCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/KTCard',
  component: KTCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof KTCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KTCard> = (args) => <KTCard {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  shadow: true,
  flush: true, // https://preview.keenthemes.com/metronic8/demo1/documentation/base/cards.html#flush
  resetSidePaddings: true, // https://preview.keenthemes.com/metronic8/demo1/documentation/base/cards.html#reset-side-paddings
  border: true, // https://preview.keenthemes.com/metronic8/demo1/documentation/base/cards.html#bordered
  dashed: true, // https://preview.keenthemes.com/metronic8/demo1/documentation/base/cards.html#dashed
  stretch: 'stretch', // https://preview.keenthemes.com/metronic8/demo1/documentation/base/cards.html#stretch
  rounded: 'rounded',
  // https://preview.keenthemes.com/metronic8/demo1/documentation/base/cards.html#utilities
  utilityP: 10,
  utilityPY: 10,
  utilityPX: 10,
  children: (
    <div style={{backgroundColor: 'white', padding: '50px', fontSize: '32px'}}>
      <p>Oiii</p>
    </div>
  ),
}
