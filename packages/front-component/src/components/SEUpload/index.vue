<template>
  <div
    :id="id"
    :class="classes"
  >
    <Upload>
      <slot />
    </Upload>
  </div>
</template>

<script>
import { Upload } from 'ant-design-vue'

export default {
  name: 'SEUpload',
  components: {
    Upload
  },
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    accept: {
      type: String,
      default: null
    },
    beforeUpload: {
      type: Boolean,
      default: null
    },
    defaultFileList: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => null
    },
    listType: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['picture', 'picture-card', 'text'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-upload': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>

<style>

</style>
