// ============================================================
// 文思导航 - 主逻辑文件 (main.js) v3.0
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
    var cursorGlow = $('cursor-glow');

    // 微信弹窗相关
    var wechatOverlay = $('wechat-overlay');
    var wechatModal = $('wechat-modal');
    var wechatClose = $('wechat-close');
    var wechatCopyBtn = $('wechat-copy-btn');
    var wechatToast = $('wechat-toast');
    var wechatIdDisplay = $('wechat-id-display');
    var contactWechat = $('contact-wechat');

    // 关于/反馈
    var aboutLink = $('about-link');
    var feedbackLink = $('feedback-link');
    var aboutOverlay = $('about-overlay');
    var aboutClose = $('about-close');
    var feedbackOverlay = $('feedback-overlay');
    var feedbackClose = $('feedback-close');
    var feedbackCopyBtn = $('feedback-copy-btn');
    var feedbackToast = $('feedback-toast');

    // 微信号
    var WECHAT_ID = 'wensiyucong';

    // ===================== 状态 =====================
    var currentCategory = 'all';
    var allSites = [];
    var selectedCardId = null;

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

    // ===================== 粒子背景 + 连线 =====================
    function initParticles() {
        var ctx = particlesCanvas.getContext('2d');
        var particles = [];
        var count = 80;
        var connectDistance = 150;

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
                size: Math.random() * 2.5 + 1,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        function isDark() {
            return document.body.classList.contains('dark-mode');
        }

        function getColor() {
            return isDark() ? 'rgba(129, 140, 248, ' : 'rgba(99, 102, 241, ';
        }

        function animate() {
            ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

            var baseColor = getColor();

            // 更新和绘制粒子
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = baseColor + p.alpha + ')';
                ctx.fill();
            }

            // 粒子连线
            for (var i = 0; i < particles.length; i++) {
                for (var j = i + 1; j < particles.length; j++) {
                    var dx = particles[i].x - particles[j].x;
                    var dy = particles[i].y - particles[j].y;
                    var dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectDistance) {
                        var lineAlpha = (1 - dist / connectDistance) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = baseColor + lineAlpha + ')';
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    // ===================== 鼠标跟随光晕 =====================
    function initCursorGlow() {
        var glow = cursorGlow;
        var isDarkMode = document.body.classList.contains('dark-mode');

        document.addEventListener('mousemove', function (e) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            if (!glow.classList.contains('active')) {
                glow.classList.add('active');
            }
        });

        document.addEventListener('mouseleave', function () {
            glow.classList.remove('active');
        });

        // 主题变化时更新光晕颜色
        var observer = new MutationObserver(function () {
            var dark = document.body.classList.contains('dark-mode');
            if (dark) {
                glow.style.background = 'radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, transparent 70%)';
            } else {
                glow.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)';
            }
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }

    // ===================== 渲染分类导航（含数量） =====================
    function renderCategories() {
        var html = '';

        // "全部" 标签
        var totalCount = allSites.length;
        html += '<div class="category-tab' + (currentCategory === 'all' ? ' active' : '') + '" data-category="all">';
        html += '<i class="fas fa-th"></i> 全部';
        html += ' <span class="cat-count">' + totalCount + '</span>';
        html += '</div>';

        SITES_DATA.categories.forEach(function (cat) {
            var isActive = (currentCategory === cat.id);
            html += '<div class="category-tab' + (isActive ? ' active' : '') + '" data-category="' + cat.id + '">';
            html += '<i class="' + cat.icon + '"></i> ' + cat.name;
            html += ' <span class="cat-count">' + cat.sites.length + '</span>';
            html += '</div>';
        });

        categoriesNav.innerHTML = html;

        // 绑定点击事件
        categoriesNav.querySelectorAll('.category-tab').forEach(function (tab) {
            tab.addEventListener('click', function () {
                var cat = this.getAttribute('data-category');
                currentCategory = cat;
                renderCategories();
                renderSites();
                // 滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // ===================== 渲染网站卡片（含3D效果、选中状态） =====================
    function renderSites() {
        var html = '';

        if (currentCategory === 'all') {
            SITES_DATA.categories.forEach(function (cat) {
                html += renderCategorySection(cat);
            });
        } else {
            var foundCat = null;
            SITES_DATA.categories.forEach(function (cat) {
                if (cat.id === currentCategory) {
                    foundCat = cat;
                }
            });
            if (foundCat) {
                html += renderCategorySection(foundCat);
            }
        }

        sitesContainer.innerHTML = html;

        // 绑定卡片事件
        document.querySelectorAll('.site-card').forEach(function (card) {
            // 点击选中效果
            card.addEventListener('click', function (e) {
                var cardId = this.getAttribute('data-id');
                if (cardId) {
                    // 移除其他卡片的选中状态
                    document.querySelectorAll('.site-card.selected').forEach(function (c) {
                        c.classList.remove('selected');
                    });
                    this.classList.add('selected');
                    selectedCardId = cardId;
                }
                // 打开链接
                var url = this.getAttribute('data-url');
                if (url) {
                    window.open(url, '_blank');
                }
            });

            // 3D 倾斜效果
            card.addEventListener('mousemove', function (e) {
                var rect = this.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var centerX = rect.width / 2;
                var centerY = rect.height / 2;
                var rotateX = ((y - centerY) / centerY) * -8;
                var rotateY = ((x - centerX) / centerX) * 8;
                this.style.transform =
                    'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function () {
                if (this.classList.contains('selected')) {
                    this.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(-4px) scale(1.01)';
                } else {
                    this.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
                }
            });
        });

        // 恢复选中状态
        if (selectedCardId) {
            var selectedEl = document.querySelector('.site-card[data-id="' + selectedCardId + '"]');
            if (selectedEl) {
                selectedEl.classList.add('selected');
            }
        }
    }

    // 渲染单个分类区块
    function renderCategorySection(cat) {
        var html = '<div class="category-section">';
        html += '<div class="category-section-title">';
        html += '<i class="' + cat.icon + '"></i> ' + cat.name;
        html += ' <span class="section-count">' + cat.sites.length + '</span>';
        html += '</div>';
        html += '<div class="sites-grid">';

        cat.sites.forEach(function (site) {
            var isSelected = (selectedCardId == site.id);
            html += '<div class="site-card' + (isSelected ? ' selected' : '') + '" data-id="' + site.id + '" data-url="' + site.url + '">';
            html += '<div class="card-glow"></div>';
            html += '<div class="card-shine"></div>';
            html += '<img class="card-icon" src="' + site.icon + '" alt="' + site.name + '" loading="lazy" onerror="this.style.display=\'none\'">';
            html += '<div class="card-name">' + site.name + '</div>';
            html += '<div class="card-desc">' + site.description + '</div>';
            html += '</div>';
        });

        html += '</div>';
        html += '</div>';
        return html;
    }

    // ===================== 搜索功能 =====================
    function initSearch() {
        searchInput.addEventListener('input', function () {
            var query = this.value.trim().toLowerCase();
            if (query.length === 0) {
                searchResults.classList.remove('active');
                return;
            }

            var results = [];
            allSites.forEach(function (site) {
                if (site.name.toLowerCase().includes(query) ||
                    site.description.toLowerCase().includes(query) ||
                    site.category.toLowerCase().includes(query)) {
                    results.push(site);
                }
            });

            if (results.length === 0) {
                searchResults.classList.remove('active');
                return;
            }

            var html = '';
            results.slice(0, 8).forEach(function (site) {
                html += '<div class="result-item" data-url="' + site.url + '">';
                html += '<img src="' + site.icon + '" alt="" onerror="this.style.display=\'none\'">';
                html += '<div class="result-info">';
                html += '<div class="result-name">' + site.name + '</div>';
                html += '<div class="result-desc">' + site.description + '</div>';
                html += '</div>';
                html += '<span class="result-category">' + site.category + '</span>';
                html += '</div>';
            });

            searchResults.innerHTML = html;
            searchResults.classList.add('active');

            // 点击搜索结果
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

        // 点击外部关闭搜索结果
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.search-box')) {
                searchResults.classList.remove('active');
            }
        });
    }

    // ===================== 主题切换 =====================
    function initTheme() {
        // 检查本地存储
        var savedTheme = localStorage.getItem('wensii-theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
            themeText.textContent = '深色模式';
        }

        themeSwitch.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                themeText.textContent = '深色模式';
                localStorage.setItem('wensii-theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                themeText.textContent = '浅色模式';
                localStorage.setItem('wensii-theme', 'light');
            }
        });
    }

    // ===================== 微信弹窗逻辑 =====================
    function initWechat() {
        // 显示微信号
        wechatIdDisplay.textContent = WECHAT_ID;

        // 点击微信图标
        contactWechat.addEventListener('click', function (e) {
            e.preventDefault();
            // 复制微信号
            copyToClipboard(WECHAT_ID);
            // 显示弹窗
            wechatOverlay.classList.add('active');
            // 显示复制成功提示
            showWechatToast();
        });

        // 关闭弹窗
        wechatClose.addEventListener('click', function () {
            wechatOverlay.classList.remove('active');
            wechatToast.classList.remove('show');
        });

        wechatOverlay.addEventListener('click', function (e) {
            if (e.target === this) {
                wechatOverlay.classList.remove('active');
                wechatToast.classList.remove('show');
            }
        });

        // 复制按钮
        wechatCopyBtn.addEventListener('click', function () {
            copyToClipboard(WECHAT_ID);
            showWechatToast();
        });

        function showWechatToast() {
            wechatToast.classList.remove('show');
            // 触发重排以重启动画
            void wechatToast.offsetWidth;
            wechatToast.classList.add('show');
            setTimeout(function () {
                wechatToast.classList.remove('show');
            }, 2500);
        }
    }

    // ===================== 关于弹窗 =====================
    function initAbout() {
        aboutLink.addEventListener('click', function (e) {
            e.preventDefault();
            aboutOverlay.classList.add('active');
        });

        aboutClose.addEventListener('click', function () {
            aboutOverlay.classList.remove('active');
        });

        aboutOverlay.addEventListener('click', function (e) {
            if (e.target === this) {
                aboutOverlay.classList.remove('active');
            }
        });
    }

    // ===================== 反馈弹窗 =====================
    function initFeedback() {
        feedbackLink.addEventListener('click', function (e) {
            e.preventDefault();
            feedbackOverlay.classList.add('active');
        });

        feedbackClose.addEventListener('click', function () {
            feedbackOverlay.classList.remove('active');
            feedbackToast.classList.remove('show');
        });

        feedbackOverlay.addEventListener('click', function (e) {
            if (e.target === this) {
                feedbackOverlay.classList.remove('active');
                feedbackToast.classList.remove('show');
            }
        });

        feedbackCopyBtn.addEventListener('click', function () {
            copyToClipboard('ccw@27ws.cn');
            feedbackToast.classList.remove('show');
            void feedbackToast.offsetWidth;
            feedbackToast.classList.add('show');
            setTimeout(function () {
                feedbackToast.classList.remove('show');
            }, 2500);
        });
    }

    // ===================== 通用复制工具 =====================
    function copyToClipboard(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (e) {
            // 降级方案
            navigator.clipboard && navigator.clipboard.writeText(text);
        }
        document.body.removeChild(textarea);
    }

    // ===================== 初始化所有功能 =====================
    function init() {
        updateSiteCount();
        renderCategories();
        renderSites();
        initParticles();
        initCursorGlow();
        initSearch();
        initTheme();
        initWechat();
        initAbout();
        initFeedback();

        // 版本号更新
        var versionEl = document.querySelector('.version');
        if (versionEl) {
            versionEl.textContent = 'v3.0';
        }
    }

    // DOM 就绪后启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();