import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    DeleteDateColumn 
} from 'typeorm';

@Entity('users') // auth는 나중에 헷갈릴 것 같아서 users로 테이블명 변경
export class User {
    @PrimaryGeneratedColumn() // PK
    userId: number;

    @Column({ type: 'varchar', length: 20, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 }) // Hashed password (bcrypt)
    password: string;

    @Column({ type: 'varchar', length: 20 })
    name: string;

    @CreateDateColumn({ type: 'timestamp' }) // default: () => 'CURRENT_TIMESTAMP' 디폴트 설정
    createdAt: Date;

    @DeleteDateColumn({ type: 'timestamp' }) // nullable: true - 디폴트 설정
    deletedAt: Date | null; // Date 아니면 null 타입만 허용
}