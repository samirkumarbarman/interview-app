import jwt from 'jsonwebtoken';
import { verifyCandidate, verifyInterviewer } from '../services/authServices.js';

export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        let user;
        if (decoded.role === 'candidate') {
            user = await verifyCandidate(token);
        } else if (decoded.role === 'interviewer') {
            user = await verifyInterviewer(token);
        } else {
            return res.status(401).json({ message: 'Invalid token: Role not recognized' });
        }

        if (!user) {
            return res.status(401).json({ message: 'Invalid token: User not found' });
        }

        req.user = decoded;
        req.user.userData = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export const authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.userData.role)) {
            return res.status(403).json({ message: 'Access Denied: Insufficient Permissions' });
        }
        next();
    };
};