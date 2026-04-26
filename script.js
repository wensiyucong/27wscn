// 网站数据 - 根据2026年流量数据整理
const websites = {
    global: [
        {
            id: 1,
            name: "Google",
            url: "https://www.google.com",
            icon: "fab fa-google",
            iconColor: "#4285F4",
            description: "全球最大的搜索引擎，提供搜索、邮箱、云存储等服务",
            monthlyVisits: "1117.5亿",
            rank: "第1名",
            category: "搜索"
        },
        {
            id: 2,
            name: "YouTube",
            url: "https://www.youtube.com",
            icon: "fab fa-youtube",
            iconColor: "#FF0000",
            description: "全球最大的视频分享平台，Alphabet旗下产品",
            monthlyVisits: "544亿",
            rank: "第2名",
            category: "视频"
        },
        {
            id: 3,
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: "fab fa-facebook",
            iconColor: "#1877F2",
            description: "全球最大的社交媒体平台，Meta公司旗下",
            monthlyVisits: "161亿",
            rank: "第3名",
            category: "社交"
        },
        {
            id: 4,
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: "fab fa-instagram",
            iconColor: "#E4405F",
            description: "图片和短视频分享社交平台，Meta旗下",
            monthlyVisits: "68亿",
            rank: "第4名",
            category: "社交"
        },
        {
            id: 5,
            name: "Wikipedia",
            url: "https://www.wikipedia.org",
            icon: "fab fa-wikipedia-w",
            iconColor: "#636466",
            description: "全球最大的自由内容百科全书",
            monthlyVisits: "52亿",
            rank: "第6名",
            category: "知识"
        },
        {
            id: 6,
            name: "Twitter/X",
            url: "https://twitter.com",
            icon: "fab fa-twitter",
            iconColor: "#1DA1F2",
            description: "社交媒体平台，实时信息网络",
            monthlyVisits: "65亿",
            rank: "第7名",
            category: "社交"
        },
        {
            id: 7,
            name: "Amazon",
            url: "https://www.amazon.com",
            icon: "fab fa-amazon",
            iconColor: "#FF9900",
            description: "全球最大的电子商务和云计算公司",
            monthlyVisits: "42亿",
            rank: "第8名",
            category: "电商"
        },
        {
            id: 8,
            name: "Reddit",
            url: "https://www.reddit.com",
            icon: "fab fa-reddit",
            iconColor: "#FF4500",
            description: "社交新闻聚合、讨论和评分网站",
            monthlyVisits: "17亿",
            rank: "第10名",
            category: "社区"
        }
    ],
    
    domestic: [
        {
            id: 1,
            name: "百度",
            url: "https://www.baidu.com",
            icon: "fas fa-search",
            iconColor: "#2932E1",
            description: "中国最大的搜索引擎，提供搜索、百科、贴吧等服务",
            monthlyVisits: "58亿",
            rank: "国内第1",
            category: "搜索"
        },
        {
            id: 2,
            name: "淘宝",
            url: "https://www.taobao.com",
            icon: "fas fa-shopping-cart",
            iconColor: "#FF4400",
            description: "中国最大的C2C在线购物网站，阿里巴巴旗下",
            monthlyVisits: "35亿",
            rank: "国内第2",
            category: "电商"
        },
        {
            id: 3,
            name: "腾讯网",
            url: "https://www.qq.com",
            icon: "fab fa-tencent-weibo",
            iconColor: "#12B7F5",
            description: "腾讯公司门户网站，提供新闻、娱乐等内容",
            monthlyVisits: "28亿",
            rank: "国内第3",
            category: "门户"
        },
        {
            id: 4,
            name: "新浪",
            url: "https://www.sina.com.cn",
            icon: "fas fa-newspaper",
            iconColor: "#E6162D",
            description: "中国主要门户网站之一，提供新闻、博客等服务",
            monthlyVisits: "22亿",
            rank: "国内第4",
            category: "新闻"
        },
        {
            id: 5,
            name: "知乎",
            url: "https://www.zhihu.com",
            icon: "fas fa-question-circle",
            iconColor: "#0084FF",
            description: "中文互联网高质量的问答社区和创作者聚集平台",
            monthlyVisits: "18亿",
            rank: "国内第5",
            category: "问答"
        },
        {
            id: 6,
            name: "Bilibili",
            url: "https://www.bilibili.com",
            icon: "fas fa-play-circle",
            iconColor: "#FB7299",
            description: "中国年轻人喜爱的视频分享和弹幕网站",
            monthlyVisits: "15亿",
            rank: "国内第6",
            category: "视频"
        },
        {
            id: 7,
            name: "京东",
            url: "https://www.jd.com",
            icon: "fas fa-box",
            iconColor: "#F10215",
            description: "中国领先的自营式电商企业",
            monthlyVisits: "14亿",
            rank: "国内第7",
            category: "电商"
        },
        {
            id: 8,
            name: "豆瓣",
            url: "https://www.douban.com",
            icon: "fas fa-book",
            iconColor: "#2E963D",
            description: "提供图书、电影、音乐信息及评论的社区网站",
            monthlyVisits: "8亿",
            rank: "国内第8",
            category: "文化"
        }
    ],
    
    ai: [
        {
            id: 1,
            name: "ChatGPT",
            url: "https://chat.openai.com",
            icon: "fas fa-robot",
            iconColor: "#10A37F",
            description: "OpenAI开发的对话式人工智能系统，全球访问量前5",
            monthlyVisits: "16亿",
            rank: "全球前5",
            category: "AI对话"
        },
        {
            id: 2,
            name: "Claude",
            url: "https://claude.ai",
            icon: "fas fa-brain",
            iconColor: "#D97706",
            description: "Anthropic开发的AI助手，注重安全性和准确性",
            monthlyVisits: "3.2亿",
            rank: "全球前20",
            category: "AI助手"
        },
        {
            id: 3,
            name: "Midjourney",
            url: "https://www.midjourney.com",
            icon: "fas fa-palette",
            iconColor: "#1A1A2E",
            description: "AI图像生成工具，通过Discord提供服务",
            monthlyVisits: "2.8亿",
            rank: "全球前25",
            category: "AI绘画"
        },
        {
            id: 4,
            name: "GitHub Copilot",
            url: "https://github.com/features/copilot",
            icon: "fas fa-code",
            iconColor: "#6E40C9",
            description: "GitHub和OpenAI合作的AI编程助手",
            monthlyVisits: "2.1亿",
            rank: "开发者首选",
            category: "AI编程"
        },
        {
            id: 5,
            name: "文心一言",
            url: "https://yiyan.baidu.com",
            icon: "fas fa-comments",
            iconColor: "#2932E1",
            description: "百度开发的AI对话模型，中文语境优化",
            monthlyVisits: "1.8亿",
            rank: "国内AI第1",
            category: "AI对话"
        },
        {
            id: 6,
            name: "通义千问",
            url: "https://tongyi.aliyun.com",
            icon: "fas fa-lightbulb",
            iconColor: "#FF6A00",
            description: "阿里巴巴开发的AI大语言模型",
            monthlyVisits: "1.5亿",
            rank: "国内AI第2",
            category: "AI助手"
        },
        {
            id: 7,
            name: "Notion AI",
            url: "https://www.notion.so/product/ai",
            icon: "fas fa-sticky-note",
            iconColor: "#000000",
            description: "Notion集成的AI写作和内容生成工具",
            monthlyVisits: "1.2亿",
            rank: "生产力工具",
            category: "AI写作"
        },
        {
            id: 8,
            name: "Hugging Face",
            url: "https://huggingface.co",
            icon: "fas fa-hands-helping",
            iconColor: "#FFD21E",
            description: "AI模型社区和平台，开源模型聚集地",
            monthlyVisits: "0.9亿",
            rank: "开源AI第1",
            category: "AI平台"
        }
    ],
    
    tools: [
        {
            id: 1,
            name: "GitHub",
            url: "https://github.com",
            icon: "fab fa-github",
            iconColor: "#333333",
            description: "全球最大的代码托管和协作平台",
            monthlyVisits: "24亿",
            rank: "开发者第1",
            category: "开发"
        },
        {
            id: 2,
            name: "Stack Overflow",
            url: "https://stackoverflow.com",
            icon: "fab fa-stack-overflow",
            iconColor: "#F48024",
            description: "程序员问答社区，解决编程问题",
            monthlyVisits: "7.2亿",
            rank: "开发者第2",
            category: "开发"
        },
        {
            id: 3,
            name: "Figma",
            url: "https://www.figma.com",
            icon: "fab fa-figma",
            iconColor: "#F24E1E",
            description: "协作式界面设计工具，云端设计平台",
            monthlyVisits: "5.8亿",
            rank: "设计工具第1",
            category: "设计"
        },
        {
            id: 4,
            name: "Canva",
            url: "https://www.canva.com",
            icon: "fas fa-paint-brush",
            iconColor: "#00C4CC",
            description: "在线平面设计平台，模板丰富",
            monthlyVisits: "4.5亿",
            rank: "设计工具第2",
            category: "设计"
        },
        {
            id: 5,
            name: "Notion",
            url: "https://www.notion.so",
            icon: "fas fa-th-large",
            iconColor: "#000000",
            description: "一体化工作空间，笔记、任务、数据库整合",
            monthlyVisits: "3.8亿",
            rank: "效率工具第1",
            category: "办公"
        },
        {
            id: 6,
            name: "Trello",
            url: "https://trello.com",
            icon: "fab fa-trello",
            iconColor: "#0079BF",
            description: "看板式项目管理工具，简洁直观",
            monthlyVisits: "2.9亿",
            rank: "项目管理第1",
            category: "办公"
        },
        {
            id: 7,
            name: "Google Drive",
            url: "https://drive.google.com",
            icon: "fab fa-google-drive",
            iconColor: "#4285F4",
            description: "Google提供的云存储和协作平台",
            monthlyVisits: "15亿",
            rank: "云存储第1",
            category: "存储"
        },
        {
            id: 8,
            name: "Dropbox",
            url: "https://www.dropbox.com",
            icon: "fab fa-dropbox",
            iconColor: "#0061FF",
            description: "文件同步和云存储服务",
            monthlyVisits: "6.3亿",
            rank: "云存储第2",
            category: "存储"
        }
    ],
    
    daily: [
        {
            id: 1,
            name: "CNN",
            url: "https://www.cnn.com",
            icon: "fas fa-tv",
            iconColor: "#CC0000",
            description: "美国有线电视新闻网，全球新闻机构",
            monthlyVisits: "8.5亿",
            rank: "新闻第1",
            category: "新闻"
        },
        {
            id: 2,
            name: "BBC News",
            url: "https://www.bbc.com/news",
            icon: "fas fa-broadcast-tower",
            iconColor: "#B80000",
            description: "英国广播公司新闻，国际新闻报道",
            monthlyVisits: "7.2亿",
            rank: "新闻第2",
            category: "新闻"
        },
        {
            id: 3,
            name: "纽约时报",
            url: "https://www.nytimes.com",
            icon: "fas fa-newspaper",
            iconColor: "#000000",
            description: "美国主流报纸，高质量新闻报道",
            monthlyVisits: "5.8亿",
            rank: "报纸第1",
            category: "新闻"
        },
        {
            id: 4,
            name: "华尔街日报",
            url: "https://www.wsj.com",
            icon: "fas fa-chart-line",
            iconColor: "#007396",
            description: "财经新闻报纸，商业金融报道",
            monthlyVisits: "4.2亿",
            rank: "财经第1",
            category: "财经"
        },
        {
            id: 5,
            name: "Coursera",
            url: "https://www.coursera.org",
            icon: "fas fa-graduation-cap",
            iconColor: "#2A73CC",
            description: "在线学习平台，大学课程和认证",
            monthlyVisits: "3.8亿",
            rank: "教育第1",
            category: "教育"
        },
        {
            id: 6,
            name: "Khan Academy",
            url: "https://www.khanacademy.org",
            icon: "fas fa-book-open",
            iconColor: "#14BF96",
            description: "免费在线教育平台，覆盖K-12到大学",
            monthlyVisits: "2.9亿",
            rank: "教育第2",
            category: "教育"
        },
        {
            id: 7,
            name: "Medium",
            url: "https://medium.com",
            icon: "fab fa-medium",
            iconColor: "#000000",
            description: "在线出版平台，深度文章和博客",
            monthlyVisits: "4.5亿",
            rank: "博客平台第1",
            category: "阅读"
        },
        {
            id: 8,
            name: "Product Hunt",
            url: "https://www.producthunt.com",
            icon: "fas fa-hunting",
            iconColor: "#DA552F",
            description: "新产品发现平台，科技产品发布",
            monthlyVisits: "1.8亿",
            rank: "产品发现第1",
            category: "科技"
        }
    ]
};

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const backToTopBtn = document.getElementById('backToTop');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// 初始化网站卡片
document.addEventListener('DOMContentLoaded', function() {
    // 加载各分类网站
    loadWebsites('global', websites.global);
    loadWebsites('domestic', websites.domestic);
    loadWebsites('ai', websites.ai);
    loadWebsites('tools', websites.tools);
    loadWebsites('daily', websites.daily);
    
    // 设置导航链接点击事件
    setupNavLinks();
    
    // 初始化搜索功能
    setupSearch();
    
    // 初始化移动菜单
    setupMobileMenu();
    
    // 初始化回到顶部按钮
    setupBackToTop();
});

// 加载网站卡片到指定分类
function loadWebsites(categoryId, websitesArray) {
    const container = document.querySelector(`#${categoryId} .sites-grid`);
    if (!container) return;
    
    container.innerHTML = '';
    
    websitesArray.forEach(site => {
        const siteCard = createSiteCard(site);
        container.appendChild(siteCard);
    });
}

// 创建网站卡片HTML
function createSiteCard(site) {
    const card = document.createElement('div');
    card.className = 'site-card';
    
    card.innerHTML = `
        <div class="site-header">
            <div class="site-icon" style="background-color: ${site.iconColor}">
                <i class="${site.icon}"></i>
            </div>
            <div class="site-info">
                <h3>${site.name}</h3>
                <p>${site.category}</p>
            </div>
        </div>
        <div class="site-desc">
            ${site.description}
        </div>
        <div class="site-stats">
            <span><i class="fas fa-chart-line"></i> 月访问: ${site.monthlyVisits}</span>
            <span><i class="fas fa-trophy"></i> ${site.rank}</span>
        </div>
        <a href="${site.url}" target="_blank" class="site-link">
            <i class="fas fa-external-link-alt"></i> 访问网站
        </a>
    `;
    
    return card;
}

// 设置导航链接点击事件
function setupNavLinks() {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            links.forEach(l => l.classList.remove('active'));
            
            // 添加active类到当前点击的链接
            this.classList.add('active');
            
            // 滚动到对应的部分
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
            
            // 在移动设备上关闭菜单
            if (window.innerWidth <= 992) {
                navLinks.style.display = 'none';
            }
        });
    });
}

// 设置搜索功能
function setupSearch() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (!query) {
            alert('请输入搜索关键词');
            return;
        }
        
        // 在所有网站中搜索
        const allSites = [
            ...websites.global,
            ...websites.domestic,
            ...websites.ai,
            ...websites.tools,
            ...websites.daily
        ];
        
        const results = allSites.filter(site => 
            site.name.toLowerCase().includes(query) || 
            site.description.toLowerCase().includes(query) ||
            site.category.toLowerCase().includes(query)
        );
        
        if (results.length === 0) {
            alert(`未找到包含"${query}"的网站`);
            return;
        }
        
        // 创建搜索结果弹窗
        showSearchResults(results, query);
    }
}

// 显示搜索结果
function showSearchResults(results, query) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    `;
    
    // 创建结果容器
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    resultsContainer.style.cssText = `
        background-color: white;
        border-radius: 12px;
        max-width: 800px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    // 结果标题
    const title = document.createElement('h2');
    title.innerHTML = `<i class="fas fa-search"></i> 搜索"${query}"的结果 (${results.length}个)`;
    title.style.marginBottom = '20px';
    title.style.color = 'var(--dark-color)';
    
    // 结果列表
    const resultsList = document.createElement('div');
    resultsList.style.display = 'grid';
    resultsList.style.gap = '15px';
    
    results.forEach(site => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.style.cssText = `
            padding: 15px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: var(--transition);
        `;
        
        resultItem.innerHTML = `
            <div class="site-icon-small" style="background-color: ${site.iconColor}; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">
                <i class="${site.icon}"></i>
            </div>
            <div style="flex: 1;">
                <h4 style="margin: 0 0 5px 0;">${site.name}</h4>
                <p style="margin: 0 0 5px 0; color: #64748b; font-size: 0.9rem;">${site.description}</p>
                <div style="display: flex; gap: 15px; font-size: 0.85rem;">
                    <span><i class="fas fa-chart-line"></i> ${site.monthlyVisits}</span>
                    <span><i class="fas fa-tag"></i> ${site.category}</span>
                </div>
            </div>
            <a href="${site.url}" target="_blank" style="padding: 8px 15px; background-color: var(--primary-color); color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
                访问
            </a>
        `;
        
        resultItem.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-2px)';
        });
        
        resultItem.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
        
        resultsList.appendChild(resultItem);
    });
    
    // 关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i> 关闭';
    closeBtn.style.cssText = `
        margin-top: 20px;
        padding: 10px 20px;
        background-color: var(--dark-color);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        display: block;
        margin-left: auto;
    `;
    
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // 组装模态框
    resultsContainer.appendChild(title);
    resultsContainer.appendChild(resultsList);
    resultsContainer.appendChild(closeBtn);
    modal.appendChild(resultsContainer);
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    document.body.appendChild(modal);
}

// 设置移动菜单
function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', function() {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            navLinks.style.gap = '15px';
        }
    });
    
    // 窗口调整大小时重置菜单
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navLinks.style.display = '';
        }
    });
}

// 设置回到顶部按钮
function setupBackToTop() {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 添加快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // ESC 关闭搜索模态框
    if (e.key === 'Escape') {
        const modal = document.querySelector('.search-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    }
});

// 添加网站卡片点击统计（示例功能）
function trackSiteClick(siteName) {
    console.log(`用户点击了: ${siteName}`);
    // 实际应用中这里可以发送数据到统计服务器
}

// 为所有网站链接添加点击跟踪
document.addEventListener('click', function(e) {
    if (e.target.closest('.site-link')) {
        const siteCard = e.target.closest('.site-card');
        if (siteCard) {
            const siteName = siteCard.querySelector('.site-info h3').textContent;
            trackSiteClick(siteName);
        }
    }
    
    if (e.target.closest('.quick-item')) {
        const siteName = e.target.closest('.quick-item').querySelector('span').textContent;
        trackSiteClick(siteName);
    }
});