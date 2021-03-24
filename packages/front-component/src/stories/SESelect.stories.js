import '@/styles/index.scss'
import SESelect from '@/components/SESelect/index.vue'
import SESelectOption from '@/components/SESelect/SESelectOption/index.vue'

export default {
  title: 'Data Entry/Select',
  component: SESelect,
  argTypes: {
    mode: { control: { type: 'select', options: ['multiple', 'tags', 'default'] } },
    size: { control: { type: 'select', options: ['large', 'small', 'default'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESelect, SESelectOption },
  template: `<div>
  <SESelect default-value="lucy">
    <SESelectOption value="jack">
      Jack
    </SESelectOption>
    <SESelectOption value="lucy">
      Lucy
    </SESelectOption>
    <SESelectOption value="disabled" disabled>
      Disabled
    </SESelectOption>
    <SESelectOption value="Yiminghe">
      yiminghe
    </SESelectOption>
  </SESelect>
  <br />
  <SESelect default-value="lucy" disabled>
    <SESelectOption value="lucy">
      Lucy
    </SESelectOption>
  </SESelect>
  <br />
  <SESelect default-value="lucy" loading>
    <SESelectOption value="lucy">
      Lucy
    </SESelectOption>
  </SESelect>  
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SESelect default-value="lucy" loading>
  <SESelectOption value="lucy">
    Lucy
  </SESelectOption>
</SESelect>  

<SESelect default-value="lucy" disabled>
  <SESelectOption value="lucy">
    Lucy
  </SESelectOption>
</SESelect>

<SESelect default-value="lucy" loading>
  <SESelectOption value="lucy">
    Lucy
  </SESelectOption>
</SESelect>  `
    }
  }
}

export const Info = () => ({
  components: { SESelect, SESelectOption },
  template: `<div>
  <SESelect label-name="Label info" info="Message info" placeholder="Please Select" helper="Helper text">
    <SESelectOption value="lucy">
      Lucy
    </SESelectOption>
  </SESelect>  

  <br />

  <SESelect isError label-name="Label error" info="Message error" placeholder="Please Select" helper="Helper text">
    <SESelectOption value="lucy">
      Lucy
    </SESelectOption>
  </SESelect>

  <br />

  <SESelect isSuccess label-name="Label success" info="Message succes" placeholder="Please Select" helper="Helper text">
    <SESelectOption value="lucy">
      Lucy
    </SESelectOption>
  </SESelect>  

</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SESelect label-name="Label info" info="Message info" placeholder="Please Select" helper="Helper text">
  <SESelectOption value="lucy">
    Lucy
  </SESelectOption>
</SESelect>  

<SESelect isError label-name="Label error" info="Message error" placeholder="Please Select" helper="Helper text">
  <SESelectOption value="lucy">
    Lucy
  </SESelectOption>
</SESelect>

<SESelect isSuccess label-name="Label success" info="Message succes" placeholder="Please Select" helper="Helper text">
  <SESelectOption value="lucy">
    Lucy
  </SESelectOption>
</SESelect>    
`
    }
  }
}

export const Multipe = () => ({
  components: { SESelect, SESelectOption },
  template: `<div>
  <SESelect
    mode="multiple"
    :default-value="['a1', 'b2']"
    style="width: 100%"
    placeholder="Please select"
  >
    <SESelectOption v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </SESelectOption>
  </SESelect>  

</div>`
})
