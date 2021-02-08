<template>
  <div
    :id="id"
    :class="classes"
  >
    <ul class="se-breadcrumbs--list">
      <li
        v-for="(item, index) in items"
        :key="`breadcrumb-${index}`"
        class="se-breadcrumbs--item"
        :class="item.isActive ? 'active' : null"
      >
        <router-link
          v-if="isVueRouter && item.path !== ''"
          :to="item.path"
        >
          {{ item.label }}
        </router-link>
        <a
          v-else-if="item.path !== ''"
          :href="item.path"
        >
          {{ item.label }}
        </a>
        <div v-else>
          {{ item.label }}
        </div>
        <span
          v-if="items.length - 1 !== index"
          class="mx-md-3"
        >
          <i class="icon icon-angle-right-b" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SEBreadcrumbs',
  props: {
    id: {
      type: String,
      default: 'se-breadcrumbs'
    },
    className: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    isVueRouter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'se-breadcrumbs': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
