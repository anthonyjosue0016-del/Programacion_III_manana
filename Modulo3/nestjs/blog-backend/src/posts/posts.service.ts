import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Category } from '../categories/category.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const category = await this.categoryRepository.findOne({ where: { id: createPostDto.categoryId } });
    if (!category) throw new NotFoundException('Category not found');
    const post = this.postRepository.create({
      title: createPostDto.title,
      content: createPostDto.content,
      category,
    });
    return this.postRepository.save(post);
  }

  async findAll() {
    return this.postRepository.find();
  }

  async findOne(id: string) {
    return this.postRepository.findOne({ where: { id } });
  }

  async update(id: string, updateDto: UpdatePostDto) {
    const post = await this.findOne(id);
    if (!post) return null;
    if (updateDto.categoryId) {
      const cat = await this.categoryRepository.findOne({ where: { id: updateDto.categoryId } });
      if (!cat) throw new NotFoundException('Category not found');
      post.category = cat;
    }
    Object.assign(post, updateDto);
    return this.postRepository.save(post);
  }

  async remove(id: string) {
    const post = await this.findOne(id);
    if (!post) return null;
    return this.postRepository.remove(post);
  }
}
