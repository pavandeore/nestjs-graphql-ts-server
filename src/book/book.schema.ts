import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/author/author.schema';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field(() => Author)
  author: Author | number;
}

@InputType()
export class CreateBookInput {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: number;
}

@InputType()
export class FindBookInput {
  @Field(() => Int)
  id: number;
}
