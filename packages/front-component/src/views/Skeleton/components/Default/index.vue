<template>
  <CodeCard>
    <CodeCardDemo>
      <SESkeleton />
    </CodeCardDemo>
    <CodeCardMeta @showCode="changeViewCode($event)">
      <div class="code-card-title">
        Default
      </div>
      <span>Default: - </span>
    </CodeCardMeta>
    <CodeCardHightlight :show-code="showCode">
      <pre><code class="xml hljs">&lt;SESkeleton /&gt;</code></pre>
    </CodeCardHightlight>
  </CodeCard>
</template>

<script>
import SESkeleton from '@/components/SESkeleton'
import CodeCard from '@/components/CodeCard'
import CodeCardDemo from '@/components/CodeCard/CardDemo'
import CodeCardMeta from '@/components/CodeCard/CardMeta'
import CodeCardHightlight from '@/components/CodeCard/CardHightlight'

export default {
  name: 'SkeletonDefault',
  components: {
    SESkeleton,
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
