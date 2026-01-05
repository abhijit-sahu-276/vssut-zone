import Notification, { NotificationType } from './Notification';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  message: string;
}

interface NotificationContainerProps {
  notifications: NotificationItem[];
  onClose: (id: string) => void;
}

const NotificationContainer = ({ notifications, onClose }: NotificationContainerProps) => {
  return (
    <div className="fixed top-24 right-4 z-50 space-y-3 max-w-sm w-full">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          type={notification.type}
          message={notification.message}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;
