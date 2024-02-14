<script>
    import {OhVueIcon} from "oh-vue-icons";

    export default {
        name: "Header",
        components: {
            "v-icon": OhVueIcon
        },
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
            <v-icon name="fa-align-justify" />
        </v-app-bar-nav-icon>
        <v-app-bar-title>
            {{ this.title }}
        </v-app-bar-title>
    </v-app-bar>

   
</template>
