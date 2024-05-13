<template>
    <div>
        <v-row class="d-flex ">
            <div class="chatBotIcon ma-2">
                <img color="info" src="~/public/chatBot.png">
            </div>
            <div class="mt-2 me-auto flex-grow-1">
                <v-autocomplete :items="items" append-inner-icon="mdi-waveform" class="mx-auto" density="comfortable"
                    menu-icon="" placeholder="Search Google or type a URL" prepend-inner-icon="mdi-magnify"
                    style="max-width: auto;" variant="solo" auto-select-first item-props rounded="20px"
                    @click:appendInner="micClicked()"></v-autocomplete>
            </div>
            <div class="send-btn ma-2" @click="sendUserInput()" v-ripple>
                <!-- <v-btn class="send-btn"> -->
                <img src="@/public/send.png">
                <!-- </v-btn> -->
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: ['what is javascript?', "How you can add css to a class"]
        }
    },
    methods: {
        micClicked() {
            console.log('mic is clicked ....listening')
        },
        sendUserInput() {
            console.log('logiic to send msg to backend');
        }
    }
}
</script>

<style scoped>
.chatBotIcon>img {
    max-width: 45px;
    max-height: 48px;
}

.send-btn {
    max-height: 45px;
}

.send-btn>img {
    cursor: pointer;
    max-width: 45px;
    max-height: 45px;
}

.send-btn>img:hover {
    background-color: 'red';
}
</style>