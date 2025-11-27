export enum ViewState {
  HOME = 'HOME',
  ARCHITECTURE = 'ARCHITECTURE',
  CODE_DOCS = 'CODE_DOCS',
  VALUE_ROADMAP = 'VALUE_ROADMAP'
}

export interface NavItem {
  id: ViewState;
  label: string;
}

export interface BudgetItem {
  name: string;
  value: number;
  description: string;
  [key: string]: any;
}