import {
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity('users')
class User {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 8);
	}
}

export default User;
