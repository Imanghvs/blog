<template>
	<v-container class="mb-15">
		<v-row justify="center">
			<v-col xl="5" lg="7" md="10" sm="10">
				<v-skeleton-loader
					v-if="loading"
					class="mx-auto"
					type="card"
				></v-skeleton-loader>
				<Comment
					v-for="comment in stateComments"
					:key="comment.id"
					:authorName="comment.authorName || 'ناشناس'"
					:body="comment.body"
					:title="comment.postTitle"
				></Comment>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: { ...mapGetters(['stateComments']) },
}
</script>

<style>
</style>