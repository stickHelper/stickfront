<template>
  <CodeCard>
    <CodeCardDemo>
      <SEButton
        size="small"
        class-name="m-r-l m-b-m"
      />

      <SEButton
        size="medium"
        class-name="m-r-l m-b-m"
      />

      <SEButton
        size="large"
        class-name="m-r-l m-b-m"
      />
    </CodeCardDemo>
    <CodeCardMeta @showCode="changeViewCode($event)">
      <div class="code-card-title">
        Size
      </div>
      <span>Size:
        <code>small</code> <code>medium</code> <code>large</code>
      </span>
    </CodeCardMeta>
    <CodeCardHightlight :show-code="showCode">
      <pre><code class="xml hljs">&lt;SEButton size="small"&gt;Small&lt;/SEButton&gt;
&lt;SEButton&gt;Default&lt;/SEButton&gt;
&lt;SEButton size="medium"&gt;Medium&lt;/SEButton&gt;
&lt;SEButton size="large"&gt;Large&lt;/SEButton&gt;</code></pre>
    </CodeCardHightlight>
  </CodeCard>
</template>

<script>
import SEButton from '@/components/SEButton'
import CodeCard from '@/components/CodeCard'
import CodeCardDemo from '@/components/CodeCard/CardDemo'
import CodeCardMeta from '@/components/CodeCard/CardMeta'
import CodeCardHightlight from '@/components/CodeCard/CardHightlight'

export default {
  name: 'ButtonSize',
  components: {
    SEButton,
    CodeCard,
    CodeCardDemo,
    CodeCardMeta,
    CodeCardHightlight
  },
  data: function () {
    return { showCode: false }
  },
  methods: {
    changeViewCode: function (e) {
      this.showCode = e
    }
  }
}
</script>
