<template>
    <div class="container d-flex flex-column">
        <div class="options ma-2 pa-2">
            <v-row>
                <v-col cols="3">
                    <TopicOptions></TopicOptions>
                </v-col>
            </v-row>
            <v-row>
                <LevelSlider></LevelSlider>
            </v-row>
        </div>
        <div class="chatInfo ma-2 pa-2 mb-auto">
            <div class="mb-auto">
                <div style="height: 300px">
                </div>
            </div>
            <v-row>
                <v-col class="bottom-0" cols="12">
                    <ChatInputBox></ChatInputBox>
                </v-col>
            </v-row>
        </div>
    </div>
</template>


<script>
import TopicOptions from '~/components/actions/topic.vue'
import LevelSlider from '~/components/actions/levelSlider.vue'
import ChatInputBox from '~/components/actions/chatInputBox.vue'


export default {
    components: {
        TopicOptions,
        LevelSlider,
        ChatInputBox,
    },
    data() {
        return {

        }
    }
}
</script>
<!-- <script setup lang="ts">
useSeoMeta({
    title: 'Interview - AI',
    ogTitle: 'My Amazing website for interviews',
    description: 'This is my amazing site, which can take your interview for any exams / jobs',
    ogDescription: 'This is my amazing site, which can take your interview for any exams / jobs.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script> -->

<style scoped>
.container {
    padding: 30px;
    border: 1px solid cornflowerblue;
}
</style>