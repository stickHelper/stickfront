<template>
  <div>
    <section
      id="components-grid-demo-flex-alignment"
      data-v-a1ccd506=""
      class="code-box"
    >
      <section data-v-a1ccd506="" class="code-box-demo">
        <div data-v-a1ccd506="">
          <p data-v-a1ccd506="">
            Align Top
          </p>
          <div
            class="ant-row-flex ant-row-flex-center ant-row-flex-top"
            data-v-a1ccd506=""
          >
            <div class="ant-col ant-col-4">
              <p class="height-100">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-50">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-120">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-80">
                col-4
              </p>
            </div>
          </div>
          <p data-v-a1ccd506="">
            Align Center
          </p>
          <div
            class="ant-row-flex ant-row-flex-space-around ant-row-flex-middle"
            data-v-a1ccd506=""
          >
            <div class="ant-col ant-col-4">
              <p class="height-100">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-50">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-120">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-80">
                col-4
              </p>
            </div>
          </div>
          <p data-v-a1ccd506="">
            Align Bottom
          </p>
          <div
            class="ant-row-flex ant-row-flex-space-between ant-row-flex-bottom"
            data-v-a1ccd506=""
          >
            <div class="ant-col ant-col-4">
              <p class="height-100">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-50">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-120">
                col-4
              </p>
            </div>
            <div class="ant-col ant-col-4">
              <p class="height-80">
                col-4
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-v-a1ccd506="" class="code-box-meta markdown">
        <h4 id="Flex-Alignment" data-v-a1ccd506="">
          Flex Alignment
          <a
            data-v-a1ccd506=""
            href="#Flex-Alignment"
            class="anchor"
          >#</a>
        </h4>
        <p data-v-a1ccd506="">
          Flex child elements vertically aligned.
        </p>
        <div data-v-a1ccd506="" class="code-box-actions">
          <div class="code-box-actions">
            <span data-v-a1ccd506="" class="code-expand-icon">
              <img
                v-if="!showCode"
                data-v-a1ccd506=""
                width="16"
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                class="code-expand-icon-show"
                @click="showCode = true"
              >
              <img
                v-else
                data-v-a1ccd506=""
                width="16"
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                class="code-expand-icon-hide"
                @click="showCode = false"
              >
            </span>
          </div>
        </div>
      </section>
      <section
        v-if="showCode"
        data-v-a1ccd506=""
        class="highlight-wrapper"
      >
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Align Top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SERow</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-50<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-120<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-80<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SERow</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Align Center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SERow</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>space-around<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-50<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-120<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-80<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SERow</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Align Bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SERow</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>space-between<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-50<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-120<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height-80<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          col-4
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SERow</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FlexAlign',
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style>
</style>
