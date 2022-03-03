import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

@Entity('mothers')
class Mother {
	@PrimaryGeneratedColumn()
	id: number;

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
	@JoinColumn({
		name: 'register_id',
		referencedColumnName: 'id'
	})
	register: User;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}

export { Mother };
