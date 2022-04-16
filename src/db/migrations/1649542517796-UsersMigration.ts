import { MigrationInterface, QueryRunner } from 'typeorm'

export class UsersMigration1649542517796 implements MigrationInterface {
  name = 'UsersMigration1649542517796'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "dob" TIMESTAMP`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dob"`)
  }
}
