export default class ChatsService {
  static getChats() {
    return [
      {
        id: 123,
        title: 'my-chat',
        avatar: '/123/avatar1.jpg',
        unread_count: 15,
        first_name: 'Petya',
        second_name: 'Pupkin',
        time: '14:22',
        content: 'this is message content',
        // last_message: {
        //   user: {
        //     first_name: 'Petya',
        //     second_name: 'Pupkin',
        //     avatar: '/path/to/avatar.jpg',
        //     email: 'my@email.com',
        //     login: 'userLogin',
        //     phone: '8(911)-222-33-22',
        //   },
        //   time: '2020-01-02T14:22:22.000Z',
        //   content: 'this is message content',
        // },
      },
    ];
  }
}