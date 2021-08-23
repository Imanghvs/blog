<template>
	<v-container fluid class="container pa-3">
		<v-layout wrap>
			<v-flex xs12 md10>
				<!-- contents heading -->
				<h1 class="heading">مطالب</h1>
				<!-- list of posts -->
				<v-list two-line class="transparent">
					<v-list-item
						v-for="post in posts"
						:key="post.id"
						class="item-container post grey darken-4 mb-1"
					>
						<p class="title-paragraph mb-0">{{ post.title.slice(0, 25) }}...</p>
						<v-spacer></v-spacer>
						<!-- edit a post (button) -->
						<v-btn class="button edit-button">ویرایش</v-btn>
						<!-- remove a post (button) -->
						<v-btn class="button remove-button">حذف</v-btn>
					</v-list-item>
				</v-list>
			</v-flex>
			<v-flex xs12 md10>
				<v-pagination v-model="page"></v-pagination>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'Panel',
	methods: {
		...mapActions(['getAllPosts']),
	},
	computed: {
		...mapGetters(['posts', 'page']),
	},
	created: function () {
		this.getAllPosts()
	},
}
</script>

<style scoped>
.button {
	margin: 3px;
}
.container {
	direction: rtl;
}
.item-container {
	border-radius: 4px;
}
.post {
	color: white !important;
}
.title-paragraph {
	color: yellow;
}
.edit-button {
	color: green;
}
.remove-button {
	color: red;
}
.pagination-container {
	direction: ltr;
}
</style>
