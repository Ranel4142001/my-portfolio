import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// This interface defines the "Shape" of our professional response
export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data) => ({
        success: statusCode >= 200 && statusCode < 300,
        message: data?.message || 'Request successful',
        // If 'data' contains a 'message' property, we extract it so it's not duplicated
        data: data?.message ? { ...data, message: undefined } : data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}