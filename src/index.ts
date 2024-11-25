import { Article } from './content/Article';
import { Versioned } from './version/Versioned';
import { createVersion } from './version/VersionControl';
import { articleValidator } from './validation/ArticleValidator';

const initialArticle: Versioned<Article> = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'published',
  title: 'A Comprehensive Guide to Web Development',
  body: 'this article covers the basics of web development, including front-end and back-end technologies',
  author: 'Jonny Coin',
  tags: ['Web Development', 'JavaScript'],
  version: 2,
  previousVersions: []
};

const updatedArticle = createVersion(initialArticle);

const validationResult = articleValidator.validate(updatedArticle);

console.log('New Version:', updatedArticle);
console.log('Validation Result:', validationResult);