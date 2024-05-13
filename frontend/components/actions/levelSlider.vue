<template>
    <v-slider v-model="pointer" :color="color" :max="3" :ticks="tickLabels" show-ticks="always" step="1"
        track-color="primary" tick-size="4"></v-slider>
</template>

<script>
export default {
    data() {
        return {
            pointer: null,
            tickLabels: {
                0: 'Easy',
                1: 'Medium',
                2: 'Hard',
                3: 'Mixed',
            },
        }
    },

    computed: {
        color() {
            console.log('pointer', this.pointer);
            if (this.pointer == 0) return 'info'
            if (this.pointer == 1) return 'warning'
            if (this.pointer == 2) return 'error'
            if (this.pointer == 3) return 'success'
            return 'info'
        },

    }
}
</script>