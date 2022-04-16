import { MigrationInterface, QueryRunner } from 'typeorm'

export class UsersMigration1649543200026 implements MigrationInterface {
  name = 'UsersMigration1649543200026'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dob"`)
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "pets"`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "pets" character varying`)
    await queryRunner.query(`ALTER TABLE "user" ADD "dob" TIMESTAMP`)
  }
}
