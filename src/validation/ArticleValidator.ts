import { Article } from '../content/Article';
import { Validator, ValidationResult } from './Validator';

export const articleValidator: Validator<Article> = {
  validate(data: Article): ValidationResult {
    const errors: string[] = [];
    if (!data.title) errors.push("Title cannot be empty");
    if (!data.body) errors.push("Body cannot be empty");
    return { isValid: errors.length === 0, errors };
  },
};
