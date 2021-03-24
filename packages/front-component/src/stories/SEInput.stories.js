import SEInputGroup from '@/components/SEInputGroup/index.vue'
import SETextfield from '@/components/SETextfield/index.vue'
import SERow from '@/components/SERow/index.vue'
import SECol from '@/components/SECol/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/Input',
  component: SETextfield,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETextfield },
  template: `<div>
  <SETextfield />
  
  <br />

  <SETextfield
    placeholder="Placeholder"
    label-name="Label Info"
  />

  <br />

  <SETextfield
    placeholder="Placeholder"
    label-name="Label Info"
    helper="Helper text"
    info="Message info"
  />
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SETextfield />
      
<SETextfield
  placeholder="Placeholder"
  label-name="Label Info"
/>

<SETextfield
  placeholder="Placeholder"
  label-name="Label Info"
  helper="Helper text"
  info="Message info"
/>
`
    }
  }
}

export const Info = () => ({
  components: { SETextfield },
  template: `<div>
  <SETextfield label-name="Label info" info="Message info" />

  <br />

  <SETextfield label-name="Label error" :isError="true" info="Message Error" />

  <br />

  <SETextfield label-name="Label success" :isSuccess="true" info="Message Success" />

</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SETextfield label-name="Label info" info="Message info" />

<SETextfield label-name="Label error" :isError="true" info="Message Error" />

<SETextfield label-name="Label success" :isSuccess="true" info="Message Success" />    
`
    }
  }
}

export const PrefixSuffix = (args) => ({
  components: { SETextfield },
  template: `<div>
  <SETextfield>
    <template v-slot:prefix>
      <span><i class="icon icon-search" /></span>
    </template>
  </SETextfield>
  <br />
  <SETextfield>
    <template v-slot:suffix>
      <span><i class="icon icon-info" /></span>
    </template>
  </SETextfield>
  <br>
  <SETextfield>
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>
</div>
`
})

PrefixSuffix.parameters = {
  docs: {
    source: {
      code: `<SETextfield>
  <template v-slot:prefix>
    <span><i class="icon icon-search" /></span>
  </template>
</SETextfield>

<SETextfield>
  <template v-slot:suffix>
    <span><i class="icon icon-info" /></span>
  </template>
</SETextfield>

<SETextfield>
  <template v-slot:prefix>
    <span><i class="icon icon-dollar-alt" /></span>
  </template>
  <template v-slot:suffix>
    <span>Dollar</span>
  </template>
</SETextfield>`
    }
  }
}

export const Disabled = (args) => ({
  components: { SETextfield },
  template: '<SETextfield disabled />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SETextfield disabled  />'
    }
  }
}

export const Size = (args) => ({
  components: { SETextfield },
  template: `<div>
  <SETextfield label-name="Small" size="small">
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>
  <br/>
  <SETextfield label-name="Default">
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>
  <br/>
  <SETextfield label-name="large" size="large">
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>
</div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<div>
  <SETextfield label-name="Small" size="small">
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>

  <SETextfield label-name="Default">
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>

  <SETextfield label-name="large" size="large">
    <template v-slot:prefix>
      <span><i class="icon icon-dollar-alt" /></span>
    </template>
    <template v-slot:suffix>
      <span>Dollar</span>
    </template>
  </SETextfield>
</div>`
    }
  }
}

export const PrePostTab = (args) => ({
  components: { SETextfield },
  template: `<div>
    <SETextfield addon-before="Http://" addon-after=".com" default-value="mysite" />
  </div>`
})

PrePostTab.parameters = {
  docs: {
    source: {
      code: '<SETextfield addon-before="Http://" addon-after=".com" default-value="mysite" />'
    }
  }
}

export const InputGroup = (args) => ({
  components: { SETextfield, SEInputGroup, SERow, SECol },
  template: `<div>
    <SEInputGroup>
      <SERow>
        <SECol :span="5">
          <SETextfield default-value="0571" />
        </SECol>
        <SECol :span="8">
          <SETextfield default-value="26888888" />
        </SECol>
      </SERow>
    </SEInputGroup>
  </div>`
})

InputGroup.parameters = {
  docs: {
    source: {
      code: '<SETextfield addon-before="Http://" addon-after=".com" default-value="mysite" />'
    }
  }
}
