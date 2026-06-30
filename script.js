const translations = {
  ko: {
    'nav.status': '매장 현황', 'nav.lineup': '라인업', 'nav.menu': '주류 안내', 'nav.space': '공간', 'nav.price': '정찰제', 'nav.faq': 'FAQ', 'nav.location': '오시는 길',
    'common.call': '전화 문의',
    'hero.eyebrow': 'Gangnam Highpublic', 'hero.copy': '강남의 밤을 더 여유롭고 선명하게 만드는 프리미엄 하이퍼블릭 라운지.', 'hero.cta': '예약 문의하기', 'hero.gallery': '공간 둘러보기', 'hero.rooms': '프리미엄 룸', 'hero.open': '365일 운영', 'hero.cast': '일일 출근 라인업', 'hero.scroll': 'Scroll',
    'status.eyebrow': 'Live Status', 'status.title': '현재 매장 현황', 'status.desc': '방문 전 대기 상황과 현재 타임을 빠르게 확인하세요.', 'status.time': '현재 시각', 'status.staff': '현재 초이스 인원', 'status.staffNote': '시간대에 따라 변동됩니다.', 'status.session': '현재 {session} 운영 중', 'status.part0': '0부', 'status.part1': '1부', 'status.part2': '2부', 'status.people': '{count}명', 'status.rooms': '잔여 룸', 'status.roomCount': '{count}개', 'status.waiting': '대기팀', 'status.teamCount': '{count}팀', 'status.available': '즉시 상담 가능', 'status.waitMin': '예상 대기시간 {min}분', 'status.waitHour': '예상 대기시간 1시간 이상',
    'lineup.eyebrow': 'Daily Lineup', 'lineup.title': '강남권 최대 규모 라인업', 'lineup.desc': '20대 중심의 세련된 라인업이 매일 폭넓게 준비됩니다. 분위기와 취향에 맞춰 편안하게 안내해드립니다.',
    'menu.eyebrow': 'Bottle Menu', 'menu.title': '주류 가격 안내', 'menu.desc': '대표 메뉴를 한눈에 확인하세요. 세부 구성은 상담 시 방문 목적에 맞춰 안내드립니다.', 'menu.all': '전체', 'menu.whisky': '위스키', 'menu.champagne': '샴페인',
    'space.eyebrow': 'Private Space', 'space.title': '프라이빗하게 완성되는 시간', 'space.desc': '고급스러운 룸, 안정적인 동선, 선명한 조명과 사운드가 모임의 밀도를 높입니다.', 'space.more': '공간 더 보기', 'space.less': '접기',
    'about.eyebrow': 'About You & Me', 'about.title': '강남 중심에서 만나는 프리미엄 라운지', 'about.body': '유앤미는 생일파티, 회식, 접대, 각종 모임까지 목적에 맞는 룸과 서비스를 갖춘 강남 하이퍼블릭입니다. 처음 방문하시는 분도 편안하게 즐기실 수 있도록 예약부터 입장까지 세심하게 안내합니다.', 'about.fact1Label': '운영', 'about.fact1': '연중무휴 24시간', 'about.fact2Label': '위치', 'about.fact2': '서울 서초구 나루터로 64', 'about.fact3Label': '문의',
    'location.eyebrow': 'Location', 'location.title': '오시는 길', 'location.desc': '서울 서초구 나루터로 64, 지하층. 내비게이션 버튼으로 바로 연결됩니다.', 'location.visitTitle': '예약 후 방문하시면 더 빠르게 안내됩니다.', 'location.visitBody': '초행길이라도 도착 전 연락 주시면 입구와 룸 배정까지 순서대로 도와드립니다.',
    'price.eyebrow': 'Fixed Price', 'price.title': '최저가 정찰제 안내', 'price.desc': '방문 전 기준 금액과 구성 내용을 먼저 확인하고, 인원과 시간대에 맞춰 투명하게 상담드립니다.', 'price.event': '이벤트', 'price.eventTime': 'OPEN - 21:00', 'price.first': '1부', 'price.firstTime': '21:00 - 24:00', 'price.second': '2부', 'price.secondTime': '24:00 - CLOSE 18:00', 'price.one': '1인', 'price.two': '2인', 'price.three': '3인', 'price.per2Event': '인당 19.5만원', 'price.per3Event': '인당 17만원', 'price.per2First': '인당 22.5만원', 'price.per3First': '인당 19만원', 'price.per2Second': '인당 21만원', 'price.per3Second': '인당 18만원', 'price.eventBase': '주대 10만원 + 티씨 인원별 + RT&WT 5만원', 'price.firstBase': '주대 16만원 + 티씨 인원별 + RT&WT 5만원', 'price.secondBase': '주대 13만원 + 티씨 인원별 + RT&WT 5만원', 'price.noticePrefix': '주의', 'price.notice1Before': '연장시 티씨는 ', 'price.notice1Mark': '인당 15만원', 'price.notice1After': ' 입니다.', 'price.notice2Before': '5명 이상 오실 경우 양주 ', 'price.notice2Mark': '두병 진행', 'price.notice2After': '입니다.',
    'faq.eyebrow': 'FAQ', 'faq.title': '자주 묻는 질문', 'faq.desc': '처음 문의하시는 분들도 바로 이해할 수 있도록 핵심만 정리했습니다.', 'faq.q1': '하이퍼블릭이란 정확히 무엇인가요?', 'faq.a1': '하이퍼블릭은 퍼블릭에서 발전한 상위 형태의 엔터테인먼트로, 독립 공간 기반의 즉석 선택이 핵심입니다. 퍼블릭의 빠른 진행과 룸싸롱의 프라이빗함이 결합된 구조입니다.', 'faq.q2': '강남하이퍼블릭과 일반 하이퍼블릭의 차이는?', 'faq.a2': '강남하이퍼블릭은 강남 지역 특성상 외모 수준, 서비스 품질, 프리미엄 분위기가 한층 강합니다. 업소별 스타일 분화도 더 뚜렷하며, 선택 폭이 넓은 것이 특징입니다.', 'faq.q3': '예약 없이 당일 방문 가능한가요?', 'faq.a3': '당일 문의 후 입장이 가능한 경우가 많습니다. 다만 주말이나 심야 시간대는 사전 문의가 유리하며, 대기 여부를 미리 확인하는 것을 권장합니다.', 'faq.q4': '혼자 방문해도 되나요?', 'faq.a4': '네, 1:1 매칭 구조이므로 단독 방문도 전혀 문제없습니다. 단독 고객 비율도 상당히 높은 편이며, 부담 없이 이용 가능합니다.', 'faq.q5': '강남하이퍼블릭 요금 체계는 어떻게 되나요?', 'faq.a5': '업소마다 다르지만 일반적으로 주대와 60분 단위 이용 요금으로 구성됩니다. 웹 예약 이벤트 시 할인이 적용될 수 있으며, 정확한 요금은 전담 채널을 통해 확인 가능합니다.', 'faq.q6': '강남하이퍼블릭 이용 시 주의사항은?', 'faq.a6': '과도한 음주는 자제하시고, 업소 내 규정을 준수해 주세요. 예약 시간을 지키는 것이 원활한 진행에 도움이 되며, 문의 시 정확한 정보를 전달할수록 더 나은 서비스를 받을 수 있습니다.',    'footer.copy': '강남 유앤미 하이퍼블릭. 프리미엄 공간에서 여유로운 시간을 경험하세요.'
  },
  zh: {
    'nav.status': '店铺现况', 'nav.lineup': '阵容', 'nav.menu': '酒水价格', 'nav.space': '空间', 'nav.price': '明码价', 'nav.faq': '常见问题', 'nav.location': '交通位置',
    'common.call': '电话咨询',
    'hero.eyebrow': '江南 Highpublic', 'hero.copy': '让江南夜晚更从容、更鲜明的高级 Highpublic Lounge。', 'hero.cta': '预约咨询', 'hero.gallery': '查看空间', 'hero.rooms': '高级包间', 'hero.open': '全年无休', 'hero.cast': '每日出勤阵容', 'hero.scroll': '向下滚动',
    'status.eyebrow': '实时状态', 'status.title': '当前店铺现况', 'status.desc': '到访前快速确认等候情况与当前时段。', 'status.time': '当前时间', 'status.staff': '当前可选择人数', 'status.staffNote': '人数会根据时段变化。', 'status.session': '当前为{session}营业中', 'status.part0': '第0场', 'status.part1': '第1场', 'status.part2': '第2场', 'status.people': '{count}名', 'status.rooms': '剩余包间', 'status.roomCount': '{count}间', 'status.waiting': '等待组数', 'status.teamCount': '{count}组', 'status.available': '可立即咨询', 'status.waitMin': '预计等待 {min}分钟', 'status.waitHour': '预计等待 1小时以上',
    'lineup.eyebrow': '每日阵容', 'lineup.title': '江南地区大规模阵容', 'lineup.desc': '以20多岁为中心的精致阵容每日准备充足。我们会根据氛围和偏好进行舒适引导。',
    'menu.eyebrow': '酒水菜单', 'menu.title': '酒水价格介绍', 'menu.desc': '代表酒水一目了然。详细配置会在咨询时按到访目的说明。', 'menu.all': '全部', 'menu.whisky': '威士忌', 'menu.champagne': '香槟',
    'space.eyebrow': '私人空间', 'space.title': '为私密时光而完成的空间', 'space.desc': '高级包间、稳定动线、清晰灯光与音响，让聚会更有质感。', 'space.more': '查看更多空间', 'space.less': '收起',
    'about.eyebrow': '关于 You & Me', 'about.title': '位于江南中心的高级 Lounge', 'about.body': 'You & Me 是位于江南的 Highpublic，适合生日派对、聚餐、商务接待和各种聚会。即使是首次到访，也会从预约到入场提供细致引导。', 'about.fact1Label': '营业', 'about.fact1': '全年无休 24小时', 'about.fact2Label': '位置', 'about.fact2': '首尔瑞草区渡口路64', 'about.fact3Label': '咨询',
    'location.eyebrow': '位置', 'location.title': '交通位置', 'location.desc': '首尔瑞草区渡口路64，地下层。 直接连接到导航按钮。', 'location.visitTitle': '预约后到访可获得更快速的引导。', 'location.visitBody': '初次来访也可在到达前联系我们，我们会协助入口指引和包间安排。',
    'price.eyebrow': 'Fixed Price', 'price.title': '最低明码价格说明', 'price.desc': '到访前先确认基准金额与套餐内容，并根据人数和时段进行透明咨询。', 'price.event': '活动', 'price.eventTime': 'OPEN - 21:00', 'price.first': '第一场', 'price.firstTime': '21:00 - 24:00', 'price.second': '第二场', 'price.secondTime': '24:00 - CLOSE 18:00', 'price.one': '1人', 'price.two': '2人', 'price.three': '3人', 'price.per2Event': '人均19.5万韩元', 'price.per3Event': '人均17万韩元', 'price.per2First': '人均22.5万韩元', 'price.per3First': '人均19万韩元', 'price.per2Second': '人均21万韩元', 'price.per3Second': '人均18万韩元', 'price.eventBase': '酒水10万韩元 + TC按人数 + RT&WT 5万韩元', 'price.firstBase': '酒水16万韩元 + TC按人数 + RT&WT 5万韩元', 'price.secondBase': '酒水13万韩元 + TC按人数 + RT&WT 5万韩元', 'price.noticePrefix': '注意', 'price.notice1Before': '延长时TC为 ', 'price.notice1Mark': '每人15万韩元', 'price.notice1After': '。', 'price.notice2Before': '5人以上到访时洋酒 ', 'price.notice2Mark': '按两瓶进行', 'price.notice2After': '。',
    'faq.eyebrow': 'FAQ', 'faq.title': '常见问题', 'faq.desc': '为首次咨询的客人整理了最容易理解的核心内容。', 'faq.q1': 'Highpublic到底是什么？', 'faq.a1': 'Highpublic 是从 Public 发展而来的上位娱乐形式，核心是独立空间和现场选择。它结合了 Public 的快速流程和包间沙龙的私密性。', 'faq.q2': '江南Highpublic和普通Highpublic有什么区别？', 'faq.a2': '江南Highpublic因地区特性，在外貌水平、服务品质和高级氛围方面更强。各店风格区分更明显，选择范围也更宽。', 'faq.q3': '没有预约也可以当天到访吗？', 'faq.a3': '多数情况下当天咨询后可以入场。不过周末或深夜时段建议提前咨询，并先确认等待情况。', 'faq.q4': '一个人也可以去吗？', 'faq.a4': '可以。由于是1:1匹配结构，单独到访完全没有问题。单人客人比例也相当高，可以轻松使用。', 'faq.q5': '江南Highpublic费用体系是怎样的？', 'faq.a5': '各店会有差异，但一般由酒水基本费用和60分钟单位使用费用组成。通过网页预约活动可能适用优惠，准确价格可通过专属咨询渠道确认。', 'faq.q6': '使用江南Highpublic时需要注意什么？', 'faq.a6': '请避免过度饮酒并遵守店内规定。准时到达有助于顺利进行，咨询时提供越准确的信息，就能获得更合适的服务。',    'footer.copy': '江南 You & Me Highpublic。在高级空间中体验从容的时间。'
  },
  ja: {
    'nav.status': '店舗状況', 'nav.lineup': 'ラインアップ', 'nav.menu': '酒類案内', 'nav.space': '空間', 'nav.price': '定額案内', 'nav.faq': 'FAQ', 'nav.location': 'アクセス',
    'common.call': '電話で相談',
    'hero.eyebrow': '江南 Highpublic', 'hero.copy': '江南の夜をよりゆったりと鮮やかに演出するプレミアム Highpublic ラウンジ。', 'hero.cta': '予約相談', 'hero.gallery': '空間を見る', 'hero.rooms': 'プレミアムルーム', 'hero.open': '年中無休', 'hero.cast': '毎日の出勤ラインアップ', 'hero.scroll': 'Scroll',
    'status.eyebrow': 'リアルタイム状況', 'status.title': '現在の店舗状況', 'status.desc': '来店前に待ち状況と現在の時間帯をすぐ確認できます。', 'status.time': '現在時刻', 'status.staff': '現在のチョイス人数', 'status.staffNote': '時間帯により変動します。', 'status.session': '現在{session}営業中', 'status.part0': '0部', 'status.part1': '1部', 'status.part2': '2部', 'status.people': '{count}名', 'status.rooms': '残りルーム', 'status.roomCount': '{count}室', 'status.waiting': '待機組', 'status.teamCount': '{count}組', 'status.available': 'すぐ相談可能', 'status.waitMin': '予想待ち時間 {min}分', 'status.waitHour': '予想待ち時間 1時間以上',
    'lineup.eyebrow': 'Daily Lineup', 'lineup.title': '江南エリア最大級のラインアップ', 'lineup.desc': '20代中心の洗練されたラインアップを毎日幅広くご用意。雰囲気や好みに合わせて丁寧にご案内します。',
    'menu.eyebrow': 'Bottle Menu', 'menu.title': '酒類価格案内', 'menu.desc': '代表メニューを一覧で確認できます。詳細構成は相談時に目的に合わせてご案内します。', 'menu.all': 'すべて', 'menu.whisky': 'ウイスキー', 'menu.champagne': 'シャンパン',
    'space.eyebrow': 'Private Space', 'space.title': 'プライベートに仕上がる時間', 'space.desc': '上質なルーム、安定した動線、鮮明な照明とサウンドが集まりの密度を高めます。', 'space.more': 'もっと見る', 'space.less': '閉じる',
    'about.eyebrow': 'About You & Me', 'about.title': '江南中心で出会うプレミアムラウンジ', 'about.body': 'You & Me は誕生日、会食、接待、各種集まりまで目的に合うルームとサービスを備えた江南 Highpublic です。初めての方にも予約から入場まで丁寧にご案内します。', 'about.fact1Label': '営業', 'about.fact1': '年中無休 24時間', 'about.fact2Label': '場所', 'about.fact2': 'ソウル瑞草区ナルト路64', 'about.fact3Label': 'お問い合わせ',
    'location.eyebrow': 'Location', 'location.title': 'アクセス', 'location.desc': 'ソウル特別市瑞草区ナルトロ64、地下階。 ナビゲーションボタンで直接接続されます。', 'location.visitTitle': '予約後にご来店いただくと、よりスムーズにご案内できます。', 'location.visitBody': '初めての道でも到着前にご連絡いただければ、入口とルーム案内まで順にサポートします。',
    'price.eyebrow': 'Fixed Price', 'price.title': '最低価格の定額案内', 'price.desc': '来店前に基準金額と構成を確認し、人数と時間帯に合わせて透明にご案内します。', 'price.event': 'イベント', 'price.eventTime': 'OPEN - 21:00', 'price.first': '1部', 'price.firstTime': '21:00 - 24:00', 'price.second': '2部', 'price.secondTime': '24:00 - CLOSE 18:00', 'price.one': '1名', 'price.two': '2名', 'price.three': '3名', 'price.per2Event': '1名あたり19.5万ウォン', 'price.per3Event': '1名あたり17万ウォン', 'price.per2First': '1名あたり22.5万ウォン', 'price.per3First': '1名あたり19万ウォン', 'price.per2Second': '1名あたり21万ウォン', 'price.per3Second': '1名あたり18万ウォン', 'price.eventBase': '酒代10万ウォン + TC人数別 + RT&WT 5万ウォン', 'price.firstBase': '酒代16万ウォン + TC人数別 + RT&WT 5万ウォン', 'price.secondBase': '酒代13万ウォン + TC人数別 + RT&WT 5万ウォン', 'price.noticePrefix': '注意', 'price.notice1Before': '延長時のTCは ', 'price.notice1Mark': '1名あたり15万ウォン', 'price.notice1After': ' です。', 'price.notice2Before': '5名以上でご来店の場合、洋酒は ', 'price.notice2Mark': '2本進行', 'price.notice2After': 'です。',
    'faq.eyebrow': 'FAQ', 'faq.title': 'よくある質問', 'faq.desc': '初めてお問い合わせの方にも分かりやすいよう、要点だけ整理しました。', 'faq.q1': 'ハイパブリックとは正確に何ですか？', 'faq.a1': 'ハイパブリックはパブリックから発展した上位形態のエンターテインメントで、独立空間を基盤にした即時選択が核心です。パブリックの早い進行とルームサロンのプライベート感を組み合わせた構造です。', 'faq.q2': '江南ハイパブリックと一般的なハイパブリックの違いは？', 'faq.a2': '江南ハイパブリックは地域特性上、外見レベル、サービス品質、プレミアムな雰囲気がより強い傾向があります。店舗ごとのスタイル分化も明確で、選択肢が広いのが特徴です。', 'faq.q3': '予約なしで当日訪問できますか？', 'faq.a3': '当日お問い合わせ後に入場できる場合が多いです。ただし週末や深夜帯は事前相談が有利で、待機状況を先に確認することをおすすめします。', 'faq.q4': '一人で訪問しても大丈夫ですか？', 'faq.a4': 'はい、1:1マッチング構造のため単独訪問もまったく問題ありません。単独のお客様も多く、気軽にご利用いただけます。', 'faq.q5': '江南ハイパブリックの料金体系は？', 'faq.a5': '店舗によって異なりますが、一般的には酒代と60分単位の利用料金で構成されます。Web予約イベント時は割引が適用される場合があり、正確な料金は専用窓口で確認できます。', 'faq.q6': '利用時の注意事項は？', 'faq.a6': '過度な飲酒は控え、店内規定を守ってください。予約時間を守ると進行がスムーズになり、問い合わせ時に正確な情報を伝えるほど、より適した案内を受けられます。',    'footer.copy': '江南 You & Me Highpublic。プレミアムな空間でゆとりある時間をお楽しみください。'
  }
};

const bottles = [
  { name: '다이앤', zh: '黛安', ja: 'ダイアン', image: 'assets/images/alcohol/다이앤.png', price: '170,000', type: 'whisky' },
  { name: '골든블루 12', zh: 'Golden Blue 12', ja: 'ゴールデンブルー 12', image: 'assets/images/alcohol/골12.png', price: '160,000', type: 'whisky' },
  { name: '윈저 아이스', zh: 'Windsor Ice', ja: 'ウィンザー アイス', image: 'assets/images/alcohol/윈저아이스.png', price: '160,000', type: 'whisky' },
  { name: '윈저 허니', zh: 'Windsor Honey', ja: 'ウィンザー ハニー', image: 'assets/images/alcohol/윈저허니.png', price: '160,000', type: 'whisky' },
  { name: '골든블루 17', zh: 'Golden Blue 17', ja: 'ゴールデンブルー 17', image: 'assets/images/alcohol/골17.png', price: '200,000', type: 'whisky' },
  { name: '윈저 17', zh: 'Windsor 17', ja: 'ウィンザー 17', image: 'assets/images/alcohol/윈저17.png', price: '200,000', type: 'whisky' },
  { name: '윈저 W 시그니처', zh: 'Windsor W Signature', ja: 'ウィンザー W シグネチャー', image: 'assets/images/alcohol/윈저W시그니처.png', price: '200,000', type: 'whisky' },
  { name: '임페리얼 17', zh: 'Imperial 17', ja: 'インペリアル 17', image: 'assets/images/alcohol/임페리얼17.png', price: '200,000', type: 'whisky' },
  { name: '글랜피딕 12', zh: 'Glenfiddich 12', ja: 'グレンフィディック 12', image: 'assets/images/alcohol/글랜피딕12.png', price: '300,000', type: 'whisky' },
  { name: '글랜피딕 15', zh: 'Glenfiddich 15', ja: 'グレンフィディック 15', image: 'assets/images/alcohol/글랜피딕15.png', price: '350,000', type: 'whisky' },
  { name: '골든블루 22', zh: 'Golden Blue 22', ja: 'ゴールデンブルー 22', image: 'assets/images/alcohol/골든블루22.png', price: '380,000', type: 'whisky' },
  { name: '발베니 12', zh: 'Balvenie 12', ja: 'バルヴェニー 12', image: 'assets/images/alcohol/발베니12.png', price: '380,000', type: 'whisky' },
  { name: '발베니 14', zh: 'Balvenie 14', ja: 'バルヴェニー 14', image: 'assets/images/alcohol/발베니14.png', price: '500,000', type: 'whisky' },
  { name: '스카치블루 21', zh: 'Scotch Blue 21', ja: 'スコッチブルー 21', image: 'assets/images/alcohol/스카치블루21.png', price: '410,000', type: 'whisky' },
  { name: '발렌타인 17', zh: 'Ballantine\'s 17', ja: 'バランタイン 17', image: 'assets/images/alcohol/발렌타인17.png', price: '410,000', type: 'whisky' },
  { name: '로얄살루트', zh: 'Royal Salute', ja: 'ロイヤルサルート', image: 'assets/images/alcohol/로얄살루트.png', price: '600,000', type: 'whisky' },
  { name: '죠니블루', zh: 'Johnnie Walker Blue', ja: 'ジョニーウォーカー ブルー', image: 'assets/images/alcohol/죠니블루.png', price: '750,000', type: 'whisky' },
  { name: '발렌타인 30', zh: 'Ballantine\'s 30', ja: 'バランタイン 30', image: 'assets/images/alcohol/발렌타인30.png', price: '1,600,000', type: 'whisky' },
  { name: '모엣샹동', zh: 'Moet & Chandon', ja: 'モエ・エ・シャンドン', image: 'assets/images/alcohol/모엣샹동.png', price: '문의', type: 'champagne' },
  { name: '모엣로제', zh: 'Moet Rose', ja: 'モエ ロゼ', image: 'assets/images/alcohol/모엣로제.png', price: '문의', type: 'champagne' },
  { name: '돔페리뇽', zh: 'Dom Perignon', ja: 'ドン・ペリニヨン', image: 'assets/images/alcohol/돔페리뇽.png', price: '문의', type: 'champagne' }
];

const routeLangMap = { kr: 'ko', cn: 'zh', jp: 'ja' };
const routeLangMatch = window.location.pathname.match(/\/(kr|cn|jp)(?:\/|$)/);
const routeLang = routeLangMatch ? routeLangMap[routeLangMatch[1]] : null;
const htmlDefaultLang = document.documentElement.dataset.defaultLang || (document.documentElement.lang === 'zh-CN' ? 'zh' : document.documentElement.lang);
const scriptSrc = document.currentScript?.getAttribute('src') || 'script.js';
const assetBase = scriptSrc.replace(/script\.js(?:\?.*)?$/, '');
const assetPath = (path) => `${assetBase}${path}`;
const initialLang = routeLang || (['ko', 'zh', 'ja'].includes(htmlDefaultLang) ? htmlDefaultLang : null) || localStorage.getItem('youandme-lang') || 'ko';
const state = { lang: initialLang, filter: 'all', expanded: false, modalIndex: 0, statusSnapshot: null };
const galleryImages = Array.from({ length: 15 }, (_, i) => assetPath(`assets/images/interior/${String(i + 1).padStart(3, '0')}.jpg`));

function t(key, vars = {}) {
  let text = translations[state.lang][key] || translations.ko[key] || key;
  Object.entries(vars).forEach(([name, value]) => { text = text.replace(`{${name}}`, value); });
  return text;
}

function applyLanguage(lang) {
  state.lang = lang;
  if (!routeLang) localStorage.setItem('youandme-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
  renderBottles();
  updateClock();
  renderStoreStatus();
  updateGalleryButton();
}

function formatPrice(price) {
  if (price === '문의') return state.lang === 'ko' ? '문의' : state.lang === 'zh' ? '咨询' : 'お問い合わせ';
  return `₩${price}`;
}

function renderBottles() {
  const grid = document.getElementById('bottleGrid');
  const visible = bottles.filter((item) => state.filter === 'all' || item.type === state.filter);
  grid.innerHTML = visible.map((item) => {
    const name = state.lang === 'zh' ? item.zh : state.lang === 'ja' ? item.ja : item.name;
    return `<article class="bottle-card"><div class="bottle-image"><img src="${assetPath(item.image)}" alt="${name}" loading="lazy" decoding="async" width="220" height="160"></div><div class="bottle-info"><h3>${name}</h3><p>${formatPrice(item.price)}</p></div></article>`;
  }).join('');
}

function renderLineup() {
  const wrap = document.getElementById('lineupMarquee');
  const lineupImages = [
    assetPath('assets/images/gif/루비27.gif'),
    assetPath('assets/images/gif/민아23.gif'),
    assetPath('assets/images/gif/비니21.gif'),
    assetPath('assets/images/gif/서현26.gif'),
    assetPath('assets/images/gif/슬빈29.gif'),
    assetPath('assets/images/gif/시아24.gif'),
    assetPath('assets/images/gif/아윤20.gif'),
    assetPath('assets/images/gif/예진쿠쿠23.gif'),
    assetPath('assets/images/gif/유아22.gif'),
    assetPath('assets/images/gif/유정26.gif'),
    assetPath('assets/images/gif/이안24.gif'),
    assetPath('assets/images/gif/주민21.gif'),
    assetPath('assets/images/gif/지민25.gif'),
    assetPath('assets/images/gif/채윤27.gif')
  ];
  const items = lineupImages;
  const slides = items.map((src, index) => `<div class="lineup-shot"><img src="${src}" alt="Lineup ${index + 1}" loading="lazy" decoding="async" width="220" height="391"></div>`).join('');
  wrap.innerHTML = `<div class="lineup-set">${slides}</div><div class="lineup-set" aria-hidden="true">${slides}</div>`;
}

function runWhenNear(selector, callback, options = { rootMargin: '600px 0px' }) {
  const target = document.querySelector(selector);
  if (!target) return;
  if (!('IntersectionObserver' in window)) {
    callback();
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    callback();
  }, options);
  observer.observe(target);
}

function setupLazyLineup() {
  runWhenNear('#lineup', renderLineup);
}

function renderGallery() {
  const gallery = document.getElementById('spaceGallery');
  gallery.innerHTML = galleryImages.map((src, index) => `<button type="button" class="space-item ${!state.expanded && index > 7 ? 'hidden' : ''}" data-index="${index}" aria-label="Open space image ${index + 1}"><img src="${src}" alt="You & Me interior ${index + 1}" loading="lazy" decoding="async" width="640" height="427"></button>`).join('');
}

function updateGalleryButton() {
  const btn = document.getElementById('galleryToggle');
  btn.textContent = state.expanded ? t('space.less') : t('space.more');
}

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function getSessionKey(hours) {
  if (hours >= 18 && hours < 21) return 'status.part0';
  if ((hours >= 21 && hours <= 23) || hours < 1) return 'status.part1';
  return 'status.part2';
}

function getMode(hours) {
  if (hours >= 23 || hours < 3) return 'peak';
  if (hours >= 3 && hours < 8) return 'busyLow';
  if (hours >= 18 && hours < 23) return 'busy';
  return 'relaxed';
}

function createStatusSnapshot() {
  const mode = getMode(new Date().getHours());
  const shouldWait = mode === 'peak' || mode === 'busyLow' || (mode === 'busy' && Math.random() < 0.6);
  const snapshot = { people: rand(10, 30), shouldWait };

  if (shouldWait) {
    const teams = mode === 'busyLow' ? rand(1, 3) : rand(3, 10);
    snapshot.teams = teams;
    snapshot.minutes = Math.max(10, teams * rand(7, 10));
  } else {
    snapshot.rooms = rand(1, 6);
  }

  return snapshot;
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  document.getElementById('currentTime').textContent = [hours, now.getMinutes(), now.getSeconds()].map((v) => String(v).padStart(2, '0')).join(':');
  document.getElementById('currentSession').textContent = t('status.session', { session: t(getSessionKey(hours)) });
}

function renderStoreStatus() {
  if (!state.statusSnapshot) state.statusSnapshot = createStatusSnapshot();

  const snapshot = state.statusSnapshot;
  document.getElementById('currentCount').textContent = t('status.people', { count: snapshot.people });

  const card = document.querySelector('.accent-card');
  const label = document.getElementById('statusLabel');
  const value = document.getElementById('statusValue');
  const wait = document.getElementById('waitTime');
  card.classList.toggle('waiting', snapshot.shouldWait);

  if (snapshot.shouldWait) {
    label.textContent = t('status.waiting');
    value.textContent = t('status.teamCount', { count: snapshot.teams });
    wait.textContent = snapshot.minutes >= 60 ? t('status.waitHour') : t('status.waitMin', { min: snapshot.minutes });
  } else {
    label.textContent = t('status.rooms');
    value.textContent = t('status.roomCount', { count: snapshot.rooms });
    wait.textContent = t('status.available');
  }
}

function openModal(index) {
  state.modalIndex = index;
  document.getElementById('modalImage').src = galleryImages[index];
  document.getElementById('imageModal').classList.add('open');
  document.getElementById('imageModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('imageModal').classList.remove('open');
  document.getElementById('imageModal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function stepModal(direction) {
  state.modalIndex = (state.modalIndex + direction + galleryImages.length) % galleryImages.length;
  document.getElementById('modalImage').src = galleryImages[state.modalIndex];
}

document.addEventListener('DOMContentLoaded', () => {
  setupLazyLineup();
  renderGallery();
  state.statusSnapshot = createStatusSnapshot();
  applyLanguage(state.lang);
  setInterval(updateClock, 1000);

  document.querySelectorAll('.lang-btn').forEach((btn) => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  document.querySelectorAll('.filter-btn').forEach((btn) => btn.addEventListener('click', () => {
    state.filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === btn));
    renderBottles();
  }));
  document.getElementById('galleryToggle').addEventListener('click', () => {
    state.expanded = !state.expanded;
    renderGallery();
    updateGalleryButton();
  });
  document.getElementById('spaceGallery').addEventListener('click', (event) => {
    const item = event.target.closest('.space-item');
    if (item) openModal(Number(item.dataset.index));
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalPrev').addEventListener('click', () => stepModal(-1));
  document.getElementById('modalNext').addEventListener('click', () => stepModal(1));
  document.getElementById('imageModal').addEventListener('click', (event) => { if (event.target.id === 'imageModal') closeModal(); });
  document.addEventListener('keydown', (event) => {
    if (!document.getElementById('imageModal').classList.contains('open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') stepModal(-1);
    if (event.key === 'ArrowRight') stepModal(1);
  });
});




