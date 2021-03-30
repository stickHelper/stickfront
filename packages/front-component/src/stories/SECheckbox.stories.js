import SERow from '@/components/SERow/index.vue'
import SECol from '@/components/SECol/index.vue'
import SESpace from '@/components/SESpace/index.vue'
import SECheckbox from '@/components/SECheckbox/index.vue'
import SECheckboxGroup from '@/components/SECheckbox/SECheckboxGroup/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Data Entry/Checkbox',
  component: SECheckbox,
  argTypes: {
    size: { control: { type: 'select', options: ['small'] } },
    color: { control: { type: 'select', options: ['primary', 'secondary'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SECheckbox },
  template: `<div>
  <SECheckbox>Checkbox</SECheckbox>
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SECheckbox>Checkbox</SECheckbox>
</div>`
    }
  }
}

export const Size = (args) => ({
  components: { SECheckbox },
  template: `<div>
  <SECheckbox size="small" default-checked>Small</SECheckbox>
  <br />
  <SECheckbox default-checked>Default</SECheckbox>
  <br />
  <SECheckbox size="large" default-checked>Large</SECheckbox>
  <br /> <br />
  <SECheckbox size="small" default-checked indeterminate>Small</SECheckbox>
  <br />
  <SECheckbox default-checked indeterminate>Default</SECheckbox>
  <br />
  <SECheckbox size="large" default-checked indeterminate>Large</SECheckbox>
</div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<SECheckbox size="small">Small</SECheckbox>
<SECheckbox >Default</SECheckbox>
<SECheckbox size="large">Large</SECheckbox>`
    }
  }
}

export const Colors = (args) => ({
  components: { SECheckbox },
  template: `<div>
  <SECheckbox default-checked>Default</SECheckbox>
  <br />
  <SECheckbox color="purple" default-checked>Purple</SECheckbox>
  <br />
  <SECheckbox color="yellow" default-checked>Yellow</SECheckbox>
  </div>`
})

Colors.parameters = {
  docs: {
    source: {
      code: `<SECheckbox default-checked>Default</SECheckbox>
<SECheckbox color="purple" default-checked>Purple</SECheckbox>
<SECheckbox color="yellow" default-checked>Yellow</SECheckbox>`
    }
  }
}

export const Disabled = (args) => ({
  components: { SECheckbox },
  template: `<div>
  <SECheckbox disabled>Disabled</SECheckbox>
  <br />
  <SECheckbox default-checked disabled>Disabled</SECheckbox>
  </div>`
})

Disabled.parameters = {
  docs: {
    source: {
      code: `<SECheckbox disabled>Disabled</SECheckbox>
<SECheckbox default-checked disabled>Disabled</SECheckbox>`
    }
  }
}

export const CheckboxGroup = (args) => ({
  components: { SECheckboxGroup, SECheckbox, SERow, SECol },
  template: `<div>
  <SECheckboxGroup
    :default-value="['A']"
  >
    <SERow>
      <SECol :span="8">
        <SECheckbox value="A">
          A
        </SECheckbox>
      </SECol>
      <SECol :span="8">
        <SECheckbox value="B">
          B
        </SECheckbox>
      </SECol>
      <SECol :span="8">
        <SECheckbox value="C">
          C
        </SECheckbox>
      </SECol>
      <SECol :span="8">
        <SECheckbox value="D">
          D
        </SECheckbox>
      </SECol>
      <SECol :span="8">
        <SECheckbox value="E">
          E
        </SECheckbox>
      </SECol>
    </SERow>
  </SECheckboxGroup>
</div>`
})

CheckboxGroup.parameters = {
  docs: {
    source: {
      code: `<SECheckboxGroup
  :default-value="['A']"
>
  <SERow>
    <SECol :span="8">
      <SECheckbox value="A">
        A
      </SECheckbox>
    </SECol>
    <SECol :span="8">
      <SECheckbox value="B">
        B
      </SECheckbox>
    </SECol>
    <SECol :span="8">
      <SECheckbox value="C">
        C
      </SECheckbox>
    </SECol>
    <SECol :span="8">
      <SECheckbox value="D">
        D
      </SECheckbox>
    </SECol>
    <SECol :span="8">
      <SECheckbox value="E">
        E
      </SECheckbox>
    </SECol>
  </SERow>
</SECheckboxGroup>`
    }
  }
}

export const Info = (args) => ({
  components: { SECheckboxGroup, SECheckbox, SESpace },
  template: `<div>
  <SECheckboxGroup
    :default-value="['A']"
  >
    <SESpace>
      <SECheckbox value="A">
        A
      </SECheckbox>
      <SECheckbox value="B">
        B
      </SECheckbox>
      <SECheckbox value="C">
        C
      </SECheckbox>
      <SECheckbox value="D">
        D
      </SECheckbox>
    </SESpace>
  </SECheckboxGroup>
</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SECheckbox size="small">Small</SECheckbox>
<SECheckbox >Default</SECheckbox>
<SECheckbox size="large">Large</SECheckbox>`
    }
  }
}
