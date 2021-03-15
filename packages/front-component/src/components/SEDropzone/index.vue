<template>
  <div
    :id="id"
    :class="classes"
  >
    <vue-dropzone
      :id="id !== null ? `dropzone-${id}` : 'dropzone'"
      ref="myVueDropzone"
      :options="dropzoneOptions"
      :use-custom-slot="true"
      @vdropzone-complete="uploadComplete"
      @vdropzone-thumbnail="thumbnail"
      @vdropzone-success="uploadSuccess"
      @vdropzone-max-files-exceeded="maxExceed"
      @vdropzone-error="errorResponse"
    >
      <div class="se-dropzone--content">
        <img
          src="./dropzone.svg"
          alt="dropzone"
        >
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'SEDropzone',
  components: {
    vueDropzone: vue2Dropzone
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
    acceptedFiles: {
      type: String,
      default: null
    },
    maxFilesize: {
      type: Number,
      default: 2
    },
    headers: {
      type: Object,
      default: () => {
        return {
          'My-Awesome-Header': 'header value'
        }
      }
    }
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFilesize: this.maxFilesize,
        maxFiles: 1,
        dictMaxFilesExceeded: 'You can not upload any more files. Maximum 1 file',
        headers: this.headers,
        addRemoveLinks: true,
        acceptedFiles: this.acceptedFiles,
        thumbnailMethod: 'contain',
        thumbnailWidth: '100%'
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-dropzone': true,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    template: function () {
      return `<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
      `
    },
    thumbnail: function (file, dataUrl) {
      var j
      var len
      var ref
      var thumbnailElement

      if (file.previewElement) {
        file.previewElement.classList.remove('dz-file-preview')
        ref = file.previewElement.querySelectorAll('[data-dz-thumbnail-bg]')
        for (j = 0, len = ref.length; j < len; j++) {
          thumbnailElement = ref[j]
          thumbnailElement.alt = file.name
          thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")'
        }
        return setTimeout(((function (_this) {
          return function () {
            return file.previewElement.classList.add('dz-image-preview')
          }
        })(this)), 1)
      }
    },
    maxExceed: function () {
      this.$log.error('Dropzone | ', `You can not upload any more files. Maximum ${this.dropzoneOptions.maxFiles} file`)
      this.$emit('error', `You can not upload any more files. Maximum ${this.dropzoneOptions.maxFiles} file`)
    },
    errorResponse: function (file, message, xhr) {
      this.$log.error('Dropzone | ', { file, message, xhr })
      this.$emit('error', { file, message, xhr })
    },
    uploadSuccess: function (file, response) {
      this.$emit('success', { file, response })
    },
    uploadComplete: function (file) {
      this.$emit('complete', file)
    }
  }
}
</script>
