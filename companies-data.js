const companies = [
    // 能源赛道 - 光伏
    { 
        id: 'longi', 
        name: '隆基绿能', 
        code: '601012', 
        sectorId: 'energy',
        subsector: '光伏',
        marketCap: 230,
        desc: '全球最大的单晶硅片制造商，光伏产业链核心企业。',
        website: 'https://www.longi.com'
    },
    { 
        id: 'solarpower', 
        name: '阳光电源', 
        code: '300274', 
        sectorId: 'energy',
        subsector: '光伏',
        marketCap: 95,
        desc: '全球领先的光伏逆变器供应商，同时布局储能领域。',
        website: 'https://www.sungrowpower.com'
    },
    { 
        id: 'tongwei', 
        name: '通威股份', 
        code: '600438', 
        sectorId: 'energy',
        subsector: '光伏',
        marketCap: 120,
        desc: '全球最大的太阳能电池片制造商，光伏产业链领军企业。'
    },
    { 
        id: 'jingaosolar', 
        name: '晶澳科技', 
        code: '002459', 
        sectorId: 'energy',
        subsector: '光伏',
        marketCap: 80,
        desc: '全球领先的高性能光伏产品制造商，专注于光伏组件和电池生产。'
    },
    { 
        id: 'jinkopower', 
        name: '晶科能源', 
        code: '688223', 
        sectorId: 'energy',
        subsector: '光伏',
        marketCap: 85,
        desc: '全球领先的光伏组件供应商，拥有全球光伏市场较大份额。'
    },

    // 能源赛道 - 风电
    { 
        id: 'goldwind', 
        name: '金风科技', 
        code: '002202', 
        sectorId: 'energy',
        subsector: '风电',
        marketCap: 60,
        desc: '中国领先的风电整机制造商，在风电整机研发和制造方面处于国际领先地位。'
    },
    { 
        id: 'cecep', 
        name: '节能风电', 
        code: '601016', 
        sectorId: 'energy',
        subsector: '风电',
        marketCap: 40,
        desc: '中国节能环保集团旗下风电运营商，专注于风电场开发、建设和运营。'
    },

    // 能源赛道 - 储能/电池
    { 
        id: 'catl', 
        name: '宁德时代', 
        code: '300750', 
        sectorId: 'energy',
        subsector: '储能/电池',
        marketCap: 320,
        desc: '全球最大的动力电池制造商，同时布局储能系统，为多家汽车制造商提供动力电池。'
    },
    { 
        id: 'eve', 
        name: '亿纬锂能', 
        code: '300014', 
        sectorId: 'energy',
        subsector: '储能/电池',
        marketCap: 75,
        desc: '国内领先的锂电池制造商，产品涵盖消费电池、动力电池和储能电池。'
    },
    { 
        id: 'gotion', 
        name: '国轩高科', 
        code: '002074', 
        sectorId: 'energy',
        subsector: '储能/电池',
        marketCap: 65,
        desc: '中国领先的动力电池制造商，在电芯、模组、PACK等方面有深厚技术积累。'
    },

    // 能源赛道 - 水电
    { 
        id: 'cypc', 
        name: '长江电力', 
        code: '600900', 
        sectorId: 'energy',
        subsector: '水电',
        marketCap: 280,
        desc: 'A股最大的水电企业，拥有三峡、葛洲坝等大型水电站，是清洁能源的代表。'
    },
    { 
        id: 'hnhydro', 
        name: '华能水电', 
        code: '600025', 
        sectorId: 'energy',
        subsector: '水电',
        marketCap: 90,
        desc: '中国华能集团旗下水电公司，主要在云南地区运营多座大型水电站。'
    },

    // 能源赛道 - 能源金属
    { 
        id: 'ganfeng', 
        name: '赣锋锂业', 
        code: '002460', 
        sectorId: 'energy',
        subsector: '能源金属',
        marketCap: 70,
        desc: '全球领先的锂产品供应商，垂直整合锂资源开发和锂化合物生产。'
    },
    { 
        id: 'huayou', 
        name: '华友钴业', 
        code: '603799', 
        sectorId: 'energy',
        subsector: '能源金属',
        marketCap: 65,
        desc: '全球领先的钴产品供应商，同时布局镍、锂等新能源材料。'
    },

    // 新能源汽车赛道 - 整车
    { 
        id: 'byd', 
        name: '比亚迪', 
        code: '002594', 
        sectorId: 'nev',
        subsector: '整车',
        marketCap: 410,
        desc: '全球领先的新能源汽车制造商，同时在电池、半导体等领域布局，产业链高度垂直整合。'
    },
    { 
        id: 'saic', 
        name: '上汽集团', 
        code: '600104', 
        sectorId: 'nev',
        subsector: '整车',
        marketCap: 150,
        desc: '中国最大的汽车集团之一，积极布局新能源汽车，推出多个电动品牌。'
    },
    { 
        id: 'gac', 
        name: '广汽集团', 
        code: '601238', 
        sectorId: 'nev',
        subsector: '整车',
        marketCap: 110,
        desc: '中国大型汽车集团，通过广汽埃安等品牌积极拓展新能源汽车市场。'
    },
    { 
        id: 'changan', 
        name: '长安汽车', 
        code: '000625', 
        sectorId: 'nev',
        subsector: '整车',
        marketCap: 85,
        desc: '中国老牌汽车制造商，近年在新能源汽车领域快速发展，推出阿维塔等品牌。'
    },

    // 新能源汽车赛道 - 零部件/设备
    { 
        id: 'leadtech', 
        name: '先导智能', 
        code: '300450', 
        sectorId: 'nev',
        subsector: '设备',
        marketCap: 50,
        desc: '国内领先的锂电池智能装备供应商，覆盖电芯、模组、PACK等多环节生产设备。'
    },
    { 
        id: 'dspring', 
        name: '当升科技', 
        code: '300073', 
        sectorId: 'nev',
        subsector: '上游材料',
        marketCap: 45,
        desc: '国内领先的锂电池正极材料供应商，产品主要应用于动力电池和储能电池。'
    },
    { 
        id: 'putailai', 
        name: '璞泰来', 
        code: '603659', 
        sectorId: 'nev',
        subsector: '上游材料',
        marketCap: 40,
        desc: '锂电池负极材料及结构件的领先供应商，与多家电池巨头建立合作关系。'
    },

    // 人工智能赛道
    { 
        id: 'cambricon', 
        name: '寒武纪', 
        code: '688256', 
        sectorId: 'ai',
        subsector: 'AI算力芯片',
        marketCap: 65,
        desc: '中国领先的AI芯片设计公司，专注于人工智能处理器的研发与设计。'
    },
    { 
        id: 'hygon', 
        name: '海光信息', 
        code: '688041', 
        sectorId: 'ai',
        subsector: 'AI算力芯片',
        marketCap: 95,
        desc: '国产服务器CPU和AI加速芯片供应商，为AI算力提供基础处理能力。'
    },
    { 
        id: 'jingjiwei', 
        name: '景嘉微', 
        code: '300474', 
        sectorId: 'ai',
        subsector: 'AI算力芯片',
        marketCap: 60,
        desc: '国产GPU供应商，专注于图形处理和人工智能计算领域。'
    },
    { 
        id: 'newsunray', 
        name: '新易盛', 
        code: '300502', 
        sectorId: 'ai',
        subsector: '光模块',
        marketCap: 55,
        desc: '高速光通信模块供应商，产品广泛应用于数据中心AI算力互联。'
    },
    { 
        id: 'shenyugu', 
        name: '神宇股份', 
        code: '300563', 
        sectorId: 'ai',
        subsector: '算力产业链',
        marketCap: 45,
        desc: '射频同轴电缆供应商，产品用于大型数据中心和通信设备互联。'
    },

    // 机器人赛道
    { 
        id: 'changsheng', 
        name: '长盛轴承', 
        code: '300718', 
        sectorId: 'robotics',
        subsector: '核心部件',
        marketCap: 300,
        desc: '机器人核心部件轴承供应商，尤其在人形机器人关节轴承方面有技术优势。'
    },
    { 
        id: 'wolong', 
        name: '卧龙电驱', 
        code: '600580', 
        sectorId: 'robotics',
        subsector: '核心部件',
        marketCap: 75,
        desc: '电机及电驱动系统供应商，产品广泛应用于机器人关节模组和伺服驱动。'
    },
    { 
        id: 'inovance', 
        name: '汇川技术', 
        code: '300124', 
        sectorId: 'robotics',
        subsector: '核心部件',
        marketCap: 110,
        desc: '国内领先的工业自动化和机器人控制系统供应商，在伺服驱动和控制器方面有技术优势。'
    },
    { 
        id: 'sanfeng', 
        name: '三丰智能', 
        code: '300276', 
        sectorId: 'robotics',
        subsector: '整机制造',
        marketCap: 50,
        desc: '智能装备和工业机器人系统集成商，近年积极布局人形机器人领域。'
    },
    { 
        id: 'fulin', 
        name: '富临精工', 
        code: '300432', 
        sectorId: 'robotics',
        subsector: '集成应用',
        marketCap: 45,
        desc: '汽车零部件供应商，通过战略合作进入人形机器人应用领域。'
    },

    // 芯片赛道
    { 
        id: 'willsemi', 
        name: '韦尔股份', 
        code: '603501', 
        sectorId: 'chip',
        subsector: '功率/模拟/射频',
        marketCap: 85,
        desc: '中国领先的半导体设计公司，专注于CMOS图像传感器、功率管理IC等产品。'
    },
    { 
        id: 'maxscend', 
        name: '卓胜微', 
        code: '300782', 
        sectorId: 'chip',
        subsector: '功率/模拟/射频',
        marketCap: 65,
        desc: '射频前端芯片设计公司，产品广泛应用于手机等移动设备。'
    },
    { 
        id: 'gigadevice', 
        name: '兆易创新', 
        code: '603986', 
        sectorId: 'chip',
        subsector: '存储/MCU',
        marketCap: 80,
        desc: '中国领先的存储器和MCU设计公司，产品应用于各类消费电子和汽车电子。'
    },
    { 
        id: 'starpower', 
        name: '斯达半导', 
        code: '603290', 
        sectorId: 'chip',
        subsector: '功率/模拟/射频',
        marketCap: 75,
        desc: 'IGBT模块领先制造商，产品广泛应用于新能源汽车、光伏逆变器等领域。'
    },
    { 
        id: 'verisilicon', 
        name: '芯原股份', 
        code: '688521', 
        sectorId: 'chip',
        subsector: '设计服务',
        marketCap: 55,
        desc: '芯片设计服务提供商，为国内外客户提供一站式芯片定制和IP授权服务。'
    }
];

// Define direct relationships between companies (beyond sector relationships)
const companyRelationships = [
    // Energy - NEV connections
    { source: 'catl', target: 'byd', strength: 0.9, desc: '宁德时代为比亚迪提供部分电池产品，同时双方在储能领域有合作' },
    { source: 'catl', target: 'saic', strength: 0.8, desc: '宁德时代是上汽集团重要的动力电池供应商' },
    { source: 'eve', target: 'gac', strength: 0.7, desc: '亿纬锂能为广汽集团提供部分电池产品' },
    { source: 'ganfeng', target: 'catl', strength: 0.9, desc: '赣锋锂业是宁德时代的重要锂材料供应商' },
    { source: 'huayou', target: 'catl', strength: 0.8, desc: '华友钴业是宁德时代的重要钴材料供应商' },
    { source: 'huayou', target: 'eve', strength: 0.7, desc: '华友钴业与亿纬锂能在电池材料领域有深度合作' },
    { source: 'dspring', target: 'catl', strength: 0.8, desc: '当升科技为宁德时代提供正极材料' },
    { source: 'putailai', target: 'catl', strength: 0.8, desc: '璞泰来为宁德时代提供负极材料和电池结构件' },
    { source: 'putailai', target: 'eve', strength: 0.7, desc: '璞泰来是亿纬锂能的负极材料供应商' },
    { source: 'leadtech', target: 'catl', strength: 0.8, desc: '先导智能为宁德时代提供电池生产设备' },
    { source: 'solarpower', target: 'catl', strength: 0.7, desc: '阳光电源与宁德时代在储能系统领域有战略合作' },
    
    // NEV interconnections
    { source: 'byd', target: 'fulin', strength: 0.5, desc: '富临精工为比亚迪提供部分零部件，双方在机器人领域有潜在合作空间' },
    
    // Energy - AI connections
    { source: 'solarpower', target: 'cambricon', strength: 0.6, desc: '阳光电源与寒武纪在智能光伏控制系统方面有合作' },
    { source: 'cypc', target: 'hygon', strength: 0.5, desc: '长江电力与海光信息在电力调度智能化方面有合作' },
    
    // Chip cross-sector connections
    { source: 'starpower', target: 'solarpower', strength: 0.8, desc: '斯达半导的IGBT模块是阳光电源逆变器的核心部件' },
    { source: 'starpower', target: 'byd', strength: 0.7, desc: '斯达半导为比亚迪提供部分电控系统的功率器件' },
    { source: 'willsemi', target: 'byd', strength: 0.6, desc: '韦尔股份为比亚迪提供车载图像传感器等芯片' },
    { source: 'gigadevice', target: 'changan', strength: 0.6, desc: '兆易创新为长安汽车提供车载存储器和MCU' },
    
    // Robot - AI - Chip connections
    { source: 'changsheng', target: 'sanfeng', strength: 0.8, desc: '长盛轴承为三丰智能的机器人提供关键轴承部件' },
    { source: 'wolong', target: 'inovance', strength: 0.7, desc: '卧龙电驱与汇川技术在伺服系统领域有技术合作' },
    { source: 'inovance', target: 'sanfeng', strength: 0.7, desc: '汇川技术为三丰智能提供机器人控制系统' },
    { source: 'jingjiwei', target: 'fulin', strength: 0.5, desc: '景嘉微的GPU产品用于富临精工的机器人视觉处理系统' },
    { source: 'cambricon', target: 'fulin', strength: 0.6, desc: '寒武纪的AI芯片用于富临精工的智能机器人' },
    
    // AI ecosystem
    { source: 'hygon', target: 'newsunray', strength: 0.7, desc: '海光信息的服务器平台使用新易盛的高速光模块' },
    { source: 'newsunray', target: 'shenyugu', strength: 0.7, desc: '新易盛与神宇股份在数据中心互联产品领域有合作' },
    { source: 'cambricon', target: 'hygon', strength: 0.8, desc: '寒武纪的AI加速卡与海光信息的服务器平台配套使用' },
    { source: 'verisilicon', target: 'cambricon', strength: 0.6, desc: '芯原股份为寒武纪提供部分IP授权和设计服务' }
];
