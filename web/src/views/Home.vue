<template>
    <div class="container">
        <Reader class="reader" :book="book"></Reader>
    </div>
</template>

<script setup lang="ts">
import Reader from "@/components/Reader/index.vue";
import { SerializedBookData } from "@/types";

const book: SerializedBookData = {
    "name": "《武魂大陆》",
    "data": [
        {
            "isRoll": true,
            "title": "第一卷：初入武魂"
        },
        {
            "title": "第1章：意外觉醒",
            "content": [
                "主人公林风在一次偶然的意外中觉醒了自己的武魂，他的武魂是一只神秘的火凤凰。",
                "这个突如其来的力量使他既困惑又兴奋，他意识到自己获得了一种独特而强大的力量。",
                "从那一刻起，他踏上了在武魂大陆的修炼之旅。",
                "林风很快发现自己所拥有的武魂是非常罕见的，这引起了学院和强者们的广泛关注。",
                "传言迅速传遍了整个武魂学院，每个人都对这位天赋异禀的新生感到好奇。他的出现引发了学院内外的热议，而他也开始受到许多人的关注和赞赏。",
                "来到武魂学院后，林风开始了一段全新的生活。他参加各种严格的训练和考核，学习各种武技和战斗技巧。",
                "他与其他学员结交了朋友，结成了战斗团队，共同经历了一次又一次的战斗和挑战。在这个充满激烈竞争和不断进步的环境中，林风展现出了他的天赋和努力。",
                "随着时间的推移，林风的实力不断提升，他在武魂学院的声誉也逐渐扩大。",
                "他通过参加各种比赛和考核，一次次展现出自己的实力和才华。他的武魂与他紧密融合，使他的战斗力越来越强大。",
                "然而，林风也面临着许多困难和挑战。他遭遇过强大的对手和险境，也经历过失败和挫折。",
                "但他从每次失败中汲取教训，不断修炼和提升自己。他坚持不懈地追求着自己的目标，为了成为武魂大陆上的顶尖强者而努力奋斗。",
                "在他的修炼之旅中，林风还结识了许多有趣而有才华的人物。他们一起交流学习，互相切磋，共同成长。",
                "林风的存在也激发了其他人的斗志，激励他们追求自己的梦想和目标。",
                "随着时间的推移，林风的名字在武魂大陆上渐渐传开，他成为了一个备受瞩目的年轻天才。第一章",
                "周维清的一缕神魂逃回幽冥界后，在幽冥教主的帮助下，恢复神魂，重塑肉身，并得知了斗罗大陆那边的情况。",
                "“唐三竟然那么强大，而且——”",
                "“我的永恒与创造之神印王座，竟然抛弃了我？”",
                "徐煌目眦欲裂，周身的气势凝聚成一团近乎覆盖整个星球的怨念领域，其内不可名状的魑魅魍魉之物，吓得深渊圣君等人瑟瑟发抖。",
                "在夺取了一百零八层深渊位面的掌控权之后，徐煌的实力更上一层楼，彻彻底底达到了神王级别的实力。",
                "加之深渊位面与星球产生了融合，身为这幽冥界的主宰，他的实力亦是在不断的提升，千年之内便可突破到至高神王的层次。",
                "“师父，莫要生气。”对于那个唐三、那把永恒与创造之神印王座和自家师父之间有什么联系，周维清不想探究，只是道，“那片名为斗罗大陆的世界，强者不少，只能慢慢蚕食，我们幽冥世界的气息会不断的渗透那边······”",
                "而深渊生物死亡后，一部分气息就会进入魂能大循环，不过因为特定的能量有聚集性，比如，火属性的天地能量会凝聚在沙漠、火山之类的地方，那些深渊生物死后产生的气息亦是会凝聚在某地，并不会直接被魂师吸收。",
                "“出征的将士，回家第一件事，亦是看望家中妻女，人之常情。”",
                "不过，当那些能量积累到一定程度，显然会再次影响大陆上的生灵，至于这个时间会持续多久，唐三就不得而知。",
                "在唐三的研究之中，魂师炼化天地能量为魂力的过程之中，也会释放一种奇特的能量。",
                "唐三瞥了眼面无表情的比比东，倒也不尴尬，平静回应，甚至还打算拿天斗帝国看到的历史书中的记载来做案例，只不过被比比东打断了：“好好好，人之常情，不用细说，我对这些不感兴趣，不过对于将深渊位面的通道连接到星空世界，真的没问题吗？”",
                "“那还愣着干什么？行动吧！”徐煌大手一挥，命令属下们去寻找其他位面的坐标，并展开入侵，他就不相信，其他的星球上也有如同唐三、银龙王这样强大的存在···",
                "而深渊位面的原本强者，实力亦是有了大幅度的提升，就如深渊圣君，虽然还是一级神的层次，但已然在徐煌的帮助下，吸收了星球上残余的怨念、恨念，凝聚神位：魔。",
                "周维清的想法，徐煌也知道，就是打持久战，毕竟斗罗大陆那边的位面意志也排斥着他们。",
                "“十年么？看来爆发那一股能量，也需要消耗代价，不然以唐三的性格，都要打过来，而不是将入口封印。”幽冥教主笑了起来，自认为猜测到了唐三的情况，心情突然美好了不少，“损失一枚血神子，了解到对面的情况，也不算亏。”",
                "而这个过程之中，不可能只吸不呼。",
                "“亲自过去？”比比东眉头一挑，武魂殿可不能没有唐三，不然各项研究进度都会变慢，或许会得不偿失。",
                "当然了，真要过去了，位面意识在境界上，也就相当于二级神，拿他们没办法。",
                "“只能说，没有百分之一百的把握，因此在进行之前，我还需要过去探查一下。”唐三说出了自己的想法。",
                "“不需要，不就是十年嘛，我等得起，就当是我的那老对手一个十年的准备时间，我可是要为他准备一份大礼。”徐煌呵呵冷笑，“在这十年里，我们要不断地向其他生命星球进发，吞噬一切，将我们这幽冥界晋级成如同神界那般的世界，你们这一百零八个家伙，都必须达到神级！”",
                "所以说，一个正常的世界，天地能量并不会因为修炼者的增多而减少，反倒是会因为修炼者的增多而提升，直到星球达到某个饱和的程度。",
                "比如：星球的每一寸地方都有人居住。",
                "一零三.一五一.一七二.一三",
                "所谓的魂能大循环，便是唐三提出的关于魂师/魂兽与天地之间的能量交互循环系统，无论是魂师，还是魂兽，修炼魂力、提升修为，都需要炼化天地之间的能量。",
                "可强行通过，不一定成功，在周维清回来的时候，也有一股极强的爆炸能量从位面通道之中传送了过来，将数以百万计的深渊生物给轰得灰飞烟灭。",
                "深渊圣君急忙说道：“若是能够找到生命质量极高的星球，而且我们的幽冥界将其吞噬了，我等自然也能够快速晋级，达到神、甚至是超越寻常神灵的层次。”",
                "“位面通道没有被炸毁，但出口那一头却是被封印了，要破开，恐怕需要十年左右的时间。”深渊圣君将第一时间探查到的情况汇报给了幽冥教主。",
                "这点需要防范。",
                "其余位面主宰，前三十六层的帝王，实力俱是达到了相当于九十五级以上的超级斗罗；中三十六层的帝王，实力相当于九十九级的准半神；而后三十六层的帝王，二十七个达到了准神的层次，九个达到了百级的层次。",
                "咔！",
                "正在办公的比比东捏紧了拳头：好你个唐三，回来的第一时间竟然不向本教皇汇报情况，竟然一龙戏多凰，真是长本事了！",
                "第二日，唐三神清气爽的起身，并没有立即研究那血神子，而是去了教皇殿，向比比东汇报情况，以及接下来的计划。",
                "“···所以，你昨晚上就在跟你的女友们荒唐了一夜？”比比东突然问道。",
                "“位面通道那边怎么样了？”徐煌问起了这件事。",
                "可即便如此，在幽冥教主的威势之下，他们俱是生不出任何反抗的心理。",
                "“不是，我抓到了敌方首脑的一个分身，或许可以通过其结构，投放一个类似的分身过去。”唐三诉说着自己的想法，“而且，深渊生物并没有灭杀干净，古月娜的那一招威力虽然强，但相应的，深渊气息恐怕也弥漫到了斗罗大陆的魂能大循环之中了。”",
                "而在唐三回到武魂城的第一时间，就被众女围了上来，鼻子最为灵敏的小舞嗅到了什么，眼神古怪，“还是被强上？”",
                "“强什么？我那是让着她。”唐三揽住了小舞的腰肢，又朝着其余人招呼一声，就往魂武庄园而去，来了个大被同眠。",
                "···",
                "“三哥，你偷吃了？”",
                "当然，这夸张了一些，但唐三可以肯定的是，斗罗大陆目前正处于蓬勃的发展期，魂能大循环根本没有达到饱和的阶段，甚至随着唐三的武魂种满整个大陆，这个上限还会不断地提高。",
                "这也是唐三打算着让深渊位面的空间通道与他的星空世界相连的原因之一。",
                "正如植物需要动物的生命活动所产生二氧化碳进行光合作用，这一种在修炼之中被人体排出去的能量，不为人所用，但对于整个天地来说，却是用以与宇宙空间中的能量进行某种“化学”反应，产生天地能量的基础。",
                "“这倒是个问题，不过你既然自有打算，那么我也就不多过问了，处理好了，向我汇报就是，处理不好，也向我知会一声，过去帮你。”",
                "比比东给出了自己力所能及的肯定，“接下来，我也要突破百级了，神界与我们世界的空间通道断了，刚好不用受他们的管辖了，加上你的星空世界与神界之间连通了一条微不可查的通道，仙灵之气管够，我成神后，应该可以在短时间内补足底蕴，达到神王的级别······”"
            ]
        },
        {
            "title": "第3章：魂师考核",
            "content": [
                "林风和伙伴们参加了学院的魂师考核，面对各种严峻的考验。",
                "他们需要展现出自己的实力和潜力，通过一系列的测试，包括对战、灵魂力量的掌控和战术智慧等。",
                "林风展现出卓越的战斗技巧和灵活的思维，成功通过了考核，成为正式的魂师，得到了更多的修炼资源和机会。",
                "他为自己在考核中的表现感到自豪，同时也为伙伴们的成绩而高兴。"
            ]
        },
        {
            "title": "第4章：实力突破",
            "content": [
                "林风开始在学院中努力修炼，不断提升自己的实力。他参加各种训练和比赛，与其他学员切磋，领悟战斗技巧。",
                "通过不懈的努力和坚持，林风逐渐突破了自身的实力限制，展现出了强大的潜力和天赋。",
                "他不断探索自己的武魂力量，学习新的技能和战斗策略，使自己的战斗能力不断提升。"
            ]
        },
        {
            "title": "第5章：伙伴之间的羁绊",
            "content": [
                "林风与小雪、阿石以及其他伙伴们建立了深厚的友谊和羁绊。",
                "他们一起经历了许多困难和挑战，互相扶持和支持。在训练和战斗中，他们相互激励，共同成长。",
                "林风深深地珍视着这些伙伴，他们彼此间的信任和默契使他们更加强大，成为了无坚不摧的战斗团队。",
                "伙伴之间的羁绊也成为林风不断努力前进的动力。"
            ]
        },
        {
            "title": "第6章：挑战试炼",
            "content": [
                "林风和伙伴们接受了学院的挑战试炼，这是一个对他们实力和智慧的综合考验。",
                "在试炼中，他们面对各种困难和对手的考验，需要展现出自己的勇气和智慧。",
                "林风充分发挥自己的火凤凰武魂，灵活运用技能和战术，与对手激烈交战。",
                "他们经历了一场场惊心动魄的战斗，逐渐成长并为学院赢得了荣誉。"
            ]
        },
        {
            "title": "第7章：魂兽传承",
            "content": [
                "为了更进一步提升自己的实力，林风和伙伴们进入了魂兽森林，寻找传承和强大的魂兽伙伴。",
                "他们面对各种魂兽的挑战，需要发挥出自己最强的实力和合作精神。",
                "林风与他的火凤凰武魂相互配合，与魂兽展开激烈的战斗。",
                "在危机重重的环境中，他们不断突破自我，获得了魂兽的认可，并获得了它们的传承，使自己的武魂能力更上一层楼。"
            ]
        },
        {
            "title": "第8章：魂斗争霸",
            "content": [
                "林风参加了武魂学院的魂斗争霸赛，这是一个展示个人实力和才华的舞台。",
                "他与其他学院的天才们一较高下，争夺荣耀和尊重。",
                "林风展现出强大的武魂力量和精湛的战斗技巧，赢得了人们的赞赏和尊重。",
                "他在比赛中与强敌一一交锋，每一场战斗都充满了激情与挑战，最终夺得了魂斗争霸的冠军。"
            ]
        },
        {
            "title": "第9章：魂技传承",
            "content": [
                "林风获得了魂技传承的机会，掌握了更加强大的战斗技巧。",
                "通过传承者的指导和自己的努力，他掌握了独特的魂技，使自己的战斗更加精妙和高效。",
                "林风在学院中崭露头角，成为学院的璀璨之星。",
                "他用自己的魂技和战斗表现征服了众人，成为众人仰慕的对象。"
            ]
        },
        {
            "title": "第10章：血战之巅",
            "content": [
                "林风和伙伴们参加了血战之巅，这是一场激烈的战斗，决定学院的命运。",
                "他们面对强大的对手，不断战斗，捍卫自己的学院和荣誉。林风发挥出自己最强的实力，与敌人激战到底。",
                "在血战之巅的战斗中，他们付出了巨大的努力和牺牲，最终以团结的力量战胜了对手，为学院赢得了胜利，并赢得了学院师生们的敬佩和赞扬。"
            ]
        },
        {
            "isRoll": true,
            "title": "第二卷：武魂觉醒"
        },
        {
            "title": "第11章：新的挑战",
            "content": [
                "林风在比赛中表现出色，但他意识到自己仍面临更大的挑战。",
                "为了不停滞于现状，他决心继续努力提升自己的实力。",
                "他投入更多时间和精力进行武魂修炼，积极参与学院的训练和挑战，以期在武魂大陆上有更出色的表现。"
            ]
        },
        {
            "title": "第12章：武魂技巧",
            "content": [
                "林风偶遇一位神秘的武魂导师，他向导师请教并学习了许多高级的武魂技巧。",
                "导师通过生动的实例和详细的解说，教给林风许多独特的战斗技巧和策略，拓展了他的战斗方式。",
                "林风通过反复实践和不断磨练，逐渐掌握了这些技巧，让自己的战斗变得更加灵活和出色。"
            ]
        },
        {
            "title": "第13章：武魂融合",
            "content": [
                "林风对武魂融合产生了浓厚的兴趣，他开始探索武魂之间的融合方式。",
                "通过细致的观察和实验，他发现不同武魂之间的融合能够带来意想不到的好处。",
                "他将自己的武魂与伙伴们的武魂进行融合，这种融合让他的实力得到了巨大的提升。",
                "他的战斗力和技巧在融合的过程中不断增强，使他能够更好地适应各种战斗情况。"
            ]
        },
        {
            "title": "第14章：强敌出现",
            "content": [
                "在林风修炼和成长的过程中，一位强大的对手突然出现在他的面前。",
                "这个对手拥有惊人的实力和精湛的战斗技巧，给林风带来了巨大的压力。",
                "他们展开了一场惊心动魄的战斗，考验着林风的实力、智慧和应变能力。",
                "林风不畏强敌，以顽强的毅力和巧妙的战术，与对手展开了激烈的较量。"
            ]
        },
        {
            "title": "第15章：武魂秘籍",
            "content": [
                "林风意外得到了一本珍贵的武魂秘籍，这本秘籍记载着许多传世的武魂技巧和修炼方法。",
                "他深知这本秘籍的珍贵和重要性，于是他开始全身心地钻研秘籍中的内容。",
                "他仔细阅读、领悟其中的精髓，将秘籍中的技巧融入到自己的战斗中。",
                "通过不断地实践和摸索，他逐渐将这些武魂秘籍中的精华融入到自己的武魂修炼之中，使自己的实力不断提升。"
            ]
        },
        {
            "title": "第16章：危机降临",
            "content": [
                "林风和伙伴们陷入了一场危机之中。他们面对着强大的敌人和险恶的局势，必须齐心协力才能突围。",
                "在这个危机中，林风充分展现了他的领导才能和决策能力。",
                "他带领伙伴们冷静应对危机，制定出合理的战略和计划。",
                "通过他们的智慧和团结，他们成功地化解了危机，保护了自己和伙伴的安全。"
            ]
        },
        {
            "title": "第17章：血战沙场",
            "content": [
                "林风参加了一场激烈的战斗。他置身于战场之上，面对着无数强敌的围攻和狂猛的攻击。",
                "在这场生死之战中，林风需要展现出自己的勇气和智慧，保护自己和伙伴的安全。",
                "他灵活运用自己学到的武魂技巧和战斗经验，与敌人展开惊心动魄的对决。",
                "他的身影在战场上如鬼魅般游走，出招迅捷而准确，使敌人束手无策。",
                "最终，他与伙伴们成功击败了敌人，赢得了这场关键的战斗。"
            ]
        },
        {
            "title": "第18章：武魂传承",
            "content": [
                "林风得到了一次珍贵的武魂传承机会。他进入了神秘的传承之地，眼前展现出广阔而古老的景象。",
                "在这里，他遇到了许多武魂前辈，他们是武魂大陆上的传奇人物。",
                "林风虚心向前辈们请教，接受他们的指导和考验。他通过一系列的试炼和挑战，不断磨砺自己的实力和意志。",
                "前辈们传授给他许多独特的武魂技巧和修炼方法，使他的武魂之路更加坚定和清晰。"
            ]
        },
        {
            "title": "第19章：武魂之争",
            "content": [
                "林风与其他有才华的学员展开了激烈的武魂之争。",
                "他们互相切磋，不断提高自己的实力和战斗技巧。",
                "在这场激烈的竞争中，林风充分展现出他的才华和潜力。",
                "他与对手们进行精彩绝伦的对决，每一次战斗都让他得到宝贵的经验和成长。",
                "通过与强者的较量，他逐渐突破自己的瓶颈，进一步提升自己的实力和潜力。"
            ]
        },
        {
            "title": "第20章：突破界限",
            "content": [
                "在一次突破中，林风成功打破了自身实力的限制。",
                "他通过深入的修炼和不断的突破，突破了自己的武魂境界。",
                "他的武魂之力达到了一个新的高度，展现出更加强大的力量和能力。",
                "这个突破让他在武魂大陆上崭露头角，成为众人瞩目的存在。",
                "他的名字开始传遍大陆各地，成为一位备受尊敬和仰慕的武魂天才。"
            ]
        },
        {
            "isRoll": true,
            "title": "第三卷：挑战试炼"
        },
        {
            "title": "第21章：试炼开始",
            "content": [
                "林风和伙伴们迎来了学院的挑战试炼，踏入一片神秘的试炼之地。",
                "这里充满着浓郁的神秘气息，各种困难和考验等待着他们。",
                "他们必须发扬团结合作的精神，充分发挥自己的实力，共同面对挑战，以期成功渡过试炼，取得胜利。"
            ]
        },
        {
            "title": "第22章：生死一战",
            "content": [
                "在试炼之地中，林风和伙伴们不幸遭遇了一支凶猛的魂兽群。",
                "他们必须毫不犹豫地迎接生死一战，全力以赴与魂兽展开殊死搏斗。",
                "只有通过与魂兽的血战，才能化险为夷，渡过这场生死考验，继续前行。"
            ]
        },
        {
            "title": "第23章：智慧解谜",
            "content": [
                "试炼之地中隐藏着许多谜题和机关，需要林风和伙伴们发挥智慧，解开谜题，寻找通往下一层的路径。",
                "他们面临着各种难题，需要细心观察、思考，巧妙运用各种技巧和策略，才能成功解谜，继续前进。"
            ]
        },
        {
            "title": "第24章：灵兽守护",
            "content": [
                "在试炼之地的深处，林风遭遇了一只强大的灵兽守护者。",
                "这只守护者拥有惊人的力量和智慧，林风必须与之一战，才能获得守护者的认可和帮助。",
                "他需要发挥出自己的实力和技巧，与灵兽守护者展开激烈的战斗，以争取战胜对手，获得守护者的支持。"
            ]
        },
        {
            "title": "第25章：试炼之心",
            "content": [
                "试炼之地的核心地带隐藏着一颗试炼之心，拥有着巨大的力量。",
                "林风和伙伴们必须通过一系列的考验，才能获得试炼之心的力量。",
                "这些考验涉及到身体、心灵和意志的全面挑战，他们必须克服内外的困难，以坚定的意志和无畏的勇气，获得试炼之心的认可，从而获得巨大的力量和突破。"
            ]
        },
        {
            "title": "第26章：群雄争霸",
            "content": [
                "在试炼之地的深处，林风与其他学员展开了一场激烈的群雄争霸。",
                "这是一场真正的实力比拼，他们必须战胜对手，夺取试炼之地的最高荣耀。",
                "这场群雄争霸考验着他们的技巧、智慧和勇气，也展现出每个人的个性和潜力。",
                "只有最强者才能在这场战斗中脱颖而出，成为试炼之地的真正王者。"
            ]
        },
        {
            "title": "第27章：危机四伏",
            "content": [
                "试炼之地中充满了危险和陷阱，林风和伙伴们必须保持警惕，随时应对突发状况，保持生命的安全。",
                "他们需要细心观察周围的环境，运用自己的洞察力和反应能力，化解危机，避开陷阱。",
                "只有通过谨慎行动和机智应对，才能顺利度过这些危险的地区，继续前进。"
            ]
        },
        {
            "title": "第28章：友谊之光",
            "content": [
                "在试炼之地中，林风和伙伴们之间的友谊更加深厚。",
                "面对各种困难和挑战，他们相互扶持，共同面对，互相激励，让友谊之光照亮前行的道路。",
                "他们相互支持，共同克服困难，共享荣耀和快乐，真正体现了团队的力量和友谊的可贵。"
            ]
        },
        {
            "title": "第29章：试炼终结",
            "content": [
                "经过一番艰苦的战斗和不懈的努力，林风和伙伴们成功地完成了试炼。",
                "他们顺利通过了所有的考验，获得了试炼之地的认可和奖励。",
                "这次试炼不仅是对他们实力的考验，也是对他们意志和毅力的磨砺，他们在试炼中展现出了出色的表现和坚韧的品质。"
            ]
        },
        {
            "title": "第30章：荣耀归来",
            "content": [
                "林风和伙伴们凯旋而归，他们成功完成试炼的使命，荣耀归来。",
                "他们在学院中成为备受瞩目的英雄，他们的名字成为了学院中的传奇。",
                "他们的努力和奋斗得到了全院师生的赞扬和崇敬，成为学院的骄傲。",
                "他们迎来了新的起点，带着经历的成长和荣耀的回忆，继续踏上新的征程，迎接更大的挑战。"
            ]
        },
        {
            "isRoll": true,
            "title": "第四卷：魂兽传承"
        },
        {
            "title": "第31章：魂兽森林",
            "content": [
                "林风和伙伴们踏入神秘的魂兽森林，这里是无数珍稀魂兽栖息的圣地。",
                "茂密的树林中隐藏着传承和强大的魂兽伙伴，他们开始了探索之旅，寻找着宝贵的传承和潜藏的力量。"
            ]
        },
        {
            "title": "第32章：魂兽的考验",
            "content": [
                "在魂兽森林中，林风和伙伴们面对一连串强大的魂兽考验。",
                "这些考验是对他们实力和勇气的考验，只有战胜这些魂兽，获得它们的认可和传承，才能继续前进。"
            ]
        },
        {
            "title": "第33章：魂兽伙伴",
            "content": [
                "林风与一只稀有的魂兽建立起深厚的羁绊，它成为了他真正的伙伴和战友。",
                "他们相互扶持，共同成长，魂兽的力量让林风的实力得到了巨大的提升，他们一同踏上了征程。"
            ]
        },
        {
            "title": "第34章：魂兽之王",
            "content": [
                "林风面对魂兽森林中的魂兽之王，一场生死对决即将展开。",
                "这是一场考验他实力和勇气的战斗，只有通过发挥全部的实力和智慧，才能战胜这个强大的对手，证明自己的价值和勇气。"
            ]
        },
        {
            "title": "第35章：传承之力",
            "content": [
                "通过与魂兽的激战，林风逐渐领悟到传承之力的奥秘。",
                "他的武魂能力得到了更深层次的提升和觉醒，他的身体和灵魂都得到了升华，展现出更加强大的力量和潜力。"
            ]
        },
        {
            "title": "第36章：魂兽使者",
            "content": [
                "林风荣获魂兽使者的称号，他成为魂兽森林的守护者和传承者。",
                "肩负起保护这片神秘森林的重任，他以自己的实力和智慧，守护着魂兽的生态平衡，保护着它们的繁衍和繁荣。"
            ]
        },
        {
            "title": "第37章：魂兽的祝福",
            "content": [
                "林风的魂兽伙伴们纷纷施展出自己的特殊能力，为林风和伙伴们带来祝福和加持。",
                "他们的力量与林风合二为一，使他们更加强大和无畏，共同面对前方的挑战和危机。"
            ]
        },
        {
            "title": "第38章：魂兽的守护",
            "content": [
                "林风和伙伴们面对来犯的猎杀者，他们决心保护魂兽森林和魂兽伙伴们。",
                "他们展开了一场激烈的战斗，用自己的力量和勇气保护着这片神圣之地，维护着魂兽的安全和尊严。"
            ]
        },
        {
            "title": "第39章：千年秘藏",
            "content": [
                "在魂兽森林的深处，林风意外发现了一处千年秘藏，其中蕴含着巨大的宝藏和神秘的武魂秘密。",
                "他深入其中，勇敢地面对一系列的考验和难题，希望能从中获得更强大的力量和智慧。"
            ]
        },
        {
            "title": "第40章：传承启示",
            "content": [
                "通过千年秘藏的考验和启示，林风获得了宝贵的传承和指引。",
                "他的修炼之路将迈向全新的高度，他明白自己肩负着守护和传承的重任，他将继续努力修炼，追寻更高的境界和更深的武魂奥秘。",
                "未完待续"
            ]
        }
    ]
};
</script>

<style lang="scss" scoped>
.container {
    background: #EBE6DA;

}

.reader {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    max-width: 500px;
    background-color: #F5F1E8;
    overflow: hidden;
}
</style>
