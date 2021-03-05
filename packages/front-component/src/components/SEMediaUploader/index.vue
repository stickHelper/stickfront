<template>
  <div
    :id="id"
    :class="classes"
  >
    <div class="se-mediauploader__form">
      <SESpace>
        <div
          v-for="index in maxImage"
          :key="index"
          class="mediauploader-form__item"
        >
          <div
            v-if="images[index - 1]"
            class="item-img"
          >
            <img :src="images[index - 1]" :alt="`mediauploader-${index - 1}`">

            <span @click="removeImage(index - 1)"><i class="icon icon-close" /></span>
          </div>
          <button
            v-else
            class="se-mediauploader__trigger"
            @click.prevent="triggerUpload(index - 1)"
          >
            <span><i class="icon icon-photo-add" /></span>
          </button>
        </div>
      </SESpace>
      <form enctype="multipart/form-data" style="display: none">
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="onFileChange"
        >
      </form>
    </div>
  </div>
</template>

<script>
import SESpace from '@/components/SESpace'

export default {
  name: 'SEMediaUploader',
  components: {
    SESpace
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
    maxImage: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      images: [],
      files: []
    }
  },
  computed: {
    classes() {
      return {
        'se-mediauploader': true,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    triggerUpload() {
      this.$refs.fileInput.click()
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.files.push(files[0])
      this.createImage(files[0])

      if (this.files.length !== 0) {
        this.emitFilesImage()
      }
    },
    createImage(file) {
      // const image = new Image()
      const reader = new FileReader()
      const vm = this

      reader.onload = (e) => {
        vm.images.push(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    removeImage(index) {
      this.images.splice(index, 1)
      this.files.splice(index, 1)
    },
    emitFilesImage() {
      const formData = new FormData()
      const images = []

      this.files.forEach((file, index) => {
        images[index] = file
        formData.append(`images[${index}]`, file)
      })

      this.$emit('files', this.files)
      this.$emit('images', this.images)
      this.$emit('formData', this.formData)
    }
  }
}
</script>
