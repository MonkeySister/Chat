<template>
  <div class="pageCon">
    <div class="content">
      <h1 class="animated fadeInDown">城市选择</h1>
      <div class="city animated bounceInUp"
        v-for="(list,index) in cityList"
        :key="index"
        @click="go(list)">
        <h3>{{list.name}}</h3>
      </div>
    </div>

  </div>
</template>

<script>
import { getCityList } from '@/api/citys'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      cityList: [
        {
          name: '北京',
          code: 1,
          domainName: 'https://adminone.5kmds.com'
        },
        {
          name: '上海',
          code: 2,
          domainName: 'https://adminone.5kmds.com'
        },
        {
          name: '杭州',
          code: 3,
          domainName: 'https://adminone.5kmds.com'
        },
        {
          name: '无锡',
          code: 4,
          domainName: 'https://adminone.5kmds.com'
        },
        {
          name: '苏州',
          code: 5,
          domainName: 'https://adminone.5kmds.com'
        },
        {
          name: '舟山',
          code: 6,
          domainName: 'https://adminone.5kmds.com'
        },
      ]
    }
  },
  created() {
    this.getCityList()
  },
  computed: {
    ...mapState(['cityCode']),
    ...mapGetters(['cityName'])
  },
  methods: {
    ...mapMutations(['setCityCode', 'setCityList']),
    getCityList() {
      // getCityList({}).then(res => {
      //   console.log(res);
      // })
      this.setCityList(this.cityList)
    },
    go(list) {
      this.setCityCode(list.code)
      console.log(this.$store.state.cityList)
      console.log(this.$store.getters.cityName)
      console.log(this.cityCode)
      console.log(this.cityName)

      // this.
      // console.log(this.$store.getters.city)
      // window.url(list.domainName)
      // window.location.href = list.domainName
    }
  }
}
</script>

<style lang="less" scoped>
.pageCon {
  width: 100%;
  height: 100%;
  background-color: #458ee7;
  overflow: hidden;
}
.content {
  width: 60%;
  padding-top: 5%;
  // height: 40%;
  margin: 0 auto;
}
.city {
  width: 100%;
  height: 50px;
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  box-shadow: 0 5px 10px 0 rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.city:hover {
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
}
</style>