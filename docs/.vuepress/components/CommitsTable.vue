<template>
    <div class="tabel_cotainer">
        <div class="table_year">
            <div class="table_year_text"></div>
            <div class="tabel_year_content">
                <div class="table_week_text">
                    <div class="table_week_text_blank_top"></div>
                    <div class="table_week_text_content">
                        <div style="margin-right: 2px; font-size: 10px">Mon</div>
                        <div style="margin-right: 2px; font-size: 10px">Thu</div>
                        <div style="margin-right: 2px; font-size: 10px">Sun</div>
                    </div>
                    <!-- <div class="table_week_text_blank_bottom"></div> -->
                </div>
                <div class="scroll-content" ref="scrollContent">
                    <div v-for="(week) in weekList" :key="week.weekId" :class="{'table_week': true}" >
                        <div class="table_month_text" v-if="week.monthBegin">
                            {{week.whichMonth}}
                        </div>
                        <div class="table_month_text" v-else>
                        </div>
                        <div 
                        v-for="(day) in week.dayList" 
                        :key="day.dayId" 
                        :class="{'table_day':true,
                                'border': true,
                                'white':day.commitCount==0,
                                'purper3':day.commitCount>0&&day.commitCount<=2,
                                'purper2':day.commitCount>2&&day.commitCount<=5,
                                'purper1':day.commitCount>5&&day.commitCount<=10
                                }">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "CommitsTable",
        data() {
            return {
                scrollMax: 999999,
                weekList: []
            };
        },
        beforeMount() {
            console.log("beforeMount");
            //this.initWeekList();
            this.getWeekList();
        },
        mounted () {
            console.log(this.$refs.scrollContent);
            this.$refs.scrollContent.scrollLeft = this.scrollMax;
        },
        methods:{
            getWeekList(){
                axios.get('/json/weekList.json').then((res) => {
                    console.log(res.data.weekList);
                    this.weekList = res.data.weekList;
                })
            },
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
        margin-top: 10px;
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
        margin: 5px;
        justify-content: flex-end;
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
        margin: 0 10px;
        display: inline-block;
        flex-wrap: nowrap;
        overflow: auto;
    }
    /*@media (max-width: 500px){

        ::-webkit-scrollbar{
            width:0px
        }
    }*/

    ::-webkit-scrollbar{
            width:2px
        }
    
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
        height: 15px;
        width: 10px;
        line-height: 15px;
        font-size: 10px;
        text-align: center;
        align-content: center;

    }
    .table_day {
        height: 10px;
        width: 10px;
        margin: 2px;
    }

    /* 背景颜色选择 */
    .border {
        border-radius: calc(30%);
        border: 1px solid rgba(0,0,0,0.2);
    }
    .white {
        background-color: #E5E5E5;
    }
    .purper1 {
        background-color: rgba(57,73,171);
    }
    .purper2 {
        background-color: rgba(57,73,171,0.7);
    }
    .purper3 {
        background-color: rgba(57,73,171,0.4);
    }

</style>
