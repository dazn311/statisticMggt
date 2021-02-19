const ORGANIZATIONS_DATA = {
   
  Organisations: 
    [
      {
        org_id: 0,
        org_name: 'АДО ВВ',
        org_address: 'Сретенский бул., д.3',
        org_contacts: '+7 495 666-77-66',
        org_district: 1,
        org_type: 1,
      },{
        org_id: 1,
        org_name: 'КТО ПА',
        org_address: 'Неглинная, д.4',
        org_contacts: '+7 495 888-77-66',
        org_district: 1,
        org_type: 1,
      },
    ],
  currentUser: 
    {
      user_id: 0,
      user_fio: 'Петров Владимир Михайлович',
      login: '',
      password: '',
      user_status: 1,
      user_active: 1,
      user_role: 2,
      user_reg_date: 152458484848,
      user_end_date: 165454545455,
      user_parent: 0,
      user_child: 2,
      user_perms: 1,
      user_locked: false,
      user_org_id: 0,
      user_fio_lit: 'Петров В.М.',
      user_last_seen: 0,
    },
  Users: 
    [{
      user_id: 0,
      user_fio: 'Васильев Олег Михайлович',
      login: '',
      password: '',
      user_status: 1,
      user_active: 1,
      user_role: 2,
      user_reg_date: 152458484848,
      user_end_date: 165454545455,
      user_parent: 0,
      user_child: 2,
      user_perms: 1,
      user_locked: false,
      user_org_id: 0,
      user_fio_lit: 'Васильев В.М.',
      user_last_seen: 0,
    },{
      user_id: 1,
      user_fio: 'Смирнов Дмитрий Михайлович',
      login: '',
      password: '',
      user_status: 1,
      user_active: 1,
      user_role: 2,
      user_reg_date: 152458484848,
      user_end_date: 165454545455,
      user_parent: 0,
      user_child: 2,
      user_perms: 1,
      user_locked: false,
      user_org_id: 0,
      user_fio_lit: 'Смирнов В.М.',
      user_last_seen: 0,
    },{
      user_id: 2,
      user_fio: 'Савельев Петр Михайлович',
      login: '',
      password: '',
      user_status: 1,
      user_active: 1,
      user_role: 2,
      user_reg_date: 152458484848,
      user_end_date: 165454545455,
      user_parent: 0,
      user_child: 2,
      user_perms: 1,
      user_locked: false,
      user_org_id: 0,
      user_fio_lit: 'Савельев В.М.',
      user_last_seen: 0,
    },{
      user_id: 3,
      user_fio: 'Орлов Геннадий Михайлович',
      login: '',
      password: '',
      user_status: 1,
      user_active: 1,
      user_role: 2,
      user_reg_date: 152458484848,
      user_end_date: 165454545455,
      user_parent: 0,
      user_child: 2,
      user_perms: 1,
      user_locked: false,
      user_org_id: 0,
      user_fio_lit: 'Орлов В.М.',
      user_last_seen: 0,
    },],
  countUsers: 
    {
      dataTime: '2021-02-08T20:48:33.296Z',
      data:  {
        online: 100,
        operators: 20,
        users: 80,
      }
    },
  countOGH:  
    {
      dataTime: '2021-02-08T20:48:33.296Z',
      data:  {
        objTotal: 100,
        objMggt: 30,
        objRelatives: 70,
      }
    },
  amountNewOGH: 
    {
      dataTime: '2021-02-08T20:48:33.296Z',
      data:  {
        objTotal: 100,
        objTotalToday: 100,
        objTotalLastWeek: 100,
        objTotalMonth: 100,
        objMggt: 30,
        objRelatives: 70,
      }
    },
  amountOGHtoDay: 
    {
      dataTime: '2021-02-08T20:48:33.296Z',
      data:  {
        objTotal: 1,
        objMggt: 2,
        objRelatives: 3,
      }
    },
  amountOGHtoWeek: 
    {
      dataTime: '2021-02-08T20:48:33.296Z',
      data:  {
        objTotal: 0,
        objMggt: 0,
        objRelatives: 0,
      }
    },
  amountOGHtoTreeDays: 
    {
      dataTime: '2021-02-08T20:48:33.296Z',
      data:  {
        objTotal: 1,
        objMggt: 2,
        objRelatives: 3,
      }
    },
  countUsersGraph: //graphic of first page
    {
      startTime: '08:20 (21.01.21)',
      endTime:   '2021-02-08T20:48:33.296Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
  countUsersOfStartDayGraph: //graphic of first page
    {
      startTime: '0',
      endTime:   '0',
      online: 0
    },
  countUsersOfEndDayGraph: //graphic of first page
    {
      startTime: '0',
      endTime:   '0',
      online: 0
    },
  countEventGraph: 
    {
      startTime: '08:20 (21.01.21)',
      endTime:   '2021-02-08T20:48:33.296Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
  amountEventGraph: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
  amountEndEventGraph: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
  statusEnumEventPoint:  {
    new_rec:'создание нового события',
    deny_rec:'отклонение события (оператором)',
    done_rec:'выполнение/завершение события',
    del_rec:'удаление события',
    new_msg:'новое сообщение в событии',
    new_user:'добавление нового пользователя',
    del_user:'удаление пользователя',
    block_user:'локировка пользователя администратором',
    end_user:'завершение действия аккаунта пользователя',
    new_org:'добавление организации',
    del_org:'удаление организации',
    change_org:'изменение в организации (состав пользователей организации, изменение данных по организации',
    block_org:'блокировка организации администратором',
    login:'авторизация в системе была произведена',
    logout:'выход из системы был произведен',
    open_obj:'объект',
    save_obj:'сохранение/пересохранение объекта',
    new_obj:'новый объект добавлен в систему',
    del_obj:'объект был удален из системы',
    change_obj:'изменение описания объекта/характеристик',
    move_obj:'перенос объекта в другую организацию и/или к другому пользователю',
    rel_add_obj:'добавление смежника к объекту',
    bnd_add_obj:'добавление границы к объекту',
    bnd_change_obj:'изменение в границе объекта',
  
  },
  statusEnumEventPointColor:  {
    new_rec:'red',
    deny_rec:'orange',
    done_rec:'green',
    del_rec:'orange',
    new_msg:'orange',
    new_user:'red',
    del_user:'orange',
    block_user:'grey',
    end_user:'orange',
    new_org:'red',
    del_org:'orange',
    change_org:'grey',
    block_org:'orange',
    login:'grey',
    logout:'grey',
    open_obj:'grey',
    save_obj:'grey',
    new_obj:'red',
    del_obj:'orange',
    change_obj:'grey',
    move_obj:'orange',
    rel_add_obj:'red',
    bnd_add_obj:'red',
    bnd_change_obj:'grey',
  
  },
  eventShortPoints: // for tab bottom and page statistics
    {
      dataTime: "2021-01-26T02:00:00.000Z",
      amount:   10,
      data: {
        nodes: [
          {
            type: 'new_rec',  
            text: 'Создание нового события на объекте Mocke',
            date: "2021-01-26T02:00:00.000Z", 
            user: {
              userID: 14,  
              username: 'Томайлов А.В.'  
            }
            
          },
        ],
      },
    },
  eventPoints: 
    [{
      rec_id: 0,
      rec_obj_id:   2,
      rec_send_id:   24,
      rec_recip_id:   24,
      rec_descrip:   'Расположение дорожных знаков',
      rec_n:   24,
      rec_name:   'Дорожные знаки',
      rec_locat:   '24',// временно не используется
      rec_status:   2,
      rec_adres:   '24',// временно не используется
      rec_date:   2445654654,
      rec_image:   'image.png',
      rec_xy:   '55.768510, 37.524506',
      rec_read:   1,
      rec_smej_obj_id:   4, 
    },{
      rec_id: 1,
      rec_obj_id:   2,
      rec_send_id:   24,
      rec_recip_id:   24,
      rec_descrip:   'Расположение дорожных знаков',
      rec_n:   24,
      rec_name:   'Дорожные знаки',
      rec_locat:   '24',// временно не используется
      rec_status:   2,
      rec_adres:   '24',// временно не используется
      rec_date:   2445654654,
      rec_image:   'image.png',
      rec_xy:   '55.768510, 37.524506',
      rec_read:   1,
      rec_smej_obj_id:   4, 
    },{
      rec_id: 2,
      rec_obj_id:   2,
      rec_send_id:   24,
      rec_recip_id:   24,
      rec_descrip:   'Расположение дорожных знаков',
      rec_n:   24,
      rec_name:   'Дорожные знаки',
      rec_locat:   '24',// временно не используется
      rec_status:   2,
      rec_adres:   '24',// временно не используется
      rec_date:   2445654654,
      rec_image:   'image.png',
      rec_xy:   '55.768510, 37.524506',
      rec_read:   1,
      rec_smej_obj_id:   4, 
    },{
      rec_id: 3,
      rec_obj_id:   2,
      rec_send_id:   24,
      rec_recip_id:   24,
      rec_descrip:   'Расположение дорожных знаков',
      rec_n:   24,
      rec_name:   'Дорожные знаки',
      rec_locat:   '24',// временно не используется
      rec_status:   2,
      rec_adres:   '24',// временно не используется
      rec_date:   2445654654,
      rec_image:   'image.png',
      rec_xy:   '55.768510, 37.524506',
      rec_read:   1,
      rec_smej_obj_id:   4, 
    },
  ],
  messagesEventPoints: 
    [{
      msg_id: 0,
      msg_rec_id:   2,
      msg_text:   'Эти знаки не принадлежат нашей территории',
      msg_status:   2,
      msg_date:   5465464,
      msg_read:   1,
      msg_user_id:   2,
      msg_attch_id:   4,// временно не используется
      msg_fio:   'Vasilev F.F.',
      msg_file:   'cart.png',// временно не используется
      msg_geomet:   '2445654654'
    },{
      msg_id: 1,
      msg_rec_id:   2,
      msg_text:   'Эти знаки не принадлежат нашей территории',
      msg_status:   2,
      msg_date:   5465464,
      msg_read:   1,
      msg_user_id:   2,
      msg_attch_id:   4,// временно не используется
      msg_fio:   'Vasilev F.F.',
      msg_file:   'cart.png',// временно не используется
      msg_geomet:   '2445654654'
    },{
      msg_id: 2,
      msg_rec_id:   2,
      msg_text:   'Эти знаки не принадлежат нашей территории',
      msg_status:   2,
      msg_date:   5465464,
      msg_read:   1,
      msg_user_id:   2,
      msg_attch_id:   4,// временно не используется
      msg_fio:   'Vasilev F.F.',
      msg_file:   'cart.png',// временно не используется
      msg_geomet:   '2445654654'
    },],
  fetchDataForEventShortPoints: // for tab bottom and page statistics
    {
      limit: 20,
      startDate: "2021-02-06T02:00:00.000Z",
      endDate: "0",
      // endDate: "2021-02-11T22:00:00.000Z",
    },
  newEventsGraphOfStaticPage: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
    endEventsGraphOfStaticPage: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
    denyEventsGraphOfStaticPage: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
    usersOnlineGraphOfStaticPage: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      } 
    },
    newMessageGraphOfStaticPage: //events/amount
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      }
    },
    usersNewGraphOfStaticPage: //for statics page to third tab 
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      } 
    },
    usersDelGraphOfStaticPage: //for statics page to third tab
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      } 
    },
    usersBlockGraphOfStaticPage: //for statics page to third tab
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      } 
    },
    usersEndGraphOfStaticPage: //for statics page to third tab
    {
      startTime: '2021-01-26T02:00:00.000Z',
      endTime:   '2021-01-27T02:00:00.000Z',
      fragments:   24,
      data: {
        chartMax: 100,
        chartData: []
      } 
    },

  };

  

  export default ORGANIZATIONS_DATA;