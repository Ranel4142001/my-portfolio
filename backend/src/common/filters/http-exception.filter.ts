import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  // 1. Initialize the Logger
  private readonly logger = new Logger('HttpException');

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
    const status = exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(
      `Method: ${request.method} | URL: ${request.url}`,
      exception instanceof Error ? exception.stack : JSON.stringify(exception)
    );

    const exceptionResponse = exception instanceof HttpException 
        ? exception.getResponse() 
        : { message: 'Internal server error' };

    const message = typeof exceptionResponse === 'object'
        ? (exceptionResponse as any).message || 'Something went wrong'
        : exceptionResponse;

    // 3. SEND THE CLEAN RESPONSE TO THE USER
    response.status(status).json({
      success: false,
      message: Array.isArray(message) ? message[0] : message,
      data: null,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}