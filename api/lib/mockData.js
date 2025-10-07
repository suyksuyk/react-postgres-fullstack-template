// Mock data for when database connection is unavailable
export const mockBooks = [
  {
    id: 1,
    title: "AI知识库炒股锦囊",
    author: "智能投资团队",
    description:
      "汇聚10年A股、港股、美股Level-2全量行情与30+另类数据（卫星图像、供应链、ESG），运用知识图谱+强化学习构建的Alpha引擎，实时捕捉机构资金流向、分析师预期差与政策情绪拐点。内含12套量化择时模型、38个Smart-Beta因子库、动态回撤控制与VaR压力测试脚本，附赠Python回测框架与低代码GUI，让散户也能享受百亿级私募的投研算力，平均提升夏普比率1.8倍，历史最大回撤<8%。",
    image_url: "/images/books/ai-stock-trading.png",
    genre: "金融科技",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: "AI大模型炒股助手",
    author: "量化金融实验室",
    description:
      "基于千亿级MoE金融大模型FinGPT-7B，融合宏观研报、财报电话会纪要、Reddit&雪球情绪、央行措辞漂移等200亿token多模态语料，支持自然语言生成个股诊断、行业轮动、事件驱动策略。内置Prompt模板市场：「美联储FOMC解读」「业绩超预期漂移」「限售股解禁博弈」等60个高能场景，一键输出可执行交易计划（含仓位、止盈、对冲）。回测显示，事件驱动组合年化超额收益+22%，胜率68%，信息比1.9，适配富途、IB、中泰XTP等主流API自动下单。",
    image_url: "/images/books/ai-model-trading.png",
    genre: "金融科技",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: "爆款短视频生成器",
    author: "创意内容工场",
    description:
      "抖音/小红书/TikTok官方算法合作伙伴独家披露流量密码：基于3.6万条爆款样本的「HOOK-E」五秒抓眼模型、「3C冲突-反转-共鸣」脚本公式、AI自动分镜+数字人+语音克隆全流程SOP。附赠50G高清无版权素材、200+行业爆款BGM节奏库、AI一键生成100条口播文案，实测新号7天涨粉10万+，商品点击转化率提升4.7倍，广告ROI≥1:8。适合品牌方、MCN、个人IP零门槛上车。",
    image_url: "/images/books/viral-video-generator.png",
    genre: "新媒体营销",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    title: "数据分析爬虫机器人",
    author: "数据科学研究院",
    description:
      "覆盖反爬7大维度（TLS指纹、WebGL、验证码、IP信誉、行为生物、WAF、RASP）的实战级解决方案：从Requests+Playwright到K8s分布式Scrapy-Cluster，每日稳定采集10亿级电商SKU、社媒帖子、招投标、招聘、AppStore评论等全量数据。内含自动清洗+实时ETL+StarRocks数仓+Superset可视化模板，支持增量更新、断点续爬、SLA监控报警，帮助企业节省90%数据采购成本，已服务500强快消、券商、PE、政府智库。",
    image_url: "/images/books/data-crawler-robot.png",
    genre: "数据科学",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    title: "API库",
    author: "架构设计团队",
    description:
      "阿里、腾讯、字节、AWS、Google 30余位首席架构师联合撰写，系统讲解REST、GraphQL、gRPC、AsyncAPI、WebSocket、Serverless EventBridge等主流范式。深度剖析高并发、高可用、可观测、可治理、可货币化五大核心指标，提供Spring Cloud、Go-Kit、Django、NestJS、BFF、Sidecar等15套生产级代码模板，配套OpenAPI代码生成、灰度发布、流量染色、混沌工程、计费限流、开发者门户最佳实践，助你从0到1构建日活千万级的开放生态。",
    image_url: "/images/books/api-library.png",
    genre: "软件开发",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    title: "培训课程",
    author: "专业技能学院",
    description:
      "联合华为云、字节跳动、Goldman Sachs、Pivotal、Databricks等30家一线企业推出「云原生+数据智能+FinTech」三大赛道，包含Go/Java/云原生、PyTorch/大模型微调、量化策略/固定收益/衍生品、产品增长/数据运营等48门热门课程。采用「企业真实项目+双师辅导+代码Review+就业内推」模式，平均就业薪资提升60%，3个月内大厂/券商/外企Offer率82%，累计帮助2.3万名学员完成职业跃迁。",
    image_url: "/images/books/training-courses.png",
    genre: "职业教育",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    title: "数据报告",
    author: "行业分析中心",
    description:
      "每年追踪全球2,000+细分行业、50万+企业经营数据、8万+投融资事件，独家构建「政策-景气度-资本-人才」四象限前瞻模型，提前6-12个月锁定高成长赛道。报告覆盖AI芯片、储能、商业航天、合成生物、数字疗法、AIGC、量子通信等前沿领域，提供市场规模、竞争格局、技术路线、盈利模型、估值锚、政策风险、并购标的、LP-GP图谱等全维度洞察，已成为红杉、高瓴、CICC、麦肯锡、国家发改委等Top机构决策标配。",
    image_url: "/images/books/data-reports.png",
    genre: "商业分析",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
