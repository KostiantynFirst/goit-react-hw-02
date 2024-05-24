import { NotificationWrapper } from "./Notification.styled";

const Notification = ({ message }) => {
    return (
      <NotificationWrapper>
        {message}
      </NotificationWrapper>
    );
};
  
export default Notification