<template>
    <timeline timeline-theme="lightblue">
        <li>
            <timeline-title bg-color="#91A0DB">2017</timeline-title>
            <timeline-item line-color=randomColor>
                <p>1月19日 </p>
                <a @click="showdetail_1">我在研究VUE</a>
                <p class="demo" v-show=boxshow id="box">A cute emoticon and emoji keyboard which can generate random emoticon or emoji and no xss.</p>
            </timeline-item>
        </li>
    </timeline>
</template>

<script>
    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
    export default {
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
        // el:'#box',
        data: function() {
            return {
                boxshow: false,
                randomColor : "#91A0DB"
            };
        },
        methods: {
            showdetail_1() {
                // alert('aaa')
                this.boxshow = !this.boxshow;
            },
            getRandomColorHex(){
                let R = Math.floor(Math.random() * 255);
                let G = Math.floor(Math.random() * 255);
                let B = Math.floor(Math.random() * 255);
                var color = 'rgb(' + R + ',' + G + ',' + B + ')';
                var that = color;
                //十六进制颜色值的正则表达式
                var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                // 如果是rgb颜色表示
                if (/^(rgb|RGB)/.test(that)) {
                    var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                    var strHex = "#";
                    for (var i=0; i<aColor.length; i++) {
                        var hex = Number(aColor[i]).toString(16);
                        if (hex.length < 2) {
                            hex = '0' + hex;
                        }
                        strHex += hex;
                    }
                    if (strHex.length !== 7) {
                        strHex = that;
                    }
                    return strHex;
                } else if (reg.test(that)) {
                    var aNum = that.replace(/#/,"").split("");
                    if (aNum.length === 6) {
                        return that;
                    } else if(aNum.length === 3) {
                        var numHex = "#";
                        for (var i=0; i<aNum.length; i+=1) {
                            numHex += (aNum[i] + aNum[i]);
                        }
                        return numHex;
                    }
                }
                return that;
            }

        }
    }


</script>

<style>
    .append {
        font-size: .8em;
        margin-top: 3px;
        color: #646C7C;
    }
    a {
        color: #91A0DB;
        font-weight: bold;
        text-decoration: none;
    }
    .icon-heart {
        width: 20px;
    }
    .demo {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-gap: 1rem;
    }
    .demo-theme.dark {
        background: #3a3939;
    }
</style>
