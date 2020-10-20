<template>
  <div class="container-fluid">
    <section class="page-hero">
      <h1>Icons</h1>
    </section>
    <section>
      <h4>Usage</h4>
      <p>To use these icons, use the material-icons class on an element and provide the ligature as the text content.</p>
      <h6>Call icon with class</h6>
      <pre><code>&lt;i class=&quot;icon icon-activity&quot;&gt;&lt;/i&gt;</code></pre>
      <br>
      <h6>Use in pseudo class (CSS)</h6>
      <pre><code>:before{
  content: &quot;\e000&quot;;
}</code></pre>
    </section>
    <section>
      <h4>Css - Mapping | Content</h4>
      <ul class="glyphs css-mapping">
        <li
          v-for="(icon, index) in icons"
          :key="index"
        >
          <div :class="`icon icon-${icon.name}`" />
          <input
            type="text"
            readonly="readonly"
            :value="icon.name"
          >
          <input
            type="text"
            readonly="readonly"
            :value="icon.content"
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { icons } from './icons'

export default {
  name: 'Icon',
  computed: {
    icons() {
      return icons
    }
  },
  methods: {
    formatIndex(index) {
      switch (true) {
        case index === 0:
          return `00${index}`
        case index < 10:
          return `00${index}`
        case index < 100:
          return `0${index}`
        default:
          return index
      }
    }
  }
}
</script>

<style lang="scss">
.css-mapping {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style-type: none;
  li {
    display: flex;
    align-items: center;
  }
  .icon {
    margin: 0;
    margin-right: 10px;
    padding: 8px;
    height: 40px;
    width: 40px;
    overflow: hidden;
    float: left;
    font-size: 24px;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  input {
    max-width: 128px;
    margin-right: 8px;
  }
}
</style>
