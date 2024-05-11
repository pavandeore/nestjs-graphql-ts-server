import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Book, CreateBookInput, FindBookInput } from './book.schema';
import { BookService } from './book.service';
import { Author } from 'src/author/author.schema';
import { AuthorService } from 'src/author/author.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  @Query(() => [Book])
  async books() {
    return this.bookService.findMany();
  }

  @Query(() => [Book])
  async book(@Args('input') { id }: FindBookInput) {
    return this.bookService.finById(id);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
