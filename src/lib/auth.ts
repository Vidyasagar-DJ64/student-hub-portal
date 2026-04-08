// Simple auth simulation for the admin page
const AUTH_KEY = "student_portal_auth";

const VALID_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

export function login(username: string, password: string): boolean {
  if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
    sessionStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "true";
}
