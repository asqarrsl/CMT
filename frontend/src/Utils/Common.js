// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
}
// return the token from the session storage
export const getRole = () => {
  return localStorage.getItem('user_role') || null;
}
// return the token from the session storage
export const getUserId = () => {
  return localStorage.getItem('user_id') || null;
}
// return the token from the session storage
export const getUsername = () => {
  return localStorage.getItem('user_username') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('user_id', user._id);
  localStorage.setItem('user_role', user.role);
  localStorage.setItem('user_username', user.username);

  console.log(localStorage.getItem('user_username') );
  console.log(localStorage.getItem('user_id') );
  console.log(localStorage.getItem('user_id') );
}