export interface FormTemplateInterface {
  type: 'text' | 'number' | 'boolean' | 'select';
  options?: {
    title: string;
    value: string;
  }
}

