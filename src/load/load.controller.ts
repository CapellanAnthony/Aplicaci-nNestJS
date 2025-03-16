import { Controller, Get } from '@nestjs/common';

@Controller('load')
export class LoadController {
  @Get('load-test')
  loadTest() {
    // Simulación de carga: una pequeña operación matemática
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += Math.sqrt(i);
    }
    sum = Math.sqrt(sum);
    return { message: 'Test de carga completado', result: sum };
  }
}
