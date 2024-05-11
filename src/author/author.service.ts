import { Injectable } from '@nestjs/common';
import authors from 'src/data/authors';

@Injectable()
export class AuthorService {
  async findById(id) {
    const results = authors.filter((item) => item.id == id);
    return results.length ? results[0] : null;
  }

  async findMany() {
    return authors;
  }
}
