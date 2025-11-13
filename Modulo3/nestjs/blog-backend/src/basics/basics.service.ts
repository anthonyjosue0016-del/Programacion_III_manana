import { Injectable } from '@nestjs/common';

@Injectable()

export class BasicsService {

    getMyfirstGet(): object {
        return { service: 'blog-backend',
                  controller: '/basics',
                  function:'Get Example'
         };
    }

    getConParametros(parametro: string): object {
        return { service: 'blog-backend',
                  controller: '/basics',
                  function:'Get con Parametros',
                  parametroRecibido: parametro
         };
    }

    postFunction(bodyPost: object): object {
        return {
            service: 'blog-backend',
            controller: '/basics tipo post',
            function: 'Ejemplo peticion Post',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
    return {
        service: 'blog-backend',
        controller: '/basics tipo put',
        function: 'Ejemplo petición PUT',
        bodyRecibido: bodyPost,
        parametro: parametro
    };
}

    deleteFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'blog-backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo peticion Delete',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }
}