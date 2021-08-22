import { Entity, Column } from "typeorm";

import { BaseModel } from "./BaseModel";

@Entity("user")
export class User extends BaseModel {
  @Column({
    unique: true,
    length: 10,
    name: "national_identification_num"
  })
  nin: string;

  @Column({
    type: "numeric"
  })
  income: number;

  @Column({
    default: false
  })
  isVaccinated: boolean;

  @Column({
    type: "simple-json",
    nullable: true
  })
  addtional_info: {
    age: number;
    address: string;
  };

  @Column({
    type: "simple-array",
    default: []
  })
  certifications: string[];
}
