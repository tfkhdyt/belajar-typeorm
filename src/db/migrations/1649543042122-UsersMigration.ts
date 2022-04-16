import { MigrationInterface, QueryRunner } from 'typeorm'

export class UsersMigration1649543042122 implements MigrationInterface {
  name = 'UsersMigration1649543042122'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "pets" character varying`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "pets"`)
  }
}
