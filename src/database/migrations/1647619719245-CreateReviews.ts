import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateReviews1647619719245 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

      await queryRunner.createTable(new Table({
        name: 'reviews',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'rating',
            type: 'integer',
          },
          {
            name: 'comment',
            type: 'varchar',
          },
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('reviews');
      await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
