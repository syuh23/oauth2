import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
} from 'typeorm';

@Entity('subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    userId: number;

    @Column({ type: 'int', nullable: false })
    planId: number;

    @Column({ type: 'varchar', length: 20, nullable: false })
    status: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    startDate: Date;
}