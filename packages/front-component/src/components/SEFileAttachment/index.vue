<template>
	<div
	 :id="id"
	 :class="classes"
	>
		<label
		 v-if="labelName && labelName !== '' "
		 :for="name" 
		 :class="[
		 	'se-fileAttachment__label',
		 	isInline ? 'se-fileAttachment__label--inline' : ''
		 ]"
		>
		 {{ labelName }}
		</label>
		
		<div class="se-fileAttachment__wrapper">
			<input
			 class="se-fileAttachment__input"
			 :id="name" 
			 :name="name"
			 type="file"
			 accept=".jpg, .jpeg, .png, .pdf"
			 @change="handleChange"
			>
			<div class="se-fileAttachment__preview">{{ fileName ? fileName : placeholder }}</div>
			<div class="se-fileAttachment__icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><defs/><path fill="#fff" d="M6.5 4.5l.8-.9v7.7a.7.7 0 001.4 0V3.6l.8.9a.7.7 0 001.1-.2.7.7 0 00-.1-.8l-2-2a.7.7 0 00-1 0l-2 2a.7.7 0 101 1zM12 6h-1.3a.7.7 0 100 1.3H12a.7.7 0 01.7.7v4.7a.7.7 0 01-.7.6H4a.7.7 0 01-.7-.6V8a.7.7 0 01.7-.7h1.3a.7.7 0 000-1.3H4a2 2 0 00-2 2v4.7a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2z"/></svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SEFileAttachment',
		props: {
			id: {
				type: String,
				default: null
			},
			inputName: {
				type: String,
				default: null
			},
			className: {
				type: String,
				default: null
			},
			labelName: {
				type: String,
				default: null
			},
			placeholder: {
				type: String,
				default: 'Choose File'
			},
			isInline: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				fileName: '',
			}
		},
		computed: {
			classes() {
				return {
					'se-fileAttachment': true,
					[this.className]: this.className !== null
				}
			},
			name() {
				return this.inputName !== null ? this.inputName : null
			}
		},
		methods: {
			handleChange(e) {
				// console.log(e.target.files)
				if (!e.target.files.length) {
					return this.fileName = this.placeholder
				}

				return this.fileName = e.target.files[0].name
			}
		}
	}	
</script>
