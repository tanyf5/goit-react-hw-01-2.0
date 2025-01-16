import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div className={css.user}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@p{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.itemValue}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.itemValue}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
