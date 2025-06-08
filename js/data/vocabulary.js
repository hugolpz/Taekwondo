var dictionary = [
  // General components
  {tag: "components", kor: "태권도", phon: "taekwondo", phonfra: undefined, cmn: "跆拳道", eng: "Taekwondo", fra: "Taekwondo", example: undefined},
  {tag: "components", kor: "태", phon: "tae", phonfra: undefined, cmn: "踢", eng: "Foot kick", fra: "frapper du pied", example: undefined},
  {tag: "components", kor: "권", phon: "kwon", phonfra: undefined, cmn: "拳", eng: "Hand strike", fra: "frapper du poing", example: undefined},
  {tag: "components", kor: "도", phon: "do", phonfra: undefined, cmn: "道", eng: "Method / Way", fra: "méthode, art de vivre, voie spirituelle", example: undefined},

  // Lexical components
  {tag: "components", kor: "앞", phon: "ap", phonfra: undefined, cmn: "前", eng: "Front", fra: undefined, example: "As in 앞차기 (ap chagi, front kick)"},
  {tag: "components", kor: "뒤", phon: "dwi", phonfra: undefined, cmn: "后", eng: "Back", fra: undefined, example: "As in 뒤차기 (dwi chagi, back kick)"},
  {tag: "components", kor: "왼", phon: "oen", phonfra: undefined, cmn: "左", eng: "Left", fra: undefined, example: "Directional, not always used in move names"},
  {tag: "components", kor: "오른", phon: "oreun", phonfra: undefined, cmn: "右", eng: "Right", fra: undefined, example: ""},
  {tag: "components", kor: "옆", phon: "yeop", phonfra: undefined, cmn: "侧 / 旁", eng: "Side", fra: undefined, example: "As in 옆차기 (yeop chagi, side kick)"},
  {tag: "components", kor: "위", phon: "wi", phonfra: undefined, cmn: "上", eng: "Up", fra: undefined, example: "Often used in context like 올려막기 (upward block)"},
  {tag: "components", kor: "몸통 / 중간", phon: "momtong / junggan", phonfra: undefined, cmn: "中", eng: "Middle", fra: undefined, example: "As in 몸통막기 (momtong makgi, middle block)"},
  {tag: "components", kor: "아래", phon: "arae", phonfra: undefined, cmn: "下", eng: "Down", fra: undefined, example: "As in 아래막기 (arae makgi, low block)"},
  {tag: "components", kor: "얼굴", phon: "eolgul", phonfra: undefined, cmn: "高 / 面部", eng: "High", fra: undefined, example: "As in 얼굴막기 (face/high block)"},
  {tag: "components", kor: "아래", phon: "arae", phonfra: undefined, cmn: "下", eng: "Low", fra: undefined, example: ""},
  {tag: "components", kor: "차기", phon: "chagi", phonfra: undefined, cmn: "踢 / 踢腿", eng: "Kick", fra: undefined, example: "Derived from 차다 (chada, to kick)"},
  {tag: "components", kor: "막기", phon: "makgi", phonfra: undefined, cmn: "防御 / 拦挡", eng: "Block", fra: undefined, example: "From 막다 (makda, to block)"},
  {tag: "components", kor: "치기", phon: "chigi", phonfra: undefined, cmn: "打击 / 击打", eng: "Strike / Hit", fra: undefined, example: "From 치다 (chida, to hit)"},
  {tag: "components", kor: "서기 / 자세", phon: "seogi / jase", phonfra: undefined, cmn: "步法 / 姿势", eng: "Stance", fra: undefined, example: "서기 = \"standing\", 자세 = \"posture\""},

  {tag: "components", kor: "손", phon: "son", phonfra: undefined, cmn: "手", eng: "Hand", fra: undefined, example: "As in 손날 (knifehand)"},
  {tag: "components", kor: "발", phon: "bal", phonfra: undefined, cmn: "脚 / 足", eng: "Foot", fra: undefined, example: "As in 발차기 (foot kick)"},
  {tag: "components", kor: "뛰어 / 날아", phon: "ttwieo / nara", phonfra: undefined, cmn: "跳跃 / 飞", eng: "Jump", fra: undefined, example: "뛰어 = jump, 날아 = fly"},
  {tag: "components", kor: "돌다 / 회전", phon: "dolda / hoejeon", phonfra: undefined, cmn: "旋转 / 转身", eng: "Turn / Spin", fra: undefined, example: "Used in turning/spinning kicks"},
  {tag: "components", kor: "밀기", phon: "milgi", phonfra: undefined, cmn: "推", eng: "Push", fra: undefined, example: "From 밀다 (milda, to push)"},
  {tag: "components", kor: "당기기", phon: "dangigi", phonfra: undefined, cmn: "拉", eng: "Pull", fra: undefined, example: "From 당기다 (dangida, to pull)"},

  // Terms
  {tag: "terminologie", kor: "품새 / 태극", phon: "pumsae / taegeuk", phonfra: "poumsé / taegeuk", cmn: "形, 型 / 太极", eng: "Form / Pattern", fra: "forme, pattern, taeguk", example: undefined},
  {tag: "terminologie", kor: "호신술 / 호신법", phon: "hosinsul / hosinbeop", phonfra: undefined, cmn: "自衛", eng: "Self-defense", fra: "auto-défense", example: undefined},
  {tag: "terminologie", kor: "겨루기 / 대련", phon: "gyeorugi / daeryeon", phonfra: undefined, cmn: "对练, 对打 / 对决", eng: "Sparring", fra: "combat libre, sparring, duel", example: undefined},
  {tag: "terminologie", kor: "무술", phon: "musul", phonfra: undefined, cmn: "武术", eng: "Martial art", fra: "art martial", example: undefined},
  {tag: "terminologie", kor: "기술", phon: "gisul", phonfra: undefined, cmn: "技术", eng: "Technique", fra: "technique", example: undefined},

/* LABENNE ******************************************************* */
// Terms
  {tag: "terminologie", kor: "차렷", phon: "Charyeot", phonfra: "Charyeot", cmn: "立正", eng: "Attention", fra: "Attention", example: undefined},
  {tag: "terminologie", kor: "경례", phon: "Gyeongnye", phonfra: "Kyon-yé", cmn: "互相敬礼", eng: "Bow", fra: "Salutation", example: undefined},
  {tag: "terminologie", kor: "준비", phon: "Junbi", phonfra: "Choumbi", cmn: "准备", eng: "Ready", fra: "Prêt", example: undefined},
  {tag: "terminologie", kor: "시작", phon: "Sijak", phonfra: "Sijak", cmn: "开始", eng: "Start", fra: "Début", example: undefined},
  {tag: "terminologie", kor: "그만", phon: "Geuman", phonfra: "Keuman", cmn: "停止", eng: "End", fra: "Fin", example: undefined},
  {tag: "terminologie", kor: "기합", phon: "Gihap", phonfra: "Kiap", cmn: "气合", eng: "Yell", fra: "Cri", example: undefined},
  {tag: "terminologie", kor: "도복", phon: "Dobok", phonfra: "Dobok", cmn: "道服", eng: "Uniform", fra: "Tenue", example: undefined},
  {tag: "terminologie", kor: "띠", phon: "Tti", phonfra: "Ti", cmn: "带", eng: "Belt", fra: "Ceinture", example: undefined},
  {tag: "terminologie", kor: "도장", phon: "Dojang", phonfra: "Dojang", cmn: "道场", eng: "Dojo", fra: "Dojo, salle d'entraînement", example: undefined},
  {tag: "terminologie", kor: "뛰어", phon: "Ttwieo", phonfra: "Twio", cmn: "跳", eng: "Jump", fra: "Sauté", example: undefined},
  {tag: "terminologie", kor: "바로", phon: "Baro", phonfra: "Baro", cmn: "还原", eng: "Return", fra: "Retour", example: undefined},
  {tag: "terminologie", kor: "기본", phon: "Gibon", phonfra: "Kibon", cmn: "基本", eng: "Basic", fra: "Base", example: undefined},
  {tag: "terminologie", kor: "겨루기", phon: "Gyeorugi", phonfra: "Kyorougui", cmn: "对打", eng: "Sparring", fra: "Combat", example: undefined},

  // Positions
  {tag: "stance", kor: "앞 서기", phon: "Ap seogi", phonfra: "Ap seugi", cmn: "前姿势", eng: "Front stance", fra: "Position avant", example: undefined},
  {tag: "stance", kor: "앞굽이 서기", phon: "Apgubi seogi", phonfra: "Apkoupi seugi", cmn: "走步站", eng: "Walking stance", fra: "Position pied écarté avant", example: undefined},
  {tag: "stance", kor: "주춤 서기", phon: "Juchum seogi", phonfra: "Joutchoum seugi", cmn: "骑马步", eng: "Horse-riding stance", fra: "Position cavalier", example: undefined},
  {tag: "stance", kor: "겨루기 준비 서기", phon: "Gyeorugi junbi seogi", phonfra: "Kyorougui choumbi seugi", cmn: "后姿势", eng: "Back stance (sparring)", fra: "Position arrière", example: undefined},
  {tag: "stance", kor: "모아 서기", phon: "Moa seogi", phonfra: "Moa seugi", cmn: "并步", eng: "Closed stance", fra: "Position pieds joints", example: undefined},
  {tag: "stance", kor: "나란히 서기", phon: "Naranhi seogi", phonfra: "Narahni seugi", cmn: "自然站", eng: "Natural stance", fra: "Position pieds écartés", example: undefined},
  {tag: "stance", kor: "차려 서기", phon: "Charyo seogi", phonfra: "Tchalyeut seugi", cmn: "还原姿势", eng: "Return stance", fra: "Position de retour", example: undefined},
  {tag: "stance", kor: "낮춰 서기", phon: "Najchwo seogi", phonfra: "Natchoa seugi", cmn: "放松站姿", eng: "Relaxed stance", fra: "Position naturelle", example: undefined},
// {tag: "stance", kor: "뒷서기", phon: "Dwi seogi", phonfra: undefined, cmn: "后弓步", eng: "Back stance", fra: "Position arrière", example: undefined},

// Blocks
  {tag: "block", kor: "아래 막기", phon: "Arae makgi", phonfra: "Arae maki", cmn: "下段防御", eng: "Low block", fra: "Blocage bas", example: undefined},
  {tag: "block", kor: "몸통 막기", phon: "Momtong makgi", phonfra: "Momtong maki", cmn: "中段防御", eng: "Middle block", fra: "Blocage moyen", example: undefined},
  {tag: "block", kor: "얼굴 막기", phon: "Eolgul makgi", phonfra: "Eulgoul maki", cmn: "上段防御", eng: "High block", fra: "Blocage haut", example: undefined},
  {tag: "block", kor: "엇막기", phon: "Eot makgi", phonfra: "Etchomaki", cmn: "交叉防御", eng: "X-block", fra: "Blocage croisé", example: undefined},
  {tag: "block", kor: "몸통 안 막기", phon: "Momtong an makgi", phonfra: "Momtong an maki", cmn: "内防御", eng: "Inner block", fra: "Blocage circulaire", example: undefined},
  {tag: "block", kor: "몸통 바깥 막기", phon: "Momtong bakkat makgi", phonfra: "Momtong bakkat maki", cmn: "外防御", eng: "Outer block", fra: "Blocage extérieur", example: undefined},
  //{tag: "block", kor: "올려 막기", phon: "Ollyeo makgi", phonfra: undefined, cmn: "上段防御", eng: "High block", fra: "Blocage haut", example: undefined},

// Strikes
  {tag: "strike", kor: "지르기", phon: "Jireugi", phonfra: "Jileugui", cmn: "直拳", eng: "Punch", fra: "Frappe directe", example: undefined},
  {tag: "strike", kor: "더블 지르기", phon: "Deobeul jireugi", phonfra: "Douboun jileugui", cmn: "双拳", eng: "Double punch", fra: "Frappe double directe", example: undefined},
  {tag: "strike", kor: "반대 지르기", phon: "Bandae jireugi", phonfra: "Bandé", cmn: "反拳", eng: "Reverse punch", fra: "Frappe revert", example: undefined},
  //{tag: "strike", kor: "손날 치기", phon: "Sonnal chigi", phonfra: undefined, cmn: "手刀打击", eng: "Knifehand strike", fra: "Coup de tranchant de la main", example: undefined},
  //{tag: "strike", kor: "팔꿈치 치기", phon: "Palkkumchi chigi", phonfra: undefined, cmn: "肘击", eng: "Elbow strike", fra: "Coup de coude", example: undefined},

// Kicks
  {tag: "kick", kor: "앞차기", phon: "Ap chagi", phonfra: "Ap tchagui", cmn: "前踢", eng: "Front kick", fra: "Coup de pied avant", example: undefined},
  {tag: "kick", kor: "반달차기", phon: "Bandal chagi", phonfra: "Bandal tchagui", cmn: "回旋踢", eng: "Roundhouse kick", fra: "Coup de pied circulaire", example: undefined},
  {tag: "kick", kor: "안차기", phon: "An chagi", phonfra: "Ann tchagui", cmn: "内踢", eng: "Inner kick", fra: "Coup de pied intérieur", example: undefined},
  {tag: "kick", kor: "밖차기", phon: "Bakkat chagi", phonfra: "Bakkat tchagui", cmn: "外踢", eng: "Outer kick", fra: "Coup de pied extérieur", example: undefined},
  {tag: "kick", kor: "밀어차기", phon: "Mireo chagi", phonfra: "Mileu tchagui", cmn: "推踢", eng: "Push kick", fra: "Coup de pied frontal", example: undefined},
  {tag: "kick", kor: "내려차기", phon: "Naeryeo chagi", phonfra: "Nelyo tchagui", cmn: "下劈腿", eng: "Axe kick", fra: "Coup de pied circulaire descendant", example: undefined},
  {tag: "kick", kor: "뒤차기", phon: "Dwi chagi", phonfra: "Duit tchagui", cmn: "后踢", eng: "Back kick", fra: "Coup de pied retourné", example: undefined},
  {tag: "kick", kor: "뛰어 앞차기", phon: "Ttwieo ap chagi", phonfra: "Twio ap tchagui", cmn: "跳跃前踢", eng: "Jumping front kick", fra: "Coup de pied sauté avant", example: undefined},
  //{tag: "kick", kor: "옆 차기", phon: "Yeop chagi", phonfra: undefined, cmn: "侧踢", eng: "Side kick", fra: "Coup de pied latéral", example: undefined},
  //{tag: "kick", kor: "후려 차기", phon: "Huryeo chagi", phonfra: undefined, cmn: "旋转勾踢", eng: "Spinning hook kick", fra: "Coup de pied crochet retourné", example: undefined},
  //{tag: "kick", kor: "날아 옆차기", phon: "Nara yeop chagi", phonfra: undefined, cmn: "飞踢（侧）", eng: "Flying side kick", fra: "Coup de pied latéral en sautant", example: undefined},

  // Moves
  {tag: "move", kor: "", phon: "", phonfra: "", cmn: "滑步", eng: "Slide step", fra: "Pas glissé", example: undefined},
  {tag: "move", kor: "", phon: "", phonfra: "", cmn: "转步", eng: "Pivot step", fra: "Pas pivot (avant/arrière/avec coup de pied)", example: undefined},
  {tag: "move", kor: "", phon: "", phonfra: "", cmn: "并步", eng: "Chassé step", fra: "Pas chassé", example: undefined}
]