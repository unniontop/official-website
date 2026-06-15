<template>
    <div id="Service">
        <div class="container text-center">
            <h3>{{ t('title') }}</h3>
            <p class="subtitle">{{ t('subtitle') }}</p>
        </div>
        <div class="container">
            <div class="Service-container row">
                <div class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp" 
                v-for="(item,index) in serviceList" :key="index" >
                    <div class="Service-item-wrapper">
                        <div class="Service-item-top">
                            <h4>{{ t(item.titleKey) }}</h4>
                            <i></i>
                            <p>{{ t(item.engTitleKey) }}</p>
                        </div>
                        <div class="Service-item-img">
                            <img :src="item.img" :alt="t(item.titleKey)">
                        </div>
                        <div class="Service-item-border"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Service',
    data() {
        return {
            currentLang: localStorage.getItem('lang') || 'zh',
            translations: {
                zh: {
                    title: "我们的服务",
                    subtitle: "Our Services",
                    service1: "国际海运和空运服务",
                    service1Eng: "International Ocean and Air Freight Services",
                    service2: "货物进出口报关服务",
                    service2Eng: "Import and Export Customs Clearance Services",
                    service3: "仓储和配送服务",
                    service3Eng: "Warehousing and Distribution Services",
                    service4: "物流方案设计服务",
                    service4Eng: "Logistics Solution Design Services"
                },
                en: {
                    title: "Our Services",
                    subtitle: "我们的服务",
                    service1: "International Ocean and Air Freight Services",
                    service1Eng: "国际海运和空运服务",
                    service2: "Import and Export Customs Clearance Services",
                    service2Eng: "货物进出口报关服务",
                    service3: "Warehousing and Distribution Services",
                    service3Eng: "仓储和配送服务",
                    service4: "Logistics Solution Design Services",
                    service4Eng: "物流方案设计服务"
                }
            },
            serviceList: [
                {
                    id: 'section-1',
                    titleKey: 'service1',
                    engTitleKey: 'service1Eng',
                    img: require('@/assets/img/multitrans.png')
                },{
                    id: 'section-2',
                    titleKey: 'service2',
                    engTitleKey: 'service2Eng',
                    img: require('@/assets/img/export_scale.png')
                },{
                    id: 'section-3',
                    titleKey: 'service3',
                    engTitleKey: 'service3Eng',
                    img: require('@/assets/img/carrier.png')
                },{
                    id: 'section-4',
                    titleKey: 'service4',
                    engTitleKey: 'service4Eng',
                    img: require('@/assets/img/R-C.png')
                }
            ]
        };
    },
    methods: {
        t(key) {
            return this.translations[this.currentLang][key] || key;
        },
        ServiceClick(id){
            this.$router.push({
                name: 'servicedetail',
                params: {
                    id: id
                }
            });
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
.Service-container {
    padding: 30px 50px;
}
.Service-item {
    margin-bottom: 50px;
}
.Service-item-wrapper {
    cursor: pointer;
    background: rgba(244,244,244,1);
    overflow: hidden;
    position: relative;
}
.Service-item-top {
    width: 100%;
    height: 120px;
    padding: 30px;
    text-align: center;
}
.Service-item-top > i {
    display: inline-block;
    width: 25px;
    height: 2px;
    background: #28f;
}
.Service-item-top > p {
    color: #b2b2b2;
    opacity: 0;
    transform: translateY(10px);
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
}
.subtitle {
    color: #b2b2b2;
}
.Service-item-img {
    width: 100%;
    overflow: hidden;
}
.Service-item-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
}
.Service-item-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 100;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    border: 1px solid #000;
    opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
    opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p {
    opacity: 1;
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
    transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -moz-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
    opacity: 1;
    width: 90%;
    height: 90%;
}

/* 平板尺寸 */
@media screen and (max-width: 992px) {
    .Service-container {
        padding: 25px 30px;
    }
    .Service-item-top {
        padding: 20px;
        height: 110px;
    }
    .Service-item-top > h4 {
        font-size: 16px;
    }
}

/* 手机尺寸 */
@media screen and (max-width: 768px) {
    .Service-container {
        padding: 20px 15px;
    }
    .Service-item {
        margin-bottom: 30px;
    }
}

/* 小屏手机 */
@media screen and (max-width: 576px) {
    .Service-container {
        padding: 15px 10px;
    }
    .Service-item-top {
        padding: 15px;
        height: 100px;
    }
    .Service-item-top > h4 {
        font-size: 14px;
    }
    .Service-item-top > p {
        font-size: 12px;
    }
}

/* 迷你屏 */
@media screen and (max-width: 480px) {
    .Service-container {
        padding: 10px 5px;
    }
    .Service-item-top > h4 {
        font-size: 13px;
    }
    .Service-item-top > p {
        font-size: 11px;
    }
}
</style>

