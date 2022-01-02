import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiEntity } from './ApiEntity';

export class BaseApiEntity implements ApiEntity {
  @Expose()
  @Type(() => String)
  id = '';

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  createdAt?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  createdBy?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  updatedAt?: string;

  @Expose()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  updatedBy?: string;
}
