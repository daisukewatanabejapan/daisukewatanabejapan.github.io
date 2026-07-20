(() => {
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
  });
});

const isEnglish = document.documentElement.dataset.language === 'en' || location.pathname.startsWith('/en') || location.pathname.endsWith('/english.html');

const wordmark = document.querySelector('.wordmark');
wordmark?.addEventListener('click', (event) => {
  event.preventDefault();
  const homePath = isEnglish ? '/english.html' : '/';
  history.replaceState(null, '', homePath);
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

if (isEnglish) {
  document.documentElement.lang = 'en';
  document.title = 'Daisuke Watanabe | Engineering & AI Leadership';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = 'Daisuke Watanabe — engineering leader focused on enterprise AI implementation, software engineering, and organizational development.';
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = 'https://daisukewatanabejapan.github.io/english.html';
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.content = 'en_US';
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = 'Daisuke Watanabe | Engineering & AI Leadership';
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = 'Official profile of Daisuke Watanabe, VP and Head of Engineering at SB OAI Japan GK, focused on enterprise AI implementation at scale.';
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.content = 'https://daisukewatanabejapan.github.io/english.html';

  const translations = {
    '本サイトは個人として運営しており、掲載内容は所属組織の公式見解を示すものではありません。': 'This website represents my personal activities and does not necessarily reflect the views of my employers.',
    '本文へ移動': 'Skip to content',
    '技術と人をつなぎ、': 'Connecting people and technology,',
    'より良い未来をともにつくる。': 'building a better future together.',
    '渡邊 大輔': 'Daisuke Watanabe',
    '現在の主な役職': 'Current leadership roles',
    'エンジニアリング本部長': 'Head of Engineering',
    '法人事業統括 SB OAI本部': 'Enterprise Business Unit, SB OAI Division',
    '法人事業統括 SB OAI本部 エンジニアリング統括部長': 'Enterprise Business Unit, SB OAI Division — Head of Engineering Division',
    'エンジニアリング統括部長': 'Head of Engineering Division',
    'グループASI戦略本部 /': 'Group ASI Strategy Division /',
    'グループASI戦略本部': 'Group ASI Strategy Division',
    'メディア・検索ドメイン サイエンスSBU': 'Media & Search Domain, Science SBU',
    'AI、ソフトウェアエンジニアリング、健全な組織づくりを通じて、事業と社会の持続的な発展に貢献することを目指しています。': 'I work to support the sustainable development of business and society through AI, software engineering, and healthy organizational design.',
    'お仕事・講演・技術顧問のご相談はこちら': 'Work, speaking & technical advisory inquiries',
    'SB OAI Japan合同会社': 'SB OAI Japan GK',
    '特任フェロー／産学官連携統括': 'Specially Appointed Fellow / Head of Industry–Academia–Government Collaboration',
    'YouTubeで見る ↗': 'Watch on YouTube ↗',
    '「ソフトウェア開発の本質は、': '“The essence of software development',
    '人間関係の実践である。」': 'is the practice of human relationships.”',
    '人と人が出会い、互いを尊重し、学び合いながらものづくりに取り組む。その積み重ねが、より良い社会につながると考えています。': 'When people meet, respect one another, learn together, and build with empathy, their collective effort can lead to a better society.',
    'AIの社会実装と、': 'Advancing real-world AI',
    '次世代の人材育成に向き合う。': 'and developing the next generation.',
    '基調講演 · Agile Japan 2026': 'Keynote · Agile Japan 2026',
    'ソフトバンク×OpenAIが挑む「AIの社会実装」': 'SoftBank × OpenAI: Bringing AI into the Real World',
    '人事について': 'Executive Appointment',
    'Media · 日刊工業新聞': 'Media · The Nikkan Kogyo Shimbun',
    '日刊工業新聞': 'The Nikkan Kogyo Shimbun',
    'LINEヤフーにおける生成AI活用': 'Generative AI Adoption at LY Corporation',
    '過去の掲載・活動を見る': 'View more features and activities',
    '生成AIに関するFD講演会': 'Faculty Development Seminar on Generative AI',
    'Yahoo! JAPANでの取り組み': 'Engineering Leadership at Yahoo! JAPAN',
    '現在の主な役割': 'Current Roles',
    'ソフトバンク株式会社': 'SoftBank Corp.',
    'SB OAI Japan合同会社 エンジニアリング本部長': 'VP, Head of Engineering, SB OAI Japan GK',
    'ソフトバンク株式会社 法人事業統括 SB OAI本部 エンジニアリング統括部長': 'Head of Engineering Division, SB OAI Division, Enterprise Business Unit, SoftBank Corp.',
    'ソフトバンク株式会社 法人事業統括 SB OAI本部 エンジニアリング統括部長・グループASI戦略本部': 'SoftBank Corp. — Head of Engineering Division, SB OAI Division, Enterprise Business Unit; Group ASI Strategy Division',
    'LINEヤフー株式会社 メディア・検索ドメイン サイエンスSBU': 'LY Corporation — Media & Search Domain, Science SBU',
    '神戸高専電子工学科で半導体工学・ソフトウェア工学を学び、UNIX-Cプログラマーとしてキャリアを始めました。その後、日本テレビ放送網の番組Webサイトを8年間担当し、箱根駅伝・国政選挙速報システムの設計・開発・運用、読売新聞社のニュースメディア立ち上げに携わりました。上場企業の新規事業CTO、Gunosy執行役員・開発本部長として、事業と開発組織づくりにも取り組みました。': 'After studying semiconductor and software engineering in the Department of Electronic Engineering at Kobe KOSEN, I began my career as a UNIX/C programmer. I later spent eight years working on Nippon Television program websites, including the design, development, and operation of the Hakone Ekiden and national election reporting systems, and contributed to the launch of Yomiuri Shimbun news services. I also worked on business and engineering organization development as CTO of a new business at a listed company and as Executive Officer and Head of Development at Gunosy.',
    '2018年にYahoo! JAPANへ入社。主要メディアの大規模プロダクト開発、広告・マーケティング領域における1,000名超のエンジニアリング組織戦略と人材育成、技術研究室長を担当しました。その後、全社生成AI戦略と社内情報検索AIを推進し、10か月でMAU400％成長、10,000名超が利用する基盤へ拡大しました。': 'I joined Yahoo! JAPAN in 2018. My work included large-scale product development for major media services, engineering strategy and talent development for an organization of more than 1,000 people in advertising and marketing, and leadership of Technology Research. I later advanced company-wide generative AI strategy and an internal AI search platform, which achieved 400% MAU growth in 10 months and scaled to more than 10,000 users.',
    '2025年にソフトバンク株式会社へ参画しました。2026年より、ソフトバンクグループとOpenAIによる合弁会社SB OAI Japan合同会社のエンジニアリング本部長を務めています。また、企業・教育機関・行政に対し、実践的なアジャイル組織づくり、': 'I joined SoftBank Corp. in 2025. Since 2026, I have served as VP and Head of Engineering at SB OAI Japan GK, the joint venture between SoftBank Group and OpenAI. I also support the growth of organizations and people across companies, educational institutions, and government through practical agile organization building, technical support in ',
    '2025年にソフトバンク株式会社へ参画しました。2026年より、ソフトバンクグループとOpenAIによる合弁会社SB OAI Japan合同会社のエンジニアリング本部長を務めています。': 'I joined SoftBank Corp. in 2025. Since 2026, I have served as VP and Head of Engineering at SB OAI Japan GK, the joint venture between SoftBank Group and OpenAI.',
    '2025年にソフトバンク株式会社へ参画し、2026年より現職を務めています。': 'I joined SoftBank Corp. in 2025 and have served in my current role since 2026.',
    'AI・ソフトウェアエンジニアリング': 'AI and software engineering',
    '分野の技術支援、講演・教育活動を通じて、組織と人材の成長を支援しています。': ', and speaking and educational activities.',
    '半導体工学を基盤とし、計算基盤からソフトウェア、エンタープライズ領域までを横断しながら、大規模環境におけるAIの社会実装と事業価値の創出を推進しています。': 'With a foundation in semiconductor engineering, I work across computing infrastructure, software, and enterprise systems to advance AI implementation and business value creation at scale.',
    'AIを単なる技術としてではなく、企業の実際の業務に組み込み、事業価値として継続的に機能させることに取り組んでいます。': 'My focus is not AI as a standalone technology, but its integration into real business operations so that it delivers sustained value.',
    'ソフトバンク株式会社 / LINEヤフー株式会社': 'SoftBank Corp. / LY Corporation',
    'グループASI戦略本部 / メディア・検索ドメイン サイエンスSBU': 'Group ASI Strategy Division / Media & Search Domain, Science SBU',
    '日本代表': 'Japan Chapter Lead',
    'Agile Coaches Alliance 日本代表': 'Agile Coaches Alliance Japan Chapter Lead',
    '国立高専機構 半導体人材育成センター': 'KOSEN Semiconductor Human Resource Development Center',
    '特任フェロー': 'Specially Appointed Fellow',
    '産学官連携統括': 'Head of Industry–Academia–Government Collaboration',
    '渋谷区': 'Shibuya City',
    'スタートアップ支援事業': 'Startup Support Program',
    '行政DX推進アドバイザー': 'Government DX Advisor',
    '支援内容': 'Areas of Support',
    '企業・教育機関・行政に対する、': 'For companies, educational institutions, and government:',
    '実践的アジャイル組織づくり、': 'Practical agile organization building,',
    '分野の技術支援、': ' technical support,',
    '講演・教育活動': 'Speaking and educational activities',
    '支援実績を見る': 'View support experience',
    '企業・教育機関・行政での活動': 'Activities with Companies, Educational Institutions & Government',
    '企業・教育機関・行政において、': 'Across companies, educational institutions, and government, I engage in:',
    '実践的なアジャイル組織化支援': 'Practical agile organization development',
    '分野の技術支援': ' technical support',
    '技術顧問・社外取締役': 'Technical advisory and outside director roles',
    'に取り組んでいます。': 'This work is ongoing.',
    'これまでの活動の一部をご紹介します。': 'Selected examples of these activities are presented below.',
    '活動実績を見る': 'View activity highlights',
    '企業・教育機関・行政・公共団体での活動実績を見る': 'View activities with companies, educational institutions, government & public organizations',
    'より良い社会を実現するために。': 'Working Toward a Better Society.',
    '企業・教育機関・行政・公共団体での活動': 'Activities with Companies, Educational Institutions, Government & Public Organizations',
    '企業・教育機関・行政・公共団体において、実践的なアジャイル組織づくり、': 'Across companies, educational institutions, government, and public organizations, I support sustainable organizational and talent development through practical agile organization building, technical support in ',
    '分野の技術支援、技術顧問、講演・教育活動などを通じて、組織と人材の持続的な成長を支援しています。これまでの活動の一部をご紹介します。': ', technical advisory work, and speaking and educational activities. Selected examples of these activities are presented below.',
    '教育機関・行政・公共団体での社会活動': 'Social Activities with Educational Institutions, Government & Public Organizations',
    '自己紹介': 'Profile',
    '主な活動': 'Key Activities',
    '企業、社会、コミュニティへ。': 'Across Business, Society & Community.',
    '企業DX・アジャイル組織化支援実績を見る': 'View Enterprise DX & Agile Transformation Experience',
    '教育機関・行政・公共団体での社会活動実績を見る': 'View Education, Government & Public Organization Activities',
    '企業におけるAI・ソフトウェアエンジニアリングの実践に加え、教育機関・行政・公共団体、アジャイルコミュニティでの活動を継続しています。': 'Alongside hands-on AI and software engineering in enterprise settings, I remain actively involved with educational institutions, government, public organizations, and the agile community.',
    '企業での活動': 'Enterprise Leadership',
    '大規模環境におけるAIの社会実装、ソフトウェアエンジニアリング、技術戦略、エンジニアリング組織づくりを通じて、継続的な事業価値の創出に取り組んでいます。': 'I work to create sustained business value through real-world AI implementation at scale, software engineering, technology strategy, and engineering organization development.',
    '教育・行政・社会活動': 'Education, Government & Social Activities',
    'アジャイルコミュニティ活動': 'Agile Community Activities',
    'アジャイルソフトウェアデベロップメント': 'Agile Software Development',
    '2000–継続中': '2000–Present',
    'アジャイルの実践・教育・コミュニティ活動': 'Agile Practice, Education & Community Activities',
    'Scrum・XP・Lean・DevOps／国内外での知見共有': 'Scrum, XP, Lean & DevOps / Sharing Practical Insights in Japan and Abroad',
    'Certified Scrum Alliance Trainer™（CSAT™）': 'Certified Scrum Alliance Trainer™ (CSAT™)',
    'Certified Team Coach™（CTC™）': 'Certified Team Coach™ (CTC™)',
    '基調講演': 'Keynote',
    '国際認定資格と国内外のコミュニティ活動を通じて、実践から得た知見を継続的に共有しています。': 'Through international credentials and community activities in Japan and abroad, I continue to share insights grounded in practice.',
    '国内外の講演・コミュニティ活動': 'Speaking & Community Activities in Japan and Abroad',
    '現在継続中の活動': 'Current Ongoing Activities',
    'その他の活動実績を見る': 'View Other Activities',
    '継続中': 'Ongoing',
    '2024–継続中': '2024–Present',
    '2021–継続中': '2021–Present',
    '2019–継続中': '2019–Present',
    '東京都立産業技術高等専門学校': 'Tokyo Metropolitan College of Industrial Technology',
    '「生成AI概論」講師': 'Lecturer, Introduction to Generative AI',
    'S-PORT 半導体人材育成センター': 'S-PORT Semiconductor Talent Development Center',
    'S-PORT（半導体人材育成センター）公式': 'S-PORT (Semiconductor Talent Development Center) — Official',
    '半導体人材育成事業に新しく二名の方を迎えます': 'Two New Members Join the Semiconductor Talent Development Initiative',
    '生成AIに関するFD講演会を開催しました': 'Faculty Development Seminar on Generative AI',
    '半導体人材育成センター（S-PORT）開所式・シンポジウム': 'S-PORT Opening Ceremony & Symposium',
    '全国高専の「半導体教育の司令塔」プレスリリース': 'Press Release: National Hub for Semiconductor Education Across KOSEN',
    '高専機構プレスリリース（S-PORT設立）': 'KOSEN Press Release: Establishment of S-PORT',
    '渋谷区役所 × YOUTRUST 就任記事': 'Shibuya City × YOUTRUST Appointment Announcement',
    '日本経済新聞': 'Nikkei',
    '渋谷区の副業人材活用に関する記事': 'Article on Shibuya City’s Use of External Professional Talent',
    '東京都立産業技術高専「生成AI概論」': 'Introduction to Generative AI at Tokyo Metropolitan College of Industrial Technology',
    'Hack U KOSEN（LINEヤフー株式会社）': 'Hack U KOSEN (LY Corporation)',
    '審査員': 'Judge',
    'Hack U KOSEN 2022 プレゼンテーション・作品展示会・表彰式': 'Hack U KOSEN 2022 — Presentations, Project Exhibition & Awards Ceremony',
    'Hack U KOSEN 2022 プレゼンテーション・作品展示会・表彰式のサムネイル': 'Thumbnail for Hack U KOSEN 2022 — Presentations, Project Exhibition & Awards Ceremony',
    '全国高等専門学校プログラミングコンテスト': 'National KOSEN Programming Contest',
    '競技部門 審査委員': 'Competition Division Judge',
    '競技部門 審査委員（2021）': 'Competition Division Judge (2021)',
    '開志専門職大学': 'Kaishi Professional University',
    '特別講師': 'Guest Lecturer',
    '特別講師（2020–2021）': 'Guest Lecturer (2020–2021)',
    '東京都自閉症協会': 'Tokyo Autism Association',
    'NPO法人 東京都自閉症協会': 'Tokyo Autism Association (NPO)',
    '2019–現在': '2019–Present',
    '国立高専機構 半導体人材育成プロジェクト COMPASS5.0': 'KOSEN Semiconductor Talent Development Project — COMPASS5.0',
    '国立高専機構 半導体人材育成センター COMPASS5.0': 'KOSEN Semiconductor Talent Development Center — COMPASS5.0',
    '特任フェロー・産学官連携統括': 'Specially Appointed Fellow / Head of Industry–Academia–Government Collaboration',
    '特任フェロー／産学官連携統括': 'Specially Appointed Fellow / Head of Industry–Academia–Government Collaboration',
    'スタートアップ支援事業・行政DX推進アドバイザー': 'Startup Support Program / Government DX Advisor',
    'プログラミング講師・マインドフルネス講師・AI講師': 'Programming, mindfulness, and AI instructor',
    'プログラミング講師・マインドフルネス講師・「はじめてのAI体験」ワークショップ講師': 'Programming and mindfulness instructor / “First AI Experience” workshop instructor',
    '「はじめてのAI体験」ワークショップ講師': '“First AI Experience” Workshop Instructor',
    '企業DX・アジャイル組織化支援': 'Enterprise DX & Agile Transformation Support',
    '日本生命保険相互会社': 'Nippon Life Insurance Company',
    'アジャイルCoE組織支援': 'Agile CoE organizational support',
    '第一ライフテクノクロス株式会社': 'Daiichi Life Techno Cross Co., Ltd.',
    'アジャイル組織・高度人材評価支援': 'Agile organization and advanced talent assessment support',
    'パナソニックグループ労働組合連合会': 'Panasonic Group Workers Unions Association',
    'DX講師': 'DX Instructor',
    '日工株式会社': 'Nikko Co., Ltd.',
    '研究開発支援・アジャイルコーチ': 'R&D support and agile coaching',
    'HRベンチャー企業': 'HR technology startup',
    '技術顧問': 'Technology Advisor',
    '株式会社インテック': 'INTEC Inc.',
    'アジャイル組織化支援': 'Agile transformation support',
    '株式会社paild': 'paild, Inc.',
    'エグゼクティブコーチ・人事／組織開発支援': 'Executive coaching and organizational development support',
    '株式会社Gunosy': 'Gunosy Inc.',
    'プログラミングから、': 'From programming to',
    'AIの社会実装と組織づくりへ。': 'enterprise AI and organizational leadership.',
    '半導体・通信システムの開発を起点に、メディア、広告、検索、生成AIへと領域を広げてきました。現在は、AIを企業や社会で継続的に活用できる形へ実装するための技術と組織づくりに取り組んでいます。': 'Starting with semiconductor and telecommunications systems, I expanded my work into media, advertising, search, and generative AI. Today, I focus on the technology and organizations required to make AI sustainable in business and society.',
    '2026–現在': '2026–Present',
    '2025–現在': '2025–Present',
    'Crystal Intelligenceの導入・展開と、実装。FDE・TPM・SWE・AIエンジニア組織のマネジメント、育成、採用を担当しています。': 'Leading the implementation and deployment of Crystal Intelligence, including management, development, and hiring across FDE, TPM, SWE, and AI engineering teams.',
    'AIの社会実装': 'AI Implementation',
    'SB OAI Japan設立': 'Establishment of SB OAI Japan GK',
    'サービス解説': 'Service Overview',
    'グループASI戦略本部を兼務し、グループ横断のAIプロジェクトとエンジニアリング組織を推進しています。': 'Serving concurrently in the Group ASI Strategy Division, driving cross-group AI initiatives and engineering organizations.',
    '人事について（VP就任）': 'Executive Appointment',
    '生成AI統括本部': 'Generative AI Division',
    '戦略企画本部／AI開発本部': 'Strategy Planning / AI Development',
    '全社生成AI戦略と社内情報検索AIのプロダクトマネジメントを担当。10か月でMAUが400％成長し、10,000名超・組織の90％超が利用する基盤へ拡大しました。': 'Led enterprise-wide generative AI strategy and product management for an internal AI search platform. MAU grew 400% in 10 months, scaling to more than 10,000 users and over 90% organizational adoption.',
    'LINEヤフー AI活用': 'Enterprise AI at LY Corporation',
    'LINEヤフー株式会社': 'LY Corporation',
    'ヤフー株式会社': 'Yahoo Japan Corporation',
    'テクノロジーグループ': 'Technology Group',
    '技術研究室長': 'Head of Technology Research',
    'メディア・広告・検索・研究開発の各領域において、主要メディアの大規模プロダクト開発・BCP、技術戦略、1,000名超のエンジニアリング組織戦略と人材育成に携わりました。': 'Contributed to large-scale product development and business continuity for major media services, technology strategy, and organizational strategy and talent development for an engineering organization of more than 1,000 people across media, advertising, search, and R&D.',
    'CTO／VPoEキャリアトーク': 'CTO / VPoE Career Talk',
    'ヤフーDXセミナー': 'Yahoo Japan DX Seminar',
    '執行役員': 'Executive Officer',
    '開発本部長': 'Head of Development',
    'ニュースプロダクトと広告技術の開発、エンジニアリング組織の拡大、採用・人事・組織開発を担当。': 'Led news product and advertising technology development, engineering organization growth, hiring, people operations, and organizational development.',
    '2015年以前のキャリアを見る': 'View career before 2015',
    '株式会社マクロミル／株式会社ミセコレ': 'Macromill, Inc. / Misecolle, Inc.',
    'システム開発本部 マネジャー': 'Systems Development Manager',
    '新規事業のマルチデバイス開発と、デジタルマーケティング領域の技術戦略・開発組織を担当。': 'Led multi-device development for new ventures and technology strategy and development teams in digital marketing.',
    'アクセルマーク株式会社': 'AXEL MARK INC.',
    'ソーシャル事業本部': 'Social Business Division',
    'マネジャー': 'Manager',
    'モバイル・ソーシャルアプリ、広告・検索領域の開発運営と、アジャイル開発・新規事業企画に携わりました。': 'Led development and operations for mobile and social applications, advertising and search, agile development, and new business planning.',
    'スマートフォン市場とコンテンツビジネス': 'Smartphone Market & Content Business',
    '株式会社日本テレビビデオ': 'Nippon Television Video Corporation',
    'プロジェクトマネジャー': 'Project Manager',
    '日本テレビの番組Webサイト、箱根駅伝・選挙速報システム、読売新聞の主要ニュースメディアを開発しました。': 'Developed Nippon TV program websites, real-time Hakone Ekiden and national election systems, and major Yomiuri Shimbun news services.',
    'プログラマー': 'Programmer',
    '省庁の公共システム開発を中心に、NEC・東芝関連プロジェクト、NTTの交換機開発、KDDのデータ移行、J-COM@Homeのサーバー移行などに携わりました。': 'Worked primarily on public-sector systems, including NEC and Toshiba projects, NTT switching systems, KDD data migration, and J-COM@Home server migration.',
    '公共システム開発': 'Public-sector Systems Development',
    'NTT、KDD、防衛庁・建設省関東地方建設局': 'NTT, KDD, Japan Defense Agency, Kanto Regional Construction Bureau',
    'UNIX-Cプログラマー': 'UNIX/C Programmer',
    '事業成果につながるソフトウェアエンジニアリングと、健全で持続可能なエンジニアリング組織づくり。その実践と支援を通じて、組織全体の力を引き出すことに取り組んでいます。': 'I focus on software engineering that delivers business outcomes and on building healthy, sustainable engineering organizations that unlock their full potential.',
    '技術・事業領域': 'Technology & Business Domains',
    'AI・自然言語処理': 'AI & Natural Language Processing',
    'AI': 'Artificial Intelligence',
    'メディア': 'Media',
    '広告': 'Advertising',
    '検索エンジン': 'Search Engines',
    '通信': 'Telecommunications',
    '自然言語処理': 'Natural Language Processing',
    '金融': 'Finance',
    '教育': 'Education',
    'データセンター': 'Data Centers',
    '半導体工学': 'Semiconductor Engineering',
    '検索・メディア・広告': 'Search, Media & Advertising',
    '通信・データセンター': 'Telecommunications & Data Centers',
    '金融・教育': 'Finance & Education',
    'ワークフロー自動化': 'Workflow Automation',
    'ソフトウェア開発': 'Software Development',
    'AI・エンジニアリング': 'AI & Engineering',
    'Lean・DevOps': 'Lean & DevOps',
    '生成AI・LLM': 'Generative AI & LLMs',
    'RAG': 'Retrieval-Augmented Generation',
    'AIエージェント': 'AI Agents',
    'AIワークフロー設計': 'AI Workflow Design',
    '組織・働き方': 'Organization & Ways of Working',
    'アジャイルコーチング': 'Agile Coaching',
    'エグゼクティブコーチング': 'Executive Coaching',
    'エンジニアリング組織設計': 'Engineering Organization Design',
    '主な講演・登壇': 'Selected Talks & Speaking',
    'AI、アジャイル、ソフトウェアエンジニアリング、組織開発、半導体人材育成をテーマに、実践から得た知見を共有しています。': 'I share practical insights on AI, agile methods, software engineering, organizational development, and semiconductor talent development.',
    '2026 · 登壇予定': '2026 · Upcoming',
    'Agile Paradox -加速する世界と、アジャイルの原点': 'Agile Paradox - An Accelerating World and the Roots of Agile',
    'Agile Japan 2026 基調講演': 'Agile Japan 2026 Keynote',
    '主催': 'Organizer',
    'スライド': 'Slides',
    '写真・詳細': 'Photos & Details',
    '公式ページ ↗': 'Official page ↗',
    'AI・ソフトウェアエンジニアリング': 'AI & Software Engineering',
    '日本能率協会': 'Japan Management Association',
    '生成AIを学ぶ：高専教育における基礎・未来・倫理・実践活用術': 'Learning Generative AI: Foundations, Future, Ethics, and Practice in KOSEN Education',
    '生成AIに関するFD講演会': 'Faculty Development Seminar on Generative AI',
    '佐世保工業高等専門学校': 'National Institute of Technology, Sasebo College',
    '開催記事 ↗': 'Event report ↗',
    '過去の講演を見る': 'View past talks',
    'キャリアの中で感じたこと': 'Lessons from an Engineering Leadership Career',
    'CTO/VPoEキャリアトーク #1': 'CTO/VPoE Career Talk #1',
    'スケールアップする組織におけるLeSS実践と継続的改善手法': 'LeSS Practice and Continuous Improvement in a Scaling Organization',
    '組織スケールとアジャイル': 'Scaling Organizations & Agile',
    'スクラムギャザリング東京実行委員会': 'Scrum Gathering Tokyo Organizing Committee',
    '公式イベント ↗': 'Official event ↗',
    '拡大するスマートフォン市場とコンテンツビジネスの可能性': 'The Growing Smartphone Market and the Future of Content Business',
    'モバイル・コンテンツビジネス': 'Mobile & Content Business',
    '東京IPO': 'Tokyo IPO',
    '開催情報 ↗': 'Event details ↗',
    '行政DX・スタートアップ支援': 'Government DX & Startup Support',
    '自治体におけるDX推進と人材支援': 'DX transformation and talent support in local government',
    '関連情報 ↗': 'Related information ↗',
    '人と技術が、ともに成長できる未来へ。': 'Toward a future where people and technology grow together.'
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const value = node.nodeValue;
    const key = value.trim();
    if (!translations[key]) return;
    node.nodeValue = value.replace(key, translations[key]);
  });

  const attributeTranslations = {
    'ページ上部へ': 'Back to top',
    'メインナビゲーション': 'Main navigation',
    '現在の主な役職': 'Current leadership roles',
    '主な認定・社会活動': 'Key credentials and public roles',
    '哲学': 'Philosophy',
    '職務経歴タイムライン': 'Career timeline',
    '講演一覧': 'Talks and speaking engagements',
    '渡邊大輔のポートレート': 'Portrait of Daisuke Watanabe',
    'TECH PLAY掲載記事のプレビュー': 'Preview of the TECH PLAY feature',
    'TECH PLAY記事のプレビュー': 'Preview of the TECH PLAY article',
    'Agile Japan 2026公式メインビジュアル': 'Official Agile Japan 2026 visual',
    'Yahoo! JAPAN CTO・VPoEキャリアトークのサムネイル': 'Yahoo! JAPAN CTO/VPoE Career Talk thumbnail',
    'Yahoo! JAPAN CTO VPoEキャリアトークのサムネイル': 'Yahoo! JAPAN CTO/VPoE Career Talk thumbnail',
    '佐世保高専で生成AIのFD講演を行う渡邊大輔': 'Daisuke Watanabe presenting a generative AI faculty development seminar at Sasebo KOSEN',
    'ソフトバンク株式会社プレスリリースのプレビュー': 'Preview of the SoftBank Corp. press release',
    '日刊工業新聞のLINEヤフーAI活用記事のプレビュー': 'Preview of The Nikkan Kogyo Shimbun article on AI adoption at LY Corporation',
    'Scrum Alliance認定プロフィールのプレビュー': 'Preview of the Scrum Alliance credential profile',
    'SB OAI Japan設立発表のプレビュー': 'Preview of the SB OAI Japan establishment announcement',
    'Patching as a Service発表のプレビュー': 'Preview of the Patching as a Service announcement',
    'Patching as a Service解説のプレビュー': 'Preview of the Patching as a Service overview',
    'ソフトバンク人事発表のプレビュー': 'Preview of the SoftBank executive appointment announcement',
    'ASI戦略記事のプレビュー': 'Preview of the ASI strategy article',
    '日刊工業新聞記事のプレビュー': 'Preview of The Nikkan Kogyo Shimbun article',
    'HiPro掲載のヤフーDX講演ページのプレビュー': 'Preview of the HiPro page for the Yahoo! JAPAN DX seminar',
    'Gunosyインタビューのプレビュー': 'Preview of the Gunosy interview',
    'スマートフォン市場とコンテンツビジネス講演のプレビュー': 'Preview of the smartphone market and content business seminar',
    'TECHNO-FRONTIER 2026公式ビジュアル': 'Official TECHNO-FRONTIER 2026 visual',
    'Agile Coaches Alliance Italy講演の告知ビジュアル': 'Promotional visual for the Agile Coaches Alliance Italy session',
    'LeSS実践と継続的改善手法のスライドプレビュー': 'Preview of the slides on LeSS practice and continuous improvement',
    '渋谷区役所とYOUTRUST就任式の記事プレビュー': 'Preview of the Shibuya City and YOUTRUST appointment ceremony article'
  };

  document.querySelectorAll('[aria-label], [alt], [title]').forEach((element) => {
    ['aria-label', 'alt', 'title'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && attributeTranslations[value]) element.setAttribute(attribute, attributeTranslations[value]);
    });
  });

  document.querySelectorAll('.lang-link').forEach((link) => {
    link.textContent = 'JA';
    link.href = '/';
    link.setAttribute('aria-label', 'Switch to Japanese');
  });

  document.querySelectorAll('.site-header a[href^="#"]').forEach((link) => {
    link.href = `/english.html${link.getAttribute('href')}`;
  });
}
})();
