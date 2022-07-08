<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()
</script>

<template>
coll details, slug is {{route.params.slug}}
</template>
