import SERadio from '@/components/SERadio/index.vue'
import SERadioGroup from '@/components/SERadio/SERadioGroup/index.vue'
import SERadioButton from '@/components/SERadio/SERadioButton/index.vue'

import '@/styles/index.scss'

export default {
  title: 'Data Entry/Radio',
  component: SERadio
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SERadio },
  template: `<div>
  <SERadio>Radio</SERadio>
  <br/>
  <SERadio default-checked disabled>
    Disabled
  </SERadio>
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SERadio>Radio</SERadio>
  <SERadio default-checked disabled>
    Disabled
  </SERadio>   
</div>`
    }
  }
}

export const RadioGroup = () => ({
  components: { SERadio, SERadioGroup },
  template: `<div>
  <SERadioGroup
    name="radioGroup"
    :default-value="1"
  >
    <SERadio :value="1">
      A
    </SERadio>
    <SERadio :value="2">
      B
    </SERadio>
    <SERadio :value="3">
      C
    </SERadio>
    <SERadio :value="4">
      D
    </SERadio>
  </SERadioGroup>
</div>
  `
})

RadioGroup.parameters = {
  docs: {
    source: {
      code: `<SERadioGroup
  name="radioGroup"
  :default-value="1"
>
  <SERadio :value="1">
    A
  </SERadio>
  <SERadio :value="2">
    B
  </SERadio>
  <SERadio :value="3">
    C
  </SERadio>
  <SERadio :value="4">
    D
  </SERadio>
</SERadioGroup>`
    }
  }
}

export const RadioButton = () => ({
  components: { SERadioGroup, SERadioButton },
  template: `<div>
  <SERadioGroup
    className="group-button"
    name="radioGroup"
    default-value="a"
  >
    <SERadioButton value="a" :style="'width: 24%; margin-right: 10px;'">
      Hangzhou
    </SERadioButton>
    <SERadioButton value="b" :style="'width: 24%; margin-right: 10px;'">
      Shanghai
    </SERadioButton>
    <SERadioButton value="c" :style="'width: 24%; margin-right: 10px;'">
      Beijing
    </SERadioButton>
    <SERadioButton value="d" :style="'width: 24%'">
      Chengdu
    </SERadioButton>
  </SERadioGroup>
  <br/>
  <SERadioGroup
    className="group-button"
    name="large"
    size="large"
    default-value="a"
  >
    <SERadioButton value="a" :style="'width: 24%; margin-right: 10px;'">
      Hangzhou
    </SERadioButton>
    <SERadioButton value="b" :style="'width: 24%; margin-right: 10px;'">
      Shanghai
    </SERadioButton>
    <SERadioButton value="c" :style="'width: 24%; margin-right: 10px;'">
      Beijing
    </SERadioButton>
    <SERadioButton value="d" :style="'width: 24%'">
      Chengdu
    </SERadioButton>
  </SERadioGroup>
</div>
  `
})

RadioButton.parameters = {
  docs: {
    source: {
      code: `<SERadioGroup
  className="group-button"
  name="radioGroup"
  default-value="a"
>
  <SERadioButton value="a" :style="'width: 24%; margin-right: 10px;'">
    Hangzhou
  </SERadioButton>
  <SERadioButton value="b" :style="'width: 24%; margin-right: 10px;'">
    Shanghai
  </SERadioButton>
  <SERadioButton value="c" :style="'width: 24%; margin-right: 10px;'">
    Beijing
  </SERadioButton>
  <SERadioButton value="d" :style="'width: 24%'">
    Chengdu
  </SERadioButton>
</SERadioGroup>


<SERadioGroup
  className="group-button"
  name="large"
  size="large"
  default-value="a"
>
  <SERadioButton value="a" :style="'width: 24%; margin-right: 10px;'">
    Hangzhou
  </SERadioButton>
  <SERadioButton value="b" :style="'width: 24%; margin-right: 10px;'">
    Shanghai
  </SERadioButton>
  <SERadioButton value="c" :style="'width: 24%; margin-right: 10px;'">
    Beijing
  </SERadioButton>
  <SERadioButton value="d" :style="'width: 24%'">
    Chengdu
  </SERadioButton>
</SERadioGroup>`
    }
  }
}
