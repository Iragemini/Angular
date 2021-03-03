import M from 'materialize-css';

const showToast = (message: string, duration: number): void => {
  console.log(message);
  M.toast({ html: message }, duration);
};

export default showToast;
