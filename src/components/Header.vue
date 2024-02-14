
<script>
    export default {
        name: "Header",
        data() {
            return {
                title: "Application Navigation"
            }
        }
    }

</script>

<template>
    <v-app-bar width="100%">
        <v-app-bar-nav-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-title>
            {{ this.title }}
        </v-app-bar-title>
    </v-app-bar>

   
</template>
