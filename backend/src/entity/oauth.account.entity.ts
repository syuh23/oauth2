import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
} from 'typeorm';

@Entity('oauth_accounts')
export class OauthAccount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20, nullable: false })
    provider: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    providerUserId: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    providerEmail: string;

    // access, refresh token, expires 필요 ??

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    // updatedAt 필요 ??
}