/* ====================================================================
   JK_CP 立ち上げロードマップ — app.js
   ==================================================================== */
const NOTION = id => 'https://app.notion.com/p/' + id;

/* ================= マニュアルDB（全57件・Notion準拠） ================= */
/* cat: general / approach / mendan / shorui / dashin / kaishu / teian / settei / mensetsu / closing / shodaku */
const MANUALS = [
{i:0, t:"onb/求職者・企業対応におけるコミュニケーション基本マニュアル", star:1, cat:["general"], p:"CP業務における基本的な対応方針を理解する。原則架電でのコミュニケーションをすること", id:"36b919c9cfb680abaee4f9441f14bf2b"},
{i:1, t:"onb/プロフェッショナルなCPの基準", star:1, cat:["general"], p:"CPとしてどの指標でどこを目指すかを理解する", id:"2c6919c9cfb6802db9d2c5fb8c0f8568"},
{i:2, t:"onb/チーム配属後研修～リアリティショックと組織社会化～", cat:["general"], p:"", id:"23a919c9cfb68019add9ded9e6b66057"},
{i:3, t:"onb/ファネルの言葉の定義｜不通・コンタクト・面談・面談成功・有効面談〜内定承諾等", star:1, cat:["general"], p:"レクリーの中で日常使用する言葉の意味・定義を正しく認知する", id:"1a1919c9cfb680dca36dce1449b28581"},
{i:4, t:"onb/入社時のGmailの設定", cat:["general"], p:"入社時に正しくGmailを設定されているかの確認を行う", id:"c32cc61b00474293887eb1711ea520bd"},
{i:5, t:"onb/【マニュアル】メールフォルダの作成と自動仕分け設定", cat:["general"], p:"入社時に正しくGmailを設定されているかの確認を行う", id:"37a919c9cfb68056a097dc5820160183"},
{i:6, t:"onb/よく使うダッシュボードとkintone", star:1, cat:["general"], p:"普段使うkintoneページの理解", id:"36d919c9cfb6801e9898d13a55bd86c2"},
{i:7, t:"onb/掘り起こし面談シート", cat:["approach"], p:"掘り起こしの際にどのような流れで面談しているかの理解をする", id:"352919c9cfb680de91d6ea963407d9e2"},
{i:8, t:"onb/掘り起こし切り返しスクリプト集", cat:["approach"], p:"掘り起こしのOPトークを学習し、通電→掘り起こし面談率を向上させる", id:"352919c9cfb680b3a500ccfe0620b041"},
{i:9, t:"JKCP_リファラルに関するマニュアル", cat:["approach","mendan"], p:"リファラルを恒常的に行い当たり前に面談獲得できるようにする", id:"33a919c9cfb680418b59d073dde1a526"},
{i:10, t:"onb/掘り起こし架電の際kintone処理", cat:["approach"], p:"掘り起こし架電をした際の正しいkintone処理を行う", id:"352919c9cfb680959184ea479b6db13f"},
{i:11, t:"面談後求職者の引き継ぎとペンディング処理の対応ガイドライン", cat:["mendan"], p:"面談をしたアクティブを他の人に引き継ぐ場合に、どのような意思決定をすべきかを理解する", id:"e6d3769ae07b4dcb8ed618878705ed71"},
{i:12, t:"onb/掘り起こしで使う起点企業5選", cat:["approach"], p:"掘り起こしの際にアピールする企業を理解する", id:"36b919c9cfb680288d07dae7b85f062e"},
{i:13, t:"onb/新規架電時のkintone操作", cat:["approach"], p:"新規リードへの架電時のkintone操作を理解する", id:"36a919c9cfb680e9b8cdd0737634869b"},
{i:14, t:"onb/新規リードのOPトークスクリプト", cat:["approach"], p:"新規リードへの架電における通電→面談率向上", id:"35b919c9cfb680bfa5e4d9260bef3b43"},
{i:15, t:"JKCP_リード配布の考え方_vf", cat:["approach"], p:"リード配布原理原則を読み、公平に差配されていることを理解する", id:"31e919c9cfb68028aa0cd978ea5fdd1c"},
{i:16, t:"JKCP_スカウト経由でのリード流入対応マニュアル", cat:["approach"], p:"リード価値の高いチャネルからの流入における対応を理解する", id:"319919c9cfb680f4a003e6bba27882f6"},
{i:17, t:"onb/新規面談ヒアリングシート", cat:["mendan"], p:"新規リードへの面談シートを理解する", id:"35b919c9cfb680b981aecfd016a21a95"},
{i:18, t:"onb/面談時のkintone更新", cat:["mendan"], p:"面談をした際にどこを更新するかを把握する", id:"35b919c9cfb6802b9746c8277119dee0"},
{i:19, t:"onb/書類作成代行", cat:["shorui"], p:"基本は全て代行して作ること（持っていてもすぐ出してもらえないなら提出を待たない）。書類作成ツールの使い方・次回アポの切り方", id:"36d919c9cfb680acafc6c814115e2e94"},
{i:20, t:"履歴書、職務経歴書、工事経歴書の連絡先マスキング追加", cat:["shorui","dashin"], p:"書類のどこにマスキングがかかっているのかを理解する", id:"358919c9cfb6809593cecfd2ef0c830e"},
{i:21, t:"onb/1求職者あたり面接を3~5件設定の意義とやるべき理由・やり方マニュアル", star:1, cat:["teian","dashin","settei"], p:"面接を3~5件組むというレクリー内で最も大事な概念のうちの一つを理解する", id:"368919c9cfb6803da2d4ed0f9d4d9373"},
{i:22, t:"onb/打診ファースト・書類回収の考え方とスクリプト", star:1, cat:["shorui","mendan","dashin"], p:"書類回収を最短最速で行う概要とスクリプトを学習する", id:"35b919c9cfb68038b171edd957bd18e2"},
{i:23, t:"JKCP向け_求人検索ガイド_vf", cat:["mendan","teian","dashin"], p:"求人を探すときのスタンスと具体的な手段を学習する", id:"21d919c9cfb680648cd0d8d897691ce9"},
{i:24, t:"JKCP向け_レコメンド求人の使い方_vf", cat:["dashin","teian"], p:"レコメンド機能の使い方を認知する", id:"9e1ef07e5af041449c9d1c09433e4730"},
{i:25, t:"onb/企業管理_情報更新_求人作成/担当者連絡先/打診時のルール", cat:["dashin"], p:"企業管理内の情報更新を行う際の手順を理解する", id:"36b919c9cfb680818a7bce2e1ffd9872"},
{i:26, t:"JKCP_レコメンド検索方法と打診回収優先度を入れたマッチング登録手順", cat:["dashin","kaishu"], p:"レコメンド機能の正しい使い方を理解し、打診の効率とクオリティを担保する", id:"33e919c9cfb68026a056dad91bf2dc40"},
{i:27, t:"onb/マッチング管理一覧画面の解説と入力タイミング", cat:["dashin","teian","settei","closing","shodaku"], p:"マッチング一覧の中にあるフィールドの情報とその中身についての解説", id:"36a919c9cfb68069919deb6c1749cbc9"},
{i:28, t:"onb/打診ルールについて", star:1, cat:["dashin"], p:"打診時に気を付けることを理解し、失注リスクを減らす", id:"365919c9cfb6807ea029f2668f19928c"},
{i:29, t:"onb/だしんくんマニュアル（打診ツール）", cat:["dashin"], p:"打診の際に使うツールを理解する", id:"36b919c9cfb680f591cbc6387e95874f"},
{i:30, t:"onb/打診タイトルと推薦文の作成するときに意識すること", star:1, cat:["dashin"], p:"打診-打診◎を向上させ、求職者の選択肢を創る", id:"36a919c9cfb68056bde2e51c40679a7c"},
{i:31, t:"onb/gmailラベル分けのやり方の復習", cat:["dashin"], p:"打診をしたら必ずラベル分けをする", id:"365919c9cfb68051ae06c745331084db"},
{i:32, t:"onb/打診回収における企業架電ガイドライン", star:1, cat:["kaishu"], p:"打診回収の重要性の理解とやり方の認知", id:"368919c9cfb6804a94b8c60568dbedd3"},
{i:33, t:"JKCP_求人close/open対応とその後の確認対応マニュアル", cat:["kaishu","settei"], p:"打診時に企業から求人についてオーダーが来たときの対応方法", id:"306919c9cfb680d0813bcf8cd94b032b"},
{i:34, t:"企業からATS新規導入/ATS打診に切り替えてほしいと要望があったときの対応", cat:["kaishu"], p:"打診時に企業からATSへの切り替え依頼があったときの対応方法を認知する", id:"368919c9cfb6803d86aac1b0d5d767b3"},
{i:35, t:"契約書作成＆マネーフォワードクラウド契約マニュアル", cat:["kaishu","settei"], p:"口頭了解企業への契約対応を想定しスムーズにできる状態を創る", id:"36b919c9cfb6805d9b31cd14a8cc9dae"},
{i:36, t:"口頭了解企業から打診◎が出たときの対応マニュアル", cat:["kaishu"], p:"未契約企業とのやり取りについて理解する", id:"368919c9cfb680b2840fe7f175007a14"},
{i:37, t:"onb/日程調整マニュアル｜電話で最速最短で面接設定する", star:1, cat:["kaishu","teian","settei"], p:"最短最速で日程調整をする理由とやり方を学ぶ", id:"368919c9cfb680ec9bb3f88042fb125c"},
{i:38, t:"onb/求人提案ガイドライン及びマニュアル", star:1, cat:["teian"], p:"求人を提案するときのベースの流れを理解する", id:"368919c9cfb680ca8e85e9981923857e"},
{i:39, t:"JKCP向け_面談後提案メール自動作成フロー（2026/04/19更新版）", cat:["teian"], p:"提案後に提案メールを送付するときの流れを理解する（提案は必ず電話。メールはエビデンス送付がメイン）", id:"347919c9cfb680ad83aef9dffc3ce707"},
{i:40, t:"アウトソーシング企業／提案トークまとめ", cat:["teian"], p:"アウトソーシング企業とは何か、その本質を理解する", id:"353a6d229d244be9bfb7c52abea14732"},
{i:41, t:"onb/緩和とトレードオフについて～「何を得るために、何を緩和するか」を整理する～", cat:["teian","mensetsu","kaishu"], p:"トレードオフ（緩和）の基本的な流れを理解する", id:"368919c9cfb6807da892c579f3183dd9"},
{i:42, t:"onb/【マニュアル】メールフォルダの作成と自動仕分け設定（打診用）", cat:["dashin"], p:"", id:"2f6919c9cfb680eda9e5dcda097518b2"},
{i:43, t:"onb/面接設定時のkintone入力項目", cat:["settei"], p:"面接設定時のkintone項目を理解する", id:"368919c9cfb68078b6a5df98c1eeae8e"},
{i:44, t:"onb/面接設定後｜選考通過率を上げる企業対応マニュアル", star:1, cat:["mensetsu","settei"], p:"面接設定後にCPが何をすべきかを認識する", id:"36a919c9cfb6807c8700edc63d09d207"},
{i:45, t:"onb/面接前〜内定後｜企業への条件交渉マニュアル", star:1, cat:["mensetsu","closing"], p:"企業への条件交渉を必ず行う意味とやり方の認知", id:"36a919c9cfb6801fb11ef914c714385c"},
{i:46, t:"onb/求職者向け面接対策スクリプト", star:1, cat:["mensetsu"], p:"求職者との面接対策のイメージを付ける", id:"368919c9cfb6804ab836ed27c0a93246"},
{i:47, t:"onb/テストクロージングマニュアル～面接前-面接実施後の一連の流れ～", star:1, cat:["mensetsu","closing"], p:"求職者とのテストクロージングのイメージを付ける", id:"368919c9cfb680dfad5dc83982903691"},
{i:48, t:"onb/内定獲得後｜求職者クロージングマニュアル", star:1, cat:["closing"], p:"クロージングの流れとイメージを付ける", id:"36a919c9cfb68046aa27d265d8a1d0d3"},
{i:49, t:"内定承諾フォームマニュアル", cat:["shodaku","closing"], p:"内定承諾フォームの操作方法を理解する", id:"343919c9cfb680998cf8ddba81787453"},
{i:50, t:"onb/kintone「売上管理」作成マニュアル", cat:["shodaku"], p:"内定承諾〜計上までの流れを理解する", id:"36a919c9cfb68088b9bffb9d893dd72c"},
{i:51, t:"JKCP_見積・請求ルール（計上日）", cat:["shodaku"], p:"承諾後の見積もり・請求・入金までの流れを認知する", id:"36b919c9cfb680f79549f795785f683a"},
{i:52, t:"内定承諾後対応 CP業務マニュアル", star:1, cat:["shodaku"], p:"承諾して終わりでなく、その後の対応まで行う", id:"359919c9cfb680efac89e2be9bd3abeb"},
{i:53, t:"早期退職時の返金フロー", cat:["shodaku"], p:"入社後退職案件が出た場合の対応を認知する", id:"345919c9cfb680169db5ee2676e6db33"},
{i:54, t:"onb/建設・不動産業界オンボーディング動画リスト", cat:["general"], p:"建設・不動産業界における理解を深める", id:"2f6919c9cfb68072a0f1fade399a0bbc"},
{i:55, t:"賃貸仲介 オールワンズライフ（AOL）連携マニュアル", cat:["general"], p:"レクリーが提携する不動産会社さまのことを理解し転職支援に活かす", id:"359919c9cfb68032a5ffe2b66879a876"},
{i:56, t:"onb/期待価値の考え方と行動優先順位について", star:1, cat:["general"], p:"普段の行動の優先順位を考える際の基準を理解する", id:"36a919c9cfb680ea920edfa592c07624"},
];
const CAT_LABELS = {all:"すべて", general:"全般・基礎", approach:"架電・掘り起こし", mendan:"面談", shorui:"書類回収", dashin:"企業打診", kaishu:"打診回収", teian:"求人提案", settei:"面接設定", mensetsu:"面接対策・実施", closing:"内定獲得", shodaku:"内定承諾・計上"};

/* ================= 実務フロー11フェーズ（CP業務の全体像 準拠） ================= */
const PHASES = [
{ id:"f1", no:1, group:"📞 アプローチ", name:"架電", sub:"初回コンタクト",
  daiji:["冒頭でこちらから切ることはしない。必ず全てに切り返す","電話以外の手段は使わない。050だけでなく080も使う"],
  lt:[["新規リード","登録直後に即架電（数十分の遅れで期待価値が下がる）"]],
  mokuteki:"新規・掘り起こしリードに即架電し、通電→面談化させる。登録直後が最も通電率・面談化率が高い。コミュニケーションの基本は電話（LINE・メールはリマインドかエビデンスのみ）。",
  hitokoto:"「〇〇さんのお電話でお間違いないですか？△△（媒体）にご登録ありがとうございます、ジョブリー建設の□□です。ちょうど〇〇さんのご経歴に合う企業が出てきたので、30秒だけお時間ください」",
  checks:[
    "新規登録に即架電した（後回しにしていない）",
    "冒頭で自分から切らず、すべてのネガに切り返した（⑥切り返しトーク参照）",
    "050で不通なら080でもかけ直した。電話以外の手段だけで済ませていない",
    "掘り起こしは起点企業（アピールする企業）を準備してから架電した",
    "架電後のkintone処理（新規・掘り起こし）を正しく行った",
    "次回アポ（面談日時）をその場で切った。「また連絡します」で終わっていない",
  ],
  manuals:[14,13,15,16,8,7,12,10,9,0] },

{ id:"f2", no:2, group:"🗣️ 面談・提案", name:"面談", sub:"意欲確認・転職軸ヒアリング",
  daiji:["ただの条件ヒアリングにならないようにする","こちらが選択肢を狭める質問はしない"],
  lt:[["面談→次アクション","面談後は2営業日ごとにコンタクト（理想）"]],
  mokuteki:"転職理由・希望条件・現職の不満を深掘りし、ラポールを形成する。求職者自身も自己理解ができていないことが多いため、深掘りが信頼と後工程すべてのトーク素材になる。",
  hitokoto:"「今日は求人を売り込む場ではなく、〇〇さんが次の会社で後悔しないための条件を一緒に整理する場だと思ってください」",
  checks:[
    "希望条件か現職の不満を深掘りした（条件の羅列ヒアリングで終わっていない）",
    "現時点の選択肢（現職残留含む）・順位・その理由・変化要因とタイミングの4つを把握した",
    "転職理由・希望条件・選択肢の整合性をチェックした（後の緩和・クロージングに使う）",
    "選択肢を狭める質問をしていない",
    "面談シートに沿って必要項目のヒアリング漏れがない",
    "面談時のkintone更新を行った（第三者に伝わるレベル）",
    "次回アクションを明確化した：CPが何をいつまでにやるか＋求職者に何をいつまでに頼むか",
  ],
  manuals:[17,18,22,23,11,9] },

{ id:"f3", no:3, group:"📄 書類・打診", name:"書類回収", sub:"職務経歴書・履歴書",
  daiji:["書類を先方任せにせず、可能な限り全て代行する","万が一先方ボールになったら必ず期日を切る"],
  lt:[["面談→書類回収","2営業日以内に回収して打診（理想）"]],
  mokuteki:"打診の母数を作る最初の関門。書類が出ない＝打診ゼロ＝売上ゼロ。代行で最短最速を実現する。",
  hitokoto:"「書類はこちらで全部お作りします。〇〇さんは経歴を電話で話していただくだけで大丈夫です。今から10分もらえますか？」",
  checks:[
    "書類は基本すべて代行で作成した（持っていても、すぐ出なければ提出を待たない）",
    "先方ボールになった場合は必ず期日を切った",
    "履歴書・職務経歴書・工事経歴書のマスキング箇所を理解して処理した",
    "面談から2営業日以内に回収を完了した",
    "回収完了と同時に、当日打診の段取りを組んだ",
  ],
  manuals:[19,22,20] },

{ id:"f4", no:4, group:"📄 書類・打診", name:"企業打診", sub:"マッチング確認",
  daiji:["書類回収の当日に打診まで行うこと","初回で30打診は必ずすること"],
  lt:[["書類回収→打診","当日中"],["初回打診数","30社"]],
  mokuteki:"求職者の選択肢を創る。打診数と推薦文の質が打診◎率を決め、面接3〜5件設定の母数になる。",
  hitokoto:"（推薦文が企業への「一言目」。経歴の要約ではなく『この企業のこの課題に、この経験が効く』まで書く）",
  checks:[
    "書類回収の当日に打診まで行った",
    "初回で30打診した",
    "打診ルールを守った（失注リスクを減らす）",
    "打診タイトルと推薦文を求職者ごとに作り込んだ（打診-打診◎向上）",
    "レコメンド・だしんくん・企業管理を正しく使い、打診回収優先度を入れて登録した",
    "打診したら必ずGmailラベル分けをした",
    "1求職者あたり面接3〜5件設定から逆算した打診数になっている",
  ],
  manuals:[28,30,29,24,26,25,31,42,21,23,27] },

{ id:"f5", no:5, group:"📄 書類・打診", name:"打診回収", sub:"企業からの返答",
  daiji:["優先度の高い人は、打診→企業電話まで1営業日以上あけない"],
  lt:[["打診→回収電話","1営業日以内（優先度高）"],["毎朝","午前中に1.5hブロック"]],
  mokuteki:"企業から選考可否・面接候補日・懸念点を回収し、案件を前に進める。打診回収は面接設定数・実施数・売上に直結する最重要業務。",
  hitokoto:"「（企業へ）〇〇様は他社選考も並行しており動きが早い方です。本日中にご判断いただけると確実に面接までお連れできます。通過の場合、候補日も今いただけますか」",
  checks:[
    "午前中に打診回収の時間を1.5時間ブロックした",
    "優先度の高い求職者は、打診→企業電話まで1営業日以内に回収した",
    "選考可否・面接候補日・懸念点・追加確認事項をセットで回収した",
    "「確認します」で終わらせず、その場でカレンダーを見て面接日程を押さえるところまで行った",
    "打診結果（いつまでに何社・所感）を求職者に伝えた（コミットの可視化＋市場目線の共有→条件緩和に接続）",
    "口頭了解企業・未契約企業・ATS切り替え等のイレギュラー対応を正しく処理した",
  ],
  manuals:[32,37,26,33,34,36,35] },

{ id:"f6", no:6, group:"💬 提案・設定", name:"求人提案", sub:"面接意思獲得",
  daiji:["提案前に企業から日程を回収しておいて、設定までやり切る"],
  lt:[["提案→温度感回収","その場（1求人ごと）"]],
  mokuteki:"打診◎企業を求職者の転職理由・選択肢に接続して提案し、面接意思の獲得と日程確定までその場でやり切る。求人特徴の羅列はCPの付加価値ゼロ。",
  hitokoto:"「面談で〇〇さんが一番嫌だと仰っていた『□□』、これが構造的に起きない会社の書類が通過しました。△△社です。理由を30秒で話させてください」",
  checks:[
    "提案前に企業から面接日程候補を回収済みだった",
    "転職理由・選択肢との接続で提案した（『今ある選択肢の中でなぜこれが一番か』まで訴求）",
    "提案した求人の温度感をその場で回収した（1求人提案→直後に回収。数十求人なら提案し切ってから）",
    "内定承諾までいきそうな求人が出るまで提案件数を担保した",
    "懸念は面接前に両者へ先に伝え、切り返した上で設定を目指した（隠して進めない）",
    "提案は必ず電話で行った。メールはエビデンス送付のみ",
    "面接意思を獲得し、その場で設定までやり切った",
  ],
  manuals:[38,39,40,41,21,37,23,27] },

{ id:"f7", no:7, group:"💬 提案・設定", name:"面接設定", sub:"日程調整・確定",
  daiji:["このフェーズは本来なく、確認用","万が一あるとしたら必ずメール＋電話"],
  lt:[["残存設定","原則ゼロ（提案の場で完了）"]],
  mokuteki:"提案の場で設定まで完了しているのが正。残ってしまった調整は最速で確定させ、選考スピードを維持する。",
  hitokoto:"「最短だと△日の夕方が空いています。早く会うほど通過率が上がるので、ここで押さえましょう」",
  checks:[
    "提案の場で設定まで完了し、このフェーズに案件を残していない",
    "残った場合は必ずメール＋電話の両方で確定させた",
    "1求職者あたり3〜5件の面接設定を満たした",
    "面接設定時のkintone入力を行った",
    "アクティブ比率5:3:2（設定以上5割）を確認した",
  ],
  manuals:[37,43,21,27] },

{ id:"f8", no:8, group:"🎯 面接サポート", name:"面接対策", sub:"懸念解消・準備支援",
  daiji:["内定を取るための会話だけでなく、意向度を上げるための会話も行う"],
  lt:[["対策実施","面接前日まで"]],
  mokuteki:"【求職者】懸念解消と準備支援で通過率と意向度を同時に上げる。【企業】選考通過率を上げる事前共有と条件交渉の布石を打つ。",
  hitokoto:"「面接対策と一緒に、率直に今この会社に行きたい気持ちは10点満点で何点か聞かせてください。10点に足りない分を面接前に潰しましょう」",
  checks:[
    "内定を取る対策（想定質問・転職理由のポジティブ変換）を行った",
    "意向度を上げる会話（企業の魅力・キャリアの接続）も行った",
    "テストクロージング（面接前）を実施し、現在の選択肢と順位を再確認した",
    "企業へ選考通過率を上げる事前共有（魅力・懸念・確認ポイント）を行った",
    "条件交渉の布石（年収・条件の温度感）を企業に打った",
    "緩和とトレードオフ（何を得るために何を緩和するか）を整理した",
  ],
  manuals:[46,47,44,45,41] },

{ id:"f9", no:9, group:"🎯 面接サポート", name:"面接実施", sub:"当日・フィードバック",
  daiji:["必ず当日、最短最速でコミュニケーションをする"],
  lt:[["所感回収","面接当日（最短最速）"]],
  mokuteki:"面接を確実に実施させ、当日中に双方の所感を回収する。熱量の鮮度がそのまま通過率・意向度になる。",
  hitokoto:"「面接お疲れさまでした！率直に手応えは10点満点で何点ですか？10点に足りない分の中身を聞かせてください」",
  checks:[
    "前日リマインド＋当日朝の確認でドタキャンを防いだ",
    "面接当日に求職者の所感（手応え・志望度・懸念）を回収した",
    "面接当日に企業の評価・懸念も回収した",
    "懸念があれば当日中に巻き返しの申し送り（補足情報の共有）をした",
    "テストクロージング（面接後）で選択肢の順位変化を確認した",
    "次選考の日程をその場で押さえた",
  ],
  manuals:[47,44,41] },

{ id:"f10", no:10, group:"🏆 クロージング", name:"内定獲得", sub:"オファー条件確認",
  daiji:["当日に、必ず電話で伝える"],
  lt:[["内定連絡","当日・電話"]],
  mokuteki:"オファー条件を正確に確認し、企業への条件交渉（内定獲得・手数料UP・年収UP）と求職者クロージングを開始する。",
  hitokoto:"「おめでとうございます、内定です！条件を正確にお伝えしたいので、今5分だけお電話で話せますか？」",
  checks:[
    "内定は当日に必ず電話で伝えた",
    "オファー条件（年収・ポジション・入社日・回答期限）を正確に確認した",
    "企業への条件交渉（年収UP・手数料UP）を検討・実行した",
    "クロージングマニュアルの流れで意向度と懸念を確認した",
    "他社選考状況と選択肢の順位を最終確認し、意思決定の順番を設計した",
    "現職のカウンターオファー（引き止め）を事前に予告し、返し方まで決めた",
  ],
  manuals:[48,45,47,27] },

{ id:"f11", no:11, group:"🏆 クロージング", name:"内定承諾 🎉GOAL", sub:"承諾〜計上〜入社",
  daiji:["承諾の言質は電話で取る"],
  lt:[["承諾後フォロー","入社まで継続"]],
  mokuteki:"承諾の言質を電話で取り、計上処理を正確に行う。承諾して終わりではなく、入社までのフォローで入社前辞退を防ぐ。",
  hitokoto:"「承諾おめでとうございます！ここから入社までが一番辞退が起きやすい期間なので、退職交渉の進め方を今から一緒に決めましょう」",
  checks:[
    "承諾の言質を電話で取った",
    "内定承諾フォームを正しく操作した",
    "kintone「売上管理」を作成した",
    "見積・請求ルール（計上日）に沿って処理した",
    "承諾後対応（退職交渉サポート・入社までの定期接点）を開始した",
    "早期退職時の返金フローを認知している",
  ],
  manuals:[49,50,51,52,53,27] },
];

/* ================= アクティブ対応マスト9要点 ================= */
const MUSTS = [
{t:"希望条件か現職の不満の深掘り", b:"目的：①求職者自身も自己理解ができていないことが多く、理解を深めてもらう ②提案時にどの条件で探すかを把握する ③深く理解して信頼関係を築く ④クロージングや条件緩和など、随所で深掘りを元にトークへ繋げる。"},
{t:"選択肢の把握と「その中で一番」であること", b:"常に①現時点の選択肢（現職残留含む）②順位 ③順位の理由 ④変化要因とタイミング の4つを把握する。転職は希望条件を満たしたら動くのではなく、<b>今ある選択肢の中で一番のものが選ばれる</b>。だから「希望に合う」だけでは不十分で、「なぜ他の選択肢より優れているか」を訴求する。選択肢や順位が変化するタイミング（他社面接を受けた・現職に退職を伝えた等）で必ず再確認する。"},
{t:"転職理由・希望条件・選択肢の整合性チェック", b:"目的は希望条件の緩和とクロージング。例：転職理由が「人間関係」なのに他社を選ぶ理由が「給与」なら、「その会社の人間関係はどんな印象ですか？」と確認する。"},
{t:"提案した求人の温度感のその場回収", b:"結果回収を数日待たず、その場で回収し切る。求人が限られる場合は1求人提案→直後に回収。数十求人ある場合は提案し切ってから回収。一つ一つ確実にマルを取りに行く会話をする。"},
{t:"提案件数の担保", b:"その場で提案結果を回収し、<b>内定承諾までいきそうな提案求人が出るまで提案する</b>。"},
{t:"打診結果を求職者に伝える", b:"いつまでに何社へ打診し、どのような所感だったかを伝える。目的：①「これだけコミットしている」と伝えて信頼を獲得 ②所感が渋い場合は転職市場の目線を合わせ、希望条件緩和に繋げる。"},
{t:"懸念は面接前に両者へ伝えておく", b:"隠して提案・打診○を取っても、面接不合格・意向なしになれば双方にとって悪い体験。先に伝え、切り返せることは切り返した上で設定を目指す。※面接後に印象を良くしてから伝えれば気にならない懸念は例外あり。"},
{t:"リードタイム伝達とアクティブ比率5:3:2", b:"面接設定以上5割・打診3割・提案2割の状態を常に維持する。この状態＝書類回収LT・打診回収LT・面談の質が担保できている定義。リードタイムガイドラインの行動が定着しているか。"},
{t:"次回アクションの明確化＋電話3h以上", b:"①CP自身が何をいつまでにやるかをコミット ②求職者に何をいつまでに頼むかを要求。連絡がメール・LINEのみになっていないか。総通話時間は1日少なくとも3h以上。「提案」が企業情報を送るだけになっていないか（電話→メール、または電話中にメール）。"},
];

/* ================= スタンス ================= */
const STANCES = [
{t:"① 自らが主体性を持ち、変えられるコトにフォーカスせよ", items:[
  "常に“自分事”として咀嚼する：「誰かが悪い」ではなく「チームの成果のために自分は何ができるか？」へ転換。数字未達の原因分析を自己責任で行い、改善プランを自ら設計・遂行する",
  "主体的に即アクション：新規リードが不足しているなら既存リードを徹底的に掘り起こし。すぐコール・すぐフォロー、まずはアプローチ量を担保",
  "建設的なFBの活用：指摘されたら何をコントロールできるかを見極め、戦術の微調整ではなく行動そのものを最適化する"]},
{t:"② 量で攻め、質で撃ち抜け ― “AND”の覚悟", items:[
  "最初から質を追わない。これは自走（月々成果500万前後）になるまでのスタンス",
  "両面のパートナー職に唯一の正解はなく、市場変化も激しい。量をやりながら質を高める",
  "orで成果が出る人はいない。相反しそうな物事をandの精神でどちらも追う"]},
{t:"③ 我々CPの仕事は“マッチングする”こと", items:[
  "求職者サポートと同じかそれ以上に企業のマッチングが重要。「企業を理解した上で」「求職者の要望をマッチングできる」が仕事",
  "転職はbestではなく「選択肢の中で1番のもの」を選ぶ行為",
  "企業にお金をもらっているので企業が顧客。登録者も顧客。顧客が2ついるので両面に拘る",
  "成果が出る人の特徴：「特定の企業理解が進み、熱い企業を自身で持っているCP」"]},
{t:"④ 行動をし、内省と相談により経験につなげよう", items:[
  "CPはマルチタスクの権化。体験数は質より量。ただし内省と即時相談で経験に変換する",
  "コミュニケーションの基本は電話。LINE・メールはリマインドかエビデンスのみ。質問には使わない",
  "オンボ期間は初見だからこそ分かる悪しき習慣を指摘するチャンス。意見をたくさん出す"]},
{t:"⑤ 夢中を超え、没頭せよ", items:[
  "「楽しい」だけが没頭ではない。「しんどいけど無我夢中」「成果のためだけに集中」の先に没頭の楽しさがある",
  "入社時に思っていたwillに没頭する"]},
];

/* ================= 切り返しトーク ================= */
const TALKS = [
{ word:"「施工管理って何？」", intent:"仕事がイメージできない／3K・肉体労働の先入観／業務内容・評価軸が不明",
  view:"『説明』ではなく『誤解の解体』。本人が持つ古いイメージとの差分だけを話し、本人の経験と接続する。",
  pats:[
    {k:"A", t:"「一言で言うと、現場の監督・段取り役です。職人さんのように体を動かすのではなく、工程・品質・安全・お金を管理する仕事。評価も『体力』ではなく『段取り力』で決まります」", from:"new"},
    {k:"B", t:"「資格を取るごとに年収が段階的に上がる、建設業界で一番キャリアの階段が明確な職種です。有効求人倍率17倍、市場で一番求められている仕事です」", from:"new"},
    {k:"C", t:"「〇〇さんが今されている△△（接客・リーダー経験など）の『人と段取りを回す力』を、そのまま使う仕事です」", from:"new"},
  ]},
{ word:"「間違って登録をしました」", intent:"体良く電話を切りたい／本当に誤登録／登録した記憶が薄い",
  view:"『間違い』を事実として受け取らない。登録という行動が発生した以上、何かしらの関心が一瞬でもあった。",
  pats:[
    {k:"A", t:"「そうでしたか、お電話に出てくださってありがとうございます。ちなみに、何と間違われたんですか？」", from:"sheet"},
    {k:"B", t:"「間違いでも、せっかくのご縁なので30秒だけ。今のお仕事、本当に何も困っていることはないですか？」", from:"new"},
    {k:"C", t:"「では登録は消しておきますね。…その前に1つだけ。〇〇さんのご経歴だと年収△△万円の求人が出ているんですが、これも見ずに消して大丈夫ですか？」", from:"new"},
  ]},
{ word:"「あ、今はいいです」", intent:"優先度が低い／警戒している／タイミングが悪いだけ",
  view:"『今は』＝『条件が変われば話せる』。断り文句の中の時間表現を拾う。",
  pats:[
    {k:"A", t:"「ありがとうございます！今日は何時にお仕事が終わりますか？」", from:"sheet"},
    {k:"B", t:"「あしらわないでくださいよ〜！いつならいいですか？」", from:"sheet"},
    {k:"C", t:"「人生変わるので、30秒だけもらいますね！」", from:"sheet"},
  ]},
{ word:"「今忙しい」", intent:"本当に忙しい（現場中）／話す価値を感じていない",
  view:"建設業の方は日中ほぼ現場。「忙しい」は事実であることが多い。時間帯の選択肢を渡すのが誠実な切り返し。",
  pats:[
    {k:"A", t:"「忙しいなんて優秀な証拠ですね。15分だけ時間をもらえたら、必ず『ちょっといいな』という企業を持ってくるので時間をもらいますね！例えば〇〇なんですが——」", from:"sheet"},
    {k:"B", t:"「シゴデキの印ですね。僕、夜遅くまで対応できるんですが、今日だと何時なら話せますか？」", from:"sheet"},
    {k:"C", t:"「僕も正直忙しいんですが、〇〇さんにどうしても伝えたいことがあるので時間を捧げます」", from:"sheet"},
  ]},
{ word:"「他のエージェント使ってます」", intent:"既に信頼している担当がいる／比較が面倒／断り文句",
  view:"複数利用は当たり前の市場。敵対せず『2社目の価値』＝独自求人とヒアリング品質で勝負する。",
  pats:[
    {k:"A", t:"「さすがですね、複数使うのが当たり前なので、弊社のヒアリングレベルと求人を見てから判断いただけますか。弊社にしか出せない求人、必ずご紹介します！」", from:"sheet"},
    {k:"B", t:"「どのエージェントも出してこない企業を提案できるので、書類だけいただけませんか？」", from:"sheet"},
    {k:"C", t:"「では、もう〇〇社のご紹介はありましたか？△△さんにぴったりなので、ぜひご紹介したくて」", from:"sheet"},
  ]},
{ word:"「もう（転職先）決まってます」", intent:"本当に決定済み／検討中を『決定』と言っている／断り文句",
  view:"『決まった』の解像度を確認する。承諾書提出前なら、比較材料の提供はむしろ本人の利益になる。",
  pats:[
    {k:"A", t:"「弊社から以前ご紹介した企業様ですよね？——あ、違いましたか。ちなみにこの会社、年収〇〇万円くらい出ますが、決まった企業より条件は良いですか？」", from:"sheet"},
    {k:"B", t:"「おめでとうございます！ちなみに承諾のサインはもうされましたか？まだなら、比較材料が1社あるだけで条件交渉に使えますよ」", from:"new"},
    {k:"C", t:"「決め手だけ教えてください。それを上回る求人が出たときだけご連絡します」", from:"new"},
  ]},
{ word:"「なんとなく登録しました」", intent:"潜在的な不満はあるが言語化できていない／動く理由がまだない",
  view:"『なんとなく』は最高の入口。不満が言語化されていないだけで、登録という行動には必ず引き金がある。",
  pats:[
    {k:"A", t:"「ありがとうございます！なんとなくのご登録のあとは、僕がヒアリングして企業選定から情報提供、時期の調整までやるのでお任せください。ちなみに、年収と休日ならどちらが転職の軸として優先ですか？」", from:"sheet"},
    {k:"B", t:"「その『なんとなく』、引き金は何でしたか？給料明細を見たとき？休みの日？そこに本音があります」", from:"new"},
    {k:"C", t:"「おめでとうございます。そのなんとなくが勝利への道しるべでした。とっておきの求人があります！」", from:"sheet"},
  ]},
{ word:"「今すぐ考えてませんので結構です」", intent:"時期が先／考えるのが面倒／情報だけ欲しい",
  view:"『今すぐではない』＝『いつかは考える』。時期を本人に決めさせず、軸の整理だけ先に終わらせる。",
  pats:[
    {k:"A", t:"「ありがとうございます！今後考えるにあたって、暫定で年収と休日ならどちらが優先ですか？」", from:"sheet"},
    {k:"B", t:"「今お電話したばかりなので、今から考えましょう！」", from:"sheet"},
    {k:"C", t:"「〇〇さんは考えなくて大丈夫です！僕が考えるので任せてください！」", from:"sheet"},
  ]},
{ word:"「あー…（面倒くさそうに）大丈夫です」", intent:"警戒・面倒・興味なしが混在。『大丈夫』の中身が不明",
  view:"曖昧な『大丈夫』を確定させない。意味を聞き返すだけで会話が1往復延びる。",
  pats:[
    {k:"A", t:"「ありがとうございます！では10分ぐらい面談させていただきますね！」", from:"sheet"},
    {k:"B", t:"「どんな『大丈夫』の意味合いでしょうか？」", from:"sheet"},
    {k:"C", t:"「大丈夫とのことなので、逆に1つだけ。今の年収があと50万円上がるとしたら、話だけ聞きます？」", from:"new"},
  ]},
{ word:"「（登録を）覚えていないです」", intent:"本当に忘れている／警戒して惚けている",
  view:"事実（登録日・媒体）を淡々と示すと警戒が解ける。責める空気を出さないこと。",
  pats:[
    {k:"A", t:"「そうでしたか。では改めてお伝えしますね。弊社は建設業界専門で転職のご支援をしておりまして、〇〇さんの条件に合う企業がちょうど出てきたのでご連絡しました」", from:"sheet"},
    {k:"B", t:"「〇月〇日に△△（媒体）からご登録いただいていますよ。そのとき希望条件に□□と入れていただいてます」", from:"new"},
    {k:"C", t:"「忘れるくらい忙しいなら、なおさら一度働き方を見直すタイミングかもしれません」", from:"new"},
  ]},
{ word:"「情報を見ているだけでサポートは不要です」", intent:"自分のペースで進めたい／エージェントへの不信感",
  view:"『見ている』＝関心はある。サポートを売らず、『一緒に見る』に切り替えて情報の非対称性で価値を示す。",
  pats:[
    {k:"A", t:"「では僕と一緒に情報を見ましょう。この企業、〇〇と〇〇でかなり市場優位性が高い求人なんですが、何が良いと感じます？」", from:"sheet"},
    {k:"B", t:"「僕も転職のとき同じことを言ってたんですが、自分でやると結局見ないんですよ！」", from:"sheet"},
    {k:"C", t:"「ありがとうございます！ただ、見ているということは、何かを求めていたりしませんか？」", from:"sheet"},
  ]},
];

/* ================= KPI診断 ================= */
const DIAG = [
  {kpi:"承諾率が低い", target:"内定獲得・内定承諾フェーズ", note:"他社比較・条件懸念・カウンターオファーを握れているか。承諾言質は電話か", phase:"f10"},
  {kpi:"設定率が低い", target:"求人提案フェーズ", note:"提案前に日程回収済みか／企業説明で終わっていないか／その場で温度感回収しているか", phase:"f6"},
  {kpi:"打診◎率が低い", target:"企業打診フェーズ", note:"初回30打診できているか／推薦文がテンプレになっていないか", phase:"f4"},
  {kpi:"打診回収が遅い", target:"打診回収フェーズ", note:"午前1.5hブロックしているか／優先案件は1営業日以内に電話しているか", phase:"f5"},
  {kpi:"書類回収が遅い", target:"書類回収フェーズ", note:"代行で作っているか／先方ボールに期日を切っているか（面談から2営業日）", phase:"f3"},
  {kpi:"面談化率が低い", target:"架電フェーズ", note:"即架電できているか／冒頭で切られていないか／080も使っているか", phase:"f1"},
  {kpi:"通過率が低い", target:"面接対策・実施フェーズ", note:"事前共有・面接対策・当日の所感回収と巻き返しができているか", phase:"f8"},
];

/* ================= KPI 計算（指定実績値） ================= */
const HEAD = { settei:35, naitei:41, shodaku:85 };
const SUBA = [
  {id:"teian",  name:"有効面談 → 提案",   sub:"打診◎企業を提示", rate:80, label:"有効面談-提案人数率"},
  {id:"teianM", name:"提案 → 提案〇",     sub:"面接意思の獲得",   rate:70, label:"提案人数-提案〇人数率"},
  {id:"dashin", name:"提案〇 → 打診",     sub:"企業への推薦・調整", rate:97, label:"提案〇人数-打診人数率"},
  {id:"dashinM",name:"打診 → 打診〇",     sub:"書類通過・設定可能", rate:75, label:"打診人数-打診〇人数率"},
];
const SUBB = [
  {id:"ichiji", name:"一次面接 合格", rate:75, label:"一次面接合格人数率"},
  {id:"niji",   name:"二次面接 合格", rate:80, label:"二次面接合格人数率"},
];
function fmt(n){ return n>=100? Math.ceil(n).toLocaleString() : (Math.ceil(n*10)/10).toLocaleString(); }
function pct(n){ return (Math.round(n*10)/10).toLocaleString(); }
function renderKPI(){
  const kettei = +document.getElementById('g-kettei').value || 5;
  const tanka  = +document.getElementById('g-tanka').value || 200;
  document.getElementById('g-rev').textContent = (kettei*tanka).toLocaleString() + '万円';
  const naiteiN = kettei / (HEAD.shodaku/100);
  const setteiN = naiteiN / (HEAD.naitei/100);
  const yukoN   = setteiN / (HEAD.settei/100);
  document.getElementById('h-kettei-rate').textContent = pct((HEAD.settei/100)*(HEAD.naitei/100)*(HEAD.shodaku/100)*100) + '%';
  const stages = [
    {name:"有効面談", sub:"理由・軸・選択肢を確認", num:yukoN, rate:HEAD.settei, rl:"面接設定率", key:"settei"},
    {name:"一次面接設定", sub:"日程確定", num:setteiN, rate:HEAD.naitei, rl:"内定取得率", key:"naitei"},
    {name:"内定取得", sub:"オファー獲得", num:naiteiN, rate:HEAD.shodaku, rl:"内定承諾率", key:"shodaku"},
    {name:"決定", sub:"内定承諾＝売上計上", num:kettei, rate:null, rl:"", goal:true},
  ];
  const wrap = document.getElementById('funnel');
  wrap.querySelectorAll('.f-row:not(.head)').forEach(e=>e.remove());
  const max = yukoN;
  stages.forEach(st=>{
    const row = document.createElement('div');
    row.className = 'f-row' + (st.goal?' goal':'');
    const w = Math.max(3, Math.sqrt(st.num/max)*100);
    row.innerHTML = `
      <div class="f-name">${st.name}<small>${st.sub}</small></div>
      <div class="f-bar-wrap"><div class="f-bar" style="width:${w}%"></div></div>
      <div class="f-rate">${st.rate!==null?`<input type="number" data-key="${st.key}" value="${st.rate}" min="1" max="100" step="1"><small>% ${st.rl}</small>`:''}</div>
      <div class="f-num">${fmt(st.num)}<small>件/月</small></div>`;
    wrap.appendChild(row);
  });
  wrap.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('change', e=>{ HEAD[e.target.dataset.key] = +e.target.value || 1; renderKPI(); });
  });
  const subAWrap = document.getElementById('subA');
  subAWrap.innerHTML = '';
  let cur = yukoN, prodA = 1;
  SUBA.forEach(s=>{
    cur *= s.rate/100; prodA *= s.rate/100;
    const row = document.createElement('div');
    row.className = 'sf-row';
    row.innerHTML = `
      <div class="sf-name">${s.name}<small>${s.label}</small></div>
      <div class="sf-rate"><input type="number" data-id="${s.id}" value="${s.rate}" min="1" max="100" step="1"><small style="font-size:9.5px;color:var(--ink-soft)"> %</small></div>
      <div class="sf-num">${fmt(cur)}<small style="display:block;font-size:9.5px;color:var(--ink-soft);font-family:'Noto Sans JP'">件/月</small></div>`;
    subAWrap.appendChild(row);
  });
  subAWrap.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('change', e=>{ SUBA.find(x=>x.id===e.target.dataset.id).rate = +e.target.value || 1; renderKPI(); });
  });
  const theoA = prodA*100, gapA = theoA - HEAD.settei;
  document.getElementById('reconA').innerHTML =
    `工程内訳の理論設定率：<b>${pct(theoA)}%</b> ／ 実績設定率：<b>${HEAD.settei}%</b> → 差分 <span class="${gapA>2?'gap-bad':'gap-ok'}">${gapA>0?'-':'+'}${pct(Math.abs(gapA))}pt</span>${gapA>2?'（工程のどこかで取りこぼしあり。最も低い率の工程から潰す）':'（内訳と実績がほぼ一致）'}`;
  const subBWrap = document.getElementById('subB');
  subBWrap.innerHTML = '';
  let curB = setteiN, prodB = 1;
  SUBB.forEach(s=>{
    curB *= s.rate/100; prodB *= s.rate/100;
    const row = document.createElement('div');
    row.className = 'sf-row';
    row.innerHTML = `
      <div class="sf-name">${s.name}<small>${s.label}</small></div>
      <div class="sf-rate"><input type="number" data-id="${s.id}" value="${s.rate}" min="1" max="100" step="1"><small style="font-size:9.5px;color:var(--ink-soft)"> %</small></div>
      <div class="sf-num">${fmt(curB)}<small style="display:block;font-size:9.5px;color:var(--ink-soft);font-family:'Noto Sans JP'">件/月</small></div>`;
    subBWrap.appendChild(row);
  });
  subBWrap.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('change', e=>{ SUBB.find(x=>x.id===e.target.dataset.id).rate = +e.target.value || 1; renderKPI(); });
  });
  const finalRate = (HEAD.naitei/100) / prodB * 100;
  document.getElementById('reconB').innerHTML =
    `一次75% × 二次80% で残るのは設定の<b>${pct(prodB*100)}%</b>。内定取得率<b>${HEAD.naitei}%</b>から逆算すると、最終面接の合格率は約<b>${pct(finalRate)}%</b>が必要。面接対策・所感回収・企業への巻き返しが勝負どころ。`;
  document.getElementById('d-yuko').textContent   = fmt(yukoN/4.3) + ' 件';
  document.getElementById('d-settei').textContent = fmt(setteiN/4.3) + ' 件';
  document.getElementById('d-naitei').textContent = fmt(naiteiN) + ' 件';
}

/* ================= フェーズ描画 ================= */
const state = { ratings:{} };
const RATE_LABELS = [["3","完璧"],["2","ほぼできてる"],["1","少しできてる"],["0","できてない"]];
const RATE_SCORE = {3:1, 2:0.7, 1:0.3, 0:0};
function manualLinks(idx){
  return idx.map(i=>{
    const m = MANUALS[i];
    return `<li><a href="${NOTION(m.id)}" target="_blank" rel="noopener">
      <span class="ic">📘</span>
      <span><span class="mt">${m.star?'<span class="star">★</span>':''}${m.t}</span>
      ${m.p?`<span class="mp">${m.p}</span>`:''}</span></a></li>`;
  }).join('');
}
function renderPhases(){
  const wrap = document.getElementById('phases');
  const strip = document.getElementById('flow-strip');
  let lastGroup = null;
  PHASES.forEach((p,idx)=>{
    if(idx>0){ const a=document.createElement('span'); a.className='flow-arrow'; a.textContent='▶'; strip.appendChild(a); }
    const chip = document.createElement('button');
    chip.className='flow-chip'; chip.textContent=p.no+'. '+p.name.replace(' 🎉GOAL','');
    chip.addEventListener('click',()=>openPhase(p.id));
    strip.appendChild(chip);
    if(p.group !== lastGroup){
      const g = document.createElement('div'); g.className='ph-group'; g.textContent = p.group;
      wrap.appendChild(g); lastGroup = p.group;
    }
    const el = document.createElement('div');
    el.className = 'phase'; el.id = p.id;
    const checksHtml = p.checks.map(c=>`<li><label><input type="checkbox"><span>${c}</span></label></li>`).join('');
    const daijiHtml = p.daiji.map(d=>`<li>${d}</li>`).join('');
    const ltHtml = p.lt.map(l=>`<span class="lt-badge">${l[0]}<span>${l[1]}</span></span>`).join('');
    const rateHtml = RATE_LABELS.map(([v,l])=>`<button data-p="${p.id}" data-v="${v}">${l}</button>`).join('');
    el.innerHTML = `
      <button class="p-head" aria-expanded="false">
        <span class="p-no mono">${String(p.no).padStart(2,'0')}</span>
        <span class="p-name">${p.name}<small>${p.sub}</small></span>
        <span class="p-score" id="ps-${p.id}">未評価</span>
        <span class="p-arrow">▶</span>
      </button>
      <div class="p-body">
        <div class="daiji"><div class="dj-label">大事なこと（CP業務の全体像 原文）</div><ul>${daijiHtml}</ul></div>
        <div>${ltHtml}</div>
        <div class="blk"><div class="blk-label">目的</div><p>${p.mokuteki}</p></div>
        <div class="blk"><div class="blk-label talk">一言目（このフェーズの口火）</div><div class="talkbox">${p.hitokoto}</div></div>
        <div class="blk"><div class="blk-label">チェックリスト</div><ul class="chk">${checksHtml}</ul></div>
        <div class="blk"><div class="blk-label man">関連マニュアル（タップでNotionが開く）</div><ul class="man-list">${manualLinks(p.manuals)}</ul></div>
        <div class="blk"><div class="blk-label">自己評価（このフェーズ、今の自分は？）</div><div class="rate">${rateHtml}</div></div>
      </div>`;
    wrap.appendChild(el);
  });
  wrap.addEventListener('click', e=>{
    const head = e.target.closest('.p-head');
    if(head){ const ph = head.parentElement; ph.classList.toggle('open');
      head.setAttribute('aria-expanded', ph.classList.contains('open')); return; }
    const rbtn = e.target.closest('.rate button');
    if(rbtn){
      const pid = rbtn.dataset.p, v = rbtn.dataset.v;
      state.ratings[pid] = +v;
      rbtn.parentElement.querySelectorAll('button').forEach(b=>b.className='');
      rbtn.className = 'sel-'+v;
      document.getElementById('ps-'+pid).textContent = RATE_LABELS.find(r=>r[0]===v)[1];
      renderSummary();
    }
  });
  wrap.addEventListener('change', e=>{
    if(e.target.type==='checkbox'){ e.target.closest('label').classList.toggle('done', e.target.checked); }
  });
}
function openPhase(pid){
  switchTab('phase');
  const el = document.getElementById(pid);
  document.querySelectorAll('.phase').forEach(x=>{ if(x!==el) x.classList.remove('open'); });
  el.classList.add('open');
  el.querySelector('.p-head').setAttribute('aria-expanded','true');
  setTimeout(()=>{ el.scrollIntoView({behavior:'smooth', block:'start'}); }, 60);
}

/* ================= マスト要点 ================= */
function renderMusts(){
  const wrap = document.getElementById('must-list');
  MUSTS.forEach((m,i)=>{
    const el = document.createElement('div');
    el.className = 'must-card';
    el.innerHTML = `
      <button class="must-head" aria-expanded="false">
        <span class="mn">${String(i+1).padStart(2,'0')}</span>
        <span class="mt2">${m.t}</span>
        <span class="p-arrow">▶</span>
      </button>
      <div class="must-body"><p>${m.b}</p></div>`;
    wrap.appendChild(el);
  });
  wrap.addEventListener('click', e=>{
    const h = e.target.closest('.must-head');
    if(h){ const c = h.parentElement; c.classList.toggle('open'); h.setAttribute('aria-expanded', c.classList.contains('open')); }
  });
}

/* ================= スタンス ================= */
function renderStances(){
  const wrap = document.getElementById('stances');
  STANCES.forEach(s=>{
    const el = document.createElement('div');
    el.className = 'stance';
    el.innerHTML = `
      <button class="st-head" aria-expanded="false"><span class="t-word">${s.t}</span><span class="p-arrow">▶</span></button>
      <div class="st-body"><ul>${s.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
    wrap.appendChild(el);
  });
  wrap.addEventListener('click', e=>{
    const h = e.target.closest('.st-head');
    if(h){ const c = h.parentElement; c.classList.toggle('open'); h.setAttribute('aria-expanded', c.classList.contains('open')); }
  });
}

/* ================= 切り返し ================= */
function renderTalks(){
  const wrap = document.getElementById('talks');
  TALKS.forEach(t=>{
    const el = document.createElement('div');
    el.className = 'talk-card';
    const pats = t.pats.map(p=>`
      <div class="pat ${p.from==='new'?'new':''}">
        <span class="tag">${p.k}${p.from==='new'?'+':''}</span><span>${p.t}</span>
      </div>`).join('');
    el.innerHTML = `
      <button class="t-head" aria-expanded="false"><span class="t-word">${t.word}</span><span class="p-arrow">▶</span></button>
      <div class="t-body">
        <div class="t-ng"><b>NG：</b>「そうですか、わかりました」と冒頭でこちらから切ること。必ず全てに切り返す。</div>
        <div class="t-meta"><b>相手の心理（意図）</b>${t.intent}</div>
        <div class="t-meta"><b>持つべき視点</b>${t.view}</div>
        ${pats}
      </div>`;
    wrap.appendChild(el);
  });
  wrap.addEventListener('click', e=>{
    const h = e.target.closest('.t-head');
    if(h){ const c = h.parentElement; c.classList.toggle('open'); h.setAttribute('aria-expanded', c.classList.contains('open')); }
  });
}

/* ================= マニュアルライブラリ ================= */
let libCat = 'all';
function renderLibFilter(){
  const wrap = document.getElementById('man-filter');
  Object.entries(CAT_LABELS).forEach(([k,label])=>{
    const b = document.createElement('button');
    b.textContent = label; b.dataset.cat = k;
    if(k==='all') b.classList.add('on');
    b.addEventListener('click', ()=>{
      libCat = k;
      wrap.querySelectorAll('button').forEach(x=>x.classList.toggle('on', x.dataset.cat===k));
      renderLib();
    });
    wrap.appendChild(b);
  });
  document.getElementById('man-search').addEventListener('input', renderLib);
}
function renderLib(){
  const q = document.getElementById('man-search').value.trim().toLowerCase();
  const wrap = document.getElementById('lib-list');
  wrap.innerHTML = '';
  let shown = 0;
  MANUALS.forEach(m=>{
    if(libCat!=='all' && !m.cat.includes(libCat)) return;
    if(q && !(m.t.toLowerCase().includes(q) || (m.p||'').toLowerCase().includes(q))) return;
    shown++;
    const a = document.createElement('a');
    a.className = 'lib-item'; a.href = NOTION(m.id); a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `
      <div class="lib-title">${m.star?'<span class="star">★ </span>':''}${m.t}</div>
      ${m.p?`<div class="lib-purpose">${m.p}</div>`:''}
      <div class="lib-tags">${m.cat.map(c=>`<span class="lib-tag">${CAT_LABELS[c]}</span>`).join('')}</div>`;
    wrap.appendChild(a);
  });
  document.getElementById('lib-count').textContent = `${shown}件 / 全${MANUALS.length}件`;
}

/* ================= 診断 ================= */
function renderDiag(){
  const wrap = document.getElementById('diag-rows');
  DIAG.forEach(d=>{
    const row = document.createElement('div');
    row.className = 'diag-row';
    row.innerHTML = `
      <span class="diag-kpi">${d.kpi}</span><span class="arrow">→</span>
      <span class="diag-target"><b>${d.target}</b>を確認<small>${d.note}</small></span>`;
    row.addEventListener('click', ()=>openPhase(d.phase));
    wrap.appendChild(row);
  });
}

/* ================= サマリー ================= */
function renderSummary(){
  const card = document.getElementById('sum-card');
  if(!Object.keys(state.ratings).length) return;
  let html = '', total=0, count=0, worst=null;
  PHASES.forEach(p=>{
    if(state.ratings[p.id]===undefined) return;
    const sc = RATE_SCORE[state.ratings[p.id]];
    total += sc; count++;
    const pv = Math.round(sc*100);
    const cls = pv<40?'low':pv<80?'mid':'';
    if(worst===null || sc < worst.sc) worst = {p, sc};
    html += `<div class="sum-row"><div class="sum-name">${p.name.replace(' 🎉GOAL','')}</div>
      <div class="sum-bar-wrap"><div class="sum-bar ${cls}" style="width:${pv}%"></div></div>
      <div class="sum-pct mono">${pv}%</div></div>`;
  });
  const avg = Math.round(total/count*100);
  html = `<div class="sum-row" style="margin-bottom:14px"><div class="sum-name" style="font-size:15px">総合スコア</div>
    <div class="sum-bar-wrap" style="height:20px"><div class="sum-bar" style="width:${avg}%;background:var(--orange)"></div></div>
    <div class="sum-pct mono" style="font-size:18px">${avg}%</div></div>` + html
    + `<p style="font-size:12px;color:var(--ink-soft);margin-top:8px">評価済み ${count}/${PHASES.length} フェーズ</p>`;
  card.innerHTML = html;
  const wk = document.getElementById('weakest');
  if(worst && worst.sc < 1){
    wk.style.display='block';
    wk.innerHTML = `<b>今週の重点フェーズ：${worst.p.name.replace(' 🎉GOAL','')}</b>（${Math.round(worst.sc*100)}%）<br>改善アクションは<b>1つに絞る</b>。このフェーズのチェックリストと関連マニュアルを開き、アクサポ・1on1でレビューする。`;
  } else { wk.style.display='none'; }
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('copy-btn').addEventListener('click', ()=>{
    const lines = ['【CP自己評価】' + new Date().toLocaleDateString('ja-JP')];
    let total=0, count=0;
    PHASES.forEach(p=>{
      const r = state.ratings[p.id];
      const nm = p.name.replace(' 🎉GOAL','');
      if(r===undefined){ lines.push(`・${nm}：未評価`); return; }
      const label = RATE_LABELS.find(x=>+x[0]===r)[1];
      const sc = RATE_SCORE[r]; total+=sc; count++;
      lines.push(`・${nm}：${label}（${Math.round(sc*100)}%）`);
    });
    if(count) lines.push(`総合：${Math.round(total/count*100)}%（${count}/${PHASES.length}フェーズ評価済）`);
    navigator.clipboard.writeText(lines.join('\n')).then(()=>{
      const b = document.getElementById('copy-btn');
      b.textContent = 'コピーしました ✓';
      setTimeout(()=>b.textContent='評価結果をテキストでコピー（Slack/シート貼り付け用）', 1800);
    });
  });
  document.getElementById('g-kettei').addEventListener('change', renderKPI);
  document.getElementById('g-tanka').addEventListener('change', renderKPI);
  document.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click', ()=>{ switchTab(t.dataset.panel); window.scrollTo({top:0}); });
  });
  renderKPI(); renderPhases(); renderMusts(); renderStances(); renderTalks(); renderLibFilter(); renderLib(); renderDiag();
});
function switchTab(key){
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active', x.dataset.panel===key));
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  document.getElementById('panel-'+key).classList.add('active');
}
