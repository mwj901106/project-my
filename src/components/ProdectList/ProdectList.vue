<template>
  <div class="detail" ref="rightNavContainer">
    <div class="detailContainer"  v-if="shopWomen.data" >
      <div class="hot">热销榜</div>
      <div class="contents" v-for="(item,index) in shopWomen.data.current_node.children">
        <h2>{{item.name}}</h2>
        <div class="classify-content-box">
          <div class="classify-content-item" @click="gotoProduct(index2)"
          v-for="(item2,index2) in item.children">
            <img :src="item2.image" alt="">
            <p>{{item2.name}}</p>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    
    props:['shopWomen'],
    methods:{
      gotoProduct(index2){
        this.$router.push('/product')
        console.log(index2)
        if (index2 === 2) {
          this.$store.dispatch('getProductYuRong')  
        }
      }
      
    },
    watch:{
      shopWomen(){
        this.$nextTick(()=>{
          // new BScroll(this.$refs.leftNavContainer,{})
          new BScroll(this.$refs.rightNavContainer,{
            click: true
          })
        })
      },
    }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detail  
    width 100%
    .detailContainer 
      position relative
      // 右侧热销榜
      .hot
        position absolute  
        right 15px  
        // 较大的分类板块 如冬季热卖板块
      .contents
        width 231px
        width 100vw-93px
        margin-left 23px
        margin-top 15px
        border-bottom 1px solid #F9F9F9
        // border-bottom 1px solid black
        // 每个版块的小标题
        h2
          margin-top 20px
          // 每个单独的item
        /* &:after
          content : ''
          width 61px
          height 0 */
        .classify-content-box
          width 231px
          width 100vw-93px
          margin-top 10px
          display flex
          // justify-content content
          justify-content space-around
          flex-wrap wrap 
          &:after
            content : ''
            width 61px
            height 0
          .classify-content-item
            margin-top 15px
            // align-items start
            
            img
              width 61px
              height 61px
            p 
              margin-top 10px
              margin-bottom 10px
              text-align center
              width 61px
 
</style>
