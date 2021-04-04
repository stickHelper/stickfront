<template>
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
    <!-- <br>
    <SEInputGroup compact>
      <SESelect style="width: 30%" default-value="Home">
        <a-select-option value="Home">
          Home
        </a-select-option>
        <a-select-option value="Company">
          Company
        </a-select-option>
      </SESelect>
      <a-cascader
        style="width: 70%"
        :options="options"
        placeholder="Select Address"
      />
    </SEInputGroup> -->
  </div>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SEInputGroup from '@/components/SEInputGroup'
import SETextfield from '@/components/SETextfield'
import SERow from '@/components/SERow'
import SECol from '@/components/SECol'
import SESelect from '@/components/SESelect'

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
  components: {
    SEInputGroup,
    SETextfield,
    SERow,
    SECol,
    SESelect,
    SEDatePicker: DatePicker
  },
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
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
    }
  }
}
</script>
