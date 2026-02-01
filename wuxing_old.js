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
document.addEventListener('DOMContentLoaded', function() {
    const wuxingCircle = document.getElementById('wuxingCircle');
    const infoDots = document.getElementById('infoDots');
    const elements = document.querySelectorAll('.wuxing-element');

    // 鼠标进入元素（暂时禁用，避免冲突）
    /*
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const elementType = this.dataset.element;
            showInfoDots(elementType);
            wuxingCircle.classList.add('paused');
        });

        element.addEventListener('mouseleave', function() {
            hideInfoDots();
            wuxingCircle.classList.remove('paused');
        });
    });
    */

    // 点击元素
    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            const elementType = this.dataset.element;
            console.log('点击了五行元素:', elementType);
            showDetailModal(elementType);
        });
    });

    // 显示信息点
    function showInfoDots(type) {
        const data = wuxingData[type];
        if (!data) return;

        infoDots.innerHTML = '';
        infoDots.classList.add('show');

        const centerX = 350; // 容器中心X
        const centerY = 350; // 容器中心Y
        const radius = 280; // 信息点分布半径

        data.info.forEach((item, index) => {
            const dot = document.createElement('div');
            dot.className = 'info-dot';
            dot.innerHTML = `${item.icon} ${item.label}`;
            dot.style.color = data.color;
            dot.style.borderLeft = `3px solid ${data.color}`;

            // 计算位置（圆形分布）
            const angle = (index / data.info.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            dot.style.transform = 'translate(-50%, -50%)';
            dot.style.animationDelay = `${index * 0.05}s`;

            // 悬停显示详情
            dot.addEventListener('mouseenter', function() {
                this.innerHTML = `${item.icon} ${item.label}<br><small>${item.detail}</small>`;
            });

            dot.addEventListener('mouseleave', function() {
                this.innerHTML = `${item.icon} ${item.label}`;
            });

            infoDots.appendChild(dot);
        });
    }

    // 隐藏信息点
    function hideInfoDots() {
        infoDots.classList.remove('show');
    }

    // 显示星爆效果的信息展示
    function showDetailModal(type) {
        const data = wuxingData[type];
        if (!data) return;

        // 移除已存在的星爆信息
        const existingBurst = document.querySelector('.star-burst-container');
        if (existingBurst) {
            existingBurst.remove();
        }

        // 暂停旋转
        const wuxingCircle = document.getElementById('wuxingCircle');
        if (wuxingCircle) {
            wuxingCircle.classList.add('paused');
        }

        // 获取圆盘中心位置
        const circleRect = wuxingCircle.getBoundingClientRect();
        const centerX = circleRect.left + circleRect.width / 2;
        const centerY = circleRect.top + circleRect.height / 2;

        // 计算合适的扩散距离（根据屏幕大小）
        const minDimension = Math.min(window.innerWidth, window.innerHeight);
        const distance = minDimension * 0.4; // 屏幕最小尺寸的40%作为扩散距离

        // 创建星爆容器
        const burstContainer = document.createElement('div');
        burstContainer.className = 'star-burst-container';
        burstContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        `;

        // 创建信息卡片（竖排古诗词风格）
        data.info.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'burst-card';

            // 直接计算最终位置（不要移动动画）
            const angle = (index / data.info.length) * 2 * Math.PI;
            const minDimension = Math.min(window.innerWidth, window.innerHeight);
            const distance = minDimension * 0.35;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;

            card.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%);
                width: 120px;
                min-height: 200px;
                padding: 1.5rem 0.8rem;
                background: white;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
                border: 3px solid ${data.color};
                pointer-events: auto;
                opacity: 0;
                transition: opacity 0.3s ease;
                transition-delay: ${index * 0.03}s;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                writing-mode: vertical-rl;
                text-orientation: upright;
            `;

            card.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 1rem; letter-spacing: 0.3rem;">${item.icon}</div>
                <div style="font-weight: bold; color: ${data.color}; font-size: 1.1rem; margin-bottom: 0.8rem; letter-spacing: 0.2rem; writing-mode: horizontal-tb;">${item.label}</div>
                <div style="font-size: 0.85rem; color: #666; line-height: 2; letter-spacing: 0.1rem; writing-mode: horizontal-tb;">${item.detail}</div>
            `;

            burstContainer.appendChild(card);

            // 立即显示（只改变透明度）
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.opacity = '1';
                }, index * 40);
            });

            // 悬停效果
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translate(-50%, -50%) scale(1.08)';
                this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
                this.style.zIndex = '1001';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(-50%, -50%) scale(1)';
                this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
                this.style.zIndex = 'auto';
            });
        });

        // 添加关闭说明
        const closeHint = document.createElement('div');
        closeHint.className = 'close-hint';
        closeHint.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 30px;
            font-size: 0.9rem;
            z-index: 1001;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        `;
        closeHint.textContent = '按 ESC 键或点击其他位置关闭';
        burstContainer.appendChild(closeHint);

        document.body.appendChild(burstContainer);

        // 显示关闭提示
        requestAnimationFrame(() => {
            setTimeout(() => {
                closeHint.style.opacity = '1';
            }, 400);
        });

        // 关闭函数（快速响应）
        const closeBurst = () => {
            const cards = burstContainer.querySelectorAll('.burst-card');
            cards.forEach(card => {
                card.style.opacity = '0';
            });

            requestAnimationFrame(() => {
                setTimeout(() => {
                    burstContainer.remove();
                    if (wuxingCircle) {
                        wuxingCircle.classList.remove('paused');
                    }
                }, 200);
            });
        };

        // ESC键关闭
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeBurst();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // 点击其他元素时关闭
        const allElements = document.querySelectorAll('.wuxing-element');
        allElements.forEach(el => {
            if (el !== targetElement) {
                el.addEventListener('click', closeBurst, { once: true });
            }
        });

        // 点击背景关闭（立即生效）
        burstContainer.addEventListener('click', function(e) {
            if (e.target === burstContainer) {
                closeBurst();
            }
        });
    }

    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .burst-card {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
    `;
    document.head.appendChild(style);
});
