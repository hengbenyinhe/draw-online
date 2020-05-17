<template>
    <div id="vueCanas">
        <p>*************************************************我是华丽的分割线*******************************************</p>-->      
        <div style="border-bottom: 1px solid #000;text-align: left;height:30px;">
            <span style="margin-left:20px;">工具栏</span>
            <button @click="insert" style="margin-left:20px;">新增</button>
            <button @click="del" style="margin-left:20px;">删除</button>
        </div>
		<v-stage ref="stage" :style="{cursor:cur}"
                 :config="configKonva"
                 @dragstart="handleDragstart"
                 @dragend="handleDragend">
            <v-layer ref="layer">
                <v-star
                        @mousemove="handleMouseMove"
                        @click="rmvOne"
                        @mouseout="handleMouseOut"
                        v-for="item in list"
                        :key="item.id"
                        :config="item"></v-star>
            </v-layer>
            <v-layer ref="dragLayer"></v-layer>
        </v-stage>
    </div>
</template>

<script>
    const width = window.innerWidth-16*16;
    const height = window.innerHeight-60;
    let vm = {};
    export default {
        data() {
            return {
                list: [],
                val:'在线画图',
				text: '',
                configKonva: {
                    width: width,
                    height: height
                },
				cur:"auto",
            };
        },
        computed: {
            // curImg(){
            //     if(this.cur==='auto'){
            //         return 'auto';
            //     }
            //     else{
            //         return "url('./assets/del.png')";
            //     }
            // }
        },
        methods: {
            rmvOne(e){
                if(this.cur==='not-allowed'){
                    const shape = e.target;
                    const d_x=shape._lastPos.x;
                    const d_y=shape._lastPos.y;
                    this.list=this.list.filter((item)=>!(item.x==d_x && item.y==d_y));
                }

            },
            handleDragstart(e){
                const shape = e.target;
                const dragLayer = vm.$refs.dragLayer.getNode();
                const stage = vm.$refs.stage.getNode();
                // moving to another layer will improve dragging performance
                shape.moveTo(dragLayer);
                stage.draw();
                shape.setAttrs({
                    shadowOffsetX: 15,
                    shadowOffsetY: 15,
                    scaleX: shape.getAttr('startScale') * 1.2,
                    scaley: shape.getAttr('startScale') * 1.2
                });
            },
            handleDragend(e) {
                const shape = e.target;
                const layer = vm.$refs.layer.getNode();
                const stage = vm.$refs.stage.getNode();
                shape.moveTo(layer);
                stage.draw();
                shape.to({
                    duration: 0.5,
                    easing: Konva.Easings.ElasticEaseOut,
                    scaleX: shape.getAttr('startScale'),
                    scaleY: shape.getAttr('startScale'),
                    shadowOffsetX: 5,
                    shadowOffsetY: 5
                });
            },
            handleMouseOut(event) {
				//this.writeMessage('Mouseout triangle');				
				// console.log('111111111111');
			},
			handleMouseMove(event) {
				const mousePos = this.$refs.stage.getStage().getPointerPosition();
				const x = mousePos.x - 190;
				const y = mousePos.y - 40;
				// console.log('handleMouseMove22222');
			},
            insert(){
				const scale = 0.1;
				const stage = vm.$refs.stage.getStage();
				this.list.push({
                    x: 0.1 * stage.getWidth(),
                    y: 0.2 * stage.getHeight(),
                    rotation: 0.5 * 180,
                    numPoints: 5,
                    innerRadius: 30,
                    outerRadius: 50,
                    fill: 'red',
                    opacity: 0.8,
                    draggable: true,
                    scaleX: 0.5,
                    scaleY: 0.5,
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    shadowOpacity: 0.6,
                    startScale: 0.5
                });
                // console.log('这里给小宝贝儿预留新增事件');
            },
			del(){
				this.cur=this.cur=='auto'?'not-allowed':'auto';
			},
			reverse(str){
				var result ="";                    
				for(var i = str.length; i > 0; i-- ){
					result +=  str.charAt(i-1);
				}                  
				return result;
			}
        },
        mounted() {
            vm = this;
            for (let n = 0; n < 20; n++) {
                const scale = Math.random();
                const stage = vm.$refs.stage.getStage();
                vm.list.push({
                    x: Math.random() * stage.getWidth(),
                    y: Math.random() * stage.getHeight(),
                    rotation: Math.random() * 180,
                    numPoints: 5,
                    innerRadius: 30,
                    outerRadius: 50,
                    fill: '#89b717',
                    opacity: 0.8,
                    draggable: true,
                    scaleX: scale,
                    scaleY: scale,
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    shadowOpacity: 0.6,
                    startScale: scale
                });
            }
        }
    };
</script>
<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #0071c6;
        height:100%;
    }
    html{
        height:100%;/*让html的高度等于屏幕*/
    }
    body{
        height:100%;
        margin:0;
    }
</style>
