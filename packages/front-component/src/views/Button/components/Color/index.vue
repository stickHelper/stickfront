<template>
  <CodeCard>
    <CodeCardDemo>
      <SEButton
        label="Default"
        size="small"
      />
      <SEButton
        label="Primary"
        color="primary"
        size="small"
      />
      <SEButton
        label="Secondary"
        color="secondary"
        size="small"
      />
      <SEButton
        label="Normal"
        color="normal"
        size="small"
      />
      <SEButton
        label="Dark"
        color="dark"
        size="small"
      />
    </CodeCardDemo>
    <CodeCardMeta @showCode="changeViewCode($event)">
      <div class="code-card-title">
        Color
      </div>
      <span>Color:
        <code>primary</code> <code>secondary</code> <code>normal</code> <code>dark</code>
      </span>
    </CodeCardMeta>
    <CodeCardHightlight :show-code="showCode">
      <pre><code class="xml hljs">&lt;SEButton label="Default" size="small" /&gt;
&lt;SEButton label="Primary" color="primary" size="small" /&gt;
&lt;SEButton label="Secondary" color="secondary" size="small" /&gt;
&lt;SEButton label="Normal" color="normal" size="small" /&gt;
&lt;SEButton label="Dark" color="dark" size="small" /&gt;</code></pre>
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
  name: 'ButtonColor',
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
