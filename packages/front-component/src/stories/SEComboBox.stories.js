import SEComboBox from '@/components/SEComboBox'

export default {
	title: 'Components/ComboBox',
	component: SEComboBox,
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SEComboBox },
	template: `
		<div style="min-height: 300px;">
			<SEComboBox :options="['All', 'Draft', 'Sent', 'Sales Order', 'Cancelled']" />
		</div>
	`
})

export const Default = Template.bind({})

Default.parameters = {
	docs: {
		source: {
			code: '<SEComboBox />'
		}
	}
}
