import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('report/:type')
export class AppController{
  @Get()
  getIncome(){
    return []

  }
  @Get(':id')
  getIncomeById(){
    return []
  }
  @Post()
  createIncome(){
    return[]
  }
  @Put(':id')
  updateIncome(){
    return[]
  }
  @Delete(':id')
  deleteIncome(){
    return[]
  }
}
