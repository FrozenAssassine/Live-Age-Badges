<template>
    <div class="generatorpage">
        <div class="headline">Live Age Badges</div>
        <div class="form">
            <div class="picker">
                <div class="itemheadline">Birthdate</div>
                <input v-model="birthdate" class="inputbox" type="date" />
            </div>
            <div class="picker">
                <div class="itemheadline">Textcolor</div>
                <input type="color" class="inputbox" v-model="textcolor" />
            </div>
            <div class="picker">
                <div class="itemheadline">Fontsize</div>
                <input type="number" class="inputbox" v-model="fontsize" />
            </div>
            <div class="picker">
                <div class="itemheadline">Fontfamily</div>
                <input type="text" class="inputbox" v-model="fontfamily" />
            </div>
        </div>
        <div class="copybutton" @click="createLink">Copy URL</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            birthdate: null as string | null,
            fontfamily: null as string | null,
            fontsize: null as string | null,
            textcolor: null as string | null,
        };
    },
    mounted() {
        this.loadBackData();
    },
    methods: {
        loadBackData() {
            this.textcolor = this.$route.query.textcolor as string;
            this.birthdate = this.$route.query.birthdate as string;
            this.fontsize = this.$route.query.fontsize as string;
            this.fontfamily = this.$route.query.fontfamily as string;
        },
        createLink() {
            const url = `http:///ages?
            birthdate=${this.birthdate}
            &textcolor=${this.textcolor?.replace("#","")}
            &fontsize=${this.fontsize}
            &fontfamily=${this.fontfamily}`;//&timezone=${this.timezone}

            navigator.clipboard.writeText(url);
        },
    },
});
</script>

<style lang="scss" scoped>
@import url("../styles/GeneratorPage.scss");
</style>
