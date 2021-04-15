import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

interface Result {
  title: string;
  description: string;
  img: string;
}

interface Question {
  text: string;
  options: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results: Result[] = [
    {
      title: 'DOTA 2',
      description: 'Um jogo online em que você passa pouca raiva, contanto que ninguém picke Pudge ou Techies na ranked. Melhor que LOL.',
      img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png'
    },
    {
      title: 'Counter-Strike: Global Offensive',
      description: 'Um jogo que a Valve se importa tanto que deixou bug rolar em campeanato e ficou de boa. 1.6 era melhor.',
      img: 'https://img.ibxk.com.br/2021/04/13/cs-go-13181322525349.png'
    },
    {
      title: 'Dark Souls',
      description: 'Um jogo pra relaxar.',
      img: 'https://cdn.awsli.com.br/600x700/1610/1610163/produto/62282768/poster-dark-souls-3-b-2159bacc.jpg'

    },
    {
      title: 'Sonic',
      description: 'Por incrível que pareça, às vezes é mais estressante que Dark Souls.',
      img: 'https://poltronanerd.com.br/wp-content/uploads/2020/09/Sonic.png'
    }
  ]

  public questions: Question[] = [
    {
      text: 'Qual gênero de jogo você gosta mais?',
      options: ['MOBA', 'FPS', 'RPG', 'Plataforma']
    },
    {
      text: 'Qual plataforma de jogo você gosta mais?',
      options: ['PC', 'PS5', 'XBox', 'Switch']
    },
    {
      text: 'Qual ambientação você gosta mais?',
      options: ['Fantasia', 'Realismo', 'Medieval', 'Pixel Art']
    },
  ]

  public score = [0, 0, 0, 0];
  public currentQuestion = 0;
  public selectedAnswer = null;
  public resultIndex;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  public nextQuestion() {
    this.score[this.selectedAnswer]++;
    this.currentQuestion++;
    this.selectedAnswer = null;
    this.showToast();
    if (this.currentQuestion >= this.questions.length) { //terminei
      this.calculateResult();
    }
  }

  public async confirmReset() {
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: 'O seu resultado será perdido para sempre!!',
      buttons: [
        'Cancelar',
        {
          text: 'Tenho certeza',
          handler: () => this.reset()
        }
      ]
    });
    alert.present();
  }

  private reset() {
    this.currentQuestion = 0;
    this.score = [0, 0, 0, 0];

  }

  private calculateResult() {
    // let resultIndex = 0;
    // for (let i = 0; i < this.score.length; i++) {
    //   if (this.score[i] > this.score[resultIndex]) {
    //     resultIndex = i;
    //   }
    // }
    const maxScore = Math.max(...this.score);
    this.resultIndex = this.score.findIndex(s => s === maxScore);
  }

  private async showToast() {
    const toast = await this.toastController.create({
      message: `${this.currentQuestion} de ${this.questions.length} respondidas`,
      duration: 500
    })
    toast.present();
  }

}
