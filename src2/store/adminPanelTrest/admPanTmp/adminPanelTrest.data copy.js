const ORGANIZATIONS_DATA = {
    objects: [
    {
      obj_id: 0,
      obj_name: 'ул. Беговая улица, д.4',
      obj_user_id: 7,
      obj_file: 'ул. Беговая улица, д.4',
      obj_reladves: 2,
      obj_asu_ods: 3,
      obj_status: 1,
      obj_asu_link: 'http://mttg.ru',
      obj_org_id: 2,
      obj_bnd_id: 5,
      obj_district: 7,
      obj_type: 'здание',
      obj_unite: 2,
      obj_mggt: 2,
    },
    {
      id: 1,
      name: 'Лубянская пл., д.2',
      comment: '',
      dateCreate: '26.12.20',
      organizationBalansHavesId: [1],
      smegObjectsId: [1],
      status: '',
      adress: 'ул. Хорошовское ш. 22',
    },
    ],
    organizations: [
    {
      id: 0,
      name: 'УК Хорошовская',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'ул. Хорошовское ш. 22',
      contactUsers: ['Петров В.М.','Веснушкин В.В.'],
      phones: ['+7 495 777-35-35','+7 495 777-35-46'],
    },
    {
      id: 1,
      name: 'ООО Детский мир',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'ул. Б.Лубянская, д.2',
      contactUsers: ['Петров Г.М.'],
      phones: ['+7 495 888-25-65'],
    },
    {
      id: 2,
      name: 'УК Беговая',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'ул. Беговая, д.22',
      contactUsers: ['Петров В.М.'],
      phones: ['+7 495 777-35-35'],
    },
    {
      id: 3,
      name: 'МИИГАиК',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'Горохов пер., д.3',
      contactUsers: ['Павлов К.М.'],
      phones: ['+7 495 444-25-65'],
    },
    {
      id: 4,
      name: 'Отель Арарат',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'ул. Неглинная, д.4',
      contactUsers: ['Попов Г.М.'],
      phones: ['+7 495 888-25-65'],
    },
    {
      id: 5,
      name: 'УК Б. Басманный',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'Горохов пер., д.5',
      contactUsers: ['Демьянов М.М.'],
      phones: ['+7 495 111-35-35'],
    },
    {
      id: 6,
      name: 'ТЦ Каледоском',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'Планерная пл., д.3',
      contactUsers: ['Резанов А.М.'],
      phones: ['+7 495 111-25-25'],
    },
    {
      id: 7,
      name: 'магазин Пятерочка',
      comment: 'гос',
      dateCreate: '16.09.2020',
      status: '',
      adress: 'Планерная пл., д.5',
      contactUsers: ['Свердлов К.М.'],
      phones: ['+7 495 661-85-23'],
    },
    ],
    points: {
      id: 1,
      title: 'Административная панель',
      routeName: 'points',
      currentPointId: 1,
      headerList: ['События в точках','Замечания по инициировании события','Организация ответчик события'],
      items: [
        {
          id: 1,
          namePoint: 'Беговая улица, 7',
          comment: 'Наложение границ',
          date: '16.01.2021',
          organizationInit: 1,
          organizationOtvet: 2,
          adminOtvetstvenniy: 'Елена', // ответственный админ за ведение события
          status: 'OK',
          chat: []
        },
        {
          id: 2,
          namePoint: 'Лубянская пл., д.2',
          comment: 'Установки знаков',
          date: '26.12.20',
          organizationInit: 3,
          organizationOtvet: 4,
          adminOtvetstvenniy: 'Елена',
          status: 'proccess',
          chat: []
        },
        {
          id: 3,
          namePoint: 'Смоленская пл., д.3',
          comment: 'Перенос забора',
          date: '16.01.2021',
          organizationInit: 5,
          organizationOtvet: 6,
          adminOtvetstvenniy: 'Ольга',
          status: 'OK',
          chat: []
        },
        {
          id: 4,
          namePoint: 'Арбатская пл., д.31',
          comment: 'Проблемы светофоров',
          date: '12.11.2020',
          organizationInit: 1,
          organizationOtvet: 2,
          adminOtvetstvenniy: 'Елена',
          status: 'OK',
          chat: []
        },
        
      ]
    },
    adminsTrest: {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    adminUsers: [
      {
        id: 0,
        name: 'Vasiliya',
        lastName: 'Orlov',
        type: 'admin',
        status: 'OK',
        organisation: 'МГГТ',
        email: 'mggt@gmail.com',
      },
      {
        id: 1,
        name: 'Peter',
        lastName: 'Vasiliev',
        type: 'admin',
        status: 'OK',
        organisation: 'МГГТ',
        email: 'mggt@gmail.com',
      },

    ],
    organizationsUsers: [
      {
        id: 0,
        name: 'Sanya',
        lastName: 'Smolenski',
        type: 'guest',
        status: 'OK',
        organisation: 'УК Беговая, д.4',
        email: 'begovaya@gmail.com',
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
        dataTime: '16:20 (21.01.21)',
        data:  {
          online: 100,
          operators: 20,
          users: 80,
        }
      },
    countOGH: 
      {
        dataTime: '16:20 (21.01.21)',
        data:  {
          objTotal: 100,
          objMggt: 30,
          objRelatives: 70,
        }
      },
    countUsersGraph: 
      {
        startTime: '08:20 (21.01.21)',
        endTime:   '16:20 (21.01.21)',
        fragments:   24,
        data: {
          Mocke: 'Mocke',
          chartMax: 100,
          chartData: [0,11,0,30,0,0,22,0,24]
        }
      },
    countEventGraph: 
      {
        startTime: '08:20 (21.01.21)',
        endTime:   '16:20 (21.01.21)',
        fragments:   24,
        data: {
          chartMax: 100,
          chartData: [8,11,17,22,38,25,22,37,24]
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
    eventShortPoints: 
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
      },]

  };

  

  export default ORGANIZATIONS_DATA;