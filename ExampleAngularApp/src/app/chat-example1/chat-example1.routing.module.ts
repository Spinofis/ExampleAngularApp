import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";

const routes = [
    {
        path: '',
        component: ChatComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatExample1RoutingModule {

}