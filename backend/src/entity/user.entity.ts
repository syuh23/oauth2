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
    id: number;

    @Column({ type: 'varchar', length: 20, unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false }) // Hashed password (bcrypt)
    password: string;

    // name이 필요할까? -> 닉네임으로 변경
    @Column({ type: 'varchar', length: 20, nullable: false })
    nickname: string;

    @Column({ type: 'varchar', length: 10, nullable: false })
    status: string; // 'ACTIVE', 'BLOCKED', 'DELETED' 등으로 관리

    @CreateDateColumn({ type: 'timestamp', nullable: false }) // default: () => 'CURRENT_TIMESTAMP' 디폴트 설정
    createdAt: Date;

    @DeleteDateColumn({ type: 'timestamp' }) // nullable: true - 디폴트 설정
    deletedAt: Date | null; // Date 아니면 null 타입만 허용

    // profile_img
}