<template>
	<v-card xs12 md6 elevation="3">
		<v-card-title>ارسالی از {{ authorName }}</v-card-title>
		<v-card-text class="pt-0 pb-3">{{ body }}</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'comment',
	props: ['authorName', 'body'],
}
</script>

<style>
</style>