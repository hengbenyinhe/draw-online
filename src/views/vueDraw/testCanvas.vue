<template>
    <div style="width: 100%;height: 100%">
        <div>
            <h4>
                测试canvas
            </h4>
        </div>
        <img v-show="false" ref="myImg" src="../../assets/logo.png" alt="">
        <canvas ref="myCanvas" width="500px" height="500px" style="border: 1px solid #c3c3c3">
            您的浏览器不支持HTML5 canvas标签
        </canvas>

    </div>
</template>

<script>
    export default {
        name: "testCanvas",
        data() {
            return {
                canvas:null,
                ctx:null,
                drawing:false,
                img:null,
            }
        },
        methods:{
            draw(){
                let penWeight = 1;
                let penColor = '#ccc';
                let self=this;
                this.canvas.onmousedown = function (e){
                    console.log("开始画图")
                    let start_x = e.clientX - self.canvas.offsetLeft +document.body.scrollLeft;
                    let start_y = e.clientY - self.canvas.offsetTop + document.body.scrollTop;
                    self.ctx.beginPath();
                    self.ctx.moveTo(start_x,start_y);

                    self.ctx.lineCap = 'round';
                    self.ctx.lineJoin = 'round';

                    self.ctx.strokeStyle = penColor;
                    self.ctx.lineWidth = penWeight;

                    self.canvas.onmousemove = function (e) {
                        let move_x = e.clientX - self.canvas.offsetLeft + document.body.scrollLeft;
                        let move_y = e.clientY - self.canvas.offsetTop + document.body.scrollTop;
                        self.ctx.lineTo(move_x,move_y);
                        self.ctx.stroke();

                        self.canvas.onmouseup = function (e) {
                            self.ctx.closePath();
                            self.canvas.onmousemove = null;
                            self.canvas.onmouseup = null;
                        }
                    }
                }

            },
        },
        mounted(){
            console.log("挂载成功",this.canvas);
            //var canvas = this.$refs.myCanvas;
            //var ctx = canvas.getContext("2d");
            //var img = this.$refs.myImg;

            //贴图
            this.$nextTick(()=>{
                this.canvas=this.$refs.myCanvas;
                this.img = this.$refs.myImg;
                this.ctx = this.canvas.getContext("2d");
                //this.ctx.drawImage(this.img,0,0);
                //this.ctx.font="10px hengbenyinhe";
                //打水印
                //this.ctx.fillText("hengbenyinhe",160,90)
                this.draw()
            });

        },
    }
</script>

<style scoped>

</style>