export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log('🔐 Required roles:', roles);
    console.log('👤 User role:', req.user?.role);
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient role' });
    }
    next();
  };
};
