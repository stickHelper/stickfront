import Vue from 'vue'

import SEToast from '@/components/SEToast/index.vue'
import SEButton from '@/components/SEButton/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Toast',
  component: SEToast,
  excludeStories: /.*Data$/
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEToast },
  template: '<SEToast :isActive="true" />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SEToast />'
    }
  }
}

export const Success = () => ({
  components: { SEToast },  
  template: '<SEToast type="success" :isActive="true" />'
})

export const Info = () => ({
  components: { SEToast },
  template: '<SEToast type="info" :isActive="true" />'
})

export const Warning = () => ({
  components: { SEToast },
  template: '<SEToast type="warning" :isActive="true" />'
})

export const Error = () => ({
  components: { SEToast },
  template: '<SEToast type="error" :isActive="true" />'
})

export const Demo = () => ({
  components: { SEToast, SEButton },
  methods: {
    showToaster: function({message, type}) {
      const toast = new Vue(SEToast);

      toast.message = message
      toast.type = type

      // document.querySelector('.toast-template-wrapper').appendChild(toast.$mount().$el);
      toast.$mount().$el
      return toast.show()
    },
    toastSuccess: function() {
      this.showToaster({ message: 'Success Toaster', type: 'success' })
    },
    toastInfo: function() {
      this.showToaster({ message: 'Info Toaster', type: 'info' })
    },
    toastWarning: function() {
      this.showToaster({ message: 'Warning Toaster', type: 'warning' })
    },
    toastError: function() {
      this.showToaster({ message: 'Error Toaster', type: 'error' })
    }
  },
  template: `<div class="toast-template-wrapper">
    <p class="mb-xs-3">
      <SEButton @click="toastSuccess" v-bind="$props" size="medium">Show Toaster Success</SEButton>
    </p>

    <p class="mb-xs-3">
      <SEButton @click="toastInfo" v-bind="$props" color="blue" size="medium">Show Toaster Info</SEButton>
    </p>

    <p class="mb-xs-3">
      <SEButton @click="toastWarning" v-bind="$props" color="secondary" size="medium">Show Toaster Warning</SEButton>
    </p>

    <p class="mb-xs-3">
      <SEButton @click="toastError" v-bind="$props" color="error" size="medium">Show Toaster Error</SEButton>
    </p>
  </div>`
})
