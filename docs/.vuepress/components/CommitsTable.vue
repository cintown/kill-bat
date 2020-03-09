<template>
    <div class="tabel_cotainer">
        <div class="table_year">
<!--            <div class="table_year_text"></div>-->
            <div class="tabel_year_content">
                <div class="table_week_text">
                    <div class="table_week_text_blank_top"></div>
                    <div class="table_week_text_content">
                        <div style="margin-right: 2px; font-size: 10px">Mon</div>
                        <div style="margin-right: 2px; font-size: 10px">Thu</div>
                        <div style="margin-right: 2px; font-size: 10px">Sun</div>
                    </div>
                    <div class="table_week_text_blank_bottom"></div>
                </div>
                <div class="scroll-content" ref="scrollContent">
                    <div v-for="(week) in week_list" :key="week.id" :class="{'table_week': 1==1}" >
                        <div class="table_month_text" v-if="week.monthBegin">
                            {{week.whichMonth}}
                        </div>
                        <div class="table_month_text" v-else>
                        </div>
                        <div v-for="(day) in week.day_list" :key="day.id"
                              :class="{'table_day':true,
                                'border': true,
                                'white':day.color=='white',
                                'purper':day.color=='purper',
                                'purper1':day.color=='purper1',
                                'purper2':day.color=='purper2'}">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scrollMax: 999999,
                week_list: []
            };
        },
        name: "CommitsTable",
        beforeMount() {
            console.log("beforeMount");
            this.initWeekList();
        },
        mounted () {
            this.$refs.scrollContent.scrollLeft = this.scrollMax;
        },
        methods:{
            initWeekList(){
                for(let i=1;i<=54;i++){
                    let monthBegin= false;
                    let whichMonth= '';
                    if(i%4 == 0){
                        monthBegin = true;
                        whichMonth ='Feb';
                    }
                    let day_list=[];

                    for(let j=1;j<=7;j++){
                        if(i==54&&j>2){
                            break;
                        }
                        const colorType = Math.floor(Math.random()*10)%3;
                        let color = "white";
                        if(colorType==1){
                            color = "purper";
                        }else if(colorType==2){
                            color = "purper1";
                        }else{
                            color = "purper2";
                        }
                        let singleday={
                            id:"week"+i+"day"+j,
                            color:color
                        };
                        day_list.push(singleday);
                    }

                    let week = {
                        id:"week"+i,
                        day_list:day_list,
                        monthBegin:monthBegin,
                        whichMonth:whichMonth
                    };
                    this.week_list.push(week);
                }
                console.log(this.week_list);
            }
        }
    }
</script>

<style>
    .table_year {
        display: flex;
        flex-direction: column;
        /*margin: 10px;*/
        margin-top: 20px;
        /* border: #007AFF solid 1px; */
        border-radius: calc(5px);
        box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
        width:100%;
        height:100%;
        overflow:hidden;
    }
    .table_year_text {
        text-align: center;
        font-weight: bolder;
        margin: 10px;
    }
    .tabel_year_content {
        display: flex;
        flex-direction: row;
        margin-top: 17px;
        margin-left: 10px;
        margin-right: 10px;
        justify-content: flex-end;
        height: calc(100% + 17px);
        overflow:auto;
    }
    .table_week_text {
        display: flex;
        flex-direction: column;
    }
    .table_week_text_blank_top {
        height: 15px;
        line-height: 15px;
    }
    .table_week_text_blank_bottom {
        height: 20px;
        line-height: 20px;
    }
    .table_week_text_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        font-size: 20px;
        width: 100%;
        text-align: center;
        color: #999999;
    }
    .scroll-content {
        white-space: nowrap;
        /*width: 90%;*/
        margin: 0 auto;
        display: inline-block;
        flex-wrap: nowrap;
        overflow: auto;
    }
    ::-webkit-scrollbar{width:0px}
    /* .table_week {
        display:flex;
        flex-direction: column;
        margin: 2px;
    } */

    .table_week {
        display: inline-block;
        margin: 2px;
        vertical-align: top;
    }
    .table_month_text {
        height: 10px;
        width: auto;
        line-height: 10px;
        font-size: 10px;
        text-align: center;
        align-content: center;
    }
    .table_day {
        height: 10px;
        width: 10px;
        margin: 5px;
    }

    /* 背景颜色选择 */
    .border {
        border-radius: calc(30%);
        border: 1px solid rgba(0,0,0,0.2);
    }
    .white {
        background-color: #E5E5E5;
    }
    .lessPurper {
        background-color: rgb(145,160,219);
    }
    .purper {
        background-color: rgb(57,73,171);
    }
    .purper1 {
        background-color: rgba(57,73,171,0.6);
    }
    .purper2 {
        background-color: rgba(57,73,171,0.2);
    }

</style>
