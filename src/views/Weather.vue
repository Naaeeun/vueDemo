<template>
    <div class="weather">
        <weather-list :locations="locations"></weather-list>
        <weather-tips></weather-tips>
    </div>
</template>
<script>
import WeatherList from '../components/WeatherList.vue'
import WeatherTips from '../components/WeatherTips.vue'
export default {
    data () {
        return {
            locations:this.$route.query.name
        }
    },
    components: { 
        WeatherTips,WeatherList
    },
    computed: {
    }

}
</script>
<style lang="less" scoped>
.weather{
    width: 100%;
    height: 100%;
}
</style>