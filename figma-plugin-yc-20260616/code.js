// EMBEDDED_PAYLOAD is auto-filled by scripts/generate-layout.mjs.
// When present, the plugin renders it immediately on launch (no paste needed).
const EMBEDDED_PAYLOAD = /* PAYLOAD_START */ {"name":"Porsche 易手车 - 详情页","frame":{"width":375,"height":812,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":0,"minHeight":812,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"clipsContent":false},"nodes":[{"type":"instance","use":"PorscheCNV3/Status bar","name":"Status bar","width":375,"height":44},{"type":"instance","use":"PorscheCNV3/Header","name":"顶部导航","width":375,"height":56,"overrides":{"$texts":["易手车详情"],"Title":"易手车详情","title":"易手车详情","标题不超过八个字符":"易手车详情","Header / Center section":"易手车详情"}},{"type":"frame","name":"内容滚动区","width":375,"height":1,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","clipsContent":false,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"frame","name":"车辆大图","width":375,"height":140,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MAX","counterAxisAlignItems":"MIN","paddingTop":76,"paddingBottom":10,"paddingLeft":16,"paddingRight":16,"itemSpacing":6,"clipsContent":true,"fills":[{"type":"SOLID","color":"#151515","opacity":1}],"nodes":[{"type":"text","name":"车辆图说明","characters":"911 Carrera S · 认证易手车","fontFamily":"Roboto","fontStyle":"Medium","fontSize":13,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"maxWidth":343},{"type":"text","name":"车辆图副标题","characters":"GT 银金属漆 · 上海浦东保时捷中心","fontFamily":"Roboto","fontStyle":"Regular","fontSize":11,"fills":[{"type":"SOLID","color":"#D1D5DB","opacity":1}],"maxWidth":343}]},{"type":"frame","name":"标题区","width":375,"height":1,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":7,"paddingTop":12,"paddingBottom":12,"paddingLeft":16,"paddingRight":16,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"text","name":"车型名称","characters":"Porsche 911 Carrera S","fontFamily":"Roboto","fontStyle":"Bold","fontSize":20,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"maxWidth":343},{"type":"frame","name":"标签行","width":343,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":8,"fills":[],"nodes":[{"type":"instance","use":"PorscheCNV3/Tag-VIP","name":"官方认证","overrides":{"$texts":["官方认证"],"Label":"官方认证","label":"官方认证","标签":"官方认证"}},{"type":"instance","use":"PorscheCNV3/Tag","name":"质保标签","overrides":{"$texts":["2年原厂质保"],"Label":"2年原厂质保","label":"2年原厂质保","标签":"2年原厂质保"}}]},{"type":"text","name":"价格","characters":"¥ 1,288,000","fontFamily":"Roboto","fontStyle":"Bold","fontSize":22,"fills":[{"type":"SOLID","color":"#C8102E","opacity":1}],"maxWidth":343}]},{"type":"frame","name":"质保Banner","width":375,"height":1,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":12,"paddingTop":14,"paddingBottom":14,"paddingLeft":16,"paddingRight":16,"fills":[{"type":"SOLID","color":"#F4F1EA","opacity":1}],"nodes":[{"type":"frame","name":"质保图标","width":32,"height":32,"layoutMode":"VERTICAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"CENTER","cornerRadius":16,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"nodes":[{"type":"text","name":"质保图标文字","characters":"P","fontFamily":"Roboto","fontStyle":"Bold","fontSize":15,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"textAlignHorizontal":"CENTER"}]},{"type":"frame","name":"质保文案","width":299,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"质保标题","characters":"Porsche Approved 官方认证质保","fontFamily":"Roboto","fontStyle":"Bold","fontSize":13,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"maxWidth":295},{"type":"text","name":"质保说明","characters":"享 111 项检测与最长 2 年原厂延保服务","fontFamily":"Roboto","fontStyle":"Regular","fontSize":11,"fills":[{"type":"SOLID","color":"#5F5A50","opacity":1}],"maxWidth":295}]}]},{"type":"instance","use":"PorscheCNV3/Divider","name":"分割线1","width":375,"height":1},{"type":"frame","name":"关键参数","width":375,"height":50,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"SPACE_BETWEEN","counterAxisAlignItems":"CENTER","paddingTop":8,"paddingBottom":8,"paddingLeft":16,"paddingRight":16,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}],"nodes":[{"type":"frame","name":"参数-里程","layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"里程-值","characters":"1.2 万公里","fontFamily":"Roboto","fontStyle":"Bold","fontSize":16,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"textAlignHorizontal":"CENTER"},{"type":"text","name":"里程-名","characters":"里程","fontFamily":"Roboto","fontStyle":"Regular","fontSize":12,"fills":[{"type":"SOLID","color":"#6B6B6B","opacity":1}],"textAlignHorizontal":"CENTER"}]},{"type":"frame","name":"参数-年份","layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"年份-值","characters":"2022 款","fontFamily":"Roboto","fontStyle":"Bold","fontSize":16,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"textAlignHorizontal":"CENTER"},{"type":"text","name":"年份-名","characters":"年份","fontFamily":"Roboto","fontStyle":"Regular","fontSize":12,"fills":[{"type":"SOLID","color":"#6B6B6B","opacity":1}],"textAlignHorizontal":"CENTER"}]},{"type":"frame","name":"参数-排量","layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"排量-值","characters":"3.0T","fontFamily":"Roboto","fontStyle":"Bold","fontSize":16,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"textAlignHorizontal":"CENTER"},{"type":"text","name":"排量-名","characters":"排量","fontFamily":"Roboto","fontStyle":"Regular","fontSize":12,"fills":[{"type":"SOLID","color":"#6B6B6B","opacity":1}],"textAlignHorizontal":"CENTER"}]}]},{"type":"instance","use":"PorscheCNV3/Divider","name":"分割线2","width":375,"height":1},{"type":"instance","use":"PorscheCNV3/Text List","name":"配置标题","width":375,"height":40,"overrides":{"$texts":["车辆配置",""],"Title":"车辆配置","title":"车辆配置","列表名称":"车辆配置","Content":"","content":"","内容":""}},{"type":"instance","use":"PorscheCNV3/Text List","name":"配置项-外观","width":375,"height":56,"overrides":{"$texts":["外观颜色","GT 银金属漆"],"Title":"外观颜色","title":"外观颜色","列表名称":"外观颜色","Content":"GT 银金属漆","content":"GT 银金属漆","内容":"GT 银金属漆"}},{"type":"instance","use":"PorscheCNV3/Text List","name":"配置项-内饰","width":375,"height":56,"overrides":{"$texts":["内饰","黑色真皮"],"Title":"内饰","title":"内饰","列表名称":"内饰","Content":"黑色真皮","content":"黑色真皮","内容":"黑色真皮"}},{"type":"instance","use":"PorscheCNV3/Text List","name":"配置项-驱动","width":375,"height":56,"overrides":{"$texts":["驱动方式","后轮驱动"],"Title":"驱动方式","title":"驱动方式","列表名称":"驱动方式","Content":"后轮驱动","content":"后轮驱动","内容":"后轮驱动"}},{"type":"instance","use":"PorscheCNV3/Text List","name":"配置项-变速","width":375,"height":56,"overrides":{"$texts":["变速箱","8速 PDK"],"Title":"变速箱","title":"变速箱","列表名称":"变速箱","Content":"8速 PDK","content":"8速 PDK","内容":"8速 PDK"}},{"type":"instance","use":"PorscheCNV3/Divider","name":"分割线3","width":375,"height":1},{"type":"frame","name":"经销商卡","width":375,"height":64,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":12,"paddingTop":8,"paddingBottom":8,"paddingLeft":16,"paddingRight":16,"fills":[{"type":"SOLID","color":"#F7F7F7","opacity":1}],"nodes":[{"type":"instance","use":"PorscheCNV3/Crest","name":"经销商标识","width":40,"height":48},{"type":"frame","name":"经销商文本","width":291,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":4,"fills":[],"nodes":[{"type":"text","name":"经销商名称","characters":"保时捷中心 · 上海浦东","fontFamily":"Roboto","fontStyle":"Medium","fontSize":15,"fills":[{"type":"SOLID","color":"#0A0A0A","opacity":1}],"maxWidth":291},{"type":"text","name":"经销商地址","characters":"上海市浦东新区世纪大道 100 号","fontFamily":"Roboto","fontStyle":"Regular","fontSize":13,"fills":[{"type":"SOLID","color":"#6B6B6B","opacity":1}],"maxWidth":291}]}]},{"type":"rectangle","name":"内容底部留白","width":375,"height":12,"fills":[{"type":"SOLID","color":"#FFFFFF","opacity":1}]}]},{"type":"instance","use":"PorscheCNV3/Tool Bar","name":"底部操作栏","width":375,"height":64,"overrides":{"$texts":["预约看车"],"Button":"预约看车","button":"预约看车","确认":"预约看车","Tool Bar / Button":"预约看车"}},{"type":"instance","use":"PorscheCNV3/Home Indicator","name":"Home Indicator","width":375,"height":34}]} /* PAYLOAD_END */;

// KEY_DICTIONARY maps component names to team-library keys.
// Auto-filled from component-keys.json by scripts/generate-layout.mjs.
const KEY_DICTIONARY = /* KEYS_START */ {"色号list":"94a8cdd77d3940167c77af03a062e7b54a1ae24a","Action sheet":"82df72b324b84d0d2320a33a7116181ec88f5c0d","Action sheet - simple / Cell":"deb8828cdb0c285e594f911af337d7584075642e","Action sheet - simple":"e901a55c12bcc6854c51faaf1780285289164a50","Accordion":"efa00fec4fda4b43b5151f7270288afe1301d4e4","App icon / Logo":"8540fb3840d1ddf37e99fc4e12e4d0b600da3772","App icon":"ac02ccf5a9c152a57f27491885e02b45ae72a0c5","Badge":"2613a9cdc6624890b8581a384ae2eef7530f6f24","Badge with icon":"163902987c4289ec9f8650b612ca91aee9b8a8a0","Button":"83996d4ef6d1a243937ccded83cae8e824b5ce49","Button pure":"3b459e3e2e6cefc62a93845f6582f4838e53570a","Checkbox":"3fd6f93fac4412612350f688988d27aa6685c50f","Indicator":"e6c78bd3c31399f2ec4856f61f3ad6b58704afa6","Content":"71d740c3a99a7e299370095cdc4bdbd35450b018","Carousel":"87a911dc05d375500d78668e603a4de79a7dfbf0","Image area":"456389577b693ab1003471c61e73c1c6455b7a17","Chips":"eaaaa4055acff1bb619e752b3453a25d1130ad33","Chips / Icon":"0333ff8a24c382decce72f33e296b3da4b15c3a0","Chips / Text":"923c7ac837cbe4ccbe5d403643746770fa4a0dd8","State Stamp":"cef5bcb71c615ecd4f4f7e4fb4c646b4b9390c05","Coupon":"3a30a516782dae8e6e5501493e6b1b601ee9669d","Wordmark":"e385869946e50aebfb3fab20a144dd3a95657af0","Crest":"7270a1e57d9deb2bd9b366a5ef3a18d2786319cd","Date Picker/Date":"f23ce52c033b54820480eea2495b1798b44ec660","Date Picker":"e5da397378b3e53c2bead7decf96f03a3c474f8a","Date Picker/Month":"953d724e76b6c82a562a259ec95d69866be7228c","Date Picker/Year":"a35f1b0a902b4fb607cf121e335d1e8ab3e26f38","Dialogs / Button":"d42b8dce7e29b980d48792163e9bd45c26e72ba7","Dialogs":"09d792432e00e426de993eb1846be26230ca7614","Divider":"0f670d4b90df02c181cffb538ba2f1fb22be4c7e","Dropdown":"155fcdee9fd1c94441eee013b07795d510b6d7bc","Dropdown / cell":"b8d92856d6bc0a7e027e961448898e4c9c1bf77d","Floating button":"7ec40251fe695711119385b1eecb4cea8eb27397","Header":"fcefa21479c4be754d2b53c3074d05db42c5e0b8","Header / Left section":"3344c4462e24334eb09a1431dbf3208b3b5641cc","Header / Right section":"6ca09d7c8e6db87e11c247dfcc2370c4540e8db1","Header / Center section":"79f47335c33f39d22c3159763aa7da47d7cd668b","Header-Multilayer":"77e3f5713e281898b3efbeca3d7b9e2b27e7070f","Status bar":"b73363d6b321871527b52c9d744b4cccd63ac73f","Input":"a54c62858c2e45f62c111a07c6065ba426fd4d09","Input label":"125c1e439d9529f589d6674bab2f04d46d2ebdbe","Keyboard":"c5356bf215ad6120689f49dee39f3d032dbdd26f","Model Signature":"b05fd8ce3517f41b75235b695d0a93fe7d8a73cc","Notice bar":"dbfbc5fbc134114757f1ea882fbaa53dd9badd7c","Topbar notification":"7281ba057d49a2a794c6195a4269a936a2f3afbe","Snackbar":"ed6360ed00a0c76054fb22653355b8529d7d8668","Popover":"2b409a374b1ef9ae7e9282c026711b72b5cd0348","Radio":"0bb70b38e7f1666a159445044f63036feba9f4a2","Search field":"943cd7971e6ba46d105cdcf75c43f4b88d48df19","select":"483e7f8f6cb2ff775399940fc070cb655102b463","ScrollView":"48febf842dfeb767ff7cf73a906e20a6ba28da60","Share":"5dadf6400e6e169642bde0d89fcf3cd046137c48","Share / Cell":"faa44126e74931214250a7cb5f4fc2a90628a92f","Icon+text":"68635c509934efcd6a58f287c366a7b20982cbe2","Slider 1":"2d08f2bcb6c41f6eaa83744127512500b7e412b3","Slider 1 / Pure slider":"86e77b801e2fce1825e6de9bbc5afc48a3cd4b41","Slider 2":"22c13dd5bcf4799a446895ca27a1e42b2afa782b","spinner":"83edf4b1ef94df6c07d5a68aa7082c7e8488586f","Switch":"9da3ef15542c925552e5f0aee0004604cc5df5af","Tag":"b9d202cfa1bccee0d2c9fd0e32235599703b46eb","Tag-Light":"8eb61b8395c8bb8527f398afe23e2b1d0791315a","Tag-VIP":"a6e9aae14f087450eebac1be365bcdff419257e6","Tabs":"e42241cd4b8d3c422bb47bcfbab322f81c08e308","Tabs / Icon":"8a2f7e10144284f3ad65b38cb98a7f32b89b4e36","Tabs icon":"00f137104a804c987456e86c85521f2da303037d","Tabs / Text":"5ffc7e714de834ef9ab0279f72ddeebe6977e550","Tab Bar":"d23dc47667af73532644cf5bb367b9cd15343b97","Tab Bar / Bar":"71613f1965ea4c2d843addf66886ebbdfced9c0c","Text List":"19d3d693b38c7563606ab51c05db31f5e3d77618","Text list / Content":"d57340e3f95b459dfcb2c1ed2fab17f7a4532a08","Text list / Title":"d07cb83d093080670d7c825adc3ac14490ea7ccf","Text List-Cell":"f786f841222b4398e01ff715fc701061f0187828","Textarea":"f7cb967a91cbdbc5a658f69679b661fabc4257f9","Toast":"50ffec7839f444f7e8628f218a4eaac4883c9562","Tool Bar":"87fb71272b9e917544deecda548222779a085f25","Tool Bar / Action icon":"19731e94bc0e64971abc8348e5f96f76c83f7366","Tool Bar / Info":"56d24886d0cee5951ae49b4963fceef0fb505ec4","Tool Bar / Button":"cccfa037245d77996170638ef57725b6d4b9963d","Tool Bar-Small":"be9a825fb040a6cd3368794ec69ebdc8f9edb12e","Tool Bar-Small  / Action icon":"3888ca82d7a7a164025d373afaa360507c37d836","Tool Bar-Small  / Button":"971a63187dc8b2f798a7a9c1a2f3a5a5e47c7bdf","Home Indicator":"07959b0b098f9e8671f18858c9f6f61eaec15cc4","Wheel Picker":"d7256a80007e398c0ad8b2c4e650bb869643faac","Empty state":"8bb11ec88372de20dd5f769b5625e06ac3d4425e","illustration_BP/noContent":"7653f6388d5ae5f4dc98b747f6925ca68e3380ce","illustration_BP/ended":"c57e29ef0c16a98201e99b1f24698a508249db7d","illustration_BP/car":"3812389b90d414be8d8a61097ada9c78a90a6cff","illustration_BP/noCoupons":"99f069a379c83b7987a1d990ddd8e97021c415d9","illustration_BP/shoppingCart":"722ddd9a926f91ed47a93cdaf7d9b7486629042c","illustration_BP/noSearchResults":"13af3c8e80cbdaf2a600c835e3ff5edf5d9a2cd7","illustration_BP/address":"c59e5ab9a17ce982976e5f8f6cfaad09505226bc","illustration_BP/browsing":"749e3402db774168e206f2973656e5b1da2b5860","illustration_BP/successed":"f41c06528b1b8f63f1012642d55ef8b4198272f3","illustration_BP/abnormal":"c8e34ee2273d9506b41344db3a112ce4f5187bef","illustration_BP/gift":"ace3b735111f02c8c4d3692d6962edb36411146c","illustration_BP/vehicle accessories":"1750d0e209060f79ee1710757d0a5c8123b2b068","illustration_BP/dealer":"85ab62280d3cac724a211337cbd9a0eabf4fc0c9","illustration_BP/rankingList":"b14563d7195c50d3e5f439342f392dd09928fcb8","illustration_BP/noComment":"8fcabbf4d4662b753a4c93892451122f2f80231b","illustration_BP/noGolf":"09e6f95a9e2e6b73e54b61a3b9fbce16d54b05c6","illustration_BP/alert":"9b9b407d0180619b6b359f8ffa9548cf0bbb7a84","illustration_BP/noNetwork":"9bf3d9545cf97b38ed4d92c2ea17e4bf8c2550b6","illustration_BP/noApplication":"bf1fd23d52093d73d78c0f71470965ff09e12cd4","illustration_BP/reservation":"0abed40e4392e073680bea7d6dff5bd0e5879f54","illustration_BP/noEvent":"d4f34874eaca92e4aea3246e4bba08b88b1d8162","illustration_BP/noOrder":"4ca94a16a96d330362442bb377f4addc4457c493","illustration_BP/noLikes":"fbac0f4f5777332554db36b22d51d612b8161250","illustration_BP/login":"15d575d6c929de70f95e013026d6722bf990c549","illustration_BP/noFollow":"400a5f237d191f196361c9b0f382b9d883f629be","illustration_BP/noFans":"816e64d5590a349a572d2758d6835e47c267d3e1","illustration_BP/noDraft":"e032b8def769829d97165e24d186059979cbe1f5","illustration_BP/noInvoiceHeader":"3dfaaea4f84a3e7d7b16905d34680034edb29415","PorscheCNV3/色号list":"94a8cdd77d3940167c77af03a062e7b54a1ae24a","PorscheCNV3/Action sheet":"82df72b324b84d0d2320a33a7116181ec88f5c0d","PorscheCNV3/Action sheet - simple / Cell":"deb8828cdb0c285e594f911af337d7584075642e","PorscheCNV3/Action sheet - simple":"e901a55c12bcc6854c51faaf1780285289164a50","PorscheCNV3/Accordion":"efa00fec4fda4b43b5151f7270288afe1301d4e4","PorscheCNV3/App icon / Logo":"8540fb3840d1ddf37e99fc4e12e4d0b600da3772","PorscheCNV3/App icon":"ac02ccf5a9c152a57f27491885e02b45ae72a0c5","PorscheCNV3/Badge":"2613a9cdc6624890b8581a384ae2eef7530f6f24","PorscheCNV3/Badge with icon":"163902987c4289ec9f8650b612ca91aee9b8a8a0","PorscheCNV3/Button":"83996d4ef6d1a243937ccded83cae8e824b5ce49","PorscheCNV3/Button pure":"3b459e3e2e6cefc62a93845f6582f4838e53570a","PorscheCNV3/Checkbox":"3fd6f93fac4412612350f688988d27aa6685c50f","PorscheCNV3/Indicator":"e6c78bd3c31399f2ec4856f61f3ad6b58704afa6","PorscheCNV3/Content":"71d740c3a99a7e299370095cdc4bdbd35450b018","PorscheCNV3/Carousel":"87a911dc05d375500d78668e603a4de79a7dfbf0","PorscheCNV3/Image area":"456389577b693ab1003471c61e73c1c6455b7a17","PorscheCNV3/Chips":"eaaaa4055acff1bb619e752b3453a25d1130ad33","PorscheCNV3/Chips / Icon":"0333ff8a24c382decce72f33e296b3da4b15c3a0","PorscheCNV3/Chips / Text":"923c7ac837cbe4ccbe5d403643746770fa4a0dd8","PorscheCNV3/State Stamp":"cef5bcb71c615ecd4f4f7e4fb4c646b4b9390c05","PorscheCNV3/Coupon":"3a30a516782dae8e6e5501493e6b1b601ee9669d","PorscheCNV3/Wordmark":"e385869946e50aebfb3fab20a144dd3a95657af0","PorscheCNV3/Crest":"7270a1e57d9deb2bd9b366a5ef3a18d2786319cd","PorscheCNV3/Date Picker/Date":"f23ce52c033b54820480eea2495b1798b44ec660","PorscheCNV3/Date Picker":"e5da397378b3e53c2bead7decf96f03a3c474f8a","PorscheCNV3/Date Picker/Month":"953d724e76b6c82a562a259ec95d69866be7228c","PorscheCNV3/Date Picker/Year":"a35f1b0a902b4fb607cf121e335d1e8ab3e26f38","PorscheCNV3/Dialogs / Button":"d42b8dce7e29b980d48792163e9bd45c26e72ba7","PorscheCNV3/Dialogs":"09d792432e00e426de993eb1846be26230ca7614","PorscheCNV3/Divider":"0f670d4b90df02c181cffb538ba2f1fb22be4c7e","PorscheCNV3/Dropdown":"155fcdee9fd1c94441eee013b07795d510b6d7bc","PorscheCNV3/Dropdown / cell":"b8d92856d6bc0a7e027e961448898e4c9c1bf77d","PorscheCNV3/Floating button":"7ec40251fe695711119385b1eecb4cea8eb27397","PorscheCNV3/Header":"fcefa21479c4be754d2b53c3074d05db42c5e0b8","PorscheCNV3/Header / Left section":"3344c4462e24334eb09a1431dbf3208b3b5641cc","PorscheCNV3/Header / Right section":"6ca09d7c8e6db87e11c247dfcc2370c4540e8db1","PorscheCNV3/Header / Center section":"79f47335c33f39d22c3159763aa7da47d7cd668b","PorscheCNV3/Header-Multilayer":"77e3f5713e281898b3efbeca3d7b9e2b27e7070f","PorscheCNV3/Status bar":"b73363d6b321871527b52c9d744b4cccd63ac73f","PorscheCNV3/Input":"a54c62858c2e45f62c111a07c6065ba426fd4d09","PorscheCNV3/Input label":"125c1e439d9529f589d6674bab2f04d46d2ebdbe","PorscheCNV3/Keyboard":"c5356bf215ad6120689f49dee39f3d032dbdd26f","PorscheCNV3/Model Signature":"b05fd8ce3517f41b75235b695d0a93fe7d8a73cc","PorscheCNV3/Notice bar":"dbfbc5fbc134114757f1ea882fbaa53dd9badd7c","PorscheCNV3/Topbar notification":"7281ba057d49a2a794c6195a4269a936a2f3afbe","PorscheCNV3/Snackbar":"ed6360ed00a0c76054fb22653355b8529d7d8668","PorscheCNV3/Popover":"2b409a374b1ef9ae7e9282c026711b72b5cd0348","PorscheCNV3/Radio":"0bb70b38e7f1666a159445044f63036feba9f4a2","PorscheCNV3/Search field":"943cd7971e6ba46d105cdcf75c43f4b88d48df19","PorscheCNV3/select":"483e7f8f6cb2ff775399940fc070cb655102b463","PorscheCNV3/ScrollView":"48febf842dfeb767ff7cf73a906e20a6ba28da60","PorscheCNV3/Share":"5dadf6400e6e169642bde0d89fcf3cd046137c48","PorscheCNV3/Share / Cell":"faa44126e74931214250a7cb5f4fc2a90628a92f","PorscheCNV3/Icon+text":"68635c509934efcd6a58f287c366a7b20982cbe2","PorscheCNV3/Slider 1":"2d08f2bcb6c41f6eaa83744127512500b7e412b3","PorscheCNV3/Slider 1 / Pure slider":"86e77b801e2fce1825e6de9bbc5afc48a3cd4b41","PorscheCNV3/Slider 2":"22c13dd5bcf4799a446895ca27a1e42b2afa782b","PorscheCNV3/spinner":"83edf4b1ef94df6c07d5a68aa7082c7e8488586f","PorscheCNV3/Switch":"9da3ef15542c925552e5f0aee0004604cc5df5af","PorscheCNV3/Tag":"b9d202cfa1bccee0d2c9fd0e32235599703b46eb","PorscheCNV3/Tag-Light":"8eb61b8395c8bb8527f398afe23e2b1d0791315a","PorscheCNV3/Tag-VIP":"a6e9aae14f087450eebac1be365bcdff419257e6","PorscheCNV3/Tabs":"e42241cd4b8d3c422bb47bcfbab322f81c08e308","PorscheCNV3/Tabs / Icon":"8a2f7e10144284f3ad65b38cb98a7f32b89b4e36","PorscheCNV3/Tabs icon":"00f137104a804c987456e86c85521f2da303037d","PorscheCNV3/Tabs / Text":"5ffc7e714de834ef9ab0279f72ddeebe6977e550","PorscheCNV3/Tab Bar":"d23dc47667af73532644cf5bb367b9cd15343b97","PorscheCNV3/Tab Bar / Bar":"71613f1965ea4c2d843addf66886ebbdfced9c0c","PorscheCNV3/Text List":"19d3d693b38c7563606ab51c05db31f5e3d77618","PorscheCNV3/Text list / Content":"d57340e3f95b459dfcb2c1ed2fab17f7a4532a08","PorscheCNV3/Text list / Title":"d07cb83d093080670d7c825adc3ac14490ea7ccf","PorscheCNV3/Text List-Cell":"f786f841222b4398e01ff715fc701061f0187828","PorscheCNV3/Textarea":"f7cb967a91cbdbc5a658f69679b661fabc4257f9","PorscheCNV3/Toast":"50ffec7839f444f7e8628f218a4eaac4883c9562","PorscheCNV3/Tool Bar":"87fb71272b9e917544deecda548222779a085f25","PorscheCNV3/Tool Bar / Action icon":"19731e94bc0e64971abc8348e5f96f76c83f7366","PorscheCNV3/Tool Bar / Info":"56d24886d0cee5951ae49b4963fceef0fb505ec4","PorscheCNV3/Tool Bar / Button":"cccfa037245d77996170638ef57725b6d4b9963d","PorscheCNV3/Tool Bar-Small":"be9a825fb040a6cd3368794ec69ebdc8f9edb12e","PorscheCNV3/Tool Bar-Small  / Action icon":"3888ca82d7a7a164025d373afaa360507c37d836","PorscheCNV3/Tool Bar-Small  / Button":"971a63187dc8b2f798a7a9c1a2f3a5a5e47c7bdf","PorscheCNV3/Home Indicator":"07959b0b098f9e8671f18858c9f6f61eaec15cc4","PorscheCNV3/Wheel Picker":"d7256a80007e398c0ad8b2c4e650bb869643faac","PorscheCNV3/Empty state":"8bb11ec88372de20dd5f769b5625e06ac3d4425e","PorscheCNV3/illustration_BP/noContent":"7653f6388d5ae5f4dc98b747f6925ca68e3380ce","PorscheCNV3/illustration_BP/ended":"c57e29ef0c16a98201e99b1f24698a508249db7d","PorscheCNV3/illustration_BP/car":"3812389b90d414be8d8a61097ada9c78a90a6cff","PorscheCNV3/illustration_BP/noCoupons":"99f069a379c83b7987a1d990ddd8e97021c415d9","PorscheCNV3/illustration_BP/shoppingCart":"722ddd9a926f91ed47a93cdaf7d9b7486629042c","PorscheCNV3/illustration_BP/noSearchResults":"13af3c8e80cbdaf2a600c835e3ff5edf5d9a2cd7","PorscheCNV3/illustration_BP/address":"c59e5ab9a17ce982976e5f8f6cfaad09505226bc","PorscheCNV3/illustration_BP/browsing":"749e3402db774168e206f2973656e5b1da2b5860","PorscheCNV3/illustration_BP/successed":"f41c06528b1b8f63f1012642d55ef8b4198272f3","PorscheCNV3/illustration_BP/abnormal":"c8e34ee2273d9506b41344db3a112ce4f5187bef","PorscheCNV3/illustration_BP/gift":"ace3b735111f02c8c4d3692d6962edb36411146c","PorscheCNV3/illustration_BP/vehicle accessories":"1750d0e209060f79ee1710757d0a5c8123b2b068","PorscheCNV3/illustration_BP/dealer":"85ab62280d3cac724a211337cbd9a0eabf4fc0c9","PorscheCNV3/illustration_BP/rankingList":"b14563d7195c50d3e5f439342f392dd09928fcb8","PorscheCNV3/illustration_BP/noComment":"8fcabbf4d4662b753a4c93892451122f2f80231b","PorscheCNV3/illustration_BP/noGolf":"09e6f95a9e2e6b73e54b61a3b9fbce16d54b05c6","PorscheCNV3/illustration_BP/alert":"9b9b407d0180619b6b359f8ffa9548cf0bbb7a84","PorscheCNV3/illustration_BP/noNetwork":"9bf3d9545cf97b38ed4d92c2ea17e4bf8c2550b6","PorscheCNV3/illustration_BP/noApplication":"bf1fd23d52093d73d78c0f71470965ff09e12cd4","PorscheCNV3/illustration_BP/reservation":"0abed40e4392e073680bea7d6dff5bd0e5879f54","PorscheCNV3/illustration_BP/noEvent":"d4f34874eaca92e4aea3246e4bba08b88b1d8162","PorscheCNV3/illustration_BP/noOrder":"4ca94a16a96d330362442bb377f4addc4457c493","PorscheCNV3/illustration_BP/noLikes":"fbac0f4f5777332554db36b22d51d612b8161250","PorscheCNV3/illustration_BP/login":"15d575d6c929de70f95e013026d6722bf990c549","PorscheCNV3/illustration_BP/noFollow":"400a5f237d191f196361c9b0f382b9d883f629be","PorscheCNV3/illustration_BP/noFans":"816e64d5590a349a572d2758d6835e47c267d3e1","PorscheCNV3/illustration_BP/noDraft":"e032b8def769829d97165e24d186059979cbe1f5","PorscheCNV3/illustration_BP/noInvoiceHeader":"3dfaaea4f84a3e7d7b16905d34680034edb29415"} /* KEYS_END */;

figma.showUI(__html__, { width: 420, height: 560 });

const FONT_FALLBACK = { family: "Roboto", style: "Regular" };

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
      figma.ui.postMessage({ type: "render-ok", nodeId: root.id });
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
      figma.ui.postMessage({ type: "render-ok", nodeId: root.id });
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

      const fontName = {
        family: spec.fontFamily || FONT_FALLBACK.family,
        style: spec.fontStyle || FONT_FALLBACK.style,
      };

      await ensureFont(fontName);
      text.fontName = fontName;
      text.characters = String(spec.characters || "");

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

  if (spec.use) {
    const resolved = KEY_DICTIONARY[spec.use];
    if (!resolved) {
      throw new Error(
        `Unknown component name in 'use': ${spec.use}. Add it to component-keys.json and rerun.`
      );
    }
    key = resolved;
    if (!setKey) {
      setKey = resolved;
    }
  }

  if (!key) {
    throw new Error(
      "instance node requires a 'key' or a 'use' name that exists in component-keys.json."
    );
  }

  let instance;
  try {
    // 1) Local-first: if the component lives in THIS file (e.g. the library
    //    source file), use it directly. No publishing required.
    const local = await findLocalComponent(key, spec.use);
    if (local) {
      instance = local.createInstance();
    } else {
      // 2) Team library import. A stored key can refer to either a single
      //    COMPONENT or a COMPONENT_SET (variants). We don't always know
      //    which, so try component first, then fall back to component set.
      const variant =
        spec.variant && typeof spec.variant === "object" ? spec.variant : null;

      instance = await instantiateFromLibrary(key, setKey, variant);
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Import failed for ${spec.use || key}: ${reason}. ` +
        `Tip: run the plugin inside the library SOURCE file, or publish the component to the team library.`
    );
  }

  instance.name = spec.name || instance.name;

  if (typeof spec.width === "number" && typeof spec.height === "number") {
    instance.resize(spec.width, spec.height);
  } else if (typeof spec.width === "number") {
    instance.resize(spec.width, instance.height);
  }

  if (spec.properties && typeof spec.properties === "object") {
    try {
      instance.setProperties(spec.properties);
    } catch (error) {
      // Ignore properties that do not exist on this component.
    }
  }

  if (spec.overrides && typeof spec.overrides === "object") {
    await applyTextOverrides(instance, spec.overrides);
  }

  return instance;
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
    fontFamily: spec.labelFontFamily || "Roboto",
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
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontStyle: "Medium",
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
