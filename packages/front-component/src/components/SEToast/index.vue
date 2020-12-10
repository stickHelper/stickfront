<template>
	<transition name="slide-fade">
		<div :id="id" :class="classes" v-if="active" v-model="active">
			<p class="se-toast__message">{{ message }}</p>
			<i class="se-toast__close icon icon-close" @click="close"></i>
		</div>
	</transition>
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
			isActive: {
				type: Boolean,
				default: false
			},
			message: {
				type: String,
				default: 'No message are defined'
			}
		},
		data() {
			return {
				active: this.isActive,
				timeout: 3000,
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
				setTimeout(() => this.close(), this.timeout)
				
			},
			close() {
				clearTimeout(this.timeout)
				this.active = false
				this.$destroy()
			}
		}
	}
</script>

<style>
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .3s ease;
	}
	.slide-fade-enter{
	  transform: translateX(10px);
	  opacity: 0;
	}

	.slide-fade-leave-to {
		transform: translateY(-10px);
		opacity: 0;
	}
</style>
