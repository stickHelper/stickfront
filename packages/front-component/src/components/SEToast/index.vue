<template>
	<div :id="id" :class="classes">
		<p class="se-toast__message">{{ message }}</p>
		<i class="se-toast__close icon icon-close" @click="close"></i>
	</div>
</template>

<script>
	export default {
		name: 'SEToast',
		props: {
			id: {
				type: String,
				default: null
			},
			className: {
				type: String,
				default: null
			},
			type: {
				type: String,
				default: null,
				validator: function (value) {
			    	return ['success', 'info', 'warning', 'error'].indexOf(value) !== -1
				}
			},
			message: {
				type: String,
				default: 'No message area defined'
			}
		},
		data() {
			return {
				active: false
			}
		},
		computed: {
			classes() {
				return {
					'se-toast': true,
					[`se-toast--${this.type}`]: this.type !== null,
					[this.className]: this.className !== null,
				}
			}
		},
		methods: {
			show() {
				this.active = true
			},
			close() {
				this.active = false
			}
		}
	}
</script>
