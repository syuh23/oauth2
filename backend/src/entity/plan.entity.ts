import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
} from 'typeorm';

@Entity('plans')
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    // max room, max member
}