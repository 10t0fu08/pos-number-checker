import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const freeAlcColor = "cyan darken-1";
const freeNotAlcColor = "light-blue darken-1";
// const freeAlcColor = "teal darken-1";
export default new Vuex.Store({
  state: {
    products:[
      {
        id:4000,
        name:"P 生ビールジョッキ",
        color:freeAlcColor
      },
      {
        id:4001,
        name:"P 生ビールピッチャー",
        color:freeAlcColor
      },
      {
        id:4008,
        name:"P シャンディガフ",
        color:freeAlcColor
      },
      {
        id:4009,
        name:"P レッドアイ",
        color:freeAlcColor
      },
      {
        id:4014,
        name:"P オールフリー",
        color:freeAlcColor
      },
      {
        id:4240,
        name:"P メーカーズハイボール",
        color:freeAlcColor
      },
      {
        id:4241,
        name:"P メーカーズハイボール with ライム",
        color:freeAlcColor
      },
      {
        id:4243,
        name:"P メーカーズジンジャー",
        color:freeAlcColor
      },
      {
        id:4244,
        name:"P メーカーズコーラ",
        color:freeAlcColor
      },
      {
        id:4245,
        name:"P メーカーズロック",
        color:freeAlcColor
      },
      {
        id:4246,
        name:"P メーカーズ水割り",
        color:freeAlcColor
      },
      {
        id:4247,
        name:"P メーカーズお湯割り",
        color:freeAlcColor
      },
      {
        id:4052,
        name:"P レッドブルウォッカ",
        color:freeAlcColor
      },
      {
        id:4053,
        name:"P レッドブルカシス",
        color:freeAlcColor
      },
      {
        id:4054,
        name:"P レッドブルモヒート",
        color:freeAlcColor
      },
      {
        id:4343,
        name:"P レッドブルエナジードリンク",
        color:freeAlcColor
      },
      {
        id:4133,
        name:"P ジムビームハイボール",
        color:freeAlcColor
      },
      {
        id:4132,
        name:"P ジムビームコーラ",
        color:freeAlcColor
      },
      {
        id:4143,
        name:"P ジムビームジンジャー",
        color:freeAlcColor
      },
      {
        id:4145,
        name:"P ジムビームスカッシュ",
        color:freeAlcColor
      },
      {
        id:4386,
        name:"P ジムビームライム",
        color:freeAlcColor
      },
      {
        id:4388,
        name:"P ジムビームパイン",
        color:freeAlcColor
      },
      {
        id:4134,
        name:"P ジムビーム水割り",
        color:freeAlcColor
      },
      {
        id:4136,
        name:"P ジムビームロック",
        color:freeAlcColor
      },
      {
        id:4135,
        name:"P ジムビームお湯割り",
        color:freeAlcColor
      },
      {
        id:4061,
        name:"P レモンサワー",
        color:freeAlcColor
      },
      {
        id:4069,
        name:"P こだわり酒場レモンサワー",
        color:freeAlcColor
      },
      {
        id:4062,
        name:"P 伊右衛門ハイ",
        color:freeAlcColor
      },
      {
        id:4101,
        name:"P ほろよい白いサワー",
        color:freeAlcColor
      },
      {
        id:4063,
        name:"P グレープフルーツハイ",
        color:freeAlcColor
      },
      {
        id:4060,
        name:"P ウーロンハイ",
        color:freeAlcColor
      },
      {
        id:4102,
        name:"P ほろよいアイスティーサワー",
        color:freeAlcColor
      },
      {
        id:4066,
        name:"P すっきりトマトサワー",
        color:freeAlcColor
      },
      {
        id:4067,
        name:"P ソルトトマトサワー",
        color:freeAlcColor
      },
      {
        id:4068,
        name:"P 激辛トマトサワー",
        color:freeAlcColor
      },
      {
        id:4176,
        name:"P 大隅　伊右衛門ハイ",
        color:freeAlcColor
      },
      {
        id:4049,
        name:"P カラカンモヒート",
        color:freeAlcColor
      },
      {
        id:4028,
        name:"P ウォッカトニック",
        color:freeAlcColor
      },
      {
        id:4023,
        name:"P モスコミュール",
        color:freeAlcColor
      },
      {
        id:4024,
        name:"P カシスソーダ",
        color:freeAlcColor
      },
      {
        id:4025,
        name:"P カシスグレープフルーツ",
        color:freeAlcColor
      },
      {
        id:4032,
        name:"P カルーアミルク",
        color:freeAlcColor
      },
      {
        id:4026,
        name:"P スクリュードライバー",
        color:freeAlcColor
      },
      {
        id:4022,
        name:"P ファジーネーブル",
        color:freeAlcColor
      },
      {
        id:4020,
        name:"P カシスオレンジ",
        color:freeAlcColor
      },
      {
        id:4027,
        name:"P 抹茶カルーア",
        color:freeAlcColor
      },
      {
        id:4021,
        name:"P ジントニック",
        color:freeAlcColor
      },
      {
        id:4030,
        name:"P ピーチウーロン",
        color:freeAlcColor
      },
      {
        id:4080,
        name:"P シークワーサー酒ソーダ",
        color:freeAlcColor
      },
      {
        id:4081,
        name:"P シークワーサー酒ロック",
        color:freeAlcColor
      },
      {
        id:4082,
        name:"P ゆず酒ソーダ",
        color:freeAlcColor
      },
      {
        id:4083,
        name:"P ゆず酒ロック",
        color:freeAlcColor
      },
      {
        id:4084,
        name:"P 巨峰酒ソーダ",
        color:freeAlcColor
      },
      {
        id:4085,
        name:"P 巨峰酒ロック",
        color:freeAlcColor
      },
      {
        id:4210,
        name:"P 澄みわたる梅酒ロック",
        color:freeAlcColor
      },
      {
        id:4211,
        name:"P 澄みわたる梅酒ソーダ",
        color:freeAlcColor
      },
      {
        id:4212,
        name:"P 澄みわたる梅酒水割り",
        color:freeAlcColor
      },
      {
        id:4213,
        name:"P 澄みわたる梅酒お湯割り",
        color:freeAlcColor
      },
      {
        id:4218,
        name:"P 澄みわたる白桃酒ロック",
        color:freeAlcColor
      },
      {
        id:4219,
        name:"P 澄みわたる白桃酒ソーダ",
        color:freeAlcColor
      },
      {
        id:4220,
        name:"P 澄みわたる白桃酒水割り",
        color:freeAlcColor
      },
      {
        id:4221,
        name:"P 澄みわたる白桃酒お湯割り",
        color:freeAlcColor
      },
      {
        id:4072,
        name:"P すっきりおいしい梅酒ロック",
        color:freeAlcColor
      },
      {
        id:4071,
        name:"P すっきりおいしい梅酒ソーダ",
        color:freeAlcColor
      },
      {
        id:4074,
        name:"P すっきりおいしい梅酒水割り",
        color:freeAlcColor
      },
      {
        id:4073,
        name:"P すっきりおいしい梅酒お湯割り",
        color:freeAlcColor
      },
      {
        id:4113,
        name:"P 熱燗",
        color:freeAlcColor
      },
      {
        id:4112,
        name:"P 冷酒(グラス)",
        color:freeAlcColor
      },
      {
        id:4116,
        name:"P サングリア赤ロック",
        color:freeAlcColor
      },
      {
        id:4117,
        name:"P サングリア赤オレンジ",
        color:freeAlcColor
      },
      {
        id:4118,
        name:"P サングリア白ロック",
        color:freeAlcColor
      },
      {
        id:4119,
        name:"P サングリア白オレンジ",
        color:freeAlcColor
      },
      {
        id:4110,
        name:"P 赤グラスワイン",
        color:freeAlcColor
      },
      {
        id:4111,
        name:"P 白グラスワイン",
        color:freeAlcColor
      },
      {
        id:4300,
        name:"P アイスウーロン茶",
        color:freeNotAlcColor
      },
      {
        id:4301,
        name:"P コーラ",
        color:freeNotAlcColor
      },
      {
        id:4310,
        name:"P アイスティー",
        color:freeNotAlcColor
      },
      {
        id:4302,
        name:"P ジンジャーエール",
        color:freeNotAlcColor
      },
      {
        id:4306,
        name:"P アイスミルクティー",
        color:freeNotAlcColor
      },
      {
        id:4303,
        name:"P メロンソーダ",
        color:freeNotAlcColor
      },
      {
        id:4312,
        name:"P アイスレモンティー",
        color:freeNotAlcColor
      },
      {
        id:4322,
        name:"P レモンスカッシュ",
        color:freeNotAlcColor
      },
      {
        id:4304,
        name:"P アイスコーヒー",
        color:freeNotAlcColor
      },
      {
        id:4308,
        name:"P ホワイトウォーター",
        color:freeNotAlcColor
      },
      {
        id:4307,
        name:"P アイスココア",
        color:freeNotAlcColor
      },
      {
        id:4309,
        name:"P ホワイトソーダ",
        color:freeNotAlcColor
      },
      {
        id:4311,
        name:"P 伊右衛門緑茶",
        color:freeNotAlcColor
      },
      {
        id:4325,
        name:"P オレンジジュース",
        color:freeNotAlcColor
      },
      {
        id:4326,
        name:"P 完熟リンゴジュース",
        color:freeNotAlcColor
      },
      {
        id:4328,
        name:"P グレープフルーツジュース",
        color:freeNotAlcColor
      },
      {
        id:4327,
        name:"P トマトジュース",
        color:freeNotAlcColor
      },
      {
        id:4315,
        name:"P ホットウーロン茶",
        color:freeNotAlcColor
      },
      {
        id:4317,
        name:"P ホットコーヒー",
        color:freeNotAlcColor
      },
      {
        id:4319,
        name:"P ホットティー",
        color:freeNotAlcColor
      },
      {
        id:4316,
        name:"P ホットココア",
        color:freeNotAlcColor
      },
      {
        id:4331,
        name:"P ピュアカシスオレンジ",
        color:freeNotAlcColor
      },
      {
        id:4336,
        name:"P みかんホワイトウォーター",
        color:freeNotAlcColor
      },
      {
        id:4332,
        name:"P オレンジマンゴー",
        color:freeNotAlcColor
      },
      {
        id:4378,
        name:"P カシストニック",
        color:freeNotAlcColor
      },
      {
        id:4333,
        name:"P ブラックティーソーダ",
        color:freeNotAlcColor
      },
      {
        id:4380,
        name:"P 石垣パイン",
        color:freeNotAlcColor
      },
      {
        id:4334,
        name:"P ピュアカシスソーダ",
        color:freeNotAlcColor
      },
      {
        id:4381,
        name:"P 赤しそレモンスカッシュ",
        color:freeNotAlcColor
      },
      {
        id:4335,
        name:"P マンゴーソーダ",
        color:freeNotAlcColor
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
