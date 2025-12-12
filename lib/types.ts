export type BranchType = 
  | 'feature'
  | 'bugfix'
  | 'hotfix'
  | 'docs'
  | 'style'
  | 'refactor'
  | 'performance'
  | 'test'
  | 'build'
  | 'ci'
  | 'chore'
  | 'revert';

export type Separator = '-' | '_';

export interface BranchConfig {
  type: BranchType;
  description: string;
  ticketId?: string;
  separator: Separator;
}

export const branchTypes: Array<{ value: BranchType; label: string; description: string }> = [
  { value: 'feature', label: 'feature', description: 'A new feature' },
  { value: 'bugfix', label: 'bugfix', description: 'A bug fix' },
  { value: 'hotfix', label: 'hotfix', description: 'An urgent bug fix' },
  { value: 'docs', label: 'docs', description: 'Documentation only changes' },
  { value: 'style', label: 'style', description: 'Code style changes (formatting, etc.)' },
  { value: 'refactor', label: 'refactor', description: 'Code refactoring' },
  { value: 'performance', label: 'performance', description: 'Performance improvements' },
  { value: 'test', label: 'test', description: 'Adding or updating tests' },
  { value: 'build', label: 'build', description: 'Build system or dependencies' },
  { value: 'ci', label: 'ci', description: 'CI configuration changes' },
  { value: 'chore', label: 'chore', description: 'Other changes' },
  { value: 'revert', label: 'revert', description: 'Revert a previous commit' },
];

export const separators: Array<{ value: Separator; label: string }> = [
  { value: '-', label: 'Hyphen (-)' },
  { value: '_', label: 'Underscore (_)' },
];
