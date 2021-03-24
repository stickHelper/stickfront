import SEWysiwyg from '@/components/SEWysiwyg/index.vue'

export default {
  title: 'Data Entry/Wysiwyg',
  component: SEWysiwyg
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEWysiwyg },
  template: '<SEWysiwyg />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SEWysiwyg />'
    }
  }
}

export const Disabled = () => ({
  components: { SEWysiwyg },
  template: '<SEWysiwyg :isDisabled="true" />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SEWysiwyg :isDisabled="true" />'
    }
  }
}

export const DummyData = () => ({
  components: { SEWysiwyg },
  template: '<SEWysiwyg data=\'<h2>Taj Mahal: A breathtaking ode to love</h2><p>No trip to India is complete without visiting this spectacular monument, counted among the Seven Wonders of the World. Tourists frequently admit that Taj Mahal "simply cannot be described with words". And that’s probably true. The more you try the more speechless you become. Words give only a semblance of truth. The real truth about its beauty is revealed when you adore different shades of “Taj” depending on the time of the day or when you admire the exquisite inlay work in different corners of the façade.</p>\' />'
})

DummyData.parameters = {
  docs: {
    source: {
      code: '<SEWysiwyg data=\'<h2>Taj Mahal: A breathtaking ode to love</h2><p>No trip to India is complete without visiting this spectacular monument, counted among the Seven Wonders of the World. Tourists frequently admit that Taj Mahal "simply cannot be described with words". And that’s probably true. The more you try the more speechless you become. Words give only a semblance of truth. The real truth about its beauty is revealed when you adore different shades of “Taj” depending on the time of the day or when you admire the exquisite inlay work in different corners of the façade.</p>\' />'
    }
  }
}
