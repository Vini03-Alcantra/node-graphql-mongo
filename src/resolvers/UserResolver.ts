import {Query, Resolver} from "type-graphql";

@Resolver()
export class UserResolve {
    
    @Query(() => String)
    async users(){
        return "Hello World"
    }
}

