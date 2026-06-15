<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/BigLogo.png" alt="Logo">
    </div>
    <p class="title">{{ t('companyName') }}</p>
    <p class="info">
      <span>{{ t('address') }}</span>
    </p>
    <p class="info">
      <span>{{ t('tel') }}</span>
    </p>
    <p class="info">
      <span>{{ t('fax') }}</span>
    </p>
    <p class="info">
      <span>{{ t('email') }}</span>
    </p>
    <p class="copy">{{ t('copyright') }}</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'zh',
      translations: {
        zh: {
          companyName: "青岛优之杰国际物流有限公司",
          address: "地址：山东省青岛市市南区中山路百盛大厦1603室",
          tel: "Tel：0532-86121899",
          fax: "Fax：0532-86121899",
          email: "邮箱：1953857064@qq.com",
          copyright: "Copyright © 1999 - 2024 青岛优之杰国际物流有限公司"
        },
        en: {
          companyName: "Qingdao Youzhijie International Logistics Co., Ltd.",
          address: "Address: Room 1603, Parkson Building, Zhongshan Road, Shinan District, Qingdao, Shandong",
          tel: "Tel: +86-532-86121899",
          fax: "Fax: +86-532-86121899",
          email: "Email: 1953857064@qq.com",
          copyright: "Copyright © 1999 - 2024 Qingdao Youzhijie International Logistics Co., Ltd."
        }
      }
    };
  },
  methods: {
    t(key) {
      return this.translations[this.currentLang][key] || key;
    }
  },
  mounted() {
    // 监听语言变化
    this.$root.$on('lang-changed', (lang) => {
      this.currentLang = lang;
    });
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: auto;
  color: #fff;
  background: #00abfe;
  overflow: hidden;
  text-align: center;
  padding: 30px 20px;
  box-sizing: border-box;
}
.logo {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.logo img {
  width: 95px;
  height: 55px;
  margin: auto;
  object-fit: contain;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.info {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
  line-height: 1.6;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}

/* 平板尺寸 */
@media screen and (max-width: 992px) {
  .title {
    font-size: 22px;
  }
  .info {
    font-size: 13px;
  }
  .copy {
    font-size: 13px;
    margin: 40px 0 10px;
  }
}

/* 手机尺寸 */
@media screen and (max-width: 768px) {
  .title {
    font-size: 20px;
  }
  .info {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}

/* 小屏手机 */
@media screen and (max-width: 576px) {
  #footer {
    padding: 20px 15px;
  }
  .title {
    font-size: 18px;
  }
  .info {
    font-size: 11px;
  }
  .copy {
    font-size: 11px;
    margin: 25px 0 10px;
  }
}

/* 迷你屏 */
@media screen and (max-width: 480px) {
  #footer {
    padding: 15px 10px;
  }
  .title {
    font-size: 16px;
  }
  .info {
    font-size: 10px;
  }
  .copy {
    font-size: 10px;
    margin: 20px 0 10px;
  }
}
</style>

