<script setup>
import { ref } from 'vue'
import { collections } from "@iconify/collections"
import slugify from 'slugify'

let items = Object.keys(collections).map((key) => {
    const coll = collections[key]
    return { 
        key: key, 
        name: coll.name, 
        total: coll.total,
        slug: slugify(coll.name, { lower: true, strict: true })
    }
})
items = items.sort((a,b) => a.name.localeCompare(b.name))

const filters = ref({
    multi: { value: "", keys: [`key`, `name`] },
})
</script>

<template>
    <input v-model="filters.multi.value" placeholder="Search..." />
    <VTable :data="items" :filters="filters">
        <template #head>
            <tr>
                <th>Name</th>
                <th>Key</th>
                <th># Icons</th>
            </tr>
        </template>
        <template #body="{ rows }">
            <tr v-for="row in rows" :key="row.id">
                <td><router-link :to="{'name':'collection-details', 'params': {'slug':row.slug }}">{{ row.name }}</router-link></td>
                <td>{{ row.key }}</td>
                <td>{{ row.total }}</td>
            </tr>
        </template>
    </VTable>
</template>
