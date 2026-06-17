// EMBEDDED_PAYLOAD is auto-filled by scripts/generate-layout.mjs.
// When present, the plugin renders it immediately on launch (no paste needed).
const EMBEDDED_PAYLOAD = /* PAYLOAD_START */ {"name":"Porsche Panamera 新车详情页","frame":{"width":375,"height":812,"minHeight":812,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":0,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"clipsContent":false},"nodes":[{"type":"instance","use":"PorscheCNV3/Status bar","name":"Status bar","width":375,"height":44},{"type":"instance","use":"PorscheCNV3/Header","name":"顶部导航","width":375,"height":56,"overrides":{"$texts":["Panamera"],"Title":"Panamera","title":"Panamera","标题不超过八个字符":"Panamera"}},{"type":"frame","name":"主图视频区","width":375,"height":282,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MAX","counterAxisAlignItems":"MIN","itemSpacing":8,"paddingTop":132,"paddingBottom":18,"paddingLeft":20,"paddingRight":20,"clipsContent":true,"fills":[{"type":"SOLID","color":"#111315","opacity":1}],"nodes":[{"type":"frame","name":"播放按钮","width":48,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","cornerRadius":24,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":0.78}],"nodes":[{"type":"instance","use":"Icon/Extra/play-filled","name":"播放Icon","width":24,"height":24,"fallback":{"type":"text","name":"播放IconFallback","characters":"▶","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":14,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#323639","opacity":1}]}}]},{"type":"text","name":"主图车型","characters":"Panamera 4 E-Hybrid 行政加长版","fontFamily":"Porsche Next","fontStyle":"SemiBold","fontSize":22,"lineHeight":30,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"maxWidth":335,"segments":[{"text":"Panamera 4 E-Hybrid ","fontFamily":"Porsche Next","fontStyle":"SemiBold"},{"text":"行政加长版","fontFamily":"PingFang SC","fontStyle":"Semibold"}]},{"type":"text","name":"主图说明","characters":"全新豪华运动轿车 · 插电式混合动力","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":12,"lineHeight":18,"fills":[{"type":"SOLID","color":"#E5E7EB","opacity":1}],"maxWidth":335}]},{"type":"frame","name":"车型与价格","width":375,"height":1,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":8,"paddingTop":18,"paddingBottom":16,"paddingLeft":20,"paddingRight":20,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"text","name":"车型名称","characters":"Panamera 4 E-Hybrid 行政加长版","fontFamily":"Porsche Next","fontStyle":"SemiBold","fontSize":17,"lineHeight":24,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":335,"segments":[{"text":"Panamera 4 E-Hybrid ","fontFamily":"Porsche Next","fontStyle":"SemiBold"},{"text":"行政加长版","fontFamily":"PingFang SC","fontStyle":"Semibold"}]},{"type":"frame","name":"标签行","width":335,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":8,"fills":[],"nodes":[{"type":"instance","use":"PorscheCNV3/Tag-VIP","name":"新车","overrides":{"$texts":["新车"],"Label":"新车","label":"新车","标签":"新车"}},{"type":"instance","use":"PorscheCNV3/Tag","name":"可预订","overrides":{"$texts":["可预订"],"Label":"可预订","label":"可预订","标签":"可预订"}},{"type":"instance","use":"PorscheCNV3/Tag","name":"混合动力","overrides":{"$texts":["混合动力"],"Label":"混合动力","label":"混合动力","标签":"混合动力"}}]},{"type":"text","name":"指导价","characters":"¥ 1,368,000 起","fontFamily":"Porsche Next","fontStyle":"SemiBold","fontSize":24,"lineHeight":32,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":335,"segments":[{"text":"¥ 1,368,000 ","fontFamily":"Porsche Next","fontStyle":"SemiBold"},{"text":"起","fontFamily":"PingFang SC","fontStyle":"Semibold"}]},{"type":"text","name":"价格说明","characters":"厂商建议零售价 · 价格可能因配置而变化","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":16,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":335}]},{"type":"frame","name":"金融方案入口","width":375,"height":56,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"SPACE_BETWEEN","counterAxisAlignItems":"CENTER","paddingLeft":20,"paddingRight":20,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"frame","name":"金融方案内容","width":295,"height":24,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":8,"fills":[],"nodes":[{"type":"instance","use":"Icon/card","name":"金融方案卡片Icon","width":24,"height":24,"fallback":{"type":"text","name":"金融方案卡片IconFallback","characters":"¥","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":14,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#323639","opacity":1}]}},{"type":"text","name":"金融文案","characters":"灵活金融方案，首付低至 20% 起","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":14,"lineHeight":22,"textAlignHorizontal":"LEFT","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":263,"segments":[{"text":"灵活金融方案，首付低至 ","fontFamily":"PingFang SC","fontStyle":"Regular"},{"text":"20%","fontFamily":"Porsche Next","fontStyle":"Regular"},{"text":" 起","fontFamily":"PingFang SC","fontStyle":"Regular"}]}]},{"type":"instance","use":"Icon/head-right","name":"金融入口右箭头Icon","width":24,"height":24,"fallback":{"type":"text","name":"金融入口右箭头IconFallback","characters":">","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":14,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#323639","opacity":1}]}}]},{"type":"instance","use":"PorscheCNV3/Divider","name":"分割线1","width":375,"height":1},{"type":"frame","name":"关键参数卡片","width":375,"height":1,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":18,"paddingBottom":18,"paddingLeft":20,"paddingRight":20,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"frame","name":"参数行1","width":335,"height":48,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"SPACE_BETWEEN","counterAxisAlignItems":"CENTER","fills":[],"nodes":[{"type":"frame","name":"功率","width":96,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"功率-值","characters":"346 kW","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":96},{"type":"text","name":"功率-名","characters":"系统功率","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":96}]},{"type":"frame","name":"扭矩","width":96,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"扭矩-值","characters":"650 Nm","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":96},{"type":"text","name":"扭矩-名","characters":"系统扭矩","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":96}]},{"type":"frame","name":"加速","width":96,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"加速-值","characters":"4.1 s","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":96},{"type":"text","name":"加速-名","characters":"百公里加速","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":96}]}]},{"type":"frame","name":"参数行2","width":335,"height":48,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"SPACE_BETWEEN","counterAxisAlignItems":"CENTER","fills":[],"nodes":[{"type":"frame","name":"续航","width":96,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"续航-值","characters":"96 km","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":96},{"type":"text","name":"续航-名","characters":"纯电续航","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":96}]},{"type":"frame","name":"极速","width":96,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"极速-值","characters":"280 km/h","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":96},{"type":"text","name":"极速-名","characters":"最高车速","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":96}]},{"type":"frame","name":"充电","width":96,"height":48,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"充电-值","characters":"2.6 h","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":96},{"type":"text","name":"充电-名","characters":"交流充电","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":11,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":96}]}]},{"type":"button","name":"更多参数按钮","label":"更多技术参数","width":335,"height":40,"cornerRadius":2,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"stroke":{"color":"#111315","weight":1},"textFills":[{"type":"SOLID","color":"#111315","opacity":1}],"fontFamily":"PingFang SC","fontStyle":"Regular"}]},{"type":"instance","use":"PorscheCNV3/Divider","name":"分割线2","width":375,"height":1},{"type":"frame","name":"配置导航","width":375,"height":64,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":8,"paddingTop":14,"paddingLeft":20,"paddingRight":20,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"text","name":"选装标题","characters":"个性化配置","fontFamily":"PingFang SC","fontStyle":"Semibold","fontSize":16,"lineHeight":22,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":335},{"type":"text","name":"选装分类","characters":"外观    内饰    性能    科技    驾驶辅助","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":12,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#626669","opacity":1}],"maxWidth":335}]},{"type":"frame","name":"内饰展示","width":375,"height":304,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MAX","counterAxisAlignItems":"CENTER","itemSpacing":10,"paddingTop":154,"paddingBottom":24,"paddingLeft":20,"paddingRight":20,"fills":[{"type":"SOLID","color":"#D8D5CD","opacity":1}],"nodes":[{"type":"text","name":"内饰标题","characters":"黑色/波尔多红双色真皮内饰","fontFamily":"PingFang SC","fontStyle":"Semibold","fontSize":16,"lineHeight":24,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":335,"segments":[{"text":"黑色","fontFamily":"PingFang SC","fontStyle":"Semibold"},{"text":"/","fontFamily":"Porsche Next","fontStyle":"SemiBold"},{"text":"波尔多红双色真皮内饰","fontFamily":"PingFang SC","fontStyle":"Semibold"}]},{"type":"text","name":"内饰价格","characters":"+ ¥ 52,000","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":13,"lineHeight":20,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":335},{"type":"text","name":"内饰说明","characters":"甄选真皮覆盖座椅、仪表板与车门饰板，搭配专属缝线与氛围灯，营造更具现代感的豪华座舱。","fontFamily":"PingFang SC","fontStyle":"Regular","fontSize":12,"lineHeight":18,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#323639","opacity":1}],"maxWidth":335}]},{"type":"frame","name":"购车权益","width":375,"height":286,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":14,"paddingTop":28,"paddingBottom":24,"paddingLeft":20,"paddingRight":20,"fills":[{"type":"SOLID","color":"#F5F6F7","opacity":1}],"nodes":[{"type":"text","name":"权益标题","characters":"新车专属购车权益","fontFamily":"PingFang SC","fontStyle":"Semibold","fontSize":17,"lineHeight":24,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#111315","opacity":1}],"maxWidth":335},{"type":"text","name":"权益副标题","characters":"NEW CAR BENEFITS","fontFamily":"Porsche Next","fontStyle":"Regular","fontSize":10,"lineHeight":16,"textAlignHorizontal":"CENTER","fills":[{"type":"SOLID","color":"#7C7F81","opacity":1}],"maxWidth":335},{"type":"instance","use":"PorscheCNV3/Text List","name":"权益-质保","width":335,"height":50,"overrides":{"$texts":["原厂整车质保","3年不限里程原厂质保服务"],"列表名称":"原厂整车质保","内容":"3年不限里程原厂质保服务"}},{"type":"instance","use":"PorscheCNV3/Text List","name":"权益-充电","width":335,"height":50,"overrides":{"$texts":["充电服务支持","家用充电方案咨询与安装服务"],"列表名称":"充电服务支持","内容":"家用充电方案咨询与安装服务"}},{"type":"instance","use":"PorscheCNV3/Text List","name":"权益-交付","width":335,"height":50,"overrides":{"$texts":["专属交付体验","授权经销商一对一交付讲解"],"列表名称":"专属交付体验","内容":"授权经销商一对一交付讲解"}},{"type":"button","name":"权益详情按钮","label":"查看购车权益","width":335,"height":40,"cornerRadius":2,"fills":[{"type":"SOLID","color":"#111315","opacity":1}],"textFills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"fontFamily":"PingFang SC","fontStyle":"Regular"}]},{"type":"instance","use":"PorscheCNV3/Tool Bar","name":"底部ToolBar-组件","width":375,"height":72,"overrides":{"$texts":["收藏","客服","预约试驾"],"收藏":"收藏","客服":"客服","分享":"客服","Button":"预约试驾","按钮":"预约试驾","立即预约":"预约试驾","预约":"预约试驾"},"autoVariant":{"property":"Type","include":["action","icon","操作","图标"],"prefer":["button","cta","按钮"],"exclude":["pure"]}},{"type":"instance","use":"PorscheCNV3/Home Indicator","name":"Home Indicator","width":375,"height":34}]} /* PAYLOAD_END */;

// KEY_DICTIONARY maps component names to team-library keys.
// Auto-filled from component-keys.json by scripts/generate-layout.mjs.
const KEY_DICTIONARY = /* KEYS_START */ {"色号list":"94a8cdd77d3940167c77af03a062e7b54a1ae24a","Action sheet":"82df72b324b84d0d2320a33a7116181ec88f5c0d","Action sheet - simple / Cell":"deb8828cdb0c285e594f911af337d7584075642e","Action sheet - simple":"e901a55c12bcc6854c51faaf1780285289164a50","Accordion":"efa00fec4fda4b43b5151f7270288afe1301d4e4","App icon / Logo":"8540fb3840d1ddf37e99fc4e12e4d0b600da3772","App icon":"ac02ccf5a9c152a57f27491885e02b45ae72a0c5","Badge":"2613a9cdc6624890b8581a384ae2eef7530f6f24","Badge with icon":"163902987c4289ec9f8650b612ca91aee9b8a8a0","Button":"83996d4ef6d1a243937ccded83cae8e824b5ce49","Button pure":"3b459e3e2e6cefc62a93845f6582f4838e53570a","Checkbox":"3fd6f93fac4412612350f688988d27aa6685c50f","Indicator":"e6c78bd3c31399f2ec4856f61f3ad6b58704afa6","Content":"71d740c3a99a7e299370095cdc4bdbd35450b018","Carousel":"87a911dc05d375500d78668e603a4de79a7dfbf0","Image area":"456389577b693ab1003471c61e73c1c6455b7a17","Chips":"eaaaa4055acff1bb619e752b3453a25d1130ad33","Chips / Icon":"0333ff8a24c382decce72f33e296b3da4b15c3a0","Chips / Text":"923c7ac837cbe4ccbe5d403643746770fa4a0dd8","State Stamp":"cef5bcb71c615ecd4f4f7e4fb4c646b4b9390c05","Coupon":"3a30a516782dae8e6e5501493e6b1b601ee9669d","Wordmark":"e385869946e50aebfb3fab20a144dd3a95657af0","Crest":"7270a1e57d9deb2bd9b366a5ef3a18d2786319cd","Date Picker/Date":"f23ce52c033b54820480eea2495b1798b44ec660","Date Picker":"e5da397378b3e53c2bead7decf96f03a3c474f8a","Date Picker/Month":"953d724e76b6c82a562a259ec95d69866be7228c","Date Picker/Year":"a35f1b0a902b4fb607cf121e335d1e8ab3e26f38","Dialogs / Button":"d42b8dce7e29b980d48792163e9bd45c26e72ba7","Dialogs":"09d792432e00e426de993eb1846be26230ca7614","Divider":"0f670d4b90df02c181cffb538ba2f1fb22be4c7e","Dropdown":"155fcdee9fd1c94441eee013b07795d510b6d7bc","Dropdown / cell":"b8d92856d6bc0a7e027e961448898e4c9c1bf77d","Floating button":"7ec40251fe695711119385b1eecb4cea8eb27397","Header":"fcefa21479c4be754d2b53c3074d05db42c5e0b8","Header / Left section":"3344c4462e24334eb09a1431dbf3208b3b5641cc","Header / Right section":"6ca09d7c8e6db87e11c247dfcc2370c4540e8db1","Header / Center section":"79f47335c33f39d22c3159763aa7da47d7cd668b","Header-Multilayer":"77e3f5713e281898b3efbeca3d7b9e2b27e7070f","Status bar":"b73363d6b321871527b52c9d744b4cccd63ac73f","Input":"a54c62858c2e45f62c111a07c6065ba426fd4d09","Input label":"125c1e439d9529f589d6674bab2f04d46d2ebdbe","Keyboard":"c5356bf215ad6120689f49dee39f3d032dbdd26f","Model Signature":"b05fd8ce3517f41b75235b695d0a93fe7d8a73cc","Notice bar":"dbfbc5fbc134114757f1ea882fbaa53dd9badd7c","Topbar notification":"7281ba057d49a2a794c6195a4269a936a2f3afbe","Snackbar":"ed6360ed00a0c76054fb22653355b8529d7d8668","Popover":"2b409a374b1ef9ae7e9282c026711b72b5cd0348","Radio":"0bb70b38e7f1666a159445044f63036feba9f4a2","Search field":"943cd7971e6ba46d105cdcf75c43f4b88d48df19","select":"483e7f8f6cb2ff775399940fc070cb655102b463","ScrollView":"48febf842dfeb767ff7cf73a906e20a6ba28da60","Share":"5dadf6400e6e169642bde0d89fcf3cd046137c48","Share / Cell":"faa44126e74931214250a7cb5f4fc2a90628a92f","Icon+text":"68635c509934efcd6a58f287c366a7b20982cbe2","Slider 1":"2d08f2bcb6c41f6eaa83744127512500b7e412b3","Slider 1 / Pure slider":"86e77b801e2fce1825e6de9bbc5afc48a3cd4b41","Slider 2":"22c13dd5bcf4799a446895ca27a1e42b2afa782b","spinner":"83edf4b1ef94df6c07d5a68aa7082c7e8488586f","Switch":"9da3ef15542c925552e5f0aee0004604cc5df5af","Tag":"b9d202cfa1bccee0d2c9fd0e32235599703b46eb","Tag-Light":"8eb61b8395c8bb8527f398afe23e2b1d0791315a","Tag-VIP":"a6e9aae14f087450eebac1be365bcdff419257e6","Tabs":"e42241cd4b8d3c422bb47bcfbab322f81c08e308","Tabs / Icon":"8a2f7e10144284f3ad65b38cb98a7f32b89b4e36","Tabs icon":"00f137104a804c987456e86c85521f2da303037d","Tabs / Text":"5ffc7e714de834ef9ab0279f72ddeebe6977e550","Tab Bar":"d23dc47667af73532644cf5bb367b9cd15343b97","Tab Bar / Bar":"71613f1965ea4c2d843addf66886ebbdfced9c0c","Text List":"19d3d693b38c7563606ab51c05db31f5e3d77618","Text list / Content":"d57340e3f95b459dfcb2c1ed2fab17f7a4532a08","Text list / Title":"d07cb83d093080670d7c825adc3ac14490ea7ccf","Text List-Cell":"f786f841222b4398e01ff715fc701061f0187828","Textarea":"f7cb967a91cbdbc5a658f69679b661fabc4257f9","Toast":"50ffec7839f444f7e8628f218a4eaac4883c9562","Tool Bar":"87fb71272b9e917544deecda548222779a085f25","Tool Bar / Action icon":"19731e94bc0e64971abc8348e5f96f76c83f7366","Tool Bar / Info":"56d24886d0cee5951ae49b4963fceef0fb505ec4","Tool Bar / Button":"cccfa037245d77996170638ef57725b6d4b9963d","Tool Bar-Small":"be9a825fb040a6cd3368794ec69ebdc8f9edb12e","Tool Bar-Small  / Action icon":"3888ca82d7a7a164025d373afaa360507c37d836","Tool Bar-Small  / Button":"971a63187dc8b2f798a7a9c1a2f3a5a5e47c7bdf","Home Indicator":"07959b0b098f9e8671f18858c9f6f61eaec15cc4","Wheel Picker":"d7256a80007e398c0ad8b2c4e650bb869643faac","Empty state":"8bb11ec88372de20dd5f769b5625e06ac3d4425e","illustration_BP/noContent":"7653f6388d5ae5f4dc98b747f6925ca68e3380ce","illustration_BP/ended":"c57e29ef0c16a98201e99b1f24698a508249db7d","illustration_BP/car":"3812389b90d414be8d8a61097ada9c78a90a6cff","illustration_BP/noCoupons":"99f069a379c83b7987a1d990ddd8e97021c415d9","illustration_BP/shoppingCart":"722ddd9a926f91ed47a93cdaf7d9b7486629042c","illustration_BP/noSearchResults":"13af3c8e80cbdaf2a600c835e3ff5edf5d9a2cd7","illustration_BP/address":"c59e5ab9a17ce982976e5f8f6cfaad09505226bc","illustration_BP/browsing":"749e3402db774168e206f2973656e5b1da2b5860","illustration_BP/successed":"f41c06528b1b8f63f1012642d55ef8b4198272f3","illustration_BP/abnormal":"c8e34ee2273d9506b41344db3a112ce4f5187bef","illustration_BP/gift":"ace3b735111f02c8c4d3692d6962edb36411146c","illustration_BP/vehicle accessories":"1750d0e209060f79ee1710757d0a5c8123b2b068","illustration_BP/dealer":"85ab62280d3cac724a211337cbd9a0eabf4fc0c9","illustration_BP/rankingList":"b14563d7195c50d3e5f439342f392dd09928fcb8","illustration_BP/noComment":"8fcabbf4d4662b753a4c93892451122f2f80231b","illustration_BP/noGolf":"09e6f95a9e2e6b73e54b61a3b9fbce16d54b05c6","illustration_BP/alert":"9b9b407d0180619b6b359f8ffa9548cf0bbb7a84","illustration_BP/noNetwork":"9bf3d9545cf97b38ed4d92c2ea17e4bf8c2550b6","illustration_BP/noApplication":"bf1fd23d52093d73d78c0f71470965ff09e12cd4","illustration_BP/reservation":"0abed40e4392e073680bea7d6dff5bd0e5879f54","illustration_BP/noEvent":"d4f34874eaca92e4aea3246e4bba08b88b1d8162","illustration_BP/noOrder":"4ca94a16a96d330362442bb377f4addc4457c493","illustration_BP/noLikes":"fbac0f4f5777332554db36b22d51d612b8161250","illustration_BP/login":"15d575d6c929de70f95e013026d6722bf990c549","illustration_BP/noFollow":"400a5f237d191f196361c9b0f382b9d883f629be","illustration_BP/noFans":"816e64d5590a349a572d2758d6835e47c267d3e1","illustration_BP/noDraft":"e032b8def769829d97165e24d186059979cbe1f5","illustration_BP/noInvoiceHeader":"3dfaaea4f84a3e7d7b16905d34680034edb29415","PorscheCNV3/色号list":"94a8cdd77d3940167c77af03a062e7b54a1ae24a","PorscheCNV3/Action sheet":"82df72b324b84d0d2320a33a7116181ec88f5c0d","PorscheCNV3/Action sheet - simple / Cell":"deb8828cdb0c285e594f911af337d7584075642e","PorscheCNV3/Action sheet - simple":"e901a55c12bcc6854c51faaf1780285289164a50","PorscheCNV3/Accordion":"efa00fec4fda4b43b5151f7270288afe1301d4e4","PorscheCNV3/App icon / Logo":"8540fb3840d1ddf37e99fc4e12e4d0b600da3772","PorscheCNV3/App icon":"ac02ccf5a9c152a57f27491885e02b45ae72a0c5","PorscheCNV3/Badge":"2613a9cdc6624890b8581a384ae2eef7530f6f24","PorscheCNV3/Badge with icon":"163902987c4289ec9f8650b612ca91aee9b8a8a0","PorscheCNV3/Button":"83996d4ef6d1a243937ccded83cae8e824b5ce49","PorscheCNV3/Button pure":"3b459e3e2e6cefc62a93845f6582f4838e53570a","PorscheCNV3/Checkbox":"3fd6f93fac4412612350f688988d27aa6685c50f","PorscheCNV3/Indicator":"e6c78bd3c31399f2ec4856f61f3ad6b58704afa6","PorscheCNV3/Content":"71d740c3a99a7e299370095cdc4bdbd35450b018","PorscheCNV3/Carousel":"87a911dc05d375500d78668e603a4de79a7dfbf0","PorscheCNV3/Image area":"456389577b693ab1003471c61e73c1c6455b7a17","PorscheCNV3/Chips":"eaaaa4055acff1bb619e752b3453a25d1130ad33","PorscheCNV3/Chips / Icon":"0333ff8a24c382decce72f33e296b3da4b15c3a0","PorscheCNV3/Chips / Text":"923c7ac837cbe4ccbe5d403643746770fa4a0dd8","PorscheCNV3/State Stamp":"cef5bcb71c615ecd4f4f7e4fb4c646b4b9390c05","PorscheCNV3/Coupon":"3a30a516782dae8e6e5501493e6b1b601ee9669d","PorscheCNV3/Wordmark":"e385869946e50aebfb3fab20a144dd3a95657af0","PorscheCNV3/Crest":"7270a1e57d9deb2bd9b366a5ef3a18d2786319cd","PorscheCNV3/Date Picker/Date":"f23ce52c033b54820480eea2495b1798b44ec660","PorscheCNV3/Date Picker":"e5da397378b3e53c2bead7decf96f03a3c474f8a","PorscheCNV3/Date Picker/Month":"953d724e76b6c82a562a259ec95d69866be7228c","PorscheCNV3/Date Picker/Year":"a35f1b0a902b4fb607cf121e335d1e8ab3e26f38","PorscheCNV3/Dialogs / Button":"d42b8dce7e29b980d48792163e9bd45c26e72ba7","PorscheCNV3/Dialogs":"09d792432e00e426de993eb1846be26230ca7614","PorscheCNV3/Divider":"0f670d4b90df02c181cffb538ba2f1fb22be4c7e","PorscheCNV3/Dropdown":"155fcdee9fd1c94441eee013b07795d510b6d7bc","PorscheCNV3/Dropdown / cell":"b8d92856d6bc0a7e027e961448898e4c9c1bf77d","PorscheCNV3/Floating button":"7ec40251fe695711119385b1eecb4cea8eb27397","PorscheCNV3/Header":"fcefa21479c4be754d2b53c3074d05db42c5e0b8","PorscheCNV3/Header / Left section":"3344c4462e24334eb09a1431dbf3208b3b5641cc","PorscheCNV3/Header / Right section":"6ca09d7c8e6db87e11c247dfcc2370c4540e8db1","PorscheCNV3/Header / Center section":"79f47335c33f39d22c3159763aa7da47d7cd668b","PorscheCNV3/Header-Multilayer":"77e3f5713e281898b3efbeca3d7b9e2b27e7070f","PorscheCNV3/Status bar":"b73363d6b321871527b52c9d744b4cccd63ac73f","PorscheCNV3/Input":"a54c62858c2e45f62c111a07c6065ba426fd4d09","PorscheCNV3/Input label":"125c1e439d9529f589d6674bab2f04d46d2ebdbe","PorscheCNV3/Keyboard":"c5356bf215ad6120689f49dee39f3d032dbdd26f","PorscheCNV3/Model Signature":"b05fd8ce3517f41b75235b695d0a93fe7d8a73cc","PorscheCNV3/Notice bar":"dbfbc5fbc134114757f1ea882fbaa53dd9badd7c","PorscheCNV3/Topbar notification":"7281ba057d49a2a794c6195a4269a936a2f3afbe","PorscheCNV3/Snackbar":"ed6360ed00a0c76054fb22653355b8529d7d8668","PorscheCNV3/Popover":"2b409a374b1ef9ae7e9282c026711b72b5cd0348","PorscheCNV3/Radio":"0bb70b38e7f1666a159445044f63036feba9f4a2","PorscheCNV3/Search field":"943cd7971e6ba46d105cdcf75c43f4b88d48df19","PorscheCNV3/select":"483e7f8f6cb2ff775399940fc070cb655102b463","PorscheCNV3/ScrollView":"48febf842dfeb767ff7cf73a906e20a6ba28da60","PorscheCNV3/Share":"5dadf6400e6e169642bde0d89fcf3cd046137c48","PorscheCNV3/Share / Cell":"faa44126e74931214250a7cb5f4fc2a90628a92f","PorscheCNV3/Icon+text":"68635c509934efcd6a58f287c366a7b20982cbe2","PorscheCNV3/Slider 1":"2d08f2bcb6c41f6eaa83744127512500b7e412b3","PorscheCNV3/Slider 1 / Pure slider":"86e77b801e2fce1825e6de9bbc5afc48a3cd4b41","PorscheCNV3/Slider 2":"22c13dd5bcf4799a446895ca27a1e42b2afa782b","PorscheCNV3/spinner":"83edf4b1ef94df6c07d5a68aa7082c7e8488586f","PorscheCNV3/Switch":"9da3ef15542c925552e5f0aee0004604cc5df5af","PorscheCNV3/Tag":"b9d202cfa1bccee0d2c9fd0e32235599703b46eb","PorscheCNV3/Tag-Light":"8eb61b8395c8bb8527f398afe23e2b1d0791315a","PorscheCNV3/Tag-VIP":"a6e9aae14f087450eebac1be365bcdff419257e6","PorscheCNV3/Tabs":"e42241cd4b8d3c422bb47bcfbab322f81c08e308","PorscheCNV3/Tabs / Icon":"8a2f7e10144284f3ad65b38cb98a7f32b89b4e36","PorscheCNV3/Tabs icon":"00f137104a804c987456e86c85521f2da303037d","PorscheCNV3/Tabs / Text":"5ffc7e714de834ef9ab0279f72ddeebe6977e550","PorscheCNV3/Tab Bar":"d23dc47667af73532644cf5bb367b9cd15343b97","PorscheCNV3/Tab Bar / Bar":"71613f1965ea4c2d843addf66886ebbdfced9c0c","PorscheCNV3/Text List":"19d3d693b38c7563606ab51c05db31f5e3d77618","PorscheCNV3/Text list / Content":"d57340e3f95b459dfcb2c1ed2fab17f7a4532a08","PorscheCNV3/Text list / Title":"d07cb83d093080670d7c825adc3ac14490ea7ccf","PorscheCNV3/Text List-Cell":"f786f841222b4398e01ff715fc701061f0187828","PorscheCNV3/Textarea":"f7cb967a91cbdbc5a658f69679b661fabc4257f9","PorscheCNV3/Toast":"50ffec7839f444f7e8628f218a4eaac4883c9562","PorscheCNV3/Tool Bar":"87fb71272b9e917544deecda548222779a085f25","PorscheCNV3/Tool Bar / Action icon":"19731e94bc0e64971abc8348e5f96f76c83f7366","PorscheCNV3/Tool Bar / Info":"56d24886d0cee5951ae49b4963fceef0fb505ec4","PorscheCNV3/Tool Bar / Button":"cccfa037245d77996170638ef57725b6d4b9963d","PorscheCNV3/Tool Bar-Small":"be9a825fb040a6cd3368794ec69ebdc8f9edb12e","PorscheCNV3/Tool Bar-Small  / Action icon":"3888ca82d7a7a164025d373afaa360507c37d836","PorscheCNV3/Tool Bar-Small  / Button":"971a63187dc8b2f798a7a9c1a2f3a5a5e47c7bdf","PorscheCNV3/Home Indicator":"07959b0b098f9e8671f18858c9f6f61eaec15cc4","PorscheCNV3/Wheel Picker":"d7256a80007e398c0ad8b2c4e650bb869643faac","PorscheCNV3/Empty state":"8bb11ec88372de20dd5f769b5625e06ac3d4425e","PorscheCNV3/illustration_BP/noContent":"7653f6388d5ae5f4dc98b747f6925ca68e3380ce","PorscheCNV3/illustration_BP/ended":"c57e29ef0c16a98201e99b1f24698a508249db7d","PorscheCNV3/illustration_BP/car":"3812389b90d414be8d8a61097ada9c78a90a6cff","PorscheCNV3/illustration_BP/noCoupons":"99f069a379c83b7987a1d990ddd8e97021c415d9","PorscheCNV3/illustration_BP/shoppingCart":"722ddd9a926f91ed47a93cdaf7d9b7486629042c","PorscheCNV3/illustration_BP/noSearchResults":"13af3c8e80cbdaf2a600c835e3ff5edf5d9a2cd7","PorscheCNV3/illustration_BP/address":"c59e5ab9a17ce982976e5f8f6cfaad09505226bc","PorscheCNV3/illustration_BP/browsing":"749e3402db774168e206f2973656e5b1da2b5860","PorscheCNV3/illustration_BP/successed":"f41c06528b1b8f63f1012642d55ef8b4198272f3","PorscheCNV3/illustration_BP/abnormal":"c8e34ee2273d9506b41344db3a112ce4f5187bef","PorscheCNV3/illustration_BP/gift":"ace3b735111f02c8c4d3692d6962edb36411146c","PorscheCNV3/illustration_BP/vehicle accessories":"1750d0e209060f79ee1710757d0a5c8123b2b068","PorscheCNV3/illustration_BP/dealer":"85ab62280d3cac724a211337cbd9a0eabf4fc0c9","PorscheCNV3/illustration_BP/rankingList":"b14563d7195c50d3e5f439342f392dd09928fcb8","PorscheCNV3/illustration_BP/noComment":"8fcabbf4d4662b753a4c93892451122f2f80231b","PorscheCNV3/illustration_BP/noGolf":"09e6f95a9e2e6b73e54b61a3b9fbce16d54b05c6","PorscheCNV3/illustration_BP/alert":"9b9b407d0180619b6b359f8ffa9548cf0bbb7a84","PorscheCNV3/illustration_BP/noNetwork":"9bf3d9545cf97b38ed4d92c2ea17e4bf8c2550b6","PorscheCNV3/illustration_BP/noApplication":"bf1fd23d52093d73d78c0f71470965ff09e12cd4","PorscheCNV3/illustration_BP/reservation":"0abed40e4392e073680bea7d6dff5bd0e5879f54","PorscheCNV3/illustration_BP/noEvent":"d4f34874eaca92e4aea3246e4bba08b88b1d8162","PorscheCNV3/illustration_BP/noOrder":"4ca94a16a96d330362442bb377f4addc4457c493","PorscheCNV3/illustration_BP/noLikes":"fbac0f4f5777332554db36b22d51d612b8161250","PorscheCNV3/illustration_BP/login":"15d575d6c929de70f95e013026d6722bf990c549","PorscheCNV3/illustration_BP/noFollow":"400a5f237d191f196361c9b0f382b9d883f629be","PorscheCNV3/illustration_BP/noFans":"816e64d5590a349a572d2758d6835e47c267d3e1","PorscheCNV3/illustration_BP/noDraft":"e032b8def769829d97165e24d186059979cbe1f5","PorscheCNV3/illustration_BP/noInvoiceHeader":"3dfaaea4f84a3e7d7b16905d34680034edb29415","PorscheIcons/360":"d539b34b9c6bc8038ae21ad74e244f8d32211f5e","Icon/360":"d539b34b9c6bc8038ae21ad74e244f8d32211f5e","PorscheIcons/list component":"2476fe34ca770048800237db05813d37deb3005a","Icon/list component":"2476fe34ca770048800237db05813d37deb3005a","PorscheIcons/double-right":"ec714b3aed424c8eb87823d6541599c25f8ec288","Icon/double-right":"ec714b3aed424c8eb87823d6541599c25f8ec288","PorscheIcons/double-left":"db6d8adb172b9a5fd564b2aa6e89a3b6c43d21a7","Icon/double-left":"db6d8adb172b9a5fd564b2aa6e89a3b6c43d21a7","PorscheIcons/double-down":"681e8a4612277a482b9593ae223e0d86016b80f7","Icon/double-down":"681e8a4612277a482b9593ae223e0d86016b80f7","PorscheIcons/double-up":"d4e02eb7123d5584153084e0a5da1d96160dbd70","Icon/double-up":"d4e02eb7123d5584153084e0a5da1d96160dbd70","PorscheIcons/head-right":"d3cbaf8eba07488c3e9b3e831f540a7ffe5e368f","Icon/head-right":"d3cbaf8eba07488c3e9b3e831f540a7ffe5e368f","PorscheIcons/head-left":"3c9e421f9a4b81fc9808db2f639cd348c07c70d0","Icon/head-left":"3c9e421f9a4b81fc9808db2f639cd348c07c70d0","PorscheIcons/head-down":"8453d96b3d1a8f333bced08fef2be48fb2abadbe","Icon/head-down":"8453d96b3d1a8f333bced08fef2be48fb2abadbe","PorscheIcons/head-up":"52f74dd9a76b41b9bd03eb47c4fb7267b14dadd8","Icon/head-up":"52f74dd9a76b41b9bd03eb47c4fb7267b14dadd8","PorscheIcons/right":"eb3500f9549a7d23c004c09ad2159e5cbb7c6379","Icon/right":"eb3500f9549a7d23c004c09ad2159e5cbb7c6379","PorscheIcons/left":"ff76c13ed1ebea756bf57b4c2e35d9c39fbdfb43","Icon/left":"ff76c13ed1ebea756bf57b4c2e35d9c39fbdfb43","PorscheIcons/down":"740702c237164b5b2fe18e0d8132efcb2ee50082","Icon/down":"740702c237164b5b2fe18e0d8132efcb2ee50082","PorscheIcons/up":"218b1799a0f0247f25b61602b43a3b7579c2eb9e","Icon/up":"218b1799a0f0247f25b61602b43a3b7579c2eb9e","PorscheIcons/first":"14c867b02d288c2748086089a12075ab1b170411","Icon/first":"14c867b02d288c2748086089a12075ab1b170411","PorscheIcons/last":"ed1237873c06b4ab8f466e62767984deff3cb2d1","Icon/last":"ed1237873c06b4ab8f466e62767984deff3cb2d1","PorscheIcons/dataplan":"5bc23c0759b99e1d0ada95f64d50306805ce5dc4","Icon/dataplan":"5bc23c0759b99e1d0ada95f64d50306805ce5dc4","PorscheIcons/city":"0aeaa1bd8407ccfc5a7f034c2862b58234166643","Icon/city":"0aeaa1bd8407ccfc5a7f034c2862b58234166643","PorscheIcons/country-road":"7f4236390192fc2b4d5bb134e50591237b893173","Icon/country-road":"7f4236390192fc2b4d5bb134e50591237b893173","PorscheIcons/globe":"c4437b5fe78a6820e078c5b9f1f31a00424fc07f","Icon/globe":"c4437b5fe78a6820e078c5b9f1f31a00424fc07f","PorscheIcons/highway-filled":"dd634516a80be1bfa75fb6b66131932f2e5d2397","Icon/highway-filled":"dd634516a80be1bfa75fb6b66131932f2e5d2397","PorscheIcons/highway-outline":"43c523e03e0d161eac4714ce533be5bf7be3bb81","Icon/highway-outline":"43c523e03e0d161eac4714ce533be5bf7be3bb81","PorscheIcons/home":"df163bad5f7a0028539b825a35fd6c11e3b6fc51","Icon/home":"df163bad5f7a0028539b825a35fd6c11e3b6fc51","PorscheIcons/locate":"ae914209f54d2b1a93aef7cc7faf7aefcb443fe3","Icon/locate":"ae914209f54d2b1a93aef7cc7faf7aefcb443fe3","PorscheIcons/pin":"452421037b9f7349c05d6a6ee3876163a04ad3b0","Icon/pin":"452421037b9f7349c05d6a6ee3876163a04ad3b0","PorscheIcons/pin-filled":"eab7c210027bb516a3990ef4a8ca74bda0200e44","Icon/pin-filled":"eab7c210027bb516a3990ef4a8ca74bda0200e44","PorscheIcons/destination":"6641b41c34a9af0c5318415cefdcf09c49a967d0","Icon/destination":"6641b41c34a9af0c5318415cefdcf09c49a967d0","PorscheIcons/compass":"75955bc3a949de7be1e76df2ae71ce528b0b64cd","Icon/compass":"75955bc3a949de7be1e76df2ae71ce528b0b64cd","PorscheIcons/north-arrow":"e00753c85fee984433f025d02c3af90c31221de2","Icon/north-arrow":"e00753c85fee984433f025d02c3af90c31221de2","PorscheIcons/road-e":"f20abd13eb417a1f7cc7f4af740758250cbef681","Icon/road-e":"f20abd13eb417a1f7cc7f4af740758250cbef681","PorscheIcons/road":"4baa027c04373e96f70b22d355792a5624ac466c","Icon/road":"4baa027c04373e96f70b22d355792a5624ac466c","PorscheIcons/context-map":"99842bbaaa51784f95b5f94bb1245f63a86e4437","Icon/context-map":"99842bbaaa51784f95b5f94bb1245f63a86e4437","PorscheIcons/radar":"a0ff5acbd84d4673fc75ff234194fc85943ea795","Icon/radar":"a0ff5acbd84d4673fc75ff234194fc85943ea795","PorscheIcons/geo-localization":"e9b676892eaefe7683dc621e2cfd903f2d2d033a","Icon/geo-localization":"e9b676892eaefe7683dc621e2cfd903f2d2d033a","PorscheIcons/location-alarm":"b856a41b5b0d153f480dab94706dbefaa8cad08b","Icon/location-alarm":"b856a41b5b0d153f480dab94706dbefaa8cad08b","PorscheIcons/tunnel":"590e50e592e3f04f2eea7549a37e39f0d0f055d9","Icon/tunnel":"590e50e592e3f04f2eea7549a37e39f0d0f055d9","PorscheIcons/route":"1eb46c2bade67ec0f10d8df7cc5a835452d1f5da","Icon/route":"1eb46c2bade67ec0f10d8df7cc5a835452d1f5da","PorscheIcons/way_point":"d804c4c2daa26878b1c16b233a4c3660721523f2","Icon/way_point":"d804c4c2daa26878b1c16b233a4c3660721523f2","PorscheIcons/restaurant":"943f3498357901357b3dc1b6b18d97141c1871de","Icon/restaurant":"943f3498357901357b3dc1b6b18d97141c1871de","PorscheIcons/target":"93ba55a34a82e01d3165315f17f3d0312bcd66c8","Icon/target":"93ba55a34a82e01d3165315f17f3d0312bcd66c8","PorscheIcons/air_distance_to_poi":"0e079c8ddc7c988269c9fbdd546f57efe4467e49","Icon/air_distance_to_poi":"0e079c8ddc7c988269c9fbdd546f57efe4467e49","PorscheIcons/tour_flag":"2f972240743dff2db5e6914e5c8b8a866d6a6298","Icon/tour_flag":"2f972240743dff2db5e6914e5c8b8a866d6a6298","PorscheIcons/countries":"5539716f8dc8898e57a5b0484116c3c54092d374","Icon/countries":"5539716f8dc8898e57a5b0484116c3c54092d374","PorscheIcons/altitude":"a0c5ab06eff9626d66a826c4681457bdd9eac990","Icon/altitude":"a0c5ab06eff9626d66a826c4681457bdd9eac990","PorscheIcons/town":"740a31023990b5ba126d260222ffe3881fe98bd5","Icon/town":"740a31023990b5ba126d260222ffe3881fe98bd5","PorscheIcons/poi_outing":"88208677e19bd4c851436fef6f83e0e6b04d62ba","Icon/poi_outing":"88208677e19bd4c851436fef6f83e0e6b04d62ba","PorscheIcons/festival":"f84fb087599e00f1fdb3ee5c99df50cef976c2cd","Icon/festival":"f84fb087599e00f1fdb3ee5c99df50cef976c2cd","PorscheIcons/bell":"fd15b9ad54c080a7e89495712b334a493243f450","Icon/bell":"fd15b9ad54c080a7e89495712b334a493243f450","PorscheIcons/snowflake":"f747ee8dd0e02977ad61cd80453be84077e29e91","Icon/snowflake":"f747ee8dd0e02977ad61cd80453be84077e29e91","PorscheIcons/gift":"4b70ccf2e2f28c6acefb74d02c1b6b287b587351","Icon/gift":"4b70ccf2e2f28c6acefb74d02c1b6b287b587351","PorscheIcons/star":"b34f06743b3462f1a7891b6a715afd1eed8f1370","Icon/star":"b34f06743b3462f1a7891b6a715afd1eed8f1370","PorscheIcons/star-filled":"44b4224482914863ce078d7c3b57a9071b0a3f1b","Icon/star-filled":"44b4224482914863ce078d7c3b57a9071b0a3f1b","PorscheIcons/key":"4c7c18defa3803086918617174248bc98acb8d78","Icon/key":"4c7c18defa3803086918617174248bc98acb8d78","PorscheIcons/sun":"2867907ec43d2abd3053fea27136722a708a2029","Icon/sun":"2867907ec43d2abd3053fea27136722a708a2029","PorscheIcons/leaf":"c637133460cf21eae8f85c51067ad0b4b5210299","Icon/leaf":"c637133460cf21eae8f85c51067ad0b4b5210299","PorscheIcons/weight":"8509eba73ffd7f7d903d4cc5183898d9b888b078","Icon/weight":"8509eba73ffd7f7d903d4cc5183898d9b888b078","PorscheIcons/leather":"3f21345b3084975f8f1d812bc3e08b1a49fb5135","Icon/leather":"3f21345b3084975f8f1d812bc3e08b1a49fb5135","PorscheIcons/work":"c39bbf060cf269736de1f2491028f1ddb2ffd382","Icon/work":"c39bbf060cf269736de1f2491028f1ddb2ffd382","PorscheIcons/light":"403cda4b34d17bbdf74ca471274d73c7eca1f351","Icon/light":"403cda4b34d17bbdf74ca471274d73c7eca1f351","PorscheIcons/wrench":"d35c6ae3d83fbf757aa7dce6a28c264c6a0854e2","Icon/wrench":"d35c6ae3d83fbf757aa7dce6a28c264c6a0854e2","PorscheIcons/lock-open":"8005608719722a2323abcd7cee4493b7575e1e97","Icon/lock-open":"8005608719722a2323abcd7cee4493b7575e1e97","PorscheIcons/wrenches":"c979899824b829042975911a939b0de5e43275c1","Icon/wrenches":"c979899824b829042975911a939b0de5e43275c1","PorscheIcons/lock":"85c8bcd7b3119bfc03971c74f419f0937be9d07f","Icon/lock":"85c8bcd7b3119bfc03971c74f419f0937be9d07f","PorscheIcons/moon":"e42e6650ac8f4ea639fe07567b2cf226ae86f910","Icon/moon":"e42e6650ac8f4ea639fe07567b2cf226ae86f910","PorscheIcons/racing-flag":"7e4fa7f2c958c516c7f896d0c952019bf705096e","Icon/racing-flag":"7e4fa7f2c958c516c7f896d0c952019bf705096e","PorscheIcons/flag":"292130e7adf6ab154c5f2b3198987ccbe3479a9c","Icon/flag":"292130e7adf6ab154c5f2b3198987ccbe3479a9c","PorscheIcons/cloud":"44d4949d16fc2592288bf2222281507bc9f38479","Icon/cloud":"44d4949d16fc2592288bf2222281507bc9f38479","PorscheIcons/weather":"d6756292db53b2fe0e9e26c7d2b52750f5c073c6","Icon/weather":"d6756292db53b2fe0e9e26c7d2b52750f5c073c6","PorscheIcons/heart":"c7c9410e76b1663420759329bed717de90686fbb","Icon/heart":"c7c9410e76b1663420759329bed717de90686fbb","PorscheIcons/heart-filled":"5a0c95a89df0bb076a13c823424ffbd87edda6d4","Icon/heart-filled":"5a0c95a89df0bb076a13c823424ffbd87edda6d4","PorscheIcons/news":"eaac973d538db4bffca39aaf06458ac185009a3d","Icon/news":"eaac973d538db4bffca39aaf06458ac185009a3d","PorscheIcons/microphone":"c8a1d58689fd19afcb53d57773e40aee4dff80bd","Icon/microphone":"c8a1d58689fd19afcb53d57773e40aee4dff80bd","PorscheIcons/radio":"b69eee9349c8a0bce478423611898ee1ee43c506","Icon/radio":"b69eee9349c8a0bce478423611898ee1ee43c506","PorscheIcons/wind":"f0a099866fa7944448c801351ad3f57ad134c091","Icon/wind":"f0a099866fa7944448c801351ad3f57ad134c091","PorscheIcons/icy_wet_road":"298da0f88f252d2ec966518ba4f4475695c996f1","Icon/icy_wet_road":"298da0f88f252d2ec966518ba4f4475695c996f1","PorscheIcons/rain":"7fd82ed6d40ddf9069d8274fbb5838c4b1d84869","Icon/rain":"7fd82ed6d40ddf9069d8274fbb5838c4b1d84869","PorscheIcons/art_culture":"0b6c870ee6662a568576665fc8008f08bc60671e","Icon/art_culture":"0b6c870ee6662a568576665fc8008f08bc60671e","PorscheIcons/birthday":"e2c886b00a596e744dd1cf1ab5b38beee71b73fc","Icon/birthday":"e2c886b00a596e744dd1cf1ab5b38beee71b73fc","PorscheIcons/dvd_menu":"72e85a727bada15c2af69dcc3f9fba6222b98cc5","Icon/dvd_menu":"72e85a727bada15c2af69dcc3f9fba6222b98cc5","PorscheIcons/dvd":"ccc40ef9c8a16faeac163f3998437a3a27d58ce3","Icon/dvd":"ccc40ef9c8a16faeac163f3998437a3a27d58ce3","PorscheIcons/nightlife":"fffee7f121afa5eeb6a582ef57c89ffaaaa2c5e4","Icon/nightlife":"fffee7f121afa5eeb6a582ef57c89ffaaaa2c5e4","PorscheIcons/knowledge":"647a6751628848e4c8b4e2923b870204d10e668e","Icon/knowledge":"647a6751628848e4c8b4e2923b870204d10e668e","PorscheIcons/evaluation":"fe3fc3c5303752b6ffde8cc06c2250440c898199","Icon/evaluation":"fe3fc3c5303752b6ffde8cc06c2250440c898199","PorscheIcons/service_app":"38873f2dc1600351bd7816a03e83811f02901121","Icon/service_app":"38873f2dc1600351bd7816a03e83811f02901121","PorscheIcons/poi_life":"5cc3076ba37fc9d4ca7de20193f2999772ed7cbb","Icon/poi_life":"5cc3076ba37fc9d4ca7de20193f2999772ed7cbb","PorscheIcons/thumb_up_outline":"623afcd443b38da823cbf45d0a4a63af34fa9cd1","Icon/thumb_up_outline":"623afcd443b38da823cbf45d0a4a63af34fa9cd1","PorscheIcons/thumb_up":"3e6b670dd37ef1a0fd02e5d8b8198fd7f1d5e5ee","Icon/thumb_up":"3e6b670dd37ef1a0fd02e5d8b8198fd7f1d5e5ee","PorscheIcons/thumb_down_outline":"7a3686505e64ef2d4b06a639966a08802dad838d","Icon/thumb_down_outline":"7a3686505e64ef2d4b06a639966a08802dad838d","PorscheIcons/thumb_down":"644c7a2813a29ee87bdd3246ab401e8da945bdd1","Icon/thumb_down":"644c7a2813a29ee87bdd3246ab401e8da945bdd1","PorscheIcons/avoid_ferry_car_train_not":"c064efc164961161b68dc49a50f6e8024f3386de","Icon/avoid_ferry_car_train_not":"c064efc164961161b68dc49a50f6e8024f3386de","PorscheIcons/avoid_ferry_car_train":"3e06514a6260ee856f8381691e22a248af56d1b3","Icon/avoid_ferry_car_train":"3e06514a6260ee856f8381691e22a248af56d1b3","PorscheIcons/bicycle":"28e7b517c27ac6dc9168a8a341d3cddae664215b","Icon/bicycle":"28e7b517c27ac6dc9168a8a341d3cddae664215b","PorscheIcons/bus_front":"da925f65ab8a7c494136033262dbce832556cf80","Icon/bus_front":"da925f65ab8a7c494136033262dbce832556cf80","PorscheIcons/train_info":"f3d8a42a3c6180914034e333e59197adb58fa849","Icon/train_info":"f3d8a42a3c6180914034e333e59197adb58fa849","PorscheIcons/flight_info":"e4ae0a39e014ffe9441915760a8222f3dc7c91e2","Icon/flight_info":"e4ae0a39e014ffe9441915760a8222f3dc7c91e2","PorscheIcons/flight_departure":"7080a965748ec689c93679e64a2a79f06a651ba6","Icon/flight_departure":"7080a965748ec689c93679e64a2a79f06a651ba6","PorscheIcons/flight_arrival":"b6dc45cb0202df9a254394b7a01b098939783551","Icon/flight_arrival":"b6dc45cb0202df9a254394b7a01b098939783551","PorscheIcons/washroom":"e6114e74047d1bd49eeeb934eb7a4a98541252f7","Icon/washroom":"e6114e74047d1bd49eeeb934eb7a4a98541252f7","PorscheIcons/calendar":"5997f860167dec407b5851015b252a854e02dcf3","Icon/calendar":"5997f860167dec407b5851015b252a854e02dcf3","PorscheIcons/clock":"dad2bff445a924ec482ceba75eb9f01d60ffdc0d","Icon/clock":"dad2bff445a924ec482ceba75eb9f01d60ffdc0d","PorscheIcons/duration":"8dd2d7f9ac8df54fa42a94dcf16bb9074c45f7f4","Icon/duration":"8dd2d7f9ac8df54fa42a94dcf16bb9074c45f7f4","PorscheIcons/stopwatch":"799eda73e23ecf4f52b63568c92ce9dc1739d6e4","Icon/stopwatch":"799eda73e23ecf4f52b63568c92ce9dc1739d6e4","PorscheIcons/24_hours":"2c2c7c8071f7585301e3c9b9279f9109826a82ef","Icon/24_hours":"2c2c7c8071f7585301e3c9b9279f9109826a82ef","PorscheIcons/charge_timer":"743faec8ea7838c7f772ae0301ed764d64e5d5c1","Icon/charge_timer":"743faec8ea7838c7f772ae0301ed764d64e5d5c1","PorscheIcons/circulation":"69a989a881839a00231112d0d19f4465099434ab","Icon/circulation":"69a989a881839a00231112d0d19f4465099434ab","PorscheIcons/restart":"9df5c73af0df5dc77adc1cd57e8961f0218e8bb3","Icon/restart":"9df5c73af0df5dc77adc1cd57e8961f0218e8bb3","PorscheIcons/process_history":"4e18023e91393507e07e790e4d6659fb15fd934a","Icon/process_history":"4e18023e91393507e07e790e4d6659fb15fd934a","PorscheIcons/organizer":"afc372c5e30fb7b4ffbc177638f119a11bbfc269","Icon/organizer":"afc372c5e30fb7b4ffbc177638f119a11bbfc269","PorscheIcons/date_day":"9584cdf445fbe77d9cd68bfb23f088817600b19b","Icon/date_day":"9584cdf445fbe77d9cd68bfb23f088817600b19b","PorscheIcons/calculator":"6dc3be401c0873c6abefe97caf6af25ac77f5e29","Icon/calculator":"6dc3be401c0873c6abefe97caf6af25ac77f5e29","PorscheIcons/card":"7093dd7ee9ed3be403a808cd99a08ae944df0d32","Icon/card":"7093dd7ee9ed3be403a808cd99a08ae944df0d32","PorscheIcons/purchase":"04b498b21cc4a4d76432aadb33b9206f49ee1c98","Icon/purchase":"04b498b21cc4a4d76432aadb33b9206f49ee1c98","PorscheIcons/shopping-bag":"388d0a3d955e298d59a0b223c7702e1efd469e00","Icon/shopping-bag":"388d0a3d955e298d59a0b223c7702e1efd469e00","PorscheIcons/shopping-bag-filled":"41de2c7baf7fddd563eb6f2f05ae872a2eabd07c","Icon/shopping-bag-filled":"41de2c7baf7fddd563eb6f2f05ae872a2eabd07c","PorscheIcons/shopping-cart":"18f72432805ae33a3ad48bbc14eefa79e8922a1a","Icon/shopping-cart":"18f72432805ae33a3ad48bbc14eefa79e8922a1a","PorscheIcons/shopping-cart-filled":"5b244189ec0e2adfce1b963dd1da0864050b1ee4","Icon/shopping-cart-filled":"5b244189ec0e2adfce1b963dd1da0864050b1ee4","PorscheIcons/price-tag":"32f3c5d1e88d1f1532e996e8a1d9ecc88c08686f","Icon/price-tag":"32f3c5d1e88d1f1532e996e8a1d9ecc88c08686f","PorscheIcons/group":"e0dc0a479ae5e26b7c0eedb0ca82560829ac0f52","Icon/group":"e0dc0a479ae5e26b7c0eedb0ca82560829ac0f52","PorscheIcons/user":"bfcdbe105f8aaa7c029ffeecd5bbfa7d4675c0ed","Icon/user":"bfcdbe105f8aaa7c029ffeecd5bbfa7d4675c0ed","PorscheIcons/user-filled":"4c0ad70fbc4e66a6ec7ef56298763afed74eb357","Icon/user-filled":"4c0ad70fbc4e66a6ec7ef56298763afed74eb357","PorscheIcons/group_three":"84459a0abfcfe49eb99394bcb9594ad381ec4581","Icon/group_three":"84459a0abfcfe49eb99394bcb9594ad381ec4581","PorscheIcons/family":"70b6f695527e036a9b9ca6c6ac3ace37772dbff1","Icon/family":"70b6f695527e036a9b9ca6c6ac3ace37772dbff1","PorscheIcons/person_walk":"7a89279e4fbe22983021a4378ec6a976135bc880","Icon/person_walk":"7a89279e4fbe22983021a4378ec6a976135bc880","PorscheIcons/person_escape":"0515dd0425dead43818d815070ccf7f3ddeff340","Icon/person_escape":"0515dd0425dead43818d815070ccf7f3ddeff340","PorscheIcons/person_logout":"b1fb8f6ecc0dc5933416ee3857a0da56b334bbbe","Icon/person_logout":"b1fb8f6ecc0dc5933416ee3857a0da56b334bbbe","PorscheIcons/concierge":"2b55a5f0f6a4378ec980d88e08f97599915fad82","Icon/concierge":"2b55a5f0f6a4378ec980d88e08f97599915fad82","PorscheIcons/privacy":"9c50b582b7472f1859fd9b7331b42f55af56028f","Icon/privacy":"9c50b582b7472f1859fd9b7331b42f55af56028f","PorscheIcons/parking-brake":"ac40faa1cdeffc6d1a7ea7b1f1653b9c8cded9a1","Icon/parking-brake":"ac40faa1cdeffc6d1a7ea7b1f1653b9c8cded9a1","PorscheIcons/car":"967121aa456c5cec77ea42de978d006f51706a5c","Icon/car":"967121aa456c5cec77ea42de978d006f51706a5c","PorscheIcons/parking-light":"fe67132854720925d412cc93866c96e5106a67c3","Icon/parking-light":"fe67132854720925d412cc93866c96e5106a67c3","PorscheIcons/climate-control":"3dbdea864ca6296ce068d7dcffdf925a864cd3ba","Icon/climate-control":"3dbdea864ca6296ce068d7dcffdf925a864cd3ba","PorscheIcons/preheating":"cac0cd501d0d6ee8968f142e132d10bb87880094","Icon/preheating":"cac0cd501d0d6ee8968f142e132d10bb87880094","PorscheIcons/climate":"993910a0ea9d5c0bcdaad745b0b21f3ec65c8afc","Icon/climate":"993910a0ea9d5c0bcdaad745b0b21f3ec65c8afc","PorscheIcons/sidelights":"e1b2be586b576a4ac364e36bbc099b1adb277def","Icon/sidelights":"e1b2be586b576a4ac364e36bbc099b1adb277def","PorscheIcons/co2-emission":"f03b806eca0132fd7bf5fd1e9d4a39330cd7f676","Icon/co2-emission":"f03b806eca0132fd7bf5fd1e9d4a39330cd7f676","PorscheIcons/steering-wheel":"b5950964b2974938bd237976b98713f9562fe224","Icon/steering-wheel":"b5950964b2974938bd237976b98713f9562fe224","PorscheIcons/cubic-capacity":"632bece87da3e4177d4bef6c061c0495448042c2","Icon/cubic-capacity":"632bece87da3e4177d4bef6c061c0495448042c2","PorscheIcons/tachometer":"e0c38ffce4d9368e38c9b0df8f0a15f3b33f067c","Icon/tachometer":"e0c38ffce4d9368e38c9b0df8f0a15f3b33f067c","PorscheIcons/fuel-station":"fb2dcc4b6f1427cc06634b7f65ce0b9aaf4180ba","Icon/fuel-station":"fb2dcc4b6f1427cc06634b7f65ce0b9aaf4180ba","PorscheIcons/truck":"463651cff35011f77a6e75e2ae6448163ab1e9b0","Icon/truck":"463651cff35011f77a6e75e2ae6448163ab1e9b0","PorscheIcons/garage":"e21db4dae572d27fe3379faab8f954a63e00b0db","Icon/garage":"e21db4dae572d27fe3379faab8f954a63e00b0db","PorscheIcons/horn":"e2310cd8ceebdebce842555b7e96bd9c87378650","Icon/horn":"e2310cd8ceebdebce842555b7e96bd9c87378650","PorscheIcons/oil-can":"7a1a9e32e667ae1e9b0811c45965a76fb71f647f","Icon/oil-can":"7a1a9e32e667ae1e9b0811c45965a76fb71f647f","PorscheIcons/active-cabin-ventilation":"2fa7e19d108afca01651c04e1963571560dbd22b","Icon/active-cabin-ventilation":"2fa7e19d108afca01651c04e1963571560dbd22b","PorscheIcons/seat":"d14fc59543c3228c47c2c30e5dfccfc9aaf8654b","Icon/seat":"d14fc59543c3228c47c2c30e5dfccfc9aaf8654b","PorscheIcons/parking-plus":"bb5a8996b6aca72b3ff7253bef5cebe843c5cbb1","Icon/parking-plus":"bb5a8996b6aca72b3ff7253bef5cebe843c5cbb1","PorscheIcons/4-wheel-drive":"6ec07842d3f5f19b90a5eb6c8bbc954f3c840cd3","Icon/4-wheel-drive":"6ec07842d3f5f19b90a5eb6c8bbc954f3c840cd3","PorscheIcons/fuel-average-consumption":"4939cdabbdbe95dc1bf1fde0c760fb77b8949eb4","Icon/fuel-average-consumption":"4939cdabbdbe95dc1bf1fde0c760fb77b8949eb4","PorscheIcons/charging-average-consumption":"7b9ccc1a908c9834c5b2ba4508d09d91644f4f34","Icon/charging-average-consumption":"7b9ccc1a908c9834c5b2ba4508d09d91644f4f34","PorscheIcons/flat-tire":"3ae0a430760e2f6a0b586ab5f75a1aedb53de003","Icon/flat-tire":"3ae0a430760e2f6a0b586ab5f75a1aedb53de003","PorscheIcons/fuel-prices":"8f84b22b1d8c0a77838a9fade5aeaa1d72639390","Icon/fuel-prices":"8f84b22b1d8c0a77838a9fade5aeaa1d72639390","PorscheIcons/car-alarm":"30b2395b76149c960e07dfa1bf239b3269376115","Icon/car-alarm":"30b2395b76149c960e07dfa1bf239b3269376115","PorscheIcons/speed-alarm":"5a53e8f2492de271f0359ac8b57443ebcf6732ab","Icon/speed-alarm":"5a53e8f2492de271f0359ac8b57443ebcf6732ab","PorscheIcons/parking":"2fd2ed6738ba12e7fb211d6d374480f7f990b5eb","Icon/parking":"2fd2ed6738ba12e7fb211d6d374480f7f990b5eb","PorscheIcons/car-control":"5bab4110b4b7886928b285deed3bea440437d6f7","Icon/car-control":"5bab4110b4b7886928b285deed3bea440437d6f7","PorscheIcons/road-side-assistance":"bc2e9362dad23d6018d0bf30203b61fcbf480eab","Icon/road-side-assistance":"bc2e9362dad23d6018d0bf30203b61fcbf480eab","PorscheIcons/valet-alarm":"fc8945d060dd80939784d936fa2cc5e8c7ebffd6","Icon/valet-alarm":"fc8945d060dd80939784d936fa2cc5e8c7ebffd6","PorscheIcons/trip":"3f525f0cced247adc44a45037f8da1dccf073d82","Icon/trip":"3f525f0cced247adc44a45037f8da1dccf073d82","PorscheIcons/realtime-traffic":"9723c71fccf1d20336b45f4a5e2ebfbfe537a7c6","Icon/realtime-traffic":"9723c71fccf1d20336b45f4a5e2ebfbfe537a7c6","PorscheIcons/predictive-maintenance":"dfc3cab3614ca3854823748c886b4e453955a35d","Icon/predictive-maintenance":"dfc3cab3614ca3854823748c886b4e453955a35d","PorscheIcons/map-update":"4e206d37b6df0bf7b4c32b470cefb1b18a6f41ba","Icon/map-update":"4e206d37b6df0bf7b4c32b470cefb1b18a6f41ba","PorscheIcons/voice-pilot":"210ed9bd2555ebdf2ec932ca5fc347aeb88f9672","Icon/voice-pilot":"210ed9bd2555ebdf2ec932ca5fc347aeb88f9672","PorscheIcons/fuel":"e309650bfde83b5e46473cd908804a7c33a14381","Icon/fuel":"e309650bfde83b5e46473cd908804a7c33a14381","PorscheIcons/fuel_warning":"d01853b40bcea0c7bcd9afe3f8833634e62208eb","Icon/fuel_warning":"d01853b40bcea0c7bcd9afe3f8833634e62208eb","PorscheIcons/front_window_heating_hardware":"fb10fd58e038c1ac322ae16f99e034813ca14fa9","Icon/front_window_heating_hardware":"fb10fd58e038c1ac322ae16f99e034813ca14fa9","PorscheIcons/key_porsche":"83756e12c369a514d449995c780134bc15f2d329","Icon/key_porsche":"83756e12c369a514d449995c780134bc15f2d329","PorscheIcons/chat":"eab96bfd4bf7ecf4ab9e54481e66d82059b94cab","Icon/chat":"eab96bfd4bf7ecf4ab9e54481e66d82059b94cab","PorscheIcons/email":"eadc6dca755ebb967a7e5c37de82b93fb0c79cb4","Icon/email":"eadc6dca755ebb967a7e5c37de82b93fb0c79cb4","PorscheIcons/phone":"6b1cea286cc0a99e7771b94fdc7fc05192a697d2","Icon/phone":"6b1cea286cc0a99e7771b94fdc7fc05192a697d2","PorscheIcons/information":"0e7e13df7a9dc8e3fc143c75ed6f3d0f157514ba","Icon/information":"0e7e13df7a9dc8e3fc143c75ed6f3d0f157514ba","PorscheIcons/information-filled":"98cc81fa54e03a61caafa44449849e15e707bf3b","Icon/information-filled":"98cc81fa54e03a61caafa44449849e15e707bf3b","PorscheIcons/success":"6d0da98ebff1ae78a52f7d433cc4f97f1fdaddb4","Icon/success":"6d0da98ebff1ae78a52f7d433cc4f97f1fdaddb4","PorscheIcons/success-filled":"107574a210a39a090e99e0f12e2fb25ed0ab2c93","Icon/success-filled":"107574a210a39a090e99e0f12e2fb25ed0ab2c93","PorscheIcons/warning":"c421a6cfb84cf5a9fee1f7579ff180249dd90f04","Icon/warning":"c421a6cfb84cf5a9fee1f7579ff180249dd90f04","PorscheIcons/warning-filled":"360645f2a8a7682057a42b0081ab97458d5b24a7","Icon/warning-filled":"360645f2a8a7682057a42b0081ab97458d5b24a7","PorscheIcons/error_outline":"768064bbcd494644b728bc5a3b232b629be4ff45","Icon/error_outline":"768064bbcd494644b728bc5a3b232b629be4ff45","PorscheIcons/error-filled":"cf2c2fa176e55eb9ad2f9b2f2c62f638d640e58b","Icon/error-filled":"cf2c2fa176e55eb9ad2f9b2f2c62f638d640e58b","PorscheIcons/question":"cc67c4a003aaa93bda0a4dd6aa5058ab5b019167","Icon/question":"cc67c4a003aaa93bda0a4dd6aa5058ab5b019167","PorscheIcons/question-filled":"6b21006a46ab6997871f61f2cb8c53c4faefcc19","Icon/question-filled":"6b21006a46ab6997871f61f2cb8c53c4faefcc19","PorscheIcons/message_sms":"86e566f46c4984bf4f656a12272bdecd51c300cd","Icon/message_sms":"86e566f46c4984bf4f656a12272bdecd51c300cd","PorscheIcons/accessibility":"87133fb37f8173cf83863580d28a266ea41e2b54","Icon/accessibility":"87133fb37f8173cf83863580d28a266ea41e2b54","PorscheIcons/check":"47a7e43c0d35d02b4cb2672e035046c27f294f2f","Icon/check":"47a7e43c0d35d02b4cb2672e035046c27f294f2f","PorscheIcons/close":"3f4ed94afe8025a6acbf1930879a052d4e5eedbf","Icon/close":"3f4ed94afe8025a6acbf1930879a052d4e5eedbf","PorscheIcons/add":"7ad4a6a452b1885c776bbf196864df047ecaee56","Icon/add":"7ad4a6a452b1885c776bbf196864df047ecaee56","PorscheIcons/subtract":"ba76041ac6a6d998e58dd4e6f0b9769ca609e8ae","Icon/subtract":"ba76041ac6a6d998e58dd4e6f0b9769ca609e8ae","PorscheIcons/adjust":"b67ea2b94f3f79a10779e2e5f5c834efe1d400ce","Icon/adjust":"b67ea2b94f3f79a10779e2e5f5c834efe1d400ce","PorscheIcons/bookmark":"3e866677d347d419ff61092a404ef9a2f0598166","Icon/bookmark":"3e866677d347d419ff61092a404ef9a2f0598166","PorscheIcons/bookmark-filled":"136576ed8199db71d01c2df79fd6b13bd86073d7","Icon/bookmark-filled":"136576ed8199db71d01c2df79fd6b13bd86073d7","PorscheIcons/chart":"1f99450c878488b993c94e9dd6ac353233d2ee30","Icon/chart":"1f99450c878488b993c94e9dd6ac353233d2ee30","PorscheIcons/compare":"a1a33d0a85d779c85da6445454a5811085074f15","Icon/compare":"a1a33d0a85d779c85da6445454a5811085074f15","PorscheIcons/configurate":"f3134b06818bcab047068055a537c409cba84c9b","Icon/configurate":"f3134b06818bcab047068055a537c409cba84c9b","PorscheIcons/delete":"5d4f0cf78fc0b941696db8960dde876268ee34bf","Icon/delete":"5d4f0cf78fc0b941696db8960dde876268ee34bf","PorscheIcons/disable":"43813726d357d89258b9247d5ef6ea44a67f0be8","Icon/disable":"43813726d357d89258b9247d5ef6ea44a67f0be8","PorscheIcons/stack":"3b9c39030445c11c87fb0c3429b9171f886c275f","Icon/stack":"3b9c39030445c11c87fb0c3429b9171f886c275f","PorscheIcons/menu-dots-horizontal":"e54163f69c0276a04766a6a824a513ebf2b333e6","Icon/menu-dots-horizontal":"e54163f69c0276a04766a6a824a513ebf2b333e6","PorscheIcons/menu-dots-vertical":"4e408f1a00aa8b07e0af509ae1e4e6b1abd53c10","Icon/menu-dots-vertical":"4e408f1a00aa8b07e0af509ae1e4e6b1abd53c10","PorscheIcons/download":"852a601df8d106b204583c7e4b68e7e7731a5132","Icon/download":"852a601df8d106b204583c7e4b68e7e7731a5132","PorscheIcons/menu-lines":"f865ca2f84dd89bbc062b29619f60e2bcf4a26e1","Icon/menu-lines":"f865ca2f84dd89bbc062b29619f60e2bcf4a26e1","PorscheIcons/switch":"15089c69a409db24eefe5e28b45039c15aaff6f0","Icon/switch":"15089c69a409db24eefe5e28b45039c15aaff6f0","PorscheIcons/edit":"a7ba3bf441454e92811fcf0edf9dd9d6267ee229","Icon/edit":"a7ba3bf441454e92811fcf0edf9dd9d6267ee229","PorscheIcons/minus":"a2b997988ff40d00949c4c57b719c459fb2f9df5","Icon/minus":"a2b997988ff40d00949c4c57b719c459fb2f9df5","PorscheIcons/upload":"f32d4624deb3085dad077baebc4e9cfd05729a16","Icon/upload":"f32d4624deb3085dad077baebc4e9cfd05729a16","PorscheIcons/external":"ade3572d1ca2e6a756f7d84e943a564d3051be5b","Icon/external":"ade3572d1ca2e6a756f7d84e943a564d3051be5b","PorscheIcons/plus":"e9062be288bcb8f53613fe171188affc713db2a2","Icon/plus":"e9062be288bcb8f53613fe171188affc713db2a2","PorscheIcons/filter":"a9756473a64cb4c2f20fa0412e74b6bd446351f4","Icon/filter":"a9756473a64cb4c2f20fa0412e74b6bd446351f4","PorscheIcons/refresh":"f825d3639e6e3ef6d553780c57d2c2d82594dcc0","Icon/refresh":"f825d3639e6e3ef6d553780c57d2c2d82594dcc0","PorscheIcons/reset":"9ec22e52f8fdff2b5f586e7b5bd054d25ccef57e","Icon/reset":"9ec22e52f8fdff2b5f586e7b5bd054d25ccef57e","PorscheIcons/grid":"015157577a9a479f599b24af34cb04d10b1693d1","Icon/grid":"015157577a9a479f599b24af34cb04d10b1693d1","PorscheIcons/zoom-in":"ad7796b0284053e17d9283e159d02d26514229ff","Icon/zoom-in":"ad7796b0284053e17d9283e159d02d26514229ff","PorscheIcons/save":"008d9f28a49ed96a3d056ecbb8628636a55cc2ee","Icon/save":"008d9f28a49ed96a3d056ecbb8628636a55cc2ee","PorscheIcons/increase":"487465676bdd175cc3af001c5353c36d804323c2","Icon/increase":"487465676bdd175cc3af001c5353c36d804323c2","PorscheIcons/zoom-out":"ff9c96153e66c156c103a315c27766638de41651","Icon/zoom-out":"ff9c96153e66c156c103a315c27766638de41651","PorscheIcons/search":"c2654e6f700854fdebb93db7850fabe2dd0b88ca","Icon/search":"c2654e6f700854fdebb93db7850fabe2dd0b88ca","PorscheIcons/list":"0ded6a56c24c7937b385aa1d58566785445cf030","Icon/list":"0ded6a56c24c7937b385aa1d58566785445cf030","PorscheIcons/logout":"22806f4094d8c0119dcdba238718a8d229b50d46","Icon/logout":"22806f4094d8c0119dcdba238718a8d229b50d46","PorscheIcons/sort":"473923c8bc8fecd889d60d71e7a6b66c26553c35","Icon/sort":"473923c8bc8fecd889d60d71e7a6b66c26553c35","PorscheIcons/drag":"f430837ed518c32d352881ffee8b4e25fc74b670","Icon/drag":"f430837ed518c32d352881ffee8b4e25fc74b670","PorscheIcons/qr":"41c7bd52d8465058ac930f193f76ddb30e45de45","Icon/qr":"41c7bd52d8465058ac930f193f76ddb30e45de45","PorscheIcons/unpin":"a4389b4d9f11baeab7e10cec69056402ef1a1df9","Icon/unpin":"a4389b4d9f11baeab7e10cec69056402ef1a1df9","PorscheIcons/copy":"054f71322c892c3e7268a82acae8424dc5e3cda6","Icon/copy":"054f71322c892c3e7268a82acae8424dc5e3cda6","PorscheIcons/check-thick":"7e293b462a3d6e4fffec9ea12c43b2c3b1d4a2a4","Icon/check-thick":"7e293b462a3d6e4fffec9ea12c43b2c3b1d4a2a4","PorscheIcons/minus-thick":"eb26ac6341391a04bf762c53555407affb98b120","Icon/minus-thick":"eb26ac6341391a04bf762c53555407affb98b120","PorscheIcons/app_selector":"de2f27bf6d82b60a5a4e806b67115ad44a360d6c","Icon/app_selector":"de2f27bf6d82b60a5a4e806b67115ad44a360d6c","PorscheIcons/four_squares":"50876c8469654b9578e727d57b935097ab801b52","Icon/four_squares":"50876c8469654b9578e727d57b935097ab801b52","PorscheIcons/store":"6853314cc96a9e9d846115d263ed6ddc6b2dc405","Icon/store":"6853314cc96a9e9d846115d263ed6ddc6b2dc405","PorscheIcons/widgets":"05a478434d49ea2e5b17c6a060aaa1585c25330d","Icon/widgets":"05a478434d49ea2e5b17c6a060aaa1585c25330d","PorscheIcons/magnify_glass_plus":"d49ea48b99ddc2c640e6c7630e6be81d568e5d56","Icon/magnify_glass_plus":"d49ea48b99ddc2c640e6c7630e6be81d568e5d56","PorscheIcons/magnify_glass_minus":"31a57b1b256bdba3a10369546bd66dae6302f409","Icon/magnify_glass_minus":"31a57b1b256bdba3a10369546bd66dae6302f409","PorscheIcons/keypad_search":"8767bb7bac18ef498a0742f8a24ae7b93666af8c","Icon/keypad_search":"8767bb7bac18ef498a0742f8a24ae7b93666af8c","PorscheIcons/overview":"5994de7b97c6450ed2690449ec631e28b650b0fc","Icon/overview":"5994de7b97c6450ed2690449ec631e28b650b0fc","PorscheIcons/folder":"15303d175160a94a896046172e0c1dea452c7ffc","Icon/folder":"15303d175160a94a896046172e0c1dea452c7ffc","PorscheIcons/sim_card":"b05d68bfe429a63cbd28be14cb31ef760f28bd6e","Icon/sim_card":"b05d68bfe429a63cbd28be14cb31ef760f28bd6e","PorscheIcons/bubble_comments_younited_CN":"e1e7caff69ead3692aff35f2dd0f8ffacb3415f5","Icon/bubble_comments_younited_CN":"e1e7caff69ead3692aff35f2dd0f8ffacb3415f5","PorscheIcons/subject":"a0eb4e9e34fc6488c92fca5a87321f8bd2f6f2ae","Icon/subject":"a0eb4e9e34fc6488c92fca5a87321f8bd2f6f2ae","PorscheIcons/bubble_info":"59869b1249c24546e71ea890602cee1ab1e3e98b","Icon/bubble_info":"59869b1249c24546e71ea890602cee1ab1e3e98b","PorscheIcons/message_draft":"c49d2405258370300369956e01950b49a1c42fb7","Icon/message_draft":"c49d2405258370300369956e01950b49a1c42fb7","PorscheIcons/addressbook":"ca4f72434f5d1604b572a5dcba543907bb8d29b2","Icon/addressbook":"ca4f72434f5d1604b572a5dcba543907bb8d29b2","PorscheIcons/bubble_recommendations":"3d85e47cd0ec25cf35de5c922bbfeb4c46c44ec4","Icon/bubble_recommendations":"3d85e47cd0ec25cf35de5c922bbfeb4c46c44ec4","PorscheIcons/bubble_language":"9e82d030c18d6bab68d7a0ac9b6afe7059af598d","Icon/bubble_language":"9e82d030c18d6bab68d7a0ac9b6afe7059af598d","PorscheIcons/message_template":"0d03a6d813017be8c3c492c38c9c447bf70d94a3","Icon/message_template":"0d03a6d813017be8c3c492c38c9c447bf70d94a3","PorscheIcons/bubble_subtitle":"572ff3f458d6cd6498aca8a2386471ba2f1be434","Icon/bubble_subtitle":"572ff3f458d6cd6498aca8a2386471ba2f1be434","PorscheIcons/tasks":"c4a082159385cf2ee4e382aa8a258297bd0f8d59","Icon/tasks":"c4a082159385cf2ee4e382aa8a258297bd0f8d59","PorscheIcons/logbook":"059b0fd12e2f19ac7acd2201ff1da091fee8b717","Icon/logbook":"059b0fd12e2f19ac7acd2201ff1da091fee8b717","PorscheIcons/impaired_hearing":"3833d009485c625516f2d9dea26fb48df3e28046","Icon/impaired_hearing":"3833d009485c625516f2d9dea26fb48df3e28046","PorscheIcons/eye_off":"797df733e8f3325df689fa4ce067e3265cfc315a","Icon/eye_off":"797df733e8f3325df689fa4ce067e3265cfc315a","PorscheIcons/eye":"7b23ec111f65dc34378ea960d46b29c5a0031db0","Icon/eye":"7b23ec111f65dc34378ea960d46b29c5a0031db0","PorscheIcons/eye_warning":"6b284c043a9683eef3a99c410b72abf2a132e6ea","Icon/eye_warning":"6b284c043a9683eef3a99c410b72abf2a132e6ea","PorscheIcons/augmented-reality":"87872dcae1a35d170aa96f5e79d7fbcf9dfc2ddd","Icon/augmented-reality":"87872dcae1a35d170aa96f5e79d7fbcf9dfc2ddd","PorscheIcons/printer":"1f6644f1b48169ff1739ebb82741b4e3a694424e","Icon/printer":"1f6644f1b48169ff1739ebb82741b4e3a694424e","PorscheIcons/broadcast":"03d73285dd870cd9113b32d4ad1168111c0721fd","Icon/broadcast":"03d73285dd870cd9113b32d4ad1168111c0721fd","PorscheIcons/replay":"4d7b9b94ca5721d519f73ca09bb56ac5afdeb3ae","Icon/replay":"4d7b9b94ca5721d519f73ca09bb56ac5afdeb3ae","PorscheIcons/camera":"340415a77a6b022834f72433b6f16e27f04a832d","Icon/camera":"340415a77a6b022834f72433b6f16e27f04a832d","PorscheIcons/screen":"9c6b0d5f2975a54a8d74b6850e539da06327e6d5","Icon/screen":"9c6b0d5f2975a54a8d74b6850e539da06327e6d5","PorscheIcons/closed-caption":"c0337bde8553fcdc4a0f26abf4dfe7328a4a6f7a","Icon/closed-caption":"c0337bde8553fcdc4a0f26abf4dfe7328a4a6f7a","PorscheIcons/send":"d4eafbbe7378f335c7def60e7603a8b4bf629ebb","Icon/send":"d4eafbbe7378f335c7def60e7603a8b4bf629ebb","PorscheIcons/document":"1afd39f74c41728116ec1273f3c400dcc1ee950e","Icon/document":"1afd39f74c41728116ec1273f3c400dcc1ee950e","PorscheIcons/tablet":"7623db355b6514b7a1c3a1175a3b8509eb78c9b7","Icon/tablet":"7623db355b6514b7a1c3a1175a3b8509eb78c9b7","PorscheIcons/image":"acab9f7aad70c04137bd7b5a2969c7fbbafae430","Icon/image":"acab9f7aad70c04137bd7b5a2969c7fbbafae430","PorscheIcons/user-manual":"f005eb336e91b8d3c9e7f8335f1faa5f5881ab5a","Icon/user-manual":"f005eb336e91b8d3c9e7f8335f1faa5f5881ab5a","PorscheIcons/map":"6fbfe540c007376832fdfba6d9e2ad7f97eaf347","Icon/map":"6fbfe540c007376832fdfba6d9e2ad7f97eaf347","PorscheIcons/video":"33bae883315eed9a75d78d7d5081cdebedfe545b","Icon/video":"33bae883315eed9a75d78d7d5081cdebedfe545b","PorscheIcons/mobile":"43d2ff6d8138e51d050c12c6fa7e97c7aa918b56","Icon/mobile":"43d2ff6d8138e51d050c12c6fa7e97c7aa918b56","PorscheIcons/volume-off":"c31a3e3fc577ee47b69e75ca390314a41aa8750f","Icon/volume-off":"c31a3e3fc577ee47b69e75ca390314a41aa8750f","PorscheIcons/wifi":"4714941f4c841c84d54a65f051b8d21d7d1e2268","Icon/wifi":"4714941f4c841c84d54a65f051b8d21d7d1e2268","PorscheIcons/volume-up":"c32725421513197fdb3c08f875d9a6a1dc6138ec","Icon/volume-up":"c32725421513197fdb3c08f875d9a6a1dc6138ec","PorscheIcons/pause":"55cdda4e39e9482468f7927f0973bacc7a25473e","Icon/pause":"55cdda4e39e9482468f7927f0973bacc7a25473e","PorscheIcons/play":"88b1308eb9057f0ffc445805173b9a27ea429948","Icon/play":"88b1308eb9057f0ffc445805173b9a27ea429948","PorscheIcons/fast-forward":"d03930bb07f36111cf45d3d49bf76083fe66ac50","Icon/fast-forward":"d03930bb07f36111cf45d3d49bf76083fe66ac50","PorscheIcons/fast-backward":"a7e3455874b6316dc7aaa9e773055af0cee8edab","Icon/fast-backward":"a7e3455874b6316dc7aaa9e773055af0cee8edab","PorscheIcons/skip-backward":"dfb2252a39889483b56b932303080df2f1b89712","Icon/skip-backward":"dfb2252a39889483b56b932303080df2f1b89712","PorscheIcons/skip-forward":"e6277b6dc5eab0f22b29e5345afdcba7c6242e0d","Icon/skip-forward":"e6277b6dc5eab0f22b29e5345afdcba7c6242e0d","PorscheIcons/stop":"f0ebdb950c8d819d80136d3498ad8ef5d65723f8","Icon/stop":"f0ebdb950c8d819d80136d3498ad8ef5d65723f8","PorscheIcons/laptop":"8699a5c89aa112622996821b88ffbaf54dd650f3","Icon/laptop":"8699a5c89aa112622996821b88ffbaf54dd650f3","PorscheIcons/apple-carplay":"67733335779aaecd00e3fe1abee93c004d6c3a9d","Icon/apple-carplay":"67733335779aaecd00e3fe1abee93c004d6c3a9d","PorscheIcons/online-search":"6697cc30ba0eb5654843b5a828bc36531c46fa15","Icon/online-search":"6697cc30ba0eb5654843b5a828bc36531c46fa15","PorscheIcons/repeat":"90c236927565135a6e984c8493eab26e87b499be","Icon/repeat":"90c236927565135a6e984c8493eab26e87b499be","PorscheIcons/shuffle":"18eed92abefc0d5e1607fef47dca0e547a7f06a8","Icon/shuffle":"18eed92abefc0d5e1607fef47dca0e547a7f06a8","PorscheIcons/note_circle":"f3a0d4cc19a58b8a4ffad59d702deb691aa4b779","Icon/note_circle":"f3a0d4cc19a58b8a4ffad59d702deb691aa4b779","PorscheIcons/note":"1f47f10036d38f15ff22a34379d91027828b5c1f","Icon/note":"1f47f10036d38f15ff22a34379d91027828b5c1f","PorscheIcons/readout_pause":"f0b9d4505412c9a63c5fb5a2de04e222c7c4c474","Icon/readout_pause":"f0b9d4505412c9a63c5fb5a2de04e222c7c4c474","PorscheIcons/porsche_labs":"ee8ea450facddf7b46a6d3be54babfc18b0dd5e3","Icon/porsche_labs":"ee8ea450facddf7b46a6d3be54babfc18b0dd5e3","PorscheIcons/phone_pcl":"d0ba79951e6b09193c376e2e99025e6867a594ad","Icon/phone_pcl":"d0ba79951e6b09193c376e2e99025e6867a594ad","PorscheIcons/phone_hang_up":"1738eef7a9e3e286de254b7899fb992172ff2df9","Icon/phone_hang_up":"1738eef7a9e3e286de254b7899fb992172ff2df9","PorscheIcons/speakerphone":"6c10fd39157aae1b069aa9b0758e392a8fcb3b47","Icon/speakerphone":"6c10fd39157aae1b069aa9b0758e392a8fcb3b47","PorscheIcons/headset":"a227a1def9466d01e4a421b5a17348e98d9d81c3","Icon/headset":"a227a1def9466d01e4a421b5a17348e98d9d81c3","PorscheIcons/online_radio":"de75e850468385c4a958a56e1b931d27848e82f6","Icon/online_radio":"de75e850468385c4a958a56e1b931d27848e82f6","PorscheIcons/channel":"ef52b8cff132111fec0776c0f8101bc279835588","Icon/channel":"ef52b8cff132111fec0776c0f8101bc279835588","PorscheIcons/data_tracking":"370da1b02c3ce4fdee336c195978cb8338a79a66","Icon/data_tracking":"370da1b02c3ce4fdee336c195978cb8338a79a66","PorscheIcons/balance":"4bd6f65492986f77eab07f90adbd5cdf976f6160","Icon/balance":"4bd6f65492986f77eab07f90adbd5cdf976f6160","PorscheIcons/status_bluetooth":"792462f6c5ecc470f53afba263fc201640ac3795","Icon/status_bluetooth":"792462f6c5ecc470f53afba263fc201640ac3795","PorscheIcons/news_channel":"a70eae1d3e2c578bda7c2625051ddcfe9d21902f","Icon/news_channel":"a70eae1d3e2c578bda7c2625051ddcfe9d21902f","PorscheIcons/one_outline":"35ce4f9d47ad7bf84d369e0a3b3ed4d7592397ec","Icon/one_outline":"35ce4f9d47ad7bf84d369e0a3b3ed4d7592397ec","PorscheIcons/two_outline":"d579fe8210697a1c917182b84f3e7b234094a808","Icon/two_outline":"d579fe8210697a1c917182b84f3e7b234094a808","PorscheIcons/three_outline":"9916d668b1bc067c1298fa14b2898646f260b09e","Icon/three_outline":"9916d668b1bc067c1298fa14b2898646f260b09e","PorscheIcons/four_outline":"bbc08bb90b088fbdf55c3d3a910b3366a9f210b6","Icon/four_outline":"bbc08bb90b088fbdf55c3d3a910b3366a9f210b6","PorscheIcons/five_outline":"98912ef7f9d483952438e03da3c3a52ad72f376f","Icon/five_outline":"98912ef7f9d483952438e03da3c3a52ad72f376f","PorscheIcons/six_outline":"d7b9d2c6d81ed62d6bfbf6cc4613149b85847fb8","Icon/six_outline":"d7b9d2c6d81ed62d6bfbf6cc4613149b85847fb8","PorscheIcons/seven_outline":"aab75dacf110c70bfca0940f545304468c70c6e6","Icon/seven_outline":"aab75dacf110c70bfca0940f545304468c70c6e6","PorscheIcons/eight_outline":"6d794bce969faec503a3511970c609e8223b6e3e","Icon/eight_outline":"6d794bce969faec503a3511970c609e8223b6e3e","PorscheIcons/nine_outline":"7535b92f081c5e6af261c4eef677d1e2c5effce9","Icon/nine_outline":"7535b92f081c5e6af261c4eef677d1e2c5effce9","PorscheIcons/one_filled":"81ab97a2fa044475b357f148578b9d0cb1718d0a","Icon/one_filled":"81ab97a2fa044475b357f148578b9d0cb1718d0a","PorscheIcons/two_filled":"4d537eebcc745bcaf967305841fcf3b8dea4f245","Icon/two_filled":"4d537eebcc745bcaf967305841fcf3b8dea4f245","PorscheIcons/three_filled":"c5de078b409907cdeb3840d5986b2c2e8f426bfb","Icon/three_filled":"c5de078b409907cdeb3840d5986b2c2e8f426bfb","PorscheIcons/four_filled":"ca8ba78856036b9ae5fe8f2ba9728e85c286fa51","Icon/four_filled":"ca8ba78856036b9ae5fe8f2ba9728e85c286fa51","PorscheIcons/five_filled":"e9d27dc0c1d0e5d6e9841757af6c38313b677e28","Icon/five_filled":"e9d27dc0c1d0e5d6e9841757af6c38313b677e28","PorscheIcons/six_filled":"2366e55834e2c4772a7edcf3f27a0798d2707bd9","Icon/six_filled":"2366e55834e2c4772a7edcf3f27a0798d2707bd9","PorscheIcons/seven_filled":"79866d7e8cacb47c2b8779fe1f807e3e6ef6ae24","Icon/seven_filled":"79866d7e8cacb47c2b8779fe1f807e3e6ef6ae24","PorscheIcons/eight_filled":"f178ff611bc829938cc621bf7ad67fb33dfb7984","Icon/eight_filled":"f178ff611bc829938cc621bf7ad67fb33dfb7984","PorscheIcons/nine_filled":"054256bd6505abc68dec2dcd4f8d9a59d40caf5e","Icon/nine_filled":"054256bd6505abc68dec2dcd4f8d9a59d40caf5e","PorscheIcons/baidu":"d6bfaafe6097dd57ca22a261e7248cb87a2a3efe","Icon/baidu":"d6bfaafe6097dd57ca22a261e7248cb87a2a3efe","PorscheIcons/yahoo":"b87bacae747be72639419a62d2fc11a2b2c178b5","Icon/yahoo":"b87bacae747be72639419a62d2fc11a2b2c178b5","PorscheIcons/kakaotalk":"476591339f26d15a3beec4298ec9dd45e69519fb","Icon/kakaotalk":"476591339f26d15a3beec4298ec9dd45e69519fb","PorscheIcons/telegram":"ba119d8a9750f2a5cbda1a2c5cb814ab3def8766","Icon/telegram":"ba119d8a9750f2a5cbda1a2c5cb814ab3def8766","PorscheIcons/delicious":"cbd401c68c9d9810102f9280da94e5df7d6e4246","Icon/delicious":"cbd401c68c9d9810102f9280da94e5df7d6e4246","PorscheIcons/youku":"6d1d1ae32d1410707e7402e2d39968d4c1e6c051","Icon/youku":"6d1d1ae32d1410707e7402e2d39968d4c1e6c051","PorscheIcons/linkedin":"d7ef96cab46b3b660efce884384f6a8a3f959e6b","Icon/linkedin":"d7ef96cab46b3b660efce884384f6a8a3f959e6b","PorscheIcons/tiktok":"6f1b13c1da0f0b455bbe9b5ef2aebd7b6271656a","Icon/tiktok":"6f1b13c1da0f0b455bbe9b5ef2aebd7b6271656a","PorscheIcons/digg":"3a8774d97c38819006746a37cfab79263e8cbc87","Icon/digg":"3a8774d97c38819006746a37cfab79263e8cbc87","PorscheIcons/youtube":"50b61d1af6bcf525e8d4f47728c08016f4c81d22","Icon/youtube":"50b61d1af6bcf525e8d4f47728c08016f4c81d22","PorscheIcons/tumblr":"f3ce2811461debb8a8c2d0c9ffcbaa1733d4020d","Icon/tumblr":"f3ce2811461debb8a8c2d0c9ffcbaa1733d4020d","PorscheIcons/naver":"58b1b99bab9fd26c4f1a30ccc0af6e36d4018c59","Icon/naver":"58b1b99bab9fd26c4f1a30ccc0af6e36d4018c59","PorscheIcons/facebook":"5a5099c05c62de45563ff30132f313f50fe278fe","Icon/facebook":"5a5099c05c62de45563ff30132f313f50fe278fe","PorscheIcons/rss":"b438cfc687b3e678740da598037157c07d38d5f9","Icon/rss":"b438cfc687b3e678740da598037157c07d38d5f9","PorscheIcons/twitter":"d936e21e7784e416cf35fd25e43235c5afdd9933","Icon/twitter":"d936e21e7784e416cf35fd25e43235c5afdd9933","PorscheIcons/pinterest":"fa1d70ddb68e9b8564078b113ad82d74b335fefd","Icon/pinterest":"fa1d70ddb68e9b8564078b113ad82d74b335fefd","PorscheIcons/share":"13f86281da463530a7f6c3ce632ea114113dd9ad","Icon/share":"13f86281da463530a7f6c3ce632ea114113dd9ad","PorscheIcons/qq-share":"5c8fec7f9ad6d69cee615b8ed2971d1a7b73f627","Icon/qq-share":"5c8fec7f9ad6d69cee615b8ed2971d1a7b73f627","PorscheIcons/viber":"02406cedca4bca1a743d2ccf3b60c4607fd82733","Icon/viber":"02406cedca4bca1a743d2ccf3b60c4607fd82733","PorscheIcons/foursquare":"e2f816d570285a39c6af9b2f8f0a38db6ff718ee","Icon/foursquare":"e2f816d570285a39c6af9b2f8f0a38db6ff718ee","PorscheIcons/qq":"1df0acb981b8df1e88cc7176123dae2efdec2950","Icon/qq":"1df0acb981b8df1e88cc7176123dae2efdec2950","PorscheIcons/vk":"97595a2998d3ae94d6bb404a05df95ca12e2c877","Icon/vk":"97595a2998d3ae94d6bb404a05df95ca12e2c877","PorscheIcons/gmail":"eb6157719f6a234405524798607fa92dacea180e","Icon/gmail":"eb6157719f6a234405524798607fa92dacea180e","PorscheIcons/reddit":"74b4ae4796217593e403409dcb6eba9608b8e576","Icon/reddit":"74b4ae4796217593e403409dcb6eba9608b8e576","PorscheIcons/wechat":"5780a17f7decd743b43e2a975090fe2d6e07d9b3","Icon/wechat":"5780a17f7decd743b43e2a975090fe2d6e07d9b3","PorscheIcons/google":"e00a9aa32b62a6817b509636e70c34b63772bbe0","Icon/google":"e00a9aa32b62a6817b509636e70c34b63772bbe0","PorscheIcons/weibo":"bafb4a866f2bc2393d5808a1b61b4a7d3b358d2a","Icon/weibo":"bafb4a866f2bc2393d5808a1b61b4a7d3b358d2a","PorscheIcons/hatena":"1388443dcc89370cb53eff57e7eb8f1a48e69e54","Icon/hatena":"1388443dcc89370cb53eff57e7eb8f1a48e69e54","PorscheIcons/skyrock":"446621dd7db0ae0ae142c21702cd6811a750780b","Icon/skyrock":"446621dd7db0ae0ae142c21702cd6811a750780b","PorscheIcons/sohu":"52399886fa3f2b5fb6257b7cf29dff2fb71146f2","Icon/sohu":"52399886fa3f2b5fb6257b7cf29dff2fb71146f2","PorscheIcons/instagram":"13afd7051f3daa82caca6f7bbc32125b82c97bdc","Icon/instagram":"13afd7051f3daa82caca6f7bbc32125b82c97bdc","PorscheIcons/whatsapp":"8e2a8d19f1945f2f343433ccae3b7931f305df96","Icon/whatsapp":"8e2a8d19f1945f2f343433ccae3b7931f305df96","PorscheIcons/tecent":"e0565e97cc71ecc8900335cb3b444d85f019122a","Icon/tecent":"e0565e97cc71ecc8900335cb3b444d85f019122a","PorscheIcons/kaixin":"541faf3fa1483503eee290b8e05596f04d1d9708","Icon/kaixin":"541faf3fa1483503eee290b8e05596f04d1d9708","PorscheIcons/xing":"7eed78735ecb53482696c01a2d61140ea68e30d1","Icon/xing":"7eed78735ecb53482696c01a2d61140ea68e30d1","PorscheIcons/apple-podcast":"8743e63b59c866dbc5b0c8032f844bdd663c89d9","Icon/apple-podcast":"8743e63b59c866dbc5b0c8032f844bdd663c89d9","PorscheIcons/spotify":"1229e321dc84e887192c342f4ae35185bb6fbe66","Icon/spotify":"1229e321dc84e887192c342f4ae35185bb6fbe66","PorscheIcons/gracenote":"b36bf362781df990bd3e08c6ecf7366b8d012686","Icon/gracenote":"b36bf362781df990bd3e08c6ecf7366b8d012686","PorscheIcons/apple-music":"1a836512c864c259f23a29603429d109b9a574fc","Icon/apple-music":"1a836512c864c259f23a29603429d109b9a574fc","PorscheIcons/crest":"34ff162bb4d850e20268ccbcf760430e90eef569","Icon/crest":"34ff162bb4d850e20268ccbcf760430e90eef569","PorscheIcons/porsche":"7aad3927c40ead8bea419364488f8cd505cbb7ce","Icon/porsche":"7aad3927c40ead8bea419364488f8cd505cbb7ce","PorscheIcons/Extra/play-filled":"23d2bc6ab513a46b9d5bea241f450e42a15fe24b","Icon/Extra/play-filled":"23d2bc6ab513a46b9d5bea241f450e42a15fe24b","PorscheIcons/Extra/success-modified":"c88607b2beccca497d372e4c1b79b4e3f522edb6","Icon/Extra/success-modified":"c88607b2beccca497d372e4c1b79b4e3f522edb6","PorscheIcons/Extra/fail-modified":"e5f4cc740459fcdcd5ee68fba806e47e5f86ecf4","Icon/Extra/fail-modified":"e5f4cc740459fcdcd5ee68fba806e47e5f86ecf4","PorscheIcons/Extra/arrow-head-enter":"3639e7d5da63ff14e3261dcc7973e808894a67be","Icon/Extra/arrow-head-enter":"3639e7d5da63ff14e3261dcc7973e808894a67be","PorscheIcons/Extra/arrow-head-back":"1ea1ee4eb1d7ed442c6e45c762ce0d5b2cd8e762","Icon/Extra/arrow-head-back":"1ea1ee4eb1d7ed442c6e45c762ce0d5b2cd8e762","PorscheIcons/Extra/fail-filled":"0c24631e58c1e7b76fa9e570fab4e5b65848984b","Icon/Extra/fail-filled":"0c24631e58c1e7b76fa9e570fab4e5b65848984b","PorscheIcons/Extra/topic":"bfddfbb5a6ec73be4277206d5380829853155856","Icon/Extra/topic":"bfddfbb5a6ec73be4277206d5380829853155856","PorscheIcons/Extra/Moment":"7a83df89af46d27c84124977ddc89d496356d6bc","Icon/Extra/Moment":"7a83df89af46d27c84124977ddc89d496356d6bc","PorscheIcons/Extra/moment-colored":"e7e8220e260fa88d23430ccd1863821335923231","Icon/Extra/moment-colored":"e7e8220e260fa88d23430ccd1863821335923231","PorscheIcons/Extra/external":"1961479e805d09a21d8e68e247b4e46f767e9b72","Icon/Extra/external":"1961479e805d09a21d8e68e247b4e46f767e9b72","PorscheIcons/Extra/chat-modified":"df8131daf0459a03d92eb7e25cc4cfb9ec912fec","Icon/Extra/chat-modified":"df8131daf0459a03d92eb7e25cc4cfb9ec912fec","PorscheIcons/Extra/heart-modified":"1a36aa67c8d2860aee86e4fd45a9cfa6618f473e","Icon/Extra/heart-modified":"1a36aa67c8d2860aee86e4fd45a9cfa6618f473e","PorscheIcons/Extra/heart-filled-modified":"5e33e949f0bee0967b7ea5df1b3e3e5fd7ed6483","Icon/Extra/heart-filled-modified":"5e33e949f0bee0967b7ea5df1b3e3e5fd7ed6483","PorscheIcons/Extra/alipay-colored":"b657c4ebdc4ecb83455eb3cef380b54c3dd4ca0f","Icon/Extra/alipay-colored":"b657c4ebdc4ecb83455eb3cef380b54c3dd4ca0f","PorscheIcons/Extra/wechatpay-colored":"07f44c273980a8273a5be9648424cfd668aedbc7","Icon/Extra/wechatpay-colored":"07f44c273980a8273a5be9648424cfd668aedbc7","PorscheIcons/Extra/compass-modified":"b65bacba8d0a6786ab7a13bd3c365e5997475074","Icon/Extra/compass-modified":"b65bacba8d0a6786ab7a13bd3c365e5997475074","PorscheIcons/Extra/compass-filled":"6dfbe0028d0b53d19d8f8a2705daa5ef8d6a3bf8","Icon/Extra/compass-filled":"6dfbe0028d0b53d19d8f8a2705daa5ef8d6a3bf8","PorscheIcons/Extra/service":"dd7101c74fd40a5072bde8a5d0c15d4ba1da450e","Icon/Extra/service":"dd7101c74fd40a5072bde8a5d0c15d4ba1da450e","PorscheIcons/Extra/service-filled":"76cabd30c78141fb61c79b58c08b08c1b39723bf","Icon/Extra/service-filled":"76cabd30c78141fb61c79b58c08b08c1b39723bf","PorscheIcons/Extra/car_filled":"7ce69937ae39f8e6ccdb3bc7c2f4238823c1ebf8","Icon/Extra/car_filled":"7ce69937ae39f8e6ccdb3bc7c2f4238823c1ebf8","PorscheIcons/Extra/image-modified":"dc0cbb807dbb1be4e0674036ff7192185a904e0a","Icon/Extra/image-modified":"dc0cbb807dbb1be4e0674036ff7192185a904e0a","PorscheIcons/Extra/image-filled":"e5969caf37553481661eea3a21d84a614369258b","Icon/Extra/image-filled":"e5969caf37553481661eea3a21d84a614369258b","PorscheIcons/ Extra/crest_outline":"ce0663fa16b574eaf4640254c670ad997218f2c7","Icon/ Extra/crest_outline":"ce0663fa16b574eaf4640254c670ad997218f2c7","PorscheIcons/battery-empty":"00af438c6f994f2225bc14fd2b87da37a4ef728a","Icon/battery-empty":"00af438c6f994f2225bc14fd2b87da37a4ef728a","PorscheIcons/battery-lv1":"08952863928ffbd03c36bed56dc35b549257b03b","Icon/battery-lv1":"08952863928ffbd03c36bed56dc35b549257b03b","PorscheIcons/battery-lv2":"ee6e8d7bfcdd4839594c6e69110d5c3b8fcd2d2f","Icon/battery-lv2":"ee6e8d7bfcdd4839594c6e69110d5c3b8fcd2d2f","PorscheIcons/battery-lv3":"91b00e6b12971c93044a23166cad6cd9294052a0","Icon/battery-lv3":"91b00e6b12971c93044a23166cad6cd9294052a0","PorscheIcons/battery-lv4":"6cb3a2e8c02e31a2d46c06372a231add8229c7c9","Icon/battery-lv4":"6cb3a2e8c02e31a2d46c06372a231add8229c7c9","PorscheIcons/battery-lv5":"f62af3fa6bf88d4a22668474552c860d90e3127b","Icon/battery-lv5":"f62af3fa6bf88d4a22668474552c860d90e3127b","PorscheIcons/battery-full":"dc44f635fd5d990dc76b5b264ca25f7012ed6565","Icon/battery-full":"dc44f635fd5d990dc76b5b264ca25f7012ed6565","PorscheIcons/car-battery":"564d60dfea721bb9d85d07b456b7dfd30556bc5d","Icon/car-battery":"564d60dfea721bb9d85d07b456b7dfd30556bc5d","PorscheIcons/charging-active":"ef51575a174a641788f03b3b2ebb5abf164aec08","Icon/charging-active":"ef51575a174a641788f03b3b2ebb5abf164aec08","PorscheIcons/charging-state":"0cdc446c8c0e0ff0a7ccec72ec1e78227d300457","Icon/charging-state":"0cdc446c8c0e0ff0a7ccec72ec1e78227d300457","PorscheIcons/charging-station":"7abfa49022a0803d0cca44f96033fda7037f5603","Icon/charging-station":"7abfa49022a0803d0cca44f96033fda7037f5603","PorscheIcons/flash":"5a982099634112f8c74283d37434622002ab1a4e","Icon/flash":"5a982099634112f8c74283d37434622002ab1a4e","PorscheIcons/plug":"e33e79f56b264c4270d2383d688601b71a8102c4","Icon/plug":"e33e79f56b264c4270d2383d688601b71a8102c4","PorscheIcons/charging-network":"33360e8af3de2979e65b9a7c34982a119ad995a1","Icon/charging-network":"33360e8af3de2979e65b9a7c34982a119ad995a1","PorscheIcons/charging_station_working":"5a4dc580f7436eab3fd136c3e8350f5608d7ee67","Icon/charging_station_working":"5a4dc580f7436eab3fd136c3e8350f5608d7ee67","PorscheIcons/charging_station_warning":"d8d0d8d9dc6babd903ba03d96296cce42a3ff0ed","Icon/charging_station_warning":"d8d0d8d9dc6babd903ba03d96296cce42a3ff0ed","PorscheIcons/voltage":"c9c0631f7df5f8d88fbc790ac8ddbaa860d206f7","Icon/voltage":"c9c0631f7df5f8d88fbc790ac8ddbaa860d206f7","PorscheIcons/Extra/filter-activated":"43fb310598a037a007bd4b03afae99b7b0ac9e65","Icon/Extra/filter-activated":"43fb310598a037a007bd4b03afae99b7b0ac9e65","PorscheIcons/ Extra/rotate":"547ef16e229865c2b4c1731812cf06d2106cfc01","Icon/ Extra/rotate":"547ef16e229865c2b4c1731812cf06d2106cfc01","PorscheIcons/Extra/order":"d49fd0152bd5b47b0b1f71744e9f9996a908ca08","Icon/Extra/order":"d49fd0152bd5b47b0b1f71744e9f9996a908ca08","PorscheIcons/Extra/clean":"aaa54a643ca95b21669657fd6840cd076233303a","Icon/Extra/clean":"aaa54a643ca95b21669657fd6840cd076233303a","PorscheIcons/Extra/flag_filled":"287f89550a78b77b441b5af1e63742c108960a98","Icon/Extra/flag_filled":"287f89550a78b77b441b5af1e63742c108960a98","PorscheIcons/Extra/porsche club china":"218901c42ea55de4fd131b55ba427d1c1fc11060","Icon/Extra/porsche club china":"218901c42ea55de4fd131b55ba427d1c1fc11060","PorscheIcons/Extra/Referral":"053a4baef3676e0c9eccc5ecb01a31aa6bdcfa8c","Icon/Extra/Referral":"053a4baef3676e0c9eccc5ecb01a31aa6bdcfa8c","PorscheIcons/AI-Spark":"e3c99efd0c4099dec2d1fd93ab47319e5277e519","Icon/AI-Spark":"e3c99efd0c4099dec2d1fd93ab47319e5277e519","PorscheIcons/AI-Spark-Filled":"22e4b002f0f343f9608934b9fe9d26727f8ab1be","Icon/AI-Spark-Filled":"22e4b002f0f343f9608934b9fe9d26727f8ab1be","PorscheIcons/AI-Text":"2136627f6100310e39e06695e7186c637fbaddab","Icon/AI-Text":"2136627f6100310e39e06695e7186c637fbaddab","PorscheIcons/AI-Sound":"61c9151d29d491650fdd62a452ce8e858fa80ddd","Icon/AI-Sound":"61c9151d29d491650fdd62a452ce8e858fa80ddd","PorscheIcons/AI-Code":"05cf1f8a1aae13105e1b29f4afed8a956e7b959c","Icon/AI-Code":"05cf1f8a1aae13105e1b29f4afed8a956e7b959c","PorscheIcons/AI-Edit":"b3726589c10c13948352d7ea32b0428a52e0abde","Icon/AI-Edit":"b3726589c10c13948352d7ea32b0428a52e0abde","PorscheIcons/AI-Image":"b6c12a2488c42608a8cd07e75b9e42981aaa0d8e","Icon/AI-Image":"b6c12a2488c42608a8cd07e75b9e42981aaa0d8e","PorscheIcons/AI-Video":"af0434d26b898a6529aa48391f229054280354ac","Icon/AI-Video":"af0434d26b898a6529aa48391f229054280354ac","PorscheIcons/AI-3D-Object":"0ea98aec8c80ef1e9f45c483e83dc24ce1ec8bd1","Icon/AI-3D-Object":"0ea98aec8c80ef1e9f45c483e83dc24ce1ec8bd1","PorscheIcons/AI-Scale":"a0a07e7802db1524811e1771e4c6bfc9847a161e","Icon/AI-Scale":"a0a07e7802db1524811e1771e4c6bfc9847a161e","PorscheIcons/App icon / Logo":"11a2c3a475a456480adcf6667d7c8b3b1cc24b14","Icon/App icon / Logo":"11a2c3a475a456480adcf6667d7c8b3b1cc24b14","PorscheIcons/App icon":"880ca74e32488b4b969e417ac07b0c0b8fe29579","Icon/App icon":"880ca74e32488b4b969e417ac07b0c0b8fe29579","PorscheIcons/Wordmark":"4b2b76774f14b8dd1861aea78d27487791fa9868","Icon/Wordmark":"4b2b76774f14b8dd1861aea78d27487791fa9868","PorscheIcons/Crest":"339c621ecdaa6de312a0229574d80e782388ad18","Icon/Crest":"339c621ecdaa6de312a0229574d80e782388ad18","PorscheIcons/Model Signature":"a0d2c76468599d913ff04ff874c06f8451d1c62b","Icon/Model Signature":"a0d2c76468599d913ff04ff874c06f8451d1c62b"} /* KEYS_END */;

figma.showUI(__html__, { width: 420, height: 560 });

const FONT_FALLBACK = { family: "PingFang SC", style: "Regular" };
let RENDER_DIAGNOSTICS = [];

// Note: the plugin no longer auto-renders on launch.
// The embedded payload is rendered only when you click "Render embedded layout".

figma.ui.onmessage = async (msg) => {
  if (!msg || typeof msg !== "object") {
    return;
  }
  if (msg.type === "ui-ready") {
    figma.ui.postMessage({
      type: "embedded-status",
      hasPayload: Boolean(EMBEDDED_PAYLOAD),
      name:
        EMBEDDED_PAYLOAD && EMBEDDED_PAYLOAD.name ? EMBEDDED_PAYLOAD.name : null,
    });
    return;
  }

  if (msg.type === "render-embedded") {
    if (!EMBEDDED_PAYLOAD) {
      figma.notify("No embedded layout. Run a preset in VS Code first.", {
        error: true,
      });
      return;
    }
    try {
      const root = await renderDocument(EMBEDDED_PAYLOAD);
      figma.currentPage.selection = [root];
      figma.viewport.scrollAndZoomIntoView([root]);
      figma.notify(`Rendered: ${root.name}`);
      figma.ui.postMessage({
        type: "render-ok",
        nodeId: root.id,
        diagnostics: RENDER_DIAGNOSTICS,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      figma.notify(`Render failed: ${message}`, { error: true });
      figma.ui.postMessage({ type: "render-error", message });
    }
    return;
  }

  if (msg.type === "render-json") {
    try {
      const payload =
        typeof msg.payload === "string" ? JSON.parse(msg.payload) : msg.payload;
      const root = await renderDocument(payload);
      figma.currentPage.selection = [root];
      figma.viewport.scrollAndZoomIntoView([root]);
      figma.notify(`Rendered: ${root.name}`);
      figma.ui.postMessage({
        type: "render-ok",
        nodeId: root.id,
        diagnostics: RENDER_DIAGNOSTICS,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      figma.notify(`Render failed: ${message}`, { error: true });
      figma.ui.postMessage({ type: "render-error", message });
    }
    return;
  }

  if (msg.type === "read-keys") {
    const selection = figma.currentPage.selection;
    if (!selection.length) {
      figma.ui.postMessage({
        type: "keys-result",
        keys: [],
        message: "Select one or more components / instances first.",
      });
      return;
    }

    const keys = [];
    for (const node of selection) {
      try {
        if (node.type === "COMPONENT") {
          keys.push({ name: node.name, key: node.key, kind: "COMPONENT" });
        } else if (node.type === "COMPONENT_SET") {
          keys.push({ name: node.name, key: node.key, kind: "COMPONENT_SET" });
        } else if (node.type === "INSTANCE") {
          const main = await node.getMainComponentAsync();
          if (main) {
            const ownerKey =
              main.parent && main.parent.type === "COMPONENT_SET"
                ? main.parent.key
                : main.key;
            keys.push({
              name: node.name,
              key: main.key,
              setKey: ownerKey,
              kind: "INSTANCE_MAIN",
            });
          }
        }
      } catch (error) {
        // Skip nodes whose key cannot be read (e.g. local-only components).
      }
    }

    figma.ui.postMessage({
      type: "keys-result",
      keys,
      message: keys.length
        ? `Found ${keys.length} key(s).`
        : "No library component keys found in selection.",
    });
  }

  if (msg.type === "scan-all-keys") {
    try {
      await figma.loadAllPagesAsync();
    } catch (error) {
      // Older API versions load pages eagerly; ignore if unsupported.
    }

    const components = figma.root.findAllWithCriteria({
      types: ["COMPONENT", "COMPONENT_SET"],
    });

    const dictionary = {};
    let count = 0;

    for (const node of components) {
      // For variants, prefer the COMPONENT_SET entry and skip its children.
      if (
        node.type === "COMPONENT" &&
        node.parent &&
        node.parent.type === "COMPONENT_SET"
      ) {
        continue;
      }

      if (!node.key) {
        continue;
      }

      const name = node.name || `Component ${count + 1}`;
      dictionary[name] = node.key;
      count += 1;
    }

    figma.ui.postMessage({
      type: "scan-result",
      dictionary,
      count,
      message: count
        ? `Scanned ${count} component(s) from this file.`
        : "No published components found. Open the library SOURCE file.",
    });
  }

  if (msg.type === "close") {
    figma.closePlugin();
  }
};

async function renderDocument(doc) {
  RENDER_DIAGNOSTICS = [];
  validateDoc(doc);

  const frame = figma.createFrame();
  frame.name = doc.name || "Generated Layout";

  applyBaseLayout(frame, doc.frame || {});

  if (Array.isArray(doc.nodes)) {
    for (const child of doc.nodes) {
      const node = await renderNode(child);
      frame.appendChild(node);
    }
  }

  figma.currentPage.appendChild(frame);
  frame.x = figma.viewport.center.x - frame.width / 2;
  frame.y = figma.viewport.center.y - frame.height / 2;
  return frame;
}

async function renderNode(spec) {
  if (!spec || typeof spec !== "object") {
    throw new Error("Invalid node specification.");
  }

  switch (spec.type) {
    case "frame": {
      const frame = figma.createFrame();
      frame.name = spec.name || "Frame";
      applyBaseLayout(frame, spec);
      if (Array.isArray(spec.nodes)) {
        for (const child of spec.nodes) {
          const childNode = await renderNode(child);
          frame.appendChild(childNode);
        }
      }
      return frame;
    }

    case "rectangle": {
      const rect = figma.createRectangle();
      rect.name = spec.name || "Rectangle";
      applySize(rect, spec);
      if (typeof spec.cornerRadius === "number") {
        rect.cornerRadius = spec.cornerRadius;
      }
      applyFills(rect, spec.fills);
      applyStroke(rect, spec.stroke);
      return rect;
    }

    case "text": {
      const text = figma.createText();
      text.name = spec.name || "Text";

      const segments = Array.isArray(spec.segments) ? spec.segments : null;
      const firstSegment = segments && segments[0] ? segments[0] : null;
      const fontName = {
        family:
          (firstSegment && firstSegment.fontFamily) ||
          spec.fontFamily ||
          FONT_FALLBACK.family,
        style:
          (firstSegment && firstSegment.fontStyle) ||
          spec.fontStyle ||
          FONT_FALLBACK.style,
      };

      await ensureFont(fontName);
      text.fontName = fontName;

      if (segments) {
        text.characters = segments.map((segment) => String(segment.text || "")).join("");
        let cursor = 0;
        for (const segment of segments) {
          const value = String(segment.text || "");
          const nextCursor = cursor + value.length;
          if (nextCursor > cursor) {
            const segmentFont = {
              family: segment.fontFamily || fontName.family,
              style: segment.fontStyle || fontName.style,
            };
            await ensureFont(segmentFont);
            text.setRangeFontName(cursor, nextCursor, segmentFont);
          }
          cursor = nextCursor;
        }
      } else {
        text.characters = String(spec.characters || "");
      }

      if (typeof spec.fontSize === "number") {
        text.fontSize = spec.fontSize;
      }
      if (typeof spec.lineHeight === "number") {
        text.lineHeight = { unit: "PIXELS", value: spec.lineHeight };
      }
      if (typeof spec.letterSpacing === "number") {
        text.letterSpacing = { unit: "PIXELS", value: spec.letterSpacing };
      }
      if (spec.textAlignHorizontal) {
        text.textAlignHorizontal = spec.textAlignHorizontal;
      }
      if (spec.textAlignVertical) {
        text.textAlignVertical = spec.textAlignVertical;
      }
      if (typeof spec.maxWidth === "number") {
        text.resize(spec.maxWidth, text.height);
        text.textAutoResize = "HEIGHT";
      }

      applyFills(text, spec.fills || [solid("#111827")]);
      return text;
    }

    case "input": {
      return renderInput(spec);
    }

    case "button": {
      return renderButton(spec);
    }

    case "instance": {
      return renderInstance(spec);
    }

    default:
      throw new Error(`Unsupported node type: ${spec.type}`);
  }
}

// Resolve a component instance from the team library. A stored key may point
// to a single COMPONENT or to a COMPONENT_SET (variants). We try component
// lookup first, and on failure fall back to component-set lookup (and the
// reverse with setKey), so the dictionary can hold either kind of key.
async function instantiateFromLibrary(key, setKey, variantProps) {
  const candidates = [];
  if (key) candidates.push(key);
  if (setKey && setKey !== key) candidates.push(setKey);

  let lastError = null;

  for (const candidate of candidates) {
    // Try as a single component.
    try {
      const component = await figma.importComponentByKeyAsync(candidate);
      return component.createInstance();
    } catch (error) {
      lastError = error;
    }

    // Try as a component set (variants).
    try {
      const set = await figma.importComponentSetByKeyAsync(candidate);
      const variant = set.defaultVariant || set.children[0];
      const instance = variant.createInstance();
      if (variantProps) {
        try {
          instance.setProperties(variantProps);
        } catch (error) {
          // Keep default variant if the requested props don't exist.
        }
      }
      return instance;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("No valid component key to import.");
}

async function renderInstance(spec) {
  let key = spec.key;
  let setKey = spec.setKey;
  const localName = spec.localName || spec.use;

  if (spec.use) {
    const resolved = KEY_DICTIONARY[spec.use];
    if (resolved) {
      key = resolved;
      if (!setKey) {
        setKey = resolved;
      }
    }
  }

  if (!key && !localName) {
    throw new Error(
      "instance node requires a 'key' or a 'use' name that exists in component-keys.json."
    );
  }

  let instance;
  try {
    // 1) Local-first: if the component lives in THIS file (e.g. the library
    //    source file), use it directly. No publishing required.
    const local = await findLocalComponent(key, localName);
    if (local) {
      instance = local.createInstance();
    } else {
      if (!key) {
        throw new Error(
          `Unknown component name in 'use': ${spec.use}. Add it to component-keys.json, or keep a local component named ${localName} in the current Figma file.`
        );
      }
      // 2) Team library import. A stored key can refer to either a single
      //    COMPONENT or a COMPONENT_SET (variants). We don't always know
      //    which, so try component first, then fall back to component set.
      const variant =
        spec.variant && typeof spec.variant === "object" ? spec.variant : null;

      instance = await instantiateFromLibrary(key, setKey, variant);
    }
  } catch (error) {
    if (spec.fallback && typeof spec.fallback === "object") {
      return renderNode(spec.fallback);
    }

    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Import failed for ${spec.use || key}: ${reason}. ` +
        `Tip: run the plugin inside the library SOURCE file, or publish the component to the team library.`
    );
  }

  instance.name = spec.name || instance.name;

  if (spec.diagnostics) {
    addInstanceDiagnostics(spec, instance, "before properties");
  }

  if (spec.autoVariant && typeof spec.autoVariant === "object") {
    await applyAutoVariant(instance, spec);
  }

  if (typeof spec.width === "number" && typeof spec.height === "number") {
    instance.resize(spec.width, spec.height);
  } else if (typeof spec.width === "number") {
    instance.resize(spec.width, instance.height);
  }

  if (spec.properties && typeof spec.properties === "object") {
    applyInstanceProperties(instance, spec.properties, spec);
  }

  if (Array.isArray(spec.propertyCandidates)) {
    applyInstancePropertyCandidates(instance, spec.propertyCandidates, spec);
  }

  if (spec.overrides && typeof spec.overrides === "object") {
    await applyTextOverrides(instance, spec.overrides);
  }

  if (spec.diagnostics) {
    addInstanceDiagnostics(spec, instance, "after properties");
  }

  return instance;
}

function cloneComponentProperties(instance) {
  const result = {};
  if (!instance.componentProperties) {
    return result;
  }

  const names = Object.keys(instance.componentProperties);
  for (const name of names) {
    const property = instance.componentProperties[name];
    const snapshot = {};
    if (property && typeof property === "object") {
      snapshot.type = property.type;
      snapshot.value = property.value;
      if (Array.isArray(property.preferredValues)) {
        snapshot.preferredValues = property.preferredValues.map((item) => {
          if (!item || typeof item !== "object") {
            return item;
          }
          return {
            type: item.type,
            name: item.name,
            key: item.key,
          };
        });
      }
    }
    result[name] = snapshot;
  }

  return result;
}

function addInstanceDiagnostics(spec, instance, stage) {
  RENDER_DIAGNOSTICS.push({
    kind: "instance-properties",
    stage,
    name: spec.name || instance.name,
    use: spec.use || null,
    componentProperties: cloneComponentProperties(instance),
  });
}

async function getVariantValues(instance, propertyName) {
  const values = [];

  try {
    const main = await instance.getMainComponentAsync();
    if (!main || !main.parent || main.parent.type !== "COMPONENT_SET") {
      return values;
    }

    for (const child of main.parent.children) {
      if (child.type !== "COMPONENT" || !child.variantProperties) {
        continue;
      }

      const value = child.variantProperties[propertyName];
      if (typeof value === "string") {
        values.push({ value, componentName: child.name });
      }
    }
  } catch (error) {
    // If Figma cannot expose the main component, skip auto variant selection.
  }

  return values;
}

function scoreVariantValue(value, componentName, config) {
  const text = `${value} ${componentName || ""}`.toLowerCase();
  const includes = Array.isArray(config.include) ? config.include : [];
  const prefers = Array.isArray(config.prefer) ? config.prefer : [];
  const excludes = Array.isArray(config.exclude) ? config.exclude : [];

  for (const token of excludes) {
    if (text.includes(String(token).toLowerCase())) {
      return -1000;
    }
  }

  let score = 0;
  for (const token of includes) {
    if (text.includes(String(token).toLowerCase())) {
      score += 10;
    }
  }
  for (const token of prefers) {
    if (text.includes(String(token).toLowerCase())) {
      score += 3;
    }
  }

  return score;
}

async function applyAutoVariant(instance, spec) {
  const config = spec.autoVariant;
  const propertyName = config.property || "Type";
  const values = await getVariantValues(instance, propertyName);
  let best = null;
  let fallback = null;

  for (const item of values) {
    const score = scoreVariantValue(item.value, item.componentName, config);
    if (score > -1000 && !fallback) {
      fallback = {
        value: item.value,
        componentName: item.componentName,
        score,
        fallback: true,
      };
    }
    if (score > 0 && (!best || score > best.score)) {
      best = {
        value: item.value,
        componentName: item.componentName,
        score,
      };
    }
  }

  if (!best) {
    best = fallback;
  }

  if (spec.diagnostics) {
    RENDER_DIAGNOSTICS.push({
      kind: "variant-options",
      name: spec.name || instance.name,
      property: propertyName,
      values,
      selected: best,
    });
  }

  if (!best) {
    return;
  }

  applySingleInstanceProperty(instance, propertyName, best.value, spec);
}

function normalizeComponentPropertyName(name) {
  return String(name)
    .split("#")[0]
    .trim()
    .toLowerCase()
    .replace(/[\s_\-/]+/g, "");
}

function findInstancePropertyName(instance, requestedName) {
  if (!instance.componentProperties) {
    return requestedName;
  }

  const available = Object.keys(instance.componentProperties);
  for (const name of available) {
    if (name === requestedName) {
      return name;
    }
  }

  const normalized = normalizeComponentPropertyName(requestedName);
  for (const name of available) {
    if (normalizeComponentPropertyName(name) === normalized) {
      return name;
    }
  }

  return requestedName;
}

function resolveComponentPropertyValue(value) {
  if (typeof value === "string" && KEY_DICTIONARY[value]) {
    return KEY_DICTIONARY[value];
  }

  return value;
}

function applySingleInstanceProperty(instance, requestedName, value, spec) {
  const propertyName = findInstancePropertyName(instance, requestedName);
  const propertyValue = resolveComponentPropertyValue(value);
  const nextProperties = {};
  nextProperties[propertyName] = propertyValue;

  try {
    instance.setProperties(nextProperties);
    if (spec && spec.diagnostics) {
      RENDER_DIAGNOSTICS.push({
        kind: "property-set",
        name: spec.name || instance.name,
        requestedName,
        resolvedName: propertyName,
        value,
        resolvedValue: propertyValue,
        ok: true,
      });
    }
  } catch (error) {
    if (spec && spec.diagnostics) {
      RENDER_DIAGNOSTICS.push({
        kind: "property-set",
        name: spec.name || instance.name,
        requestedName,
        resolvedName: propertyName,
        value,
        resolvedValue: propertyValue,
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

function applyInstanceProperties(instance, properties, spec) {
  for (const name of Object.keys(properties)) {
    applySingleInstanceProperty(instance, name, properties[name], spec);
  }
}

function asArray(value) {
  return Array.isArray(value) ? value : [value];
}

function applyInstancePropertyCandidates(instance, candidates, spec) {
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") {
      continue;
    }

    const names = candidate.names || candidate.name || candidate.properties || candidate.property;
    const hasValue = Object.prototype.hasOwnProperty.call(candidate, "value");
    const values = hasValue ? candidate.value : candidate.values;

    if (!names || typeof values === "undefined") {
      continue;
    }

    const nameList = asArray(names);
    const valueList = asArray(values);

    for (const name of nameList) {
      for (const value of valueList) {
        applySingleInstanceProperty(instance, name, value, spec);
      }
    }
  }
}

let LOCAL_COMPONENT_INDEX = null;

async function buildLocalComponentIndex() {
  if (LOCAL_COMPONENT_INDEX) {
    return LOCAL_COMPONENT_INDEX;
  }

  try {
    await figma.loadAllPagesAsync();
  } catch (error) {
    // Older API versions load pages eagerly; ignore if unsupported.
  }

  const byKey = new Map();
  const byName = new Map();

  const nodes = figma.root.findAllWithCriteria({
    types: ["COMPONENT", "COMPONENT_SET"],
  });

  for (const node of nodes) {
    // Prefer the COMPONENT_SET; skip variant children to instance the set.
    if (
      node.type === "COMPONENT" &&
      node.parent &&
      node.parent.type === "COMPONENT_SET"
    ) {
      continue;
    }

    if (node.key) {
      byKey.set(node.key, node);
    }
    if (node.name && !byName.has(node.name)) {
      byName.set(node.name, node);
    }
  }

  LOCAL_COMPONENT_INDEX = { byKey, byName };
  return LOCAL_COMPONENT_INDEX;
}

async function findLocalComponent(key, name) {
  const index = await buildLocalComponentIndex();

  // 1) Try by key (works when keys match the current file).
  let node = key ? index.byKey.get(key) : null;

  // 2) Try by full name as given (e.g. exact local name).
  if (!node && name) {
    node = index.byName.get(name);
  }

  // 3) Try by name with the library namespace prefix stripped, e.g.
  //    "PorscheCNV3/Status bar" -> "Status bar". This makes it work in the
  //    library source/draft file even when keys differ from the dictionary.
  if (!node && name && name.includes("/")) {
    const plain = name.slice(name.indexOf("/") + 1);
    node = index.byName.get(plain);
  }

  if (!node) {
    return null;
  }

  // A COMPONENT_SET cannot be instanced directly; use its default variant.
  if (node.type === "COMPONENT_SET") {
    return node.defaultVariant || node.children[0] || null;
  }

  return node;
}

async function applyTextOverrides(instance, overrides) {
  const textNodes = instance.findAllWithCriteria
    ? instance.findAllWithCriteria({ types: ["TEXT"] })
    : instance.findAll((node) => node.type === "TEXT");

  const ordered = Array.isArray(overrides.$texts) ? overrides.$texts : [];
  let orderedIndex = 0;

  for (const textNode of textNodes) {
    let nextValue = null;

    if (Object.prototype.hasOwnProperty.call(overrides, textNode.name)) {
      nextValue = overrides[textNode.name];
    } else if (
      typeof textNode.characters === "string" &&
      Object.prototype.hasOwnProperty.call(overrides, textNode.characters)
    ) {
      nextValue = overrides[textNode.characters];
    } else if (orderedIndex < ordered.length) {
      nextValue = ordered[orderedIndex];
      orderedIndex += 1;
    }

    if (nextValue !== null) {
      try {
        await figma.loadFontAsync(textNode.fontName);
        textNode.characters = String(nextValue);
      } catch (error) {
        // Skip text nodes with mixed/unavailable fonts.
      }
    }
  }
}

async function renderInput(spec) {
  const shell = figma.createFrame();
  shell.name = spec.name || "Input";
  shell.layoutMode = "VERTICAL";
  shell.counterAxisSizingMode = "AUTO";
  shell.primaryAxisSizingMode = "AUTO";
  shell.itemSpacing = 6;

  const label = await renderNode({
    type: "text",
    name: `${shell.name}/Label`,
    characters: spec.label || "Label",
    fontSize: 13,
    fontFamily: spec.labelFontFamily || "PingFang SC",
    fontStyle: "Regular",
    fills: [solid("#374151")],
  });

  const field = figma.createFrame();
  field.name = `${shell.name}/Field`;
  field.layoutMode = "HORIZONTAL";
  field.primaryAxisAlignItems = "MIN";
  field.counterAxisAlignItems = "CENTER";
  field.itemSpacing = 8;
  field.paddingLeft = 12;
  field.paddingRight = 12;
  field.paddingTop = 10;
  field.paddingBottom = 10;
  field.cornerRadius = typeof spec.cornerRadius === "number" ? spec.cornerRadius : 10;
  field.primaryAxisSizingMode = "FIXED";
  field.counterAxisSizingMode = "AUTO";
  field.resize(typeof spec.width === "number" ? spec.width : 320, 44);
  applyFills(field, spec.fills || [solid("#FFFFFF")]);
  applyStroke(field, spec.stroke || { color: "#D1D5DB", weight: 1 });

  const placeholder = await renderNode({
    type: "text",
    name: `${shell.name}/Placeholder`,
    characters: spec.placeholder || "Enter value",
    fontSize: 14,
    fills: [solid("#9CA3AF")],
    fontFamily: spec.placeholderFontFamily || "PingFang SC",
    fontStyle: "Regular",
  });

  field.appendChild(placeholder);
  shell.appendChild(label);
  shell.appendChild(field);
  return shell;
}

async function renderButton(spec) {
  const frame = figma.createFrame();
  frame.name = spec.name || "Button";
  frame.layoutMode = "HORIZONTAL";
  frame.primaryAxisSizingMode = "FIXED";
  frame.counterAxisSizingMode = "AUTO";
  frame.primaryAxisAlignItems = "CENTER";
  frame.counterAxisAlignItems = "CENTER";
  frame.paddingLeft = 16;
  frame.paddingRight = 16;
  frame.paddingTop = 10;
  frame.paddingBottom = 10;
  frame.cornerRadius = typeof spec.cornerRadius === "number" ? spec.cornerRadius : 10;
  frame.itemSpacing = 8;
  frame.resize(typeof spec.width === "number" ? spec.width : 320, typeof spec.height === "number" ? spec.height : 44);

  applyFills(frame, spec.fills || [solid("#111827")]);
  if (spec.stroke) {
    applyStroke(frame, spec.stroke);
  }

  const label = await renderNode({
    type: "text",
    name: `${frame.name}/Label`,
    characters: spec.label || "Button",
    fontSize: 14,
    fontFamily: spec.fontFamily || "PingFang SC",
    fontStyle: spec.fontStyle || "Regular",
    fills: spec.textFills || [solid("#FFFFFF")],
    textAlignHorizontal: "CENTER",
  });

  frame.appendChild(label);
  return frame;
}

function applyBaseLayout(frame, spec) {
  frame.layoutMode = spec.layoutMode || "VERTICAL";

  const width = typeof spec.width === "number" ? spec.width : 100;
  const height = typeof spec.height === "number" ? spec.height : 1;
  frame.resize(width, height);

  frame.primaryAxisSizingMode = spec.primaryAxisSizingMode || "FIXED";
  frame.counterAxisSizingMode = spec.counterAxisSizingMode || "FIXED";

  if (typeof spec.minWidth === "number") {
    frame.minWidth = spec.minWidth;
  }
  if (typeof spec.minHeight === "number") {
    frame.minHeight = spec.minHeight;
  }

  if (typeof spec.padding === "number") {
    frame.paddingTop = spec.padding;
    frame.paddingRight = spec.padding;
    frame.paddingBottom = spec.padding;
    frame.paddingLeft = spec.padding;
  } else {
    frame.paddingTop = typeof spec.paddingTop === "number" ? spec.paddingTop : 0;
    frame.paddingRight = typeof spec.paddingRight === "number" ? spec.paddingRight : 0;
    frame.paddingBottom = typeof spec.paddingBottom === "number" ? spec.paddingBottom : 0;
    frame.paddingLeft = typeof spec.paddingLeft === "number" ? spec.paddingLeft : 0;
  }

  frame.itemSpacing = typeof spec.itemSpacing === "number" ? spec.itemSpacing : 0;
  frame.cornerRadius = typeof spec.cornerRadius === "number" ? spec.cornerRadius : 0;
  frame.primaryAxisAlignItems = spec.primaryAxisAlignItems || "MIN";
  frame.counterAxisAlignItems = spec.counterAxisAlignItems || "MIN";
  frame.clipsContent = Boolean(spec.clipsContent);
  applyFills(frame, spec.fills || [solid("#F9FAFB")]);

  if (spec.stroke) {
    applyStroke(frame, spec.stroke);
  }
}

function applySize(node, spec) {
  const width = typeof spec.width === "number" ? spec.width : 100;
  const height = typeof spec.height === "number" ? spec.height : 100;
  node.resize(width, height);
}

function applyFills(node, fills) {
  if (!Array.isArray(fills) || fills.length === 0) {
    return;
  }

  node.fills = fills.map((fill) => {
    if (fill.type === "SOLID") {
      return {
        type: "SOLID",
        color: hexToRgb(fill.color || "#000000"),
        opacity: typeof fill.opacity === "number" ? fill.opacity : 1,
      };
    }
    return fill;
  });
}

function applyStroke(node, stroke) {
  if (!stroke || typeof stroke !== "object") {
    return;
  }

  const color = stroke.color || "#D1D5DB";
  const weight = typeof stroke.weight === "number" ? stroke.weight : 1;
  node.strokes = [{ type: "SOLID", color: hexToRgb(color), opacity: 1 }];
  node.strokeWeight = weight;
}

function validateDoc(doc) {
  if (!doc || typeof doc !== "object") {
    throw new Error("Document must be an object.");
  }

  if (!Array.isArray(doc.nodes)) {
    throw new Error("Document must include a nodes array.");
  }
}

function solid(color, opacity = 1) {
  return { type: "SOLID", color, opacity };
}

function hexToRgb(hex) {
  const normalized = String(hex).replace("#", "").trim();
  if (![3, 6].includes(normalized.length)) {
    return { r: 0, g: 0, b: 0 };
  }

  const expanded = normalized.length === 3
    ? normalized
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : normalized;

  const intVal = Number.parseInt(expanded, 16);
  return {
    r: ((intVal >> 16) & 255) / 255,
    g: ((intVal >> 8) & 255) / 255,
    b: (intVal & 255) / 255,
  };
}

async function ensureFont(fontName) {
  try {
    await figma.loadFontAsync(fontName);
  } catch (error) {
    await figma.loadFontAsync(FONT_FALLBACK);
  }
}
