// Check if user is authenticated

export function AuthGuard(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  next();
}

// Check if a user is logged in

export function ActiveUser(req) {
  if (req.user) {
    return req.user.username;
  }

  return "";
}
