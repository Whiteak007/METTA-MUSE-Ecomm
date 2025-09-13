import jwt from 'jsonwebtoken';

export const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: "Unauthorized: JWT token is required." });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: "Unauthorized: Token format is invalid." });
    }

    try {
        const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedJwt;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Unauthorized: Invalid or expired token." });
    }
};