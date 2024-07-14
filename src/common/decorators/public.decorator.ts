import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata(process.env.SECRET_KEY, true);
