import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

class JobCategory {
}

@Entity()
export class Skabeloner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    namn: string;

    @Column()
    description: string;

    @Column()
    colorCode: string;
    @Column()
    color: string;
    @Column("text")
    fluxDeviation: number;

    @Column()
    modulusDeviation: number;
    @Column()
    defaultCategory: JobCategory;
    @Column()
    active: number;
    @Column()
    createDate : string;
    @Column()
    createInitials : string;
    @Column()
    lastUpdateDate : Date;
    @Column()
    lastUpdateInitials : string;
/* @OneToOne(type => CatalogTimestamp, timestamp => timestamp.catalog,{
        cascade: true,
    })
    timestamp: CatalogTimestamp;*/

}