import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import View from '../../baseClasses/View';
import ChatsListController, { Chat } from './chats.controller';

export default class chatsPageChatsPage extends View {
  chatList: ChatList;
  chatContacts: Chat[];
  constructor() {
    super();
    this.chatContacts = ChatsListController.getChatsData();
    this.chatList = new ChatList({ chatContacts: this.chatContacts });
  }
  render() {
    View.registerPartial('chatsList', this.chatList.render());
    return View.generateView(notCompiledTemplate);
  }
}
