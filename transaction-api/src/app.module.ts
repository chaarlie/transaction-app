import { Module } from '@nestjs/common';

import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction/transaction.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('TRANSACTION_DB_HOST'),
        port: +configService.get('TRANSACTION_DB_PORT'),
        username: configService.get('TRANSACTION_DB_USER'),
        password: configService.get('TRANSACTION_DB_PASSWORD'),
        database: configService.get('TRANSACTION_DB_NAME'),
        entities: [TransactionEntity],
        synchronize: true,
      }),
      dataSourceFactory: async (options: DataSourceOptions) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class AppModule {}
