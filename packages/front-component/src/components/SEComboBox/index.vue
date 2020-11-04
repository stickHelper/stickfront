<template>
	<div
	 :class="classes"
	>
		<div class="se-comboBox__header">
			<span class="se-comboBox__header-text">All Status</span>
			<span class="se-comboBox__header-icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><defs/><path fill="#B4BCD0" d="M9.2.6A.8.8 0 008 .6l-3 3-3-3A.8.8 0 101 1.8l3.5 3.6a.8.8 0 001.2 0l3.6-3.6a.8.8 0 000-1.2z"/></svg>
			</span>
		</div>
		<div class="se-comboBox__body">
			<div class="se-comboBox__item">All</div>
			<div class="se-comboBox__item">Draft</div>
			<div class="se-comboBox__item">Sent</div>
			<div class="se-comboBox__item">Sales Order</div>
			<div class="se-comboBox__item">Cancelled</div>
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
			}
		},
		computed: {
			classes() {
				return {
					'se-comboBox':true,
					[this.className]: this.className !== null
				}
			}
		}
	}
</script>
