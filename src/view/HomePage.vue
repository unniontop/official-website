<template>
  <div class="home-modern">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-label wow fadeInUp">{{ t('heroLabel') }}</div>
            <h1 class="hero-title wow fadeInUp" data-wow-delay="0.1">
              {{ t('heroTitle1') }}<br>
              <span class="highlight">{{ t('heroTitle2') }}</span>
            </h1>
            <p class="hero-desc wow fadeInUp" data-wow-delay="0.2">
              {{ t('heroDesc') }}
            </p>
            <div class="hero-actions wow fadeInUp" data-wow-delay="0.3">
              <router-link to="/service" class="btn btn-primary">{{ t('exploreServices') }}</router-link>
              <router-link to="/contactus" class="btn btn-outline">{{ t('contactUs') }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span>{{ t('scrollDown') }}</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <div class="section-head wow fadeIn">
          <span class="section-label">{{ t('ourServices') }}</span>
          <h2 class="section-title">{{ t('servicesTitle') }}</h2>
        </div>
        <div class="services-grid">
          <div class="service-card wow fadeInUp" v-for="(service, index) in services" :key="index" :data-wow-delay="index * 0.1">
            <div class="service-icon">
              <span class="icon-emoji">{{ service.icon }}</span>
            </div>
            <h3 class="service-title">{{ t(service.titleKey) }}</h3>
            <p class="service-desc">{{ t(service.descKey) }}</p>
            <router-link :to="service.path" class="service-link">
              {{ t('learnMore') }}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text wow fadeInLeft">
            <span class="section-label">{{ t('aboutUs') }}</span>
            <h2 class="section-title">{{ t('aboutTitle') }}</h2>
            <p class="about-desc">{{ t('aboutDesc1') }}</p>
            <p class="about-desc">{{ t('aboutDesc2') }}</p>
            <div class="about-features">
              <div class="about-feature" v-for="(feat, index) in aboutFeatures" :key="index">
                <div class="feat-icon">
                  <span>{{ feat.icon }}</span>
                </div>
                <div class="feat-text">
                  <h4>{{ t(feat.titleKey) }}</h4>
                  <p>{{ t(feat.descKey) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-stats wow fadeInRight">
            <div class="stat-card" v-for="(stat, index) in stats" :key="index">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ t(stat.labelKey) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="industries">
      <div class="container">
        <div class="section-head wow fadeIn">
          <span class="section-label">{{ t('industries') }}</span>
          <h2 class="section-title">{{ t('industriesTitle') }}</h2>
        </div>
        <div class="industries-grid">
          <div class="industry-item wow fadeInUp" v-for="(ind, index) in industries" :key="index" :data-wow-delay="index * 0.08">
            <div class="industry-icon">{{ ind.icon }}</div>
            <h4>{{ t(ind.titleKey) }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content wow fadeIn">
          <h2>{{ t('ctaTitle') }}</h2>
          <p>{{ t('ctaDesc') }}</p>
          <router-link to="/contactus" class="btn btn-white">{{ t('getStarted') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'zh',
      translations: {
        zh: {
          heroLabel: '全球物流解决方案',
          heroTitle1: '专业物流，',
          heroTitle2: '全球可达',
          heroDesc: '26年行业经验，为您提供海运、空运、陆运及供应链管理的全方位物流服务。',
          exploreServices: '探索服务',
          contactUs: '联系我们',
          scrollDown: '向下滚动',
          ourServices: '我们的服务',
          servicesTitle: '全方位物流解决方案',
          service1Title: '海运服务',
          service1Desc: '整箱、拼箱、特种柜等海运服务，覆盖全球主要港口。',
          service2Title: '空运服务',
          service2Desc: '国际快递、经济空运、包机服务，满足不同时效需求。',
          service3Title: '陆运服务',
          service3Desc: '公路运输、铁路运输、多式联运，安全高效送达。',
          service4Title: '仓储服务',
          service4Desc: '全球仓储网络，智能库存管理，灵活的配送方案。',
          service5Title: '报关服务',
          service5Desc: '专业报关团队，熟悉各国政策，快速通关。',
          service6Title: '供应链管理',
          service6Desc: '端到端供应链解决方案，优化您的物流流程。',
          learnMore: '了解更多',
          aboutUs: '关于我们',
          aboutTitle: '值得信赖的物流合作伙伴',
          aboutDesc1: '自1998年成立以来，我们始终致力于为客户提供最优质的物流服务。凭借广泛的全球网络和专业的团队，我们已成为行业领先的物流解决方案提供商。',
          aboutDesc2: '无论您需要海运、空运还是多式联运，我们都能为您量身定制最适合的物流方案。',
          feat1Title: '全球网络覆盖',
          feat1Desc: '在180多个国家和地区拥有合作伙伴',
          feat2Title: '专业团队',
          feat2Desc: '5000+专业物流人员，经验丰富',
          feat3Title: '技术驱动',
          feat3Desc: '智能物流系统，全程可视化追踪',
          feat4Title: '客户至上',
          feat4Desc: '24/7客服支持，快速响应',
          statYears: '年行业经验',
          statCountries: '覆盖国家',
          statClients: '服务客户',
          statShipments: '年处理货量',
          industries: '行业解决方案',
          industriesTitle: '服务多个行业领域',
          ind1Title: '汽车及零配件',
          ind2Title: '电子科技',
          ind3Title: '医疗健康',
          ind4Title: '零售电商',
          ind5Title: '工业制造',
          ind6Title: '航空航天',
          ind7Title: '食品饮料',
          ind8Title: '时尚奢侈品',
          ctaTitle: '准备好开始了吗？',
          ctaDesc: '让我们的物流专家为您提供专属解决方案',
          getStarted: '立即咨询'
        },
        en: {
          heroLabel: 'Global Logistics Solutions',
          heroTitle1: 'Expert Logistics,',
          heroTitle2: 'Worldwide Reach',
          heroDesc: '26 years of experience providing comprehensive logistics services including ocean, air, road freight and supply chain management.',
          exploreServices: 'Explore Services',
          contactUs: 'Contact Us',
          scrollDown: 'Scroll Down',
          ourServices: 'Our Services',
          servicesTitle: 'Comprehensive Logistics Solutions',
          service1Title: 'Ocean Freight',
          service1Desc: 'FCL, LCL and special container services covering major ports worldwide.',
          service2Title: 'Air Freight',
          service2Desc: 'International express, economy air and charter services to meet different timing needs.',
          service3Title: 'Road & Rail',
          service3Desc: 'Trucking, rail and multimodal transport for safe and efficient delivery.',
          service4Title: 'Warehousing',
          service4Desc: 'Global warehouse network with smart inventory management and flexible distribution.',
          service5Title: 'Customs Clearance',
          service5Desc: 'Professional brokerage team familiar with international regulations.',
          service6Title: 'Supply Chain',
          service6Desc: 'End-to-end supply chain solutions to optimize your logistics processes.',
          learnMore: 'Learn More',
          aboutUs: 'About Us',
          aboutTitle: 'Your Trusted Logistics Partner',
          aboutDesc1: 'Since 1998, we have been committed to providing the highest quality logistics services. With our extensive global network and professional team, we have become a leading logistics solution provider.',
          aboutDesc2: 'Whether you need ocean, air or multimodal transport, we can tailor the best logistics solution for you.',
          feat1Title: 'Global Network',
          feat1Desc: 'Partners in over 180 countries and regions',
          feat2Title: 'Expert Team',
          feat2Desc: '5000+ professional logistics personnel',
          feat3Title: 'Technology Driven',
          feat3Desc: 'Smart logistics system with full visibility',
          feat4Title: 'Customer First',
          feat4Desc: '24/7 customer support, quick response',
          statYears: 'Years Experience',
          statCountries: 'Countries',
          statClients: 'Clients',
          statShipments: 'Annual Shipments',
          industries: 'Industry Solutions',
          industriesTitle: 'Serving Multiple Industries',
          ind1Title: 'Automotive',
          ind2Title: 'Technology',
          ind3Title: 'Healthcare',
          ind4Title: 'Retail & E-commerce',
          ind5Title: 'Industrial',
          ind6Title: 'Aerospace',
          ind7Title: 'Food & Beverage',
          ind8Title: 'Fashion & Luxury',
          ctaTitle: 'Ready to Get Started?',
          ctaDesc: 'Let our logistics experts provide you with a customized solution',
          getStarted: 'Get Started'
        }
      },
      services: [
        { icon: '🚢', titleKey: 'service1Title', descKey: 'service1Desc', path: '/service' },
        { icon: '✈️', titleKey: 'service2Title', descKey: 'service2Desc', path: '/service' },
        { icon: '🚛', titleKey: 'service3Title', descKey: 'service3Desc', path: '/service' },
        { icon: '🏢', titleKey: 'service4Title', descKey: 'service4Desc', path: '/service' },
        { icon: '📋', titleKey: 'service5Title', descKey: 'service5Desc', path: '/service' },
        { icon: '🔗', titleKey: 'service6Title', descKey: 'service6Desc', path: '/service' }
      ],
      aboutFeatures: [
        { icon: '🌍', titleKey: 'feat1Title', descKey: 'feat1Desc' },
        { icon: '👥', titleKey: 'feat2Title', descKey: 'feat2Desc' },
        { icon: '💻', titleKey: 'feat3Title', descKey: 'feat3Desc' },
        { icon: '💬', titleKey: 'feat4Title', descKey: 'feat4Desc' }
      ],
      stats: [
        { value: '26+', labelKey: 'statYears' },
        { value: '180+', labelKey: 'statCountries' },
        { value: '5000+', labelKey: 'statClients' },
        { value: '2M+', labelKey: 'statShipments' }
      ],
      industries: [
        { icon: '🚗', titleKey: 'ind1Title' },
        { icon: '💡', titleKey: 'ind2Title' },
        { icon: '🏥', titleKey: 'ind3Title' },
        { icon: '🛍️', titleKey: 'ind4Title' },
        { icon: '🏭', titleKey: 'ind5Title' },
        { icon: '✈️', titleKey: 'ind6Title' },
        { icon: '🍽️', titleKey: 'ind7Title' },
        { icon: '👗', titleKey: 'ind8Title' }
      ]
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
  },
  beforeDestroy() {
    this.$root.$off('lang-changed');
  }
};
</script>

<style scoped>
.home-modern {
  width: 100%;
  background: #0f172a;
  color: #ffffff;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 140px 0 100px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.hero-gradient {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
}

.hero-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
}

.shape-1 {
  top: 15%;
  right: 15%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  filter: blur(80px);
  animation: float 12s ease-in-out infinite;
}

.shape-2 {
  bottom: 20%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  filter: blur(70px);
  animation: float 15s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -40px) scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-text {
  max-width: 700px;
}

.hero-label {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 32px;
}

.hero-title {
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 28px;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 18px;
  line-height: 1.7;
  color: #94a3b8;
  margin: 0 0 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-white {
  background: white;
  color: #0f172a;
  font-size: 16px;
  padding: 18px 44px;
}

.btn-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
  opacity: 0.6;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
  40% { transform: rotate(45deg) translateY(6px); }
  60% { transform: rotate(45deg) translateY(3px); }
}

/* Section Common */
section {
  padding: 120px 0;
}

.section-head {
  text-align: center;
  margin-bottom: 70px;
}

.section-label {
  display: inline-block;
  padding: 6px 18px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
}

.section-title {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

/* Services Section */
.services {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.service-card {
  padding: 44px 36px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-6px);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
}

.icon-emoji {
  font-size: 30px;
}

.service-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px;
}

.service-desc {
  font-size: 14px;
  line-height: 1.7;
  color: #94a3b8;
  margin: 0 0 24px;
}

.service-link {
  color: #60a5fa;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}

.service-link:hover {
  gap: 12px;
}

/* About Section */
.about {
  background: #1e293b;
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-text .section-label {
  margin-bottom: 24px;
}

.about-text .section-title {
  text-align: left;
  margin-bottom: 28px;
}

.about-desc {
  font-size: 15px;
  line-height: 1.8;
  color: #94a3b8;
  margin: 0 0 20px;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 36px;
}

.about-feature {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.feat-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 24px;
}

.feat-text h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
}

.feat-text p {
  font-size: 14px;
  color: #94a3b8;
  margin: 0;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-card {
  padding: 40px 32px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
}

.stat-value {
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 14px;
  color: #94a3b8;
}

/* Industries Section */
.industries {
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.industry-item {
  padding: 36px 28px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.industry-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
}

.industry-icon {
  font-size: 36px;
  margin-bottom: 16px;
}

.industry-item h4 {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  padding: 100px 0;
}

.cta-content {
  text-align: center;
  padding: 80px 60px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
}

.cta-content h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px;
}

.cta-content p {
  font-size: 16px;
  color: #94a3b8;
  margin: 0 0 36px;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  section {
    padding: 80px 0;
  }
  
  .hero {
    padding: 100px 0 80px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .about-stats {
    grid-template-columns: 1fr 1fr;
  }
  
  .cta-content {
    padding: 50px 28px;
  }
  
  .cta-content h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .industries-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .stat-card {
    padding: 32px 24px;
  }
  
  .stat-value {
    font-size: 36px;
  }
}
</style>
