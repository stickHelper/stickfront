<template>
  <transition name="slide-fade">
    <div
      v-show="active"
      :id="id"
      :class="classes"
    >
      <p class="se-toast__message">
        {{ message }}
      </p>
      <i
        class="se-toast__close icon icon-close"
        @click="close"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SEToast',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['success', 'info', 'warning', 'error'].indexOf(value) !== -1
      }
    },
    isActive: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3000
    },
    message: {
      type: String,
      default: 'No message are defined'
    }
  },
  data() {
    return {
      active: this.isActive,
      timeout: this.duration,
      container: null
    }
  },
  computed: {
    classes() {
      return {
        'se-toast__item': true,
        [`se-toast__item--${this.type}`]: this.type !== null
      }
    }
  },
  beforeMount() {
    this.setupContainer()
  },
  methods: {
    setupContainer() {
      this.container = document.querySelector('.se-toast')

      if (this.container) return

      if (!this.container) {
        this.container = document.createElement('div')
        this.container.className = 'se-toast'
      }

      const documentBody = document.body
      documentBody.appendChild(this.container)
    },
    removeElement(el) {
      if (typeof el.remove !== 'undefined') {
        el.remove()
      } else {
        el.parentNode.removeChild(el)
      }
    },
    show() {
      this.container.insertAdjacentElement('afterbegin', this.$el)
      this.active = true
      setTimeout(() => this.close(), this.timeout)
    },
    close() {
      clearTimeout(this.timeout)
      this.active = false

      setTimeout(() => {
        this.$destroy()
        this.removeElement(this.$el)
      }, 300)
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
transition: all .3s ease;
}
.slide-fade-leave-active {
transition: all .3s ease;
}
.slide-fade-enter {
transform: translateX(10px);
opacity: 0;
}
.slide-fade-leave-to {
transform: translateY(10px);
opacity: 0;
}
</style>
