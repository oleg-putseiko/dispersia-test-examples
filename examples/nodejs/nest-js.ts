import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Dispersia } from 'dispersia';

@Injectable()
export class DispersiaService {
  private dispersia: Dispersia;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get('DISPERSIA_API_KEY');

    this.dispersia = new Dispersia(apiKey);
  }

  async send() {
    const { data, error } = await this.dispersia.messages.send({
      templateId: 'tg_XXXXXXXXX',
      data: {
        name: 'Jane Doe',
      },
    });

    if (error) throw new BadRequestException(error);

    return data;
  }
}
