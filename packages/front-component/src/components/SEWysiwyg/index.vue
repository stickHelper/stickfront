<template>
  <div :class="classes">
    <ckeditor
      v-model="editorData"
      :editor="editor"
      :config="editorConfig"
      :disabled="isDisabled"
    />
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'SEWysiwyg',
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    data: {
      type: String,
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: this.data,
      editorDisabled: this.isDisabled,
      editorConfig: {
                    // The configuration of the editor.
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-wysiwyg': true,
        'se-wysiwyg--disabled': this.isDisabled
      }
    }
  }
}
</script>
