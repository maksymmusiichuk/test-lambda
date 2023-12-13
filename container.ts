import 'reflect-metadata';

import { TOKENS } from 'Config/tokens';
import { DefineTypes } from 'Services/defineTypes';
import { MapperTypes } from 'Services/mapperTypes';
import { Container } from 'inversify';


const container = new Container({ autoBindInjectable: true });

container
    .bind<DefineTypes>(TOKENS.DEFINE_TYPES_SERVICE_TOKEN)
    .to(DefineTypes)
    .inSingletonScope();

container
    .bind<MapperTypes>(TOKENS.MAPPER_TYPES_SERVICE_TOKEN)
    .to(MapperTypes)
    .inSingletonScope();


export default container;
