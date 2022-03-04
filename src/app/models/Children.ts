import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { Mother } from './Mother';
import User from './User';

@Entity()
class Children {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ name: 'hospital_name' })
	hospitalName: string;

	@Column({ name: 'hospital_number' })
	hospitalNumber: number;

	@Column()
	sex: string;

	@Column({ name: 'father_name' })
	fatherName: string;

	@Column()
	home: string;

	@Column()
	phone: number;

	@ManyToOne(() => Mother)
	@JoinColumn({
		name: 'mother_id',
		referencedColumnName: 'id'
	})
	mother: Mother;

	@ManyToOne(() => User)
	@JoinColumn({
		name: 'register_id',
		referencedColumnName: 'id'
	})
	register: User;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export { Children };
