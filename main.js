// ============================================================
// 文思导航 - 主逻辑文件 (main.js)
// 优先使用 sites.js 中定义的外部数据 (window.sitesData)，
// 若不可用则使用内置后备数据 FALLBACK_DATA。
// ============================================================

(function () {
    'use strict';

    // ===================== 后备数据 =====================
    var FALLBACK_DATA = {
        categories: [{
            id: 'common',
            name: '常用',
            icon: 'fas fa-star',
            sites: [
                { id: 1, name: 'Google', url: 'https://www.google.com', icon: 'https://www.google.com/favicon.ico', description: '全球最受欢迎的搜索引擎', category: '常用' },
                { id: 2, name: '百度', url: 'https://www.baidu.com', icon: 'https://www.baidu.com/favicon.ico', description: '中国最大的搜索引擎', category: '常用' },
                { id: 3, name: '必应', url: 'https://www.bing.com', icon: 'https://www.bing.com/favicon.ico', description: '微软搜索引擎', category: '常用' },
                { id: 4, name: 'GitHub', url: 'https://github.com', icon: 'https://github.githubassets.com/favicon.ico', description: '全球最大的代码托管平台', category: '常用' },
                { id: 5, name: 'Gmail', url: 'https://mail.google.com', icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico', description: 'Google 免费电子邮件服务', category: '常用' }
            ]
        }, {
            id: 'study',
            name: '学习',
            icon: 'fas fa-graduation-cap',
            sites: [
                { id: 6, name: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: 'https://developer.mozilla.org/favicon.ico', description: 'Web 技术权威文档', category: '学习' },
                { id: 7, name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: 'https://stackoverflow.com/favicon.ico', description: '程序员问答社区', category: '学习' },
                { id: 8, name: 'Coursera', url: 'https://www.coursera.org', icon: 'https://www.coursera.org/favicon.ico', description: '世界领先的在线学习平台', category: '学习' },
                { id: 9, name: '知乎', url: 'https://www.zhihu.com', icon: 'https://static.zhihu.com/heifetz/favicon.ico', description: '中文高质量问答社区', category: '学习' },
                { id: 10, name: 'Bilibili', url: 'https://www.bilibili.com', icon: 'https://www.bilibili.com/favicon.ico', description: '年轻世代文化社区和视频平台', category: '学习' }
            ]
        }, {
            id: 'tools',
            name: '工具',
            icon: 'fas fa-tools',
            sites: [
                { id: 11, name: 'Canva', url: 'https://www.canva.com', icon: 'https://www.canva.com/favicon.ico', description: '在线设计工具', category: '工具' },
                { id: 12, name: 'TinyPNG', url: 'https://tinypng.com', icon: 'https://tinypng.com/images/favicon.ico', description: '智能 PNG/JPEG 压缩', category: '工具' },
                { id: 13, name: 'Notion', url: 'https://www.notion.so', icon: 'https://www.notion.so/favicon.ico', description: '一体化工作空间', category: '工具' },
                { id: 14, name: 'CodePen', url: 'https://codepen.io', icon: 'https://codepen.io/favicon.ico', description: '前端代码在线编辑和演示', category: '工具' },
                { id: 15, name: 'JSON Formatter', url: 'https://jsonformatter.org', icon: 'https://jsonformatter.org/favicon.ico', description: 'JSON 格式化工具', category: '工具' }
            ]
        }, {
            id: 'social',
            name: '社交',
            icon: 'fas fa-users',
            sites: [
                { id: 16, name: 'Twitter', url: 'https://twitter.com', icon: 'https://abs.twimg.com/favicons/twitter.ico', description: '社交网络和微博客服务', category: '社交' },
                { id: 17, name: 'Facebook', url: 'https://www.facebook.com', icon: 'https://www.facebook.com/favicon.ico', description: '全球最大社交平台', category: '社交' },
                { id: 18, name: 'Instagram', url: 'https://www.instagram.com', icon: 'https://www.instagram.com/favicon.ico', description: '照片和视频分享社交应用', category: '社交' },
                { id: 19, name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'https://www.linkedin.com/favicon.ico', description: '职场社交平台', category: '社交' },
                { id: 20, name: '微信', url: 'https://weixin.qq.com', icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico', description: '腾讯即时通信服务', category: '社交' }
            ]
        }, {
            id: 'entertainment',
            name: '娱乐',
            icon: 'fas fa-gamepad',
            sites: [
                { id: 21, name: 'Netflix', url: 'https://www.netflix.com', icon: 'https://www.netflix.com/favicon.ico', description: '流媒体播放平台', category: '娱乐' },
                { id: 22, name: 'Spotify', url: 'https://www.spotify.com', icon: 'https://www.spotify.com/favicon.ico', description: '音乐流媒体服务平台', category: '娱乐' },
                { id: 23, name: 'Steam', url: 'https://store.steampowered.com', icon: 'https://store.steampowered.com/favicon.ico', description: '电子游戏数字发行平台', category: '娱乐' },
                { id: 24, name: '豆瓣', url: 'https://www.douban.com', icon: 'https://www.douban.com/favicon.ico', description: '图书电影音乐推荐评论', category: '娱乐' },
                { id: 25, name: 'Twitch', url: 'https://www.twitch.tv', icon: 'https://www.twitch.tv/favicon.ico', description: '视频游戏直播平台', category: '娱乐' }
            ]
        }, {
            id: 'shopping',
            name: '购物',
            icon: 'fas fa-shopping-cart',
            sites: [
                { id: 26, name: '淘宝', url: 'https://www.taobao.com', icon: 'https://www.taobao.com/favicon.ico', description: '阿里巴巴旗下购物平台', category: '购物' },
                { id: 27, name: '京东', url: 'https://www.jd.com', icon: 'https://www.jd.com/favicon.ico', description: '综合网上购物商城', category: '购物' },
                { id: 28, name: '拼多多', url: 'https://www.pinduoduo.com', icon: 'https://www.pinduoduo.com/favicon.ico', description: '社交电商平台', category: '购物' },
                { id: 29, name: '亚马逊', url: 'https://www.amazon.cn', icon: 'https://www.amazon.cn/favicon.ico', description: '全球领先的电子商务平台', category: '购物' },
                { id: 30, name: '美团', url: 'https://www.meituan.com', icon: 'https://www.meituan.com/favicon.ico', description: '生活服务电子商务平台', category: '购物' }
            ]
        }]
    };

    // ===================== 数据源选择 =====================
    var SITES_DATA = window.sitesData || (typeof sitesData !== 'undefined' ? sitesData : null) || FALLBACK_DATA;

    // ===================== DOM 引用 =====================
    var $ = function (id) { return document.getElementById(id); };
    var searchInput = $('search-input');
    var searchResults = $('search-results');
    var themeSwitch = $('theme-switch');
    var themeText = $('theme-text');
    var categoriesNav = $('categories-nav');
    var sitesContainer = $('sites-container');
    var particlesCanvas = $('particles-canvas');
    var totalSitesEl = $('total-sites');
    var contactWechat = $('contact-wechat');
    var wechatModal = $('wechat-modal');
    var wechatModalClose = $('wechat-modal-close');
    var wechatCopyBtn = $('wechat-copy-btn');
    var wechatIdDisplay = $('wechat-id-display');

    // ===================== 状态 =====================
    var currentCategory = 'all';
    var allSites = [];

    // 扁平化所有站点
    function flattenSites(data) {
        var sites = [];
        data.categories.forEach(function (cat) {
            cat.sites.forEach(function (site) {
                sites.push(site);
            });
        });
        return sites;
    }
    allSites = flattenSites(SITES_DATA);

    // ===================== 更新网站总数显示 =====================
    function updateSiteCount() {
        if (totalSitesEl) {
            totalSitesEl.textContent = allSites.length;
        }
    }

    // ===================== 粒子背景 =====================
    function initParticles() {
        var ctx = particlesCanvas.getContext('2d');
        var particles = [];
        var count = 80;

        function resize() {
            particlesCanvas.width = window.innerWidth;
            particlesCanvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        for (var i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * particlesCanvas.width,
                y: Math.random() * particlesCanvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                r: Math.random() * 2.5 + 1,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        function draw() {
            ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
            var color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#6366f1';
            particles.forEach(function (p, idx) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();

                // 连线
                for (var j = idx + 1; j < particles.length; j++) {
                    var dx = p.x - particles[j].x;
                    var dy = p.y - particles[j].y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = color;
                        ctx.globalAlpha = (1 - dist / 120) * 0.2;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            });
            ctx.globalAlpha = 1;
            requestAnimationFrame(draw);
        }
        draw();
    }

    // ===================== 生成分类导航 =====================
    function renderCategories() {
        var html = '';
        // "全部" 按钮
        html += '<button class="cat-btn active" data-category="all"><i class="fas fa-th-large"></i> 全部</button>';
        SITES_DATA.categories.forEach(function (cat) {
            html += '<button class="cat-btn" data-category="' + cat.id + '">' +
                '<i class="' + cat.icon + '"></i> ' + cat.name +
                '</button>';
        });
        categoriesNav.innerHTML = html;

        // 分类点击事件
        categoriesNav.addEventListener('click', function (e) {
            var btn = e.target.closest('.cat-btn');
            if (!btn) return;
            var catId = btn.getAttribute('data-category');
            // 更新 active 状态
            categoriesNav.querySelectorAll('.cat-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            currentCategory = catId;
            renderSites(catId);
            // 关闭搜索建议
            searchResults.classList.remove('active');
            searchInput.value = '';
        });
    }

    // ===================== 渲染网站卡片 =====================
    function renderSites(categoryId) {
        var html = '';
        if (categoryId === 'all') {
            // 显示所有分类，每个分类带标题
            SITES_DATA.categories.forEach(function (cat) {
                html += '<div class="category-title"><i class="' + cat.icon + '"></i> ' + cat.name + '</div>';
                cat.sites.forEach(function (site) {
                    html += buildSiteCard(site);
                });
            });
        } else {
            // 显示单个分类
            var cat = SITES_DATA.categories.find(function (c) { return c.id === categoryId; });
            if (cat) {
                cat.sites.forEach(function (site) {
                    html += buildSiteCard(site);
                });
            }
        }
        if (!html) {
            html = '<div class="empty-state"><i class="fas fa-inbox"></i><p>暂无收录</p></div>';
        }
        sitesContainer.innerHTML = html;

        // 为所有卡片添加点击跳转
        sitesContainer.querySelectorAll('.site-card').forEach(function (card) {
            card.addEventListener('click', function () {
                var url = card.getAttribute('data-url');
                if (url) {
                    window.open(url, '_blank');
                }
            });
        });
    }

    function buildSiteCard(site) {
        return '<div class="site-card" data-url="' + site.url + '">' +
            '<span class="site-category-tag">' + site.category + '</span>' +
            '<img class="site-icon" src="' + site.icon + '" alt="' + site.name + '" loading="lazy" onerror="this.src=\'data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'48\\\' height=\\\'48\\\' viewBox=\\\'0 0 48 48\\\'%3E%3Crect width=\\\'48\\\' height=\\\'48\\\' fill=\\\'%23e2e8f0\\\' rx=\\\'8\\\'/%3E%3Ctext x=\\\'24\\\' y=\\\'30\\\' text-anchor=\\\'middle\\\' font-size=\\\'20\\\' fill=\\\'%2394a3b8\\\' font-family=\\\'Arial\\\'%3E' + site.name.charAt(0) + '%3C/text%3E%3C/svg%3E\'">' +
            '<div class="site-name">' + site.name + '</div>' +
            '<div class="site-desc">' + site.description + '</div>' +
            '</div>';
    }

    // ===================== 搜索功能 =====================
    function initSearch() {
        searchInput.addEventListener('input', function () {
            var keyword = this.value.trim().toLowerCase();
            if (!keyword) {
                searchResults.classList.remove('active');
                return;
            }
            // 搜索站点
            var results = allSites.filter(function (site) {
                return site.name.toLowerCase().includes(keyword) ||
                    site.description.toLowerCase().includes(keyword) ||
                    site.category.toLowerCase().includes(keyword);
            });
            // 限制最多显示 12 条
            results = results.slice(0, 12);
            if (results.length === 0) {
                searchResults.classList.remove('active');
                return;
            }
            var html = '';
            results.forEach(function (site) {
                html += '<div class="result-item" data-url="' + site.url + '">' +
                    '<img src="' + site.icon + '" alt="" onerror="this.src=\'data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' width=\\\'24\\\' height=\\\'24\\\' viewBox=\\\'0 0 24 24\\\'%3E%3Crect width=\\\'24\\\' height=\\\'24\\\' fill=\\\'%23e2e8f0\\\' rx=\\\'4\\\'/%3E%3Ctext x=\\\'12\\\' y=\\\'16\\\' text-anchor=\\\'middle\\\' font-size=\\\'12\\\' fill=\\\'%2394a3b8\\\' font-family=\\\'Arial\\\'%3E' + site.name.charAt(0) + '%3C/text%3E%3C/svg%3E\'">' +
                    '<div class="result-info">' +
                    '<div class="result-name">' + site.name + '</div>' +
                    '<div class="result-desc">' + site.description + '</div>' +
                    '</div>' +
                    '<span class="result-category">' + site.category + '</span>' +
                    '</div>';
            });
            searchResults.innerHTML = html;
            searchResults.classList.add('active');

            // 点击搜索项跳转
            searchResults.querySelectorAll('.result-item').forEach(function (item) {
                item.addEventListener('click', function () {
                    var url = this.getAttribute('data-url');
                    if (url) {
                        window.open(url, '_blank');
                    }
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                });
            });
        });

        // 点击外部关闭搜索建议
        document.addEventListener('click', function (e) {
            if (!searchInput.parentElement.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        // 回车直接跳转第一个结果或搜索
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var first = searchResults.querySelector('.result-item');
                if (first) {
                    var url = first.getAttribute('data-url');
                    if (url) {
                        window.open(url, '_blank');
                    }
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                }
            }
        });
    }

    // ===================== 主题切换 =====================
    function initTheme() {
        // 读取本地存储
        var dark = localStorage.getItem('wensii-dark') === 'true';
        if (dark) {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
            themeText.textContent = '深色模式';
        }

        themeSwitch.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                themeText.textContent = '深色模式';
                localStorage.setItem('wensii-dark', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                themeText.textContent = '浅色模式';
                localStorage.setItem('wensii-dark', 'false');
            }
        });
    }

    // ===================== 微信弹窗功能 =====================
    var WECHAT_ID = 'wensii_admin'; // 站长微信号

    function initWechat() {
        // 点击微信图标
        contactWechat.addEventListener('click', function (e) {
            e.preventDefault();
            // 复制微信号
            copyToClipboard(WECHAT_ID);
            // 显示弹窗
            showWechatModal();
        });

        // 关闭弹窗 - 点击关闭按钮
        wechatModalClose.addEventListener('click', function () {
            hideWechatModal();
        });

        // 关闭弹窗 - 点击遮罩
        wechatModal.addEventListener('click', function (e) {
            if (e.target === wechatModal) {
                hideWechatModal();
            }
        });

        // 弹窗内 "再次复制" 按钮
        wechatCopyBtn.addEventListener('click', function () {
            copyToClipboard(WECHAT_ID);
            // 视觉反馈
            var originalText = wechatCopyBtn.innerHTML;
            wechatCopyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
            setTimeout(function () {
                wechatCopyBtn.innerHTML = originalText;
            }, 1500);
        });

        // 显示微信号
        if (wechatIdDisplay) {
            wechatIdDisplay.textContent = WECHAT_ID;
        }
    }

    function showWechatModal() {
        wechatModal.style.display = 'flex';
        // 更新二维码 (确保微信号是最新的)
        var qrImg = document.getElementById('wechat-qr-img');
        if (qrImg) {
            // 使用 QR 生成 API，实际可替换为静态图片
            qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(WECHAT_ID);
        }
    }

    function hideWechatModal() {
        wechatModal.style.display = 'none';
    }

    // 复制到剪贴板
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(function () {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (e) {
            // 忽略
        }
        document.body.removeChild(textarea);
    }

    // ===================== 关于 / 反馈 =====================
    function initFooterLinks() {
        var aboutLink = $('about-link');
        var feedbackLink = $('feedback-link');

        aboutLink.addEventListener('click', function () {
            alert('文思导航 v2.0\n\n探索精彩网络世界\n收录优质网站，助您高效上网。');
        });

        feedbackLink.addEventListener('click', function () {
            window.open('mailto:admin@wensii.com?subject=文思导航反馈', '_blank');
        });
    }

    // ===================== 初始化 =====================
    function init() {
        // 更新网站计数
        updateSiteCount();

        // 粒子背景
        if (particlesCanvas) {
            initParticles();
        }

        // 渲染分类导航
        renderCategories();

        // 渲染全部站点
        renderSites('all');

        // 搜索
        initSearch();

        // 主题
        initTheme();

        // 微信弹窗
        initWechat();

        // 页脚链接
        initFooterLinks();

        // ESC 关闭弹窗
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                hideWechatModal();
            }
        });
    }

    // DOM 就绪后启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();