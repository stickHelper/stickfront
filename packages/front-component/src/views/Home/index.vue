<template>
  <div class="home-page">
    <section class="home-page--banner p-xs-5">
      <h1>
        Stickearn Design Component
      </h1>
      <h3>
        For Vue JS
      </h3>
      <a href="https://badge.fury.io/js/%40stickearn%2Fstickfront">
        <img
          src="https://badge.fury.io/js/%40stickearn%2Fstickfront.svg"
          alt="npm version"
          height="18"
        >
      </a>
    </section>
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Installation</h2>
        <div class="m-b-m">
          <div>Using npm :</div>
          <pre><code class="hljs">$ npm i @stickearn/stickfront</code></pre>
        </div>
        <div class="m-b-l">
          <div>Using yarn :</div>
          <pre><code class="hljs">$ yarn add @stickearn/stickfront</code></pre>
        </div>
      </div>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Quick Start</h2>
        <div>
          Find <code>src/main.js</code> and add below.
        </div>
        <div class="m-b-m">
          <div>Using npm :</div>
          <pre><code class="javascript">...
import Vue from 'vue'
import Components from "@stickearn/stickfront";
import "@stickearn/stickfront/dist/stickfront.css";

Vue.use(Components);

...
</code></pre>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Usage</h2>
        <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">UHButton</span>&gt;</span>Testing<span class="hljs-tag">&lt;/<span class="hljs-name">Submit</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'app'</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
