declare type resources = 'CEP' | 'BANKS' | 'DDD' | 'CNPJ';
export declare class BRApiUtils {
  private readonly type
  private readonly code
  constructor();
  fetch({ type, code }: {
        type: resources;
        code: string;
    }): Promise<any>;
}
export {}
