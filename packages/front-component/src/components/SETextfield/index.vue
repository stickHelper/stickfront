<template>
  <div
    :id="id"
    :class="classes"
  >
    <label
      v-if="labelName && labelName !== ''"
      :for="name"
    >
      {{ labelName }}
    </label>
    <div v-if="!isTags && !isTagsList">
      <input
        :id="name"
        :type="type"
        :name="name"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="valueInput"
        :style="icon && icon !== '' ? 'padding-right: 35px' : null"
        @input="$emit('input', $event.target.value)"
      >
      <i
        v-if="icon && icon !== ''"
        :class="['icon', icon]"
      />
      <i
        v-if="isError || isSuccess ||isDisabled"
        :class="[
          'icon',
          isError ? 'icon-close' : null,
          isSuccess ? 'icon-check' : null,
          isDisabled ? 'icon-block' : null
        ]"
        :style="styles"
      />
    </div>
    <div
      v-else
      v-click-outside="hide"
      class="se-textfield--tags"
    >
      <input
        :id="name"
        :type="type"
        :name="name"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="valueInput"
        :style="stylesTag"
        @input="searchItem($event.target.value)"
        @keyup.enter="tagsInput($event.target.value)"
      >
      <i
        v-if="icon && icon !== ''"
        :class="['icon', icon]"
      />
      <div
        v-if="tags.length > 0"
        class="tags-list"
      >
        <SEBadge
          v-for="(tag, index) in tags"
          :key="`tag-${index}`"
          type="rounded"
        >
          {{ tag }}
          <span
            class="text-xs ml-xs-4"
            @click="removeTags(index)"
          >
            <i class="icon icon-close" />
          </span>
        </SEBadge>
      </div>
      <ul
        v-if="isTagsList && showList"
        class="se-textfield--tags-dropdown"
      >
        <li
          v-if="optionsList.length === 0"
          class="tag-items empty"
        >
          Not list found
        </li>
        <li
          v-for="(option, index) in optionsList"
          v-else
          :key="`list-${index}`"
          class="tag-items"
          @click="selectedValue(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
    <div class="se-textfield--info">
      {{ info }}
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

import SEBadge from '@/components/SEBadge'

export default {
  name: 'SETextfield',
  directives: {
    ClickOutside
  },
  components: {
    SEBadge
  },
  props: {
    id: {
      type: String,
      default: null
    },
    inputName: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    labelName: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    valueInput: {
      type: [String, Number],
      default: null
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    isTags: {
      type: Boolean,
      default: false
    },
    isTagsList: {
      type: Boolean,
      default: false
    },
    optionsList: {
      type: Array,
      default: () => []
    },
    info: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      tags: [],
      showList: false
    }
  },
  computed: {
    classes() {
      return {
        'se-textfield': true,
        [`se-textfield--${this.size}`]: this.size !== null,
        [this.className]: this.className !== null,
        disabled: this.isDisabled,
        error: this.isError,
        success: this.isSuccess
      }
    },
    stylesTag() {
      let styles = ''
      if (this.icon && this.icon !== '') {
        styles += 'padding-right: 35px;'
      }
      if (this.tags.length > 0) {
        styles += 'padding: 0 0 8px 0;'
      } else {
        styles += 'padding: 0px;'
      }

      return styles
    },
    name() {
      return this.inputName !== null ? this.inputName : null
    },
    disabled() {
      return this.isDisabled
    },
    styles() {
      let styles = null
      if (this.info && this.info !== '' && this.labelName && this.labelName !== '') {
        styles = 'top: 47%;'
      } else if (this.labelName && this.labelName !== '') {
        styles = 'top: 60%;'
      }
      return styles
    }
  },
  methods: {
    tagsInput(value) {
      if (this.isTags) {
        this.tags.push(value)
        this.$emit('change', this.tags)
      }
    },
    selectedValue(option) {
      this.tags.push(option.label)
      this.showList = false
      this.$emit('change', this.tags)
    },
    removeTags(index) {
      this.tags.splice(index, 1)
      this.$emit('change', this.tags)
    },
    searchItem(value) {
      if (value !== '') {
        this.showList = true
      } else {
        this.showList = false
      }
      this.$emit('input', value)
    },
    hide() {
      this.showList = false
    }
  }
}
</script>
