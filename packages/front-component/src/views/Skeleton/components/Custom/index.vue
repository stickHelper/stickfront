<template>
  <CodeCard>
    <CodeCardDemo class-name="flex flex-dir--column">
      <SESkeleton
        width="50%"
        height="20px"
        class-name="mb-xs-2"
      />
      <SESkeleton
        width="30%"
        height="20px"
        class-name="mb-xs-2"
      />
      <SESkeleton
        width="80%"
        height="20px"
      />
    </CodeCardDemo>
    <CodeCardMeta @showCode="changeViewCode($event)">
      <div class="code-card-title">
        Custom
      </div>
      <span>Custom: - </span>
    </CodeCardMeta>
    <CodeCardHightlight :show-code="showCode">
      <pre><code class="xml hljs">&lt;SESkeleton width="50%" height="20px" class-name="mb-xs-2" /&gt;
&lt;SESkeleton width="30%" height="20px" class-name="mb-xs-2" /&gt;
&lt;SESkeleton width="80%" height="20px" /&gt;</code></pre>
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
  name: 'SkeletonCustom',
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
