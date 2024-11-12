import {Container} from 'inversify';
import cacheProvider from "./data/datasource/cache-provider";
import localProvider from "./data/datasource/local-provider";
import remoteProvider from "./data/datasource/remote-provider";
import repositoryProvider from "./data/repository";
import useCaseProvider from "./domain/use-case";
import {Types} from "./container.type";

const container = new Container();

cacheProvider(container, Types);
localProvider(container, Types);
remoteProvider(container, Types);
repositoryProvider(container, Types);
useCaseProvider(container, Types);

export default container;
