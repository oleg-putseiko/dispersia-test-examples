import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DispersiaClient } from 'dispersia';

@Injectable()
export class DispersiaService {
  private client: DispersiaClient;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get('DISPERSIA_API_KEY');

    this.client = new DispersiaClient(apiKey);
  }

  async send() {
    const { data, error } = await this.client.messages.send({
      templateId: 'tg_XXXXXXXXX',
      data: {
        name: 'Jane Doe',
      },
    });

    if (error) throw new BadRequestException(error);

    return data;
  }
}
