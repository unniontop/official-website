<template>
  <div id="ContactUs">
    <div class="banner container-fluid text-center">{{ t('bannerTitle') }}</div>
    <div class="container">
      <div class="container-fluid ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <div class="col-xs-12 col-sm-12 col-md-6">
                  <div class="wow zoomIn" style="width: 100%; height: 365px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; color: #999;">
                    {{ t('mapDisabled') }}
                  </div>
                </div>
                <label for="name" class="col">{{ t('address') }}</label><br>
                <label for="name" class="col">{{ t('phone') }}</label><br>
                <div class="col-sm-10 col-xs-12">
                </div>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'zh',
      translations: {
        zh: {
          bannerTitle: '联系我们',
          mapDisabled: '地图已禁用',
          address: '地址：山东省青岛市市南区中山路百盛大厦1603室',
          phone: '电话：0532-86121899'
        },
        en: {
          bannerTitle: 'Contact Us',
          mapDisabled: 'Map Disabled',
          address: 'Address: Room 1603, Parkson Building, Zhongshan Road, Shinan District, Qingdao, Shandong',
          phone: 'Tel: +86-532-86121899'
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
    this.$root.$on('lang-changed', (lang) => {
      this.currentLang = lang;
    });
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.ContactUs-container {
  padding: 80px 0;
  color: #808080;
  transition: all ease 0.5s;
  box-sizing: border-box;
}

@media screen and (max-width: 992px) {
  .banner {
    font-size: 26px;
    height: 130px;
    line-height: 130px;
  }
  .ContactUs-container {
    padding: 60px 0;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    font-size: 22px;
    height: 110px;
    line-height: 110px;
  }
  .ContactUs-container {
    padding: 40px 0;
  }
}

@media screen and (max-width: 576px) {
  .banner {
    font-size: 20px;
    height: 100px;
    line-height: 100px;
  }
  .ContactUs-container {
    padding: 30px 0;
  }
}

@media screen and (max-width: 480px) {
  .banner {
    font-size: 18px;
    height: 90px;
    line-height: 90px;
  }
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>
