<template>
    <v-autocomplete v-model="selectedTechs" :items="items" color="blue-grey-lighten-2" item-title="name"
        variant="outlined" density="compact" item-value="name" placeholder="Select Topic" label="Interview Topic" chips
        closable-chips>
        <template v-slot:chip="{ props, item }">
            <v-chip v-bind="props" :prepend-avatar="item.raw.avatar" :text="item.raw.name"></v-chip>
        </template>

        <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" :prepend-avatar="item.raw.avatar" :subtitle="item.raw.group"
                :title="item.raw.name"></v-list-item>
        </template>
    </v-autocomplete>
</template>

<script>
export default {
    data() {
        const srcs = {
            1: 'topic-icons/html.png',
            2: 'topic-icons/css.png',
            3: 'topic-icons/js.png',
            4: 'topic-icons/atom.png',
            5: 'topic-icons/html.png',
        }
        return {
            selectedTechs: [],
            items: [
                // TODO: https://github.com/vuetifyjs/vuetify/issues/15721
                // { header: 'Group 1' },
                { name: 'HTML', group: 'Frontend', avatar: srcs[1] },
                { name: 'CSS', group: 'Frontend', avatar: srcs[2] },
                { name: 'JAVASCRIPT', group: 'Frontend', avatar: srcs[3] },
                { name: 'REACT.JS', group: 'Frontend', avatar: srcs[4] },
            ],
            // items: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT.JS', 'NEXT.JS', 'VUE.JS', 'NUXT.JS', 'NODE.JS', 'PYTHON', 'TYPESCRIPT']
        }
    }
}
</script>