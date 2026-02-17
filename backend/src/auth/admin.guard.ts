// backend/src/auth/admin.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const adminSecret = request.headers['x-admin-secret'];
    const serverSecret = process.env.ADMIN_SECRET_KEY;

    // 1. Check if the server actually has a secret set
    if (!serverSecret) {
      console.error("❌ ADMIN_SECRET_KEY is missing in .env!");
      throw new UnauthorizedException('Server configuration error');
    }

    // 2. Strict comparison
    if (adminSecret !== serverSecret) {
      throw new UnauthorizedException('Invalid Admin Secret');
    }
    
    return true; 
  }
}