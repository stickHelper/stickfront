<template>
  <div
    :id="id"
    :class="classes"
  >
    <ul>
      <li>
        <span>
          <i class="icon icon-angle-left" />
        </span>
      </li>
      <li class="active"><span>1</span></li>
      <li><span>2</span></li>
      <li><span>3</span></li>
      <li><span>4</span></li>
      <li><span>5</span></li>
      <li>
        <span>
          <i class="icon icon-angle-right" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SEPagination',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-pagination': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
