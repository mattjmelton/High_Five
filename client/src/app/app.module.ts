import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { SocketIoModule, SocketIoConfig} from 'ng6-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { PlayComponent } from './play/play.component';
import { HandComponent } from './hand/hand.component';


// const config: SocketIoConfig = {url: 'http://localhost:8000', options:{}};

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // SocketIoModule.forRoot(config)  
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
