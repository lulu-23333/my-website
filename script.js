// ===== 节气主题系统 =====

// 季节主题配置
const seasonThemes = {
    spring: {
        name: '春生',
        icon: '🌸',
        element: '肝',
        description: '主肝 - 生发之机<br>晚睡早起，宽衣松发，闲庭散步，保养生发',
        primary: '#66C89A',
        secondary: '#A8E6CF',
        text: '#2D5A3D',
        bg: '#F0F9F4'
    },
    summer: {
        name: '夏长',
        icon: '☀️',
        element: '心',
        description: '主心 - 成长之时<br>晚睡早起，享受出汗，宣畅气机，精神外向',
        primary: '#FF8C69',
        secondary: '#FFB6A3',
        text: '#8B3A3A',
        bg: '#FFF5F2'
    },
    longsummer: {
        name: '长夏',
        icon: '🌾',
        element: '脾',
        description: '主脾 - 化生之源<br>饮食清淡，规律作息，调和脾胃',
        primary: '#E8C547',
        secondary: '#F5DC76',
        text: '#8B6914',
        bg: '#FFFCF5'
    },
    autumn: {
        name: '秋收',
        icon: '🍂',
        element: '肺',
        description: '主肺 - 收敛之时<br>早睡早起，收敛神气，不使神思外持',
        primary: '#E8DCC8',
        secondary: '#F5F0E6',
        text: '#6B5D4F',
        bg: '#FFFCFA'
    },
    winter: {
        name: '冬藏',
        icon: '❄️',
        element: '肾',
        description: '主肾 - 封藏之本<br>早睡晚起，注重保暖，不出大汗，收敛情志',
        primary: '#4A6FA5',
        secondary: '#7DA5CA',
        text: '#2C3E50',
        bg: '#F0F5F9'
    }
};

// 二十四节气（简化版，基于2025年）
const solarTerms = {
    lichun: { month: 2, day: 3, name: '立春' },
    lixia: { month: 5, day: 5, name: '立夏' },
    liqiu: { month: 8, day: 7, name: '立秋' },
    lidong: { month: 11, day: 7, name: '立冬' }
};

// 判断当前季节
function getCurrentSeason() {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate();

    // 将日期转换为数字，便于比较
    const dateValue = month * 100 + day;

    // 长夏时间段判断
    // 春→长夏：4月28日-5月11日 (428-511)
    // 夏→长夏：8月1日-8月14日 (801-814)
    // 秋→长夏：11月1日-11月14日 (1101-1114)
    // 冬→长夏：1月28日-2月10日 (128-210)
    const longSummerPeriods = [
        { start: 428, end: 511 },   // 春→长夏
        { start: 801, end: 814 },   // 夏→长夏
        { start: 1101, end: 1114 }, // 秋→长夏
        { start: 128, end: 210 }    // 冬→长夏
    ];

    // 检查是否在长夏
    for (const period of longSummerPeriods) {
        if (dateValue >= period.start && dateValue <= period.end) {
            return { season: 'longsummer', term: '长夏' };
        }
    }

    // 判断四季
    if (dateValue >= 203 && dateValue < 504) {
        return { season: 'spring', term: '立春后' };
    } else if (dateValue >= 505 && dateValue < 807) {
        return { season: 'summer', term: '立夏后' };
    } else if (dateValue >= 808 && dateValue < 1107) {
        return { season: 'autumn', term: '立秋后' };
    } else {
        return { season: 'winter', term: '立冬后' };
    }
}

// 应用主题
function applyTheme(season) {
    const theme = seasonThemes[season];
    console.log('应用主题:', season, theme);

    // 更新CSS变量
    document.documentElement.style.setProperty('--current-primary', theme.primary);
    document.documentElement.style.setProperty('--current-secondary', theme.secondary);
    document.documentElement.style.setProperty('--current-text', theme.text);
    document.documentElement.style.setProperty('--current-bg', theme.bg);

    console.log('CSS变量已更新:', {
        primary: theme.primary,
        secondary: theme.secondary,
        text: theme.text,
        bg: theme.bg
    });

    // 更新页面内容（仅home.html有这些元素）
    const seasonIcon = document.getElementById('seasonIcon');
    const seasonTitle = document.getElementById('seasonTitle');
    const seasonDescription = document.getElementById('seasonDescription');

    if (seasonIcon) {
        seasonIcon.textContent = theme.icon;
        console.log('更新图标:', theme.icon);
    }
    if (seasonTitle) {
        seasonTitle.textContent = theme.name;
        console.log('更新标题:', theme.name);
    }
    if (seasonDescription) {
        seasonDescription.innerHTML = theme.description;
        console.log('更新描述');
    }
}

// 获取当前节气名称
function getCurrentSolarTerm() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dateValue = month * 100 + day;

    // 简化版节气判断
    if (dateValue >= 203 && dateValue < 205) return '立春';
    if (dateValue >= 505 && dateValue < 507) return '立夏';
    if (dateValue >= 807 && dateValue < 809) return '立秋';
    if (dateValue >= 1107 && dateValue < 1109) return '立冬';

    // 其他时间段返回季节
    const { season, term } = getCurrentSeason();
    const seasonNames = {
        spring: '春季',
        summer: '夏季',
        longsummer: '长夏',
        autumn: '秋季',
        winter: '冬季'
    };
    return seasonNames[season];
}

// 初始化
function init() {
    console.log('开始初始化...');
    const { season, term } = getCurrentSeason();
    const currentTerm = getCurrentSolarTerm();

    console.log('检测结果 - 季节:', season, '节气:', currentTerm);

    // 更新节气显示
    const subtitleEl = document.getElementById('seasonSubtitle');
    if (subtitleEl) {
        subtitleEl.textContent = `当前节气：${currentTerm}`;
        console.log('已更新节气显示');
    }

    // 应用主题
    applyTheme(season);

    // 更新导航栏季节选择器标签
    updateSeasonSelectorLabel(season);

    console.log(`初始化完成 - 当前季节: ${season}, 节气: ${currentTerm}`);
}

// 更新季节按钮的active状态（已注释，因为导航栏中没有.season-btn）
function updateActiveSeasonButton(season) {
    // 暂时注释，因为导航栏结构中没有 .season-btn
    /*
    const buttons = document.querySelectorAll('.season-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.season === season) {
            btn.classList.add('active');
        }
    });
    */
}

// 更新导航栏季节选择器的显示
function updateSeasonSelectorLabel(season) {
    const labelEl = document.getElementById('currentSeasonLabel');
    if (labelEl && seasonThemes[season]) {
        const theme = seasonThemes[season];
        // 长夏保持原样，其他季节去掉后缀加上"季"
        let displayName;
        if (season === 'longsummer') {
            displayName = theme.name; // 长夏
        } else {
            displayName = `${theme.name.replace(/生|长|收|藏/g, '')}季`;
        }
        labelEl.textContent = `${theme.icon} ${displayName}`;
    }
}

// 季节切换事件处理
function setupSeasonSwitcher() {
    console.log('===== 初始化季节选择器 =====');

    // 下拉菜单切换
    const selectorBtn = document.getElementById('seasonSelectorBtn');
    const dropdown = document.getElementById('seasonDropdown');

    if (!selectorBtn || !dropdown) {
        console.log('❌ 季节选择器元素未找到');
        console.log('selectorBtn:', selectorBtn);
        console.log('dropdown:', dropdown);
        return;
    }

    console.log('✅ 找到季节选择器元素');

    // 移除旧的事件监听器（如果有的话）
    const newBtn = selectorBtn.cloneNode(true);
    selectorBtn.parentNode.replaceChild(newBtn, selectorBtn);
    const newSelectorBtn = document.getElementById('seasonSelectorBtn');

    newSelectorBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('🔄 切换季节下拉菜单');
        dropdown.classList.toggle('show');
        newSelectorBtn.classList.toggle('active');
    });

    // 点击外部关闭下拉菜单
    const closeDropdown = function(e) {
        if (!newSelectorBtn.contains(e.target)) {
            dropdown.classList.remove('show');
            newSelectorBtn.classList.remove('active');
        }
    };
    document.addEventListener('click', closeDropdown);

    // 下拉菜单项点击事件
    const dropdownItems = dropdown.querySelectorAll('.season-dropdown-item');
    console.log('找到下拉菜单项数量:', dropdownItems.length);

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const season = this.dataset.season;
            console.log('🎯 选择季节:', season);

            if (season && seasonThemes[season]) {
                // 应用新主题
                applyTheme(season);

                // 更新选择器标签
                updateSeasonSelectorLabel(season);

                // 更新节气显示（如果存在）
                const subtitleEl = document.getElementById('seasonSubtitle');
                if (subtitleEl) {
                    const theme = seasonThemes[season];
                    subtitleEl.textContent = `手动选择：${theme.name}`;
                }

                // 关闭下拉菜单
                dropdown.classList.remove('show');
                newSelectorBtn.classList.remove('active');

                console.log('✅ 已切换到季节:', season);
                console.log('✅ 主题颜色:', seasonThemes[season].primary);
            }
        });
    });

    console.log('✅ 季节选择器事件已绑定');
}

// 移动端菜单切换
document.getElementById('menuToggle')?.addEventListener('click', function() {
    document.getElementById('navMenu')?.classList.toggle('active');
});

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        setupSeasonSwitcher();
    });
} else {
    init();
    setupSeasonSwitcher();
}
