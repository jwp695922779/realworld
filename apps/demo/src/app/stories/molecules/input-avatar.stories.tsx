export default {
  title: 'Molecules/Input Avatar',
};

export const InputAvatar = () => (
  <fieldset className="rl-file-form-group">
    <label>Avatar</label>
    <div className="rl-file-form-group__input-avatar">
      <img className="rl-avatar-xl" src="avatar.png" alt="user avatar" />
      <button type="button" className="rl-btn-primary">
        Change
      </button>
      <button type="button" className="rl-btn-warn">
        Remove
      </button>
    </div>
    <input type="file" className="rl-input-file" />
  </fieldset>
);
