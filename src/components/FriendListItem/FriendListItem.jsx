import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={avatar} width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.green : css.red}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
