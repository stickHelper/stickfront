import SEComboBox from '@/components/SEComboBox'

export default {
	title: 'Components/ComboBox',
	component: SEComboBox,
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SEComboBox },
	template: '<div style="min-height: 300px;"><SEComboBox>Combo Box</SEComboBox></div>'
})

export const Default = Template.bind({})

Default.parameters = {
	docs: {
		source: {
			code: '<SEComboBox />'
		}
	}
}
