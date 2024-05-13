<template>
    <v-layout>
        <v-app-bar color="primary" prominent>

            <v-app-bar-nav-icon variant="text" @click="emitDrawerEvent()"></v-app-bar-nav-icon>

            <v-toolbar-title>{{ appName }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <ThemeToggle :theme="'dark'"></ThemeToggle>
        </v-app-bar>
    </v-layout>
</template>


<script>
import ThemeToggle from '~/components/themeToggle.vue'
export default {
    components: {
        ThemeToggle
    },
    props: {
        drawer: {
            type: Boolean,
            default: false
        },
        appName: {
            type: String,
            default: 'AI - Assistant'
        }
    },

    methods: {
        emitDrawerEvent() {
            console.log('getting drawer as ', this.drawer)
            this.$emit('updateDrawer', !this.drawer)
        },
    }


}
</script>

<style></style>

<!-- <script setup>
import { ref } from 'vue';

const props = defineProps({
    drawer: {
        type: Boolean,
        default: false
    },
    appName: {
        type: String,
        default: 'AI - Assistant'
    }
})


onMounted(
    console.log('amt gupta', props.drawer)
)
const emitDrawerEvent = (props) => {
    console.log('getting drawer as ', props.drawer)
    // $emit('updateDrawer', !props.drawer)
}


</script> -->

<!-- <template>
    <v-app>
        <v-btn @click="toggleTheme">toggle theme</v-btn>
        ...
    </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name = theme.global.current.dark ? 'light' : 'dark'
}
</script> -->