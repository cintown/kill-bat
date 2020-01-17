<template>
    <timeline timeline-theme="lightblue">
        <timeline-title>2018</timeline-title>
        <timeline-item bg-color="#9dd8e0" font-color="#e166ab">Welcome to the new year!</timeline-item>
        <timeline-item bg-color="#e6b6b0" :hollow="true">My first 100 stars on Github 🎉</timeline-item>
        <timeline-item bg-color="#b0e6d1">keep going</timeline-item>
        <timeline-title bg-color="#f2d7e1">2017</timeline-title>
        <timeline-item bg-color="#b0e6d1" icon-size="small">icon small size</timeline-item>
        <timeline-item bg-color="#b0e6d1" icon-size="medium">icon medium size</timeline-item>
        <timeline-item bg-color="#b0e6d1" icon-size="large">icon large size</timeline-item>
    </timeline>
</template>

<script>
    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

    export default {
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        }
    }
</script>
