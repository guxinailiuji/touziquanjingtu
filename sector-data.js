const sectors = [
    {
        id: 'energy',
        name: '能源',
        desc: '能源赛道是A股市场的核心赛道之一，包括光伏、风电、储能、水电等细分领域。作为基础能源供应方，它支撑着其他科技赛道的发展，特别是对人工智能和新能源汽车有重要影响。',
        importance: 10,
        subsectors: ['光伏', '风电', '储能', '水电', '电网设备', '能源金属']
    },
    {
        id: 'nev',
        name: '新能源汽车',
        desc: '新能源汽车赛道是中国创新发展的重要领域，涵盖了整车制造、电池技术、充电设施等多个环节。与能源赛道紧密相连，共同构成新能源产业的核心。',
        importance: 8,
        subsectors: ['整车', '电池', '上游材料', '设备']
    },
    {
        id: 'ai',
        name: '人工智能',
        desc: '人工智能赛道是当前科技前沿，涉及算力芯片、大模型、应用落地等多个领域。其发展高度依赖于能源赛道提供的电力支持，特别是对大规模算力中心的能源需求巨大。',
        importance: 9,
        subsectors: ['AI算力芯片', '光模块', '算力产业链', 'AI应用']
    },
    {
        id: 'robotics',
        name: '机器人',
        desc: '机器人赛道是智能制造的重要组成部分，包括工业机器人、服务机器人和人形机器人等领域。许多能源和新能源汽车企业也在布局机器人技术。',
        importance: 7,
        subsectors: ['核心部件', '整机制造', '集成应用']
    },
    {
        id: 'chip',
        name: '芯片',
        desc: '芯片赛道是科技自主创新的关键领域，涵盖半导体设计、制造、封装等环节。它为能源智能化管理、新能源汽车、人工智能等提供核心计算能力支持。',
        importance: 8.5,
        subsectors: ['AI芯片', '存储/MCU', '功率/模拟/射频', '设计服务']
    }
];

// Define relationships between sectors
const sectorRelationships = [
    { source: 'energy', target: 'nev', strength: 0.9, desc: '能源赛道为新能源汽车提供电池材料与充电电力支持' },
    { source: 'energy', target: 'ai', strength: 0.8, desc: '能源赛道为AI大规模算力提供电力基础设施' },
    { source: 'energy', target: 'robotics', strength: 0.5, desc: '能源企业向机器人领域布局，能源技术支持机器人发展' },
    { source: 'energy', target: 'chip', strength: 0.6, desc: '能源智能化管理需要芯片支持，同属硬科技范畴' },
    { source: 'nev', target: 'chip', strength: 0.7, desc: '新能源汽车需要大量芯片支持智能驾驶与控制系统' },
    { source: 'nev', target: 'robotics', strength: 0.6, desc: '电动汽车厂商向机器人领域拓展，共享电机控制技术' },
    { source: 'ai', target: 'chip', strength: 0.9, desc: 'AI发展高度依赖芯片算力支持' },
    { source: 'ai', target: 'robotics', strength: 0.8, desc: 'AI技术是智能机器人的核心' },
    { source: 'robotics', target: 'chip', strength: 0.7, desc: '机器人需要芯片支持感知与控制' }
];
