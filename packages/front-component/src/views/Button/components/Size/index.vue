<template>
  <CodeCard>
    <CodeCardDemo>
      <SEButton
        label="Small"
        size="small"
      />

      <SEButton
        label="Medium"
        size="medium"
      />

      <SEButton
        label="Large"
        size="large"
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
      <pre><code class="xml hljs">&lt;SEButton label="small" size="small" /&gt;
&lt;SEButton label="Medium" size="medium" /&gt;
&lt;SEButton label="Large" size="Large" /&gt;</code></pre>
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
