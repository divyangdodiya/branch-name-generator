import { BranchConfig } from './types';

/**
 * Generates a branch name based on conventional commits
 * @param config - Branch configuration object
 * @returns Generated branch name
 */
export function generateBranchName(config: BranchConfig): string {
  const { type, description, ticketId, separator } = config;

  // Clean and normalize the ticket ID if provided
  const normalizedTicketId = ticketId
    ?.trim()
    .toUpperCase()
    .replace(/[^A-Z0-9-_]/g, '') // Keep only alphanumeric, hyphens, and underscores
    || '';

  if (!description.trim()) {
    return normalizedTicketId ? `${type}/${normalizedTicketId}` : `${type}/`;
  }

  // Clean and normalize the description
  const normalizedDescription = description
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-_]/g, '') // Remove special characters
    .replace(/\s+/g, separator) // Replace spaces with separator
    .replace(new RegExp(`${separator}+`, 'g'), separator) // Remove duplicate separators
    .replace(new RegExp(`^${separator}|${separator}$`, 'g'), ''); // Remove leading/trailing separators

  if (!normalizedDescription) {
    return normalizedTicketId ? `${type}/${normalizedTicketId}` : `${type}/`;
  }

  // Build branch name with ticket ID if provided
  if (normalizedTicketId) {
    return `${type}/${normalizedTicketId}${separator}${normalizedDescription}`;
  }

  return `${type}/${normalizedDescription}`;
}

/**
 * Validates if a branch name follows conventional commit standards
 * @param branchName - Branch name to validate
 * @returns Validation result
 */
export function validateBranchName(branchName: string): {
  isValid: boolean;
  message: string;
} {
  if (!branchName || branchName.trim().length === 0) {
    return { isValid: false, message: 'Branch name cannot be empty' };
  }

  const validTypes = ['feature', 'bugfix', 'hotfix', 'docs', 'style', 'refactor', 'performance', 'test', 'build', 'ci', 'chore', 'revert'];
  const startsWithValidType = validTypes.some(type => branchName.startsWith(`${type}/`));

  if (!startsWithValidType) {
    return { isValid: false, message: 'Branch name must start with a valid type' };
  }

  return { isValid: true, message: 'Valid branch name' };
}
