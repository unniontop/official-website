<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fluid">
    <!-- 头部顶部 -->
    <div class="header-top container-fluid hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span>{{ t('phone') }}
          <span class="glyphicon glyphicon-envelope"></span>{{ t('email') }}
          <span class="glyphicon glyphicon-time"></span>{{ t('slogan') }}
        </div>
        <div class="lang-switch pull-right">
          <span @click="switchLang('zh')" :class="{ active: currentLang === 'zh' }">中文</span>
          <span class="divider">|</span>
          <span @click="switchLang('en')" :class="{ active: currentLang === 'en' }">EN</span>
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/BigLogo.png" alt="Logo">
      </div>
      <div class="header-nav-name">
        <img src="@/assets/img/TitleLogo.png" alt="Company Name">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
          <router-link :to="item.path">
            {{ t(item.nameKey) }}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path">{{ t(i.nameKey) }}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fluid visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/BigLogo.png" alt="logo">
      </div>
      
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ t(menuNameKey) }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 语言切换（移动端） -->
        <div class="lang-switch-mobile">
          <span @click="switchLang('zh')" :class="{ active: currentLang === 'zh' }">中文</span>
          <span class="divider">|</span>
          <span @click="switchLang('en')" :class="{ active: currentLang === 'en' }">EN</span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name, item.nameKey)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{ t(item.nameKey) }}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuNameKey: "home",
      menuClass: "glyphicon glyphicon-menu-down",
      currentLang: localStorage.getItem('lang') || 'zh',
      translations: {
        zh: {
          home: "首页",
          service: "相关服务",
          news: "新闻动态",
          company: "公司介绍",
          jobs: "工作机会",
          contact: "联系我们",
          phone: "(+86) 0532-86121899",
          email: "1953857064@qq.com",
          slogan: "为您提供最优质的物流解决方案！"
        },
        en: {
          home: "Home",
          service: "Services",
          news: "News",
          company: "About Us",
          jobs: "Careers",
          contact: "Contact Us",
          phone: "(+86) 0532-86121899",
          email: "1953857064@qq.com",
          slogan: "Providing you with the best logistics solutions!"
        }
      },
      navList: [
        {
          name: "首页",
          nameKey: "home",
          path: "/",
          children: []
        },
        {
          name: "相关服务",
          nameKey: "service",
          path: "/service",
          children: []
        },
        {
          name: "公司介绍",
          nameKey: "company",
          path: "/companyintroduction",
          children: []
        },
        {
          name: "工作机会",
          nameKey: "jobs",
          path: "/jobchance",
          children: []
        },
        {
          name: "联系我们",
          nameKey: "contact",
          path: "/contactus",
          children: []
        }
      ]
    };
  },
  methods: {
    t(key) {
      return this.translations[this.currentLang][key] || key;
    },
    switchLang(lang) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      this.$root.$emit('lang-changed', lang);
    },
    navClick(index, name, nameKey) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index);
      this.menuNameKey = nameKey || 'home';
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  background: #fff;
  transition: all ease 0.6s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 0;
  margin-left: 0;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #00abfe;
  padding-right: 0;
  padding-left: 0;
  margin-right: 0;
  margin-left: 0;
  width: 100%;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 语言切换 */
#header .lang-switch {
  line-height: 50px;
}
#header .lang-switch span {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}
#header .lang-switch span:hover,
#header .lang-switch span.active {
  opacity: 1;
}
#header .lang-switch .divider {
  opacity: 1;
  cursor: default;
}
/* 移动端语言切换 */
#header .lang-switch-mobile {
  position: absolute;
  right: 80px;
  top: 0;
  line-height: 50px;
  font-size: 14px;
}
#header .lang-switch-mobile span {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}
#header .lang-switch-mobile span:hover,
#header .lang-switch-mobile span.active {
  opacity: 1;
}
#header .lang-switch-mobile .divider {
  opacity: 1;
  cursor: default;
}
/* 导航栏 */
#header .header-nav {
  height: 110px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}
#header .header-nav .header-nav-name {
  max-width: 600px;
  width: auto;
  height: 100%;
  float: left; 
  position: relative;
  display: flex;
  flex: 1;
  margin-right: 20px;
}

#header .header-nav .header-nav-name img {
  max-width: 100%;
  width: auto;
  height: 58.3px;
  max-height: 80%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  object-fit: contain;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 95px;
  height: 55px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  object-fit: contain;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: right;
  margin: 0;
  max-width: 800px;
  list-style: none;
  padding-left: 0;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #00abfe;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
  -webkit-transition: transform ease 0.5s;
  -moz-transition: transform ease 0.5s;
  -o-transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #00abfe;
  text-decoration: none;
  border-bottom: 2px solid #00abfe;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}

/* 平板尺寸 */
@media screen and (max-width: 992px) {
  #header .header-nav .header-nav-name {
    max-width: 400px;
  }
  #header .header-nav .header-nav-name img {
    height: 45px;
  }
  #header .header-nav .header-nav-wrapper > li {
    margin: 0 10px;
  }
  #header .header-nav .header-nav-wrapper > li > a {
    font-size: 14px;
  }
}

/* 手机尺寸 */
@media screen and (max-width: 768px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    object-fit: contain;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 100;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 200;
    list-style: none;
    padding-left: 0;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}

/* 小屏手机 */
@media screen and (max-width: 576px) {
  #header .header-top {
    font-size: 11px;
  }
  #header .header-top span {
    margin: 0 4px;
  }
  #header .header-nav-m .header-nav-m-menu {
    font-size: 18px;
  }
  #header .lang-switch-mobile {
    right: 70px;
    font-size: 12px;
  }
}

/* 迷你屏 */
@media screen and (max-width: 480px) {
  #header .header-top {
    font-size: 10px;
    height: 40px;
    line-height: 40px;
  }
  #header .header-top span {
    margin: 0 2px;
  }
  #header .header-nav-m .header-nav-m-logo {
    height: 60px;
  }
  #header .header-nav-m .header-nav-m-logo img {
    width: 80px;
    height: 38px;
  }
  #header .header-nav-m .header-nav-m-menu {
    height: 45px;
    line-height: 45px;
    font-size: 16px;
  }
  #header .lang-switch-mobile {
    right: 60px;
  }
  #header .header-nav-m .header-nav-m-wrapper {
    top: 45px;
  }
}
</style>
