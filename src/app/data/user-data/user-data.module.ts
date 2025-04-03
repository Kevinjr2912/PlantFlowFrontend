import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '../../domain/repositories/User/user.repository';
import { CreateUserUseCase } from '../../domain/useCases/User/user-create.useCase';
import { UserImplementationRepository } from './repositories/user-implementation.repository';




const createUserUseCaseFactory = (userRepo : UserRepository) => new CreateUserUseCase(userRepo)

export const createUsertUseCaseProvider = {
  provide: CreateUserUseCase,
  useFactory: createUserUseCaseFactory,
  deps: [UserRepository]
}


@NgModule({
  providers: [
    createUsertUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository}
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserDataModule { }