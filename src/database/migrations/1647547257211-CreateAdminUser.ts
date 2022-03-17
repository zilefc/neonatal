import { MigrationInterface, QueryRunner } from 'typeorm';
import User from '../../app/models/User';

export class CreateAdminUser1647547257211 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into(User)
			.values({
				name: 'Admin',
				email: 'admin@neonatal.com',
				password: '123456'
			})
			.execute();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager
			.createQueryBuilder()
			.delete()
			.from(User)
			.where({ email: 'admin@neonatal.com' })
			.execute();
	}
}
