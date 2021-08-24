<template>
	<v-card xs12 md6 class="pa-3" elevation="3">
		<v-overlay :value="sending"></v-overlay>
		<v-form>
			<v-text-field
				label="نام"
				placeholder="نام خود را وارد کنید"
				v-model="authorName"
			/>
			<v-textarea
				label="متن"
				placeholder="متن نظر خود را وارد کنید"
				v-model="body"
				@keydown.ctrl.enter="send"
			/>
			<v-btn :disabled="!body || !authorName || sending" @click="send"
				>ثبت نظر جدید</v-btn
			>
		</v-form>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'commentInput',
	data() {
		return { body: '', authorName: '', sending: false }
	},
	props: ['postId', 'postTitle'],
	methods: {
		...mapActions(['addComment']),
		send: async function () {
			this.sending = true
			await this.addComment({
				authorName: this.authorName,
				body: this.body,
				userId: 'userId',
				postId: this.postId,
				postTitle: this.postTitle,
			})
			this.sending = false
		},
	},
}
</script>

<style>
</style>