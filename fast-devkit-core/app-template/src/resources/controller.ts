import { Controller, Get, Post, Delete, Patch, BodyCorps } from '@fast/utils';
import { Request, Response } from 'express';


@Controller()
export class ExampleController {
  @Post('/')
  create(request: Request, response: Response, @BodyCorps() body: any) {
    console.log(body);
    return response.send('This action adds a new items');
  }

  @Get('/')
  findAll(request: Request, response: Response) {
    return response.send(`This action returns all items`);
  }

  @Get('/:id')
  findOne(request: Request, response: Response) {
    return response.send(`This action returns a ${request.params.id} items`);
  }

  @Patch('/:id')
  update(request: Request, response: Response) {
    return response.send(`This action updates a ${request.params.id} items`);
  }

  @Delete('/:id')
  remove(request: Request, response: Response) {
    return response.send(`This action removes a ${request.params.id} items`);
  }
}
