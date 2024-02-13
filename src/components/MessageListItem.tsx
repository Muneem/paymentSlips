import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.fromDate}
          <span className="date">
            <IonNote>{message.toDate}</IonNote>
          </span>
        </h2>
        <h3>ID: {message.id}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
