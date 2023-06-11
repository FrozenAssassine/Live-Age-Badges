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
            const birthdate = this.$route.query.birthdate as string;
            const textColor = this.$route.query.textcolor as string;
            const fontsize = this.$route.query.fontsize as string;
            const fontfamily = this.$route.query.fontfamily as string;
            const timezone = this.$route.query.timezone as string;

            const font_number = fontsize == null ? 15 : fontsize as number;
            const age = this.calculateAge(new Date(birthdate), timezone ?? "America/New_York");

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d") as CanvasRenderingContext2D;
            canvas.width = font_number * 2;
            canvas.height = font_number * 1.2;
            // context.fillStyle = '#ffffff';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.font = `${fontsize}px ${fontfamily ?? "Arial"}`;
            context.fillStyle = "#" + (textColor ?? "000000");
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
