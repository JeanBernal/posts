import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../app/config';

export class AuthMiddleware {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      req.body.password = hashedPassword;

      const secretKey = config.jwtSecret;
      const token = jwt.sign({ email: req.body.email }, secretKey, { expiresIn: '1h' });
      res.locals.token = token;

      next();
    } else {
      next();
    }
    
  }
  async authenticate(password: string, user: any) {
    
    if (await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;      
      const secretKey = config.jwtSecret ;
      return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
    }; 
    return null;
  }

  verifyToken = (req: any, res: any, next: any) => {
    const token = req.headers.authorization;    
    if (!token) {
      return res.status(401).json({ message: 'No authentication token provided' });
    }
  
    try {
      
      const decodedToken: any = jwt.verify(token, config.jwtSecret);
      const email = decodedToken.email;
      req.email = email;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
  
}
