// ===== 药材数据 =====
const herbsData = [
    {
        id: 1,
        name: '麻黄',
        pinyin: 'Má Huáng',
        icon: '🌾',
        category: '解表',
        description: '发汗解表，宣肺平喘，利水消肿',
        properties: '辛、微苦，温',
        meridians: '肺、膀胱经',
        mainEffects: '发汗解表，宣肺平喘',
        usage: '用于风寒感冒，胸闷喘咳，风水浮肿',
        dosage: '2-9g',
        caution: '体虚自汗、盗汗者慎用',
        classics: '《伤寒论》：麻黄汤、麻杏石甘汤',
        combinations: ['桂枝', '杏仁', '石膏']
    },
    {
        id: 2,
        name: '桂枝',
        pinyin: 'Guì Zhī',
        icon: '🌿',
        category: '解表',
        description: '发汗解肌，温通经脉，助阳化气',
        properties: '辛、甘，温',
        meridians: '心、肺、膀胱经',
        mainEffects: '发汗解肌，温通经脉',
        usage: '用于风寒感冒，脘腹冷痛，血寒经闭',
        dosage: '3-9g',
        caution: '热病高热、阴虚火旺者忌用',
        classics: '《伤寒论》：桂枝汤、桂枝加桂汤',
        combinations: ['麻黄', '白芍', '甘草']
    },
    {
        id: 3,
        name: '石膏',
        pinyin: 'Shí Gāo',
        icon: '🪨',
        category: '清热',
        description: '清热泻火，除烦止渴',
        properties: '甘、辛，大寒',
        meridians: '肺、胃经',
        mainEffects: '清热泻火，除烦止渴',
        usage: '用于外感热病，高热烦渴，肺热喘咳',
        dosage: '15-60g',
        caution: '脾胃虚寒者慎用',
        classics: '《伤寒论》：白虎汤、麻杏石甘汤',
        combinations: ['知母', '麻黄', '杏仁']
    },
    {
        id: 4,
        name: '知母',
        pinyin: 'Zhī Mǔ',
        icon: '🌱',
        category: '清热',
        description: '清热泻火，滋阴润燥',
        properties: '苦、甘，寒',
        meridians: '肺、胃、肾经',
        mainEffects: '清热泻火，滋阴润燥',
        usage: '用于外感热病，高热烦渴，肺热燥咳',
        dosage: '6-12g',
        caution: '脾胃虚寒、大便溏泄者慎用',
        classics: '《伤寒论》：白虎汤、白虎加人参汤',
        combinations: ['石膏', '黄柏', '山药']
    },
    {
        id: 5,
        name: '大黄',
        pinyin: 'Dà Huáng',
        icon: '🟤',
        category: '泻下',
        description: '泻下攻积，清热泻火，凉血解毒',
        properties: '苦，寒',
        meridians: '脾、胃、大肠、肝、心包经',
        mainEffects: '泻下攻积，清热泻火',
        usage: '用于积滞便秘，血热吐衄，目赤咽肿',
        dosage: '3-15g',
        caution: '孕妇、哺乳期妇女慎用',
        classics: '《伤寒论》：大承气汤、小承气汤',
        combinations: ['芒硝', '枳实', '厚朴']
    },
    {
        id: 6,
        name: '芒硝',
        pinyin: 'Máng Xiāo',
        icon: '🧂',
        category: '泻下',
        description: '泻下攻积，润燥软坚，清热消肿',
        properties: '咸、苦，寒',
        meridians: '胃、大肠经',
        mainEffects: '泻下攻积，润燥软坚',
        usage: '用于积滞便秘，咽痛口疮，目赤肿痛',
        dosage: '6-12g',
        caution: '孕妇禁用，哺乳期妇女慎用',
        classics: '《伤寒论》：大承气汤、调胃承气汤',
        combinations: ['大黄', '枳实', '厚朴']
    },
    {
        id: 7,
        name: '厚朴',
        pinyin: 'Hòu Pò',
        icon: '🪵',
        category: '祛湿',
        description: '燥湿消痰，下气除满',
        properties: '苦、辛，温',
        meridians: '脾、胃、肺、大肠经',
        mainEffects: '燥湿消痰，下气除满',
        usage: '用于湿滞伤中，脘痞吐泻，食积气滞',
        dosage: '3-10g',
        caution: '气虚及阴虚者慎用',
        classics: '《伤寒论》：半夏厚朴汤、大承气汤',
        combinations: ['大黄', '枳实', '半夏']
    },
    {
        id: 8,
        name: '附子',
        pinyin: 'Fù Zǐ',
        icon: '🫚',
        category: '温里',
        description: '回阳救逆，补火助阳，散寒止痛',
        properties: '辛、甘，大热，有毒',
        meridians: '心、肾、脾经',
        mainEffects: '回阳救逆，补火助阳',
        usage: '用于亡阳虚脱，肢冷脉微，阳痿宫冷',
        dosage: '3-15g（先煎、久煎）',
        caution: '有毒，孕妇慎用，不宜与半夏同用',
        classics: '《伤寒论》：四逆汤、真武汤',
        combinations: ['干姜', '甘草', '茯苓']
    },
    {
        id: 9,
        name: '干姜',
        pinyin: 'Gān Jiāng',
        icon: '🫚',
        category: '温里',
        description: '温中散寒，回阳通脉，温肺化饮',
        properties: '辛，热',
        meridians: '脾、胃、肾、心、肺经',
        mainEffects: '温中散寒，回阳通脉',
        usage: '用于脘腹冷痛，呕吐泄泻，肢冷脉微',
        dosage: '3-10g',
        caution: '阴虚内热者忌用',
        classics: '《伤寒论》：理中丸、四逆汤',
        combinations: ['附子', '人参', '白术']
    },
    {
        id: 10,
        name: '人参',
        pinyin: 'Rén Shēn',
        icon: '🌿',
        category: '补气',
        description: '大补元气，复脉固脱，补脾益肺',
        properties: '甘、微苦，微温',
        meridians: '脾、肺、心、肾经',
        mainEffects: '大补元气，复脉固脱',
        usage: '用于体虚欲脱，肢冷脉微，脾虚食少',
        dosage: '3-9g',
        caution: '实证、热证者慎用，不宜与藜芦同用',
        classics: '《伤寒论》：四逆加人参汤、白虎加人参汤',
        combinations: ['附子', '干姜', '白术']
    },
    {
        id: 11,
        name: '黄芪',
        pinyin: 'Huáng Qí',
        icon: '🌿',
        category: '补气',
        description: '补气升阳，固表止汗，利水消肿',
        properties: '甘，微温',
        meridians: '脾、肺经',
        mainEffects: '补气升阳，固表止汗',
        usage: '用于气虚乏力，中气下陷，表虚自汗',
        dosage: '9-30g',
        caution: '表实邪盛、气滞湿阻者慎用',
        classics: '《伤寒论》：虽未直接收录，为常用补气药',
        combinations: ['当归', '白术', '桂枝']
    },
    {
        id: 12,
        name: '白术',
        pinyin: 'Bái Zhú',
        icon: '🌿',
        category: '补气',
        description: '健脾益气，燥湿利水，止汗安胎',
        properties: '苦、甘，温',
        meridians: '脾、胃经',
        mainEffects: '健脾益气，燥湿利水',
        usage: '用于脾虚食少，腹胀泄泻，痰饮眩悸',
        dosage: '6-12g',
        caution: '阴虚内热者慎用',
        classics: '《伤寒论》：理中丸、五苓散',
        combinations: ['人参', '茯苓', '甘草']
    },
    {
        id: 13,
        name: '当归',
        pinyin: 'Dāng Guī',
        icon: '🌿',
        category: '补血',
        description: '补血调经，活血止痛，润肠通便',
        properties: '甘、辛，温',
        meridians: '肝、心、脾经',
        mainEffects: '补血调经，活血止痛',
        usage: '用于血虚萎黄，月经不调，肠燥便秘',
        dosage: '6-12g',
        caution: '湿盛中满、大便溏泄者慎用',
        classics: '《伤寒论》：虽未直接收录，为妇科要药',
        combinations: ['黄芪', '白芍', '川芎']
    },
    {
        id: 14,
        name: '白芍',
        pinyin: 'Bái Sháo',
        icon: '🌸',
        category: '补血',
        description: '养血调经，敛阴止汗，柔肝止痛',
        properties: '苦、酸，微寒',
        meridians: '肝、脾经',
        mainEffects: '养血调经，柔肝止痛',
        usage: '用于血虚萎黄，月经不调，自汗盗汗',
        dosage: '6-15g',
        caution: '阳衰虚寒者不宜单独使用',
        classics: '《伤寒论》：桂枝汤、小建中汤',
        combinations: ['桂枝', '当归', '甘草']
    },
    {
        id: 15,
        name: '茯苓',
        pinyin: 'Fú Líng',
        icon: '🍄',
        category: '祛湿',
        description: '利水渗湿，健脾，宁心',
        properties: '甘、淡，平',
        meridians: '心、肺、脾、肾经',
        mainEffects: '利水渗湿，健脾宁心',
        usage: '用于水肿尿少，痰饮眩悸，脾虚食少',
        dosage: '10-15g',
        caution: '阴虚而无湿热者慎用',
        classics: '《伤寒论》：五苓散、真武汤',
        combinations: ['白术', '桂枝', '猪苓']
    },
    {
        id: 16,
        name: '半夏',
        pinyin: 'Bàn Xià',
        icon: '🧅',
        category: '祛湿',
        description: '燥湿化痰，降逆止呕，消痞散结',
        properties: '辛，温，有毒',
        meridians: '脾、胃、肺经',
        mainEffects: '燥湿化痰，降逆止呕',
        usage: '用于痰多咳喘，痰饮眩悸，呕吐反胃',
        dosage: '3-9g（法半夏）',
        caution: '有毒，不宜与乌头类药物同用',
        classics: '《伤寒论》：半夏泻心汤、小半夏汤',
        combinations: ['厚朴', '茯苓', '生姜']
    },
    {
        id: 17,
        name: '黄芩',
        pinyin: 'Huáng Qín',
        icon: '🌿',
        category: '清热',
        description: '清热燥湿，泻火解毒，止血安胎',
        properties: '苦，寒',
        meridians: '肺、胆、脾、大肠、小肠经',
        mainEffects: '清热燥湿，泻火解毒',
        usage: '用于湿温暑湿，胸闷呕恶，湿热痞满',
        dosage: '3-10g',
        caution: '脾胃虚寒者慎用',
        classics: '《伤寒论》：黄芩汤、半夏泻心汤',
        combinations: ['黄连', '半夏', '干姜']
    },
    {
        id: 18,
        name: '黄连',
        pinyin: 'Huáng Lián',
        icon: '🌿',
        category: '清热',
        description: '清热燥湿，泻火解毒',
        properties: '苦，寒',
        meridians: '心、脾、胃、肝、胆、大肠经',
        mainEffects: '清热燥湿，泻火解毒',
        usage: '用于湿热痞满，呕吐吞酸，心烦不寐',
        dosage: '2-5g',
        caution: '脾胃虚寒者慎用',
        classics: '《伤寒论》：黄连汤、泻心汤',
        combinations: ['黄芩', '半夏', '干姜']
    }
];

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    const herbsGrid = document.getElementById('herbsGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    let currentCategory = 'all';
    let searchTerm = '';

    // 渲染药材卡片
    function renderHerbs() {
        const filteredHerbs = herbsData.filter(herb => {
            const matchesCategory = currentCategory === 'all' || herb.category === currentCategory;
            const matchesSearch = searchTerm === '' ||
                herb.name.includes(searchTerm) ||
                herb.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                herb.description.includes(searchTerm) ||
                herb.mainEffects.includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        if (filteredHerbs.length === 0) {
            herbsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <p>没有找到匹配的药材</p>
                </div>
            `;
            return;
        }

        herbsGrid.innerHTML = filteredHerbs.map(herb => `
            <div class="herb-card" data-id="${herb.id}">
                <div class="herb-icon">${herb.icon}</div>
                <div class="herb-name">${herb.name}</div>
                <div class="herb-pinyin">${herb.pinyin}</div>
                <div class="herb-category">${herb.category}</div>
                <div class="herb-description">${herb.description}</div>
            </div>
        `).join('');

        // 添加卡片点击事件
        document.querySelectorAll('.herb-card').forEach(card => {
            card.addEventListener('click', function() {
                const herbId = parseInt(this.dataset.id);
                showModal(herbId);
            });
        });
    }

    // 显示详情弹窗
    function showModal(herbId) {
        const herb = herbsData.find(h => h.id === herbId);
        if (!herb) return;

        document.getElementById('modalIcon').textContent = herb.icon;
        document.getElementById('modalTitle').textContent = herb.name;
        document.getElementById('modalPinyin').textContent = herb.pinyin;

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="info-section">
                <div class="info-label">性味归经</div>
                <div class="info-text">${herb.properties} · ${herb.meridians}</div>
            </div>

            <div class="info-section">
                <div class="info-label">功效主治</div>
                <div class="info-text">${herb.mainEffects}</div>
                <div class="info-text" style="margin-top: 0.5rem; font-size: 0.95rem;">${herb.usage}</div>
            </div>

            <div class="info-section">
                <div class="info-label">用法用量</div>
                <div class="info-text">内服：${herb.dosage}</div>
            </div>

            <div class="info-section">
                <div class="info-label">使用注意</div>
                <div class="info-text">${herb.caution}</div>
            </div>

            <div class="info-section">
                <div class="info-label">经典方剂</div>
                <div class="info-text">${herb.classics}</div>
            </div>

            <div class="info-section">
                <div class="info-label">常配伍药材</div>
                <div class="tag-container">
                    ${herb.combinations.map(combo => `<span class="tag">${combo}</span>`).join('')}
                </div>
            </div>
        `;

        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // 关闭弹窗
    function closeModal() {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            closeModal();
        }
    });

    // 搜索功能
    searchInput.addEventListener('input', function() {
        searchTerm = this.value.trim();
        renderHerbs();
    });

    // 筛选功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderHerbs();
        });
    });

    // 初始渲染
    renderHerbs();
});
