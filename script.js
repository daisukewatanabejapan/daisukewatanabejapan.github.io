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

const isEnglish = document.documentElement.dataset.language === 'en' || location.pathname.startsWith('/en');

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
  if (ogDescription) ogDescription.content = 'Official profile of Daisuke Watanabe, VP and Head of Engineering at SB OAI Japan, focused on enterprise AI implementation at scale.';
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.content = 'https://daisukewatanabejapan.github.io/english.html';

  const translations = {
    '本サイトは個人として運営しており、掲載内容は所属組織の公式見解を示すものではありません。': 'This website represents my personal activities and does not necessarily reflect the views of my employers.',
    '本文へ移動': 'Skip to content',
    '技術と人をつなぎ、': 'Connecting people and technology,',
    'より良い未来をともにつくる。': 'building a better future together.',
    '渡邊 大輔': 'Daisuke Watanabe',
    '現在の主な役職': 'Current leadership roles',
    'エンジニアリング本部長': 'Engineering Leadership',
    '法人事業統括 SB OAI本部': 'Enterprise Business Unit, SB OAI Division',
    '法人事業統括 SB OAI本部 エンジニアリング統括部長': 'Enterprise Business Unit, SB OAI Division — Head of Engineering Division',
    'エンジニアリング統括部長': 'Head of Engineering Division',
    'グループASI戦略本部 /': 'Group ASI Strategy Division /',
    'グループASI戦略本部': 'Group ASI Strategy Division',
    'メディア・検索ドメイン サイエンスSBU': 'Media & Search Domain, Science SBU',
    'AI、ソフトウェアエンジニアリング、健全な組織づくりを通じて、事業と社会の持続的な発展に貢献することを目指しています。': 'I work to support the sustainable development of business and society through AI, software engineering, and healthy organizational design.',
    'お仕事・講演のご依頼はこちら': 'Work & speaking inquiries',
    'SB OAI Japan合同会社': 'SB OAI Japan',
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
    'LINEヤフーにおける生成AI活用': 'Generative AI Adoption at LY Corporation',
    '過去の掲載・活動を見る': 'View more features and activities',
    '生成AIに関するFD講演会': 'Faculty Development Seminar on Generative AI',
    'Yahoo! JAPANでの取り組み': 'Engineering Leadership at Yahoo! JAPAN',
    '現在の主な役割': 'Current Roles',
    'ソフトバンク株式会社': 'SoftBank Corp.',
    'SB OAI Japan合同会社 エンジニアリング本部長': 'VP, Head of Engineering, SB OAI Japan',
    'ソフトバンク株式会社 法人事業統括 SB OAI本部 エンジニアリング統括部長': 'Head of Engineering Division, SB OAI Division, Enterprise Business Unit, SoftBank Corp.',
    'ソフトバンク株式会社 法人事業統括 SB OAI本部 エンジニアリング統括部長・グループASI戦略本部': 'SoftBank Corp. — Head of Engineering Division, SB OAI Division, Enterprise Business Unit; Group ASI Strategy Division',
    'LINEヤフー株式会社 メディア・検索ドメイン サイエンスSBU': 'LY Corporation — Media & Search Domain, Science SBU',
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
    'その他の教育・社会活動・企業DX・アジャイル組織化支援を見る': 'View education, community, enterprise DX & agile transformation work',
    '教育・社会活動': 'Education & Community',
    '継続中': 'Ongoing',
    '東京都立産業技術高等専門学校': 'Tokyo Metropolitan College of Industrial Technology',
    '「生成AI概論」講師': 'Lecturer, Introduction to Generative AI',
    '全国高等専門学校プログラミングコンテスト': 'National KOSEN Programming Contest',
    '競技部門 審査委員': 'Competition Division Judge',
    '競技部門 審査委員（2021）': 'Competition Division Judge (2021)',
    '開志専門職大学': 'Kaishi Professional University',
    '特別講師': 'Guest Lecturer',
    '特別講師（2020–2021）': 'Guest Lecturer (2020–2021)',
    '東京都自閉症協会': 'Tokyo Autism Association',
    'プログラミング講師・マインドフルネス講師・AI講師': 'Programming, mindfulness, and AI instructor',
    '企業DX・アジャイル組織化支援': 'Enterprise DX & Agile Transformation Support',
    '日本生命保険相互会社': 'Nippon Life Insurance Company',
    'アジャイルCoE組織支援': 'Agile CoE organizational support',
    '第一生命保険株式会社': 'The Dai-ichi Life Insurance Company, Limited',
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
    'SB OAI Japan設立': 'Establishment of SB OAI Japan',
    'サービス解説': 'Service Overview',
    'グループASI戦略本部を兼務し、グループ横断のAIプロジェクトとエンジニアリング組織を推進しています。': 'Serving concurrently in the Group ASI Strategy Division, driving cross-group AI initiatives and engineering organizations.',
    '人事について（VP就任）': 'Executive Appointment',
    '生成AI統括本部': 'Generative AI Division',
    '戦略企画本部／AI開発本部': 'Strategy Planning / AI Development',
    '全社生成AI戦略と社内情報検索AIのプロダクトマネジメントを担当しました。10か月でMAUが400％成長し、10,000名超・組織の90％超が利用する基盤へ拡大しました。': 'Led enterprise-wide generative AI strategy and product management for an internal AI search platform. MAU grew 400% in 10 months, scaling to more than 10,000 users and over 90% organizational adoption.',
    'LINEヤフー AI活用': 'Enterprise AI at LY Corporation',
    'LINEヤフー株式会社': 'LY Corporation',
    'ヤフー株式会社': 'Yahoo Japan Corporation',
    'テクノロジーグループ': 'Technology Group',
    '技術研究室長': 'Head of Technology Research',
    'メディア・広告・検索・研究開発の各領域において、主要メディアの開発・BCP、技術戦略、1,000名超のエンジニアリング組織戦略と人材育成に携わりました。': 'Led major media development, business continuity, technology strategy, and talent development for an engineering organization of more than 1,000 people across media, advertising, search, and R&D.',
    'CTO／VPoEキャリアトーク': 'CTO / VPoE Career Talk',
    'ヤフーDXセミナー': 'Yahoo Japan DX Seminar',
    '執行役員': 'Executive Officer',
    '開発本部長': 'Head of Development',
    'ニュースプロダクトと広告技術の開発、エンジニアリング組織の拡大、採用・人事・組織開発を担当しました。': 'Led news product and advertising technology development, engineering organization growth, hiring, people operations, and organizational development.',
    '2015年以前のキャリアを見る': 'View career before 2015',
    '株式会社マクロミル／株式会社ミセコレ': 'Macromill, Inc. / Misecolle, Inc.',
    'システム開発本部 マネジャー': 'Systems Development Manager',
    '新規事業のマルチデバイス開発と、デジタルマーケティング領域の技術戦略・開発組織を担当しました。': 'Led multi-device development for new ventures and technology strategy and development teams in digital marketing.',
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
    '半導体工学': 'Semiconductor Engineering',
    '検索・メディア・広告': 'Search, Media & Advertising',
    '通信・データセンター': 'Telecommunications & Data Centers',
    '金融・教育': 'Finance & Education',
    'ワークフロー自動化': 'Workflow Automation',
    'ソフトウェア開発': 'Software Development',
    'AI・エンジニアリング': 'AI & Engineering',
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

  document.querySelectorAll('.lang-link').forEach((link) => {
    link.textContent = 'JA';
    link.href = '/';
    link.setAttribute('aria-label', '日本語に切り替える');
  });
}
})();
