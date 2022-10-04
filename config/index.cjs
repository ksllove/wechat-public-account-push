/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxae549785b6d1c2fe',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f5e624e5d04db1d1e44ffa68de68c213',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olfxQ58MMgO5QMdD36mn_k1nzhl4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'xdKiZxLjShFFBWlcV81icQdXLfZZGxkq_4yzyKrOxAg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2000', date: '12-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '笨猪', year: '2001', date: '01-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-11-07' },      
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olfxQ5-HTenDnQtZ1qswCBDrt7uQ',
    }
  ],

}

module.exports = USER_CONFIG
