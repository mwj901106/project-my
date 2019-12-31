<template>
  <div>
    <div class="assort" >
      <div class="topContainer">
        <i class="iconfont icon-back"></i>
        <div class="sort">分类</div>
        <i class="iconfont icon-cc-home"></i>
      </div>
      <div class="searchContainer">
        <button class="search">
          <i class="iconfont icon-search"></i>
          搜索品牌或商品
        </button>
      </div>
      <div class="main">
        <div class="listWrapper" ref="leftNavContainer">
          <ul class="list content" v-if="shopLeftNav.data">
            <li v-for="(item,index) in shopLeftNav.data.cate_lv1" :key="index" ref="leftNav" 
             @click="toDetail(index)" :class="{active:currentIndex == index}" >
              <span>{{item.name}}</span>
            </li> 
            
          </ul>
        </div>
        <ProdectList :shopWomen="shopWomen"></ProdectList>
      </div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex";
  import BScroll from 'better-scroll'
 
  export default {  
    data(){
      return{
        currentIndex : 0
      }
    },
    methods:{
      toDetail(index){
        this.currentIndex = index
        console.log(this)
        console.log(this.currentIndex)
        // if(this.currentIndex === this.index) return

        if(this.currentIndex === 2){
          // console.log(this.currentIndex)
          this.$store.dispatch('getShopMen')  
        }

        if(this.currentIndex === 3){
          this.$store.dispatch('getShopUnderWear')        
        }
        
        
      }
    },
    mounted(){
      this.$store.dispatch('getShopLeftNav')
      this.$store.dispatch('getShopWomen')
    },
    computed:{
      ...mapState({
        shopLeftNav : state => state.list.shopLeftNav,
        shopWomen : state => state.list.shopWomen,
        // shopUnderWear:state=>state.list.shopUnderWear

      })
      
    },

    watch:{
      shopLeftNav(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.leftNavContainer,{
            click: true
          })
          // new BScroll(this.$refs.rightNavContainer,{})
        })
      },
      
    }

    
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
    .assort
      /* overflow hidden
      height 1334px */
      .topContainer
        width 100%
        height 45px
        position relative
        .sort
          width 160px
          height 26px
          background #585C64 
          border-radius 4px
          color #fff
          line-height 26px
          text-align center
          position absolute
          margin auto 
          top 0
          left 0
          right 0
          bottom 0
        .iconfont
          // margin-left 5px
          font-size 20px
          line-height 45px
          margin auto 10px
        .icon-cc-home
          float right
      .searchContainer
        background-color #F3F4F5
        height 57px
        .search
          width 345px
          height 37px
          line-height 37px 
          border none
          color #fff
          position absolute
          left 50%
          transform translateX(-50%)
          margin-top 8px
          background-color #fff
          color #B5B5BA
          i 
            margin-left 5px
      .main
        display flex
        height calc(100vh - 45px - 57px)
        overflow hidden
        
        .listWrapper
          // overflow hidden
          // display flex
          .list
            
            width 93px
            background-color #F3F4F5
            
            li 
              width 100%
              height 48px
              line-height 48px
              text-align center
              font-size 14px
              color #767980
            .active
              border-left 3px solid #DE3D96
              span 
                display inline-block
                border-bottom 1px solid #EEEFF1
                font-size 14px
                color #6B6F76
                margin-left -3px
                background-color #fff
                width 100%
                height 100%
                color #222222
        
        
            
                

   
 
</style>
