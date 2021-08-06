<template>
  <div class="content">
    <div class="chatDetail">
      <div class="chatDetailCon">
        <div class="chatItem animated"
          v-for="(list,index) in chatMsgs"
          :key="index"
          :class="[!list.role?'chatItemClient':'',!list.role?'fadeInRight':'fadeInLeft']">
          <div class="chatAvator">
            <img v-if="!list.role"
              src="https://5km2019.oss-cn-hangzhou.aliyuncs.com/TrongGo/companyLogo.png"
              alt="">
            <Avatar v-else
              shape="square"
              icon="ios-person"
              style="width:40px;height:40px" />
          </div>
          <div class="chatMsg">
            {{list.msg}}
          </div>
        </div>
      </div>
    </div>
    <div class="chatInsert">
      <div class="chatInsertTop">
        <div></div>
        <button @click="sendMsg">发送</button>
      </div>
      <textarea class="chatText"
        v-model="chatMsg"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chatCom',
  props: {
    chatMsgs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      chatMsg: '',
    }
  },
  methods: {
    // 发送消息
    sendMsg() {
      if (!this.chatMsg) return this.$Message.error("不能发空空消息！")
      try {
        this.chatMsgs.push({
          msg: this.chatMsg,
          role: 0
        })
        this.$emit('sendMsg', this.chatMsg)
        this.chatMsg = ''
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  box-shadow: 0 5px 10px 0 rgba(255, 255, 255, 0.3);
}

.chatDetail,
.chatInsert {
  width: 100%;
}
.chatDetail {
  height: 60%;
  overflow: hidden;
}
.chatDetailCon {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 17px 0 5px;
}
.chatItem {
  width: 100%;
  padding-top: 20px;
  display: flex;
}

.chatAvator {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 0 10px;
  order: 1;
  background-color: #fff;
  img {
    width: 100%;
    height: auto;
  }
}
.chatMsg {
  order: 2;
  width: auto;
  max-width: 60%;
  word-wrap: break-word;
  padding: 8px;
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  text-align: left;
  position: relative;
}

.chatItemClient {
  justify-content: flex-end;
  .chatAvator {
    order: 2;
  }
  .chatMsg {
    order: 1;
  }
}

.chatInsert {
  height: 30%;
  background-color: #fff;
  padding: 3% 1%;
  box-sizing: border-box;
}
.chatInsertTop {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  button {
    width: 60px;
    height: 30px;
    border: 0;
    background-color: #458ee7;
    color: #fff;
    border-radius: 5px;
  }
}
.chatText {
  width: 100%;
  height: 90%;
  text-align: left;
  padding: 5px;
  box-sizing: border-box;
}
</style>