<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>海运操作员</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责接收、审核客户的海运订单，确保信息准确无误，并及时录入系统。</li>
          <li>制作和审核相关的海运单证，包括提单、报关文件、装箱单等，确保文件符合国际运输标准。</li>
          <li>实时跟踪货物运输状态，及时向客户反馈货物动态，并处理运输过程中可能出现的问题。</li>
          <li>解答客户的相关咨询，协助处理客户投诉及纠纷，维护良好的客户关系。</li>
          <li>计算运输成本，并制作相关的费用清单，确保费用的准确性。</li>
          <li>识别并处理运输过程中的潜在风险，确保货物安全。</li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>具备全日制本科学历。</li>
          <li>工作细致，有良好的职业道德和服务意识，具备较强的责任心，能够在工作岗位上保持高效工作。</li>
          <li>良好的英语读写能力，通过英语四级，能够处理基本的英文邮件及相关单证。</li>
          <li>具备良好的沟通和协调能力，具备团队合作精神。</li>
        </ol>
        <p>基本待遇</p>
        <ol>
          <li>公司办公时间：工作日上午8:30-12:00，下午13:30-17:30。</li>
          <li>提供具有市场竞争力的基本工资，并设有绩效奖金，依据个人表现和公司业绩进行评定。</li>
          <li>按照国家规定依法缴纳五险一金，包括养老保险、医疗保险、失业保险、工伤保险、生育保险及住房公积金。</li>
          <li>每年组织员工到三甲医院进行体检，确保员工身心健康。</li>
        </ol>
        
        <!-- <button class="center-block btn btn-warning btn-lg">投递简历</button> -->
        <p>简历投递方式：</p>
        <ol>邮箱：1953857064@qq.com <br>联系人：宋先生</ol>
      </div>
      <div class="JobChance-container wow pulse">
        <h2>报关员</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责接收客户的报关订单，审核相关资料，确保信息准确无误，并及时录入系统。</li>
          <li>根据客户需求，准备和审核相关的报关文件，包括商业发票、装箱单、合同、原产地证书等，确保文件符合海关法规及国际贸易标准。</li>
          <li>跟进报关进度，确保货物及时通关，协调海关与相关部门的沟通，处理海关查验、退税、赔偿等事务。</li>
          <li>解答客户关于报关流程、政策、税费等方面的咨询，提供专业的建议和服务。</li>
          <li>及时处理报关过程中遇到的问题，并积极协调解决，确保客户的货物顺利进出口。</li>
          <li>计算关税、增值税等相关费用，并与客户确认费用清单，确保费用的准确性和透明性。</li>
          <li>识别并报告潜在的风险因素，如货物查验、海关政策变动等，确保合规操作。</li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>具备全日制本科学历。</li>
          <li>工作细致，有良好的职业道德和服务意识，具备较强的责任心，能够在工作岗位上保持高效工作。</li>
          <li>良好的英语读写能力，通过英语四级，能够处理基本的英文邮件及相关单证。</li>
          <li>具备良好的沟通和协调能力，具备团队合作精神。</li>
        </ol>
        <p>基本待遇</p>
        <ol>
          <li>公司办公时间：工作日上午8:30-12:00，下午13:30-17:30。</li>
          <li>提供具有市场竞争力的基本工资，并设有绩效奖金，依据个人表现和公司业绩进行评定。</li>
          <li>按照国家规定依法缴纳五险一金，包括养老保险、医疗保险、失业保险、工伤保险、生育保险及住房公积金。</li>
          <li>每年组织员工到三甲医院进行体检，确保员工身心健康。</li>
        </ol>
        
        <!-- <button class="center-block btn btn-warning btn-lg">投递简历</button> -->
        <p>简历投递方式：</p>
        <ol>邮箱：1953857064@qq.com <br>联系人：宋先生</ol>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: "JobChance",
  data() {
    return {};
  },
  mounted(){
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed #fd1309;
}
.JobChance-container h2{
  color: #fd1309;
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p{
font-size: 20px;
  color: #fd1309;
  font-weight: 700;
}
.JobChance-container ol{
    list-style-type: decimal;
    padding-left: 30px;
}
.JobChance-container ol>li{
    font-size: 14px;
    line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed #fd1309;
  }
}
</style>

