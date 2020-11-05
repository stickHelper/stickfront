<template>
	<div :class="classes" :options="options">
		<div class="se-comboBox__header">
			<span class="se-comboBox__header-text">All Status</span>
			<span class="se-comboBox__header-icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><defs/><path fill="#B4BCD0" d="M9.2.6A.8.8 0 008 .6l-3 3-3-3A.8.8 0 101 1.8l3.5 3.6a.8.8 0 001.2 0l3.6-3.6a.8.8 0 000-1.2z"/></svg>
			</span>
		</div>
		<div class="se-comboBox__body">
			<div class="se-comboBox__item" v-for="(item, index) in options">{{ item }}</div>
			<div class="se-comboBox__item" v-if="getItem() === 0">List not defined</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SEComboBox',
		props: {
			className: {
				type: String,
				default: null
			},
			options: {
				type: Array,
				default() {
		          return []
		        },
			}
		},
		computed: {
			classes() {
				return {
					'se-comboBox':true,
					[this.className]: this.className !== null
				}
			}
		},
		methods: {
			getItem() {
				return this.options.length
			}
		}
	}
</script>
