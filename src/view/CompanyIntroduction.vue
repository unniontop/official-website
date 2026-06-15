<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fluid text-center">{{ t('bannerTitle') }}</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/OFFICE.jpg" alt="Office">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>{{ t('companyTitle') }}</h3>
                    <p class="text-justify">
                        {{ t('paragraph1') }}
                    </p>
                    <p class="text-justify">{{ t('paragraph2') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CompanyIntroduction',
    data() {
        return {
            currentLang: localStorage.getItem('lang') || 'zh',
            translations: {
                zh: {
                    bannerTitle: "关于我们",
                    companyTitle: "青岛优之杰国际物流有限公司",
                    paragraph1: "青岛优之杰国际物流有限公司是一家专业从事国际物流和货运代理的公司，总部位于中国青岛，成立于1999年。公司致力于为客户提供高效、可靠的物流解决方案，覆盖海运、空运、陆运及多式联运等服务。凭借多年的行业经验和全球合作网络，优之杰能够满足客户多样化的物流需求，从货物运输到报关、仓储、配送等一站式服务。",
                    paragraph2: "我们的客户包括服装、化工、食品、机械等众多制造及外贸行业，在国际物流领域内深耕多年，积累了丰富的经验和成功案例并树立了良好的口碑。公司秉承诚信经营、客户至上的理念，不断优化服务流程，致力于为客户提供优质、快捷的物流体验。"
                },
                en: {
                    bannerTitle: "About Us",
                    companyTitle: "Qingdao Youzhijie International Logistics Co., Ltd.",
                    paragraph1: "Qingdao Youzhijie International Logistics Co., Ltd. is a professional company engaged in international logistics and freight forwarding, headquartered in Qingdao, China, founded in 1999. The company is committed to providing customers with efficient and reliable logistics solutions, covering services such as sea freight, air freight, land transport and multimodal transport. With years of industry experience and global cooperation network, Youzhijie can meet customers' diverse logistics needs, providing one-stop services from cargo transportation to customs declaration, warehousing, and distribution.",
                    paragraph2: "Our clients include many manufacturing and foreign trade industries such as clothing, chemicals, food, and machinery. We have been deeply involved in the international logistics field for many years, accumulating rich experience and successful cases and establishing a good reputation. The company adheres to the philosophy of integrity-based operation and customer first, continuously optimizing service processes and striving to provide customers with high-quality and fast logistics experiences."
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
.CompanyIntroduction-container {
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
    font-size: 14px;
    line-height: 2.5rem;
}
.CompanyIntroduction-container > div > h3 {
    margin-bottom: 20px;
}
.CompanyIntroduction-container img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

/* 平板尺寸 */
@media screen and (max-width: 992px) {
    .banner {
        font-size: 26px;
        height: 130px;
        line-height: 130px;
    }
    .CompanyIntroduction-container {
        padding: 60px 0;
    }
    .CompanyIntroduction-container > div > p {
        font-size: 13px;
        line-height: 2.2rem;
    }
}

/* 手机尺寸 */
@media screen and (max-width: 768px) {
    .banner {
        font-size: 22px;
        height: 110px;
        line-height: 110px;
    }
    .CompanyIntroduction-container {
        padding: 40px 0;
    }
    .CompanyIntroduction-container > div > p {
        font-size: 12px;
        line-height: 2rem;
    }
    .CompanyIntroduction-container > div > h3 {
        font-size: 18px;
    }
}

/* 小屏手机 */
@media screen and (max-width: 576px) {
    .banner {
        font-size: 20px;
        height: 100px;
        line-height: 100px;
    }
    .CompanyIntroduction-container {
        padding: 30px 0;
    }
}

/* 迷你屏 */
@media screen and (max-width: 480px) {
    .banner {
        font-size: 18px;
        height: 90px;
        line-height: 90px;
    }
    .CompanyIntroduction-container {
        padding: 20px 0;
    }
    .CompanyIntroduction-container > div > p {
        font-size: 11px;
        line-height: 1.8rem;
    }
}
</style>

