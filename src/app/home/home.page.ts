import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

interface Result {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results: Result[] = [
    {
      title: 'Dota 2',
      img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png',
      description: 'Você deveria jogar esse jogo porque ele é bem relaxante e você não passa raiva jamais.'
    },
    {
      title: 'CSGo',
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1612812939',
      description: 'O jogo que a Valve mais adora, tanto que deixa rolar bug em campeonato.'
    },
    {
      title: 'Dark Souls',
      img: 'https://ibcdn.canaltech.com.br/aUPi1v766Gam3bKKVzdwUKLS_mA=/0x0:2344x1319/512x288/smart/i331132.jpeg',
      description: 'Você deveria jogar esse jogo porque ele é bem relaxante e você não passa raiva jamais.'
    },
    {
      title: 'Minecraft',
      img: 'https://cdn.ome.lt/rC3ueOoknzPOWor2iQuMxEAcSbg=/1200x630/smart/extras/conteudos/minecraft-2_uo5KBp6.jpg',
      description: 'Melhor que Roblox.'
    }
  ];

  public questions = [
    {
      text: 'Qual gênero você gosta mais?',
      options: ['MOBA', 'FPS', 'RPG de Ação', 'Sobrevivência']
    },
    {
      text: 'Qual ambientação você gosta mais?',
      options: ['Fantasia', 'Realismo', 'Medieval', 'Cubos']
    },
    {
      text: 'Qual console você gosta mais?',
      options: ['PC', 'Xbox', 'Playstation', 'Mobile']
    },
  ];

  public score = [0, 0, 0, 0];

  public currentQuestion = 0;
  public selectedOption = null;
  public resultIndex = null;

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) {

  }

  public async confirmResetQuiz() {
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza?',
      message: 'Seu resultado será perdido!',
      buttons: [
        {
          text: 'Refazer quiz',
          handler: () => this.resetQuiz()
        },
        'Ops! Me enganei'
      ]
    });
    alert.present();
  }

  public nextQuestion() {
    this.score[this.selectedOption]++;
    this.currentQuestion++;
    this.selectedOption = null;

    this.showToast();

    if (this.currentQuestion >= this.questions.length) {
      this.calculateResult();
    }
  }

  private resetQuiz() {
    this.score = [0, 0, 0, 0];
    this.currentQuestion = 0;
  }

  private calculateResult() {
    // let indiceMaximo = 0;
    // for (let i = 1; i < this.score.length; i++) {
    //   if (this.score[i] > this.score[indiceMaximo]) {
    //     indiceMaximo = i;
    //   }
    // }
    const valorMaximo = Math.max(...this.score);
    const indiceMaximo = this.score.findIndex(s => s === valorMaximo);

    this.resultIndex = indiceMaximo;
  }

  private async showToast() {
    const toast = await this.toastCtrl.create({
      header: this.currentQuestion + '/' + this.questions.length + ' perguntas respondidas',
      duration: 500
    });
    toast.present();
  }

}
