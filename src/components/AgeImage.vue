<template>
    <div>
        <img :src="imageSrc" alt="Age Image" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
    data() {
      return {
        imageSrc: ''
      };
    },
    beforeMount() {
        this.generateAgeImage()
    },
    methods:{
        generateAgeImage() {
            const textColor = this.$route.query.textcolor as string;
            const birthdate = this.$route.query.birthdate as string;
            const fontsize = this.$route.query.fontsize as string;
            const fontfamily = this.$route.query.fontfamily as string;
            const font_number = fontsize == null ? 15 : Number(fontsize);
            const age = this.calculateAge(new Date(birthdate), "America/New_York");

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d") as CanvasRenderingContext2D;
            canvas.width = font_number * 2;
            canvas.height = font_number * 1.2;
            context.font = `${fontsize}px ${fontfamily ?? "Arial"}`;
            context.fillStyle = "#" + textColor ?? "ffffff";
            context.fillText(age.toString(), 5, font_number);

            this.imageSrc = canvas.toDataURL();
        },

        getDateTimeByTimezone(timezone: string): number {
            const date = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: timezone,
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            const datePart = date.toLocaleString("en-US", options);
            return Date.parse(datePart );
        },

        calculateAge(birthdate: Date, timezone: string) {
            let timeDiff = Math.abs((this.getDateTimeByTimezone(timezone) + (24 * 3600 * 1000)) - birthdate.getTime());
            let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
            return age;
        }
    }
});
</script>
