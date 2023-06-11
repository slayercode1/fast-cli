import { Request, Response } from 'express';
import { Controller, Get, Post, Patch, Delete } from '@ghost_/fast-utils';

@Controller('/{{nameRoute}}')
export default class {{titleClass}}Controller {
  @Get('/')
  public find(req: Request, res: Response) {
    return res.send('User overview');
  }

  @Get('/:id')
  public findOne(req: Request, res: Response) {
    return res.send(`You are looking at the profile of ${req.params.name}`);
  }

  @Post('/')
  public create(req: Request, res: Response) {
    return res.send('Creating a new user');
  }

  @Patch('/:id')
  public update(req: Request, res: Response) {
    return res.send(`Updating the profile of ${req.params.name}`);
  }

  @Delete('/:id')
  public delete(req: Request, res: Response) {
    return res.send(`Deleting the profile of ${req.params.name}`);
  }
}