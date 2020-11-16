<template>
  <div class="se-datatable--action text-center">
    <div v-if="type === 'list'">
      <SEButton
        v-click-outside="hideAction"
        type="icon"
        @click="handleAction(index)"
      >
        <span><i class="icon icon-more-hor" /></span>
      </SEButton>
      <ul
        v-if="index === actionActiveIndex"
        class="se-datatable--action-list"
      >
        <li
          v-for="(action, idx) in actions"
          :key="`action-${idx}`"
          @click="handleActionList(action, index)"
        >
          <div>
            <span class="mr-md-2">
              <i :class="`icon ${action.icon}`" />
            </span>
            {{ action.label }}
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <SEButton
        v-for="(action, idx) in actions"
        :key="idx"
        type="icon"
        :is-dimmed="action.isDimmed"
        class="ml-sm-2"
        :color="action.color"
        @click="handleActionIcon(action, index)"
      >
        <span><i :class="`icon ${action.icon}`" /></span>
      </SEButton>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

import SEButton from '../../../SEButton'

export default {
  name: 'SEDatatableActions',
  components: {
    SEButton
  },
  directives: {
    ClickOutside
  },
  props: {
    index: {
      type: [Number, String],
      default: null
    },
    actions: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['list', 'icon'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      actionActiveIndex: null
    }
  },
  methods: {
    handleAction(index) {
      this.actionActiveIndex = index === this.actionActiveIndex ? null : index
    },
    hideAction() {
      this.actionActiveIndex = null
    },
    handleActionIcon(key, index) {
      this.$emit('triggerAction', { key, index })
    },
    handleActionList(key, index) {
      this.$emit('triggerAction', { key, index })
    }
  }
}
</script>
