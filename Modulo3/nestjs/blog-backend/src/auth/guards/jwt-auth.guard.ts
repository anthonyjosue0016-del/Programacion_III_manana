import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
@UseGuards(JwtAuthGuard)
export class ProtectedController {
  @Get()
  findProtected() {
    return { message: 'Acceso permitido con Token válido' };
  }
}
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
