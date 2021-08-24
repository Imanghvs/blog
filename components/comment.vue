<template>
	<v-card xs12 md6 elevation="3">
		<v-card-title
			>نظر ارسالی از {{ authorName }} بر روی مطلب {{ title }}
		</v-card-title>
		<v-card-text class="pt-0 pb-3">{{ body }}</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'comment',
	props: ['authorName', 'body', 'title'],
}
</script>

<style>
</style>