type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  nin: string;
  income: number;
  isVaccinated: boolean;
  addtional_info: Record<string, unknown>;
  certifications: string[];
};

export { TUser };
