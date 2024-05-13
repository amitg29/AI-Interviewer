<template>
    <div>

        <!-- <header> -->
        <Header :drawer="drawer" :app-name="appName" />
        <!-- <Header :drawer="drawer" :app-name="appName" @update-drawer="updateDrawer" /> -->
        <!-- </header> -->
        <div class="nav-main-container">
            <Navigation class="nav" />

            <v-app>
                <!-- <v-layout class="main"> -->
                <v-main style="height: auto; padding-left: 65px;">
                    <slot />
                </v-main>
                <!-- </v-layout> -->
            </v-app>
        </div>

    </div>
</template>


<!-- <script setup>
import Header from "./header.vue";
import Navigation from "./navigation.vue";


let drawer = ref(false)
const appName = ref(useRuntimeConfig().public.title)
// function updateDrawer(val) {
//     console.log('updating drawer', drawer, ':', val)
//     drawer = val
// }

</script> -->

<script>
import Header from "./header.vue";
import Navigation from "./navigation.vue";

export default {
    components: {
        Header,
        Navigation,
    },
    data() {
        return {
            drawer: true,
            appName: useRuntimeConfig().public.title
        }
    }
}
</script>


<style scoped>
@media screen and (min-width: 769px) {
    .nav-main-container {
        display: flex;
        padding-top: 64px;
    }

    .nav {}

    ;

    .main {
        flex-grow: 1;
        padding-left: 60px !important;
    }
}
</style>