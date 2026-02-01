// ===== 中医体质类型数据 =====
const constitutionTypes = {
    peaceful: {
        name: '平和质',
        features: '面色红润，精力充沛，睡眠良好，舌淡红，苔薄白，脉缓和有',
        advice: '保持良好的生活习惯，饮食有节，劳逸结合。顺应四时变化，适当运动。保持平和心态，避免情志过极。'
    },
    qixu: {
        name: '气虚质',
        features: '声音低弱，气短懒言，容易疲乏，易出汗，舌淡红，舌体胖大',
        advice: '宜食补气健脾食物，如山药、莲子、大枣、鸡肉。避免剧烈运动，选择散步、太极等温和运动。保持规律作息，避免过度劳累。'
    },
    yangxu: {
        name: '阳虚质',
        features: '怕冷，手足不温，喜热饮食，精神不振，舌淡胖嫩',
        advice: '宜食温补食物，如羊肉、韭菜、核桃、生姜。注意保暖，避免受凉。适当进行阳光浴，增强体质。避免生冷寒凉食物。'
    },
    yinxu: {
        name: '阴虚质',
        features: '口燥咽干，手足心热，易心烦，失眠多梦，舌红少津',
        advice: '宜食滋阴润燥食物，如百合、银耳、鸭肉、梨。避免辛辣燥热食物。保持充足睡眠，避免熬夜。适当进行静心运动，如瑜伽、太极。'
    },
    tanshi: {
        name: '痰湿质',
        features: '体形肥胖，腹部肥满，口黏苔腻，身重不爽，舌体胖大',
        advice: '宜食健脾祛湿食物，如薏米、赤小豆、冬瓜。控制饮食，避免肥甘厚味。增加运动量，促进水湿代谢。保持居住环境干燥通风。'
    },
    shire: {
        name: '湿热质',
        features: '面垢油光，易生痤疮，口苦口臭，身重困倦，舌质偏红',
        advice: '宜食清热利湿食物，如绿豆、苦瓜、黄瓜。避免辛辣油腻食物。保持皮肤清洁，多洗澡。加强运动，促进排汗排毒。'
    },
    xueyu: {
        name: '血瘀质',
        features: '面色晦暗，易有瘀斑，口唇暗淡，舌质黯有瘀点',
        advice: '宜食活血化瘀食物，如山楂、玫瑰花、黑豆。保持心情舒畅，避免情志郁结。适当进行有氧运动，促进气血运行。注意保暖，避免受寒。'
    },
    qiyu: {
        name: '气郁质',
        features: '神情抑郁，多愁善感，胁肋胀痛，善太息，舌苔薄白',
        advice: '宜食疏肝理气食物，如柑橘、芹菜、萝卜。保持心情舒畅，多参加社交活动。适当进行户外运动，舒缓压力。可尝试音乐疗法、芳香疗法。'
    },
    tebing: {
        name: '特禀质',
        features: '容易过敏，有哮喘、荨麻疹等病史，易对药物、食物过敏',
        advice: '避免接触过敏原，饮食清淡。增强体质，提高免疫力。保持环境清洁，避免刺激性物质。如有过敏史，及时就医并遵医嘱。'
    }
};

// ===== 体质测试问题 =====
const testQuestions = [
    {
        id: 1,
        question: '您平时容易疲乏吗？',
        options: [
            { value: 'never', label: '没有', scores: { qixu: 1, yangxu: 1, yinxu: 1 } },
            { value: 'rarely', label: '很少', scores: { qixu: 2, yangxu: 2, yinxu: 2 } },
            { value: 'sometimes', label: '有时', scores: { qixu: 3, yangxu: 3, yinxu: 3 } },
            { value: 'often', label: '经常', scores: { qixu: 4, yangxu: 4, yinxu: 4 } },
            { value: 'always', label: '总是', scores: { qixu: 5, yangxu: 5, yinxu: 5 } }
        ]
    },
    {
        id: 2,
        question: '您平时怕冷吗？',
        options: [
            { value: 'never', label: '没有', scores: { yangxu: 1, peaceful: 5 } },
            { value: 'rarely', label: '很少', scores: { yangxu: 2, peaceful: 4 } },
            { value: 'sometimes', label: '有时', scores: { yangxu: 3 } },
            { value: 'often', label: '经常', scores: { yangxu: 4 } },
            { value: 'always', label: '总是', scores: { yangxu: 5 } }
        ]
    },
    {
        id: 3,
        question: '您容易口干咽燥吗？',
        options: [
            { value: 'never', label: '没有', scores: { yinxu: 1, peaceful: 5 } },
            { value: 'rarely', label: '很少', scores: { yinxu: 2, peaceful: 4 } },
            { value: 'sometimes', label: '有时', scores: { yinxu: 3 } },
            { value: 'often', label: '经常', scores: { yinxu: 4 } },
            { value: 'always', label: '总是', scores: { yinxu: 5 } }
        ]
    },
    {
        id: 4,
        question: '您的体型是？',
        options: [
            { value: 'thin', label: '偏瘦', scores: { yinxu: 4, qixu: 3 } },
            { value: 'normal', label: '匀称', scores: { peaceful: 5 } },
            { value: 'fat', label: '偏胖', scores: { tanshi: 4, shire: 3, qiyu: 2 } }
        ]
    },
    {
        id: 5,
        question: '您平时容易出汗吗？',
        options: [
            { value: 'never', label: '不出汗', scores: { yangxu: 4 } },
            { value: 'normal', label: '正常', scores: { peaceful: 5 } },
            { value: 'easily', label: '容易出汗', scores: { qixu: 4, yinxu: 3 } },
            { value: 'night', label: '盗汗', scores: { yinxu: 5 } }
        ]
    },
    {
        id: 6,
        question: '您容易心情抑郁、多愁善感吗？',
        options: [
            { value: 'never', label: '没有', scores: { peaceful: 5, qiyu: 1 } },
            { value: 'rarely', label: '很少', scores: { qiyu: 2 } },
            { value: 'sometimes', label: '有时', scores: { qiyu: 3 } },
            { value: 'often', label: '经常', scores: { qiyu: 4 } },
            { value: 'always', label: '总是', scores: { qiyu: 5 } }
        ]
    },
    {
        id: 7,
        question: '您有过敏史吗？（药物、食物、花粉等）',
        options: [
            { value: 'no', label: '没有', scores: { tebing: 1, peaceful: 5 } },
            { value: 'yes', label: '有', scores: { tebing: 5 } }
        ]
    },
    {
        id: 8,
        question: '您的皮肤容易出现瘀斑吗？',
        options: [
            { value: 'never', label: '没有', scores: { xueyu: 1, peaceful: 5 } },
            { value: 'rarely', label: '很少', scores: { xueyu: 2 } },
            { value: 'sometimes', label: '有时', scores: { xueyu: 3 } },
            { value: 'often', label: '经常', scores: { xueyu: 4 } },
            { value: 'always', label: '总是', scores: { xueyu: 5 } }
        ]
    }
];

// ===== 季节养生数据 =====
const seasonalAdviceData = {
    spring: {
        title: '春季养生',
        subtitle: '春生 - 万物复苏，养肝为主',
        icon: '🌸',
        tips: [
            {
                title: '🍃 起居建议',
                content: '春季宜晚睡早起，多到户外散步，舒缓身心。注意"春捂"，不要过早减少衣物，避免受寒。保持心情舒畅，顺应春生之气。'
            },
            {
                title: '🥗 饮食调养',
                content: '春季宜食辛温发散食物，助阳气生发。推荐：韭菜、香菜、荠菜、菠菜、春笋。少食酸，多食甘，以养脾气。忌食生冷油腻。'
            },
            {
                title: '🏃 运动养生',
                content: '选择柔和运动，如散步、慢跑、太极、放风筝。运动量不宜过大，以微汗为度。春季多风，运动时注意避风。'
            },
            {
                title: '💊 经典方剂',
                content: '春季常用方剂：逍遥散（疏肝解郁）、小柴胡汤（和解少阳）、四逆散（疏肝理气）。',
                foods: ['菊花', '枸杞', '玫瑰花', '麦芽']
            }
        ]
    },
    summer: {
        title: '夏季养生',
        subtitle: '夏长 - 盛夏炎热，养心为主',
        icon: '☀️',
        tips: [
            {
                title: '🌙 起居建议',
                content: '夏季宜晚睡早起，适当午休（中午11点-1点）。避免长时间暴晒，保持室内通风。注意防暑降温，但不要过度贪凉。'
            },
            {
                title: '🥒 饮食调养',
                content: '夏季宜食清淡清热食物，如绿豆、冬瓜、苦瓜、黄瓜、西瓜。适当食用姜、蒜以温胃。忌食生冷不洁食物，避免伤及脾胃。'
            },
            {
                title: '🏊 运动养生',
                content: '选择清晨或傍晚运动，避免正午高温。推荐：游泳、瑜伽、太极、散步。运动量不宜过大，及时补充水分。'
            },
            {
                title: '💊 经典方剂',
                content: '夏季常用方剂：白虎汤（清热生津）、清暑益气汤（清暑益气）、香薷饮（解表化湿）。',
                foods: ['莲子', '百合', '绿豆', '薄荷']
            }
        ]
    },
    longsummer: {
        title: '长夏养生',
        subtitle: '长夏 - 湿热交蒸，养脾为主',
        icon: '🌾',
        tips: [
            {
                title: '☔ 起居建议',
                content: '长夏湿热重，注意防潮防湿。保持居住环境干燥通风，避免外感湿邪。适当午休，养护脾胃之气。'
            },
            {
                title: '🫘 饮食调养',
                content: '长夏宜食健脾祛湿食物，如薏米、赤小豆、白扁豆、茯苓、山药。少食生冷油腻，以免加重湿邪。可适当食用生姜、胡椒以温中化湿。'
            },
            {
                title: '🚶 运动养生',
                content: '选择轻柔运动，如散步、太极、八段锦。运动后及时擦汗，避免受凉。注意防暑降温，但不要过度贪凉。'
            },
            {
                title: '💊 经典方剂',
                content: '长夏常用方剂：平胃散（燥湿运脾）、藿香正气散（解表化湿）、参苓白术散（健脾祛湿）。',
                foods: ['薏米', '红豆', '茯苓', '陈皮']
            }
        ]
    },
    autumn: {
        title: '秋季养生',
        subtitle: '秋收 - 秋高气爽，养肺为主',
        icon: '🍂',
        tips: [
            {
                title: '🌬️ 起居建议',
                content: '秋季宜早睡早起，与鸡俱兴。注意"秋冻"，适当增减衣物，锻炼耐寒能力。保持室内湿润，避免秋燥伤肺。'
            },
            {
                title: '🍐 饮食调养',
                content: '秋季宜食滋阴润肺食物，如梨、百合、银耳、蜂蜜、芝麻、核桃。少食辛辣，以免助燥伤肺。可适当食用酸味食物收敛肺气。'
            },
            {
                title: '🏃 运动养生',
                content: '秋季是运动的好时节，可选择登高、慢跑、太极、散步等。运动量可适当增加，但以微汗为度，避免大汗淋漓。'
            },
            {
                title: '💊 经典方剂',
                content: '秋季常用方剂：桑杏汤（清宣润燥）、清燥救肺汤（清燥润肺）、百合固金汤（滋肾保肺）。',
                foods: ['百合', '银耳', '梨', '杏仁']
            }
        ]
    },
    winter: {
        title: '冬季养生',
        subtitle: '冬藏 - 寒冷闭藏，养肾为主',
        icon: '❄️',
        tips: [
            {
                title: '🧣 起居建议',
                content: '冬季宜早睡晚起，必待日光。注意保暖，避免受寒。保持室内温暖，但不要过度闷热。适当节欲，保精护肾。'
            },
            {
                title: '🥩 饮食调养',
                content: '冬季宜食温补食物，如羊肉、牛肉、鸡肉、核桃、栗子、黑豆。可适当食用辛辣食物以助阳气。忌食生冷寒凉。'
            },
            {
                title: '⛷️ 运动养生',
                content: '冬季运动宜在室内或阳光充足时进行，推荐：瑜伽、太极、八段锦。运动量不宜过大，以微热为度。运动后及时保暖，避免受寒。'
            },
            {
                title: '💊 经典方剂',
                content: '冬季常用方剂：肾气丸（补肾助阳）、右归丸（温补肾阳）、四逆汤（回阳救逆）。',
                foods: ['枸杞', '杜仲', '肉桂', '红枣']
            }
        ]
    }
};

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 更新内容显示
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });

    // ===== 体质测试功能 =====
    const startTestBtn = document.getElementById('startTest');
    const testOverlay = document.getElementById('testOverlay');
    const testCancel = document.getElementById('testCancel');
    const testSubmit = document.getElementById('testSubmit');
    const constitutionForm = document.getElementById('constitutionForm');
    const constitutionResult = document.getElementById('constitutionResult');

    // 生成测试问题
    function generateTestQuestions() {
        constitutionForm.innerHTML = testQuestions.map((q, index) => `
            <div class="test-question">
                <div class="question-title">${index + 1}. ${q.question}</div>
                <div class="question-options">
                    ${q.options.map(opt => `
                        <label class="option-label">
                            <input type="radio" name="q${q.id}" value="${opt.value}">
                            <span>${opt.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // 开始测试
    startTestBtn.addEventListener('click', function() {
        generateTestQuestions();
        testOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // 取消测试
    testCancel.addEventListener('click', function() {
        testOverlay.classList.remove('show');
        document.body.style.overflow = '';
    });

    // 提交测试
    testSubmit.addEventListener('click', function() {
        // 计算体质得分
        const scores = {
            peaceful: 0,
            qixu: 0,
            yangxu: 0,
            yinxu: 0,
            tanshi: 0,
            shire: 0,
            xueyu: 0,
            qiyu: 0,
            tebing: 0
        };

        let answered = 0;
        testQuestions.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (selected) {
                answered++;
                const option = q.options.find(opt => opt.value === selected.value);
                if (option && option.scores) {
                    Object.keys(option.scores).forEach(type => {
                        scores[type] += option.scores[type];
                    });
                }
            }
        });

        if (answered < testQuestions.length) {
            alert('请回答所有问题后再提交');
            return;
        }

        // 找出得分最高的体质
        let maxScore = 0;
        let resultType = 'peaceful';
        Object.keys(scores).forEach(type => {
            if (scores[type] > maxScore) {
                maxScore = scores[type];
                resultType = type;
            }
        });

        // 显示结果
        const result = constitutionTypes[resultType];
        document.getElementById('resultName').textContent = result.name;
        document.getElementById('resultFeatures').textContent = `特征：${result.features}`;
        document.getElementById('resultAdvice').textContent = result.advice;

        constitutionResult.classList.add('show');
        testOverlay.classList.remove('show');
        document.body.style.overflow = '';

        // 保存结果到localStorage
        localStorage.setItem('constitutionType', resultType);
    });

    // 加载已保存的体质结果
    const savedConstitution = localStorage.getItem('constitutionType');
    if (savedConstitution && constitutionTypes[savedConstitution]) {
        const result = constitutionTypes[savedConstitution];
        document.getElementById('resultName').textContent = result.name;
        document.getElementById('resultFeatures').textContent = `特征：${result.features}`;
        document.getElementById('resultAdvice').textContent = result.advice;
        constitutionResult.classList.add('show');
    }

    // ===== 健康记录功能 =====
    const healthRecords = document.getElementById('healthRecords');
    const addRecordBtn = document.getElementById('addRecord');

    // 从localStorage加载记录
    function loadRecords() {
        const records = JSON.parse(localStorage.getItem('healthRecords') || '[]');

        if (records.length === 0) {
            healthRecords.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📝</div>
                    <p>暂无健康记录，点击下方按钮添加</p>
                </div>
            `;
            return;
        }

        healthRecords.innerHTML = records.map(record => `
            <div class="record-card" data-id="${record.id}">
                <div class="record-date">${record.date}</div>
                <div class="record-title">${record.title}</div>
                <div class="record-content">${record.content}</div>
            </div>
        `).join('');

        // 添加删除功能
        document.querySelectorAll('.record-card').forEach(card => {
            card.addEventListener('click', function() {
                if (confirm('确定要删除这条记录吗？')) {
                    const id = parseInt(this.dataset.id);
                    const records = JSON.parse(localStorage.getItem('healthRecords') || '[]');
                    const newRecords = records.filter(r => r.id !== id);
                    localStorage.setItem('healthRecords', JSON.stringify(newRecords));
                    loadRecords();
                }
            });
        });
    }

    // 添加记录
    addRecordBtn.addEventListener('click', function() {
        const title = prompt('请输入标题（如：今天的身体状况、调理方法等）：');
        if (!title) return;

        const content = prompt('请输入详细内容：');
        if (!content) return;

        const records = JSON.parse(localStorage.getItem('healthRecords') || '[]');
        const newRecord = {
            id: Date.now(),
            date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }),
            title: title,
            content: content
        };

        records.unshift(newRecord);
        localStorage.setItem('healthRecords', JSON.stringify(records));
        loadRecords();
    });

    loadRecords();

    // ===== 节气养生建议 =====
    const seasonalAdvice = document.getElementById('seasonalAdvice');

    function getSeasonalAdvice() {
        // 获取当前季节（从script.js中的getCurrentSeason函数）
        const seasonData = getCurrentSeason();
        const currentSeason = seasonData.season;

        const advice = seasonalAdviceData[currentSeason];
        if (!advice) return;

        seasonalAdvice.innerHTML = `
            <div class="seasonal-header">
                <div class="seasonal-icon">${advice.icon}</div>
                <div class="seasonal-info">
                    <h3>${advice.title}</h3>
                    <p>${advice.subtitle}</p>
                </div>
            </div>
            ${advice.tips.map(tip => `
                <div class="advice-section">
                    <div class="advice-section-title">${tip.title}</div>
                    <div class="advice-section-content">${tip.content}</div>
                    ${tip.foods ? `
                        <div class="food-tags">
                            ${tip.foods.map(food => `<span class="food-tag">${food}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        `;
    }

    getSeasonalAdvice();

    // 点击遮罩关闭弹窗
    testOverlay.addEventListener('click', function(e) {
        if (e.target === testOverlay) {
            testOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && testOverlay.classList.contains('show')) {
            testOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

// ===== getCurrentSeason 函数已移除，使用 script.js 中的统一版本 =====
// 避免函数冲突和重复定义
