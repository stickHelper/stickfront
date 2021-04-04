import SEInputGroupExample from '@/components/SEInputGroup/Example.vue'
import SETextfield from '@/components/SETextfield/index.vue'
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
  components: { SEInputGroupExample },
  template: `<div>
  <SEInputGroupExample />
</div>`
})

InputGroup.parameters = {
  docs: {
    source: {
      code: `<template>
<div>
  <SEInputGroup size="large">
    <SERow :gutter="8">
      <SECol :span="5">
        <SETextfield default-value="0571" />
      </SECol>
      <SECol :span="8">
        <SETextfield default-value="26888888" />
      </SECol>
    </SERow>
  </SEInputGroup>
  <br>
  <SEInputGroup compact>
    <SETextfield style="width: 20%" default-value="0571" />
    <SETextfield style="width: 30%" default-value="26888888" />
  </SEInputGroup>
  <br>
  <SEInputGroup compact>
    <SESelect default-value="Zhejiang" :options="[{ label: 'Zhejiang', value: 'Zhejiang' }, { label: 'Jiangsu', value: 'Jiangsu' }]" />
    <SETextfield style="width: 50%" default-value="Xihu District, Hangzhou" />
  </SEInputGroup>
  <br>
  <SEInputGroup compact>
    <SESelect default-value="Option1" :options="[{ label: 'Option1', value: 'Option1' }, { label: 'Option2', value: 'Option2' }]" />
    <SETextfield style="width: 50%" default-value="input content" />
  </SEInputGroup>
  <br>
  <SEInputGroup compact>
    <SETextfield style="width: 50%" default-value="input content" />
    <SEDatePicker style="width: 50%" />
  </SEInputGroup>
  <br>
  <SEInputGroup compact>
    <SESelect default-value="Option1-1" :options="[{ label: 'Option1-1', value: 'Option1-1' }, { label: 'Option1-2', value: 'Option1-2' }]" />
    <SESelect default-value="Option2-2" :options="[{ label: 'Option2-1', value: 'Option2-1' }, { label: 'Option2-2', value: 'Option2-2' }]" />
  </SEInputGroup>
  <br>
  <SEInputGroup compact>
    <SESelect default-value="1" :options="[{ label: 'Between', value: '1' }, { label: 'Except', value: '2' }]">
      <a-select-option value="1">
        Between
      </a-select-option>
      <a-select-option value="2">
        Except
      </a-select-option>
    </SESelect>
    <SETextfield style=" width: 100px; text-align: center" placeholder="Minimum" />
    <SETextfield
      style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
      placeholder="~"
      disabled
    />
    <SETextfield style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
  </SEInputGroup>
</div>
</template>

<script>
const options = [
{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [
    {
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [
        {
          value: 'xihu',
          label: 'West Lake'
        }
      ]
    }
  ]
},
{
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [
    {
      value: 'nanjing',
      label: 'Nanjing',
      children: [
        {
          value: 'zhonghuamen',
          label: 'Zhong Hua Men'
        }
      ]
    }
  ]
}
]

export default {
data() {
  return {
    options,
    dataSource: []
  }
},
methods: {
  handleChange(value) {
    this.dataSource =
      !value || value.indexOf('@') >= 0
        ? []
        : [value + '@gmail.com', value + '@163.com', value + '@qq.com]
  }
}
}
</script>
`
    }
  }
}

export const Password = (args) => ({
  components: { SETextfield },
  template: '<SETextfield type="password" />'
})

Password.parameters = {
  docs: {
    source: {
      code: '<SETextfield type="password"  />'
    }
  }
}
