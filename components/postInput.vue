<template>
	<v-dialog v-model="open">
		<v-card xs12 md6 class="pa-3" elevation="3">
			<v-overlay :value="sending"></v-overlay>
			<v-form>
				<v-file-input
					accept="image/png, image/jpeg, image/bmp"
					placeholder="یک تصویر بارگزاری کنید."
					prepend-icon="mdi-camera"
					@change="uploadImage"
					ref="file"
					label="تصویر"
				></v-file-input>
				<v-progress-linear
					buffer-value="100"
					v-model="uploadProgress"
					v-show="uploadProgress"
				></v-progress-linear>
				<v-text-field
					label="عنوان"
					placeholder="عنوان مطلب را وارد کنید"
					v-model="title"
				/>
				<v-textarea
					label="متن"
					placeholder="متن مطلب را وارد کنید"
					v-model="content"
					@keydown.ctrl.enter="send"
				/>
				<v-btn :disabled="!title || !content || sending" @click="submitPost"
					>ثبت نظر جدید</v-btn
				>
			</v-form>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'post-input',
	props: ['open'],
	data() {
		return {
			title: '',
			content: '',
			imageUrl: '',
			sending: false,
			uploadProgress: 0,
			file: '',
		}
	},
	methods: {
		...mapActions(['createPost']),
		async submitPost() {
			this.sending = true
			await this.createPost({
				title: this.title,
				content: this.content,
				imageUrl: '/default.jpeg',
			})
			this.sending = false
			this.open = false
		},
		uploadImage(e) {
			this.file = e
			const formData = new FormData()
			formData.append('file', this.file)
			// A COMPLETE FAKE UPLOAD - BECAUSE WE DON'T HAVE A SERVER HERE TO UPLOAD FILES
			this.$axios
				.$post('http://fakeapi.jsonparseronline.com/posts', formData, {
					onUploadProgress: function (progressEvent) {
						this.uploadProgress = Number(
							Math.round((progressEvent.loaded / progressEvent.total) * 100),
						)
					}.bind(this),
				})
				.then(() => {
					this.uploadProgress = 0
				})
				.catch(() => {
					this.uploadProgress = 0
				})
		},
	},
}
</script>

<style>
</style>