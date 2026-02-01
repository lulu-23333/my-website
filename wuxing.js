// ===== 五行数据 =====
const wuxingData = {
    wood: {
        name: '木',
        color: '#66C89A',
        info: [
            { icon: '🫀', label: '肝', detail: '肝主疏泄，喜条达而恶抑郁' },
            { icon: '😤', label: '怒', detail: '怒伤肝，大怒则形气绝' },
            { icon: '🍋', label: '酸', detail: '酸入肝，过食酸则伤肝' },
            { icon: '👁️', label: '目', detail: '肝开窍于目，肝血不足则视物模糊' },
            { icon: '🌸', label: '春', detail: '春季养肝，宜舒畅情志' },
            { icon: '🟢', label: '青', detail: '青色入肝，面色青主寒痛瘀血' },
            { icon: '📏', label: '弦脉', detail: '肝主弦脉，端直而长，如按琴弦' },
            { icon: '🐔', label: '鸡肉', detail: '鸡肉入肝经，温中益气' },
            { icon: '🌾', label: '麦', detail: '麦为肝之谷，养心安神' },
            { icon: '🍑', label: '李', detail: '李子入肝，清热生津' },
            { icon: '👻', label: '魂', detail: '肝藏魂，肝虚则魂不安' }
        ]
    },
    fire: {
        name: '火',
        color: '#FF8C69',
        info: [
            { icon: '❤️', label: '心', detail: '心主血脉，心藏神' },
            { icon: '😄', label: '喜', detail: '喜伤心，暴喜则心气涣散' },
            { icon: '🌶️', label: '苦', detail: '苦入心，适量苦味清心火' },
            { icon: '👅', label: '舌', detail: '心开窍于舌，心火旺则舌红' },
            { icon: '☀️', label: '夏', detail: '夏季养心，宜静心宁神' },
            { icon: '🔴', label: '赤', detail: '赤色入心，面色赤主热证' },
            { icon: '🌊', label: '洪脉', detail: '心主洪脉，来盛去衰，如波涛汹涌' },
            { icon: '🐑', label: '羊肉', detail: '羊肉入心经，温补气血' },
            { icon: '🌾', label: '黍', detail: '黍为心之谷，益气补中' },
            { icon: '🍑', label: '杏', detail: '杏子入心，润肺定喘' },
            { icon: '✨', label: '神', detail: '心藏神，心虚则神不安' }
        ]
    },
    earth: {
        name: '土',
        color: '#E8C547',
        info: [
            { icon: '🫁', label: '脾', detail: '脾主运化，统血，升清' },
            { icon: '🤔', label: '思', detail: '思伤脾，思虑过度则不思饮食' },
            { icon: '🍬', label: '甘', detail: '甘入脾，适量甘味补脾气' },
            { icon: '👄', label: '口', detail: '脾开窍于口，脾虚则口淡无味' },
            { icon: '🌾', label: '长夏', detail: '长夏养脾，宜健脾祛湿' },
            { icon: '🟡', label: '黄', detail: '黄色入脾，面色黄主脾虚湿盛' },
            { icon: '🌊', label: '缓脉', detail: '脾主缓脉，来去怠缓，一息四至' },
            { icon: '🐄', label: '牛肉', detail: '牛肉入脾经，补中益气' },
            { icon: '🍚', label: '稷', detail: '稷为脾之谷，和中补气' },
            { icon: '🍎', label: '枣', detail: '枣子入脾，补中益气' },
            { icon: '💭', label: '意', detail: '脾藏意，脾虚则意不守' }
        ]
    },
    metal: {
        name: '金',
        color: '#E8DCC8',
        info: [
            { icon: '🫁', label: '肺', detail: '肺主气，司呼吸，主宣发肃降' },
            { icon: '😢', label: '忧', detail: '忧伤肺，忧愁则气消' },
            { icon: '🧄', label: '辛', detail: '辛入肺，适量辛味宣肺散邪' },
            { icon: '👃', label: '鼻', detail: '肺开窍于鼻，肺热则鼻塞' },
            { icon: '🍂', label: '秋', detail: '秋季养肺，宜敛肺养阴' },
            { icon: '⚪', label: '白', detail: '白色入肺，面色白主气血虚' },
            { icon: '🌊', label: '浮脉', detail: '肺主浮脉，轻取即得，如木漂水' },
            { icon: '🐖', label: '猪肉', detail: '猪肉入肺经，滋阴润燥' },
            { icon: '🍚', label: '稻', detail: '稻为肺之谷，补中益气' },
            { icon: '🍑', label: '桃', detail: '桃子入肺，生津润肠' },
            { icon: '💫', label: '魄', detail: '肺藏魄，肺虚则魄不宁' }
        ]
    },
    water: {
        name: '水',
        color: '#4A6FA5',
        info: [
            { icon: '🫘', label: '肾', detail: '肾主藏精，主水液，主纳气' },
            { icon: '😱', label: '恐', detail: '恐伤肾，恐则气下，二便失禁' },
            { icon: '🧂', label: '咸', detail: '咸入肾，适量咸味补肾水' },
            { icon: '👂', label: '耳', detail: '肾开窍于耳，肾虚则耳鸣' },
            { icon: '❄️', label: '冬', detail: '冬季养肾，宜藏精固本' },
            { icon: '⚫', label: '黑', detail: '黑色入肾，面色黑主肾虚寒' },
            { icon: '🌊', label: '沉脉', detail: '肾主沉脉，重手始得，如石投水' },
            { icon: '🐕', label: '狗肉', detail: '狗肉入肾经，温肾壮阳' },
            { icon: '🫘', label: '豆', detail: '豆为肾之谷，补肾利水' },
            { icon: '🍇', label: '栗', detail: '栗子入肾，补肾强腰' },
            { icon: '🌟', label: '志', detail: '肾藏志，肾虚则志不坚' }
        ]
    }
};

// ===== 五行页面交互 =====
// 全局变量
let isCardShowing = false;
let updateHintButton = null;

// 确保能访问到季节主题数据（如果 script.js 中没有定义）
if (typeof seasonThemes === 'undefined') {
    window.seasonThemes = {
        spring: {
            name: '春生',
            icon: '🌸',
            primary: '#66C89A',
            secondary: '#A8E6CF',
            text: '#2D5A3D',
            bg: '#F0F9F4'
        },
        summer: {
            name: '夏长',
            icon: '☀️',
            primary: '#FF8C69',
            secondary: '#FFB6A3',
            text: '#8B3A3A',
            bg: '#FFF5F2'
        },
        longsummer: {
            name: '长夏',
            icon: '🌾',
            primary: '#E8C547',
            secondary: '#F5DC76',
            text: '#8B6914',
            bg: '#FFFCF5'
        },
        autumn: {
            name: '秋收',
            icon: '🍂',
            primary: '#E8DCC8',
            secondary: '#F5F0E6',
            text: '#6B5D4F',
            bg: '#FFFCFA'
        },
        winter: {
            name: '冬藏',
            icon: '❄️',
            primary: '#4A6FA5',
            secondary: '#7DA5CA',
            text: '#2C3E50',
            bg: '#F0F5F9'
        }
    };
    console.log('已加载季节主题数据到 window 对象');
}

document.addEventListener('DOMContentLoaded', function() {
    const wuxingCircle = document.getElementById('wuxingCircle');
    const elements = document.querySelectorAll('.wuxing-element');
    const clickHint = document.getElementById('clickHint');
    const hintIcon = clickHint.querySelector('.click-hint-icon');
    const hintText = clickHint.querySelector('.click-hint-text');

    // 更新按钮状态函数
    updateHintButton = function() {
        if (isCardShowing) {
            hintIcon.textContent = '✕';
            hintText.textContent = '关闭';
            clickHint.style.animation = 'none';
        } else {
            hintIcon.textContent = '👆';
            hintText.textContent = '点击元素';
            clickHint.style.animation = 'hintPulse 2s ease-in-out infinite';
        }
    }

    // 关闭卡片
    function closeCards() {
        console.log('开始关闭卡片...');
        const existingContainer = document.querySelector('.knowledge-fullpage-container');
        if (existingContainer) {
            console.log('找到卡片容器，准备移除');
            existingContainer.remove();
            if (wuxingCircle) {
                wuxingCircle.classList.remove('paused');
                console.log('恢复圆盘旋转');
            }
        } else {
            console.log('未找到卡片容器');
        }
        isCardShowing = false;
        updateHintButton();
        console.log('卡片已关闭，状态已更新');
    }

    // 点击提示按钮
    clickHint.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('===== 点击提示按钮 =====');
        console.log('当前 isCardShowing 状态:', isCardShowing);
        console.log('当前按钮文字:', hintText.textContent);

        if (isCardShowing) {
            // 如果卡片正在显示，则关闭
            console.log('检测到卡片正在显示，执行关闭');
            closeCards();
        } else {
            // 如果没有卡片，标记已看过提示
            console.log('没有卡片显示，隐藏提示按钮');
            localStorage.setItem('wuxingHintSeen', 'true');
            clickHint.classList.add('hidden');
        }
    });

    // 点击元素显示全屏知识卡片
    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            const elementType = this.dataset.element;
            console.log('===== 点击五行元素 =====');
            console.log('点击的元素:', elementType);

            // 如果按钮被隐藏了，显示出来并更新为关闭状态
            if (clickHint.classList.contains('hidden')) {
                console.log('按钮被隐藏，现在显示出来');
                clickHint.classList.remove('hidden');
            }

            // 先移除已存在的容器并恢复圆盘旋转
            const existingContainer = document.querySelector('.knowledge-fullpage-container');
            if (existingContainer) {
                console.log('移除旧的卡片容器');
                existingContainer.remove();
                if (wuxingCircle) {
                    wuxingCircle.classList.remove('paused');
                }
            }

            // 标记卡片正在显示
            isCardShowing = true;
            console.log('设置 isCardShowing = true');
            updateHintButton();

            // 短暂延迟后显示新的卡片（确保DOM更新完成）
            setTimeout(() => {
                console.log('调用 showFullPageCards 显示:', elementType, '的卡片');
                showFullPageCards(elementType);
            }, 50);
        });
    });

    // 显示全页面铺满的知识卡片
    function showFullPageCards(type) {
        const data = wuxingData[type];
        if (!data) return;

        // 再次确认移除旧容器
        const existingContainer = document.querySelector('.knowledge-fullpage-container');
        if (existingContainer) {
            existingContainer.remove();
        }

        // 暂停旋转
        if (wuxingCircle) {
            wuxingCircle.classList.add('paused');
        }

        // 获取圆盘位置
        const circleRect = wuxingCircle.getBoundingClientRect();
        const circleCenter = {
            x: circleRect.left + circleRect.width / 2,
            y: circleRect.top + circleRect.height / 2
        };
        const circleRadius = Math.max(circleRect.width, circleRect.height) / 2 + 80;

        // 创建全屏容器（使用左右两栏布局，避开中间圆盘）
        const container = document.createElement('div');
        container.className = 'knowledge-fullpage-container';
        container.style.cssText = `
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            padding: 2rem;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr 600px 1fr;
            gap: 2rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            overflow-y: auto;
        `;

        // 创建左侧卡片容器
        const leftColumn = document.createElement('div');
        leftColumn.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: flex-end;
            padding-right: 1rem;
            height: 600px;
            justify-content: center;
        `;

        // 创建右侧卡片容器
        const rightColumn = document.createElement('div');
        rightColumn.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: flex-start;
            padding-left: 1rem;
            height: 600px;
            justify-content: center;
        `;

        // 创建中间区域（包含圆盘空白和底部卡片容器）
        const centerArea = document.createElement('div');
        centerArea.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 600px;
            position: relative;
        `;

        // 中间空白区域（留给圆盘）
        const centerSpace = document.createElement('div');
        centerSpace.style.cssText = `
            pointer-events: none;
            flex: 1;
        `;

        // 底部卡片容器（存放多余的卡片）- 绝对定位在圆盘下方
        const bottomRow = document.createElement('div');
        bottomRow.style.cssText = `
            display: flex;
            justify-content: center;
            width: 100%;
            position: absolute;
            bottom: -40px;
        `;

        centerArea.appendChild(centerSpace);
        centerArea.appendChild(bottomRow);

        container.appendChild(leftColumn);
        container.appendChild(centerArea);
        container.appendChild(rightColumn);

        // 创建卡片（极低透明度，只有边框感，居中对齐）
        data.info.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'knowledge-card';

            card.style.cssText = `
                background: rgba(255, 255, 255, 0.15);
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-left: 5px solid ${data.color};
                border-radius: 12px;
                padding: 0.8rem 1.4rem;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                display: flex;
                align-items: center;
                gap: 1rem;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.4s ease;
                transition-delay: ${index * 0.05}s;
                cursor: pointer;
                backdrop-filter: blur(2px);
            `;

            card.innerHTML = `
                <div style="font-size: 1.8rem; flex-shrink: 0; line-height: 1; text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);">${item.icon}</div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: bold; color: ${data.color}; font-size: 1rem; margin-bottom: 0.3rem; line-height: 1.3; text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);">${item.label}</div>
                    <div style="font-size: 0.85rem; color: #555; line-height: 1.4; text-shadow: 0 0 6px rgba(255, 255, 255, 0.5);">${item.detail}</div>
                </div>
            `;

            // 如果是最后一条且总数为单数，放到中间底部
            const isLastOdd = index === data.info.length - 1 && data.info.length % 2 === 1;

            if (isLastOdd) {
                card.style.width = '100%';
                card.style.maxWidth = '380px';
                bottomRow.appendChild(card);
            } else {
                card.style.width = '100%';
                card.style.maxWidth = '380px';
                // 交替分配到左右两栏（跳过最后一条单数）
                const adjustedIndex = index >= data.info.length - 1 ? index : index;
                if (adjustedIndex % 2 === 0) {
                    leftColumn.appendChild(card);
                } else {
                    rightColumn.appendChild(card);
                }
            }

            // 悬停效果
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                this.style.background = 'rgba(255, 255, 255, 0.25)';
                this.style.border = '2px solid rgba(255, 255, 255, 0.7)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                this.style.background = 'rgba(255, 255, 255, 0.15)';
                this.style.border = '2px solid rgba(255, 255, 255, 0.5)';
            });
        });

        // 将容器添加到五行页面容器中（作为背景层的一部分）
        const wuxingPage = document.querySelector('.wuxing-page');
        if (wuxingPage) {
            wuxingPage.appendChild(container);
        } else {
            document.body.appendChild(container);
        }

        // 显示容器
        requestAnimationFrame(() => {
            container.style.opacity = '1';

            // 显示所有卡片
            const cards = container.querySelectorAll('.knowledge-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 + index * 35);
            });
        });

        // 关闭函数
        const closeContainer = () => {
            container.style.opacity = '0';
            setTimeout(() => {
                container.remove();
                if (wuxingCircle) {
                    wuxingCircle.classList.remove('paused');
                }
                // 更新按钮状态
                isCardShowing = false;
                updateHintButton();
            }, 300);
        };

        // ESC键关闭
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeContainer();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // 点击卡片外的空白区域关闭
        container.addEventListener('click', function(e) {
            if (e.target === container) {
                closeContainer();
            }
        });
    }
});


// ===== 五行页面专属季节选择器（已禁用，使用script.js的统一版本）=====
// setupWuxingSeasonSwitcher 函数已移除，避免与 script.js 冲突


