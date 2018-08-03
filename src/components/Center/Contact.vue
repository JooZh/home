<template>
  <div class="page-c fadeIn animated">
    <div class="layout">
      <div class="reg">
        <div class="row">
          <div class="introduce">在实验室负责招新活动的时候做的一个报名表单，以及对填写进行了验证。</div>
          <div class="line-text">选择比努力重要,少走弯路才是最快的捷径</div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'姓名'" :cue="'填写姓名2-4个中文汉字'">
              <con-input :icon="'fa-user'" :type="'email'" :checkType="'name'" :placeholder="'请填写姓名'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'性别'" :cue="'只招收正常新兴人类'">
              <con-radio :dataArr="['男','女']"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'学号'" :cue="'你的校园卡上的学号'">
              <con-input :icon="'fa-mortar-board'" :type="'number'" :checkType="'studentID'" :placeholder="'请填写学号'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'籍贯(省)'" :cue="'招收中国籍湖南农大学生'">
              <con-select-province/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'籍贯(市/州)'"  :cue="'听说你的家乡很美'">
              <con-select-town />
            </con-task>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'手机'" :cue="'用于接收面试短信'">
              <con-input :icon="'fa-phone'" :type="'tel'" :checkType="'mobile'" :placeholder="'填写手机号'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'QQ'" :cue="'主要的通知公告工具'">
              <con-input :icon="'fa-qq'" :type="'number'" :checkType="'qq'" :placeholder="'填写QQ号'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'微信'" :cue="'主要的聊天沟通工具'">
              <con-input :icon="'fa-weixin'" :type="'text'" :checkType="'weixin'" :placeholder="'填写微信号'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'微博'" :cue="'没有则填写无'">
              <con-input :icon="'fa-weibo'" :type="'text'" :checkType="'weibo'" :placeholder="'微博主页'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'邮箱'" :cue="'务必是常用邮箱'">
              <con-input :icon="'fa-envelope'" :type="'email'" :checkType="'email'" :placeholder="'填写电子邮件地址'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'GitHub地址'" :cue="'这是什么鬼，没有则填无'">
              <con-input :icon="'fa-github'" :type="'url'" :checkType="'github'" :placeholder="'https://github.com/your'"/>
            </con-task>
          </div>
        </div>
        <div class="row">
          <div class="line-text">活鱼逆流而上,死魚随波逐流</div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'学院'" :cue="'没有学院歧视'">
              <con-select :lists="colleges"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'年级'" :cue="'我们招收小鲜肉，不放弃老腊肉'">
              <con-select :lists="grades"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'专业'" :cue="'没有专业限制'">
              <con-input :icon="'fa-pencil'" :type="'text'" :checkType="'major'" :placeholder="'填写专业名称'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'高考数学成绩'" :cue="'这都不算什么'">
              <con-input :icon="'fa-pencil'" :type="'number'" :checkType="'grade'" :placeholder="'实事求是'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <con-task :title="'高考英语成绩'" :cue="'大学有可能改变一切'">
              <con-input :icon="'fa-pencil'" :type="'number'" :checkType="'grade'" :placeholder="'实事求是'"/>
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'推荐人'" :cue="'说明你挺优秀，我们欢迎'">
              <con-input :icon="'fa-pencil'" :type="'text'" :checkType="'amway'" :placeholder="'有填写姓名，没有填写无'"/>
            </con-task>
          </div>
        </div>
        <div class="row">
          <div class="line-text">真的很累吗？累就对了,告诉自己：容易走的都是下坡路。</div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'报名方向'" :cue="'请深思熟虑，决定了就一直走下去'">
              <con-radio :dataArr="['产品','前端','后端']">
                <div slot="radio" class="fx-info" slot-scope="props">
                  <div class="info-word" :class="props.select == 0?'show':''">
                    <p>项目团队的主要负责人，负责项目的初期规划，产品原型构思与设计，项目策划书的设计管理，项目PPT的制作，团队管理等。需要具备较好的沟通协调能力。</p>
                    <p>1.掌握初步的管理知识。</p>
                    <p>2.项目的策划与策划书的设计。</p>
                    <p>3.软件的使用 如：</p>
                    <p class="indent"> A)项目原型设计软件（Axure / Sketch），</p>
                    <p class="indent"> B)项目思维导图设计软件 （MindManager / XMind）</p>
                    <p class="indent"> C)办公软件：Office 三件套（策划书的设计 和 PPT的设计）</p>
                    <p class="indent"> D)音视频剪辑与制作：AE PR等。</p>
                  </div>
                  <div class="info-word" :class="props.select == 1?'show':''">
                    <p>现阶段实验室的设计主要分成前端和视觉（UI）两个方向</p>
                    <p>A: 前端：</p>
                    <p class="indent"> 1.前端主要以代码编程为主，负责项目前端的代码实现：</p>
                    <p class="indent"> 2.所需要学习和掌握的必备技能HTML5, CSS3, JavaScript, node.js等</p>
                    <p class="indent"> 3.掌握基本的ps技术，初级的PHP以及初级的MySql。</p>
                    <p>B: 视觉：</p>
                    <p class="indent"> 1.主要是负责产品UI的制作，静态页面的生成，图片的处理，PPT设计。</p>
                    <p class="indent"> 2.所需学习和掌握的必备技能：Sketch , PS , HTML5, CSS3</p>
                    <p class="indent"> 3.掌握AE, PR ,以及制作PPT。</p>
                  </div>
                  <div class="info-word" :class="props.select == 2?'show':''">
                    <p>专注Linux/Windows系统、Apache服务器、PHP语言、MySQL与MVC模式的研究与学习。以服务器语言PHP学习为主，并进行数据库的建设。</p>
                    <p>1、掌握一定的前端基础知识：HTML、CSS、JavaScript、Ajax等。</p>
                    <p>2、熟悉相关网络协议：HTTP协议，TCP/IP协议。</p>
                    <p>3、了解后端语言PHP语法，熟练应用流行框架ThinkPHP、Yii、Laravel。</p>
                    <p>4、熟悉关系型数据库MySQL，非关系型NoSQL，学会数据库设计思想，熟练数据库语句及数据库的优化配置。</p>
                    <p>5、熟练服务器Apache、Nginx的相关配置且应用Linux、Mac、Windows操作系统。</p>
                  </div>
                </div>
              </con-radio>
            </con-task>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'用自己的话描述CSECL实验室是干什么的？自己打算如何在实验室学习？'" :cue="'了解我们，也了解你自己'">
              <con-textarea />
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'简单谈谈你一年内的规划？'" :cue="'规划！奋斗！成功！'">
              <con-textarea />
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'你做人的准则是什么？坚持多久了？'" :cue="'人总是要有原则的'">
              <con-textarea />
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'介绍一下自己和取得过的成就。'" :cue="'人总有辉煌的时候'">
              <con-textarea />
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'谈谈现状？哪些方面需要加强？'" :cue="'好好想想'">
              <con-textarea />
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <con-task :title="'你觉得我们为什么会录取你？'" :cue="'你觉得呢？'">
              <con-textarea />
            </con-task>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="line">
              <div class="task">
                <div class="submit" @click="submit">提交</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConTask from 'src/conComponents/con-task'
import ConSelect from 'src/conComponents/con-select'
import ConSelectProvince from 'src/conComponents/con-select-province'
import ConSelectTown from 'src/conComponents/con-select-town'
import ConTextarea from 'src/conComponents/con-textarea'
import ConInput from 'src/conComponents/con-input'
import ConRadio from 'src/conComponents/con-radio'
export default {
  data () {
    return {
      grades: [{
        id: 0,
        name: '请选择'
      }, {
        id: 1,
        name: '2017'
      }, {
        id: 2,
        name: '2018'
      }, {
        id: 3,
        name: '2019'
      }],
      colleges: [{
        id: 0,
        name: '请选择'
      }, {
        id: 1,
        name: '东方科技学院'
      }, {
        id: 2,
        name: '理学院'
      }, {
        id: 3,
        name: '工学院'
      }, {
        id: 4,
        name: '资源环境学院'
      }, {
        id: 5,
        name: '农学院'
      }, {
        id: 6,
        name: '园艺园林学院'
      }, {
        id: 7,
        name: '植物保护学院'
      }, {
        id: 8,
        name: '信息科学技术学院'
      }, {
        id: 9,
        name: '动物医学院'
      }, {
        id: 10,
        name: '食品科学技术学院'
      }, {
        id: 11,
        name: '经济学院'
      }, {
        id: 12,
        name: '商学院'
      }, {
        id: 13,
        name: '公共管理与法学学院'
      }, {
        id: 14,
        name: '马克思主义学院'
      }, {
        id: 15,
        name: '外国语学院'
      }, {
        id: 16,
        name: '教育学院'
      }, {
        id: 17,
        name: '生物科学技术学院'
      }, {
        id: 18,
        name: '体育艺术学院'
      }, {
        id: 19,
        name: '国际学院'
      }, {
        id: 20,
        name: '继续教育学院'
      }, {
        id: 21,
        name: '其他'
      }]
    }
  },
  components: {
    ConTask,
    ConSelect,
    ConTextarea,
    ConInput,
    ConRadio,
    ConSelectTown,
    ConSelectProvince
  },
  methods: {
    submit () {
      this.$confirm('谢谢体验，提交未完成').then(() => {}).catch(() => {})
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/colors.styl'
  .reg
    text-align left
    margin-left -10px
    margin-right -10px
    font-size 14px
    color fontContact(1)
    input
      font-size 14px
    .introduce
      padding 10px
      text-align center
    .line-text
      text-align center
      line-height 22px
      margin 10px
      padding 10px
      color bgContact(1)
      background fontContact(1)
    .fx-info
      min-height: 50px;
      line-height: 25px;
      padding: 5px;
      font-size: 12px;
      box-sizing: bord er-box;
      .info-word
        display none
        color: fontContact(1)
        transition all 0.5s
        &.show
          display block
        p
          margin: 0;
          &.indent
            text-indent 10px
    .show-border
      border: 2px solid fontContact(1)
    .show-border:hover
      border-color: #5597F5
    .submit
      text-align: center;
      line-height: 40px;
      height: 40px;
      margin-bottom: 20px;
      font-size: 16px;
      background: fontContact(1)
      color: bgContact(1)
      transition: all 0.1s ease-in;
      cursor: pointer;
      &:hover
        background: fontContact(0.8)
</style>
