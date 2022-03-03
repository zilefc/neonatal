import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

@Entity('mothers')
class Mother {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	bi: string;

	@Column()
	name: string;

	@Column()
	father: string;

	@Column()
	mother: string;

	@Column()
	birthday: Date;

	@Column()
	maritalStatus: string;

	@Column()
	work: string;

	@Column()
	workplace: string;

	@Column()
	home: string;

	@Column()
	district: string;

	@Column()
	neighborhood: string;

	@Column()
	avenue: string;

	@Column()
	phone: number;

	@Column()
	referencePlace: string;

	@Column()
	referencePerson: string;

	@Column()
	referenceRelation: string;

	@Column()
	referencePhone: number;

	@ManyToOne(() => User)
	register: User;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}

export { Mother };
