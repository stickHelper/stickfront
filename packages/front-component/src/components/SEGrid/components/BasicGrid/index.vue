<template>
  <div>
    <div id="components-grid-demo-all">
      <section id="components-grid-demo-basic-grid" class="code-box">
        <section class="code-box-demo">
          <SERow>
            <SECol :span="12">
              col-12
            </SECol>
            <SECol :span="12">
              col-12
            </SECol>
          </SERow>
          <SERow>
            <SECol :span="8">
              col-8
            </SECol>
            <SECol :span="8">
              col-8
            </SECol>
            <SECol :span="8">
              col-8
            </SECol>
          </SERow>
          <SERow>
            <SECol :span="6">
              col-6
            </SECol>
            <SECol :span="6">
              col-6
            </SECol>
            <SECol :span="6">
              col-6
            </SECol>
            <SECol :span="6">
              col-6
            </SECol>
          </SERow>
        </section>

        <section data-v-a1ccd506="" class="code-box-meta markdown">
          <h4 id="Basic-Grid" data-v-a1ccd506="">
            Basic Grid
            <a
              data-v-a1ccd506=""
              href="#Basic-Grid"
              class="anchor"
            >#</a>
          </h4>
          <p data-v-a1ccd506="">
            From the stack to the horizontal arrangement.<br
              data-v-a1ccd506=""
            >
            You can create a basic grid system by using a single set of
            <code data-v-a1ccd506="">Row</code> and
            <code data-v-a1ccd506="">Col</code> grid assembly, all of the
            columns (Col) must be placed in
            <code data-v-a1ccd506="">Row</code>.<br data-v-a1ccd506="">
          </p>

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
        </section>

        <section v-if="showCode" class="highlight-wrapper">
          <pre>
            <code class="language-html">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SERow</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-12
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-12
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SERow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SERow</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-8
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-8
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-8
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SERow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SERow</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-6
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-6
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-6
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SECol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        col-6
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SECol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SERow</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code>
          </pre>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import SERow from '@/components/SERow'
import SECol from '@/components/SECol'

export default {
  name: 'BasicGrid',
  components: {
    SERow,
    SECol
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style>

</style>
