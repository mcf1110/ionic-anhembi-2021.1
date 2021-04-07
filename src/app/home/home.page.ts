import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results = [
    {
      name: 'Dota 2',
      img: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/blog/play/dota_heroes.png',
      description: 'Dota é um jogo multiplayer, relaxante, para fazer muitas amizades online sem xingar os amiguinhos. A menos que você picke Pudge ou Technies na ranked. Aí não tem como te defender.'
    },
    {
      name: 'CS GO',
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1612812939',
      description: 'Jogo que a Valve se importa tanto que deixou rolar bug em campeonato e ficou de boas com isso. 1.6 era melhor;'
    },
    {
      name: 'The Witcher 3',
      img: 'https://i0.wp.com/pixelnerd.net.br/wp-content/uploads/2020/09/geralt_pc_ps5-xbox_series-x.jpg?resize=800%2C445&ssl=1',
      description: 'Só a DLC Blood & Wine já é melhor que Cyberpunk 2077.'
    },
    {
      name: 'Resident Evil',
      img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/04/resident-evil-village-lady-dimitrescu-criacao.jpg',
      description: 'Remake do 4 com lobisomem'
    }
  ]

  public questions = [
    {
      text: 'Qual gênero você gosta mais?',
      answers: ['MOBA', 'FPS', 'RPG', 'Ação']
    },
    {
      text: 'Qual ambientação você gosta mais?',
      answers: ['Fantasia', 'Realismo', 'Medieval', 'Terror']
    },
    {
      text: 'Qual console você gosta mais?',
      answers: ['PC', 'Switch', 'Xbox', 'Playstation']
    },
  ]

  public currentQuestion = 0;
  public selectedAnswer = null;

  private score = [0, 0, 0, 0];

  public resultIndex = null;

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  public nextQuestion() {
    this.currentQuestion++;
    this.score[this.selectedAnswer]++;
    this.selectedAnswer = null;

    this.showToast();

    if (this.currentQuestion >= this.questions.length) {
      this.calculateResult();
    }
  }

  public async confirmReset() {
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza?',
      message: 'O seu resultado será perdido para sempre!',
      buttons: [
        {
          text: 'Reiniciar',
          handler: () => this.reset()
        },
        'Cancelar'
      ]
    });
    alert.present();
  }

  private reset() {
    this.currentQuestion = 0;
    this.score = [0, 0, 0, 0];
  }

  private calculateResult() {
    // let index = 0;
    // for (let i = 1; i < this.score.length; i++) {
    //   if (this.score[i] > this.score[index]) {
    //     index = i;
    //   }
    // }
    const valorMaximo = Math.max(...this.score);
    const index = this.score.findIndex(s => s === valorMaximo);
    this.resultIndex = index;
  }

  private async showToast() {
    const toast = await this.toastCtrl.create({
      header: this.currentQuestion + ' de ' + this.questions.length + ' respondidas',
      duration: 500
    })
    toast.present()
  }

}
